define("NewUserModule/userfrmOBMaritialStatusController", {
    selectedMaritalStatus: -1,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var scope = this;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeaderPersonalInfo.isVisible = true;
        } else {
            this.view.flxHeaderPersonalInfo.isVisible = false;
        }
        this.setMasterDataToSegment();
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        var NUOData = NUOMod.presentationController.getUserData();
        this.assignDataToForm(NUOData);
        this.view.customHeaderPersonalInfo.flxBack.onClick = this.onBack;
        this.view.customHeaderPersonalInfo.btnRight.onClick = this.onClose;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onClose: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.onClose();
    },
    setMasterDataToSegment: function() {
        var scope = this;
        //Setting the master data for marital status
        var confManager = applicationManager.getConfigurationManager();
        var maritalStatusData = confManager.getMaritalStatus();
        var segData = [];
        for (var i = 0; i < maritalStatusData.length; i++) {
            var temp = {
                "btnOption": {
                    "text": maritalStatusData[i][0]
                }
            };
            segData.push(temp);
        }
        for (var i = 0; i < segData.length; i++) {
            segData[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            segData[i].btnOption.onClick = function() {
                applicationManager.getPresentationUtility().showLoadingScreen();
                scope.selectedMaritalStatus = scope.view.segDependents.selectedIndex[1];
                scope.processAndNavigate();
            }
        }
        if (scope.selectedMaritalStatus !== -1) {
            segData[scope.selectedMaritalStatus].btnOption.skin = "sknBtnOBSegSelected";
        }
        scope.view.segDependents.data = segData;
        scope.view.forceLayout();
    },
    processAndNavigate: function() {
        var scope = this;
        var data = {
            "maritalStatus": scope.view.segDependents.selectedItems[0].btnOption["text"]
        };
        var segData = scope.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i]["btnOption"]["text"] === data.maritalStatus) {
                segData[i]["btnOption"].skin = "sknBtnOBSegSelected";
            } else {
                segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsInActive";
            }
        }
        scope.view.segDependents.setData(segData);
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
        NUOMod.presentationController.navigateBasedOnMaritalStatus(data);
    },
    assignDataToForm: function(newUserJSON) {
        var maritalStatus = (newUserJSON.maritalStatus && newUserJSON.maritalStatus !== "" && newUserJSON.maritalStatus !== null) ? newUserJSON.maritalStatus : "";
        var segData = this.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i]["btnOption"]["text"] === maritalStatus) {
                segData[i]["btnOption"].skin = "sknBtnOBSegSelected";
            } else {
                segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsInActive";
            }
        }
        this.view.segDependents.setData(segData);
    }
});
define("NewUserModule/frmOBMaritialStatusControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e6aff399ac9d494cbd4d3e85967c35cb: function AS_Form_e6aff399ac9d494cbd4d3e85967c35cb(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fc21bbf8d6d44c2b8dae6ec81831dbd8: function AS_Form_fc21bbf8d6d44c2b8dae6ec81831dbd8(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e4cf1442a92b45d6bd179c7b56b4613c: function AS_BarButtonItem_e4cf1442a92b45d6bd179c7b56b4613c(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBMaritialStatusController", ["NewUserModule/userfrmOBMaritialStatusController", "NewUserModule/frmOBMaritialStatusControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBMaritialStatusController");
    var controllerActions = ["NewUserModule/frmOBMaritialStatusControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
