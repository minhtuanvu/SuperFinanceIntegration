define("MoneyMovementModule/userfrmMMNumberOfTransfersController", {
    keypadString: '',
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.commonFunctionForgoBack();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.keypadString = '';
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        var recur = moneyMovementModule.getTransObject();
        if (recur.numberOfRecurrences !== null && recur.numberOfRecurrences !== "" && recur.numberOfRecurrences !== undefined) {
            this.keypadString = recur.numberOfRecurrences;
        }
        this.updateInputBullets();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.btnContinue.onClick = this.clickOnContinue;
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = function() {
            scope.cancelOnClick();
        }
        this.view.flxClearAmount.onTouchEnd = this.clearKeypad;
    },
    updateInputBullets: function() {
        if (this.keypadString === "") {
            this.view.lblNumber.text = "0";
            this.view.lblNumber.skin = "skinlblDarkened";
            this.view.flxClearAmount.isVisible = false;
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.focusSkin = "sknBtnOnBoardingInactive";
        } else {
            this.view.lblNumber.text = this.keypadString;
            this.view.lblNumber.skin = "sknLbl4a4a4aSSP42px";
            if (parseInt(this.keypadString) !== 0) {
                this.view.btnContinue.setEnabled(true);
                this.view.flxClearAmount.isVisible = true;
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.focusSkin = "sknBtn0095e4RoundedffffffSSP26px";
            } else {
                this.view.btnContinue.setEnabled(false);
                this.view.flxClearAmount.isVisible = true;
                this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
                this.view.btnContinue.focusSkin = "sknBtnOnBoardingInactive";
            }
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length < 3) {
            this.keypadString = this.keypadString + char;
            this.updateInputBullets();
        }
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
    },
    clickOnContinue: function() {
        var rec = Number(this.keypadString);
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.setRecurrence(this.keypadString);
    },
    cancelOnClick: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.cancelCommon();
    },
    clearKeypad: function() {
        this.keypadString = '';
        this.updateInputBullets();
    },
});
define("MoneyMovementModule/frmMMNumberOfTransfersControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f1bd45b61fde4a02a0723776727b7c97: function AS_Form_f1bd45b61fde4a02a0723776727b7c97(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i750284c64d346f4a8acf92c04ab7950: function AS_Form_i750284c64d346f4a8acf92c04ab7950(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_g55b1b46d7e447a581533285bb2d9763: function AS_BarButtonItem_g55b1b46d7e447a581533285bb2d9763(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_cf34817086bc4dc39594d44117d27849: function AS_BarButtonItem_cf34817086bc4dc39594d44117d27849(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    AS_Button_gc752c937ed04c5d98edae6219bd7548: function AS_Button_gc752c937ed04c5d98edae6219bd7548(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_aab70d801cdf470db17d1d14ed1c1a72: function AS_Button_aab70d801cdf470db17d1d14ed1c1a72(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_c6b5ed3337074cd0996871e66184be70: function AS_Button_c6b5ed3337074cd0996871e66184be70(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_f395a79bb4074d50879c205b2a4837af: function AS_Button_f395a79bb4074d50879c205b2a4837af(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_j2066a7bffe545828aca5cb1629d3517: function AS_Button_j2066a7bffe545828aca5cb1629d3517(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_dfc3232031b744fbaa8a15e3bf7b7ce0: function AS_Button_dfc3232031b744fbaa8a15e3bf7b7ce0(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_deee8d02ce324e76b236cb1d0e2a7ee9: function AS_Button_deee8d02ce324e76b236cb1d0e2a7ee9(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_dca40ccc1a574504835faf8dab90cb02: function AS_Button_dca40ccc1a574504835faf8dab90cb02(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_a00291d362f441aab9d6f460a6809514: function AS_Button_a00291d362f441aab9d6f460a6809514(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_d05055cc355b42f58ee74be11b5c9ab4: function AS_Button_d05055cc355b42f58ee74be11b5c9ab4(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_ef0037fbbe084f2095afba09f3c9f575: function AS_Image_ef0037fbbe084f2095afba09f3c9f575(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("MoneyMovementModule/frmMMNumberOfTransfersController", ["MoneyMovementModule/userfrmMMNumberOfTransfersController", "MoneyMovementModule/frmMMNumberOfTransfersControllerActions"], function() {
    var controller = require("MoneyMovementModule/userfrmMMNumberOfTransfersController");
    var controllerActions = ["MoneyMovementModule/frmMMNumberOfTransfersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
