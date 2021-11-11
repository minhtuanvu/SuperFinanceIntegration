define("SettingsModule/userfrmProfileEditAddressListController", {
    popmsg: null,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    onNavigate: function(param) {
        var scope = this;
        if (param === "AdressAdded") {
            this.popmsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.pm.successfullyaddedaddress");
            scope.showSuccessPopUp();
        } else if (param === "AddressUpdated") {
            this.popmsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.pm.successfullyupdatedaddress");
            scope.showSuccessPopUp();
        } else if (param === "AddressDeleted") {
            this.popmsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.pm.successfullydeletedaddress");
            scope.showSuccessPopUp();
        }
        this.view.forceLayout();
    },
    frmPreShow: function() {
        this.view.segAddress.rowSkin = "seg2Normal";
        this.view.segAddress.rowFocusSkin = "sknFlxf9f9f9";
        this.setPreshowData();
        this.setFlowActions();
        this.showPopup();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setPreshowData: function() {
        this.setDetailsData();
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
    },
    setFlowActions: function() {
        this.view.btnContinue.onClick = this.onAddAddress;
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
    },
    showPopup: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmProfileEditAddressList1");
        if (data && data.message && data.message !== "") {
            this.onNavigate(data.message);
            data.message = "";
            navManager.setCustomInfo("frmProfileEditAddressList1", data);
        }
    },
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onCancel: function() {
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    onAddAddress: function() {
        var data = {};
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmProfileAddAddress", data);
        var flowType = "add";
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMode.presentationController.updateUserAddressFlowType(flowType);
        settingsMode.presentationController.clearUserAddressData();
        settingsMode.presentationController.initiateAsyncCallsForLocation();
        //settingsMode.presentationController.commonFunctionForNavigation("frmProfileAddAddress");
    },
    setSegmentOnRowClick: function(index) {
        var userObj = applicationManager.getUserPreferencesManager();
        //var addressObj = userObj.getUserAllAddresses();
        var addressObj = userObj.getEntitlementAddresses();
        var addressData = addressObj[index];
        var addressIndex = index;
        var navManager = applicationManager.getNavigationManager();
        var flowType = "edit";
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        addressData.isPreferredAddress = this.getPreferredAddByIndex(addressIndex);
        settingsMode.presentationController.updateUserAddressDataOnEdit(addressObj[addressIndex]);
        settingsMode.presentationController.updateUserAddressFlowType(flowType);
        //settingsMode.presentationController.commonFunctionForNavigation("frmProfileEditAddress");
        settingsMode.presentationController.initiateAsyncCallsForLocation();
    },
    getPreferredAddByIndex: function(addressIndex) {
        if (addressIndex === 0) return "1";
        else return "0";
    },
    setDetailsData: function() {
        var dataMap = {
            "flxAddress": "flxAddress",
            "flxDelete": "flxDelete",
            "flxDetails": "flxDetails",
            "flxSeparator": "flxSeparator",
            "imgDelete": "imgDelete",
            "lblDelete": "lblDelete",
            "lblDetail": "lblDetail",
            "lblDetailValue": "lblDetailValue"
        };
        var nav = applicationManager.getNavigationManager();
        var data = nav.getCustomInfo('frmProfileEditAddressList');
        this.view.segAddress.widgetDataMap = dataMap;
        for (var i = 0; i < data.length; i++) {
            data[i].flxDelete = {};
            //       data[i].flxReply={};
            //       data[i].lblDelete={"text": "Delete"};
            //       data[i].lblReply={"text": "Reply"};
            //       data[i].imgDelete={"scr": "deleteicon.png"};
            //       data[i].imgReply={"scr": "replyicon.png"};
        }
        for (var i = 0; i < data.length; i++) {
            data[i].flxDelete.onClick = this.deletedAddress;
            //data[i].flxReply.onClick = this.navToMessageDetails;
        }
        if (data.length > 0) {
            this.view.lblUSer.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ProfileEditAddressList.USer");
            this.view.segAddress.isVisible = true;
            this.view.segAddress.setData(data);
        } else {
            this.view.segAddress.isVisible = false;
            this.view.lblUSer.text = applicationManager.getPresentationUtility().getStringFromi18n('i18n.maps.NoResultsFound');
        }
        if (data.length >= 3) this.view.btnContinue.setVisibility(false);
        else this.view.btnContinue.setVisibility(true);
    },
    deletedAddress: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var addData = this.view.segAddress.data[this.view.segAddress.selectedIndex[1]];
        var data = {
            "addressId": addData.addressId
        };
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMode.presentationController.deleteProfileAddress(data);
    },
    showSuccessPopUp: function() {
        var msg = this.popmsg;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    }
});
define("SettingsModule/frmProfileEditAddressListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h79f42bf203f4d4fb6dfc739f0c9b90b: function AS_Form_h79f42bf203f4d4fb6dfc739f0c9b90b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_de197b9f004548409b388df4b0a247f4: function AS_Form_de197b9f004548409b388df4b0a247f4(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_bb6cb962bea24f219ad38e131c1de61a: function AS_BarButtonItem_bb6cb962bea24f219ad38e131c1de61a(eventobject) {
        var self = this;
        this.onCancel();
    }
});
define("SettingsModule/frmProfileEditAddressListController", ["SettingsModule/userfrmProfileEditAddressListController", "SettingsModule/frmProfileEditAddressListControllerActions"], function() {
    var controller = require("SettingsModule/userfrmProfileEditAddressListController");
    var controllerActions = ["SettingsModule/frmProfileEditAddressListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
