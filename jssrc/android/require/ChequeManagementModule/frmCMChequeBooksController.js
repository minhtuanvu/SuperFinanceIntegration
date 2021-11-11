define("ChequeManagementModule/userfrmCMChequeBooksController", {
    initActions: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.customHeader.btnRight.onClick = scope.cancelOnClick;
        this.view.customHeader.flxBack.onTouchEnd = scope.navigateBack;
        this.view.segOptions.onRowClick = scope.navigateToReviewScreen;
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.updateUI();
    },
    updateUI: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        this.view.lblChequeLeaves.text = "Select chequebook(s) - Each chequebook has" + presentation.leavesCount + "leaves";
        var index = parseInt(presentation.chequeBooksCount) - 1;
        this.view.segOptions.rowFocusSkin = "";
        this.view.segOptions.retainSelection = false;
        if (index != null && index != undefined && index != "") {
            this.view.segOptions.rowFocusSkin = "sknFlxF9F9F9RoundedRadius35Px";
            this.view.segOptions.retainSelection = true;
            this.view.segOptions.selectedRowIndex = [0, index];
        }
    },
    postShow: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    navigateToReviewScreen: function() {
        var index = this.view.segOptions.data[this.view.segOptions.selectedIndex[1]].lblFrequency;
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.chequeBooksCount = index;
        presentation.commonFunctionForNavigation("frmCMReview");
    },
    cancelOnClick: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.commonCancel();
    },
    navigateBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});
define("ChequeManagementModule/frmCMChequeBooksControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_hbe6c63001b443f3b07fa13686cd34b0: function AS_Form_hbe6c63001b443f3b07fa13686cd34b0(eventobject) {
        var self = this;
        this.initActions();
    },
    AS_Form_a211998b0a294ddfa0a69b293cc3a8e9: function AS_Form_a211998b0a294ddfa0a69b293cc3a8e9(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_b0bcebbeabc6424f9ea91e2d8bb7a34d: function AS_Form_b0bcebbeabc6424f9ea91e2d8bb7a34d(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ac2683bacc704dceb3ed5bfedfd86c17: function AS_BarButtonItem_ac2683bacc704dceb3ed5bfedfd86c17(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_b905682971124db0b11f836aaebe6ece: function AS_BarButtonItem_b905682971124db0b11f836aaebe6ece(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("ChequeManagementModule/frmCMChequeBooksController", ["ChequeManagementModule/userfrmCMChequeBooksController", "ChequeManagementModule/frmCMChequeBooksControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmCMChequeBooksController");
    var controllerActions = ["ChequeManagementModule/frmCMChequeBooksControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
