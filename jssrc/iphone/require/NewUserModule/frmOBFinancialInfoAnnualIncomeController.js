define("NewUserModule/userfrmOBFinancialInfoAnnualIncomeController", {
    selectedAnnualIncome: -1,
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
        var annualIncome = confManager.getAnnualIncome();
        var segData = [];
        for (var i = 0; i < annualIncome.length; i++) {
            var temp = {
                "flxMain": {
                    "skin": "slFbox"
                },
                "lblHyphen": {
                    "text": "-"
                },
                "lblOption1": {
                    "text": confManager.getCurrencyCode() + "" + annualIncome[i][0]
                },
                "lblOption2": {
                    "text": confManager.getCurrencyCode() + "" + annualIncome[i][1]
                },
                "selectedValue": annualIncome[i][2]
            };
            segData.push(temp);
        }
        for (var i = 0; i < segData.length; i++) {
            segData[i].flxMain.skin = "slFbox";
        }
        if (scope.selectedAnnualIncome !== -1) {
            segData[scope.selectedAnnualIncome].flxMain.skin = "sknFlxF4F4F4Radius100";
        }
        scope.view.segDependents.data = segData;
        scope.view.forceLayout();
    },
    segOnRowClick: function() {
        var scope = this
        applicationManager.getPresentationUtility().showLoadingScreen();
        var rowid = scope.view.segDependents.selectedRowIndex[1];
        scope.selectedAnnualIncome = scope.view.segDependents.data[rowid];
        scope.processAndNavigate();
    },
    processAndNavigate: function() {
        var scope = this;
        var data = {
            "annualIncome": scope.view.segDependents.selectedItems[0].selectedValue
        };
        var segData = scope.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].selectedValue === data.annualIncome) {
                segData[i]["flxMain"].skin = "sknFlxF4F4F4Radius100";
            } else {
                segData[i]["flxMain"].skin = "slFbox";
            }
        }
        scope.view.segDependents.setData(segData);
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
        NUOMod.presentationController.commonFunctionForNavigation("frmOBFinancialInfoAssets");
    },
    assignDataToForm: function(newUserJSON) {
        var annualIncome = (newUserJSON.annualIncome && newUserJSON.annualIncome !== "" && newUserJSON.annualIncome !== null) ? newUserJSON.annualIncome : "";
        var segData = this.view.segDependents.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].selectedValue.toString() === annualIncome.toString()) {
                segData[i]["flxMain"].skin = "sknFlxF4F4F4Radius100";
            } else {
                segData[i]["flxMain"].skin = "slFbox";
            }
        }
        this.view.segDependents.setData(segData);
    }
});
define("NewUserModule/frmOBFinancialInfoAnnualIncomeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g7010bfac910444981a67cc47eeabc38: function AS_Form_g7010bfac910444981a67cc47eeabc38(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_eee73f61f1d246baa627a49fec1b76de: function AS_Form_eee73f61f1d246baa627a49fec1b76de(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_cb9ec95260e0439dac02d90910317289: function AS_BarButtonItem_cb9ec95260e0439dac02d90910317289(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBFinancialInfoAnnualIncomeController", ["NewUserModule/userfrmOBFinancialInfoAnnualIncomeController", "NewUserModule/frmOBFinancialInfoAnnualIncomeControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBFinancialInfoAnnualIncomeController");
    var controllerActions = ["NewUserModule/frmOBFinancialInfoAnnualIncomeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
