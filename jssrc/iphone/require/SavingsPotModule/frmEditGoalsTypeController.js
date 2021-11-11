define("SavingsPotModule/userfrmEditGoalsTypeController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        applicationManager.getPresentationUtility().showLoadingScreen();
        this.initActions();
    },
    initActions: function() {
        this.view.segGoalsType.onRowClick = this.segRowClick;
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
    },
    postShow: function() {
        var GoalsTypes = [];
        var navManager = applicationManager.getNavigationManager();
        var category = navManager.getCustomInfo('frmEditGoalsType');
        var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
        var selectedType = goalDetails.savingsType;
        var selImg;
        for (var TitleNo in category) {
            var data = category[TitleNo];
            var TitImge;
            switch (data.name) {
                case "EDUCATION":
                    TitImge = "educationgoal.png";
                    break;
                case "FAMILY_EXPENSES":
                    TitImge = "familyexpenses.png";
                    break;
                case "HOUSING":
                    TitImge = "house.png";
                    break;
                case "INVESTMENT":
                    TitImge = "retirement.png";
                    break;
                case "TRAVEL":
                    TitImge = "travelgoal.png";
                    break;
                case "VEHICLE":
                    TitImge = "vehicle.png";
                    break;
                default:
                    TitImge = "other.png";
            }
            if (data.description == selectedType) {
                selImg = "tickmark_green.png";
            } else {
                selImg = "";
            }
            var storeData = {
                Title: data.description,
                Name: data.name,
                img: selImg,
                TitImg: TitImge
            };
            GoalsTypes.push(storeData);
        }
        this.view.segGoalsType.widgetDataMap = {
            lblTitle: "Title",
            lblName: "Name",
            imgArrow: "img",
            imgTitle: "TitImg"
        };
        this.view.segGoalsType.setData(GoalsTypes);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    onCancelClick: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.setSavingsFlow("");
        SavingsPotMod.clearCreateData();
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmSavingsGoalViewDetails");
    },
    segRowClick: function() {
        var datum = this.view.segGoalsType.selectedRowItems[0];
        var navManager = applicationManager.getNavigationManager();
        var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
        goalDetails.savingsType = datum.Title;
        goalDetails.savingsName = datum.Name;
        navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        SavingsPotMod.presentationController.navToGoalName(datum.Title, datum.Name, "frmEditSavingsGoal");
    }
});
define("SavingsPotModule/frmEditGoalsTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g74a679086f547acada0484ad3db3d75: function AS_Form_g74a679086f547acada0484ad3db3d75(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a719b2f124b94df7a9f698d2b972b78c: function AS_Form_a719b2f124b94df7a9f698d2b972b78c(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_f67d47aa966b4121995b5ba2770fcf2c: function AS_Form_f67d47aa966b4121995b5ba2770fcf2c(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_jbfbcdcb92a74d3fae86c740e4b9f28a: function AS_BarButtonItem_jbfbcdcb92a74d3fae86c740e4b9f28a(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("SavingsPotModule/frmEditGoalsTypeController", ["SavingsPotModule/userfrmEditGoalsTypeController", "SavingsPotModule/frmEditGoalsTypeControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmEditGoalsTypeController");
    var controllerActions = ["SavingsPotModule/frmEditGoalsTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
