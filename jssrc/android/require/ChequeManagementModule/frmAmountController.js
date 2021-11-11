define("ChequeManagementModule/userfrmAmountController", {
    keypadString: '0.00',
    isPeriodUsed: false,
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            // this.view.flxHeader.isVisible = false;
            this.view.flxHeader.setVisibility(false);
        }
        var forUtility = applicationManager.getFormatUtilManager();
        this.view.lblDollar.text = forUtility.getCurrencySymbol(scope_ChequePresentationController.currencyCode);
    },
    postShow: function() {
        this.updateAmountValue();
        this.initActions();
        this.updateUI();
    },
    updateUI: function() {
        var transObj = applicationManager.getModulesPresentationController("ChequeManagementModule");
        var objData = transObj.getTransObject();
        if (objData.amount === null) {
            this.view.lblAmount.text = "0.00";
            this.keypadString = "0.00";
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
        }
    },
    initActions: function() {
        this.view.btnSkip.onClick = this.skipOnClick;
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.customHeader.flxBack.onClick = this.backOnClick;
    },
    backOnClick: function() {
        this.view.lblAmount.text = "0.00";
        this.keypadString = "0.00";
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  backOnClick  ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmIssueDate");
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    skipOnClick: function() {
        this.view.lblAmount.text = "0.00";
        this.keypadString = "0.00";
        var selectedAmount = "";
        var amount = applicationManager.getModulesPresentationController("ChequeManagementModule");
        amount.setAmount(selectedAmount);
        var navMan = applicationManager.getModulesPresentationController("ChequeManagementModule");
        navMan.commonFunctionForNavigation("frmSCReason");
    },
    cancelOnClick: function() {
        this.view.lblAmount.text = "0.00";
        this.keypadString = "0.00";
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.commonCancel();
    },
    backOnClickOld: function() {
        this.view.lblAmount.text = "0.00";
        this.keypadString = "0.00";
        var commonBack = applicationManager.getModulesPresentationController("ChequeManagementModule");
        commonBack.commonFunctionForgoBack();
    },
    setKeypadChar: function(char) {
        if (char === '.') {
            if (this.isPeriodUsed === false) {
                this.isPeriodUsed = true;
            } else {
                return;
            }
        }
        this.keypadString = this.keypadString + char;
        var firstChar = this.keypadString[0];
        this.keypadString = this.keypadString.split("");
        for (var i = 1; i < this.keypadString.length; i++) {
            if (this.keypadString[i] === '.') {
                this.keypadString[i - 1] = this.keypadString[i + 1];
                i++;
            } else {
                this.keypadString[i - 1] = this.keypadString[i];
            }
        }
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        if (firstChar !== '0') {
            this.keypadString = firstChar + this.keypadString;
        }
        this.updateAmountValue();
    },
    clearKeypadChar: function() {
        if (this.keypadString === '0.00') return;
        this.keypadString = this.keypadString.split("");
        for (var i = this.keypadString.length - 2; i >= 0; i--) {
            if (this.keypadString[i] === '.') {
                this.keypadString[i + 1] = this.keypadString[i - 1];
                i--;
            } else {
                this.keypadString[i + 1] = this.keypadString[i];
            }
        }
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(1);
        if (this.keypadString[0] === '.') {
            this.keypadString = '0' + this.keypadString;
        }
        this.updateAmountValue();
    },
    updateAmountValue: function() {
        if (this.keypadString === '0.00') {
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
            this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
        } else {
            var keypadStringCommas = '';
            var beforeDecimal = this.keypadString.split('.')[0];
            var afterDecimal = this.keypadString.split('.')[1];
            if (beforeDecimal.length > 3) {
                var withCommas = (beforeDecimal.length) / 3;
                var withoutCommas = (beforeDecimal.length) % 3;
                var temp = '';
                if (withoutCommas != 0) {
                    temp = beforeDecimal.substr(0, withoutCommas) + ',';
                }
                for (var i = withoutCommas; i < beforeDecimal.length; i += 3) {
                    temp += beforeDecimal.substr(i, 3) + ',';
                }
                beforeDecimal = temp.substr(0, temp.length - 1);
            }
            keypadStringCommas = beforeDecimal + '.' + afterDecimal;
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
            this.view.lblAmount.text = this.view.keypad.formatAmount(keypadStringCommas);
        }
    },
    continueOnClick: function() {
        var selectedAmount = this.view.lblAmount.text;
        var amount = applicationManager.getModulesPresentationController("ChequeManagementModule");
        amount.setAmount(selectedAmount);
        var navMan = applicationManager.getModulesPresentationController("ChequeManagementModule");
        if (scope_ChequePresentationController.isReview == true) {
            navMan.commonFunctionForNavigation("frmSCReview");
        } else {
            navMan.commonFunctionForNavigation("frmSCReason");
        }
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("ChequeManagementModule/frmAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e972249db64e410eb9481728281e8188: function AS_Form_e972249db64e410eb9481728281e8188(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_c6019b4365e9488ba097dc5b2d5d8ff0: function AS_Form_c6019b4365e9488ba097dc5b2d5d8ff0(eventobject) {
        var self = this;
        return self.postShow.call(this);
    },
    AS_Form_aa616f109243431e897eb0772263bd2b: function AS_Form_aa616f109243431e897eb0772263bd2b(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_j5e1c265ad8b439da2a635d0f550df43: function AS_BarButtonItem_j5e1c265ad8b439da2a635d0f550df43(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    AS_Button_acd96a9b4ecf4625917265535a7c9cba: function AS_Button_acd96a9b4ecf4625917265535a7c9cba(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_a55f4d4aa56f4c6ab77b175a28efe6f0: function AS_Button_a55f4d4aa56f4c6ab77b175a28efe6f0(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_j7fa87098812459c9f40d059139ee290: function AS_Button_j7fa87098812459c9f40d059139ee290(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_d228f7f2fe93431e9d07c85a12d31a6b: function AS_Button_d228f7f2fe93431e9d07c85a12d31a6b(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_dbe7f97f137941869f4c0aa9e502d55c: function AS_Button_dbe7f97f137941869f4c0aa9e502d55c(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_g9696b9edd1a46ef81c95fb15ccc2220: function AS_Button_g9696b9edd1a46ef81c95fb15ccc2220(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_geda9826d06e4251b1b94c32c9dff8a4: function AS_Button_geda9826d06e4251b1b94c32c9dff8a4(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_fc89a8f8d72b4e2cbe562ee405e0aff9: function AS_Button_fc89a8f8d72b4e2cbe562ee405e0aff9(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_bbb167dc5b164f89802add8d890627a6: function AS_Button_bbb167dc5b164f89802add8d890627a6(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_e5f74ceca96a493ba25239a6fe4a3373: function AS_Button_e5f74ceca96a493ba25239a6fe4a3373(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_f2a469ca54f24796b8d9d4f65678d357: function AS_Image_f2a469ca54f24796b8d9d4f65678d357(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("ChequeManagementModule/frmAmountController", ["ChequeManagementModule/userfrmAmountController", "ChequeManagementModule/frmAmountControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmAmountController");
    var controllerActions = ["ChequeManagementModule/frmAmountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
