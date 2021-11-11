define("NewUserModule/userfrmOBFinancialInfoAssetsController", {
    selectedAssets: -1,
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
        var assets = confManager.getFinancialAssets();
        var segData = [];
        for (var i = 0; i < assets.length; i++) {
            var temp = {
                "flxMain": {
                    "skin": "slFbox"
                },
                "lblHyphen": {
                    "text": "-"
                },
                "lblOption1": {
                    "text": confManager.getCurrencyCode() + "" + assets[i][0]
                },
                "lblOption2": {
                    "text": confManager.getCurrencyCode() + "" + assets[i][1]
                },
                "selectedValue": assets[i][2]
            };
            segData.push(temp);
        }
        for (var i = 0; i < segData.length; i++) {
            segData[i].flxMain.skin = "slFbox";
        }
        if (scope.selectedAssets !== -1) {
            segData[scope.selectedAssets].flxMain.skin = "sknFlxF4F4F4Radius100";
        }
        scope.view.segDependents.data = segData;
        scope.view.forceLayout();
    },
    segOnRowClick: function() {
        var scope = this
        applicationManager.getPresentationUtility().showLoadingScreen();
        var rowid = scope.view.segDependents.selectedRowIndex[1];
        scope.selectedAssets = scope.view.segDependents.data[rowid];
        scope.processAndNavigate();
    },
    processAndNavigate: function() {
        var scope = this;
        var data = {
            "assets": scope.view.segDependents.selectedItems[0].selectedValue
        };
        var segData = scope.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].selectedValue === data.assets) {
                segData[i]["flxMain"].skin = "sknFlxF4F4F4Radius100";
            } else {
                segData[i]["flxMain"].skin = "slFbox";
            }
        }
        scope.view.segDependents.setData(segData);
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
        NUOMod.presentationController.commonFunctionForNavigation("frmOBFinancialInfoExpenditure");
    },
    assignDataToForm: function(newUserJSON) {
        var assets = (newUserJSON.assets && newUserJSON.assets !== "" && newUserJSON.assets !== null) ? newUserJSON.assets : "";
        var segData = this.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].selectedValue.toString() === assets.toString()) {
                segData[i]["flxMain"].skin = "sknFlxF4F4F4Radius100";
            } else {
                segData[i]["flxMain"].skin = "slFbox";
            }
        }
        this.view.segDependents.setData(segData);
    }
});
define("NewUserModule/frmOBFinancialInfoAssetsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c51f5c67a9c7402288c4d1a332ab3df5: function AS_Form_c51f5c67a9c7402288c4d1a332ab3df5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e3916ef3b5d44389a98ea25163de5511: function AS_Form_e3916ef3b5d44389a98ea25163de5511(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_bf0fee9cda1344f7ba01d53233a662fa: function AS_BarButtonItem_bf0fee9cda1344f7ba01d53233a662fa(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBFinancialInfoAssetsController", ["NewUserModule/userfrmOBFinancialInfoAssetsController", "NewUserModule/frmOBFinancialInfoAssetsControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBFinancialInfoAssetsController");
    var controllerActions = ["NewUserModule/frmOBFinancialInfoAssetsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
