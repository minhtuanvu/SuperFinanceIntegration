define("TransferModule/userfrmReEnterBenAccNoController", {
    timerCounter: 0,
    keypadString: '',
    init: function() {
        this.initActions();
    },
    frmPreshow: function() {
        this.keypadString = '';
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var accountNumber = transferModulePresentationController.getReEnteredAccountNumber();
        if (accountNumber) {
            this.keypadString = accountNumber;
            this.enterCodePostAction();
        } else {
            this.incompleteCodeView();
        }
        this.updateInputBullets("flxReInputAccNo");
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        this.renderTitleBar();
        //this.view.customHeader.btnRight.onClick=this.flxBackOnClick;
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    btnRightOnClick: function() {},
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnContinueOnClick: function() {
        var match = false;
        var reEneterdAccountNumber = this.keypadString;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var initialAccountNumber = benificiaryData.accountNumber;
        if (initialAccountNumber === reEneterdAccountNumber) {
            match = true;
        } else {
            match = false;
        }
        if (match) {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var isValidAccNo = transferModulePresentationController.isValidAccNum(reEneterdAccountNumber, "frmReEnterBenAccNo");
            if (isValidAccNo) {
                transferModulePresentationController.navigateToBenName(reEneterdAccountNumber);
            }
        } else {
            this.showErrorPopup(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.wrongAccountNumberMessage"));
            this.keypadString = '';
            this.updateInputBullets("flxReInputAccNo");
            this.incompleteCodeView();
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length > 0 && this.keypadString.length < 17) {
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else if (this.keypadString.length > 16) {
            this.keypadString = this.keypadString.slice(0, 16);
            return;
        }
        this.updateInputBullets("flxReInputAccNo");
    },
    showErrorPopup: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxReInputAccNo");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxReInputAccNo");
        }
        if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        }
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl484848sspReg50px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
    enterCodePostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createInternalBankBenificiary");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("TransferModule/frmReEnterBenAccNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ddcc55509d334af9a75e84f7d2550a90: function AS_Form_ddcc55509d334af9a75e84f7d2550a90(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_jd1be5022ee841af820f9ba0d6ee9be8: function AS_Form_jd1be5022ee841af820f9ba0d6ee9be8(eventobject) {
        var self = this;
        this.frmPreshow();
    },
    AS_BarButtonItem_gf11889928c5474c8b89cb3b2989e6d7: function AS_BarButtonItem_gf11889928c5474c8b89cb3b2989e6d7(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_gc654d36f88542949f08df34c20999b2: function AS_BarButtonItem_gc654d36f88542949f08df34c20999b2(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_b3dadd2890024fcba7ad6e3edd150a68: function AS_Button_b3dadd2890024fcba7ad6e3edd150a68(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_f1671d383324483c86104e017fa68a98: function AS_Button_f1671d383324483c86104e017fa68a98(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_ee1f4c4192904e4f934349eb25ff3430: function AS_Button_ee1f4c4192904e4f934349eb25ff3430(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_i7f9f5abb3664e5fb694af8feb4212a6: function AS_Button_i7f9f5abb3664e5fb694af8feb4212a6(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_ie3bcc135a944dd8baa8de8a0961937b: function AS_Button_ie3bcc135a944dd8baa8de8a0961937b(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_a0158c26af96430caa4ed3bfd9e600dd: function AS_Button_a0158c26af96430caa4ed3bfd9e600dd(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_i93a76d23b8647f791038f00a879241a: function AS_Button_i93a76d23b8647f791038f00a879241a(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828: function AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_jd2f9ffdd6924b03bb0175998407e8d3: function AS_Button_jd2f9ffdd6924b03bb0175998407e8d3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_b8275a188bb543bda67ceee35f4a8969: function AS_Image_b8275a188bb543bda67ceee35f4a8969(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("TransferModule/frmReEnterBenAccNoController", ["TransferModule/userfrmReEnterBenAccNoController", "TransferModule/frmReEnterBenAccNoControllerActions"], function() {
    var controller = require("TransferModule/userfrmReEnterBenAccNoController");
    var controllerActions = ["TransferModule/frmReEnterBenAccNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
