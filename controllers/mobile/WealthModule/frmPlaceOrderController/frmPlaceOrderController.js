define(["CommonUtilities"], function(CommonUtilities) {
  return {
	ricCode: "",
	isinCode: "",
	lastPrice: "",
	instrumentName: "",
	orderMode: "Buy",
	watchlistFlow: null,
    instrumentMinimal:{},
	init: function () {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},


	preShow: function () {
		if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
			this.view.flxHeader.setVisibility(false);
			this.view.flxMainContainer.top = "0dp";
		} else {
			this.view.flxHeader.setVisibility(true);
		}
		this.watchlistFlow = this.watchlistFlow || kony.application.getPreviousForm().id === "frmWatchlist" ? true : null;
	},

	postShow: function () {
		this.initActions();
		this.setUIData();
		this.checkPermissions();
	},

	initActions: function () {
        var configManager = applicationManager.getConfigurationManager();
		this.view.customHeader.flxBack.onTouchEnd = this.onBack;
		this.view.customHeader.btnRight.onClick = this.cancelOnClick;
		this.view.btnContinue.onClick = this.confirmOnClick;
        if(configManager.getDeploymentGeography() === 'EUROPE'){
          this.view.lblTransferCash.onTouchEnd = this.onTransferCashEuro;
        } else {
          this.view.lblTransferCash.onTouchEnd = this.onTransferCash;
        }
		this.view.lblConvertCurrency.onTouchEnd = this.onConvertCurrency;
		this.view.btnTglBuy.onClick = this.onToggleConversionPreference.bind(this, 0);
		this.view.btnTglSell.onClick = this.onToggleConversionPreference.bind(this, 1);
		this.view.imgArrow.onTouchEnd = this.selectAccount;
		this.view.imgRefresh.onTouchEnd = this.onRefresh;
      
      //favourite imgFavourite
      if(this.view.imgStar.isVisible){
        this.updateFavList('get');
        this.view.imgStar.onTouchEnd = this.updateFavList;
      }
    },
  
    setStarValue: function(favoriteList){
      if (favoriteList){ 
      if(favoriteList.find(element=>element.RIC===this.ricCode)){        
        this.view.imgStar.src = "activestar.png";  
      }   
      else{
        this.view.imgStar.src = "inactivestar.png";
      }
      }   
    },

    updateFavList: function(operation){    
      var params = {};
      var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
       

      if(operation === 'get'){
 
        wealthModule.getFavoriteInstruments(params);

      }else{

        if(this.view.imgStar.src==="activestar.png"){
          this.view.imgStar.src = "inactivestar.png";
          operation = 'Remove';
        }else{
          this.view.imgStar.src="activestar.png";
          operation = 'Add';
        }

        params = {
          "RICCode": this.ricCode,
          "operation": operation
        };

        wealthModule.updateFavouriteInstruments(params);
      }

    },
	onRefresh: function () {
		var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
		var param = {
			"ISINCode": this.isinCode,
			"RICCode": this.ricCode
		}
		wealthMod.getPlaceOrderDetails(param);
	},
	selectAccount: function () {
		var navMan = applicationManager.getNavigationManager();
		var placeorderdata = navMan.getCustomInfo('frmPlaceOrder');
		var ricCode = placeorderdata.ricCode;
		if (kony.sdk.isNullOrUndefined(ricCode)) {
			placeorderdata.RICCode = this.ricCode;
		}
        var customerId = applicationManager.getUserPreferencesManager().primaryCustomerId.id;
		var params = {
			"customerId": customerId
		};
		//  var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
		//wealthModule.getPortfolioList(params);
		navMan.navigateTo('frmInvestmentAcc');
	},
	setCashBalance: function (data, currency) {
		var finalAmount;
		var finalCurrency;
		if (data.length === 1) {
			finalAmount = data[0].balance;
			finalCurrency = data[0].currency;
		} else {
			for (var num in data) {
				if (currency === data[num].currency) {
					finalAmount = data[num].balance;
					finalCurrency = data[num].currency;
					break;
				} else {
					finalAmount = data[0].balance;
					finalCurrency = data[0].currency;
				}
			}
		}
		var formatUtil = applicationManager.getFormatUtilManager();
		this.view.lblCashVal.text = formatUtil.formatAmountandAppendCurrencySymbol(finalAmount, finalCurrency);
		var navManager = applicationManager.getNavigationManager();
		var amount = navManager.getCustomInfo("frmInvestmentAcc");
		if (kony.sdk.isNullOrUndefined(amount)) {
			var amount = {};
			amount.finalAmount = finalAmount;
		} else {
			amount.finalAmount = finalAmount;
		}
		navManager.setCustomInfo('frmInvestmentAcc', amount);


	},
	setUIData: function () {
		var navMan = applicationManager.getNavigationManager();
		var formatUtil = applicationManager.getFormatUtilManager();
		var Data = navMan.getCustomInfo("frmPlaceOrder");
		var data1 = navMan.getCustomInfo("frmInstrumentDetails");
		var instrumentdetails = data1.instrumentDetails;
  //      var instrumentdetails1; 
      
      this.instrumentMinimal=instrumentdetails.instrumentMinimal[0];
      
//         if (instrumentdetails.instrumentMinimal[0]){
//         instrumentdetails1 = instrumentdetails.instrumentMinimal[0];
//           }
//       else{
//         instrumentdetails1 = instrumentdetails.instrumentMinimal;
//         }
      //var instrumentdetails1 = instrumentdetails.instrumentMinimal[0];
      
		var currentposition = data1.response;
		this.instrumentName = this.instrumentMinimal.instrumentName;
        this.closeRate = instrumentdetails.instrumentDetails?instrumentdetails.instrumentDetails.closeRate:this.instrumentMinimal.lastPrice;
		this.ricCode = this.instrumentMinimal.RICCode;
		this.isinCode = currentposition.ISIN || currentposition.ISINCode;
		this.setDetails(instrumentdetails, false);
		var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
		if (scope_WealthPresentationController.instrumentAcc == true) {
			var data = navMan.getCustomInfo("frmInvestmentAcc");
			var cashdata = data.cashData;
			if (kony.sdk.isNullOrUndefined(data.lblAccountName)) {
				this.view.lblAccount.text = wealthMod.getMaskedAccountName() || scope_WealthPresentationController.watchlistAccountName;
			} else {
				this.view.lblAccount.text = data.lblAccountName;
                scope_WealthPresentationController.watchlistAccountName = data.lblAccountName;
				scope_WealthPresentationController.watchlistPortfolioId =  data.portfolioId;
			}
			// this.view.lblCashVal.text = formatUtil.formatAmountandAppendCurrencySymbol(data.lblAccountBalValue, instrumentdetails1.referenceCurrency);
			//   this.view.lblCashVal.text = formatUtil.formatAmountandAppendCurrencySymbol(cashdata.totalCashBalance,cashdata.totalCashBalanceCurrency);
			//scope_WealthPresentationController.totalCashBalance=cashdata.totalCashBalance;
			this.setCashBalance(cashdata.cashAccounts, this.instrumentMinimal.priceCurrency);
		} else {
            var lblAccountText = kony.application.getPreviousForm().id === "frmWatchlist" || this.watchlistFlow ? scope_WealthPresentationController.watchlistAccountName : wealthMod.getMaskedAccountName();
			this.view.lblAccount.text = lblAccountText;
			//Need to check the cashbalance variable
			// this.view.lblCashVal.text = formatUtil.formatAmountandAppendCurrencySymbol(scope_WealthPresentationController.totalCashBalance, scope_WealthPresentationController.totalCashBalanceCurrency);
			this.setCashBalance(scope_WealthPresentationController.portfolioCashAccounts, this.instrumentMinimal.priceCurrency);
		}
		if (Data.buy === true) {
			this.onToggleConversionPreference(0);
		} else {
			this.onToggleConversionPreference(1);
		}
		if (scope_WealthPresentationController.instrumentAcc == true) {
			scope_WealthPresentationController.instrumentAcc = false;
			if ((scope_WealthPresentationController.currentPos != "") && (scope_WealthPresentationController.quantity != "")) {
				this.view.blCurrentPosVal.text = formatUtil.formatAmountandAppendCurrencySymbol(scope_WealthPresentationController.currentPos, instrumentdetails1.priceCurrency) + " (" + scope_WealthPresentationController.quantity + ")";
				this.view.flxCurrentPosition.isVisible = true;
			} else {
				this.view.flxCurrentPosition.isVisible = false;
			}
		} else {
			if (currentposition.holdingsId) {
                let q = formatUtil.deFormatAmount(currentposition.marketValPOS);
                let temp = formatUtil.formatAmountandAppendCurrencySymbol(q, currentposition.secCCy);
                this.view.blCurrentPosVal.text = temp + " (" + currentposition.quantity + ")";
				this.view.flxCurrentPosition.isVisible = true;

			} else {
				this.view.flxCurrentPosition.isVisible = false;

			}
		}
    
	},
	setDetails: function (productDetails, refresh) {
      let instrumentDetails = "";
      let instrumentDetailsDate = {};

      instrumentDetails = productDetails.instrumentDetails?productDetails.instrumentDetails:this.instrumentMinimal;

      if(productDetails.instrumentDetails)
        instrumentDetailsDate = {
          "timeReceived": ((instrumentDetails.timeReceived) ? instrumentDetails.timeReceived : "00:00:00"),
          "dateReceived": ((instrumentDetails.dateReceived) ? instrumentDetails.dateReceived : "")
        };
      else
        instrumentDetailsDate = {
          "timeReceived": ((this.instrumentMinimal.timeReceived) ? this.instrumentMinimal.timeReceived : "00:00:00"),
          "dateReceived": ((this.instrumentMinimal.lastPriceDate) ? this.instrumentMinimal.lastPriceDate : "")
        };

      var formatUtil = applicationManager.getFormatUtilManager();
      //  this.view.lblInstrument.text=instrumentDetails.instrumentName;
      if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone")
        this.view.lblInstrument.text = CommonUtilities.truncateStringWithGivenLength(this.instrumentMinimal.instrumentName,30);
      else 
        this.view.lblInstrument.text = this.instrumentMinimal.instrumentName;

      this.view.lblExchange.text = this.instrumentMinimal.ISINCode + " | " + this.instrumentMinimal.stockExchange;
      
      this.view.lblTime.text = "As on " + this.setDate(instrumentDetailsDate); 
		
		/* if (scope_WealthPresentationController.instrumentAcc == true) {
		     if ((scope_WealthPresentationController.currentPos!= "") && (scope_WealthPresentationController.quantity != "")) {
		         this.view.lblAmount.text=formatUtil.formatAmountandAppendCurrencySymbol(instrumentDetails.lastPrice,instrumentDetails.referenceCurrency);
		          }
		     else{
		     this.view.lblAmount.text=formatUtil.formatAmountandAppendCurrencySymbol('0.00',instrumentDetails.referenceCurrency);  
		     }
		   }
		  else{
		  this.view.lblAmount.text=formatUtil.formatAmountandAppendCurrencySymbol(instrumentDetails.lastPrice,instrumentDetails.referenceCurrency);
		  }*/
      if (instrumentDetails.lastPrice === 0 || instrumentDetails.lastPrice === "0.0") 
        this.view.lblAmount.text = formatUtil.formatAmountandAppendCurrencySymbol(this.closeRate, instrumentDetails.priceCurrency);
      else 
        this.view.lblAmount.text = formatUtil.formatAmountandAppendCurrencySymbol(instrumentDetails.lastPrice, instrumentDetails.priceCurrency);

      if(instrumentDetails.percentageChange){
		if (instrumentDetails.percentageChange === 0 || instrumentDetails.percentageChange === "0" || instrumentDetails.percentageChange === "0.00") {
			this.view.lblPL.skin = "sknlbl727272SSP17px";
			this.view.lblPL.text = instrumentDetails.netchange + "(" + instrumentDetails.percentageChange + "%" + ")";
		} else {
			if (instrumentDetails.percentageChange.substr(0, 1) === "-") {
				this.view.lblPL.skin = "sknIblEE0005SSPsb45px";
				if (instrumentDetails.netchange.substr(0, 1) === '-') {
					this.view.lblPL.text = instrumentDetails.netchange + "(" + instrumentDetails.percentageChange + "%" + ")";

				} else {
					this.view.lblPL.text = "-" + instrumentDetails.netchange + "(" + instrumentDetails.percentageChange + "%" + ")";

				}
			} else {
				this.view.lblPL.skin = "sknIbl2f8523SSPsb45px";
				if (instrumentDetails.percentageChange.substr(0, 1) === "+") {
					this.view.lblPL.text = "+" + instrumentDetails.netchange + "(" + instrumentDetails.percentageChange + "%" + ")";

				} else {
					this.view.lblPL.text = "+" + instrumentDetails.netchange + "(+" + instrumentDetails.percentageChange + "%" + ")";

				}

			}

		}
      }else{
        this.view.lblPL.isVisible=false;
      }
		//this.view.lblPL.text=instrumentDetails.percentageChange.substr(0,1)+instrumentDetails.netchange+"("+instrumentDetails.percentageChange+"%"+")";

      
    },
	setDate: function (instrumentDate) {
      var shortMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

      let month = String(shortMonths.indexOf(instrumentDate.dateReceived.substring(3,6).toUpperCase())).padStart(2, '0');
      let day = instrumentDate.dateReceived.substring(0,2);
      let year = instrumentDate.dateReceived.substring(7,12);
      var dateFormat = "";

      dateFormat = new Date(Date.UTC(year, month, day, instrumentDate.timeReceived.substring(0,2), instrumentDate.timeReceived.substring(3,5), instrumentDate.timeReceived.substring(6,8)));
      dateFormat = dateFormat.toString().split('(');

      var time = dateFormat[0].split(" ")[4].split(":");

      let firstPart = applicationManager.getFormatUtilManager().getTwelveHourTimeString(time[0]+': '+time[1]);
      var secondPart = "";  

      if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone")
        secondPart = dateFormat[1].substring(0,dateFormat[1].length-1);
      else
        dateFormat[1].split(" ").map(function(elem) {
          for (let i = 0; i <= elem.length-1; i++) {
            secondPart = secondPart + elem[i].charAt(i);
            return elem[i].charAt(i);
          }

        });   

      let trdPart = dateFormat[0].split(' ')[1] + ' ' + dateFormat[0].split(' ')[2];

      return firstPart + ' ' + secondPart + ' ' + trdPart;

    
	},

    onTransferCash: function(){
//       var fastTransfer = applicationManager.getModulesPresentationController("TransferModule");
//       var navManager = applicationManager.getNavigationManager();
//       data = {};
//       navManager.setCustomInfo("frmTransfersFromAccount", data);
//       fastTransfer.commonFunctionForNavigation("frmTransfersFromAccount");
      
      
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navMan = applicationManager.getNavigationManager();
      navMan.setEntryPoint("centralmoneymovement","frmDashboardAggregated");
      var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
      moneyMovementModule.getFromAndToAccounts();
      moneyMovementModule.clearMMFlowAtributes();
      
    },
    onTransferCashEuro: function(){
//       var fastTransfer = applicationManager.getModulesPresentationController("TransferModuleEurope");
//       var navManager = applicationManager.getNavigationManager();
//       data = {};
//       navManager.setCustomInfo("frmEuropeTransferFromAccount", data);
//       fastTransfer.commonFunctionForNavigation("frmEuropeTransferFromAccount");
      
      
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navMan = applicationManager.getNavigationManager();
      navMan.setEntryPoint("europeTransferFlow","frmDashboardAggregated");
      var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      transferModPresentationController.setEuropeFlowType("EXTERNAL");
      transferModPresentationController.getFromAndToAccounts();
      transferModPresentationController.clearEuropeFlowAtributes();

    },
	onConvertCurrency: function () {
		var navigationMan = applicationManager.getNavigationManager();
		navigationMan.navigateTo('frmSelectCurrency');
	},
	onToggleConversionPreference: function (option) {
		var navMan = applicationManager.getNavigationManager();

		var Data = navMan.getCustomInfo("frmPlaceOrder");

		let activeSkin = 'sknBtnFFFFFFBdr10px';
		let inactiveSkin = 'sknbtn000000SSPSemiBold15px';
		if (!option) {
			this.orderMode = 'Buy';
			this.view.btnTglBuy.skin = activeSkin;
			this.view.btnTglSell.skin = inactiveSkin;
			this.view.btnTglBuy.focusSkin = activeSkin;
			Data.buy = true;
		} else {
			this.orderMode = 'Sell';
			this.view.btnTglBuy.skin = inactiveSkin;
			this.view.btnTglSell.skin = activeSkin;
			this.view.btnTglSell.skin = activeSkin;
			Data.buy = false;
		}
		navMan.setCustomInfo("frmPlaceOrder", Data);

	},

	onBack: function () {

		var navigationMan = applicationManager.getNavigationManager();
		navigationMan.goBack();
	},

	cancelOnClick: function () {
      if (this.watchlistFlow === true) {
        var ntf = new kony.mvc.Navigation("frmWatchlist");
		ntf.navigate();
      } else {
        var params = {
			"portfolioId": scope_WealthPresentationController.portfolioId,
			"navPage": "Portfolio",
			"graphDuration": "OneY"
		};

		var wealthModule = applicationManager.getModulesPresentationController("WealthModule");

		wealthModule.getPortfolioAndGraphDetails(params);
      }
	},


	confirmOnClick: function () {
		scope_WealthPresentationController.placeOrder = true;
		var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
		//var data = wealthMod.getWealthObject();
		var nav = applicationManager.getNavigationManager();
		applicationManager.getPresentationUtility().showLoadingScreen();

		nav.setCustomInfo("frmInstrumentOrder", {
			orderMode: this.orderMode
		});
		nav.navigateTo('frmInstrumentOrder');
		/*var param={
		  "buyCurrency":data.buyCurrency,
		  "sellCurrency":data.sellCurrency,
		  "buyAmount":data.buyAmount,
		  "sellAmount":data.sellAmount
		}
      
		wealthMod.createOrder(param);*/

	},
	bindGenericError: function (errorMsg) {
		applicationManager.getPresentationUtility().dismissLoadingScreen();
		var scopeObj = this;
		applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
	},
  checkPermissions: function(){
      var configManager =  applicationManager.getConfigurationManager();
      var checkUserPermission = function (permission) {
        return applicationManager.getConfigurationManager().checkUserPermission(permission);
      }
      this.view.imgStar.isVisible = configManager.addToWatchlistPermissions().some(checkUserPermission);
      this.view.btnContinue.isVisible = configManager.mgmtOrderVerifyPermissions().some(checkUserPermission);
       if(scope_WealthPresentationController.isJointAccount){
        this.view.btnContinue.setVisibility(false);
      }
      let watchListSellPermission = configManager.sellOrderPermissions().some(checkUserPermission);
      let watchListBuyPermission = configManager.buyOrderPermissions().some(checkUserPermission);
      this.view.flxTglSell.isVisible = watchListSellPermission;
      this.view.flxTglBuy.isVisible = watchListBuyPermission; 
      if (watchListSellPermission === true && watchListBuyPermission === false) {
          this.view.flxTglSell.right = "0dp";
          this.view.flxTglSell.width = "100%";
      } else if (watchListBuyPermission === true && watchListSellPermission === false) {
          this.view.flxTglBuy.left = "0dp";
          this.view.flxTglBuy.width = "100%";       
      }
    }
  };
});
