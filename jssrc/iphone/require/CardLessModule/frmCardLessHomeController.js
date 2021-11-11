define("CardLessModule/userfrmCardLessHomeController", ['CampaignUtility'], function(CampaignUtility) {
    return {
        pendingTxns: null,
        postedTxns: null,
        segmentData: null,
        preShow: function() {
            // this.setFooterSkin();
            var scope = this;
            this.view.flxWithdrawCash.onClick = this.flxWithdrawCashOnClick;
            this.view.tbxSearch.onTouchStart = this.tbxSearchOnTouchEnd;
            this.view.flxMainContainer.skin = "slfSbox";
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.tbxSearch.text = "";
            this.view.flxWithdrawCash.onTouchStart = function() {
                scope.view.imgCheckDeposit.src = "withdrawcashtap.png";
            };
            this.view.flxWithdrawCash.onTouchEnd = function() {
                scope.view.imgCheckDeposit.src = "withdrawcash.png";
            };
            this.view.customSearchbox.btnCancel.onClick = this.btnCancelOnClick;
            var configManager = applicationManager.getConfigurationManager();
            var MenuHandler = applicationManager.getMenuHandler();
            MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUCARDLESS);
            var CardLess = applicationManager.getLoggerManager();
            CardLess.setCustomMetrics(this, false, "Cardless Cash Withdrawal");
            this.view.btnChatbot.onClick = function() {
                var chatBotMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
                chatBotMode.presentationController.handleFirstTimeOpen();
            };
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.setVisibility(false);
                this.view.flxFooter.setVisibility(true);
                this.view.flxMainContainer.top = "0dp";
            } else {
                this.view.flxHeader.setVisibility(true);
                this.view.flxFooter.setVisibility(false);
                this.view.flxMainContainer.top = "56dp";
            }
            this.view.flxSearch.setVisibility(true);
            this.view.flxHeaderSearchbox.setVisibility(false);
            //this.view.flxMainContainer.top = "56dp";
            var navManager = applicationManager.getNavigationManager();
            navManager.setEntryPoint("cancelCardlessTransaction", "frmCardLessHome");
            var transactionDetails = navManager.getCustomInfo("frmCardLessHome");
            var pendingTransactions = transactionDetails.pendingTransactions;
            var postedTransactions = transactionDetails.postedTransaction;
            this.view.flxNoTransactions.isVisible = false;
            this.view.segDepositFrom.isVisible = true;
            this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
            this.view.flxWithdrawCash.isVisible = true;
            this.setTransactions(pendingTransactions, postedTransactions);
            this.showDeletedToast();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            let scopeObj = this;

            function campaignPopUpSuccess(response) {
                CampaignUtility.showCampaign(response, scopeObj.view);
            }

            function campaignPopUpError(response) {
                kony.print(response, "Campaign Not Found!");
            }
            CampaignUtility.fetchPopupCampaigns(campaignPopUpSuccess, campaignPopUpError);
            var deviceManager = applicationManager.getDeviceUtilManager();
            deviceManager.detectDynamicInstrumentation();
        },
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        },
        setFooterSkin: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                this.view.customFooter.flxAccSelect.setVisibility(false);
                this.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                this.view.customFooter.flxTransferSel.setVisibility(false);
                this.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                this.view.customFooter.flxBillSelected.setVisibility(false);
                this.view.customFooter.lblMore.skin = "sknLbl424242SSP20px";
                this.view.customFooter.flxMoreSelect.setVisibility(true);
            }
        },
        flxWithdrawCashOnClick: function() {
            var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
            cardlessModule.presentationController.clearTransactionObject();
            var navMan = applicationManager.getNavigationManager();
            navMan.setEntryPoint("cardlessEntry", "frmCardLessHome");
            cardlessModule.presentationController.commonFunctionForNavigation("frmCardLessCashRec");
        },
        segDepositFromOnClick: function() {
            var navMan = applicationManager.getNavigationManager();
            var selectedSectionIndex = Math.floor(this.view.segDepositFrom.selectedRowIndex[0]);
            var selectedRowIndex = Math.floor(this.view.segDepositFrom.selectedRowIndex[1]);
            var transactionData = this.view.segDepositFrom.data[selectedSectionIndex][1][selectedRowIndex];
            navMan.setCustomInfo("frmTransactionDetails", transactionData);
            navMan.setEntryPoint("frmTransactionDetails", "CardLess");
            var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
            cardlessModule.presentationController.commonFunctionForNavigation("frmTransactionDetails");
        },
        setTransactions: function(pendingTransactions, postedTransactions) {
            var dataMap = this.getDataMap();
            var postedTransactions = postedTransactions;
            var pendingTransaction = pendingTransactions;
            this.pendingTxns = pendingTransactions;
            this.postedTxns = postedTransactions;
            this.view.segDepositFrom.widgetDataMap = dataMap;
            this.view.segDepositFrom.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            if (pendingTransaction.length > 0 && postedTransactions.length > 0) {
                var data = [
                    [{
                        "lblHeader": "Pending Transactions"
                    }, pendingTransaction],
                    [{
                        "lblHeader": "Posted Payments" /*"Posted Transactions" */
                    }, postedTransactions]
                ];
                this.view.segDepositFrom.setData(data);
                this.view.flxMainContainer.forceLayout();
            } else if (pendingTransaction.length > 0) {
                var data = [
                    [{
                        "lblHeader": "Pending Transactions"
                    }, pendingTransaction]
                ];
                this.view.segDepositFrom.setData(data);
                this.view.flxMainContainer.forceLayout();
            } else if (postedTransactions.length > 0) {
                var data = [
                    [{
                        "lblHeader": "Posted Payments" /* "Posted Transactions"*/
                    }, postedTransactions]
                ];
                this.view.segDepositFrom.setData(data);
                this.view.flxMainContainer.forceLayout();
            } else {
                this.view.segDepositFrom.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
                this.view.flxMainContainer.forceLayout();
            }
            this.segmentData = this.view.segDepositFrom.data;
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        tbxSearchOnTextChange: function() {
            var navObj = applicationManager.getNavigationManager();
            var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
            if (searchtext) {
                var data = [],
                    headers = [];
                headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions"));
                headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions"));
                data.push(this.pendingTxns);
                data.push(this.postedTxns);
                this.view.segDepositFrom.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
                this.view.flxWithdrawCash.isVisible = false;
                this.view.segDepositFrom.removeAll();
                var searchobj = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("description", searchtext, data, headers);
                if (searchobj.length > 0) {
                    this.view.segDepositFrom.setData(searchobj);
                } else {
                    this.view.segDepositFrom.isVisible = false;
                    this.view.flxNoTransactions.isVisible = true;
                    this.view.flxSeperator2.isVisible = false;
                    //this.view.flxHeaderNT.isVisible=false;
                }
            } else {
                if (this.segmentData.length > 0) {
                    this.view.segDepositFrom.setData(this.segmentData);
                    this.view.segDepositFrom.isVisible = true;
                    this.view.flxNoTransactions.isVisible = false;
                    this.view.flxWithdrawCash.isVisible = true;
                } else {
                    this.view.flxWithdrawCash.isVisible = true;
                    this.view.segDepositFrom.isVisible = false;
                    this.view.flxNoTransactions.isVisible = true;
                    this.view.flxSeperator2.isVisible = false;
                    //this.view.flxHeaderNT.isVisible=false;
                }
            }
        },
        getDataMap: function() {
            var dataMap = {};
            dataMap = {
                "lblAccountName": "description",
                "lblAccountBal": "scheduledDate",
                "lblAccountBalValue": "amount",
                "lblHeader": "lblHeader"
            };
            return dataMap;
        },
        tbxSearchOnTouchEnd: function() {
            var scope = this;
            this.view.flxGradientBottom.isVisible = false;
            this.view.flxMainContainer.skin = "sknFlxScrlffffff";
            this.view.tbxSearch.setFocus(false);
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxHeader.setVisibility(false);
            this.view.flxHeaderSearchbox.setVisibility(true);
            this.view.flxMainContainer.top = "40dp";
            this.view.flxSearch.setVisibility(false);
            this.view.flxShadow.setVisibility(false);
            this.view.flxWithdrawCash.setVisibility(false);
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "android") {
                this.view.flxGradient.top = "40dp";
            }
            //this.view.customSearchbox.tbxSearch.setFocus(true);
            kony.timer.schedule("timerId", function() {
                scope.view.customSearchbox.tbxSearch.setFocus(true);
            }, 0.2, false);
            this.view.flxHeaderSearchbox.forceLayout();
        },
        btnCancelOnClick: function() {
            var navManager = applicationManager.getNavigationManager();
            //this.view.flxHeader.setVisibility(true);
            //this.view.flxMainContainer.top = "56dp";
            this.view.flxGradientBottom.isVisible = true;
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxMainContainer.skin = "slfSbox";
            this.view.tbxSearch.text = "";
            var transactionDetails = navManager.getCustomInfo("frmCardLessHome");
            var pendingTransactions = transactionDetails.pendingTransactions;
            var postedTransactions = transactionDetails.postedTransaction;
            this.view.flxNoTransactions.isVisible = false;
            this.setTransactions(pendingTransactions, postedTransactions);
            // this.view.flxShadow.setVisibility(true);
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxMainContainer.top = "0dp";
                this.view.flxHeader.setVisibility(false);
                this.view.flxFooter.setVisibility(true);
            } else {
                this.view.flxMainContainer.top = "56dp";
                this.view.flxGradient.top = "56dp";
                this.view.flxHeader.setVisibility(true);
                this.view.flxFooter.setVisibility(false);
            }
            this.view.flxSearch.setVisibility(true);
            this.view.flxWithdrawCash.setVisibility(true);
            this.view.flxHeaderSearchbox.setVisibility(false);
        },
        showDeletedToast: function() {
            if (scope_cardlessPresentationController.deletedTransactionFlag) {
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.cancelTransaction") + "with reference id: " + scope_cardlessPresentationController.transactionId));
                scope_cardlessPresentationController.deletedTransactionFlag = false;
            }
            if (scope_cardlessPresentationController.deletedTransactionErrorFlag) {
                applicationManager.getDataProcessorUtility().showToastMessageError(this, scope_cardlessPresentationController.deletedTransactionErrorMessage);
                scope_cardlessPresentationController.deletedTransactionErrorFlag = false;
            }
        }
    };
});
define("CardLessModule/frmCardLessHomeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j3e45af1c8be42b5a149e0c6cee5e8ea: function AS_Form_j3e45af1c8be42b5a149e0c6cee5e8ea(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b389c0f1115e4459a0f755d6b2e4082d: function AS_Form_b389c0f1115e4459a0f755d6b2e4082d(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_Segment_cb08b4876fc741fdb630bac73dd5546f: function AS_Segment_cb08b4876fc741fdb630bac73dd5546f(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.segDepositFromOnClick();
    }
});
define("CardLessModule/frmCardLessHomeController", ["CardLessModule/userfrmCardLessHomeController", "CardLessModule/frmCardLessHomeControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessHomeController");
    var controllerActions = ["CardLessModule/frmCardLessHomeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
