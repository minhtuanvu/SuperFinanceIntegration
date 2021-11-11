define("TransactionModule/userfrmAdvanceSearchController", {
    timerCounter: 0,
    selectedType: null,
    advanceSearchOptions: {
        searchType: "Search",
        firstRecordNumber: "0",
        lastRecordNumber: "24",
    },
    searchOptionsBlockedFunds: {},
    res: {},
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        this.advanceSearchOptions = {
            searchType: "Search",
            firstRecordNumber: "0",
            lastRecordNumber: "24",
        };
        this.searchOptionsBlockedFunds = {};
        this.initActions();
        this.setTransactionTypeData();
        this.setTimeRangeData();
        this.setTypeData();
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.flxAdvanceSearchWrapper.flxSearch.flxSearchMain.tbxSearch.text = "";
        this.view.flxMainContainer.flxFiltersMain.flxAmount.txtAmountFrom.text = "";
        this.view.flxMainContainer.flxFiltersMain.flxAmount.txtAmountTo.text = "";
        this.view.flxMainContainer.flxFiltersMain.flxAmount.imgCheckboxAmount.src = "remeberme.png";
        this.view.flxMainContainer.flxFiltersMain.flxAmount.lblDollarTwo.setVisibility(false);
        this.view.flxMainContainer.flxFiltersMain.flxAmount.lblToTitleOne.setVisibility(false);
        this.view.flxMainContainer.flxFiltersMain.flxAmount.txtAmountTo.setVisibility(false);
        this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.txtCheckNumbersFrom.text = "";
        this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.txtCheckNumbersTo.text = "";
        this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.imgCheckboxCheckNumbers.src = "remeberme.png";
        this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.lblToTitleTwo.setVisibility(false);
        this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.txtCheckNumbersTo.setVisibility(false);
        this.view.txtReferenceNumber.text = "";
        this.view.flxMainContainer.flxCustomDate.calStartDate.clear();
        this.view.flxMainContainer.flxCustomDate.calEndDate.clear();
        this.view.flxMainContainer.flxCustomDate.calStartDate.dateComponents = [];
        this.view.flxMainContainer.flxCustomDate.calEndDate.dateComponents = [];
        this.view.flxCustomDate.isVisible = false;
        this.view.flxTransactionTypeMain.isVisible = false;
        this.view.flxTimeRangeMain.isVisible = false;
        this.view.flxFiltersMain.isVisible = false;
        this.view.flxReferenceNumber.isVisible = false;
        this.setTodayDate();
        var frmName = kony.application.getPreviousForm();
        var navManager = applicationManager.getNavigationManager();
        var context = navManager.getCustomInfo(frmName.id);
        var formatUtil = applicationManager.getFormatUtilManager();
        this.view.lblDollarOne.text = formatUtil.getCurrencySymbol(context.selectedAccountData.currencyCode);
        this.view.lblDollarTwo.text = formatUtil.getCurrencySymbol(context.selectedAccountData.currencyCode);
    },
    postShow: function() {},
    initActions: function() {
        var scope = this;
        this.view.flxTransactionTypeWrapper.onClick = this.showTransactionType;
        this.view.flxTimeRangeWrapper.onClick = this.showTimeRange;
        this.view.flxAddRangeAmount.onClick = function() {
            scope.toggleCheckbox(scope.view.imgCheckboxAmount);
            if (scope.view.imgCheckboxAmount.src === "remeberme.png") {
                scope.view.lblDollarTwo.isVisible = false;
                scope.view.lblToTitleOne.isVisible = false;
                scope.view.txtAmountTo.isVisible = false;
            } else {
                scope.view.lblDollarTwo.isVisible = true;
                scope.view.lblToTitleOne.isVisible = true;
                scope.view.txtAmountTo.isVisible = true;
            }
            scope.view.forceLayout();
        };
        this.view.segType.onRowClick = function() {
            scope.selectedType = scope.view.segType.data[scope.view.segType.selectedIndex[1]].lblName;
            if (scope.selectedType === kony.i18n.getLocalizedString("kony.mb.PFMCategorisedTransactions.Title")) {
                scope.view.flxTransactionTypeMain.isVisible = true;
                scope.view.imgTimeRange.isVisible = true;
                scope.view.flxTimeRangeMain.isVisible = true;
                scope.view.flxCustomDate.isVisible = false;
                scope.view.flxFiltersMain.isVisible = true;
                scope.view.flxReferenceNumber.isVisible = false;
                scope.view.lblTimeRangeTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.PFM.TimeRange");
                scope.view.lblTimeRangeCount.text = "";
            } else if (scope.selectedType === kony.i18n.getLocalizedString("kony.mb.accdetails.blockedFunds")) {
                scope.view.flxTransactionTypeMain.isVisible = false;
                scope.view.imgTimeRange.isVisible = false;
                scope.view.flxTimeRangeValue.isVisible = false;
                scope.view.flxTimeRangeMain.isVisible = true;
                scope.view.flxFiltersMain.isVisible = false;
                scope.view.flxReferenceNumber.isVisible = true;
                scope.view.flxCustomDate.isVisible = true;
                scope.view.lblTimeRangeTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.PFM.TimeRange");
                scope.view.lblTimeRangeCount.text = "(" + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.AdvanceSearch.Last30days") + ")";
                scope.view.forceLayout();
            }
        };
        this.view.segTransactionType.onRowClick = function() {
            var configManager = applicationManager.getConfigurationManager();
            if (scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName === configManager.constants.Withdrawals) {
                scope.advanceSearchOptions.searchTransactionType = "Withdrawal";
            }
            if (scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName === configManager.constants.Deposits) {
                scope.advanceSearchOptions.searchTransactionType = "Deposit";
            }
            //P2PDebits txn type not handled in backend
            //         if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.P2PDebits){
            //           scope.advanceSearchOptions.searchTransactionType="P2PDebits";
            //         }
            if (scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName === configManager.constants.BillPay) {
                scope.advanceSearchOptions.searchTransactionType = "BillPay";
            }
            if (scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName === configManager.constants.Transfers) {
                scope.advanceSearchOptions.searchTransactionType = "Transfers";
            }
            if (scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName === configManager.constants.Checks) {
                scope.advanceSearchOptions.searchTransactionType = "Checks";
            }
            //P2PCredits txn type not handled in backend
            //         if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.P2PCredits){
            //           scope.advanceSearchOptions.searchTransactionType="P2PCredits";
            //         }
        };
        this.view.flxAddRangeCheckNumbers.onClick = function() {
            scope.toggleCheckbox(scope.view.imgCheckboxCheckNumbers);
            if (scope.view.imgCheckboxCheckNumbers.src === "remeberme.png") {
                scope.view.lblToTitleTwo.isVisible = false;
                scope.view.txtCheckNumbersTo.isVisible = false;
            } else {
                scope.view.lblToTitleTwo.isVisible = true;
                scope.view.txtCheckNumbersTo.isVisible = true;
            }
            scope.view.forceLayout();
        };
        this.view.segTimeRange.onRowClick = function() {
            var configManager = applicationManager.getConfigurationManager();
            var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
            if (scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName === configManager.constants.CustomRange) {
                scope.view.flxCustomDate.isVisible = true;
                scope.view.forceLayout();
                scope.showTimeRange();
                var date = new Date();
                var endDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
                scope.validateDateWidget(endDate);
                scope.setTodayDate();
            } else if (scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName === configManager.constants.Last7days) {
                scope.res = transModPresentationController.getDateRange(7);
                scope.advanceSearchOptions.searchStartDate = scope.res.searchStartDate;
                scope.advanceSearchOptions.searchEndDate = scope.res.searchEndDate;
            } else if (scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName === configManager.constants.Last14days) {
                scope.res = transModPresentationController.getDateRange(14);
                scope.advanceSearchOptions.searchStartDate = scope.res.searchStartDate;
                scope.advanceSearchOptions.searchEndDate = scope.res.searchEndDate;
            } else if (scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName === configManager.constants.Last1Month) {
                scope.res = transModPresentationController.getDateRangeForMonths(1);
                scope.advanceSearchOptions.searchStartDate = scope.res.searchStartDate;
                scope.advanceSearchOptions.searchEndDate = scope.res.searchEndDate;
            } else if (scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName === configManager.constants.Last2Months) {
                scope.res = transModPresentationController.getDateRangeForMonths(2);
                scope.advanceSearchOptions.searchStartDate = scope.res.searchStartDate;
                scope.advanceSearchOptions.searchEndDate = scope.res.searchEndDate;
            } else if (scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName === configManager.constants.Last3Months) {
                scope.res = transModPresentationController.getDateRangeForMonths(3);
                scope.advanceSearchOptions.searchStartDate = scope.res.searchStartDate;
                scope.advanceSearchOptions.searchEndDate = scope.res.searchEndDate;
            } else if (scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName === configManager.constants.Last6Months) {
                scope.res = transModPresentationController.getDateRangeForMonths(6);
                scope.advanceSearchOptions.searchStartDate = scope.res.searchStartDate;
                scope.advanceSearchOptions.searchEndDate = scope.res.searchEndDate;
            } else if (scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName === configManager.constants.Last12Months) {
                scope.res = transModPresentationController.getDateRangeForMonths(12);
                scope.advanceSearchOptions.searchStartDate = scope.res.searchStartDate;
                scope.advanceSearchOptions.searchEndDate = scope.res.searchEndDate;
            }
            if (scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName !== configManager.constants.CustomRange) {
                scope.view.flxCustomDate.isVisible = false;
                scope.view.forceLayout();
            }
        };
        this.view.btnSearch.onClick = function() {
            //scope.view.flxSearchResults.isVisible = true;
            applicationManager.getPresentationUtility().showLoadingScreen();
            //scope.selectedTransactionType();
            //custom metric API to generate Reports
            KNYMetricsService.sendCustomMetrics("frmAdvanceSearch", {
                "Search Transactions": "Final Search"
            });
            if (scope.selectedType === kony.i18n.getLocalizedString("kony.mb.PFMCategorisedTransactions.Title")) {
                if (scope.advanceSearchOptions.searchStartDate !== "" && scope.advanceSearchOptions.searchEndDate !== "") {
                    if (scope.view.imgCheckboxAmount.src === "remembermetick.png") {
                        scope.advanceSearchOptions.searchMinAmount = scope.view.txtAmountFrom.text;
                        scope.advanceSearchOptions.searchMaxAmount = scope.view.txtAmountTo.text;
                        if (Number(scope.advanceSearchOptions.searchMaxAmount) < Number(scope.advanceSearchOptions.searchMinAmount)) {
                            var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Accounts.validAmountRange");
                            applicationManager.getDataProcessorUtility().showToastMessageError(scope, msg);
                            applicationManager.getPresentationUtility().dismissLoadingScreen();
                            return;
                        }
                    } else {
                        scope.advanceSearchOptions.searchMinAmount = scope.view.txtAmountFrom.text;
                        scope.advanceSearchOptions.searchMaxAmount = scope.view.txtAmountFrom.text;
                    }
                    if (scope.view.imgCheckboxCheckNumbers.src === "remembermetick.png") {
                        scope.advanceSearchOptions.fromCheckNumber = scope.view.txtCheckNumbersFrom.text;
                        scope.advanceSearchOptions.toCheckNumber = scope.view.txtCheckNumbersTo.text;
                        if (Number(scope.advanceSearchOptions.toCheckNumber) < Number(scope.advanceSearchOptions.fromCheckNumber)) {
                            var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Accounts.validCheckRange");
                            applicationManager.getDataProcessorUtility().showToastMessageError(scope, msg);
                            applicationManager.getPresentationUtility().dismissLoadingScreen();
                            return;
                        }
                    } else {
                        scope.advanceSearchOptions.fromCheckNumber = scope.view.txtCheckNumbersFrom.text;
                        scope.advanceSearchOptions.toCheckNumber = scope.view.txtCheckNumbersFrom.text;
                    }
                    if (scope.view.tbxSearch.text !== "") {
                        scope.advanceSearchOptions.searchValue = scope.view.tbxSearch.text;
                    }
                    var navMan = applicationManager.getNavigationManager();
                    var statements;
                    var configurationManager = applicationManager.getConfigurationManager();
                    if (configurationManager.isCombinedUser === "true" || configurationManager.isSMEUser === "true") {
                        statements = navMan.getCustomInfo("frmAccountDetailsNew");
                    } else {
                        statements = navMan.getCustomInfo("frmAccountDetails");
                    }
                    scope.advanceSearchOptions.accountID = statements.selectedAccountData["accountID"];
                    scope.advanceSearchOptions.accountType = statements.selectedAccountData["accountType"];
                    scope.advanceSearchOptions.currencyCode = statements.selectedAccountData["currencyCode"];
                    scope.advanceSearchOptions.selectedType = scope.selectedType;
                    if (scope.advanceSearchOptions.searchStartDate && scope.advanceSearchOptions.searchEndDate) {
                        var startDateSplitted;
                        var endDateSplitted;
                        startDateSplitted = scope.advanceSearchOptions.searchStartDate.split(" ")[0];
                        endDateSplitted = scope.advanceSearchOptions.searchEndDate.split(" ")[0];
                        scope.advanceSearchOptions.searchStartDate = startDateSplitted;
                        scope.advanceSearchOptions.searchEndDate = endDateSplitted;
                    }
                    var TransModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
                    TransModPresentationController.getPendingPostedTransactions(scope.advanceSearchOptions);
                    var X = scope.advanceSearchOptions;
                    navMan.setCustomInfo("frmAdvanceSearch", X);
                    navMan.navigateTo("frmAdvanceSearchResults");
                } else {
                    applicationManager.getPresentationUtility().dismissLoadingScreen();
                    kony.ui.Alert("To date should be greater than From date");
                }
            } else if (scope.selectedType === kony.i18n.getLocalizedString("kony.mb.accdetails.blockedFunds")) {
                if (!kony.sdk.isNullOrUndefined(scope.advanceSearchOptions.searchStartDate) && !kony.sdk.isNullOrUndefined(scope.advanceSearchOptions.searchEndDate) && scope.advanceSearchOptions.searchStartDate !== "" && scope.advanceSearchOptions.searchEndDate !== "") {
                    var startDateSplitted;
                    var endDateSplitted;
                    startDateSplitted = scope.advanceSearchOptions.searchStartDate.split(" ")[0];
                    endDateSplitted = scope.advanceSearchOptions.searchEndDate.split(" ")[0];
                    scope.searchOptionsBlockedFunds.searchStartDate = startDateSplitted.replace(/-/g, '');
                    scope.searchOptionsBlockedFunds.searchEndDate = endDateSplitted.replace(/-/g, '');
                }
                var navMan = applicationManager.getNavigationManager();
                var statements;
                var configurationManager = applicationManager.getConfigurationManager();
                if (configurationManager.isCombinedUser === "true" || configurationManager.isSMEUser === "true") {
                    statements = navMan.getCustomInfo("frmAccountDetailsNew");
                } else {
                    statements = navMan.getCustomInfo("frmAccountDetails");
                }
                scope.searchOptionsBlockedFunds.accountID = statements.selectedAccountData["accountID"];
                scope.searchOptionsBlockedFunds.accountType = statements.selectedAccountData["accountType"];
                scope.searchOptionsBlockedFunds.currencyCode = statements.selectedAccountData["currencyCode"];
                scope.searchOptionsBlockedFunds.selectedType = scope.selectedType;
                if (scope.view.tbxSearch.text !== "") {
                    scope.searchOptionsBlockedFunds.searchValue = scope.view.tbxSearch.text;
                }
                if (scope.view.txtReferenceNumber.text !== "") {
                    scope.searchOptionsBlockedFunds.lockedEventId = scope.view.txtReferenceNumber.text;
                }
                var TransModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
                TransModPresentationController.getBlockedTransactions(scope.searchOptionsBlockedFunds);
                var X = scope.searchOptionsBlockedFunds;
                navMan.setCustomInfo("frmAdvanceSearch", X);
                navMan.navigateTo("frmAdvanceSearchResults");
            }
        };
        this.view.customSearchbox.btnCancel.onClick = function() {
            scope.view.flxSearchResults.isVisible = false;
        };
        this.view.calStartDate.onSelection = function() {
            scope.customDateCount++;
            scope.view.calEndDate.validStartDate = [scope.view.calStartDate.dateComponents[0], scope.view.calStartDate.dateComponents[1], scope.view.calStartDate.dateComponents[2]];
            scope.onCustomDateChange();
        };
        this.view.calEndDate.onSelection = function() {
            scope.customDateCount++;
            scope.view.calStartDate.validEndDate = [scope.view.calEndDate.dateComponents[0], scope.view.calEndDate.dateComponents[1], scope.view.calEndDate.dateComponents[2]];
            scope.onCustomDateChange();
        };
    },
    onCustomDateChange: function() {
        var scope = this;
        var startDate = new Date(scope.view.calStartDate.dateComponents[2], scope.view.calStartDate.dateComponents[1] - 1, scope.view.calStartDate.dateComponents[0]);
        var endDate = new Date(scope.view.calEndDate.dateComponents[2], scope.view.calEndDate.dateComponents[1] - 1, scope.view.calEndDate.dateComponents[0]);
        var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        scope.res = transModPresentationController.getCustomRange(startDate, endDate);
        if (scope.res) {
            scope.advanceSearchOptions.searchStartDate = scope.res.searchStartDate;
            scope.advanceSearchOptions.searchEndDate = scope.res.searchEndDate;
        } else {
            scope.advanceSearchOptions.searchStartDate = "";
            scope.advanceSearchOptions.searchEndDate = "";
        }
    },
    setTodayDate: function() {
        var scope = this;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        //Backend format is YYYY-MM-DD 
        today = yyyy + '-' + mm + '-' + dd + ' 00:00:00';
        scope.advanceSearchOptions.searchStartDate = today;
        scope.advanceSearchOptions.searchEndDate = today;
        var month = new Date().getMonth() + 1;
        var todayDisplay = [new Date().getDate(), month, yyyy];
        scope.view.calStartDate.dateComponents = todayDisplay;
        scope.view.calEndDate.dateComponents = todayDisplay;
        scope.validateDateWidget(todayDisplay);
    },
    showTransactionType: function() {
        if (this.view.flxTransactionTypeValue.isVisible === true) {
            this.view.flxTransactionTypeValue.isVisible = false;
            this.view.imgArrowTransactionType.src = "arrowdown.png";
        } else {
            this.view.flxTransactionTypeValue.isVisible = true;
            this.view.imgArrowTransactionType.src = "arrowup.png";
        }
        /*
        var scope = this;
        var heightValue;
        if (this.view.flxTransactionTypeValue.height === "0dp") {
            heightValue = "preferred";
        } else {
            heightValue = "0dp";
        }
        this.view.flxTransactionTypeValue.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": heightValue
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function () {
                    if (heightValue === "0dp") {
                        scope.view.imgArrowTransactionType.src = "arrowdown.png";
                    } else {
                        scope.view.imgArrowTransactionType.src = "arrowup.png";
                    }
                    scope.view.forceLayout();
                }
            });*/
    },
    toggleCheckbox: function(obj) {
        if (obj.src === "remeberme.png") obj.src = "remembermetick.png";
        else obj.src = "remeberme.png";
        this.view.forceLayout();
    },
    showTimeRange: function() {
        if (this.view.flxTimeRangeValue.isVisible === true) {
            this.view.flxTimeRangeValue.isVisible = false;
            this.view.imgTimeRange.src = "arrowdown.png";
        } else {
            this.view.flxTimeRangeValue.isVisible = true;
            this.view.imgTimeRange.src = "arrowup.png";
        }
        /*  var scope = this;
          var heightValue;
          if (this.view.flxTimeRangeValue.height === "0dp") {
              heightValue = "preferred";
          } else {
              heightValue = "0dp";
          }
          this.view.flxTimeRangeValue.animate(
              kony.ui.createAnimation({
                  "100": {
                      "stepConfig": {
                          "timingFunction": kony.anim.EASE
                      },
                      "height": heightValue
                  }
              }), {
                  "delay": 0,
                  "iterationCount": 1,
                  "fillMode": kony.anim.FILL_MODE_FORWARDS,
                  "duration": 0.25
              }, {
                  "animationEnd": function () {
                      if (heightValue === "0dp") {
                          scope.view.imgTimeRange.src = "arrowdown.png";
                      } else {
                          scope.view.imgTimeRange.src = "arrowup.png";
                      }
                      scope.view.forceLayout();
                  }
              });*/
    },
    setTransactionTypeData: function() {
        var configManager = applicationManager.getConfigurationManager();
        var data = [{
                "lblName": configManager.constants.Deposits,
                "imgIcon": "remeberme.png"
            }, {
                "lblName": configManager.constants.Withdrawals,
                "imgIcon": "remeberme.png"
            }, {
                "lblName": configManager.constants.Checks,
                "imgIcon": "remeberme.png"
            }, {
                "lblName": configManager.constants.Transfers,
                "imgIcon": "remeberme.png"
            }, {
                "lblName": configManager.constants.BillPay,
                "imgIcon": "remeberme.png"
            }
            //P2PDebits txn type not handled in backend
            //           ,
            //             {
            //                 "lblName": configManager.constants.P2PDebits,
            //                 "imgIcon": "remeberme.png"
            //             },
            //P2PCredits txn type not handled in backend
            //             {
            //                 "lblName": configManager.constants.P2PCredits,
            //                 "imgIcon": "remeberme.png"
            //             }
        ];
        this.view.segTransactionType.setData(data);
    },
    setTimeRangeData: function() {
        var configManager = applicationManager.getConfigurationManager();
        var data = [{
            "lblName": configManager.constants.Last7days,
            "imgIcon": "radiobuttoninactive.png"
        }, {
            "lblName": configManager.constants.Last14days,
            "imgIcon": "radiobuttoninactive.png"
        }, {
            "lblName": configManager.constants.Last1Month,
            "imgIcon": "radiobuttoninactive.png"
        }, {
            "lblName": configManager.constants.Last2Months,
            "imgIcon": "radiobuttoninactive.png"
        }, {
            "lblName": configManager.constants.Last3Months,
            "imgIcon": "radiobuttoninactive.png"
        }, {
            "lblName": configManager.constants.Last6Months,
            "imgIcon": "radiobuttoninactive.png"
        }, {
            "lblName": configManager.constants.Last12Months,
            "imgIcon": "radiobuttoninactive.png"
        }, {
            "lblName": configManager.constants.CustomRange,
            "imgIcon": "radiobuttoninactive.png"
        }];
        this.view.segTimeRange.setData(data);
    },
    setTypeData: function() {
        var data = [{
            "lblName": kony.i18n.getLocalizedString("kony.mb.PFMCategorisedTransactions.Title"),
            "imgIcon": "radiobuttoninactive.png"
        }, {
            "lblName": kony.i18n.getLocalizedString("kony.mb.accdetails.blockedFunds"),
            "imgIcon": "radiobuttoninactive.png"
        }];
        this.view.segType.setData(data);
    },
    validateDateWidget: function(endDate) {
        var scope = this;
        scope.view.calEndDate.validEndDate = endDate;
        scope.view.calStartDate.validEndDate = endDate;
    },
    selectedTransactionType: function() {
        var scope = this;
        var searchWord = this.view.tbxSearch.text;
        var data = this.view.segTransactionType.data;
        var indices = this.view.segTransactionType.selectedRowIndices[0][1];
        var selectedData = [];
        var amountRange = new Array(2);
        var chequeRange = new Array(2);
        if (indices.length > 0) {
            for (var i = 0; i < indices.length; i++) {
                selectedData.push(data[indices[i]].lblName);
            }
            if (selectedData.length > 0) {
                scope.advanceSearchOptions.searchTransactionType = selectedData[0];
            }
        }
    },
    navigateToBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});
define("TransactionModule/frmAdvanceSearchControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_d05c21da5019437a9492c7add115ff1b: function AS_FlexContainer_d05c21da5019437a9492c7add115ff1b(eventobject) {
        var self = this;
        this.navigateToBack();
    },
    AS_Form_b86a30d009a2437dbb14ed34167473d9: function AS_Form_b86a30d009a2437dbb14ed34167473d9(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d52d97ede161462aa414787157ea9a08: function AS_Form_d52d97ede161462aa414787157ea9a08(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_db67903c6cdb4d4ba60f642bb20ec704: function AS_Form_db67903c6cdb4d4ba60f642bb20ec704(eventobject) {
        var self = this;
        this.preshow();
    }
});
define("TransactionModule/frmAdvanceSearchController", ["TransactionModule/userfrmAdvanceSearchController", "TransactionModule/frmAdvanceSearchControllerActions"], function() {
    var controller = require("TransactionModule/userfrmAdvanceSearchController");
    var controllerActions = ["TransactionModule/frmAdvanceSearchControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
