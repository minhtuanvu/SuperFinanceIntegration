define("BillPayModule/userfrmBillPayLiteActivationController", [], function() {
    return {
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        },
        onNavigate: function(obj) {
            var scope = this;
            this.context = applicationManager.getNavigationManager().getCustomInfo("frmBillPayLiteActivation");
            this.view.liteActivationNative.setContext(this.context);
            this.view.liteActivationNative.setParentScope(scope);
            this.view.liteActivationNative.onError = this.onError;
        },
        onError: function(err) {
            kony.application.dismissLoadingScreen();
            alert(JSON.stringify(err));
        },
        preShow: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "0dp";
            } else {
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            }
            this.view.customHeader.btnRight.text = kony.i18n.getLocalizedString("kony.mb.common.Cancel");
            this.view.customHeader.btnRight.onClick = this.navigateBack;
            this.view.customHeader.btnRight.setVisibility(true);
            this.view.customHeader.flxBack.onClick = this.navigateBack;
            this.view.forceLayout();
        },
        navigateToPayeeList: function(data) {
            applicationManager.getNavigationManager().setCustomInfo("frmBillPayAllPayees", data.payeeData);
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayAllPayees");
        },
        navigateBack: function() {
            applicationManager.getNavigationManager().setCustomInfo("frmBillPayPayeeDetails", this.context.payeeData);
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        },
        navigateToTandC: function() {
            applicationManager.getNavigationManager().setCustomInfo("frmBillPayTAndC", this.context);
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayTAndC");
        },
        setFooter: function() {
            this.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
            this.view.customFooter.flxAccSelect.setVisibility(false);
            this.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
            this.view.customFooter.flxTransferSel.setVisibility(false);
            this.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
            this.view.customFooter.flxBillSelected.setVisibility(true);
            this.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
            this.view.customFooter.flxMoreSelect.setVisibility(false);
        },
        showErrorPopup: function(errorMsg) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var scopeObj = this;
            applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
        }
    };
});
define("BillPayModule/frmBillPayLiteActivationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fe9aa327b6644daa84b2efd48731fc4b: function AS_Form_fe9aa327b6644daa84b2efd48731fc4b(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_d731c2d36d704253a4563edf55b7b8fa: function AS_Form_d731c2d36d704253a4563edf55b7b8fa(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_h04c156ea2c948429cc40eb2aaba9a78: function AS_BarButtonItem_h04c156ea2c948429cc40eb2aaba9a78(eventobject) {
        var self = this;
        this.showQuickLinks();
    }
});
define("BillPayModule/frmBillPayLiteActivationController", ["BillPayModule/userfrmBillPayLiteActivationController", "BillPayModule/frmBillPayLiteActivationControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayLiteActivationController");
    var controllerActions = ["BillPayModule/frmBillPayLiteActivationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
