define("NewUserModule/userfrmOBFinancialInfoExpenditureController", {
    selectedExpenditure: -1,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var self = this;
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
        var montlyExpenditure = confManager.getMonthlyIncome();
        var segData = [];
        for (var i = 0; i < montlyExpenditure.length; i++) {
            var temp = {
                "flxMain": {
                    "skin": "slFbox"
                },
                "lblHyphen": {
                    "text": "-"
                },
                "lblOption1": {
                    "text": confManager.getCurrencyCode() + "" + montlyExpenditure[i][0]
                },
                "lblOption2": {
                    "text": confManager.getCurrencyCode() + "" + montlyExpenditure[i][1]
                },
                "selectedValue": montlyExpenditure[i][2]
            };
            segData.push(temp);
        }
        for (var i = 0; i < segData.length; i++) {
            segData[i].flxMain.skin = "slFbox";
        }
        if (scope.selectedExpenditure !== -1) {
            segData[scope.selectedExpenditure].flxMain.skin = "sknFlxF4F4F4Radius100";
        }
        scope.view.segDependents.data = segData;
        scope.view.forceLayout();
    },
    segOnRowClick: function() {
        var scope = this
        applicationManager.getPresentationUtility().showLoadingScreen();
        var rowid = scope.view.segDependents.selectedRowIndex[1];
        scope.selectedExpenditure = scope.view.segDependents.data[rowid];
        scope.processAndNavigate();
    },
    processAndNavigate: function() {
        var scope = this;
        var data = {
            "montlyExpenditure": scope.view.segDependents.selectedItems[0].selectedValue,
            "informationType": "FinancialInfo"
        };
        var segData = scope.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].selectedValue === data.montlyExpenditure) {
                segData[i]["flxMain"].skin = "sknFlxF4F4F4Radius100";
            } else {
                segData[i]["flxMain"].skin = "slFbox";
            }
        }
        scope.view.segDependents.setData(segData);
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
        NUOMod.presentationController.userNavigation = data.informationType;
        NUOMod.presentationController.commonFunctionForNavigation("frmOBDocumentsNew");
    },
    assignDataToForm: function(newUserJSON) {
        var montlyExpenditure = (newUserJSON.montlyExpenditure && newUserJSON.montlyExpenditure !== "" && newUserJSON.montlyExpenditure !== null) ? newUserJSON.montlyExpenditure : "";
        var segData = this.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].selectedValue.toString() === montlyExpenditure.toString()) {
                segData[i]["flxMain"].skin = "sknFlxF4F4F4Radius100";
            } else {
                segData[i]["flxMain"].skin = "slFbox";
            }
        }
        this.view.segDependents.setData(segData);
    }
});
define("NewUserModule/frmOBFinancialInfoExpenditureControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_beb1e1e3d6d344718919b09d2b352508: function AS_Form_beb1e1e3d6d344718919b09d2b352508(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f1fcbcfe50eb4d42986fd2c519f6e619: function AS_Form_f1fcbcfe50eb4d42986fd2c519f6e619(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f4078542a62c455e87250d45e9ea4738: function AS_BarButtonItem_f4078542a62c455e87250d45e9ea4738(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBFinancialInfoExpenditureController", ["NewUserModule/userfrmOBFinancialInfoExpenditureController", "NewUserModule/frmOBFinancialInfoExpenditureControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBFinancialInfoExpenditureController");
    var controllerActions = ["NewUserModule/frmOBFinancialInfoExpenditureControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
