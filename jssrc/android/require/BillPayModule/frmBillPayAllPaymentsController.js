define("BillPayModule/userfrmBillPayAllPaymentsController", {
    //Type your controller code here
    frmPreshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            //  this.view.flxFooter.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = true;
            //this.view.flxFooter.isVisible = false;
        }
        this.bindData();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        this.view.customHeader.flxBack.onClick = function() {
            navManager.goBack();
        }
        var scope = this;
        var currentForm = navManager.getCurrentForm();
        this.view.btnPayBill.onClick = this.payBill;
        this.view.btnViewBill.onClick = this.viewBill;
        this.view.segSelectAccounts.onRowClick = this.navToDetails;
        this.view.customHeader.btnRight.onClick = function() {
            scope.view.flxEditOptions.isVisible = true;
        };
        this.view.flxEditOptions.onClick = function() {
            scope.view.flxEditOptions.isVisible = false;
        };
        this.view.btnEditPayeeAddress.onClick = function() {
            scope.view.flxEditOptions.isVisible = false;
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var billPayeeData = navManager.getCustomInfo("frmBillPayPayeeDetails");
            navManager.setEntryPoint("editBillPayPayee", "frmBillPayEditPayeeAddress");
            billPayMod.presentationController.setFlowType("editBillPay");
            var context = billPayeeData;
            //  context["pManager"] = pManager;
            context["flowType"] = "EDIT";
            context["isSearchFlow"] = false;
            if (context.hasOwnProperty('addressLine1')) {
                context['street'] = context['addressLine1'];
            }
            if (context.hasOwnProperty('country')) {
                context['countryName'] = context['country'];
            }
            navManager.navigateTo("frmBillPayEditPayeeAddress", false, context);
        };
        this.view.btnEditNickName.onClick = function() {
            scope.view.flxEditOptions.isVisible = false;
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var billPayeeData = navManager.getCustomInfo("frmBillPayPayeeDetails");
            navManager.setEntryPoint("editBillPayPayee", "frmBillPayEditNickName");
            billPayMod.presentationController.setFlowType("editBillPay");
            var context = billPayeeData;
            // context["pManager"] = pManager;
            context["flowType"] = "EDIT";
            navManager.navigateTo("frmBillPayEditNickName", false, context);
        };
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    onClickEdit: function() {
        if (applicationManager.getDeviceUtilManager().isIPhone()) {
            var actionSheetObject = new kony.ui.ActionSheet({
                "title": null,
                "message": null,
                "showCompletionCallback": null
            });
            applicationManager.actionSheetObject = actionSheetObject;
            var actionEditPayeeAddress = new kony.ui.ActionItem({
                "title": "Edit Payee Address",
                "style": constants.ACTION_STYLE_DEFAULT,
                "action": this.view.btnEditPayeeAddress.onClick
            });
            var actionEditNickName = new kony.ui.ActionItem({
                "title": "Edit Nickname",
                "style": constants.ACTION_STYLE_DEFAULT,
                "action": this.view.btnEditNickName.onClick
            });
            var actionCancel = new kony.ui.ActionItem({
                "title": "Cancel",
                "style": constants.ACTION_ITEM_STYLE_CANCEL,
                "action": null
            });
            actionSheetObject.addAction(actionEditPayeeAddress);
            actionSheetObject.addAction(actionEditNickName);
            actionSheetObject.addAction(actionCancel);
            actionSheetObject.show();
        } else {
            this.view.flxEditOptions.setVisibility(true);
            this.view.flxMainContainer.setEnabled(false);
        }
    },
    bindData: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmBillPayAllPayments");
        this.view.segSelectAccounts.widgetDataMap = {
            lblTransaction: "amount",
            lblAccount: "showDate",
            lblDate: "fromAccountName",
            imgAccount: "empty"
        };
        this.view.segSelectAccounts.setData(data.billData);
        this.view.lblAmount.text = data.billPayeeDueDetails.dueAmount;
        this.view.lblDueDateValue.text = data.billPayeeDueDetails.billDueDate;
        this.view.lblLastPaymentDate.text = data.billPayeeDueDetails.paidDate;
        this.view.lblLastPaymentAmount.text = data.billPayeeDueDetails.paidAmount;
    },
    viewBill: function() {
        var navMan = applicationManager.getNavigationManager();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var billPayeeData = navMan.getCustomInfo("frmBillPayPayeeDetails");
        billPayMod.presentationController.viewBill(billPayeeData.ebillURL);
    },
    payBill: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var payeeData = billPayMod.presentationController.getPayeeDetails();
        billPayMod.presentationController.navAfterSelectPayee(payeeData);
    },
    navToDetails: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navMan = applicationManager.getNavigationManager();
        var selectedRowIndex = Math.floor(this.view.segSelectAccounts.selectedRowIndex[1]);
        var transactionData = this.view.segSelectAccounts.data[selectedRowIndex];
        transactionData.transactionId = transactionData.referenceId;
        // var navMan=applicationManager.getNavigationManager();
        navMan.setEntryPoint("payBill", "frmBillPay");
        navMan.setCustomInfo("frmTransactionDetails", transactionData);
        navMan.setEntryPoint("frmTransactionDetails", "BillPay");
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.commonFunctionForNavigation("frmTransactionDetails");
    }
});
define("BillPayModule/frmBillPayAllPaymentsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c94e42262d0a4de9aa15d549be3c9b09: function AS_Form_c94e42262d0a4de9aa15d549be3c9b09(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_h813d79e0f4c42e88fb4cd144c988795: function AS_Form_h813d79e0f4c42e88fb4cd144c988795(eventobject) {
        var self = this;
        this.frmPreshow();
    },
    AS_BarButtonItem_a71319bc088e438b8217ce1c158b85b7: function AS_BarButtonItem_a71319bc088e438b8217ce1c158b85b7(eventobject) {
        var self = this;
        this.onClickEdit();
    }
});
define("BillPayModule/frmBillPayAllPaymentsController", ["BillPayModule/userfrmBillPayAllPaymentsController", "BillPayModule/frmBillPayAllPaymentsControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayAllPaymentsController");
    var controllerActions = ["BillPayModule/frmBillPayAllPaymentsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
