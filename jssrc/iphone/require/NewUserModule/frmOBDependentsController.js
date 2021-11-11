define("NewUserModule/userfrmOBDependentsController", {
    selectedDependents: -1,
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
        var scope = this;
        this.setMasterDataToSegment();
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        var NUOData = NUOMod.presentationController.getUserData();
        this.assignDataToForm(NUOData);
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onClose;
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
        var noOfDependentsData = confManager.getNumberOfDependents();
        var segData = [];
        for (var i = 0; i < noOfDependentsData.length; i++) {
            var temp = {
                "btnOption": {
                    "text": noOfDependentsData[i][0]
                }
            };
            segData.push(temp);
        }
        for (var i = 0; i < segData.length; i++) {
            segData[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            segData[i].btnOption.onClick = function() {
                applicationManager.getPresentationUtility().showLoadingScreen();
                scope.selectedDependents = scope.view.segDependents.selectedIndex[1];
                scope.processAndNavigate();
            }
        }
        if (scope.selectedDependents !== -1) {
            segData[scope.selectedDependents].btnOption.skin = "sknBtnOBSegSelected";
        }
        scope.view.segDependents.data = segData;
    },
    processAndNavigate: function() {
        var scope = this;
        var data = {
            "noOfDependents": scope.view.segDependents.selectedItems[0].btnOption["text"]
        };
        var segData = scope.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i]["btnOption"]["text"] === data.noOfDependents) {
                segData[i]["btnOption"].skin = "sknBtnOBSegSelected";
            } else {
                segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsInActive";
            }
        }
        scope.view.segDependents.setData(segData);
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        NUOMod.presentationController.previousFormCheck = currentForm;
        NUOMod.presentationController.commonFunctionForNavigation("frmOBCreditCheck");
    },
    assignDataToForm: function(newUserJSON) {
        var noOfDependents = (newUserJSON.noOfDependents && newUserJSON.noOfDependents !== "" && newUserJSON.noOfDependents !== null) ? newUserJSON.noOfDependents : "";
        var segData = this.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i]["btnOption"]["text"] === noOfDependents) {
                segData[i]["btnOption"].skin = "sknBtnOBSegSelected";
            } else {
                segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsInActive";
            }
        }
        this.view.segDependents.setData(segData);
    }
});
define("NewUserModule/frmOBDependentsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c229c5966b544a62ab0d94e9de2ae6ff: function AS_Form_c229c5966b544a62ab0d94e9de2ae6ff(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c77cdeea3e994113bfc8f595e6127752: function AS_Form_c77cdeea3e994113bfc8f595e6127752(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_gdc6b080b0ea4dfaa255cda8e375ea61: function AS_BarButtonItem_gdc6b080b0ea4dfaa255cda8e375ea61(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBDependentsController", ["NewUserModule/userfrmOBDependentsController", "NewUserModule/frmOBDependentsControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBDependentsController");
    var controllerActions = ["NewUserModule/frmOBDependentsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
