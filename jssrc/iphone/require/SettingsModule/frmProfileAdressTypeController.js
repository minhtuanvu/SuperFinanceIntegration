define("SettingsModule/userfrmProfileAdressTypeController", {
    selectedprofileAddressType: -1,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.setPreshowData();
        this.initActions();
        this.setMasterDataToSegment();
        this.assignDataToForm();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setPreshowData: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxTransactionFrequency.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxTransactionFrequency.top = "0dp";
        }
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.btnRight.onClick = this.onCancel;
        this.view.customHeader.flxBack.onClick = this.onBack;
    },
    onCancel: function() {
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    setMasterDataToSegment: function() {
        var scope = this;
        var profileAddressType = ['Home', 'Work'];
        var profileAddressValue = ['ADR_TYPE_HOME', 'ADR_TYPE_WORK'];
        var segData = [];
        for (var i = 0; i < profileAddressType.length; i++) {
            var temp = {
                "btnOption": {
                    "text": profileAddressType[i],
                    "value": profileAddressValue[i]
                }
            };
            segData.push(temp);
        }
        for (var i = 0; i < segData.length; i++) {
            segData[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            segData[i].btnOption.onClick = function() {
                scope.selectedprofileAddressType = scope.view.segAddressType.selectedIndex[1];
                scope.processAndNavigate();
            }
        }
        if (scope.selectedprofileAddressType !== -1) {
            segData[scope.selectedprofileAddressType].btnOption.skin = "sknBtnOnBoardingOptionsActive";
        }
        scope.view.segAddressType.data = segData;
    },
    processAndNavigate: function() {
        var scope = this;
        var data = {
            "addressType": scope.view.segAddressType.selectedItems[0].btnOption["value"],
            "addressTypeForDisplay": scope.view.segAddressType.selectedItems[0].btnOption["text"]
        };
        var segData = scope.view.segAddressType.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i]["btnOption"]["text"] === data.addressTypeForDisplay) {
                segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsActive";
            } else {
                segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsInActive";
            }
        }
        scope.view.segAddressType.setData(segData);
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.updateUserAddressTypeData(data);
        settingsMod.presentationController.commonFunctionForNavigation("frmProfileConfirmAddressDetails");
    },
    assignDataToForm: function() {
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        var addressTypeData = settingsMode.presentationController.getUserAddressData();
        this.AddressTypes = {
            "ADR_TYPE_WORK": 'Work',
            "ADR_TYPE_HOME": 'Home'
        };
        if (addressTypeData) {
            var addressType = (addressTypeData.addressType && addressTypeData.addressType !== "" && addressTypeData.addressType !== null) ? addressTypeData.addressType : "";
            var segData = this.view.segAddressType.data;
            var addType = this.AddressTypes[addressType];
            if (addType) addType = addType.toLowerCase();
            for (var i = 0; i < segData.length; i++) {
                if (segData[i]["btnOption"]["text"].toLowerCase() === addType) {
                    segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsActive";
                } else {
                    segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsInActive";
                }
            }
            this.view.segAddressType.setData(segData);
        }
    }
});
define("SettingsModule/frmProfileAdressTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e6a90b5b4de24c5e9360ddfe7278544b: function AS_Form_e6a90b5b4de24c5e9360ddfe7278544b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_db871840c5564c55b918f4fdc8b685c1: function AS_Form_db871840c5564c55b918f4fdc8b685c1(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_cd13cd0c7b97486a906f184d8dc2b3c3: function AS_BarButtonItem_cd13cd0c7b97486a906f184d8dc2b3c3(eventobject) {
        var self = this;
        this.onCancel();
    }
});
define("SettingsModule/frmProfileAdressTypeController", ["SettingsModule/userfrmProfileAdressTypeController", "SettingsModule/frmProfileAdressTypeControllerActions"], function() {
    var controller = require("SettingsModule/userfrmProfileAdressTypeController");
    var controllerActions = ["SettingsModule/frmProfileAdressTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
