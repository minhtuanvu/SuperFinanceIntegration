define("TransferModule/userfrmEnterBenAccNoController", {
    timerCounter: 0,
    keypadString: '',
    init: function() {
        this.initActions();
    },
    frmPreshow: function() {
        this.keypadString = '';
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var accountNumber = benificiaryData.accountNumber;
        if (accountNumber) {
            this.keypadString = accountNumber;
            this.enterCodePostAction();
        } else {
            this.incompleteCodeView();
        }
        this.updateInputBullets("flxInputAccNo");
        this.renderTitleBar();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
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
        var accountNumber = this.keypadString;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var isValidAccNo = transferModulePresentationController.isValidAccNum(accountNumber, "frmEnterBenAccNo");
        if (isValidAccNo) {
            transferModulePresentationController.navigateToReEnterAccountNumber(accountNumber);
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
        this.updateInputBullets("flxInputAccNo");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxInputAccNo");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxInputAccNo");
        }
        if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else {
            this.enterCodePostAction();
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
        if (this.keypadString.length > 3 && this.keypadString.length < 50) {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.incompleteCodeView();
        }
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
define("TransferModule/frmEnterBenAccNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j5f60a0d7f7c4064be6ea7c69e9e9554: function AS_Form_j5f60a0d7f7c4064be6ea7c69e9e9554(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_cd983fee38af4bb398e0cf57676c9881: function AS_Form_cd983fee38af4bb398e0cf57676c9881(eventobject) {
        var self = this;
        return self.frmPreshow.call(this);
    },
    AS_BarButtonItem_h837ebc50d8a44e5a4bc28a40c336478: function AS_BarButtonItem_h837ebc50d8a44e5a4bc28a40c336478(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_e7e814f7720f406b96cd4d177a409026: function AS_BarButtonItem_e7e814f7720f406b96cd4d177a409026(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_eda0a9c8bcf44864be05117a41a31e06: function AS_Button_eda0a9c8bcf44864be05117a41a31e06(eventobject) {
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
define("TransferModule/frmEnterBenAccNoController", ["TransferModule/userfrmEnterBenAccNoController", "TransferModule/frmEnterBenAccNoControllerActions"], function() {
    var controller = require("TransferModule/userfrmEnterBenAccNoController");
    var controllerActions = ["TransferModule/frmEnterBenAccNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
