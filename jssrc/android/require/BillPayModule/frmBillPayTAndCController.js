define("BillPayModule/userfrmBillPayTAndCController", ['CampaignUtility'], function(CampaignUtility) {
    return {
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        },
        onNavigate: function(data) {
            var scope = this;
            var context = {};
            this.context = applicationManager.getNavigationManager().getCustomInfo("frmBillPayTAndC");
            this.view.termsAndConditions.setContext(this.context);
            this.view.termsAndConditions.setParentScope(scope);
            this.view.termsAndConditions.onError = this.onError;
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
            this.view.customHeader.flxBack.onClick = this.navigateBack;
            this.view.forceLayout();
        },
        navigateBack: function() {
            applicationManager.getNavigationManager().setCustomInfo("frmBillPayLiteActivation", this.context);
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
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
define("BillPayModule/frmBillPayTAndCControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f70d0b856a094ccf9e7524903dff986f: function AS_Form_f70d0b856a094ccf9e7524903dff986f(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_af95c1655a3248888ba002bf991dd300: function AS_Form_af95c1655a3248888ba002bf991dd300(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("BillPayModule/frmBillPayTAndCController", ["BillPayModule/userfrmBillPayTAndCController", "BillPayModule/frmBillPayTAndCControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayTAndCController");
    var controllerActions = ["BillPayModule/frmBillPayTAndCControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
