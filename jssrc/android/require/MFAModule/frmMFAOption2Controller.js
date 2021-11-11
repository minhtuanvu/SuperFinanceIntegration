define("MFAModule/userfrmMFAOption2Controller", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.flexView(1);
        this.view.btnSend.onClick = this.onClickSend;
        this.view.customHeader.btnRight.onClick = onCancelClick;
    },
    setFormUI: function(customerCommunicationInfo) {
        if (this.getMFAFlowType() == "TRANSFER_CREATE") {
            this.view.flxNewDevice.setVisibility(false);
            this.view.flxDeviceRegistration.setVisibility(false);
            this.lblLetsAuthenticateTransaction.setVisibility(true);
        } else if (this.getMFAFlowType() == "UPDATE_USERNAME") {
            this.view.flxNewDevice.setVisibility(false);
            this.view.flxDeviceRegistration.setVisibility(true);
            var userObj = applicationManager.getUserPreferencesManager();
            var uname = userObj.gettempUserName();
            this.view.lblName = "Hi!! " + uname + " Let's authenticate";
            this.view.lblLetsAuthenticateTransaction.setVisibility(false);
        } else if (this.getMFAFlowType() == "DEVICE_REGISTRATION") {
            this.view.flxNewDevice.setVisibility(true);
            this.view.flxDeviceRegistration.setVisibility(false);
            var userObj = applicationManager.getUserPreferencesManager();
            var uname = userObj.gettempUserName();
            this.view.lblName = "Hi!! " + uname + " Let's authenticate";
            this.view.lblLetsAuthenticateTransaction.setVisibility(false);
        }
        this.view.forceLayout();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onCancelClick: function() {},
    onClickSend: function() {
        //send selected data
        // applicationManager.getMFAHandler().callbackPayload = ;
        var navmanager = applicationManager.getNavigationmanager();
        navManager.navigateTo("frmMFASecurityCode");
    },
    flexView: function(option) {
        this.resetFlexes();
        if (option === 1) {
            this.view.flxNewDevice.isVisible = true;
        } else if (option === 2) {
            this.view.flxDeviceRegistration.isVisible = true;
        } else {
            this.view.lblLetsAuthenticateTransaction.isVisible = true;
        }
    },
    resetFlexes: function() {
        this.view.flxNewDevice.isVisible = false;
        this.view.flxDeviceRegistration.isVisible = false;
        this.view.lblLetsAuthenticateTransaction.isVisible = false;
    }
});
define("MFAModule/frmMFAOption2ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_cc092905161442ae93bb4fdad4571733: function AS_Form_cc092905161442ae93bb4fdad4571733(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_cadb552dea884c498d3093156a177e2e: function AS_Form_cadb552dea884c498d3093156a177e2e(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_ge9ee6c71dec43979fd89730e33ef3a9: function AS_BarButtonItem_ge9ee6c71dec43979fd89730e33ef3a9(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("MFAModule/frmMFAOption2Controller", ["MFAModule/userfrmMFAOption2Controller", "MFAModule/frmMFAOption2ControllerActions"], function() {
    var controller = require("MFAModule/userfrmMFAOption2Controller");
    var controllerActions = ["MFAModule/frmMFAOption2ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
