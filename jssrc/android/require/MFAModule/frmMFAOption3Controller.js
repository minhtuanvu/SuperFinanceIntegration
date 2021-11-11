define("MFAModule/userfrmMFAOption3Controller", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "NO", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        //this.flexView(1);
        this.view.btnSend.onClick = this.onClickSend;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
    },
    onCancelClick: function() {
        applicationManager.getPresentationUtility().MFA.cancelMFAFlow();
    },
    setFormUI: function(mfaResponse, flowType) {
        var customerCommunicationInfo = mfaResponse.MFAAttributes.customerCommunication;
        if (flowType == "TRANSFERS" || flowType == "PAYAPERSON" || flowType == "BILLPAY") {
            this.setFormUIForTransfers();
        } else if (flowType == "UPDATE_USERNAME" || flowType == "UPDATE_PASSWORD") {
            this.setFormUIForProfile();
        } else if (flowType == "LoginMFA") {
            this.setFormUIForDeviceRegistration();
        }
        this.setCustomerCommunicationInfo(customerCommunicationInfo);
        this.view.forceLayout();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setFormUIForTransfers: function() {
        this.view.flxNewDevice.setVisibility(false);
        this.view.flxDeviceRegistration.setVisibility(false);
        this.view.lblLetsAuthenticateTransaction.setVisibility(true);
    },
    setFormUIForProfile: function() {
        this.view.flxNewDevice.setVisibility(false);
        this.view.flxDeviceRegistration.setVisibility(true);
        var userObj = applicationManager.getUserPreferencesManager();
        var uname = userObj.gettempUserName();
        this.view.lblName = "Hi!! " + uname + " Let's authenticate";
        this.view.lblLetsAuthenticateTransaction.setVisibility(false);
    },
    setFormUIForDeviceRegistration: function() {
        this.view.flxNewDevice.setVisibility(true);
        this.view.flxDeviceRegistration.setVisibility(false);
        var userObj = applicationManager.getUserPreferencesManager();
        var uname = userObj.gettempUserName();
        this.view.lblName = "Hi!! " + uname + " Let's authenticate";
        this.view.lblLetsAuthenticateTransaction.setVisibility(false);
    },
    setCustomerCommunicationInfo: function(customerCommunicationInfo) {
        if (customerCommunicationInfo.phone && customerCommunicationInfo.email) {
            this.view.lblSecurityCode.text = kony.i18n.getLocalizedString("kony.mb.MFA.SentCodeMultiple");
            this.view.flxModeOfContactPhone.setVisibility(true);
            this.view.flxModeOfContactEmail.setVisibility(true);
            this.view.lbxRegisteredModePhone.masterData = this.setDataForPhoneListBox(customerCommunicationInfo.phone);
            this.view.lbxRegisteredModeEmail.masterData = this.setDataForEmailListBox(customerCommunicationInfo.email);
            this.view.lbxRegisteredModePhone.selectedKey = this.view.lbxRegisteredModePhone.masterData[0][0];
            this.view.lbxRegisteredModeEmail.selectedKey = this.view.lbxRegisteredModeEmail.masterData[0][0];
        } else if (customerCommunicationInfo.phone) {
            this.view.lblSecurityCode.text = kony.i18n.getLocalizedString("kony.mb.MFA.SentCodetoPhone");
            this.view.flxModeOfContactPhone.setVisibility(true);
            this.view.flxModeOfContactEmail.setVisibility(false);
            this.view.lbxRegisteredModePhone.masterData = this.setDataForPhoneListBox(customerCommunicationInfo.phone);
            this.view.lbxRegisteredModePhone.selectedKey = this.view.lbxRegisteredModePhone.masterData[0][0];
        } else if (customerCommunicationInfo.email) {
            this.view.lblSecurityCode.text = kony.i18n.getLocalizedString("kony.mb.MFA.SentCodetoEmail");
            this.view.flxModeOfContactPhone.setVisibility(false);
            this.view.flxModeOfContactEmail.setVisibility(true);
            this.view.lbxRegisteredModeEmail.masterData = this.setDataForEmailListBox(customerCommunicationInfo.email);
            this.view.lbxRegisteredModeEmail.selectedKey = this.view.lbxRegisteredModeEmail.masterData[0][0];
        }
    },
    setDataForPhoneListBox: function(phoneObj) {
        var phoneNumbers = phoneObj.map(function(dataItem) {
            var phoneNumber = [];
            phoneNumber.push(dataItem.unmasked);
            phoneNumber.push(dataItem.masked);
            return phoneNumber;
        });
        return phoneNumbers;
    },
    setDataForEmailListBox: function(emailObj) {
        var emailsIds = emailObj.map(function(dataItem) {
            var email = [];
            email.push(dataItem.unmasked);
            email.push(dataItem.masked);
            return email;
        });
        return emailsIds;
    },
    onClickSend: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var selectedData = {
            "phone": this.view.lbxRegisteredModePhone.selectedKeyValue[0],
            "email": this.view.lbxRegisteredModeEmail.selectedKeyValue[0]
        };
        applicationManager.getPresentationUtility().MFA.setPhoneAndEmail(selectedData);
        applicationManager.getPresentationUtility().MFA.requestOTP(selectedData);
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
    },
    bindError: function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, err);
    }
});
define("MFAModule/frmMFAOption3ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e7cdd62136514535b28c879db18393f9: function AS_Form_e7cdd62136514535b28c879db18393f9(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f65b7d8fd19d465fb9cd83bf64ab2190: function AS_Form_f65b7d8fd19d465fb9cd83bf64ab2190(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_e25eb81a5521411bbf568dfa78533837: function AS_BarButtonItem_e25eb81a5521411bbf568dfa78533837(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("MFAModule/frmMFAOption3Controller", ["MFAModule/userfrmMFAOption3Controller", "MFAModule/frmMFAOption3ControllerActions"], function() {
    var controller = require("MFAModule/userfrmMFAOption3Controller");
    var controllerActions = ["MFAModule/frmMFAOption3ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
