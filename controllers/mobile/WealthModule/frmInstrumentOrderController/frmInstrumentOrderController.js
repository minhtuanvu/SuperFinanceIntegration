define("WealthModule/userfrmInstrumentOrderController", {
    ricCode: "",
  isinCode:"",
  quantityValue:"0",
  instrumentName:"",
  priceValue:'0.00',
    lastPrice: "",
    quantity: "",
    keypadString: '0',
    estimatedValue: "",
    isPeriodUsed: false,
    timerCounter: 0,
    error: '0',
    activeInput: null,
    ORDER_MODE: {
        BUY: 'Buy',
        SELL: 'Sell'
    },
    ORDER_TYPE: {
        MARKET: 'Market',
        LIMIT: 'Limit',
        STOPLOSS: 'Stop Loss',
        STOPLIMIT: 'Stop Limit'
    },
    VALIDITY: {
        DAYORDER: 'Day Order',
        GOODTILL: 'Good Till Canceled'
    },
    orderMode: null,
    orderType: null,
    validity: null,
    sellAllFlag: false,
    currentCurrency:"",
    holdingData: {
        ISINCode: 'USAMAZON2345',
        instrumentPrice: 2399.44,
        currentBalance: 10000,
        currentQuantity: 24,
        currency: 'USD'
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            // this.view.flxHeader.isVisible = false;
            this.view.flxHeader.setVisibility(false);
            this.view.flxMainContainer.top = "0dp";
        }
        //     this.view.lblNote.text=kony.i18n.getLocalizedString("kony.tab.common.Note")+" "+kony.i18n.getLocalizedString("i18n.wealth.approximateAmountNote");
        //     var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        this.setQuantityError(null);
        this.view.lblError.setVisibility(false);
    },
    postShow: function() {
		this.toggleKeypad(0, this.view.flxQuantityWrapper);
        this.view.flxQuantityWrapper.skin = "sknflxe3e3e3border";
        this.view.flxLimitPriceWrapper.skin = "sknflxe3e3e3border";
        this.view.flxStopPriceWrapper.skin = "sknflxe3e3e3border";
        var nav = applicationManager.getNavigationManager();
        var orderData = nav.getCustomInfo("frmInstrumentOrder");
        var instrumentDetailData = nav.getCustomInfo("frmInstrumentDetails");
        if(instrumentDetailData.response){
        this.currentCurrency= instrumentDetailData.response.secCCy;
        }
        
        /* const data = {
           orderMode : orderData.orderMode || this.ORDER_MODE.BUY,
           orderType : orderData.orderType || this.ORDER_TYPE.MARKET,
           validity : orderData.validity || this.VALIDITY.DAYORDER
         }*/
        if(scope_WealthPresentationController.isFrmOrder === true){
        var orderMode = orderData.orderMode;
        var orderType = orderData.orderModeType;
        this.orderType = orderType;
        var validity = orderData.validity;
        this.validity = validity;
          if(validity === "Day Order" || validity ==="GTD" ){
            this.view.lblValidityValue.text="Day Order";
          }else{
             this.view.lblValidityValue.text="Good Till Canceled";
          }
        this.setOrderMode(orderMode);
        this.setOrderType(orderType);
        this.keypadString= orderData.quantity;
        this.view.lblAmount.text = orderData.quantity;
        this.view.lblLimitPriceField.text = orderData.limitPrice;
        this.view.lblStopPriceField.text = orderData.stopPrice;
        if(orderMode === 'Sell'){  
        this.sellAllFlag = true;
        this.view.lblSellQuantity.text = '(' + (orderData.quantity || data.response.totalValue) + ')';
        this.view.imgToggle.src = this.sellAllFlag ? 'checkboxtick.png' : 'checkboxempty.png';
        }
        else{
        this.sellAllFlag = false;
        this.view.imgToggle.src = this.sellAllFlag ? 'checkboxtick.png' : 'checkboxempty.png';
        }
            this.updateQuantityValue();
      
        this.setHoldingsInfo();
        this.validateQuantity();
        scope_WealthPresentationController.isFrmOrder = false;
      }
      else{
        var Data = nav.getCustomInfo("frmPlaceOrder");
        if (Data !== undefined){
        var mode = Data.buy ? this.ORDER_MODE.BUY : this.ORDER_MODE.SELL;
        }
        else{
        var mode =  orderData.orderMode;
        }
        var orderMode = orderData.order || mode;
        var orderType = orderData.orderType || this.ORDER_TYPE.LIMIT;
        this.orderType = orderType;
        //this.sellAllFlag = false;
        //this.view.imgToggle.src = this.sellAllFlag ? 'checkboxtick.png' : 'checkboxempty.png';
        var validity = orderData.validity || this.VALIDITY.DAYORDER;
        this.validity = validity;
       if(validity === "Day Order" || validity ==="GTD" ){
            this.view.lblValidityValue.text="Day Order";
          }else{
             this.view.lblValidityValue.text="Good Till Canceled";
          }
        this.setOrderMode(orderMode);
        if (scope_WealthPresentationController.instrumentOrder === true || scope_WealthPresentationController.placeOrder === true) {
            var navManager = applicationManager.getNavigationManager();
          var qty= navManager.getCustomInfo("frmOrderType");
          if(scope_WealthPresentationController.placeOrder){
            this.view.lblAmount.text = '0';
          }else{
             this.view.lblAmount.text = qty ? qty : '0';
          }
         
            this.view.lblLimitPriceField.text = '0.00';
            this.view.lblStopPriceField.text = '0.00';
            this.view.btnContinue.skin = "sknBtnE2E9F0Rounded";
            this.view.btnContinue.setEnabled(false);
            var formatUtil = applicationManager.getFormatUtilManager();
            if(this.orderType === "Market"){
            var estValue = parseFloat(this.view.lblAmount.text) * this.lastPrice;
            this.view.lblEstimatedValue.text = formatUtil.formatAmountandAppendCurrencySymbol(estValue, this.currentCurrency);
            }else{
              this.view.lblEstimatedValue.text = formatUtil.formatAmountandAppendCurrencySymbol('0', this.currentCurrency);
            }
            
            this.keypadString = '0';
            this.quantityValue= qty ? qty : '0';
            this.priceValue='0.00';
            this.sellAllFlag = false;
            this.view.imgToggle.src = this.sellAllFlag ? 'checkboxtick.png' : 'checkboxempty.png';
           if(validity === "Day Order" || validity ==="GTD" ){
            this.view.lblValidityValue.text="Day Order";
          }else{
             this.view.lblValidityValue.text="Good Till Canceled";
          }
            //this.view.lblValidityValue.text = validity;
            this.setOrderType(orderType);
            if(scope_WealthPresentationController.placeOrder === true){
            this.setHoldingsInfo();
            }
            scope_WealthPresentationController.instrumentOrder = false;
            scope_WealthPresentationController.placeOrder = false;
           }
      }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.checkAndEnableConfirm();
        this.initActions();
    },
    bindGenericError: function(errorRes){
      if(errorRes.serverErrorRes.errormessage){
		this.view.lblError.text = errorRes.serverErrorRes.errormessage;
          }
      else if(errorRes.serverErrorRes.errormsg){
        this.view.lblError.text = errorRes.serverErrorRes.errormsg;
      }
      else if(errorRes.errorMessage){
        this.view.lblError.text = errorRes.errorMessage;
      }
     else if(errorRes.errormessage){
        this.view.lblError.text = errorRes.errormessage;
     }
       else{
          this.view.lblError.text = "Unknown Error";
          }
      this.view.lblError.setVisibility(true);
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.customHeader.flxBack.onClick = this.backOnClick;
        this.view.flxQuantityWrapper.onClick = this.toggleKeypad.bind(this, 1, this.view.flxQuantityWrapper);
        this.view.flxLimitPriceWrapper.onClick = this.toggleKeypad.bind(this, 1, this.view.flxLimitPriceWrapper);
        this.view.flxStopPriceWrapper.onClick = this.toggleKeypad.bind(this, 1, this.view.flxStopPriceWrapper);
        this.view.flxDone.onClick = this.toggleKeypad.bind(this, 0, null);
        this.view.flxToggle.onClick = this.toggleSellAll;
        this.view.imgRefresh.onTouchEnd = this.onRefresh;
        var nav = applicationManager.getNavigationManager();
        var instrumentorderdata = nav.getCustomInfo('frmInstrumentOrder');

        this.view.flxToImg.onClick = function() {
          if(instrumentorderdata.orderModeType !== undefined || instrumentorderdata.orderModeType !== null){
                instrumentorderdata.orderType = instrumentorderdata.orderModeType;
            }
            else{
            var orderType = instrumentorderdata.orderType;
            if (kony.sdk.isNullOrUndefined(orderType)) {
                instrumentorderdata.orderType = this.orderType;
            }
            }
            nav.navigateTo("frmOrderType");
        }

        this.view.flxFromAmountImage.onClick = function() {
            var validity = instrumentorderdata.validity;
            if (kony.sdk.isNullOrUndefined(validity)) {
                instrumentorderdata.validity = this.validity;
            }
            nav.navigateTo("frmValidity");
        }

        this.view.imgClear.onTouchEnd = this.clearData;
        this.view.imgClear1.onTouchEnd = this.clearData;
        this.view.imgClear2.onTouchEnd = this.clearData;
        var data = nav.getCustomInfo('frmInstrumentDetails');
      if(data.response !== undefined){
      if((data.response.quantity || data.response.totalValue) !== undefined){
        this.view.lblSellQuantity.text = '(' + (data.response.quantity || data.response.totalValue) + ')';
        }
        }
        else{
            this.view.lblSellQuantity.text = '(' + (instrumentorderdata.quantity || instrumentorderdata.totalValue) + ')';
        }
       // this.view.lblSellQuantity.text = '(' + (data.response.quantity || data.response.totalValue) + ')';
    },
    onRefresh: function() {
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        var param = {
            "ISINCode": this.isinCode,
          "RICCode":this.ricCode
        }
        wealthMod.getPlaceOrderDetails(param);
    },
    setDetails: function(response) {
        var data = response.instrumentDetails;
        var formatUtil = applicationManager.getFormatUtilManager();
        this.view.lblInstrumentName.text = data.instrumentName;
        if (data.lastPrice === 0) {
            this.view.lblCurrentValue.text = formatUtil.formatAmountandAppendCurrencySymbol(this.lastPrice, data.priceCurrency);
        } else {
            this.lastPrice = data.lastPrice;
            this.view.lblCurrentValue.text = formatUtil.formatAmountandAppendCurrencySymbol(data.lastPrice, data.priceCurrency);
        }
        // this.view.lblWeightVal.text=value1+"%";
        if (data.percentageChange === 0 || data.percentageChange === "0" || data.percentageChange === "0.00") {
            this.view.lblPriceMovement.skin = "sknlbl727272SSP17px";
            this.view.lblPriceMovement.text = data.netchange + "(" + data.percentageChange + "%" + ")";

        } else {
            if (data.percentageChange.substr(0, 1) === "-") {
                this.view.lblPriceMovement.skin = "sknIblEE0005SSPsb45px";
              if(data.netchange.substr(0, 1)==='-'){
                this.view.lblPriceMovement.text = data.netchange + "(" + data.percentageChange + "%" + ")";

              }else{
                this.view.lblPriceMovement.text = '-'+data.netchange + "(" + data.percentageChange + "%" + ")";

              }
                
            } else {
                this.view.lblPriceMovement.skin = "sknIlbl2F8523SSPR13px";
                if (data.percentageChange.substr(0, 1) === "+") {
                    this.view.lblPriceMovement.text = "+" + data.netchange + "(" + data.percentageChange + "%" + ")";

                } else {
                    this.view.lblPriceMovement.text = "+" + data.netchange + "(+" + data.percentageChange + "%" + ")";

                }

            }
        }
        this.setDate(data);
        var inputField = this.view.flxQuantityWrapper;
        let children = inputField.widgets();
        this.activeInput = children[1];
        this.keypadString = this.activeInput.text;
        this.validateQuantity();
    },
    setHoldingsInfo: function() {
        var formatUtil = applicationManager.getFormatUtilManager();
        var navManager = applicationManager.getNavigationManager();
        var data1 = navManager.getCustomInfo('frmInstrumentDetails');
        var orderData = navManager.getCustomInfo('frmInstrumentOrder');
       var currentposition = data1.response;
      var data="";
        //var data = data1.instrumentDetails && data1.instrumentDetails.instrumentDetails ? data1.instrumentDetails.instrumentDetails : this.holdingData;
      if(data1.instrumentDetails.instrumentMinimal) {
          data= data1.instrumentDetails.instrumentMinimal;
        if(Object.keys(data1.instrumentDetails.instrumentMinimal).length > 0 && data1.instrumentDetails.instrumentMinimal[0]){
          data=data1.instrumentDetails.instrumentMinimal[0];
        }
      }
        else{
          data= this.holdingData;
        } 
      if(scope_WealthPresentationController.isFrmOrder === true){
          this.ricCode = orderData.RICCode;
          this.isinCode=orderData.ISIN;
          this.quantity = orderData.quantity;
           this.view.lblInstrumentName.text = data.instrumentName;
          this.instrumentName=data.instrumentName;
     
        }
      else{
       
        this.ricCode = currentposition.RICCode;
        this.isinCode=currentposition.ISIN;
        this.quantity = currentposition.quantity;
         this.view.lblInstrumentName.text = currentposition.description;
        this.instrumentName=currentposition.description;
     
      }
      //  var data2 = data1.instrumentDetails
        this.lastPrice = data.lastPrice;
        if (data !== this.holdingData) {
            this.holdingData = data;
        }
   //     this.view.lblInstrumentName.text = data.instrumentName;
        
        if (data.lastPrice === 0) {
            this.view.lblCurrentValue.text = formatUtil.formatAmountandAppendCurrencySymbol(this.lastPrice, data.priceCurrency);
        } else {
            this.lastPrice = data.lastPrice;
            this.view.lblCurrentValue.text = formatUtil.formatAmountandAppendCurrencySymbol(data.lastPrice, data.priceCurrency);
        } // this.view.lblWeightVal.text=value1+"%";
      
                if(data.percentageChange){

        if (data.percentageChange === 0 || data.percentageChange === "0" || data.percentageChange === "0.00") {
            this.view.lblPriceMovement.skin = "sknlbl727272SSP17px";
            this.view.lblPriceMovement.text = data.netchange + "(" + data.percentageChange + "%" + ")";

        } else {
            if (data.percentageChange.substr(0, 1) === "-") {
                this.view.lblPriceMovement.skin = "sknIblEE0005SSPsb45px";
              if(data.netchange.substr(0, 1) === "-"){
                 this.view.lblPriceMovement.text = data.netchange + "(" + data.percentageChange + "%" + ")";

              }else{
                this.view.lblPriceMovement.text = '-'+data.netchange + "(" + data.percentageChange + "%" + ")";

              }
                
            } else {
                this.view.lblPriceMovement.skin = "sknIlbl2F8523SSPR13px";
                if (data.percentageChange.substr(0, 1) === "+") {
                    this.view.lblPriceMovement.text = "+" + data.netchange + "(" + data.percentageChange + "%" + ")";

                } else {
                    this.view.lblPriceMovement.text = "+" + data.netchange + "(+" + data.percentageChange + "%" + ")";

                }


            }
          }
        }
      else{
            this.view.lblPriceMovement.isVisible=false;
          }
        if (data.quantity === 0) {
            // Disable Sell All Toggle
            this.view.flxToggle.onClick = null;
            this.view.imgToggle.src = 'disable.png';
        }
        this.setDate(data);
    },
    // Set up UI for either BUY or SELL
    setOrderMode: function(mode) {
        const MODE = this.ORDER_MODE;
        //  switch(mode) {
        //   case MODE.BUY : 
        if (mode === MODE.BUY) {
            this.view.title = kony.i18n.getLocalizedString("i18n.wealth.buy");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("i18n.wealth.buy");
            this.view.flxSellAllToggle.setVisibility(false);
            this.view.flxSeparator2.setVisibility(false);
            this.orderMode = this.ORDER_MODE.BUY;
        } else {
            //  break;
            //  case MODE.SELL : 
            this.view.title = kony.i18n.getLocalizedString("i18n.wealth.sell");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("i18n.wealth.sell");
            this.view.flxSellAllToggle.setVisibility(true);
            this.view.flxSeparator2.setVisibility(true);
            this.orderMode = this.ORDER_MODE.SELL;
            //   break;
        }
    },
    // Set up UI for the particular Order Type
    setOrderType: function(type) {
        const TYPE = this.ORDER_TYPE;
        //this.resetUI();
        //switch(type) {
        //  case TYPE.MARKET:
        if (type === "Market") {
            this.view.lblOrderTypeValue.text = 'Market';
            this.orderType = TYPE.MARKET;
            this.view.flxQuantityField.width = '100%';
            this.view.flxFieldsRow1.layoutType = kony.flex.FLOW_HORIZONTAL;
            this.view.flxLimitPrice.setVisibility(false);
            this.view.flxStopPrice.setVisibility(false);
            //break;
        } else if (type === "Limit") {
            // case TYPE.LIMIT:
            this.view.lblOrderTypeValue.text = 'Limit';
            this.orderType = TYPE.LIMIT;
            this.view.flxQuantityField.width = '50%';
            this.view.flxFieldsRow1.layoutType = kony.flex.RESPONSIVE_GRID;
            this.view.flxQuantityField.responsiveConfig.span.portrait = 6;
            this.view.flxStopPrice.setVisibility(false);
            this.view.flxLimitPrice.setVisibility(true);
            // break;
        } else if (type === "Stop Loss") {
            //case TYPE.STOPLOSS:
            this.view.lblOrderTypeValue.text = 'Stop Loss';
            this.view.lblStopPrice.text = 'Stop Loss';
            this.orderType = TYPE.STOPLOSS;
            this.view.flxQuantityField.width = '50%';
            this.view.flxStopPriceWrapper.width = '98%';
            this.view.flxFieldsRow1.layoutType = kony.flex.RESPONSIVE_GRID;
            this.view.flxQuantityField.responsiveConfig.span.portrait = 6;
            this.view.flxLimitPrice.setVisibility(false);
            this.view.flxStopPrice.setVisibility(true);
            // break;
        } else {
            //case TYPE.STOPLIMIT:
            this.view.lblOrderTypeValue.text = 'Stop Limit';
            this.view.lblStopPrice.text = 'Stop Price';
            this.orderType = TYPE.STOPLIMIT;
            this.view.flxQuantityField.width = '50%';
            this.view.flxStopPriceWrapper.width = '95%';
            this.view.flxFieldsRow1.layoutType = kony.flex.RESPONSIVE_GRID;
            this.view.flxQuantityField.responsiveConfig.span.portrait = 6;
            this.view.flxLimitPrice.setVisibility(true);
            this.view.flxStopPrice.setVisibility(true);
            //  break;  
        }
        // }
    },
    resetUI: function() {
        console.log(this.view.flxQuantityField.responsiveConfig.span.portrait);
        this.view.flxFieldsRow1.layoutType = kony.flex.RESPONSIVE_GRID;
        //     this.view.flxQuantityField.responsiveConfig = {
        //       "span" : {
        //         "portrait": 12,
        //         "landscape": 12
        //       }
        //     };
        this.view.flxLimitPrice.setVisibility(false);
        this.view.flxStopPrice.setVisibility(false);
    },
    toggleSellAll: function() {
        this.sellAllFlag = !this.sellAllFlag;
        this.view.imgToggle.src = this.sellAllFlag ? 'checkboxtick.png' : 'checkboxempty.png';
        if (this.sellAllFlag) {
            this.updateQuantityValue();
            var inputField = this.view.flxQuantityWrapper;
            let children = inputField.widgets();
            this.activeInput = children[1];
            this.keypadString = this.activeInput.text;
          this.quantityValue=this.activeInput.text.replace(/,/g,"");
            this.validateQuantity();
        } else {
          var inputField = this.view.flxQuantityWrapper;
        let children = inputField.widgets();
        this.activeInput = children[1];
            this.clearData();
        }
      this.checkAndEnableConfirm();
    },
    setReference: function(amount) {
        if (amount) {
            this.keypadString = amount;
        } else {
            this.keypadString = "0";
        }
    },
    clearData: function() {
        this.keypadString = '0';
     if (this.activeInput.id === 'lblLimitPriceField') {
            this.keypadString = '0.00';
            this.view.lblLimitPriceField.text = '0.00';
          this.priceValue='0.00';
        } else if (this.activeInput.id === 'lblStopPriceField') {
            this.keypadString = '0.00';
            this.view.lblStopPriceField.text = '0.00';
          if(this.orderType==="Stop Loss"){
            this.priceValue='0.00';
          }
        }else{
          this.sellAllFlag = false;
            this.view.imgToggle.src = this.sellAllFlag ? 'checkboxtick.png' : 'checkboxempty.png';
          this.view.lblAmount.text = '0';
          this.quantityValue='0';
            var formatUtil = applicationManager.getFormatUtilManager();
            this.view.lblEstimatedValue.text = formatUtil.formatAmountandAppendCurrencySymbol('0', this.currentCurrency);
       
        }
    },
    setDate: function(instrumentDetails = null) {
        var date = new Date();
        var hours;
        var minutes;
        if (instrumentDetails && instrumentDetails.lastPriceDate) {
//             var time = instrumentDetails.timeReceived.split(":");
//             hours = time[0];
//             minutes = time[1];
        } else {
            hours = date.getHours();
            minutes = date.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
        }
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        //var strTime = hours + ':' + minutes + ' ' + ampm;
        var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var month = shortMonths[date.getMonth()];
        //return strTime;
        if (instrumentDetails && instrumentDetails.lastPriceDate) {
            var date = instrumentDetails.lastPriceDate.split(" ");
           // this.view.lblInstrumentValueTime.text = "As of " + strTime + " " + date[1] + " " + date[0];
          this.view.lblInstrumentValueTime.text = "As on "+ date[1] + " " + date[0];
        } else {
           // this.view.lblInstrumentValueTime.text = "As of " + strTime + " " + month + " " + String(date.getDate()).padStart(2, '0')
        this.view.lblInstrumentValueTime.text = "As on "+ month + " " + String(date.getDate()).padStart(2, '0');
        }
    },
    cancelOnClick: function() {
      var controller = applicationManager.getPresentationUtility().getController('frmPlaceOrder', true);
      if (controller.watchlistFlow === true) {
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
    backOnClick: function() {
        scope_WealthPresentationController.isPortfolio=true;
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        wealthMod.commonFunctionForgoBack();
    },
    continueOnClick: function() {
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        var nav = applicationManager.getNavigationManager();
        var formatUtil = applicationManager.getFormatUtilManager();
        var data1 = nav.getCustomInfo('frmInstrumentDetails');
        var instrumentOrderData=nav.getCustomInfo('frmInstrumentOrder');
      //let instrumentData = data1.instrumentDetails && data1.instrumentDetails.instrumentDetails ? data1.instrumentDetails.instrumentDetails : this.holdingData;
        scope_WealthPresentationController.lastPrice = this.lastPrice;
        let customerId = "";
      let userMan = applicationManager.getUserPreferencesManager();
       if (userMan.backendIdentifier && userMan.backendIdentifier  !== "") {
            customerId = userMan.backendIdentifier;
          } else if(userMan.primaryCustomerId.id && userMan.primaryCustomerId.id !== "") {
            customerId = userMan.primaryCustomerId.id;
          } else {
            customerId = userMan.accessibleCustomerIds[0].id;
          }
       let instrumentData="";
      if(data1.instrumentDetails.instrumentMinimal) {
        instrumentData= data1.instrumentDetails.instrumentMinimal;
       if(Object.keys(data1.instrumentDetails.instrumentMinimal).length > 0 && data1.instrumentDetails.instrumentMinimal[0]){
        instrumentData=data1.instrumentDetails.instrumentMinimal[0];
       }
      }
      else{
        instrumentData= this.holdingData;
      } 
      if(instrumentOrderData.orderReference){
        let typ = this.orderType;
        const orderData = {
            orderType: this.orderType === "Stop Limit" ? "STOP.LIMIT":this.orderType === "Stop Loss"?"STOP":typ.toUpperCase(),
            quantity: (this.view.lblAmount.text).replace(/[,.]/g,''),
            orderId : instrumentOrderData.orderReference,
            limitPrice: (this.orderType === this.ORDER_TYPE.LIMIT || this.orderType === this.ORDER_TYPE.STOPLIMIT) ?this.view.lblLimitPriceField.text.replace(/,/g,"") : 0,
            price : (this.orderType === this.ORDER_TYPE.STOPLIMIT || this.orderType === this.ORDER_TYPE.STOPLOSS) ? this.view.lblStopPriceField.text.replace(/,/g,"") : "",
            validate_only : "",
            validity : this.view.lblValidityValue.text ===  "Day Order" ? "GTD" :"GTC"
       }
        instrumentOrderData.quantity = this.view.lblAmount.text;
        instrumentOrderData.netAmount = this.estimatedValue;
        instrumentOrderData.tradeCurrency = instrumentOrderData.instrumentCurrency;
        instrumentOrderData.order = instrumentOrderData.orderMode;
        instrumentOrderData.price= orderData.price;
        instrumentOrderData.limitPrice= orderData.limitPrice;
        nav.setCustomInfo('frmInstrumentOrder', instrumentOrderData);
        wealthMod.modifyMarketOrder(orderData);
       }
      else{
        let tempMode = this.orderMode;
        let tempType = this.orderType;
        const orderData = {
            ISINCode: instrumentData.ISINCode,
            netAmount: this.estimatedValue,
            order: (tempMode.length == 4)? tempMode.toUpperCase().slice(0, -1): tempMode.toUpperCase(),
            orderType: tempType.toUpperCase(),
            quantity: (this.view.lblAmount.text).replace(/[,.]/g,''),
            validity: this.view.lblValidityValue.text === "Day Order" ? "GTD" :"GTC",
            limitPrice: (this.orderType === this.ORDER_TYPE.LIMIT || this.orderType === this.ORDER_TYPE.STOPLIMIT) ?this.view.lblLimitPriceField.text.replace(/,/g,"") : 0,
            portfolioId : scope_WealthPresentationController.portfolioId,
            customerId : customerId,
            instrumentId : instrumentData.instrumentId,
            stockExchange : instrumentData.stockExchange,
            price :(this.orderType === this.ORDER_TYPE.STOPLIMIT || this.orderType === this.ORDER_TYPE.STOPLOSS) ? this.view.lblStopPriceField.text.replace(/,/g,"") : "" ,
            dealStatus : "TRANSMITTED",	
            validate_only : "true",
            tradeCurrency  : instrumentData.priceCurrency
      }
        wealthMod.createMarketOrder(orderData);
        orderData.order = tempMode;
        orderData.orderType = tempType;
        nav.setCustomInfo('frmInstrumentOrder', orderData);
        
      }
        
      
        
    },
    // Toggle keypad and disable Confirm button
    toggleKeypad: function(enableKeypad, inputField = null) {
      this.view.lblError.setVisibility(false);
      this.view.lblQuantityError.setVisibility(false);
        var formatUtil = applicationManager.getFormatUtilManager();
        if (inputField) {
            let children = inputField.widgets();
            this.activeInput = children[1];
            this.keypadString = this.activeInput.text.replace(/,/g,"");
        }
        this.view.flxKeypad.setVisibility(!!enableKeypad);
        this.view.flxButton.setVisibility(!!!enableKeypad);
        if (this.activeInput.id === 'lblAmount') {
            this.view.imgClear.isVisible = !!enableKeypad;
            this.view.imgClear1.isVisible = false;
            this.view.imgClear2.isVisible = false;
        	if (this.view.imgClear.isVisible === true){
           	  this.view.flxQuantityWrapper.skin = "flxBlueFocus";
              this.view.flxLimitPriceWrapper.skin = "sknflxe3e3e3border";
              this.view.flxStopPriceWrapper.skin = "sknflxe3e3e3border"
            }
           else{
              this.view.flxQuantityWrapper.skin = "sknflxe3e3e3border";
              this.view.flxLimitPriceWrapper.skin = "sknflxe3e3e3border";
              this.view.flxStopPriceWrapper.skin = "sknflxe3e3e3border"
            }
          }
        else if (this.activeInput.id === 'lblLimitPriceField') {
            this.view.imgClear1.isVisible = !!enableKeypad;
            this.view.imgClear.isVisible = false;
            this.view.imgClear2.isVisible = false;
         	if (this.view.imgClear1.isVisible === true){
           	  this.view.flxQuantityWrapper.skin = "sknflxe3e3e3border";
              this.view.flxLimitPriceWrapper.skin = "flxBlueFocus";
              this.view.flxStopPriceWrapper.skin = "sknflxe3e3e3border"
            }
           else{
              this.view.flxQuantityWrapper.skin = "sknflxe3e3e3border";
              this.view.flxLimitPriceWrapper.skin = "sknflxe3e3e3border";
              this.view.flxStopPriceWrapper.skin = "sknflxe3e3e3border"
            }
        } else {
            this.view.imgClear2.isVisible = !!enableKeypad;
            this.view.imgClear1.isVisible = false;
            this.view.imgClear.isVisible = false;
          	if (this.view.imgClear2.isVisible === true){
           	  this.view.flxQuantityWrapper.skin = "sknflxe3e3e3border";
              this.view.flxLimitPriceWrapper.skin = "sknflxe3e3e3border";
              this.view.flxStopPriceWrapper.skin = "flxBlueFocus"
            }
           else{
              this.view.flxQuantityWrapper.skin = "sknflxe3e3e3border";
              this.view.flxLimitPriceWrapper.skin = "sknflxe3e3e3border";
              this.view.flxStopPriceWrapper.skin = "sknflxe3e3e3border"
            }
        }
        this.view.flxMainContainer.height = enableKeypad ? '53%' : '84%';
        if (!!!enableKeypad && this.activeInput.id === 'lblAmount') {
            this.validateQuantity();
            this.activeInput = null;
        } else if (!!!enableKeypad) {
            this.validateQuantity();
            this.activeInput = null;
            this.checkAndEnableConfirm();
        }
    },
    checkAndEnableConfirm: function() {
        var orderType = this.orderType;
        if (orderType === 'Limit') {
            if ((this.error !== '1') && parseFloat(this.view.lblAmount.text) > 0 && parseFloat(this.view.lblLimitPriceField.text) > 0) {
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.setEnabled(true);
            } else {
                this.view.btnContinue.skin = "sknBtnE2E9F0Rounded";
                this.view.btnContinue.setEnabled(false);
            }
        } else if (orderType === 'Stop Loss') {
            if ((this.error !== '1') && parseFloat(this.view.lblAmount.text) > 0 && parseFloat(this.view.lblStopPriceField.text) > 0) {
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.setEnabled(true);
            } else {
                this.view.btnContinue.skin = "sknBtnE2E9F0Rounded";
                this.view.btnContinue.setEnabled(false);
            }
        } else if (orderType === 'Stop Limit') {
            if ((this.error !== '1') && parseFloat(this.view.lblAmount.text) > 0 && parseFloat(this.view.lblLimitPriceField.text) > 0 && (parseFloat(this.view.lblStopPriceField.text) > 0)) {
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.setEnabled(true);
            } else {
                this.view.btnContinue.skin = "sknBtnE2E9F0Rounded";
                this.view.btnContinue.setEnabled(false);
            }
        } else {
            if ((this.error !== '1') && parseFloat(this.view.lblAmount.text) > 0) {
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.setEnabled(true);
            } else {
                this.view.btnContinue.skin = "sknBtnE2E9F0Rounded";
                this.view.btnContinue.setEnabled(false);
            }
        }
    },
    // TODO : Get current Cash Balance and replace in line 306
    validateQuantity: function() {
        let formatUtil = applicationManager.getFormatUtilManager();
        var navman = applicationManager.getNavigationManager();
        var data = navman.getCustomInfo('frmInvestmentAcc');
        var amount;
      if(data.finalAmount){
        amount = data.finalAmount;
      }
       else{
        amount = "0.00" 
       }
        var qty;
        var prVal;
      	var curr;
        if(scope_WealthPresentationController.isFrmOrder === true){
           var data1 = navman.getCustomInfo("frmInstrumentOrder");
           if (this.orderType === "Stop Loss") {
                prVal = formatUtil.deFormatAmount(this.view.lblStopPriceField.text);
                this.priceValue = prVal;
            }
          else if (this.orderType === "Stop Limit" || "Limit") {
                prVal = formatUtil.deFormatAmount(this.view.lblLimitPriceField.text);
                this.priceValue = prVal;
            } 
           qty = data1.quantity;
           curr = data1.instrumentCurrency;
        }
        else{
       		prVal = this.priceValue;
          	qty = this.quantityValue;
            curr = this.currentCurrency;
        } 
        let q = formatUtil.deFormatAmount(qty);
      var estValue;
      if(this.orderType==='Market'){
          estValue = parseFloat(q) * this.lastPrice;
         }else{
           estValue=parseFloat(q) * prVal;
         }
        navman.setCustomInfo("frmOrderType",this.view.lblAmount.text);
        this.estimatedValue = estValue;
        this.view.lblEstimatedValue.text = formatUtil.formatAmountandAppendCurrencySymbol(estValue, curr);
         if (this.orderMode === this.ORDER_MODE.SELL && parseFloat(q) > parseFloat(this.quantity)) {
              // ERROR
              this.setQuantityError('Invalid Sell Quantity');
              this.view.btnContinue.setEnabled(false);
              this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
      
            } 
        
//         if ((this.orderMode === this.ORDER_MODE.BUY) && (parseFloat(estValue) > parseFloat(amount))) {
//             this.setQuantityError('Balance is insufficient to buy these quantities');
//             this.view.btnContinue.setEnabled(false);
//             this.view.btnContinue.skin = "sknBtnE2E9F0Rounded";
//         } 
      else {
            this.setQuantityError(null);
      }
            if(scope_WealthPresentationController.isFrmOrder === true){
              this.checkAndEnableConfirm();
            }
            else if (this.keypadString === '0') {
                this.view.btnContinue.setEnabled(false);
                this.view.btnContinue.skin = "sknBtnE2E9F0Rounded";
            } else {
                this.checkAndEnableConfirm();
            }
        //}
    },
    setQuantityError: function(msg = null) {
        if (msg) {
            this.error = '1';
            this.view.flxQuantityWrapper.skin = 'sknFlxBgFFFFFFBrF54B5E1pxR3px';
            this.view.lblQuantityError.text = msg;
            this.view.lblQuantityError.setVisibility(true);
        } else {
            this.error = '0';
            this.view.flxQuantityWrapper.skin = 'sknflxe3e3e3border';
            this.view.lblQuantityError.setVisibility(false);
        }
    },
    setKeypadChar: function(char) {
        if (this.activeInput.id === 'lblAmount') {
            if (char === '.') {
                if (this.isPeriodUsed === false) {
                    this.isPeriodUsed = true;
                } else {
                    return;
                }
            }
            var temp = this.keypadString.split(".")[0];
            if (temp.length < 9) {
                this.keypadString = this.keypadString + char;
                var firstChar = this.keypadString[0];
                this.keypadString = this.keypadString.split("");
                for (var i = 1; i < this.keypadString.length; i++) {
                    if (this.keypadString[i] === '.') {
                        this.keypadString[i - 1] = this.keypadString[i + 1];
                        i++;
                    } else {
                        this.keypadString[i - 1] = this.keypadString[i];
                    }
                }
                this.keypadString = this.keypadString.join("");
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
                if (firstChar !== '0') {
                    this.keypadString = firstChar + this.keypadString;
                }
                this.updateQuantityValue();
            }
        } else {
            this.setLimitKeypadChar(char);
        }
    },
    clearKeypadChar: function() {
        if (this.activeInput.id === 'lblAmount') {
            if (this.keypadString === '0.00' || this.keypadString === '0') return;
            this.keypadString = this.keypadString.split("");
            for (var i = this.keypadString.length - 2; i >= 0; i--) {
                if (this.keypadString[i] === '.') {
                    this.keypadString[i + 1] = this.keypadString[i - 1];
                    i--;
                } else {
                    this.keypadString[i + 1] = this.keypadString[i];
                }
            }
            this.keypadString = this.keypadString.join("");
            this.keypadString = this.keypadString.substr(1);
            if (this.keypadString === "") {
                this.keypadString = '0';
            }
            this.updateQuantityValue();
        } else {
            this.clearLimitKeypadChar();
        }
    },
    updateQuantityValue: function() {
        let label = this.view.lblAmount;
        if (!this.sellAllFlag) {
            var keypadStringCommas = this.keypadString;
            if (keypadStringCommas.length > 3) {
                var withCommas = (keypadStringCommas.length) / 3;
                var withoutCommas = (keypadStringCommas.length) % 3;
                var temp = '';
                if (withoutCommas != 0) {
                    temp = keypadStringCommas.substr(0, withoutCommas) + ',';
                }
                for (var i = withoutCommas; i < keypadStringCommas.length; i += 3) {
                    temp += keypadStringCommas.substr(i, 3) + ',';
                }
                keypadStringCommas = temp.substr(0, temp.length - 1);
            }
          this.quantityValue=this.keypadString;
            label.text = this.view.keypad.formatAmount(keypadStringCommas);
        } else {
           /* var nav = applicationManager.getNavigationManager();
            var data = nav.getCustomInfo('frmInstrumentDetails');
            if(data.response !== undefined){
            label.text = data.response.quantity;
            }
            else{
			var data1 = nav.getCustomInfo('frmInstrumentOrder');
            label.text = data1.quantity;
            }*/
          var quantity=this.view.lblSellQuantity.text          
          label.text=quantity.replace(/[()]/g, '').trim();
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
        }
    },
    updateAmountValue: function() {
        let label = this.view.lblAmount;
        if (this.activeInput) {
            label = this.activeInput;
        }
        if (label.text = 'lblAmount') {
            if (this.keypadString === '0' || this.keypadString === '0.00') {
                this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
                this.view.btnContinue.setEnabled(false);
                label.text = this.view.keypad.formatAmount(this.keypadString);
            } else {
                var keypadStringCommas = '';
                var beforeDecimal = this.keypadString.split('.')[0];
                var afterDecimal = this.keypadString.split('.')[1];
                if (beforeDecimal.length > 3) {
                    var withCommas = (beforeDecimal.length) / 3;
                    var withoutCommas = (beforeDecimal.length) % 3;
                    var temp = '';
                    if (withoutCommas != 0) {
                        temp = beforeDecimal.substr(0, withoutCommas) + ',';
                    }
                    for (var i = withoutCommas; i < beforeDecimal.length; i += 3) {
                        temp += beforeDecimal.substr(i, 3) + ',';
                    }
                    beforeDecimal = temp.substr(0, temp.length - 1);
                }
                // keypadStringCommas = beforeDecimal + '.' + afterDecimal;
                keypadStringCommas = beforeDecimal;
                label.text = this.view.keypad.formatAmount(keypadStringCommas);
            }
        } else {
            this.updateLimitValue();
        }
        //     this.calculateAmount();
    },
    setLimitKeypadChar: function(char) {
        if (char === '.') {
            if (this.isPeriodUsed === false) {
                this.isPeriodUsed = true;
            } else {
                return;
            }
        }
        var temp = this.keypadString.split(".")[0];
        if (temp.length < 9) {
            this.keypadString = this.keypadString + char;
            var firstChar = this.keypadString[0];
            this.keypadString = this.keypadString.split("");
            for (var i = 1; i < this.keypadString.length; i++) {
                if (this.keypadString[i] === '.') {
                    this.keypadString[i - 1] = this.keypadString[i + 1];
                    i++;
                } else {
                    this.keypadString[i - 1] = this.keypadString[i];
                }
            }
            this.keypadString = this.keypadString.join("");
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (firstChar !== '0') {
                this.keypadString = firstChar + this.keypadString;
            }
            this.updateLimitValue();
        }
    },
    clearLimitKeypadChar: function() {
        if (this.keypadString === '0.00') return;
        this.keypadString = this.keypadString.split("");
        for (var i = this.keypadString.length - 2; i >= 0; i--) {
            if (this.keypadString[i] === '.') {
                this.keypadString[i + 1] = this.keypadString[i - 1];
                i--;
            } else {
                this.keypadString[i + 1] = this.keypadString[i];
            }
        }
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(1);
        if (this.keypadString[0] === '.') {
            this.keypadString = '0' + this.keypadString;
        }
        this.updateLimitValue();
    },
    updateLimitValue: function() {
        let label = this.view.lblAmount;
        if (this.activeInput) {
            label = this.activeInput;
        }
        if (this.keypadString === '0.00') {
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
            label.text = this.view.keypad.formatAmount(this.keypadString);
          this.priceValue='0.00';
        } else {
            var keypadStringCommas = '';
            var beforeDecimal = this.keypadString.split('.')[0];
            var afterDecimal = this.keypadString.split('.')[1];
            if (beforeDecimal.length > 3) {
                var withCommas = (beforeDecimal.length) / 3;
                var withoutCommas = (beforeDecimal.length) % 3;
                var temp = '';
                if (withoutCommas != 0) {
                    temp = beforeDecimal.substr(0, withoutCommas) + ',';
                }
                for (var i = withoutCommas; i < beforeDecimal.length; i += 3) {
                    temp += beforeDecimal.substr(i, 3) + ',';
                }
                beforeDecimal = temp.substr(0, temp.length - 1);
            }
            keypadStringCommas = beforeDecimal + '.' + afterDecimal;
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
            label.text = this.view.keypad.formatAmount(keypadStringCommas);
          if(this.orderType==="Stop Loss"){
            this.priceValue=this.view.lblStopPriceField.text.replace(/,/g,"");
          }else{
             this.priceValue=this.view.lblLimitPriceField.text.replace(/,/g,"");
         
          }
          
        }
    }
});