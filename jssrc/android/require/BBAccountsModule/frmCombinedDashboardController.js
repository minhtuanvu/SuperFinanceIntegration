define("BBAccountsModule/userfrmCombinedDashboardController", ['CampaignUtility'], function(CampaignUtility) {
    return {
        /**
         * Description
         * @method preshow
         * @return 
         */
        adsHided: false,
        accountsData: null,
        filteredAccountsData: null,
        currAdFlex: 1,
        accountDashboardCampaignData: [],
        numOfAds: 0,
        xOffset: 0,
        imageObjArray: [],
        imageDownloadFailureCount: 0,
        imageDownloadSuccessCount: 0,
        gestIDs: [],
        isSwipeDone: false,
        isOutageShown: false,
        isTapDone: false,
        showPwdWarningFlag: true,
        ACHModule: "",
        timerCounter: 0,
        successResponse: {},
        isApprovalRequestCountHidden: false,
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
            this.limitMonth = this.currentMonth;
        },
        preshow: function() {
            this.ACHModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
            this.showApprovalAndRequestView();
            this.view.flxApprovalTitleContainer.onClick = this.navigateToApprovals;
            this.view.customHeader.flxSearch.onClick = this.navigateToCombinedSelector;
            this.view.flxRequestTitleContainer.onClick = this.navigateToRequests;
            this.isDonutChartDisplayed = false;
            this.isBarChartDisplayed = false;
            this.isMultiLineBarChartDisplayed = false;
            this.view.flxDashboardHeader.showFadingEdges = false;
            this.view.flxSearchContainer.isVisible = false;
            this.view.flxAccountTypes.isVisible = false;
            this.view.flxSelectedAccounts.isVisible = true;
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.lblSelectedAccountType.text = "All Accounts";
            this.view.customSearchbox.tbxSearch.placeholder = "Search by Account Name or Type";
            // this.view.flxScrollContainerAds.onClick=this.toFormLoans;
            this.adsPreshow();
            var navManager = applicationManager.getNavigationManager();
            navManager.setEntryPoint("centralmoneymovement", "frmDashboardAggregated");
            navManager.setEntryPoint("europeTransferFlow", "frmDashboardAggregated");
            this.view.flxDashboard.showFadingEdges = false;
            if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
                this.view.flxTitle.isVisible = true;
                this.view.flxMenu.isVisible = false;
            } else {
                this.view.flxTitle.isVisible = false;
                this.view.flxMenu.isVisible = true;
                this.view.flxDashboardHeader.horizontalScrollIndicator = false;
            }
            this.MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            this.CATEGORY_COUNT = 9;
            var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMode.presentationController.firstTimeLoginDone();
            this.selectedBankSkin = "sknlbl000000SSP26px";
            this.otherBankSkin = "sknLbl0095e4SSPRegular26px";
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            var formatUtility = applicationManager.getFormatUtilManager();
            var custominfoInt = navManager.getCustomInfo("frmDashboard");
            var custominfoExt = navManager.getCustomInfo("frmDashboardAggregated");
            var internalAccounts = this.clone(custominfoInt.accountData);
            var externalAccounts = this.clone(custominfoExt.accountData);
            try {
                Array.prototype.push.apply(internalAccounts, externalAccounts);
            } catch (e) {}
            //var processedAccountsData = accountMod.presentationController.processAccountsData(internalAccounts);
            var totalAvaBal = accountMod.presentationController.getTotalAvailableBalance(internalAccounts);
            var totalDebt = accountMod.presentationController.getTotalDebtBalance(internalAccounts);
            var totalAvlFloat = formatUtility.deFormatAmount(totalAvaBal);
            var totalDebtFloat = formatUtility.deFormatAmount(totalDebt);
            if (internalAccounts.length > 0) {
                var currencyCode = internalAccounts[0]["currencyCode"];
                this.view.lblBankName.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAvlFloat - totalDebtFloat, currencyCode);
            } else {
                this.view.lblBankName.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAvlFloat - totalDebtFloat);
            }
            this.view.lblAssetsValue.text = totalAvaBal;
            this.view.lblDebtValue.text = totalDebt;
            this.mapAccountsAndBanks();
            //         this.view.flxOne.onClick = this.animateDashboardFlex.bind(this);
            //         this.view.flxTwo.onClick = this.animateDashboardFlex.bind(this);
            //         this.view.flxThree.onClick = this.animateDashboardFlex.bind(this);
            this.view.flxHamburger.isVisible = false;
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.setCustomMetrics(this, true, "#Successfull Logins");
            if (custominfoInt.isNavigationFromQuickAction) {
                var basicConfig = {
                    message: custominfoInt.quickActionAlertText,
                    alertIcon: null,
                    alertType: constants.ALERT_TYPE_INFO
                };
                var pspConfig = {};
                applicationManager.getPresentationUtility().showAlertMessage(basicConfig, pspConfig);
                custominfoInt.isNavigationFromQuickAction = false;
            }
            this.initActions();
            this.view.flxDashboard.setContentOffset({
                "y": "0dp"
            });
            this.initPageIndicators();
            this.welcomeVIPCustomer();
            if (this.currentMonth === 1) this.view.flxPrevMonth.setVisibility(false);
            if (this.currentMonth >= this.limitMonth) this.view.flxNextMonth.setVisibility(false);
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "android") {
                kony.application.setApplicationCallbacks({
                    "onforeground": this.changeDashboardHeaderOffset
                });
            }
        },
        showApprovalAndRequestView: function() {
            var configManager = applicationManager.getConfigurationManager();
            var isViewGeneralTransactionsEnabled = configManager.getViewGeneralTransactionPermissionsList().some(configManager.checkUserPermission.bind(configManager));
            var isViewACHTransactionsEnabled = configManager.getViewACHTransactionPermissionsList().some(configManager.checkUserPermission.bind(configManager));
            var isViewACHFilesEnabled = configManager.getViewACHFilePermissionsList().some(configManager.checkUserPermission.bind(configManager));
            var isApproveGeneralTransactionsEnabled = configManager.getGeneralTransactionApprovalFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager));
            var isApproveACHTransactionsEnabled = configManager.getACHTransactionApprovalsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager));
            var isApproveACHFilesEnabled = configManager.getACHFileApprovalsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager));
            var checkUserPermission = function(permission) {
                return applicationManager.getConfigurationManager().checkUserPermission(permission);
            }
            var allApprovalAndRequestPermission = configManager.getApprovalsAndRequestsFeaturePermissionsList();
            var isApprovalOrRequestPermissionAccessible = allApprovalAndRequestPermission.some(checkUserPermission);
            //Some/All of the Approval or request permission access
            if (isApprovalOrRequestPermissionAccessible) {
                this.getCounts();
                this.view.flxApprovalRequest.isVisible = true;
                this.view.flxPageIndicator5.isVisible = true;
                var allApprovalPermission = configManager.getApprovalsFeaturePermissionsList();
                var isApprovalPermissionAccessible = allApprovalPermission.some(checkUserPermission);
                var allRequestPermissionAccessible = configManager.getRequestsFeaturePermissionsList();
                var isRequestPermissionAccessible = allRequestPermissionAccessible.some(checkUserPermission);
                if (isApprovalPermissionAccessible && !isRequestPermissionAccessible) {
                    //show only approbval counts
                    this.view.flxApprovalContainer.isVisible = true;
                    this.view.flxRequestContainer.isVisible = false;
                    this.view.flxApprovalContainer.width = "90%";
                }
                if (!isApprovalPermissionAccessible && isRequestPermissionAccessible) {
                    //show only request Count
                    this.view.flxApprovalContainer.isVisible = false;
                    this.view.flxRequestContainer.isVisible = true;
                    this.view.flxRequestContainer.left = "8%";
                    this.view.flxRequestContainer.width = "92%";
                }
                this.view.flxApprovalTransactionContainer.isVisible = (isViewGeneralTransactionsEnabled && isApproveGeneralTransactionsEnabled);
                this.view.flxApprovalACHTransactionContainer.isVisible = (isViewACHTransactionsEnabled && isApproveACHTransactionsEnabled);
                this.view.flxApprovalACHFileContainer.isVisible = (isViewACHFilesEnabled && isApproveACHFilesEnabled);
            }
            //no permission access
            else {
                //hide all the UI of Approval and Request counts
                this.view.flxApprovalRequest.isVisible = false;
                //change pageIndicator
                this.isApprovalRequestCountHidden = true;
                this.view.flxPageIndicator5.isVisible = false;
                //show multiline bar chart on preshow
                this.displayMultiLineBarChart();
                this.isMultiLineBarChartDisplayed = true;
            }
        },
        initPageIndicators: function() {
            var len = this.view.flxPageIndicators.widgets().length;
            if (this.isApprovalRequestCountHidden) {
                len = len - 1;
            }
            for (let index = 1; index <= len; index++) {
                this.view["flxPageIndicator" + index].skin = "sknFlxPageIndicatorUnselected";
            }
            this.view["flxPageIndicator1"].skin = "sknFlxPageIndicatorSelected";
        },
        changeDashboardHeaderOffset: function() {
            var navManager = applicationManager.getNavigationManager();
            if (navManager.getCurrentForm() == "frmDashboardAggregated") {
                var scrollX = this.view.flxDummyHorizontalScroll.contentOffsetMeasured.x;
                this.view.flxDashboardHeader.setContentOffset({
                    "x": scrollX + "dp"
                });
            }
        },
        resetDashboardFlex: function() {
            if (this.view.imgChartSizeToggle.src !== "arrowdown.png") {
                this.view.imgChartSizeToggle.src = "arrowdown.png";
                this.view.flxDashboard.zIndex = 6;
                if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                    this.view.flxDashboard.bottom = "60dp";
                    this.view.flxMenu.bottom = "0dp";
                }
                this.view.flxDummyHorizontalScroll.height = "250dp"
                    //this.view.flxGradient.height = "55%";
                    //this.view.flxDashboardHeader.height = "55%";
                    //       this.view.flxBarSegment.setVisibility(false);
                    //       this.view.flxSummarySegment.setVisibility(false);
                    //       this.view.flxDonutSegment.setVisibility(false);
                this.view.flxDashboard.enableScrolling = true;
                this.view.flxDummyHorizontalScroll.setEnabled(true);
                //this.view.flxChartSizeToggle.setEnabled(true);
                this.view.flxDummyHorizontalScroll.enableScrolling = true;
            }
        },
        showPwdWarning: function() {
            this.showPwdWarningFlag = false;
            var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            var passwordWarning = authMode.presentationController.getPasswordWarning();
            if (passwordWarning && passwordWarning.passwordExpiryWarningRequired == "true") {
                var msg = "Your password will expire in " + passwordWarning.passwordExpiryRemainingDays + " days. " + "Do you want to change it now?";
                this.bindGenericError(msg);
            }
        },
        bindGenericError: function(msg) {
            applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
        },
        mapInternalAccounts: function() {
            var scope = this;
            var navManager = applicationManager.getNavigationManager();
            var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            this.view.segAccounts.rowTemplate = "flxAccountsNoImage";
            //this.view.flxSelectAccount.isVisible = false;
            //this.view.flxChartSizeToggle.skin = "sknFlxffffff";
            var custominfoInt = navManager.getCustomInfo("frmDashboard");
            var internalAccounts = this.clone(custominfoInt.accountData);
            var processedAccountsData = accountMod.presentationController.processAccountsData(internalAccounts);
            processedAccountsData.forEach(function(record) {
                record.flxDelete = {};
                record.imgDelete = {};
                record.lblDelete = {};
                record.type = "internal";
                record.flxDelete.onClick = scope.alertCallBack;
                record.flxDelete.skin = "slFSbox";
                record.imgDelete.src = "alert.png";
                record.lblDelete.text = "Alerts";
                record.lblDelete.skin = "sknLbl004B95SSPRegular20px";
            });
            this.view.segAccounts.widgetDataMap = {
                lblAccountName: "nickName",
                lblAccountBalValue: "availableBalance",
                lblBankName: "accountType",
                lblAccountId: "accountID",
                lblAccountBal: "accountBalanceType",
                imgEngageInsertIcon: "engageInsertIcon",
                lblEngageInsertCaption: "engageInsertCaption",
                lblEngageInsertText: "engageInsertText",
                btnEngageInsertChatNow: "engageInsertChatNow",
                type: "type",
                flxDelete: "flxDelete",
                imgDelete: "imgDelete",
                lblDelete: "lblDelete"
            };
            if (campaignMod.presentationController.isLoggedIn === true) {
                processedAccountsData.push(campaignMod.presentationController.loanData);
            }
            if (applicationManager.getConfigurationManager().isEngageEnabled()) {
                this.updateForEngageFeatureAnnouncement(processedAccountsData);
            }
            this.view.segAccounts.setData(processedAccountsData);
            this.setDummyData();
            this.removeBlueScreen(processedAccountsData);
        },
        setDummyData: function() {
            var xdata = [
                [{
                        "lblTypeName": "Checking Accounts (3)",
                        "lblTypeValue": "$127,912.00"
                    },
                    [{
                        "accountName": "Business Advantage Savings",
                        "availableBalance": "$510,852.74",
                        "accountID": "200528075255840",
                        "bankName": "Infinity",
                        "accountBalanceType": "Available Balance",
                        "accountType": "Savings",
                        "nickName": "Business Savings",
                        "flxDelete": {
                            "skin": "slFSbox"
                        },
                        "imgDelete": {
                            "src": "alert.png"
                        },
                        "lblDelete": {
                            "text": "Alerts",
                            "skin": "sknLbl004B95SSPRegular20px"
                        },
                        "type": "internal",
                        "template": "flxAccountsNoImage"
                    }, {
                        "accountName": "Business Advantage Savings",
                        "availableBalance": "$510,852.74",
                        "accountID": "200528075255840",
                        "bankName": "Infinity",
                        "accountBalanceType": "Available Balance",
                        "accountType": "Savings",
                        "nickName": "Business Savings",
                        "flxDelete": {
                            "skin": "slFSbox"
                        },
                        "imgDelete": {
                            "src": "alert.png"
                        },
                        "lblDelete": {
                            "text": "Alerts",
                            "skin": "sknLbl004B95SSPRegular20px"
                        },
                        "type": "internal",
                        "template": "flxAccountsNoImage"
                    }, {
                        "accountName": "Business Advantage Savings",
                        "availableBalance": "$510,852.74",
                        "accountID": "200528075255840",
                        "bankName": "Infinity",
                        "accountBalanceType": "Available Balance",
                        "accountType": "Savings",
                        "nickName": "Business Savings",
                        "flxDelete": {
                            "skin": "slFSbox"
                        },
                        "imgDelete": {
                            "src": "alert.png"
                        },
                        "lblDelete": {
                            "text": "Alerts",
                            "skin": "sknLbl004B95SSPRegular20px"
                        },
                        "type": "internal",
                        "template": "flxAccountsNoImage"
                    }, {
                        "lblViewAll": "View All",
                        "template": "flxViewAll"
                    }]
                ],
                [{
                        "lblTypeName": "Saving Accounts (3)",
                        "lblTypeValue": "$83,912.00"
                    },
                    [{
                        "accountName": "Business Advantage Savings",
                        "availableBalance": "$510,852.74",
                        "accountID": "200528075255840",
                        "bankName": "Infinity",
                        "accountBalanceType": "Available Balance",
                        "accountType": "Savings",
                        "nickName": "Business Savings",
                        "flxDelete": {
                            "skin": "slFSbox"
                        },
                        "imgDelete": {
                            "src": "alert.png"
                        },
                        "lblDelete": {
                            "text": "Alerts",
                            "skin": "sknLbl004B95SSPRegular20px"
                        },
                        "type": "internal",
                        "template": "flxAccountsNoImage"
                    }, {
                        "accountName": "Business Advantage Savings",
                        "availableBalance": "$510,852.74",
                        "accountID": "200528075255840",
                        "bankName": "Infinity",
                        "accountBalanceType": "Available Balance",
                        "accountType": "Savings",
                        "nickName": "Business Savings",
                        "flxDelete": {
                            "skin": "slFSbox"
                        },
                        "imgDelete": {
                            "src": "alert.png"
                        },
                        "lblDelete": {
                            "text": "Alerts",
                            "skin": "sknLbl004B95SSPRegular20px"
                        },
                        "type": "internal",
                        "template": "flxAccountsNoImage"
                    }, {
                        "accountName": "Business Advantage Savings",
                        "availableBalance": "$510,852.74",
                        "accountID": "200528075255840",
                        "bankName": "Infinity",
                        "accountBalanceType": "Available Balance",
                        "accountType": "Savings",
                        "nickName": "Business Savings",
                        "flxDelete": {
                            "skin": "slFSbox"
                        },
                        "imgDelete": {
                            "src": "alert.png"
                        },
                        "lblDelete": {
                            "text": "Alerts",
                            "skin": "sknLbl004B95SSPRegular20px"
                        },
                        "type": "internal",
                        "template": "flxAccountsNoImage"
                    }, {
                        "lblViewAll": "View All",
                        "template": "flxViewAll"
                    }]
                ]
            ];
            this.view.segAccounts.setData(xdata);
        },
        showFullAccountList: function(sectionNumber) {
            kony.print(sectionNumber);
        },
        alertCallBack: function(wdgt, context) {
            var settingsModule = applicationManager.getModulesPresentationController("SettingsModule");
            var rowid = context.rowIndex;
            var selectedAccountId = this.view.segAccounts.data[rowid]["accountID"];
            var params = {
                "AlertCategoryId": "ALERT_CAT_ACCOUNTS",
                "AccountId": selectedAccountId
            };
            var name = applicationManager.getPresentationUtility().formatText(this.view.segAccounts.data[rowid]["nickName"], 10, selectedAccountId, 4);
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmAlertsListHeader", name);
            settingsModule.setAlertsCategoryID("ALERT_CAT_ACCOUNTS");
            settingsModule.setAccountID(selectedAccountId);
            settingsModule.getAlertsBasedOnAccounts(params);
        },
        refreshCallBack: function() {
            var data = this.view.segAccounts.selectedItems[0];
            var bank = data.accountID.split("-")[0];
            var externalAccountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ExternalAccountsModule");
            externalAccountMod.presentationController.refreshConsent(bank);
        },
        deleteCallBack: function() {
            var basicConfig = {
                "alertType": constants.ALERT_TYPE_CONFIRMATION,
                "message": "Are you sure you want to remove this account ?",
                "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
                "alertHandler": this.deleteConnection
            };
            applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});
        },
        deleteConnection: function(response) {
            if (response === true) {
                var data = this.view.segAccounts.selectedItems[0];
                var bank = data.accountID.split("-")[0];
                var externalAccountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ExternalAccountsModule");
                externalAccountMod.presentationController.deleteConnection(bank);
            }
        },
        updateForEngageFeatureAnnouncement: function(accountsData) {
            var engagePresentationController = applicationManager.getModulesPresentationController("EngageModule");
            var config = engagePresentationController.getFeatureAnnouncementConfiguration();
            var advertEnabled = false,
                insertEnabled = false,
                insertLocation = null;
            if (!kony.sdk.isNullOrUndefined(config)) {
                if (applicationManager.getEngageManager().isEngageProvisioned()) {
                    advertEnabled = config.engageAdvertEnabledForExistingUsers;
                    insertEnabled = config.engageInsertEnabledForExistingUsers;
                } else {
                    advertEnabled = config.engageAdvertEnabledForNewUsers;
                    insertEnabled = config.engageInsertEnabledForNewUsers;
                }
                insertLocation = config.engageInsertLocation;
            }
            if (insertEnabled === true) {
                var i = -1;
                switch (insertLocation) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = Math.floor((this.view.segAccounts.data.length + 1) / 2);
                        break;
                    case "bottom":
                        i = this.view.segAccounts.data.length;
                        break;
                }
                if (i >= 0) {
                    var dataObj = {
                        "template": "flxAccountsEngageInsert",
                        "engageInsertIcon": {},
                        "engageInsertCaption": {},
                        "engageInsertText": {},
                        "engageInsertChatNow": {
                            "onClick": this.invokeEngage
                        }
                    };
                    accountsData.splice(i, 0, dataObj);
                }
            }
            if (advertEnabled === true) {
                this.view.flxSuggestedOffers.isVisible = false;
                this.view.flxEngageAdvert.isVisible = true;
                this.view.btnEngageAdvertChatNow.onClick = this.invokeEngage.bind(this);
            } else {
                this.view.flxSuggestedOffers.isVisible = true;
                this.view.flxEngageAdvert.isVisible = false;
                this.view.btnEngageAdvertChatNow.onClick = null;
            }
        },
        invokeEngage: function() {
            applicationManager.getModulesPresentationController("EngageModule").invokeEngage();
        },
        displayBarChart: function() {
            var navManager = applicationManager.getNavigationManager();
            var barData = navManager.getCustomInfo("frmDashboardPFMBar");
            //var balanceBars = this.view.allBalanceBars.widgets();
            var p = 0;
            this.limitMonth = 12;
            for (p = 0; p < barData.length; p++) {
                if (p >= this.limitMonth) {
                    barData[p].totalCashFlow = 0;
                }
            }
            var maxAmount = barData.reduce(function(previous, record) {
                if (previous > parseInt(record.totalCashFlow)) {
                    return previous;
                }
                return parseInt(record.totalCashFlow);
            }, 0).toFixed(2);
            var barGraphLabels = [];
            var barGraphData = [];
            var barSegData = [];
            var formatUtility = applicationManager.getFormatUtilManager();
            for (p = 0; p < barData.length; p++) {
                if (p < this.limitMonth) {
                    barSegData.push({
                        "monthName": kony.i18n.getLocalizedString("kony.mb.Months." + barData[p].monthName),
                        "totalCashFlow": formatUtility.formatAmountandAppendCurrencySymbol(barData[p].totalCashFlow)
                    });
                    barGraphLabels.push(kony.i18n.getLocalizedString("kony.mb.Months." + barData[p].monthName));
                    barGraphData.push(barData[p].totalCashFlow);
                }
            }
            var currencySymbol = formatUtility.getCurrencySymbol();
            var x = this.view.browserBarChart.evaluateJavaScript("AddBarChart(" + JSON.stringify(barGraphLabels) + "," + JSON.stringify(barGraphData) + ",'" + currencySymbol + "')");
            // 		this.view.segBar.widgetDataMap = {
            //             "lblSpending": "monthName",
            //             "lblAmountSpent": "totalCashFlow",
            //         };
            //         this.view.segBar.setData(barSegData);
            this.view.forceLayout();
        },
        displayDonutChart: function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var navManager = applicationManager.getNavigationManager();
            var pieData = navManager.getCustomInfo("frmDashboardPFMPie");
            var chartData_Labels = [];
            var chartData_values = [];
            var segSpendingData = [];
            var formatUtility = applicationManager.getFormatUtilManager();
            var totalAmount = pieData.reduce(function(previous, record) {
                return previous + Number(record.cashSpent);
            }, 0).toFixed(2);
            pieData.forEach(function(record) {
                var percentageValue = Math.round((record.cashSpent * 100) / totalAmount) + "";
                chartData_Labels.push(kony.i18n.getLocalizedString("kony.mb.PFM." + record.categoryName) + ", " + percentageValue + "%");
                chartData_values.push(percentageValue);
                percentageValue += "%";
                segSpendingData.push({
                    "categoryName": kony.i18n.getLocalizedString("kony.mb.PFM." + record.categoryName) + " - " + percentageValue,
                    "cashSpent": formatUtility.formatAmountandAppendCurrencySymbol(record.cashSpent)
                });
            });
            //         this.view.segTransactions.widgetDataMap = {
            //             "lblSpending": "categoryName",
            //             "lblAmountSpent": "cashSpent",
            //         };
            //       	this.view.segTransactions.setData(segSpendingData);
            var x = this.view.browserChart.evaluateJavaScript("AddDonutChart(" + JSON.stringify(chartData_Labels) + "," + JSON.stringify(chartData_values) + ");");
            this.view.lblTotalSpendingValue.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAmount);
            //         this.view.lblMonthAndYearSummary.text = kony.i18n.getLocalizedString("kony.mb.Months."+this.MONTH_NAMES[this.currentMonth - 1]);
            //         this.view.lblMonthAndYear.text = kony.i18n.getLocalizedString("kony.mb.Months."+this.MONTH_NAMES[this.currentMonth - 1]);
            this.view.lblTotalSpendingValue.isVisible = true;
            this.view.lblTotalSpending.isVisible = true;
            if (!x) {
                //Error in creating PFM Charts
            }
            this.view.forceLayout();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        displayMultiLineBarChart: function() {
            var navManager = applicationManager.getNavigationManager();
            var cashPositionGraphData = navManager.getCustomInfo("frmDashboardPFMCashPosition");
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var prevFourMonth = [];
            var date = new Date();
            var fullyear = date.getFullYear();
            fullyear = fullyear.toString().slice(2);
            for (var i = 4; i > 0; i--) {
                var month = months[(new Date()).getMonth() - i];
                prevFourMonth.push(month);
            }
            var lastFourMonthData = [];
            if (!kony.sdk.isNullOrUndefined(cashPositionGraphData) && Array.isArray(cashPositionGraphData)) {
                for (var i = 0; i < prevFourMonth.length; i++) {
                    for (var j = 0; j < cashPositionGraphData.length; j++) {
                        if (prevFourMonth[i].toLowerCase() == cashPositionGraphData[j].span.toLowerCase()) {
                            lastFourMonthData.push(cashPositionGraphData[j]);
                            break;
                        }
                    }
                }
            }
            for (var i = 0; i < prevFourMonth.length; i++) {
                prevFourMonth[i] = prevFourMonth[i] + ", " + fullyear;
            }
            var creditData = [];
            var debitData = [];
            var availableData = [];
            if (lastFourMonthData.length > 0) {
                for (var i = 0; i < lastFourMonthData.length; i++) {
                    var creditValue = 0;
                    var debitValue = 0;
                    var availableValue = 0;
                    if (!kony.sdk.isNullOrUndefined(lastFourMonthData[i]) && !kony.sdk.isNullOrUndefined(lastFourMonthData[i].credit)) {
                        creditValue = parseFloat(lastFourMonthData[i].credit).toFixed(2);
                    }
                    if (!kony.sdk.isNullOrUndefined(lastFourMonthData[i]) && !kony.sdk.isNullOrUndefined(lastFourMonthData[i].debit)) {
                        debitValue = parseFloat(lastFourMonthData[i].debit).toFixed(2);
                    }
                    if (!kony.sdk.isNullOrUndefined(lastFourMonthData[i]) && !kony.sdk.isNullOrUndefined(lastFourMonthData[i].total_balance)) {
                        availableValue = parseFloat(lastFourMonthData[i].total_balance).toFixed(2);
                    }
                    creditData.push(creditValue);
                    debitData.push(debitValue);
                    availableData.push(availableValue);
                }
            } else {
                for (var i = 0; i < 4; i++) {
                    var creditValue = 0;
                    var debitValue = 0;
                    var availableValue = 0;
                    creditData.push(creditValue);
                    debitData.push(debitValue);
                    availableData.push(availableValue);
                }
            }
            var cashPositionData = [];
            cashPositionData.push(creditData);
            cashPositionData.push(debitData);
            cashPositionData.push(availableData);
            var formatUtility = applicationManager.getFormatUtilManager();
            var currencySymbol = formatUtility.getCurrencySymbol();
            var x = this.view.browserMultiLine.evaluateJavaScript("addMultiLineBarChart(" + JSON.stringify(prevFourMonth) + "," + JSON.stringify(cashPositionData) + ",'" + currencySymbol + "')");
        },
        prevMonthClick: function() {
            if (this.currentMonth === 1) {
                return;
            }
            this.view.flxNextMonth.setVisibility(true);
            this.prevMonth = parseInt(this.currentMonth) - 1;
            this.nextMonth = -1;
            this.goToMonth(this.prevMonth);
        },
        nextMonthClick: function() {
            if (this.currentMonth >= this.limitMonth) {
                return;
            }
            this.view.flxPrevMonth.setVisibility(true);
            this.prevMonth = -1;
            this.nextMonth = parseInt(this.currentMonth) + 1;
            this.goToMonth(this.nextMonth);
        },
        goToMonth: function(monthId) {
            var date = new Date();
            var presentYear = date.getFullYear();
            applicationManager.getPresentationUtility().showLoadingScreen();
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountMod.presentationController.fetchMonthPFMData(monthId, presentYear, this.monthFetchSuccess, this.monthFetchFailure);
        },
        monthFetchSuccess: function(response) {
            if (response.length > 0) {
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmDashboardPFMPie", response);
                if (this.prevMonth === -1) {
                    this.currentMonth++;
                } else if (this.nextMonth === -1) {
                    this.currentMonth--;
                }
                if (this.currentMonth === 1) this.view.flxPrevMonth.setVisibility(false);
                if (this.currentMonth >= this.limitMonth) this.view.flxNextMonth.setVisibility(false);
                this.displayBarChart();
                this.displayDonutChart();
                this.displayMultiLineBarChart();
            } else {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }
        },
        monthFetchFailure: function(response) {
            kony.ui.Alert("Something went wrong");
        },
        sortAccountsBasedOnType: function(accounts) {
            accounts.sort(function(account1, account2) {
                return account1.accountType.localeCompare(account2.accountType);
            });
        },
        getOrganisationAccountsMap: function(accounts) {
            var businessAccounts = this.getDistinctBusinessAccount(accounts);
            var orgAccounts = {};
            if (businessAccounts.length == 0) {
                orgAccounts = {
                    "Personal Accounts": [],
                    "Business Accounts": []
                };
                accounts.forEach(function(account) {
                    if (account.isBusinessAccount === "true") orgAccounts["Business Accounts"].push(account);
                    else orgAccounts["Personal Accounts"].push(account);
                });
            } else {
                orgAccounts["Personal Accounts"] = [];
                for (var i = 0; i < businessAccounts.length; i++) {
                    orgAccounts[businessAccounts[i]] = [];
                }
                accounts.forEach(function(account) {
                    if (account.isBusinessAccount === "true") {
                        if (!kony.sdk.isNullOrUndefined(account.MembershipName) && account.MembershipName !== "") {
                            orgAccounts[account.MembershipName].push(account);
                        }
                    } else orgAccounts["Personal Accounts"].push(account);
                });
            }
            return orgAccounts;
        },
        getDistinctBusinessAccount: function(accounts) {
            var businessAccounts = [];
            for (var i = 0; i < accounts.length; i++) {
                if (accounts[i].isBusinessAccount === "true") {
                    if (!kony.sdk.isNullOrUndefined(accounts[i].MembershipName) && accounts[i].MembershipName !== "") {
                        if (businessAccounts.indexOf(accounts[i].MembershipName) === -1) {
                            businessAccounts.push(accounts[i].MembershipName);
                        }
                    }
                }
            }
            businessAccounts.sort();
            return businessAccounts;
        },
        processAccountsDataForSegment: function(accounts) {
            for (var key in accounts) {
                accounts[key].forEach(function(account) {
                    var imgIcon = "businessaccount.png";
                    if (key === "Personal Accounts") {
                        imgIcon = "personalaccount.png";
                    }
                    account.imgAccountType = {
                        "src": imgIcon
                    };
                    account.imgBank = {
                        "src": (account.logoURL) ? account.logoURL : "",
                        "isVisible": (account.logoURL) ? true : false
                    };
                    account.flximgBank = {
                        "isVisible": (account.logoURL) ? true : false
                    };
                    account.availableBalanceValue = {
                        "text": applicationManager.getFormatUtilManager().formatAmountandAppendCurrencySymbol(account.availableBalance, account.currencyCode)
                    };
                    account.lblAccountBal = {
                        "text": "Available Balance"
                    };
                    account.flxSeparator = {
                        "isVisible": true
                    };
                    account.maskedNickName = {
                        "text": (account.nickName).substr(0, 25).trim()
                    }
                    account.maskedAccountNumber = {
                        "text": "..." + (account.accountID).substr((account.accountID).length - 4)
                    };
                });
            }
            this.filteredAccountsData = this.clone(accounts);
        },
        getSegmentDataForAccounts: function(accounts, limit) {
            var segData = [];
            this.processAccountsDataForSegment(accounts);
            for (var key in accounts) {
                var viewAllConfig = {
                    "template": "flxClearViewAll",
                    "lblViewAll": {
                        "text": "View All"
                    },
                    "imgViewAll": {
                        "src": "chevronright.png"
                    },
                    "flxViewContainer": {
                        "onClick": function(eventobject, context) {
                            var accountsData = {};
                            var accountsKeys = Object.keys(this.filteredAccountsData);
                            accountsData[accountsKeys[context.sectionIndex]] = this.filteredAccountsData[accountsKeys[context.sectionIndex]];
                            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                            accountMod.presentationController.showAccountsData(accountsData);
                        }.bind(this)
                    }
                };
                var rowData = accounts[key];
                if (accounts[key].length > limit) {
                    rowData = accounts[key].slice(0, limit);
                    rowData.push(viewAllConfig);
                }
                segData.push([{
                        "template": "flxAccountsHeaderDashboardExact",
                        "flxHeaderShadows": {
                            "isVisible": false
                        },
                        "flxSeperator": {
                            "isVisible": true
                        },
                        "lblTypeName": {
                            "text": key + "(" + accounts[key].length + ")"
                        }
                    },
                    rowData
                ]);
            }
            return segData;
        },
        getAccountsWidgetDataMap: function() {
            return {
                "lblBankName": "accountType",
                "imgAccountType": "imgAccountType",
                "imgBank": "imgBank",
                "flximgBank": "flximgBank",
                "lblAccountBal": "lblAccountBal",
                "lblAccountBalValue": "availableBalanceValue",
                "flxSeparator": "flxSeparator",
                "lblAccountName": "maskedNickName",
                "lblAccountNumber": "maskedAccountNumber",
                "lblTypeName": "lblTypeName",
                "flxHeaderShadows": "flxHeaderShadows",
                "flxSeperator": "flxSeperator",
                "template": "template",
                "lblTypeValue": "lblTypeValue",
                "lblViewAll": "lblViewAll",
                "imgViewAll": "imgViewAll",
                "flxViewContainer": "flxViewContainer"
            };
        },
        /**
         * Description
         * @method mapAccountsAndBanks
         * @return 
         */
        mapAccountsAndBanks: function() {
            try {
                var navManager = applicationManager.getNavigationManager();
                var custominfoInt = navManager.getCustomInfo("frmDashboard");
                var accounts = this.clone(custominfoInt.accountData);
                this.sortAccountsBasedOnType(accounts);
                var processedAccounts = this.getOrganisationAccountsMap(accounts);
                var accountsSegmentData = this.getSegmentDataForAccounts(processedAccounts, 5);
                this.view.segAccounts.widgetDataMap = this.getAccountsWidgetDataMap();
                this.accountsData = this.clone(processedAccounts);
                this.view.segAccounts.setData(accountsSegmentData);
                this.view.segAccounts.onRowClick = function(seguiWidget, sectionNumber, rowNumber, selectedState) {
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    var accountData = seguiWidget.data[sectionNumber][1][rowNumber];
                    var formflow = navManager.setCustomInfo("frmdashboardflow", "frmCombinedDashboard");
                    var accountsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                    accountsModule.presentationController.fetchTransactionsByAccountId(accountData);
                }.bind(this);
                this.setSelectAccountTypeData(processedAccounts);
                this.showorHideScrollingMenu(true);
                this.view.forceLayout();
            } catch (exp) {}
        },
        /**
         * Description
         * @method setBankAccounts
         * @param {} accountResponse
         * @return 
         */
        setBankAccounts: function(internalAccounts, externalAccounts) {
            this.view.lblSelectedAccountType.text = kony.i18n.getLocalizedString("kony.mb.common.allAccounts");
            this.view.segAccounts.rowTemplate = "flxAccounts";
            this.view.flxChartSizeToggle.skin = "sknFlxf9f9f9";
            this.view.flxChartSizeToggle.isVisible = false;
            this.view.flxSelectAccount.isVisible = true;
            var bankJS = {};
            var banks = [{
                "lblName": {
                    "text": kony.i18n.getLocalizedString("kony.mb.common.allAccounts"),
                    "skin": this.selectedBankSkin
                },
                "imgIcon": "tickmark_green.png"
            }];
            if (!kony.sdk.isNullOrUndefined(internalAccounts) && internalAccounts.length > 0) {
                internalAccounts.forEach(function(record) {
                    if (!bankJS[record.bankName]) {
                        banks.push({
                            "lblName": {
                                "text": (record.bankName).toUpperCase() + " " + kony.i18n.getLocalizedString("kony.mb.common.accounts"),
                                "skin": "sknLbl0095e4SSPRegular26px"
                            },
                            "imgIcon": ""
                        });
                        bankJS[record.bankName] = true;
                    }
                });
            }
            if (!kony.sdk.isNullOrUndefined(externalAccounts) && externalAccounts.length > 0) {
                externalAccounts.forEach(function(record) {
                    if (!bankJS[record.BankName]) {
                        banks.push({
                            "lblName": {
                                "text": (record.BankName).toUpperCase() + " " + kony.i18n.getLocalizedString("kony.mb.common.accounts"),
                                "skin": "sknLbl0095e4SSPRegular26px"
                            },
                            "imgIcon": ""
                        });
                        bankJS[record.BankName] = true;
                    }
                });
            }
            this.view.segAccountTypes.setData(banks);
        },
        /**
         * Description
         * @method setAccountsInfo
         * @param {} accountResponse
         * @param {} bankName
         * @return 
         */
        setAccountsInfo: function(internalAccounts, externalAccounts, bankName) {
            if (bankName !== kony.i18n.getLocalizedString("kony.mb.common.allAccounts")) {
                var len = bankName.length;
                var x = len - bankName.lastIndexOf(" ");
                bankName = (bankName.substring(0, len - x)).toLowerCase().trim();
            }
            var scope = this;
            var typesJS = {};
            var typeBalance = {};
            var types = [];
            var data = [];
            var summaryData = [];
            var totalBalance = 0;
            var totalAsset = 0;
            var totalDebt = 0;
            var formatUtility = applicationManager.getFormatUtilManager();
            var configManager = applicationManager.getConfigurationManager();
            var TypeManager = applicationManager.getTypeManager();
            if (!kony.sdk.isNullOrUndefined(internalAccounts) && internalAccounts.length > 0) {
                internalAccounts.forEach(function(record) {
                    var AvailableBalance;
                    if (record.accountType === TypeManager.getAccountTypeBackendValue(configManager.accountTypes.LOAN) || record.accountType === TypeManager.getAccountTypeBackendValue(configManager.accountTypes.CREDITCARD)) {
                        AvailableBalance = record.outstandingBalance;
                    } else if (record.accountType === TypeManager.getAccountTypeBackendValue(configManager.accountTypes.DEPOSIT)) {
                        AvailableBalance = record.currentBalance;
                    } else {
                        AvailableBalance = record.availableBalance;
                    }
                    record.flxDelete = {};
                    record.imgDelete = {};
                    record.lblDelete = {};
                    record.type = "internal";
                    record.flxDelete.onClick = scope.alertCallBack;
                    record.flxDelete.skin = "slFSbox";
                    record.imgDelete.src = "alert.png";
                    record.lblDelete.text = "Alerts";
                    record.lblDelete.skin = "sknLbl004B95SSPRegular20px";
                    externalAccounts.unshift({
                        "BankLogo": "konybanklogo.png",
                        "AccountName": record.accountName,
                        "AvailableBalance": AvailableBalance,
                        "BankName": record.bankName,
                        "LastUpdated": "AvailableBalance",
                        "type": "internal",
                        "TypeDescription": record.accountType,
                        "AccountId": record.accountID,
                        "errorIcon": "",
                        "Last4DigitAccount": "..." + (record.accountID).substr((record.accountID).length - 4),
                        "NickName": record.nickName,
                        "CurrencyCode": record.currencyCode,
                        "flxDelete": record.flxDelete,
                        "imgDelete": record.imgDelete,
                        "lblDelete": record.lblDelete,
                        "currentBalance": record.currentBalance,
                        "outstandingBalance": record.outstandingBalance
                    });
                });
            }
            if (!kony.sdk.isNullOrUndefined(externalAccounts) && externalAccounts.length > 0) {
                externalAccounts.forEach(function(record) {
                    if (bankName === kony.i18n.getLocalizedString("kony.mb.common.allAccounts") || bankName === (record.BankName).toLowerCase().trim()) {
                        if (record.TypeDescription !== null && record.TypeDescription !== undefined) {
                            if (!typesJS[record.TypeDescription]) {
                                typesJS[record.TypeDescription] = [];
                                typeBalance[record.TypeDescription] = 0;
                                types.push(record.TypeDescription);
                            }
                            typesJS[record.TypeDescription].push(record);
                            if ((record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.SAVINGS)).toLowerCase()) || (record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.CHECKING)).toLowerCase())) {
                                typeBalance[record.TypeDescription] = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
                            } else if ((record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.DEPOSIT)).toLowerCase()) || (record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.CREDITCARD)).toLowerCase())) {
                                typeBalance[record.TypeDescription] = kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
                            } else if ((record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.LOAN)).toLowerCase()) || (record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.MORTGAGE)).toLowerCase())) {
                                typeBalance[record.TypeDescription] = kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
                            } else {
                                typeBalance[record.TypeDescription] = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
                            }
                            if (isNaN(parseFloat(record.AvailableBalance))) {
                                record.AvailableBalance = "0.00";
                            }
                            if (record.TypeDescription.toLowerCase() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.SAVINGS)).toLowerCase() || record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.CHECKING)).toLowerCase() || record.TypeDescription.toLowerCase() === "current" || record.TypeDescription.toLowerCase() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.DEPOSIT)).toLowerCase()) {
                                if (record.TypeDescription.toLowerCase() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.DEPOSIT))) totalAsset = totalAsset + parseFloat(record.currentBalance);
                                else totalAsset = totalAsset + parseFloat(record.AvailableBalance);
                                if (!kony.sdk.isNullOrUndefined(record.nickName)) {
                                    record.NickName = record.nickName;
                                } else if (kony.sdk.isNullOrUndefined(record.NickName) && kony.sdk.isNullOrUndefined(record.nickName)) {
                                    record.NickName = record.AccountName;
                                }
                                summaryData.push(record);
                            }
                            if (record.TypeDescription.toLowerCase() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.MORTGAGE)).toLowerCase() || record.TypeDescription.toLowerCase() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.LOAN)).toLowerCase()) {
                                if (record.TypeDescription.toLowerCase() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.LOAN)).toLowerCase()) totalDebt = totalDebt + parseFloat(record.outstandingBalance);
                                else totalDebt = totalDebt + parseFloat(record.AvailableBalance);
                            }
                            record.AvailableBalance = formatUtility.formatAmountandAppendCurrencySymbol(record.AvailableBalance, record.CurrencyCode);
                            var forUtility = applicationManager.getFormatUtilManager();
                            if (record.LastUpdated) record.LastUpdated = forUtility.getTimeDiferenceOfDate(record.LastUpdated);
                            if (record.Number) {
                                record.Last4DigitAccount = "..." + (record.Number).substr((record.Number).length - 4);
                            }
                            if (!record.type) {
                                record.type = "external";
                            }
                            if (!kony.sdk.isNullOrUndefined(record.error) && record.error.trim() !== "") {
                                record.errorIcon = {
                                    src: "erroricon.png",
                                    isVisible: true
                                };
                            } else {
                                record.errorIcon = {
                                    src: "",
                                    isVisible: false
                                };
                            }
                            if (record.externalIndicator !== undefined && record.externalIndicator === "true") {
                                if (record.LastUpdated) {
                                    var formatUtilManager = applicationManager.getFormatUtilManager();
                                    var dateObj = formatUtilManager.getDateObjectfromString(record.processingTime, "YYYY-MM-DD HH:MM:SS");
                                    record.LastUpdated = "as of " + formatUtilManager.getFormatedDateString(dateObj, formatUtilManager.getApplicationDateTimeFormat());
                                }
                                record.flxDelete = {};
                                record.flxRefresh = {};
                                record.imgDelete = {};
                                record.lblDelete = {};
                                record.flxDelete.onClick = scope.deleteCallBack;
                                record.flxRefresh.onClick = scope.refreshCallBack;
                            }
                        }
                    }
                });
            }
            var allTypes = TypeManager.getAccountTypesByPriority();
            for (var i = 0; i < allTypes.length; i++) {
                var type = TypeManager.getAccountTypeBackendValue(allTypes[i]);
                if (typesJS[type] != "" && typesJS[type] != null) {
                    var balance = 0;
                    var typeVal = type;
                    for (var index = 0; index < typesJS[type].length; index++) {
                        var neg = 1;
                        var bal = typesJS[type][index].AvailableBalance.replace(/,/g, "");
                        if (bal[0] === '-') {
                            neg = -1;
                            bal = bal.substr(2, bal.length);
                        } else {
                            bal = bal.substr(1, bal.length);
                        }
                        var tmp = (neg * parseFloat(bal));
                        if (isNaN(tmp) === false) {
                            balance += tmp;
                        }
                    }
                    data.push([{
                        "lblTypeName": TypeManager.getAccountTypeDisplayValue(TypeManager.getAccountType(typeVal)) + " Accounts (" + typesJS[type].length + ")",
                        "lblTypeValue": formatUtility.formatAmountandAppendCurrencySymbol(balance.toFixed(2))
                    }, typesJS[type]]);
                }
            }
            totalBalance = totalAsset - totalDebt;
            this.view.lblBankName.text = formatUtility.formatAmountandAppendCurrencySymbol(totalBalance.toFixed(2));
            this.view.lblAssetsValue.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAsset.toFixed(2));
            this.view.lblDebtValue.text = formatUtility.formatAmountandAppendCurrencySymbol(totalDebt.toFixed(2));
            this.view.segAccounts.widgetDataMap = {
                "lblTypeName": "lblTypeName",
                "lblTypeValue": "lblTypeValue",
                "imgBank": "BankLogo",
                "flximgBank": "flximgBank",
                "lblAccountName": "NickName",
                "lblAccountBalValue": "AvailableBalance",
                "lblBankName": "BankName",
                "lblAccountBal": "LastUpdated",
                "imgError": "errorIcon",
                "lblAccountNumber": "Last4DigitAccount",
                "flxDelete": "flxDelete",
                "flxRefresh": "flxRefresh",
                "imgDelete": "imgDelete",
                "lblDelete": "lblDelete",
                "flxAccountName": "flxAccountName",
                "flxAccountsHeaderDashboardNew": "flxAccountsHeaderDashboardNew",
                "flxBank": "flxBank",
                "flxCombinedAccounts": "flxCombinedAccounts",
                "flxHeaderSeperator": "flxHeaderSeperator",
                "flxHeaderShadows": "flxHeaderShadows",
                "flxMain": "flxMain",
                "flxSeparator": "flxSeparator",
                "flxShadowBottom": "flxShadowBottom",
                "flxTypeOneShadow": "flxTypeOneShadow",
                "imgAccountType": "imgAccountType",
                "imgRefresh": "imgRefresh"
            };
            //         this.view.segSummary.widgetDataMap = {
            //           "lblSpending": "NickName",
            //           "lblAmountSpent": "AvailableBalance"
            //         };
            //         this.view.segSummary.setData([]);
            //         this.view.segSummary.setData(summaryData);
            this.setView(data);
        },
        setView: function(data) {
            this.view.segAccounts.setData([]);
            this.view.segAccounts.setData(data);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.removeBlueScreen(data);
        },
        /**
         * Description
         * @method postShow
         * @return 
         */
        postShow: function() {
            var h = this.view.flxDashboard.frame.height;
            this.view.flxAccounts.height = h + "dp";
            if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
                this.view.flxDashboardHeader.top = "56dp";
                this.view.flxGradient.top = "56dp";
                this.view.flxPageIndicators.top = "281dp";
            } else {
                this.view.flxDashboardHeader.top = "0dp";
                this.view.flxGradient.top = "0dp";
                this.view.flxPageIndicators.top = "225dp";
            }
            //othis.view.flxDashboardHeader.scrollToWidget(this.view.flxDashboardHeader.widgets()[0]);
            //         if (this.view.imgChartSizeToggle.src === "arrowup.png"){
            // 	       this.animateDashboardFlex();
            //        }
            //var configManager = applicationManager.getConfigurationManager();
            //if(configManager.isAggregatedExternalAccountEnabled()){
            //this.getAccountsRealTime();
            //}
            if (this.showPwdWarningFlag) {
                this.showPwdWarning();
            }
            this.showOutageAlert();
        },
        navigateToCombinedSelector: function() {
            try {
                var navManager = applicationManager.getNavigationManager();
                navManager.navigateTo("frmDashboardSelector");
            } catch (er) {}
        },
        navigateToApprovals: function() {
            try {
                var navigatetoApprovals = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ApprovalsReqModule');
                navigatetoApprovals.presentationController.commonFunctionForNavigation("ApprovalsReqModule/frmApprovalsList");
            } catch (er) {}
        },
        navigateToRequests: function() {
            try {
                var navigatetoApprovals = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ApprovalsReqModule');
                navigatetoApprovals.presentationController.commonFunctionForNavigation("ApprovalsReqModule/frmRequestList");
            } catch (er) {}
        },
        /**
         * shows outage message
         * @method showOutageAlert
         * @return 
         */
        showOutageAlert: function() {
            var accountManager = applicationManager.getAccountManager();
            var response = accountManager.getOutageMessages();
            if (response.length > 0 && !this.isOutageShown) {
                var msg = "\r\n" + response[0];
                var i = 1;
                while (i < response.length) {
                    msg += ("\r\n" + "\r\n" + response[i]);
                    i++;
                }
                var pspConfig = {
                    "iconPosition": constants.ALERT_CONTENT_ALIGN_CENTER,
                    "contentAlignment": constants.ALERT_ICON_POSITION_LEFT
                };
                var basicProperties = {
                    "message": msg,
                    "alertType": constants.ALERT_TYPE_INFO,
                    "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Outage.ImportantNotice"),
                    "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.Dismiss"),
                    "alertIcon": "",
                    "alertHandler": function(response) {}
                };
                kony.ui.Alert(basicProperties, pspConfig); //this alert is to show outage alert
                this.isOutageShown = true;
            }
        },
        /**
         * Description
         * @method getAccountsRealTime
         * @return 
         */
        getAccountsRealTime: function() {
            var accountsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            var main_user = applicationManager.getUserPreferencesManager().getUserName();
            accountsModule.presentationController.fetchExternalAccounts(main_user, this.getAccountsRealTimeSuccess.bind(this), this.getAccountsRealTimeError.bind(this));
        },
        /**
         * Description
         * @method getAccountsRealTime success
         * @return 
         */
        getAccountsRealTimeSuccess: function() {
            this.mapAccountsAndBanks();
        },
        /**
         * Description
         * @method getAccountsRealTime success
         * @return 
         */
        getAccountsRealTimeError: function() {
            //do nothing
        },
        /**
         * Description
         * @method initActions
         * @return 
         */
        initActions: function() {
            var scope = this;
            //         this.view.flxPrevMonth.onClick = this.prevMonthClick.bind(this);
            //         this.view.flxNextMonth.onClick = this.nextMonthClick.bind(this);
            this.view.flxDashboardHeader.setContentOffset({
                "x": "0dp"
            });
            this.view.flxDummyHorizontalScroll.setContentOffset({
                "x": "0dp"
            });
            this.view.flxDummyHorizontalScroll.onScrolling = function() {
                if (scope.view.flxDashboard.zIndex === 6) {
                    var scrollX = scope.view.flxDummyHorizontalScroll.contentOffsetMeasured.x;
                    scope.view.flxDashboardHeader.setContentOffset({
                        "x": scrollX + "dp"
                    });
                }
                scope.pageIndicatorHighlight();
            };
            //         this.view.btnViewAllTransactions.onClick = this.viewAllTransactions.bind(this);
            this.view.flxDashboardHeader.onScrolling = function() {
                if (scope.view.flxDashboard.zIndex === 3) {
                    var scrollX = scope.view.flxDashboardHeader.contentOffsetMeasured.x;
                    scope.view.flxDummyHorizontalScroll.setContentOffset({
                        "x": scrollX + "dp"
                    });
                }
                scope.pageIndicatorHighlight();
            };
            this.view.flxDashboard.onScrolling = function() {
                var vScroll = scope.view.flxDashboard.contentOffsetMeasured.y;
                if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
                    scope.view.flxDashboardHeader.top = Math.round(vScroll * -0.3) + 56 + "dp";
                    scope.view.flxGradient.top = Math.round(vScroll * -0.3) + 56 + "dp";
                    scope.view.flxPageIndicators.top = Math.round(vScroll * -0.3) + 56 + 230 + "dp";
                } else {
                    scope.view.flxDashboardHeader.top = Math.round(vScroll * -0.3) + "dp";
                    scope.view.flxGradient.top = Math.round(vScroll * -0.3) + "dp";
                    scope.view.flxPageIndicators.top = Math.round(vScroll * -0.3) + 230 + "dp";
                }
            };
            //this.view.flxChartSizeToggle.onClick = this.animateDashboardFlex.bind(this);
            var configManager = applicationManager.getConfigurationManager();
            var MenuHandler = applicationManager.getMenuHandler();
            MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUACCOUNTS);
            this.view.customSearchbox.tbxSearch.skin = "sknTbxBorder1pxebedeeRadius3px";
            this.view.customSearchbox.tbxSearch.onTextChange = this.searchAccoutsData;
            this.view.customSearchbox.flxSearchMain.skin = "sknflxf6f6f6Bcg";
            this.view.customSearchbox.flxHeaderShadow.skin = "sknflxshadowLogin";
            this.view.customSearchbox.btnCancel.skin = "sknLbl004B95SSP32PxTab";
            this.view.flxShowAllAccountTypes.onClick = this.showAllAccountTypes;
            this.view.flxSearchAccounts.onClick = this.showSearchAccounts;
            this.view.customSearchbox.btnCancel.onClick = function() {
                scope.view.customSearchbox.tbxSearch.text = "";
                scope.filterAccountsSegment("All Accounts");
                this.showSearchAccounts();
            }.bind(this);
            this.view.segAccountTypes.onRowClick = this.selectedClickedAccount;
            scope.view.segAccounts.onTouchEnd = this.onScrollingSegment;
            this.resetDashboardFlex();
        },
        animateDashboardFlex: function() {
            //         var scope = this;
            //         if(scope.view.flxPopup.isVisible) return;
            //         scope.view.flxDummyHorizontalScroll.setEnabled(false);  
            //         //scope.view.flxChartSizeToggle.setEnabled(false);
            //         scope.view.flxDashboard.setContentOffset({
            //           y: "0dp"
            //         });
            //         scope.view.flxDashboard.enableScrolling = false;
            //         scope.view.flxDashboardHeader.enableScrolling = false;
            //         kony.timer.schedule("timerId", function() {
            //           scope.view.flxDashboard.enableScrolling = true;
            //           scope.view.flxDashboardHeader.enableScrolling = true;
            //         }, 0.3, false);
            //         if (scope.view.imgChartSizeToggle.src === "arrowdown.png") {
            //             scope.view.flxDonutSegment.setVisibility(true);
            //             scope.view.flxBarSegment.setVisibility(true);
            //             scope.view.flxSummarySegment.setVisibility(true);
            //             var height = 0;
            //             //   var newHeight = kony.os.deviceInfo().screenHeight - 40;
            //             var newHeight = scope.view.flxBGDummy.frame.height;
            //             if (applicationManager.getPresentationFormUtility().getDeviceName() === "android") {
            //                 newHeight = newHeight - 56;
            //             }
            //             //   var segMaxHeight=newHeight-362;
            //             var segMaxHeight = newHeight - 399;// -260 -1 -42 - 1 -60 -35(-segtop-sep-date-sep-btn-toggle)
            //             newHeight = newHeight - 35 + "dp";
            //             scope.view.flxGradient.height = newHeight;
            //             scope.view.imgChartSizeToggle.src = "arrowup.png";
            //             scope.view.flxDashboardHeader.height = newHeight;
            //             scope.view.segTransactions.height = segMaxHeight + "dp";
            //             scope.view.segSummary.height = segMaxHeight + 60 + "dp";
            //             scope.view.segBar.height = segMaxHeight + 60 + "dp";
            //             scope.view.flxSummarySegment.height = segMaxHeight + 104 + "dp";
            //             scope.view.flxBarSegment.height = segMaxHeight + 104 + "dp";
            //             scope.view.flxDonutSegment.height = segMaxHeight + 104 + "dp";
            //             if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            //                 scope.view.flxDashboard.animate(
            //                     kony.ui.createAnimation({
            //                         0: {
            //                             bottom: "60dp",
            //                             "stepConfig": {}
            //                         },
            //                         100: {
            //                             bottom: "0dp",
            //                             "stepConfig": {
            //                                 "timingFunction": kony.anim.EASE
            //                             }
            //                         }
            //                     }), {
            //                         fillMode: kony.anim.FILL_MODE_FORWARDS,
            //                         duration: .3
            //                     }, {
            //                         animationEnd: function () { }
            //                     }
            //                 );
            //                 scope.view.flxMenu.animate(
            //                     kony.ui.createAnimation({
            //                         0: {
            //                             bottom: "0dp",
            //                             "stepConfig": {}
            //                         },
            //                         100: {
            //                             bottom: "-60dp",
            //                             "stepConfig": {
            //                                 "timingFunction": kony.anim.EASE
            //                             }
            //                         }
            //                     }), {
            //                         fillMode: kony.anim.FILL_MODE_FORWARDS,
            //                         duration: .3
            //                     }, {
            //                         animationEnd: function () { }
            //                     }
            //                 );
            //             }
            //             scope.view.flxDummyHorizontalScroll.animate(
            //                 kony.ui.createAnimation({
            //                     0: {
            //                         height: "250dp",
            //                         "stepConfig": {}
            //                     },
            //                     100: {
            //                         height: newHeight,
            //                         "stepConfig": {
            //                             "timingFunction": kony.anim.EASE
            //                         }
            //                     }
            //                 }), {
            //                     fillMode: kony.anim.FILL_MODE_FORWARDS,
            //                     duration: .3
            //                 }, {
            //                     animationEnd: function () {
            //                         scope.view.flxDummyHorizontalScroll.setEnabled(true);  
            //                         //scope.view.flxChartSizeToggle.setEnabled(true);
            //                         scope.view.flxDashboard.enableScrolling = false;
            //                         scope.view.flxDashboard.zIndex = 3;
            //                     }
            //                 });
            //         } else {
            //             scope.view.imgChartSizeToggle.src = "arrowdown.png";
            //             scope.view.flxDashboard.zIndex = 6;
            //             if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            //                 scope.view.flxDashboard.animate(
            //                     kony.ui.createAnimation({
            //                         0: {
            //                             bottom: "0dp",
            //                             "stepConfig": {}
            //                         },
            //                         100: {
            //                             bottom: "60dp",
            //                             "stepConfig": {
            //                                 "timingFunction": kony.anim.EASE
            //                             }
            //                         }
            //                     }), {
            //                         fillMode: kony.anim.FILL_MODE_FORWARDS,
            //                         duration: .3
            //                     }, {
            //                         animationEnd: function () { }
            //                     }
            //                 );
            //                 scope.view.flxMenu.animate(
            //                     kony.ui.createAnimation({
            //                         0: {
            //                             bottom: "-60dp",
            //                             "stepConfig": {}
            //                         },
            //                         100: {
            //                             bottom: "0dp",
            //                             "stepConfig": {
            //                                 "timingFunction": kony.anim.EASE
            //                             }
            //                         }
            //                     }), {
            //                         fillMode: kony.anim.FILL_MODE_FORWARDS,
            //                         duration: .3
            //                     }, {
            //                         animationEnd: function () { }
            //                     }
            //                 );
            //             }
            //             scope.view.flxDummyHorizontalScroll.animate(
            //                 kony.ui.createAnimation({
            //                     0: {
            //                         height: scope.view.flxDummyHorizontalScroll.height + "dp",
            //                         "stepConfig": {}
            //                     },
            //                     100: {
            //                         height: "250dp",
            //                         "stepConfig": {
            //                             "timingFunction": kony.anim.EASE
            //                         }
            //                     }
            //                 }), {
            //                     fillMode: kony.anim.FILL_MODE_FORWARDS,
            //                     duration: .3
            //                 }, {
            //                     animationEnd: function () {
            //                         scope.view.flxGradient.height = "55%";
            //                         scope.view.flxDashboardHeader.height = "55%";
            //                         scope.view.flxBarSegment.setVisibility(false);
            //                         scope.view.flxSummarySegment.setVisibility(false);
            //                         scope.view.flxDonutSegment.setVisibility(false);
            //                         scope.view.flxDashboard.enableScrolling = true;
            //                         scope.view.flxDummyHorizontalScroll.setEnabled(true);
            //                         //scope.view.flxChartSizeToggle.setEnabled(true);
            //                    }
            //                 });
            //         }
            //         scope.view.flxDummyHorizontalScroll.enableScrolling = true;
        },
        pageIndicatorHighlight: function() {
            for (let index = 1; index <= this.view.flxPageIndicators.widgets().length; index++) {
                this.view["flxPageIndicator" + index].skin = "sknFlxPageIndicatorUnselected";
            }
            var scrollX = this.view.flxDashboardHeader.contentOffsetMeasured.x;
            var screenWidth = kony.os.deviceInfo().screenWidth;
            var chartNum = Math.round(scrollX / screenWidth) + 1;
            // alert("chartNum : "+chartNum);
            this.view["flxPageIndicator" + chartNum].skin = "sknFlxPageIndicatorSelected";
            kony.print("chart num" + chartNum);
            //we are displaying bar chart and donut chart only after scrolling the 
            //browser widget into the view to show animation to the user.
            //Requirement is to show animation only once, for the first time the chart is rendered.
            //Since rendering the chart and animating it are tightly coupled,
            //we are calling these methods only when the browser widgets are into the view.
            if (this.isApprovalRequestCountHidden) {
                if (chartNum === 1 && !this.isMultiLineBarChartDisplayed) {
                    this.displayMultiLineBarChart();
                    this.isMultiLineBarChartDisplayed = true;
                }
                if (chartNum === 3 && !this.isDonutChartDisplayed) {
                    this.displayDonutChart();
                    this.isDonutChartDisplayed = true;
                }
                if (chartNum === 4 && !this.isBarChartDisplayed) {
                    this.displayBarChart();
                    this.isBarChartDisplayed = true;
                }
            } else {
                if (chartNum === 2 && !this.isMultiLineBarChartDisplayed) {
                    this.displayMultiLineBarChart();
                    this.isMultiLineBarChartDisplayed = true;
                }
                if (chartNum === 4 && !this.isDonutChartDisplayed) {
                    this.displayDonutChart();
                    this.isDonutChartDisplayed = true;
                }
                if (chartNum === 5 && !this.isBarChartDisplayed) {
                    this.displayBarChart();
                    this.isBarChartDisplayed = true;
                }
            }
        },
        /**
         * Description
         * @method onScrollingDashboard
         * @return 
         */
        onScrollingDashboard: function() {
            return;
            // var scope = this;
            // if (this.view.flxSuggestedOffers.isVisible === true) {
            //     return;
            // }
            // if (this.view.flxSpendingBudget.isVisible === true) {
            //     return;
            // }
            // var flxy = scope.view.flxDashboard.contentOffsetMeasured.y;
            // if (flxy >= 110) {
            //     scope.view.segAccounts.height = "100%";
            //     scope.view.forceLayout();
            // }
        },
        /**
         * Description
         * @method onScrollingSegment
         * @return 
         */
        onScrollingSegment: function() {
            return;
            // var scope = this;
            // if (scope.view.flxGraph.height !== "0dp") {
            //     scope.showGraph();
            // }
            // if (scope.view.flxAccountTypes.height !== "0dp") {
            //     scope.showAllAccountTypes();
            // }
            // if (scope.view.segAccounts.height !== "preferred") {
            //     var segy = scope.view.segAccounts.contentOffsetMeasured.y;
            //     if (segy <= 1) {
            //         scope.view.segAccounts.height = "preferred";
            //         scope.view.forceLayout();
            //     }
            // }
        },
        /**
         * Description
         * @method viewTransactionsOnClick
         * @return 
         */
        viewAllTransactions: function() {
            try {
                applicationManager.getPresentationUtility().showLoadingScreen();
                this.currentTransactions = 0;
                this.totalTransactions = this.CATEGORY_COUNT;
                for (i = 1; i <= this.CATEGORY_COUNT; i++) {
                    this.fetchTransactions(this.currentMonth, i);
                }
            } catch (exception) {
                //replace
            }
        },
        /**
         * Description
         * @method fetchTransactions
         * @param {} monthId
         * @param {} categoryId
         * @return 
         */
        fetchTransactions: function(monthId, categoryId) {
            try {
                this.transactions = [];
                var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                var inputParams = {
                    "monthId": monthId + "",
                    "categoryId": categoryId + ""
                };
                accountMod.presentationController.getPFMTransactions(inputParams, this.fetchTransactionsSuccess.bind(this), this.fetchTransactionsFailure.bind(this));
            } catch (exception) {
                //replace
            }
        },
        /**
         * Description
         * @method navTofrmPFMCategorisedTransactions
         * @param 
         * @return 
         */
        navTofrmPFMCategorisedTransactions: function() {
            if (this.currentTransactions === this.totalTransactions) {
                var navManager = applicationManager.getNavigationManager();
                this.navData = [];
                this.navData.transactions = this.transactions;
                this.navData.isYear = false;
                navManager.setCustomInfo("frmPFMAdvancedSearchData", this.navData);
                navManager.setCustomInfo("frmPFMCategorisedTransactions", this.transactions);
                var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                accountModule.presentationController.commonFunctionForNavigation("frmPFMCategorisedTransactions");
            }
        },
        /**
         * Description
         * @method fetchTransactionsSuccess
         * @param {} response
         * @return 
         */
        fetchTransactionsSuccess: function(response) {
            try {
                this.currentTransactions++;
                Array.prototype.push.apply(this.transactions, response);
                this.navTofrmPFMCategorisedTransactions();
            } catch (exception) {
                //replace
            }
        },
        /**
         * Description
         * @method fetchTransactionsFailure
         * @param {} response
         * @return 
         */
        fetchTransactionsFailure: function(response) {
            try {
                this.currentTransactions++;
                this.navTofrmPFMCategorisedTransactions();
            } catch (exception) {
                //replace
            }
        },
        /**
         * Description
         * @method showGraph
         * @return 
         */
        showGraph: function() {
            var scope = this;
            var heightValue;
            if (this.view.flxGraph.height === "0dp") {
                heightValue = "245dp";
            } else {
                heightValue = "0dp";
            }
            this.view.flxGraph.animate(kony.ui.createAnimation({
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
                /**
                 * Description
                 * @return 
                 */
                "animationEnd": function() {
                    if (heightValue === "0dp") {
                        scope.view.imgShowGraph.src = "dashboardicon.png";
                    } else {
                        scope.view.imgShowGraph.src = "dbicon_up.png";
                    }
                    scope.view.forceLayout();
                }
            });
        },
        /**
         * Description
         * @method selectedClickedAccount
         * @return 
         */
        selectedClickedAccount: function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            this.showAllAccountTypes();
            var selectedItem = this.view.segAccountTypes.selectedItems[0];
            var data = this.view.segAccountTypes.data;
            for (i = 0; i < data.length; i++) {
                if (selectedItem.lblName.text === data[i].lblName.text) {
                    data[i].lblName.skin = this.otherBankSkin;
                    data[i].imgIcon = "tickmark_green.png";
                } else {
                    data[i].lblName.skin = this.otherBankSkin;
                    data[i].imgIcon = "";
                }
            }
            this.view.segAccountTypes.setData(data);
            this.filterAccountsSegment(selectedItem.lblName.text);
        },
        filterAccountsSegment: function(selectedKey) {
            this.view.lblSelectedAccountType.text = selectedKey;
            var data = null;
            if (selectedKey !== "All Accounts") {
                var segData = {};
                for (var key in this.accountsData) {
                    if (key === selectedKey) {
                        segData[key] = this.accountsData[key];
                    }
                }
                data = this.getSegmentDataForAccounts(segData, 5);
            } else {
                data = this.getSegmentDataForAccounts(this.accountsData, 5);
            }
            this.view.segAccounts.setData(data);
            this.showorHideScrollingMenu(true);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.view.forceLayout();
        },
        showorHideScrollingMenu: function(isVisible) {
            this.view.flxDummyHorizontalScroll.isVisible = isVisible;
            this.view.flxDashboardHeader.isVisible = isVisible;
            this.view.flxPageIndicators.isVisible = isVisible;
            this.view.flxGradient.isVisible = isVisible;
        },
        showSearchAccounts: function() {
            if (this.view.flxSearchContainer.isVisible) {
                this.view.flxSearchContainer.isVisible = false;
                this.view.flxSelectedAccounts.isVisible = true;
                this.showorHideScrollingMenu(true);
            } else {
                this.view.flxSearchContainer.isVisible = true;
                this.view.flxSelectedAccounts.isVisible = false;
                this.showorHideScrollingMenu(false);
            }
            this.view.forceLayout();
        },
        /**
         * Description
         * @method showAllAccountTypes
         * @return 
         */
        showAllAccountTypes: function() {
            if (this.view.flxAccountTypes.isVisible) {
                this.view.flxAccountTypes.isVisible = false;
                this.view.flxAccountShadow.isVisible = false;
                this.view.flxSelectedAccounts.isVisible = true;
                this.showorHideScrollingMenu(true);
            } else {
                this.showorHideScrollingMenu(false);
                this.view.flxAccountTypes.isVisible = true;
                this.view.flxAccountShadow.isVisible = true;
                this.view.flxSelectedAccounts.isVisible = false;
            }
            this.view.forceLayout();
        },
        searchAccoutsData: function() {
            var filterKey = this.view.lblSelectedAccountType.text;
            var searchKey = this.view.customSearchbox.tbxSearch.text.trim().toLowerCase();
            var accountsData = {};
            if (filterKey !== "All Accounts") {
                accountsData[filterKey] = this.accountsData[filterKey];
            } else {
                accountsData = this.accountsData;
            }
            var searchedData = this.searchKeyAndGetData(accountsData, searchKey);
            this.view.segAccounts.setData(this.getSegmentDataForAccounts(searchedData, 5));
            this.showorHideScrollingMenu(false);
            this.view.forceLayout();
        },
        searchKeyAndGetData: function(accounts, searchKey) {
            var searchedAccounts = {};
            var accountKeys = [];
            for (var key in accounts) {
                accounts[key].forEach(function(data) {
                    if (data.nickName.toLowerCase().includes(searchKey) || data.accountType.toLowerCase().includes(searchKey) || data.accountID.includes(searchKey)) {
                        if (accountKeys.includes(key)) {
                            searchedAccounts[key].push(data);
                        } else {
                            searchedAccounts[key] = [data];
                            accountKeys.push(key);
                        }
                    }
                });
            }
            return searchedAccounts;
        },
        /**
         * Description
         * @method setSelectAccountTypeData
         * @return 
         */
        setSelectAccountTypeData: function(accounts) {
            var scope = this;
            var accountTypes = ["All Accounts"].concat(Object.keys(accounts));
            this.view.lblFilterHeader.text = "Account Filters";
            this.view.imgFilterClose.onTouchEnd = function() {
                scope.view.flxAccountTypes.isVisible = false;
                scope.view.flxSelectedAccounts.isVisible = true;
                scope.showorHideScrollingMenu(true);
                scope.view.forceLayout();
            }.bind(this);
            var data = [];
            accountTypes.forEach(function(type, index) {
                var src = "";
                var typeObj = {
                    "lblName": {
                        "text": type
                    },
                    "imgIcon": {
                        "src": ""
                    },
                    "flxSeparator": {
                        "isVisible": true
                    }
                };
                if (index === 0) {
                    src = "tickmark_green.png";
                }
                typeObj.imgIcon.src = src;
                data.push(typeObj);
            });
            this.view.segAccountTypes.widgetDataMap = {
                "lblName": "lblName",
                "imgIcon": "imgIcon",
                "flxSeparator": "flxSeparator"
            };
            this.view.segAccountTypes.setData(data);
        },
        /**
         * Description
         * @method setAccountsData
         * @return 
         */
        setAccountsData: function() {
            var data = [
                [{
                        "lblTypeName": "Checking Accounts (3)",
                        "lblTypeValue": "$127,912.00"
                    },
                    [{
                        "imgBank": "bankofamerica.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Checking…2343",
                        "lblBankName": "Bank of America"
                    }, {
                        "imgBank": "chasebank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "Little John…2343",
                        "lblBankName": "Citi Bank"
                    }, {
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "Honey home…2343",
                        "lblBankName": "Chase Bank"
                    }, ]
                ],
                [{
                        "lblTypeName": "Saving Accounts (3)",
                        "lblTypeValue": "$83,912.00"
                    },
                    [{
                        "imgBank": "bankofamerica.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Saving…2343",
                        "lblBankName": "Citi Bank"
                    }, {
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "John Saving…2343",
                        "lblBankName": "Chase Bank"
                    }, ]
                ],
                [{
                        "lblTypeName": "Credit Cards (3)",
                        "lblTypeValue": "$83,912.00"
                    },
                    [{
                        "imgBank": "chasebank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "Kony Corel Card…2343",
                        "lblBankName": "Citi Bank"
                    }, {
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "Little John…2343",
                        "lblBankName": "Chase Bank"
                    }, ]
                ],
                [{
                        "lblTypeName": "Loans (1)",
                        "lblTypeValue": ""
                    },
                    [{
                        "imgBank": "bankofamerica.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Checking…2343",
                        "lblBankName": "Citi Bank"
                    }]
                ],
                [{
                        "lblTypeName": "Deposits (1)",
                        "lblTypeValue": ""
                    },
                    [{
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Checking…2343",
                        "lblBankName": "Citi Bank"
                    }]
                ],
                [{
                        "lblTypeName": "Deposits (1)",
                        "lblTypeValue": ""
                    },
                    [{
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Checking…2343",
                        "lblBankName": "Citi Bank"
                    }]
                ],
                [{
                        "lblTypeName": "Deposits (1)",
                        "lblTypeValue": ""
                    },
                    [{
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Checking…2343",
                        "lblBankName": "Citi Bank"
                    }]
                ],
                [{
                        "lblTypeName": "Deposits (1)",
                        "lblTypeValue": ""
                    },
                    [{
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Checking…2343",
                        "lblBankName": "Citi Bank"
                    }]
                ],
                [{
                        "lblTypeName": "Deposits (1)",
                        "lblTypeValue": ""
                    },
                    [{
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Checking…2343",
                        "lblBankName": "Citi Bank"
                    }]
                ],
            ];
            this.view.segAccounts.setData(data);
            this.removeBlueScreen(data);
        },
        /**
         * Description
         * @method clone
         * @param {} source
         * @return result
         */
        clone: function(source) {
            var result = source,
                i, len;
            if (!source || source instanceof Number || source instanceof String || source instanceof Boolean) {
                return result;
            } else if (Object.prototype.toString.call(source).slice(8, -1) === 'Array') {
                result = [];
                var resultLen = 0;
                for (i = 0, len = source.length; i < len; i++) {
                    result[resultLen++] = this.clone(source[i]);
                }
            } else if (typeof source == 'object') {
                result = {};
                for (i in source) {
                    if (source.hasOwnProperty(i)) {
                        result[i] = this.clone(source[i]);
                    }
                }
            }
            return result;
        },
        accountSegmentOnClick: function() {
            var rowid = this.view.segAccounts.selectedRowIndex[1];
            if (this.view.segAccounts.data[rowid].template === "flxAccountsEngageInsert") {
                this.invokeEngage();
                return;
            }
            if (this.view.segAccounts.data[rowid].template === "flxViewAll" || this.view.segAccounts.data[rowid].template === "flxClearViewAll") {
                var sectionId = this.view.segAccounts.selectedRowIndex[0];
                this.showFullAccountList(sectionId);
                return;
            }
            applicationManager.getPresentationUtility().showLoadingScreen();
            var selectedAccountId = this.view.segAccounts.data[rowid]["accountID"];
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            if (applicationManager.getConfigurationManager().isAccountDetailsServiceConfigured) {
                accountMod.presentationController.fetchAccountDetailsAndTransactions(selectedAccountId);
            } else {
                var processedAccountsData = accountMod.presentationController.fetchAccountTransactions(selectedAccountId);
            }
        },
        accountAggregatedSegmentOnClick: function() {
            var self = this;
            var sectionId = this.view.segAccounts.selectedIndices[0][0];
            var rowId = this.view.segAccounts.selectedIndices[0][1][0];
            var rowData = this.view.segAccounts.data[sectionId][1][rowId];
            var main_user = applicationManager.getUserPreferencesManager().getUserName();
            var userName = (!kony.sdk.isNullOrUndefined(rowData.Username) ? rowData.Username : rowData.AccountHolder);
            var bankId = parseInt(rowData.Bank_id, 10);
            var AccountDetailsObj = {
                "accountName": rowData.AccountName,
                "lastUpdated": rowData.LastUpdated,
                "availableBalance": rowData.AvailableBalance,
                "type": rowData.type,
                "accountID": rowData.Account_id,
                "nickName": rowData.NickName
            };
            if (rowData.type === "internal" || rowData.externalIndicator === "true") {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var selectedAccountId = rowData.AccountId;
                var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                var processedAccountsData = accountMod.presentationController.fetchAccountTransactions(selectedAccountId);
            } else {
                if (rowData.error && rowData.error !== " ") {
                    var alertmessage = kony.i18n.getLocalizedString("kony.mb.externalAccounts.ErrorInFetchingAccountBalanceOptionForRetryAndRemove");
                    var yesText = kony.i18n.getLocalizedString("kony.mb.common.tryagian");
                    var noText = kony.i18n.getLocalizedString("kony.mb.externalAccounts.remove");
                    var basicConfig = {
                        "alertType": constants.ALERT_TYPE_CONFIRMATION,
                        "alertTitle": "",
                        "yesLabel": yesText,
                        "noLabel": noText,
                        "message": alertmessage,
                        "alertHandler": alertHandler
                    };
                    applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});
                } else {
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                    accountMod.presentationController.fetchAccountExternalTransactions(main_user, userName, bankId, account, AccountDetailsObj);
                }

                function successCallback(response) {
                    var formatUtility = applicationManager.getFormatUtilManager();
                    rowData.AvailableBalance = formatUtility.formatAmountandAppendCurrencySymbol(response[0].AvailableBalance, response[0].currencyCode);
                    rowData.LastUpdated = kony.i18n.getLocalizedString("kony.mb.AccountsAggregated.JustNow");
                    rowData.error = " ";
                    rowData.errorIcon = "";
                    self.view.segAccounts.setDataAt(rowData, rowId, sectionId);
                    applicationManager.getPresentationUtility().dismissLoadingScreen();
                }

                function deleteAccountSuccessCallback() {
                    var navManager = applicationManager.getNavigationManager();
                    var externalCustom = navManager.getCustomInfo("frmDashboardAggregated");
                    var data = externalCustom.accountData;
                    for (var i in data) {
                        if (String(data[i].Bank_id).trim() === String(bankId).trim() && String(data[i].Username).trim() === String(userName).trim() && String(data[i].AccountName).trim() === String(account).trim()) {
                            data.splice(i, 1);
                            break;
                        }
                    }
                    self.mapAccountsAndBanks();
                }

                function deleteAccountErrorCallback() {
                    kony.ui.Alert("Unable to remove");
                }

                function alertHandler(response) {
                    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                    if (response === true) {
                        applicationManager.getPresentationUtility().showLoadingScreen();
                        accountMod.presentationController.fetchSingleAccountDetails(main_user, userName, bankId, account, successCallback); ///*rowData.main_user*/, rowData.AccountHolder, rowData.Bank_id, rowData.AccountName, successCallback);//(user_id, username, bank_id, account);
                    } else {
                        accountMod.presentationController.deleteExternalAccount({
                            mainUser: main_user,
                            userName: userName,
                            bankId: bankId,
                            accountName: account,
                            loopCount: "1"
                        }, deleteAccountSuccessCallback, deleteAccountErrorCallback);
                    }
                }
            }
        },
        adsPreshow: function() {
            if (!this.adsHided) {
                this.resetAdsUI();
                var navManager = applicationManager.getNavigationManager();
                var formData = navManager.getCustomInfo("frmDashboardAggregated");
                if (formData.accountDashboardCampaignData) {
                    if (formData.accountDashboardCampaignData.length !== 0) {
                        this.accountDashboardCampaignData = formData.accountDashboardCampaignData;
                        this.bindAdData();
                    } else {
                        this.hideAds();
                    }
                } else {
                    this.hideAds();
                }
            }
        },
        bindAdData: function() {
            var accountDashboardCampaignData = this.accountDashboardCampaignData;
            this.numOfAds = accountDashboardCampaignData.length;
            var param;
            var date = new Date();
            var deviceUtilManager = applicationManager.getDeviceUtilManager();
            this.view.flxLoadingIndicator.setVisibility(true);
            for (var j = 1; j <= this.numOfAds; j++) {
                param = date.getTime();
                this.view["flxAd" + j].setVisibility(false);
                this.view["flxAd" + j].left = parseInt(deviceUtilManager.getDeviceInfo().screenWidth) + "dp";
                this.view["imgAd" + j].src = accountDashboardCampaignData[j - 1].imageURL + "?Param=" + param;
            }
        },
        resetAdsUI: function() {
            this.currAdFlex = 1;
            this.numOfAds = 0;
            this.imageObjArray = [];
            this.imageDownloadFailureCount = 0;
            this.imageDownloadSuccessCount = 0;
            this.xOffset = 0;
            this.isSwipeDone = false;
            this.isTapDone = false;
            this.removeGestureRecognisers();
            this.view.flxScrollContainerAds.setContentOffset({
                x: this.xOffset,
                y: 0
            }, true);
            this.view.flxLoadingIndicator.setVisibility(true);
            this.view.imgLoadingIndicator.src = "loadermedium.gif";
            this.view.flxAdInfo.setVisibility(false);
            for (var i = 1; i <= 5; i++) {
                this.view["flxAd" + i].setVisibility(false);
                this.view["flxProgressButton" + i].setVisibility(false);
            }
            this.view.flxProgressBar.forceLayout();
            this.view.flxProgressBar.setVisibility(false);
        },
        onAdDownloadComplete: function(issuccess, adNumber) {
            if (issuccess) {
                var i = this.imageDownloadSuccessCount; //this.imageObjArray.length;
                this.view["flxAd" + adNumber].setVisibility(true);
                this.alignFlexInScrollContainer(i + 1);
                if (i === 0) {
                    this.setGestureRecogniser();
                    this.setDataForAd(adNumber);
                    var loggerManager = applicationManager.getLoggerManager();
                    loggerManager.setCustomMetrics(this, true, "#AccountDashboardCampaigns Displayed");
                }
                this.imageObjArray[adNumber - 1] = adNumber;
                this.imageDownloadSuccessCount++;
            } else {
                this.imageDownloadFailureCount++;
                this.view["flxAd" + adNumber].setVisibility(false);
                if (this.imageDownloadFailureCount === this.numOfAds) {
                    var logger = applicationManager.getLoggerManager();
                    logger.log("####All Account dashboard Campaign's download failed\n####Therefore Hiding Them");
                    this.onAllAdsDownloadFailure();
                }
            }
            if (this.imageObjArray.length >= 1 && (this.imageDownloadSuccessCount + this.imageDownloadFailureCount) === this.numOfAds) {
                this.onAllAdsDownloadComplete();
            }
        },
        onAllAdsDownloadComplete: function() {
            var deviceUtilManager = applicationManager.getDeviceUtilManager();
            var visible = 0;
            for (var k = 1; k <= this.numOfAds; k++) {
                if (this.view["flxAd" + (k)].isVisible) {
                    visible++;
                    var leftVal = ((visible - 1) * parseInt(deviceUtilManager.getDeviceInfo().screenWidth));
                    this.view["flxAd" + k].left = leftVal + "dp";
                }
            }
            this.view.flxProgressBar.setVisibility(true);
            this.imageObjArray = this.imageObjArray.filter(function(el) {
                if (el) return el
            });
            this.view.flxLoadingIndicator.setVisibility(false);
        },
        removeGestureRecognisers: function() {
            if (this.gestIDs.length !== 0) {
                var swipeGestureID = this.gestIDs[0];
                var tapGestureID = this.gestIDs[1];
                this.view.flxScrollContainerAds.removeGestureRecognizer(swipeGestureID);
                this.view.flxScrollContainerAds.removeGestureRecognizer(tapGestureID);
                this.gestIDs = [];
            }
        },
        setGestureRecogniser: function() {
            if (this.gestIDs.length === 0) {
                var swipeGestID = this.view.flxScrollContainerAds.setGestureRecognizer(2, {
                    fingers: 1,
                    swipedistance: 20,
                    swipevelocity: 60
                }, this.onAdSwipe);
                var tapGestID = this.view.flxScrollContainerAds.setGestureRecognizer(1, {
                    fingers: 1,
                    taps: 1
                }, this.onAdTap);
                this.gestIDs[0] = swipeGestID;
                this.gestIDs[1] = tapGestID;
            }
            // this.view.flxScrollContainerAds.onClick = this.onAdTap;
        },
        onAllAdsDownloadFailure: function() {
            this.hideAds();
            this.view.imgLoadingIndicator.src = "addownloadfailed.png";
        },
        alignFlexInScrollContainer: function(noOfDownloadedAds) {
            if (noOfDownloadedAds > 1) {
                if (noOfDownloadedAds === 2) {
                    this.view.flxProgressButton1.setVisibility(true);
                    this.view.flxProgressButton2.setVisibility(true);
                    this.view.flxProgressButton1.left = "46%";
                    this.view.flxProgressButton1.skin = "sknflx003e75Radius100px";
                    this.view.flxProgressButton2.skin = "sknflxE3E3E3Radius100px";
                } else if (noOfDownloadedAds === 3) {
                    this.view.flxProgressButton3.setVisibility(true);
                    this.view.flxProgressButton3.skin = "sknflxE3E3E3Radius100px";
                    this.view.flxProgressButton1.left = "43.5%";
                } else if (noOfDownloadedAds === 4) {
                    this.view.flxProgressButton4.setVisibility(true);
                    this.view.flxProgressButton4.skin = "sknflxE3E3E3Radius100px";
                    this.view.flxProgressButton1.left = "41%";
                } else {
                    this.view.flxProgressButton5.setVisibility(true);
                    this.view.flxProgressButton5.skin = "sknflxE3E3E3Radius100px";
                    this.view.flxProgressButton1.left = "38%";
                }
                this.view.flxProgressBar.forceLayout();
            }
        },
        setDataForAd: function(adNumber) {
            var adData = this.accountDashboardCampaignData[adNumber - 1];
            this.view.flxAdInfo.setVisibility(false);
            this.view.flxAdInfo.forceLayout();
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.setCustomMetrics(this, true, "#AccountDashboardCampaign" + adNumber + " Displayed");
        },
        onAdSwipe: function(widget, gestureInfo, context) {
            var downloadedAdCount = this.imageDownloadSuccessCount; //this.imageObjArray.length;
            var xVal = this.xOffset;
            var scWidth = applicationManager.getDeviceUtilManager().getDeviceInfo().screenWidth;
            var isThereChange = false;
            if (!this.isSwipeDone) {
                var loggerManager = applicationManager.getLoggerManager();
                loggerManager.setCustomMetrics(this, true, "#AccountDashboardCampaigns Swiped");
                this.isSwipeDone = true;
            }
            if (gestureInfo.swipeDirection === 1) {
                if (this.currAdFlex >= 1 && this.currAdFlex < downloadedAdCount) {
                    isThereChange = true;
                    xVal = xVal + scWidth;
                    this.currAdFlex++;
                }
            } else if (gestureInfo.swipeDirection === 2) {
                if (this.currAdFlex > 1 && this.currAdFlex <= downloadedAdCount) {
                    isThereChange = true;
                    xVal = xVal - scWidth;
                    this.currAdFlex--;
                }
            }
            if (isThereChange) {
                this.view.flxScrollContainerAds.setContentOffset({
                    x: xVal,
                    y: 0
                }, true);
                var adNumber = this.imageObjArray[this.currAdFlex - 1];
                this.setDataForAd(adNumber);
                for (var j = 1; j <= downloadedAdCount; j++) {
                    if (j === this.currAdFlex) {
                        this.view["flxProgressButton" + j].skin = "sknflx003e75Radius100px";
                    } else {
                        this.view["flxProgressButton" + j].skin = "sknflxE3E3E3Radius100px";
                    }
                }
                this.xOffset = xVal;
                this.view.flxProgressBar.forceLayout();
                this.view.flxScrollContainerAds.forceLayout();
            }
        },
        onAdTap: function() {
            var adNumber = this.imageObjArray[this.currAdFlex - 1];
            var navUrl;
            if (adNumber) {
                var adData = this.accountDashboardCampaignData[this.currAdFlex - 1];
                navUrl = adData.destinationURL;
            }
            CampaignUtility.onClickofInAppCampaign(navUrl);
            //       	if(navUrl){
            //           kony.application.openURL(navUrl);
            //           var navId = adData.navigationId;
            //           var loggerManager = applicationManager.getLoggerManager();
            //           if(!this.isTapDone)
            //           {
            //             loggerManager.setCustomMetrics(this,true,"#AccountDashboardCampaigns Tapped");
            //             this.isTapDone = true;
            //           }
            //           loggerManager.setCustomMetrics(this,true,"#AccountDashboardCampaign"+adNumber+" Image Tapped"); 
            //         }
        },
        hideAds: function() {
            this.adsHided = true;
            this.view.flxSuggestedOffers.setVisibility(false);
        },
        removeBlueScreen: function(data) {
            if (data.length < 3) {
                this.view.flxWhiteBg.setVisibility(true);
            } else {
                this.view.flxWhiteBg.setVisibility(false);
            }
        },
        toFormLoans: function() {
            var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
            campMod.presentationController.commonFunctionForNavigation("frmPersonalLoans"); //frmPersonalLoans
        },
        toFormDeposits: function() {
            var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
            campMod.presentationController.commonFunctionForNavigation("frmShortTermDeposits");
        },
        toFormAutoLoan: function() {
            var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
            campMod.presentationController.commonFunctionForNavigation("frmAutoLoan");
        },
        toFormHELOC: function() {
            var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
            campMod.presentationController.commonFunctionForNavigation("frmHELOC");
        },
        toFormSpecialBonus: function() {
            var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
            campMod.presentationController.commonFunctionForNavigation("frmSpecialBonus");
        },
        toFormEStmtAccountPreferences: function() {
            var setMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            setMod.presentationController.onClickPaperlessCampaign();
        },
        toformFinancialHelp: function() {
            var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
            campMod.presentationController.commonFunctionForNavigation("frmFinancialHelp");
        },
        getSuccessResponse: function(data) {
            this.successResponse = data;
            var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('CampaignManagement');
            campMod.presentationController.updateCampaignDetails(this.successResponse);
        },
        addLoanAccounts: function(data) {
            var navManager = applicationManager.getNavigationManager();
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            this.view.segAccounts.rowTemplate = "flxAccountsNoImage";
            //this.view.flxSelectAccount.isVisible = false;
            //this.view.flxChartSizeToggle.skin = "sknFlxffffff";
            var custominfoInt = navManager.getCustomInfo("frmDashboard");
            var internalAccounts = this.clone(custominfoInt.accountData);
            var processedAccountsData = accountMod.presentationController.processAccountsData(internalAccounts);
            this.view.segAccounts.widgetDataMap = {
                lblAccountName: "nickName",
                lblAccountBalValue: "availableBalance",
                lblBankName: "accountType",
                lblAccountId: "accountID",
                lblAccountBal: "accountBalanceType"
            };
            processedAccountsData.push(data);
            this.view.segAccounts.setData(processedAccountsData);
            this.removeBlueScreen(processedAccountsData);
        },
        getCounts: function() {
            try {
                applicationManager.getPresentationUtility().showLoadingScreen();
                this.view.lblTransactionValue.text = "";
                this.view.lblACHTransactionValue.text = "";
                this.view.lblACHFileValue.text = "";
                this.view.lblPendingValue.text = "";
                this.view.lblApprovedValue.text = "";
                this.view.lblRejectedValue.text = "";
                var scopeObj = this;
                var formName = "frmCombinedDashboard";
                scopeObj.ACHModule.presentationController.getApprovalCounts(formName);
            } catch (er) {}
        },
        getApprovalCountsSuccessCallBack: function(response) {
            try {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                this.view.lblTransactionValue.text = "";
                this.view.lblACHTransactionValue.text = "";
                this.view.lblACHFileValue.text = "";
                this.view.lblPendingValue.text = "";
                this.view.lblApprovedValue.text = "";
                this.view.lblRejectedValue.text = "";
                this.view.lblTransactionValue.text = kony.sdk.isNullOrUndefined(response[0].GeneralTransactionsForMyApproval) ? "-" : response[0].GeneralTransactionsForMyApproval;
                this.view.lblACHTransactionValue.text = kony.sdk.isNullOrUndefined(response[0].ACHTransactionsForMyApproval) ? "-" : response[0].ACHTransactionsForMyApproval;
                this.view.lblACHFileValue.text = kony.sdk.isNullOrUndefined(response[0].ACHFilesForMyApproval) ? "-" : response[0].ACHFilesForMyApproval;
                this.view.lblPendingValue.text = kony.sdk.isNullOrUndefined(response[0].myRequestsWaiting) ? "-" : response[0].myRequestsWaiting;
                this.view.lblApprovedValue.text = kony.sdk.isNullOrUndefined(response[0].myRequestsApproved) ? "-" : response[0].myRequestsApproved;
                this.view.lblRejectedValue.text = kony.sdk.isNullOrUndefined(response[0].myRequestsRejected) ? "-" : response[0].myRequestsRejected;
            } catch (er) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }
        },
        fetchErrorBack: function(response) {
            try {
                if (!kony.sdk.isNullOrUndefined(response)) {
                    var scopeObj = this;
                    var errorResponse = "";
                    if (!kony.sdk.isNullOrUndefined(response.errorMessage)) {
                        errorResponse = response.errorMessage;
                    } else {
                        errorResponse = "Something went wrong while making service call.";
                    }
                    this.view.customPopup.lblPopup.text = errorResponse;
                    if (!kony.sdk.isNullOrUndefined(this.timerCounter)) {
                        this.timerCounter = parseInt(this.timerCounter) + 1;
                    } else {
                        this.timerCounter = 1;
                    }
                    var timerId = "timerPopupErrorACHTransactionDetail" + this.timerCounter;
                    this.view.flxPopup.skin = "sknFlxf54b5e";
                    this.view.customPopup.imgPopup.src = "errormessage.png";
                    this.view.flxPopup.setVisibility(true);
                    kony.timer.schedule(timerId, function() {
                        scopeObj.view.flxPopup.setVisibility(false);
                    }, 1.5, false);
                }
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            } catch (error) {
                kony.print("frmACHTransactions ACHFileListload_rowclick-->" + error);
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }
        },
        welcomeVIPCustomer: function() {
            var navManager = applicationManager.getNavigationManager();
            var theme = navManager.getCustomInfo("theme");
            if (theme === "GoldTheme") applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, kony.i18n.getLocalizedString("kony.mb.vipCustomer.welcomeMsg"));
        },
        bringFlxDashboardToFront: function() {
            this.view.flxDashboard.zIndex = 6;
            this.view.flxDashboardHeader.zIndex = 4;
            this.view.forceLayout();
        },
        bringFlxDashboardHeaderToFront: function() {
            this.view.flxDashboard.zIndex = 4;
            this.view.flxDashboardHeader.zIndex = 6;
            this.view.forceLayout();
        }
    };
});
define("BBAccountsModule/frmCombinedDashboardControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexScrollContainer_h9f63cbd7474459e88c437b8b585fcb4: function AS_FlexScrollContainer_h9f63cbd7474459e88c437b8b585fcb4(eventobject, x, y) {
        var self = this;
        this.bringFlxDashboardHeaderToFront()
    },
    AS_Form_d5565ab84c334bf7bfb5c5498bf6ec09: function AS_Form_d5565ab84c334bf7bfb5c5498bf6ec09(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d294f3984b074da48045b8a35f521cfd: function AS_Form_d294f3984b074da48045b8a35f521cfd(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_d4e155095c454c8daab39d1e29f4bf5e: function AS_Form_d4e155095c454c8daab39d1e29f4bf5e(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_Image_ed4fd7eae5b6483ea27c212c539acbfb: function AS_Image_ed4fd7eae5b6483ea27c212c539acbfb(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 1);
    },
    AS_Image_d054bb689782426ca843557e7fb9a2e7: function AS_Image_d054bb689782426ca843557e7fb9a2e7(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 2);
    },
    AS_Image_edfee3cf1b694c3eb3b1b5960565a26c: function AS_Image_edfee3cf1b694c3eb3b1b5960565a26c(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 3);
    },
    AS_Image_d97d6fa2a1f04943865d7a6f89a65603: function AS_Image_d97d6fa2a1f04943865d7a6f89a65603(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 4);
    },
    AS_Image_b36291cc64184f2094f37247e4cf8e86: function AS_Image_b36291cc64184f2094f37247e4cf8e86(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 5);
    },
    AS_BarButtonItem_a2e75b17a28a4b9ebe80811633357d50: function AS_BarButtonItem_a2e75b17a28a4b9ebe80811633357d50(eventobject) {
        var self = this;
        return self.navigateToCombinedSelector.call(this);
    },
    AS_Segment_fce564f9427e4445a3e6abab2518ec20: function AS_Segment_fce564f9427e4445a3e6abab2518ec20(eventobject, x, y) {
        var self = this;
        this.bringFlxDashboardToFront();
    }
});
define("BBAccountsModule/frmCombinedDashboardController", ["BBAccountsModule/userfrmCombinedDashboardController", "BBAccountsModule/frmCombinedDashboardControllerActions"], function() {
    var controller = require("BBAccountsModule/userfrmCombinedDashboardController");
    var controllerActions = ["BBAccountsModule/frmCombinedDashboardControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
