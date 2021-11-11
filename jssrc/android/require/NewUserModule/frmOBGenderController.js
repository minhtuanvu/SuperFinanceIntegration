define("NewUserModule/userfrmOBGenderController", {
    selectedGender: -1,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.setMasterDataToSegment();
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeaderPersonalInfo.isVisible = true;
        } else {
            this.view.flxHeaderPersonalInfo.isVisible = false;
        }
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
        var confManager = applicationManager.getConfigurationManager();
        var genderData = confManager.getGender();
        var segData = [];
        for (var i = 0; i < genderData.length; i++) {
            var temp = {
                "btnOption": {
                    "text": genderData[i][0]
                }
            };
            segData.push(temp);
        }
        for (var i = 0; i < segData.length; i++) {
            segData[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            segData[i].btnOption.onClick = function() {
                applicationManager.getPresentationUtility().showLoadingScreen();
                scope.selectedGender = scope.view.segDependents.selectedIndex[1];
                scope.processAndNavigate();
            }
        }
        if (scope.selectedGender !== -1) {
            segData[scope.selectedGender].btnOption.skin = "sknBtnOBSegSelected";
        }
        scope.view.segDependents.data = segData;
    },
    processAndNavigate: function() {
        var scope = this;
        var data = {
            "gender": scope.view.segDependents.selectedItems[0].btnOption["text"]
        };
        var segData = scope.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i]["btnOption"]["text"] === data.gender) {
                segData[i]["btnOption"].skin = "sknBtnOBSegSelected";
            } else {
                segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsInActive";
            }
        }
        scope.view.segDependents.setData(segData);
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
        NUOMod.presentationController.commonFunctionForNavigation("frmOBResidentialAddress");
    },
    assignDataToForm: function(newUserJSON) {
        var gender = (newUserJSON.gender && newUserJSON.gender !== "" && newUserJSON.gender !== null) ? newUserJSON.gender : "";
        var segData = this.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i]["btnOption"]["text"] === gender) {
                segData[i]["btnOption"].skin = "sknBtnOBSegSelected";
            } else {
                segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsInActive";
            }
        }
        this.view.segDependents.setData(segData);
    }
});
define("NewUserModule/frmOBGenderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bf10bc2e742b439cabdfa33951921d92: function AS_Form_bf10bc2e742b439cabdfa33951921d92(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_aa7163c79a5a46a6a7664f2a5fdfc1dc: function AS_Form_aa7163c79a5a46a6a7664f2a5fdfc1dc(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a3430fbed909472b9a3738cb3dd2b84a: function AS_BarButtonItem_a3430fbed909472b9a3738cb3dd2b84a(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBGenderController", ["NewUserModule/userfrmOBGenderController", "NewUserModule/frmOBGenderControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBGenderController");
    var controllerActions = ["NewUserModule/frmOBGenderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
