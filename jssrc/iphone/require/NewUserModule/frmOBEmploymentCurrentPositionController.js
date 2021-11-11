define("NewUserModule/userfrmOBEmploymentCurrentPositionController", {
    selectedYearsCurrentPosition: -1,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var self = this;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setMasterDataToSegment();
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        var NUOData = NUOMod.presentationController.getUserData();
        this.assignDataToForm(NUOData);
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onClose;
        this.view.segDependents.onRowClick = this.segOnRowClick;
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
        var experience = confManager.getEmploymentExperience();
        var segData = [];
        for (var i = 0; i < experience.length; i++) {
            var temp = {
                "flxMain": {
                    "skin": "slFbox"
                },
                "lblHyphen": {
                    "text": "-"
                },
                "lblOption1": {
                    "text": experience[i][0]
                },
                "lblOption2": {
                    "text": experience[i][1]
                },
                "selectedValue": experience[i][2]
            };
            segData.push(temp);
        }
        for (var i = 0; i < segData.length; i++) {
            segData[i].flxMain.skin = "slFbox";
        }
        if (scope.selectedYearsCurrentPosition !== -1) {
            segData[scope.selectedYearsCurrentPosition].flxMain.skin = "sknFlxF4F4F4Radius100";
        }
        scope.view.segDependents.data = segData;
    },
    segOnRowClick: function() {
        var scope = this
        applicationManager.getPresentationUtility().showLoadingScreen();
        var rowid = scope.view.segDependents.selectedRowIndex[1];
        scope.selectedYearsCurrentPosition = scope.view.segDependents.data[rowid];
        scope.processAndNavigate();
    },
    processAndNavigate: function() {
        var scope = this;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var data = {
            "experience": scope.view.segDependents.selectedItems[0].selectedValue,
            "informationType": "EmploymentInfo"
        };
        var segData = scope.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].selectedValue === data.experience) {
                segData[i]["flxMain"].skin = "sknFlxF4F4F4Radius100";
            } else {
                segData[i]["flxMain"].skin = "slFbox";
            }
        }
        scope.view.segDependents.setData(segData);
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
        NUOMod.presentationController.userNavigation = data.informationType;
        NUOMod.presentationController.createPersonalInfo();
    },
    assignDataToForm: function(newUserJSON) {
        var experience = (newUserJSON.experience && newUserJSON.experience !== "" && newUserJSON.experience !== null) ? newUserJSON.experience : "";
        var segData = this.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].selectedValue.toString() === experience.toString()) {
                segData[i]["flxMain"].skin = "sknFlxF4F4F4Radius100";
            } else {
                segData[i]["flxMain"].skin = "slFbox";
            }
        }
        this.view.segDependents.setData(segData);
    }
});
define("NewUserModule/frmOBEmploymentCurrentPositionControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g61516dfbfeb4ca896dcb942adb51fd8: function AS_Form_g61516dfbfeb4ca896dcb942adb51fd8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_j7d94106f7824f13814228d4e8a7229c: function AS_Form_j7d94106f7824f13814228d4e8a7229c(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_efbad44e1bf54cd9be00369e19e5b831: function AS_BarButtonItem_efbad44e1bf54cd9be00369e19e5b831(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBEmploymentCurrentPositionController", ["NewUserModule/userfrmOBEmploymentCurrentPositionController", "NewUserModule/frmOBEmploymentCurrentPositionControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBEmploymentCurrentPositionController");
    var controllerActions = ["NewUserModule/frmOBEmploymentCurrentPositionControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
