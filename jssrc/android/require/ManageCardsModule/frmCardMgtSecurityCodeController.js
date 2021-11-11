define("ManageCardsModule/userfrmCardMgtSecurityCodeController", {
    keypadString: '',
    timerCounter: 0,
    objToReturn: {},
    titleText: '',
    init: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    preShow: function() {
        try {
            var scope = this;
            this.view.customHeader.btnRight.onClick = this.goBackToHome;
            var navManager = applicationManager.getNavigationManager();
            var frmData = navManager.getCustomInfo("frmCardMgtSecurityCode");
            if (frmData === undefined) {
                var newObj = {
                    "view": "none"
                };
                frmData = newObj;
            }
            if (frmData.view === "lockCard") {
                this.setFunctionalityForLockCard(frmData);
            }
            if (frmData.view === "unlockCard") {
                this.setFunctionalityForUnlockCard(frmData);
            }
            if (frmData.view === "pinChange") {
                this.setFunctionalityForPinChange(frmData);
            }
            if (frmData.view === "replaceCard") {
                this.setFunctionalityForReplaceCard(frmData);
            }
            if (frmData.view === "lostCard") {
                this.setFunctionalityForLostCard(frmData);
            }
            if (frmData.view === "cancelCard") {
                this.setFunctionalityForCancelCard(frmData);
            }
            this.objToReturn = frmData;
            this.keypadString = '';
            this.incompleteSecurityCodeView();
            this.updateInputBullets("flxInputSecurityCode");
            this.renderTitleBar();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    renderTitleBar: function() {
        try {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.flxHeader.setVisibility(false);
                if ((this.titleText !== null) && (this.titleText !== '')) {
                    this.view.title = this.titleText;
                }
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setKeypadChar: function(char) {
        try {
            this.keypadString = this.keypadString + char;
            if (this.keypadString.length === 6) {
                this.enterSecurityCodePostAction();
            } else if (this.keypadString.length < 6) {
                this.incompleteSecurityCodeView();
            } else if (this.keypadString.length > 6) {
                this.keypadString = this.keypadString.slice(0, 6);
                return;
            }
            this.updateInputBullets("flxInputSecurityCode");
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    clearKeypadChar: function() {
        try {
            if (this.keypadString.length === 1) {
                this.keypadString = '';
                this.updateInputBullets("flxInputSecurityCode");
            }
            if (this.keypadString.length !== 0) {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
                if (this.keypadString.length < 6) {
                    this.incompleteSecurityCodeView();
                }
                this.updateInputBullets("flxInputSecurityCode");
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    updateInputBullets: function(inputFlx) {
        try {
            var i;
            var widgets = this.view[inputFlx].widgets();
            for (i = 0; i < this.keypadString.length; i++) {
                widgets[i].skin = "sknLbl484848SSPReg40px";
                widgets[i].text = this.keypadString[i];
            }
            for (i = this.keypadString.length; i < widgets.length; i++) {
                widgets[i].skin = "lblBlueFocus";
                widgets[i].text = '_';
            }
            this.view.forceLayout();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    enterSecurityCodePostAction: function() {
        this.view.btnProceed.setEnabled(true);
        this.view.btnProceed.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.flxMainContainer.forceLayout();
    },
    incompleteSecurityCodeView: function() {
        this.view.btnProceed.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnProceed.setEnabled(false);
        this.view.flxMainContainer.forceLayout();
    },
    setFunctionalityForLockCard: function(cardData) {
        var scope = this;
        cardData.Action = "Lock";
        cardData.Reason = "Lock";
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.lockCard");
        this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.lockCard");
        this.view.btnProceed.onClick = function() {
            scope.lockUnlockCard(cardData);
        };
    },
    setFunctionalityForUnlockCard: function(cardData) {
        var scope = this;
        cardData.Action = "Activate";
        cardData.Reason = "Unlock";
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.unlockCard");
        this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.unlockCard");
        this.view.btnProceed.onClick = function() {
            scope.lockUnlockCard(cardData);
        };
    },
    lockUnlockCard: function(cardData) {
        try {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.updateCardData(cardData, this.lockUnlockSuccess.bind(this), this.lockUnlockFailure.bind(this));
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    lockUnlockSuccess: function(response) {
        try {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var navManager = applicationManager.getNavigationManager();
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.showCardsHome();
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    lockUnlockFailure: function(response) {
        try {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            if (response["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
            else {
                //showToastMessageError(this,response.errorMessage);
                applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.cardManage.failLockUnlock"));
            }
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setFunctionalityForPinChange: function(cardDetails) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMgtSecurityCodeController : setFunctionalityForPinChange ####");
            cardDetails.Action = "PinChange";
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.requestingPinChange");
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.requestingPinChange");
            this.view.btnProceed.onClick = function() {
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmCardMngReasons", cardDetails);
                var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
                manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngReasons");
            };
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setFunctionalityForReplaceCard: function(cardData) {
        try {
            var scope = this;
            cardData.Action = "Replace";
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard");
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard");
            this.view.btnProceed.onClick = function() {
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmCardMngReasons", cardData);
                var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
                manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngReasons");
            };
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setFunctionalityForLostCard: function(cardData) {
        try {
            var scope = this;
            cardData.Action = "Report Lost";
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.stolenCreditCard");
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.stolenCreditCard");
            this.view.btnProceed.onClick = function() {
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmCardMngReasons", cardData);
                var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
                manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngReasons");
            };
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setFunctionalityForCancelCard: function(cardData) {
        try {
            var scope = this;
            cardData.Action = "Cancel";
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.cancelCardTitle");
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.cancelCardTitle");
            this.view.btnProceed.onClick = function() {
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmCardMngReasons", cardData);
                var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
                manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngReasons");
            };
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    goBackToHome: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var frmData = {
                "isMainScreen": false
            };
            navManager.setCustomInfo("frmCardManageHome", frmData);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.showCardsHome();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
});
define("ManageCardsModule/frmCardMgtSecurityCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b5bb34b725574b39a94f40f4567121b2: function AS_Form_b5bb34b725574b39a94f40f4567121b2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_dad50aba9b324740a3a7e562dda46b71: function AS_Form_dad50aba9b324740a3a7e562dda46b71(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_dc97f819cf504ea3b6fab25d28b38411: function AS_BarButtonItem_dc97f819cf504ea3b6fab25d28b38411(eventobject) {
        var self = this;
        this.goBackToHome();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_h804a782d9994f6d93940008bc4b10c1: function AS_Button_h804a782d9994f6d93940008bc4b10c1(eventobject) {
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
define("ManageCardsModule/frmCardMgtSecurityCodeController", ["ManageCardsModule/userfrmCardMgtSecurityCodeController", "ManageCardsModule/frmCardMgtSecurityCodeControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmCardMgtSecurityCodeController");
    var controllerActions = ["ManageCardsModule/frmCardMgtSecurityCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
