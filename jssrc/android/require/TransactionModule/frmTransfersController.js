define("TransactionModule/userfrmTransfersController", {
    popupMsg: '',
    timerCounter: 0,
    onNavigate: function(obj) {
        if (obj === undefined) {
            var newObj = {
                "popup": "none"
            };
            obj = newObj;
        }
        if (obj.popup === "successAddRecipient") {
            this.popupMsg = kony.i18n.getLocalizedString("kony.mb.p2p.successAddRecipient");
        }
        if (obj.popup === "none") {
            this.popupMsg = '';
        }
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var self = this;
        if (this.view.flxHeaderSearchbox.height === "40dp") {
            this.view.flxHeaderSearchbox.height = "0dp";
            // this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.height = "55dp";
            // this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
        }
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxFooter.isVisible = true;
            this.view.flxMainContainer.top = "0dp";
        } else {
            this.view.flxFooter.isVisible = false;
            this.view.flxMainContainer.top = "56dp";
        }
        this.view.flxSearch.top = 0 + "dp";
        this.view.flxTransferOptions.top = "55dp";
        this.view.flxMainContainer.skin = "slFbox";
        this.view.flxGradient.top = 0 + "dp";
        this.view.flxSearch.height = "55dp";
        //  this.view.flxSearch.isVisible = true;
        this.view.flxGradient.isVisible = true;
        this.view.flxTransferOptions.height = "90dp";
        //this.view.flxTransferOptions.isVisible = true;
        this.setSegmentData();
        this.addDummyRows(); // added function for docking the header
        this.initActions();
        this.P2PEntitlement();
        if ((this.popupMsg !== null) && (this.popupMsg !== '')) {
            this.showPopupSuccess();
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        this.view.segTransactions.onScrolling = function() {
            self.transactionsSegmentOnScrolling();
        };
        var deviceManager = applicationManager.getDeviceUtilManager();
        deviceManager.detectDynamicInstrumentation();
    },
    addDummyRows: function() {
        var segWidgetDataMap = this.view.segTransactions.widgetDataMap;
        segWidgetDataMap["flxEmptyHeader"] = "flxEmptyHeader";
        segWidgetDataMap["flxEmptyRow"] = "flxEmptyRow";
        this.view.segTransactions.widgetDataMap = segWidgetDataMap;
        var segData = this.view.segTransactions.data;
        if (segData == null || segData == undefined) {
            segData = [];
        }
        var segLength = 0;
        for (let i = 0; i < segData.length; i++) {
            segLength = segLength + (segData[i][1].length * 70) + 49; //66 is the row height and 49 is the header height
        }
        segData.unshift([{
                "template": "flxEmptyHeader",
                "flxEmptyHeader": {
                    "height": "0dp"
                }
            },
            [{
                "template": "flxEmptyRow",
                "flxEmptyRow": {
                    "height": "145dp"
                }
            }]
        ]);
        segLength = segLength + 145;
        this.view.segTransactions.setData(segData);
        this.segLength = segLength;
    },
    transactionsSegmentOnScrolling: function() {
        var parallaxSpeed = 1;
        var yOffset = this.view.segTransactions.contentOffsetMeasured.y;
        if (this.view.flxHeaderSearchbox.height === "40dp") this.view.flxTransferOptions.top = 40 - (yOffset * parallaxSpeed) + "dp";
        else this.view.flxTransferOptions.top = 55 - (yOffset * parallaxSpeed) + "dp";
        this.view.flxSearch.top = 0 - (yOffset * parallaxSpeed) + "dp";
        this.view.flxGradient.top = 0 - (yOffset * parallaxSpeed) + "dp";
    },
    initActions: function() {
        var scope = this;
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler = applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUTRANSFERS);
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.cancelSearch;
        this.view.flxPayAPerson.onClick = this.flxPayAPersonOnClick;
        //		this.view.segTransactions.onRowClick=this.segTransactionsOnRowClick;
        this.view.flxManage.onClick = function() {
            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModPresentationController.commonFunctionForNavigation("frmManageRecipientType");
        };
        this.view.flxMakeTransfer.onTouchStart = function() {
            scope.view.imgMakeTransfer.src = "transferheadertap.png";
        };
        this.view.flxPayAPerson.onTouchStart = function() {
            scope.view.imgPayAPerson.src = "payapersonwhitetap.png";
        };
        this.view.flxManage.onTouchStart = function() {
            scope.view.imgManage.src = "managewhitetap.png";
        };
        this.view.flxMakeTransfer.onTouchEnd = function() {
            scope.view.imgMakeTransfer.src = "transferheader.png";
        };
        this.view.flxPayAPerson.onTouchEnd = function() {
            scope.view.imgPayAPerson.src = "payapersonwhite.png";
        };
        this.view.flxManage.onTouchEnd = function() {
            scope.view.imgManage.src = "managewhite.png";
        };
    },
    P2PEntitlement: function() {
        var configManager = applicationManager.getConfigurationManager();
        if (configManager.getConfigurationValue("ispayAPersonEnabled") !== "true") {
            this.view.flxPayAPerson.setVisibility(false);
            this.view.flxMakeTransfer.left = "50dp";
            this.view.flxManage.right = "50dp";
            return;
        }
    },
    segTransactionsOnRowClick: function(selectedRowIndex, selectedSectionIndex) {
        //   segTransactionsOnRowClick:function(){
        var navMan = applicationManager.getNavigationManager();
        //    var   selectedSectionIndex = sec;
        //       var selectedRowIndex = row;
        //    var selectedSectionIndex=Math.floor(this.view.segTransactions.selectedRowIndex[0]);
        //   var selectedRowIndex=Math.floor(this.view.segTransactions.selectedRowIndex[1]);
        var transactionData = this.view.segTransactions.data[selectedSectionIndex][1][selectedRowIndex];
        var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        transModPresentationController.setEntryPoints(transactionData.transactionType);
        navMan.setCustomInfo("frmTransactionDetails", transactionData);
        navMan.setEntryPoint("frmTransactionDetails", "Transfers");
        transModPresentationController.commonFunctionForNavigation("frmTransactionDetails");
    },
    setSegmentData: function() {
        var pendingaccounts = [],
            pendingaccounts = [];
        var navMan = applicationManager.getNavigationManager();
        // var configManager = applicationManager.getConfigurationManager();
        var forUtility = applicationManager.getFormatUtilManager();
        var transactions = navMan.getCustomInfo("frmTransfers");
        if (transactions) {
            if (transactions.res !== undefined && transactions.res !== null) {
                if (transactions.type === "error") this.showErrorPopup(transactions.res);
                else this.showSuccessPopup(transactions.res, transactions.typeOfTransaction);
            }
            transactions.res = null;
            navMan.setCustomInfo("frmTransfers", transactions);
            var postedTransaction = transactions.postedTransaction;
            var scheduledTransactions = transactions.scheduledTransactions;
            this.view.segTransactions.widgetDataMap = {
                lblTransaction: "description",
                lblDate: "scheduledDate",
                lblAmount: "amount",
                transactionId: "transactionId",
                lblAccount: "fromAccountName",
                lblHeader: "lblHeader",
                imgAccount: "image"
            };
            if (postedTransaction.length > 0 && scheduledTransactions.length > 0) {
                var data = [
                    [{
                        "lblHeader": "Scheduled Transactions"
                    }, scheduledTransactions],
                    [{
                        "lblHeader": "Posted Payments" /*"Posted Transactions"*/
                    }, postedTransaction]
                ];
                this.segmentData = data;
                this.view.segTransactions.setData(data);
                this.pendingaccounts = this.view.segTransactions.data[0][1];
                this.postedaccounts = this.view.segTransactions.data[1][1];
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else if (scheduledTransactions.length > 0) {
                var data = [
                    [{
                        "lblHeader": "Scheduled Transactions"
                    }, scheduledTransactions]
                ];
                this.segmentData = data;
                this.view.segTransactions.setData(data);
                this.pendingaccounts = this.view.segTransactions.data[0][1];
                this.postedaccounts = [];
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else if (postedTransaction.length > 0) {
                var data = [
                    [{
                        "lblHeader": "Posted Payments" /*"Posted Transactions"*/
                    }, postedTransaction]
                ];
                this.segmentData = data;
                this.view.segTransactions.setData(data);
                this.postedaccounts = this.view.segTransactions.data[0][1];
                this.pendingaccounts = [];
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else {
                this.segmentData = [];
                this.pendingaccounts = [];
                this.postedaccounts = [];
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        }
    },
    showSearch: function() {
        var scope = this;
        this.view.flxOuterGradientBlueKA.isVisible = false;
        this.view.flxMainContainer.skin = "sknFlxffffff";
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            if (this.view.flxHeaderSearchbox.height === "40dp") {
                this.view.flxHeaderSearchbox.height = "0dp";
                //  this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.height = "55dp";
                // this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxTransferOptions.top = "54dp";
                this.view.flxTransferOptions.height = "90dp";
                // this.view.flxTransferOptions.isVisible = true;
                this.view.flxGradient.isVisible = true;
            } else {
                this.view.flxHeaderSearchbox.height = "40dp";
                //  this.view.flxHeaderSearchbox.isVisible = true;
                this.view.flxSearch.height = "0dp";
                //  this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxTransferOptions.height = "0dp";
                // this.view.flxTransferOptions.isVisible = false;
                this.view.flxGradient.isVisible = false;
                this.view.customSearchbox.tbxSearch.text = "";
                //  this.view.customSearchbox.tbxSearch.setFocus(true);
                kony.timer.schedule("timerId", function() {
                    scope.view.customSearchbox.tbxSearch.setFocus(true);
                }, 0.1, false);
                this.removeDummyRows();
                this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
            }
        } else {
            if (this.view.flxHeaderSearchbox.height === "40dp") {
                this.view.flxHeaderSearchbox.height = "0dp";
                // this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.height = "55dp";
                // this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
                this.view.flxGradient.top = "0dp";
                this.view.flxTransferOptions.height = "0dp";
                //  this.view.flxTransferOptions.isVisible = false;
            } else {
                this.view.flxGradient.isVisible = false;
                this.view.flxTransferOptions.height = "0dp";
                //	this.view.flxTransferOptions.isVisible = false;
                this.removeDummyRows();
                this.view.flxSearch.height = "0dp";
                //    this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.height = "40dp";
                // this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.text = "";
                kony.timer.schedule("timerId", function() {
                    scope.view.customSearchbox.tbxSearch.setFocus(true);
                }, 0.1, false);
                this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
            }
        }
        this.view.flxOuterGradientBlueKA.isVisible = false;
    },
    removeDummyRows: function() {
        var data = this.view.segTransactions.data;
        if (data == null || data == undefined) {
            kony.print("no data");
        } else {
            data.shift();
            this.view.segTransactions.setData(data);
        }
    },
    cancelSearch: function() {
        this.view.flxOuterGradientBlueKA.isVisible = true;
        this.view.flxMainContainer.skin = "slFbox";
        this.view.flxHeaderSearchbox.height = "0dp";
        // this.view.flxHeaderSearchbox.isVisible = false;
        this.view.flxSearch.height = "55dp";
        // this.view.flxSearch.isVisible = true;
        this.view.flxGradient.isVisible = true;
        this.view.flxTransferOptions.height = "90dp";
        // this.view.flxTransferOptions.isVisible = true;
        this.view.flxSearch.top = 0 + "dp";
        this.view.flxGradient.top = "0dp";
        this.view.flxTransferOptions.top = "55dp";
        this.view.segTransactions.top = "0dp";
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
        if (this.segmentData.length > 0) {
            this.view.segTransactions.setData(this.segmentData);
            this.addDummyRows();
            this.view.segTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
        } else {
            this.view.segTransactions.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
            // this.view.flxHeaderNT.isVisible = false;
        }
        this.view.flxOuterGradientBlueKA.isVisible = true;
    },
    flxPayAPersonOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.setEntryPoint("payaperson", "frmTransfers");
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.getAllPayees();
        var P2P = applicationManager.getLoggerManager();
        P2P.setCustomMetrics(this, false, "P2P");
    },
    showPopupSuccess: function() {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupSuccess" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = this.popupMsg;
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 3, false);
    },
    maketransferOnclick: function() {
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.transfersModule();
        var Transfers = applicationManager.getLoggerManager();
        Transfers.setCustomMetrics(this, false, "Transfers");
    },
    showSuccessPopup: function(refID, type) {
        // TO DO i18n's
        var msg;
        if (type === "delete") {
            msg = "Transaction was cancelled successfully with reference ID : " + (refID.transactionId || refID.referenceId);
        } else {
            if (refID.referenceId) msg = "Transfer completed successfully. Transaction ID: " + refID.referenceId;
            else msg = "Transaction was edited successfully with reference ID : " + refID.transactionId;
        }
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
        var navManager = applicationManager.getNavigationManager();
        navManager.setEntryPoint("Feedback", "frmTransfers");
        var feedbackModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("FeedBackModule");
        feedbackModule.presentationController.showFeedbackPopup({
            from: "transaction"
        });
    },
    showErrorPopup: function(err) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, JSON.stringify(err));
    },
    tbxSearchOnTextChange: function() {
        var navObj = applicationManager.getNavigationManager();
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        if (searchtext) {
            var data = [],
                headers = [];
            var lblPendingTranHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions");
            var lblPostedTranHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions");
            headers.push(lblPendingTranHeader);
            headers.push(lblPostedTranHeader);
            data.push(this.pendingaccounts);
            data.push(this.postedaccounts);
            this.view.segTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            this.view.segTransactions.removeAll();
            var searchobj = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("description", searchtext, data, headers);
            if (searchobj.length > 0) {
                if (searchobj[0][0].lblHeader === "Pending Transactions") searchobj[0][0].lblHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.scheduledTransactions");
                this.view.segTransactions.setData(searchobj);
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        } else {
            if (this.segmentData.length > 0) {
                this.view.segTransactions.setData(this.segmentData);
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
                // this.view.flxHeaderNT.isVisible = false;
            }
        }
    },
});
define("TransactionModule/frmTransfersControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b0bc890236fc430583e2dd4db7ce3eb8: function AS_FlexContainer_b0bc890236fc430583e2dd4db7ce3eb8(eventobject) {
        var self = this;
        this.maketransferOnclick();
    },
    AS_Form_f9a91f318d4946e6bb8518b20e57b186: function AS_Form_f9a91f318d4946e6bb8518b20e57b186(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_aee3765c74df46148b7ff154499a6254: function AS_Form_aee3765c74df46148b7ff154499a6254(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("TransactionModule/frmTransfersController", ["TransactionModule/userfrmTransfersController", "TransactionModule/frmTransfersControllerActions"], function() {
    var controller = require("TransactionModule/userfrmTransfersController");
    var controllerActions = ["TransactionModule/frmTransfersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
