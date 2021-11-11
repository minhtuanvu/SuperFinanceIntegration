define("WealthModule/userfrmInstrumentDetailsController", ['CommonUtilities'], function(CommonUtilities) {
    return {
        instrumentMinimal: {},
        ricCode: "",
        instrumentId: "",
        ISINCode: "",
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        },
        preShow: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.setVisibility(false);
            }
            this.view.investmentLineChart.currentFilter = '1D';
            this.view.flxInstrumentInfo.setVisibility(true);
            this.checkPermissions();
        },
        setStarValue: function(serviceResponse) {
            var favorite = false;
            if (serviceResponse.favInstrumentCodes) {
                if (serviceResponse.favInstrumentCodes.split(':').find(element => element === this.ricCode)) {
                    favorite = true;
                }
            }
            if (serviceResponse.favInstrumentIds) {
                if (serviceResponse.favInstrumentIds.split(':').find(element => element === this.instrumentId)) {
                    favorite = true;
                }
            }
            if (favorite) this.view.imgFavourite.src = "active_star_1x.png";
            else this.view.imgFavourite.src = "inactive_star_1x.png";
        },
        updateFavList: function(operation) {
            var params = {};
            var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
            if (operation === 'get') {
                wealthModule.getUserFavoriteInstruments(params);
            } else {
                if (this.view.imgFavourite.src === "active_star_1x.png") {
                    this.view.imgFavourite.src = "inactive_star_1x.png";
                    operation = 'Remove';
                } else {
                    this.view.imgFavourite.src = "active_star_1x.png";
                    operation = 'Add';
                }
                params = {
                    "RICCode": this.ricCode,
                    "operation": operation,
                    "instrumentId": this.instrumentId
                };
                wealthModule.updateFavouriteInstruments(params);
            }
        },
        postShow: function() {
            this.initActions();
            this.setUiData();
        },
        setDocuments: function(documentDetails) {
            if (documentDetails.length <= 0) {
                this.view.flxDocuments.setVisibility(false);
            } else {
                var results = [];
                for (var num in documentDetails) {
                    var storeData = {
                        pdfImage: "pdf.png",
                        Name: documentDetails[num].type,
                        downloadImage: "download.png",
                        link: documentDetails[num].link
                    };
                    results.push(storeData);
                }
                this.view.segPdf.widgetDataMap = {
                    imgPdf: "pdfImage",
                    lblName: "Name",
                    imgDownload: "downloadImage",
                    dummylabel: "link"
                };
                this.view.segPdf.setData(results);
            }
        },
        setUiData: function() {
            var formatUtil = applicationManager.getFormatUtilManager();
            if (scope_WealthPresentationController.instrumentDetailsEntry === true) {
                this.view.btnBuy.skin = "sknBtnBgFFFFFFBorder1pxFont15px003E75";
                this.view.btnSell.skin = "sknBtnBg003E75Border1pxFont15pxFFFFFF";
            }
            var data1 = applicationManager.getNavigationManager().getCustomInfo('frmInstrumentDetails');
            this.instrumentMinimal = data1.instrumentDetails.instrumentMinimal[0];
            if ((this.instrumentMinimal) && (Object.entries(this.instrumentMinimal).length > 0)) {
                this.ricCode = data1.response.RICCode ? data1.response.RICCode : this.instrumentMinimal.RICCode;
                this.instrumentId = this.instrumentMinimal.instrumentId;
                this.ISINCode = this.instrumentMinimal.ISINCode;
            } else {
                this.ricCode = data1.response.RICCode ? data1.response.RICCode : "";
                this.instrumentId = data1.response.holdingsId;
                this.ISINCode = data1.response.ISIN;
            }
            if (data1.instrumentDetails) this.view.investmentLineChart.currencySymbol = formatUtil.getCurrencySymbol(data1.instrumentDetails.referenceCurrency);
            this.setDataOnRefresh();
        },
        setCurrentPosition: function(currentposition) {
            var formatUtil = applicationManager.getFormatUtilManager();
            var unrealPLMkt = currentposition.unrealPLMkt ? currentposition.unrealPLMkt : 0;
            if (unrealPLMkt < 0) {
                this.view.lblPnlVal.skin = "sknlblee0005ssb121pr";
            } else {
                if (unrealPLMkt > 0) this.view.lblPnlVal.skin = "sknlbl2f853ssp121pr";
                else this.view.lblPnlVal.skin = "sknLbl424242SSPReg30px";
            }
            if (currentposition.holdingsId || currentposition.instrumentId) {
                this.view.flxCurrentposition.isVisible = true;
                this.view.lblmarketValue.text = formatUtil.formatAmountandAppendCurrencySymbol(currentposition.marketValPOS.replace(/,/g, ''), currentposition.secCCy);
                this.view.lblPnlVal.text = formatUtil.formatAmountandAppendCurrencySymbol(currentposition.unrealPLMkt ? currentposition.unrealPLMkt.substr(1) : 0, currentposition.secCCy);
                this.view.lblQuantityVal.text = currentposition.quantity ? currentposition.quantity : '0';
                this.view.lblAverageCostVal.text = formatUtil.formatAmountandAppendCurrencySymbol(currentposition.costPrice, currentposition.secCCy);
                if (currentposition.totalValue && currentposition.marketValPOS) {
                    var value = parseFloat(currentposition.marketValPOS.replace(/,/g, '')) / parseFloat(currentposition.totalValue);
                    var value1 = parseFloat(value * 100).toFixed(1);
                    this.view.lblWeightVal.text = value1 + "%";
                } else {
                    this.view.lblWeightVal.text = "0 %";
                }
            } else {
                this.view.flxCurrentposition.isVisible = true;
                this.view.lblmarketValue.text = formatUtil.formatAmountandAppendCurrencySymbol(0, this.instrumentMinimal.instrumentCurrencyId);
                this.view.lblPnlVal.text = formatUtil.formatAmountandAppendCurrencySymbol(0, this.instrumentMinimal.instrumentCurrencyId);
                this.view.lblQuantityVal.text = '0';
                this.view.lblAverageCostVal.text = formatUtil.formatAmountandAppendCurrencySymbol(0, this.instrumentMinimal.instrumentCurrencyId);
                this.view.lblWeightVal.text = "0 %";
            }
        },
        setInstrumentDetailsTop: function(instrumentDetails, pricingDetails, currentPossition) {
            var formatUtil = applicationManager.getFormatUtilManager();
            let instrumentDetailsDate = {
                "timeReceived": ((instrumentDetails.timeReceived) ? instrumentDetails.timeReceived : "00:00:00"),
                "dateReceived": ((instrumentDetails.dateReceived) ? instrumentDetails.dateReceived : "")
            };
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.lblInstrumentName.text = CommonUtilities.truncateStringWithGivenLength(this.instrumentMinimal.instrumentName, 23);
            } else {
                this.view.lblInstrumentName.text = this.instrumentMinimal.instrumentName;
            }
            this.view.lblInstrumentValueTime.text = "As of " + this.setDate(instrumentDetailsDate);
            this.view.lblInstrumentSymbol.text = this.instrumentMinimal.ISINCode + " | " + this.instrumentMinimal.stockExchange;
            if (instrumentDetails.lastPrice === 0 || instrumentDetails.lastPrice === "0.0") {
                this.view.lblInstrumentValue.text = formatUtil.formatAmountandAppendCurrencySymbol(pricingDetails.closeRate, this.instrumentMinimal.instrumentCurrencyId);
            } else {
                this.view.lblInstrumentValue.text = formatUtil.formatAmountandAppendCurrencySymbol(instrumentDetails.lastPrice, this.instrumentMinimal.instrumentCurrencyId);
            }
            if (instrumentDetails.percentageChange === 0 || instrumentDetails.percentageChange === "0" || instrumentDetails.percentageChange === "0.00") {
                this.view.imgIndicator.isVisible = false;
                this.view.lblCurrentValue.text = instrumentDetails.netchange + "(" + instrumentDetails.percentageChange + "%" + ")";
            } else {
                this.view.imgIndicator.isVisible = true;
                if (instrumentDetails.percentageChange.substr(0, 1) === "-") {
                    this.view.imgIndicator.src = "whitearrowdownfilled.png";
                    this.view.lblCurrentValue.text = instrumentDetails.netchange.substr(1) + "(" + instrumentDetails.percentageChange + "%" + ")";
                } else {
                    this.view.imgIndicator.src = "whitearrowupfilled.png";
                    if (instrumentDetails.percentageChange.substr(0, 1) === "+") {
                        this.view.lblCurrentValue.text = instrumentDetails.netchange + "(" + instrumentDetails.percentageChange + "%" + ")";
                    } else {
                        this.view.lblCurrentValue.text = instrumentDetails.netchange + "(+" + instrumentDetails.percentageChange + "%" + ")";
                    }
                }
            }
        },
        instrumentDetailsNoRefinitiv: function(currentPossition) {
            let instrumentDetailsDate = {
                "timeReceived": ((this.instrumentMinimal.timeReceived) ? this.instrumentMinimal.timeReceived : "00:00:00"),
                "dateReceived": ((this.instrumentMinimal.lastPriceDate) ? this.instrumentMinimal.lastPriceDate : "")
            };
            var formatUtil = applicationManager.getFormatUtilManager();
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.lblInstrumentName.text = CommonUtilities.truncateStringWithGivenLength(this.instrumentMinimal.instrumentName, 23);
            } else {
                this.view.lblInstrumentName.text = this.instrumentMinimal.instrumentName;
            }
            this.view.lblInstrumentSymbol.text = this.instrumentMinimal.ISINCode + " | " + this.instrumentMinimal.stockExchange;
            this.view.lblInstrumentValue.text = formatUtil.formatAmountandAppendCurrencySymbol(this.instrumentMinimal.lastPrice, this.instrumentMinimal.instrumentCurrencyId);
            this.view.lblInstrumentValueTime.text = "As of " + this.setDate(instrumentDetailsDate);
            this.view.flxInstrumentIndicator.setVisibility(false);
            var unrealPLMkt = currentPossition.unrealPLMkt ? currentPossition.unrealPLMkt : 0.00;
            if (unrealPLMkt < 0) {
                this.view.lblPnlVal.skin = "sknlblee0005ssb121pr";
            } else {
                if (unrealPLMkt > 0) this.view.lblPnlVal.skin = "sknlbl2f853ssp121pr";
                else this.view.lblPnlVal.skin = "sknLbl424242SSPReg30px";
            }
            if (currentPossition.holdingsId || currentPossition.instrumentId) {
                this.view.flxCurrentposition.isVisible = true;
                let marketValue = currentPossition.marketValPOS ? currentPossition.marketValPOS.replace(/,/g, '') : 0.00;
                //  let unrealPLMkt = currentPossition.unrealPLMkt ? currentPossition.unrealPLMkt : 0.00;
                let costPrice = currentPossition.costPrice ? currentPossition.costPrice : 0.00;
                let totalValue = currentPossition.totalValue ? currentPossition.totalValue : 0.00;
                let quantity = currentPossition.quantity ? currentPossition.quantity : '0';
                this.view.lblmarketValue.text = formatUtil.formatAmountandAppendCurrencySymbol(marketValue, this.instrumentMinimal.instrumentCurrencyId);
                this.view.lblPnlVal.text = formatUtil.formatAmountandAppendCurrencySymbol(unrealPLMkt, this.instrumentMinimal.instrumentCurrencyId);
                this.view.lblQuantityVal.text = quantity;
                this.view.lblAverageCostVal.text = formatUtil.formatAmountandAppendCurrencySymbol(costPrice, this.instrumentMinimal.instrumentCurrencyId);
                if (totalValue !== 0) {
                    var value = parseFloat(marketValue) / parseFloat(totalValue);
                    var value1 = parseFloat(value * 100).toFixed(1);
                    this.view.lblWeightVal.text = value1 + "%";
                } else this.view.lblWeightVal.text = "0" + "%";
            } else {
                this.view.flxCurrentposition.isVisible = true;
                this.view.lblmarketValue.text = formatUtil.formatAmountandAppendCurrencySymbol(0, this.instrumentMinimal.instrumentCurrencyId);
                this.view.lblPnlVal.text = formatUtil.formatAmountandAppendCurrencySymbol(0, this.instrumentMinimal.instrumentCurrencyId);
                this.view.lblQuantityVal.text = '0';
                this.view.lblAverageCostVal.text = formatUtil.formatAmountandAppendCurrencySymbol(0, this.instrumentMinimal.instrumentCurrencyId);
                this.view.lblWeightVal.text = "0" + "%";
            }
        },
        setDate: function(instrumentDate) {
            var shortMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            let month = String(shortMonths.indexOf(instrumentDate.dateReceived.substring(3, 6).toUpperCase())).padStart(2, '0');
            let day = instrumentDate.dateReceived.substring(0, 2);
            let year = instrumentDate.dateReceived.substring(7, 12);
            var dateFormat = "";
            dateFormat = new Date(Date.UTC(year, month, day, instrumentDate.timeReceived.substring(0, 2), instrumentDate.timeReceived.substring(3, 5), instrumentDate.timeReceived.substring(6, 8)));
            dateFormat = dateFormat.toString().split('(');
            var time = dateFormat[0].split(" ")[4].split(":");
            let firstPart = applicationManager.getFormatUtilManager().getTwelveHourTimeString(time[0] + ': ' + time[1]);
            var secondPart = "";
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") secondPart = dateFormat[1].substring(0, dateFormat[1].length - 1);
            else dateFormat[1].split(" ").map(function(elem) {
                for (let i = 0; i <= elem.length - 1; i++) {
                    secondPart = secondPart + elem[i].charAt(i);
                    return elem[i].charAt(i);
                }
            });
            let trdPart = dateFormat[0].split(' ')[1] + ' ' + dateFormat[0].split(' ')[2];
            return firstPart + ' ' + secondPart + ' ' + trdPart;
        },
        setPricingData: function(pricingData) {
            var formatUtil = applicationManager.getFormatUtilManager();
            this.view.lblBidVal.text = formatUtil.formatAmountandAppendCurrencySymbol(pricingData.bidRate, pricingData.referenceCurrency);
            if (pricingData.bidVolume !== undefined) {
                this.view.lblBidVolVal.text = pricingData.bidVolume.toString();
            } else {
                this.view.lblBidVolVal.text = pricingData.bidVolume;
            }
            if (pricingData.volume !== undefined) {
                this.view.lblVolVal.text = pricingData.volume.toString();
            } else {
                this.view.lblVolVal.text = pricingData.volume;
            }
            if (pricingData.askVolume !== undefined) {
                this.view.lblAskVolVal.text = pricingData.askVolume.toString();
            } else {
                this.view.lblAskVolVal.text = pricingData.askVolume;
            }
            this.view.lblAskVal.text = formatUtil.formatAmountandAppendCurrencySymbol(pricingData.askRate, pricingData.referenceCurrency);
            this.view.lblHighVal.text = formatUtil.formatAmountandAppendCurrencySymbol(pricingData.high52W, pricingData.referenceCurrency);
            this.view.lblOpenVal.text = formatUtil.formatAmountandAppendCurrencySymbol(pricingData.openRate, pricingData.referenceCurrency);
            this.view.lblCloseVal.text = formatUtil.formatAmountandAppendCurrencySymbol(pricingData.closeRate, pricingData.referenceCurrency);
            this.view.lblLowVal.text = formatUtil.formatAmountandAppendCurrencySymbol(pricingData.low52W, pricingData.referenceCurrency);
            this.view.lblLatestVal.text = formatUtil.formatAmountandAppendCurrencySymbol(pricingData.latestRate, pricingData.referenceCurrency);
        },
        setStockNews: function(news) {
            if (news !== undefined) {
                this.view.flxNews.isVisible = true;
                var results = [];
                // only the first 2 stock news are to be shown in the 
                for (var i = 0; i < 2; i++) {
                    var dateToString = news[i]["RT"].replace(/\D/g, '');
                    results.push({
                        "Provider": news[i]["PR"],
                        "Headline": news[i]["HT"],
                        "Time": CommonUtilities.getTimeDiferenceOfDate(dateToString.substring(0, 14))
                    });
                }
                this.view.segNews.widgetDataMap = {
                    lblTitle: "Provider",
                    lblTime: "Time",
                    lblNews: "Headline"
                };
                this.view.segNews.setData(results);
            } else {
                this.view.flxNews.isVisible = false;
            }
        },
        onRefresh: function() {
            var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
            var param = {
                "ISINCode": this.ISINCode,
                "RICCode": this.ricCode,
                "instrumentId": this.instrumentMinimal.instrumentId
            };
            wealthMod.getInstrumentDetails(param);
            this.onFilterChanged(this.view.investmentLineChart.currentFilter);
        },
        setDataOnRefresh: function() {
            var navManager = applicationManager.getNavigationManager();
            var data = navManager.getCustomInfo('frmInstrumentDetails').instrumentDetails;
            var currentposition = navManager.getCustomInfo('frmInstrumentDetails').response;
            if (data.instrumentDetails) {
                this.setInstrumentDetailsTop(data.instrumentDetails, data.pricingDetails, currentposition);
                if (this.view.flxCurrentposition.isVisible) this.setCurrentPosition(currentposition);
            } else
            if ((this.instrumentMinimal) && (Object.entries(this.instrumentMinimal).length > 0)) this.instrumentDetailsNoRefinitiv(currentposition);
            else this.view.flxInstrumentInfo.setVisibility(false);
            if (data.pricingDetails) {
                if (this.view.flxPricingData.isVisible) this.setPricingData(data.pricingDetails);
            } else this.view.flxPricingData.setVisibility(false);
            if (data.stockNews) {
                if (this.view.flxNews.isVisible) this.setStockNews(data.stockNews);
            } else this.view.flxNews.setVisibility(false);
            if (data.documentDetails) {
                if (this.view.flxDocuments.isVisible) this.setDocuments(data.documentDetails);
            } else this.view.flxDocuments.setVisibility(false);
        },
        initActions: function() {
            let filterValues = Object.keys(this.chartFilters).map(key => this.chartFilters[key]);
            this.view.investmentLineChart.setChartFilters(filterValues);
            //  this.setInstrumentDetails(this.mockData);
            this.view.imgRefresh.onTouchEnd = this.onRefresh;
            this.view.customHeader.flxBack.onClick = this.backOnClick;
            this.view.flxView.onClick = this.viewAllClick;
            this.view.btnBuy.onClick = this.onPlaceorder.bind(this, 0);
            this.view.btnSell.onClick = this.onPlaceorder.bind(this, 1);
            this.view.segPdf.onRowClick = this.downloadPDF;
            //favourite imgFavourite
            if (this.view.imgFavourite.isVisible) {
                this.updateFavList('get');
                this.view.imgFavourite.onTouchEnd = this.updateFavList;
            }
        },
        downloadPDF: function() {
            var selectedRowIndex = this.view.segPdf.selectedRowIndex[1];
            var selectedRow = this.view.segPdf.data[selectedRowIndex];
            kony.application.openURLAsync({
                url: selectedRow.link
            });
        },
        onPlaceorder: function(option) {
            var navMan = applicationManager.getNavigationManager();
            let data = navMan.getCustomInfo("frmPlaceOrder");
            if (kony.sdk.isNullOrUndefined(data)) {
                data = {};
                data.buy = !option;
            } else {
                data.buy = !option;
            }
            if (data.buy === true) {
                this.view.btnBuy.skin = "sknBtnBgFFFFFFBorder1pxFont15px003E75";
                this.view.btnBuy.focusSkin = "sknBtnBgFFFFFFBorder1pxFont15px003E75";
                this.view.btnSell.skin = "sknBtnBg003E75Border1pxFont15pxFFFFFF";
            } else {
                this.view.btnBuy.skin = "sknBtnBg003E75Border1pxFont15pxFFFFFF";
                this.view.btnSell.focusSkin = "sknBtnBgFFFFFFBorder1pxFont15px003E75";
                this.view.btnSell.skin = "sknBtnBgFFFFFFBorder1pxFont15px003E75";
            }
            applicationManager.getPresentationUtility().showLoadingScreen();
            navMan.setCustomInfo("frmPlaceOrder", data);
            navMan.navigateTo('frmPlaceOrder');
        },
        backOnClick: function() {
            var navigationMan = applicationManager.getNavigationManager();
            var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
            if (scope_WealthPresentationController.searchEntryPoint === true) {
                let params = {
                    "portfolioId": scope_WealthPresentationController.portfolioId,
                    "navPage": "Portfolio",
                    "graphDuration": "OneY"
                };
                wealthModule.getPortfolioAndGraphDetails(params);
            } else if (kony.application.getPreviousForm().id === "frmWatchlist") {
                var ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
                ntf.navigate();
            } else {
                var params = {
                    "portfolioId": scope_WealthPresentationController.portfolioId,
                    "navPage": "Holdings",
                    "sortBy": "description",
                    "searchByInstrumentName": ""
                };
                wealthModule.getHoldings(params);
            }
        },
        viewAllClick: function() {
            var navigationMan = applicationManager.getNavigationManager();
            navigationMan.navigateTo("frmTopNews");
        },
        // Called when chart filter changed - Mapped in onFilterChange event on CHart Component
        onFilterChanged: function(filter) {
            if (scope_WealthPresentationController.instrumentDetailsEntry === true) {
                scope_WealthPresentationController.instrumentDetailsEntry = false;
                this.view.investmentLineChart.currentFilter = '1D';
                this.setChartData();
                //   this.setUiData();
            } else {
                scope_WealthPresentationController.instrumentChartFilter = filter;
                var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
                var ricCode = this.ricCode;
                wealthMod.getHistoricalInstrumentData(ricCode, filter);
            }
        },
        setChartData: function() {
            var navManager = applicationManager.getNavigationManager();
            var data = navManager.getCustomInfo("frmInstrumentDetails");
            if (Object.entries(data.chartData).length > 0) {
                this.view.flxCurrencyChart.setVisibility(true);
                this.view.investmentLineChart.setChartData(data.chartData, null, null, null, "CURRENCY");
            } else this.view.flxCurrencyChart.setVisibility(false);
        },
        setFilterData: function() {
            var XaxisArray = [];
            var YaxisArray = [];
            var data = [];
            var maxVal = 0;
            if (filter === this.chartFilters.ONE_DAY) {
                XaxisArray = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM'];
                YaxisArray = [10, 30, 50, 50, 60, 100, 80];
                data = [10, 30, 50, 50, 60, 100, 80];
                maxVal = Math.max.apply(null, data) + 20;
            } else if (filter === this.chartFilters.ONE_YEAR) {
                XaxisArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                YaxisArray = [0, 500, 1000, 1500, 2000, 2500, 5000];
                data = [0, 1000, 500, 2000, 1000, 5000, 2000, 2500, 1500, 2000, 1000, 500];
                maxVal = Math.max.apply(null, data) + 200;
            } else if (filter === this.chartFilters.ONE_MONTH) {
                XaxisArray = ['5', '10', '15', '20', '25', '30'];
                YaxisArray = [0, 10, 20, 50, 60, 100, 120];
                data = [10, 40, 69, 90, 5, 120];
                maxVal = Math.max.apply(null, data) + 20;
            } else if (filter === this.chartFilters.YTD) {} else {
                return;
            }
            this.view.investmentLineChart.setChartData(data, XaxisArray, null, this.chartConfig);
        },
        chartFilters: {
            ONE_DAY: '1D',
            ONE_MONTH: '1M',
            ONE_YEAR: '1Y',
            YTD: 'YTD',
        },
        checkPermissions: function() {
            var configManager = applicationManager.getConfigurationManager();
            var checkUserPermission = function(permission) {
                return configManager.checkUserPermission(permission);
            };
            this.view.flxInstrumentOrder.setVisibility(configManager.getInstrumentDetailsPermissions().some(checkUserPermission));
            this.view.flxCurrentposition.setVisibility(configManager.getInstrumentCurrentPositionPermissions().some(checkUserPermission));
            this.view.flxPricingData.setVisibility(configManager.getInstrumentPricingDataPermissions().some(checkUserPermission));
            this.view.flxNews.setVisibility(configManager.getInstrumentNewsPermissions().some(checkUserPermission));
            this.view.flxDocuments.setVisibility(configManager.getInstrumentDocumentsPermissions().some(checkUserPermission));
            this.view.btnBuy.setVisibility(configManager.buyOrderPermissions().some(checkUserPermission));
            this.view.btnSell.setVisibility(configManager.sellOrderPermissions().some(checkUserPermission));
            this.view.imgFavourite.setVisibility(configManager.addToWatchlistPermissions().some(checkUserPermission));
        },
    };
});
define("WealthModule/frmInstrumentDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b253546af97346a5acbef5b93843e3d3: function AS_Form_b253546af97346a5acbef5b93843e3d3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_df815f0807f3415380bc19796b708c18: function AS_Form_df815f0807f3415380bc19796b708c18(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_c1b241e332e548b3a4ca94ba60450403: function AS_Form_c1b241e332e548b3a4ca94ba60450403(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_UWI_i6eda175b82c4931be899e459a7b635f: function AS_UWI_i6eda175b82c4931be899e459a7b635f(filter) {
        var self = this;
        return self.onFilterChanged.call(this, filter);
    },
    AS_BarButtonItem_c647060c722741aaa7917560843e9beb: function AS_BarButtonItem_c647060c722741aaa7917560843e9beb(eventobject) {
        var self = this;
        this.backOnClick();
    }
});
define("WealthModule/frmInstrumentDetailsController", ["WealthModule/userfrmInstrumentDetailsController", "WealthModule/frmInstrumentDetailsControllerActions"], function() {
    var controller = require("WealthModule/userfrmInstrumentDetailsController");
    var controllerActions = ["WealthModule/frmInstrumentDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
