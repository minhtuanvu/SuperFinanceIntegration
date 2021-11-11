define("PayAPersonModule/userfrmP2pAmountController", {
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
            this.view.flxHeader.isVisible = false;
        }
        this.keypadString = '0.00';
        this.view.lblAmount.text = "0.00";
        var configurationManager = applicationManager.getConfigurationManager();
        var formatUtil = applicationManager.getFormatUtilManager();
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var transObj = transMod.presentationController.getTransObject();
        this.view.lblDollar.text = formatUtil.getCurrencySymbol(transObj.transactionCurrency);
        var controller = applicationManager.getPresentationUtility().getController('frmP2pFromAccount', true);
        this.updateDetails();
        this.updateAmountValue();
        this.initActions();
        var  transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var accountId = applicationManager.getTransactionManager().getTransactionObject().fromAccountNumber;
        transModPresentationController.setLimitsForTransaction(accountId);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.btnChange.onClick = function() {
            var accMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            accMode.presentationController.getAccounts();
        };
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            payeeMod.presentationController.cancelCommon();
        };
    },
    continueOnClick: function() {
        var configManager = applicationManager.getConfigurationManager();
        var amountEntered = this.keypadString;
        if (Number(amountEntered) >= Number(configManager.getConfigurationValue("minP2PLimit")) && Number(amountEntered) <= Number(configManager.getConfigurationValue("maxP2PLimit"))) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var navManager = applicationManager.getNavigationManager();
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            var fromaccountdata = payeeMod.presentationController.getP2PObject();
            var data = {};
            data.fromAccountName = this.view.lblFromAccountValue.text;
            data.amount = this.keypadString;
            data.fromAvlBal = fromaccountdata.fromAccountAvailableBalance;
            payeeMod.presentationController.evaluateAmount(data.amount, data.fromAvlBal, data);
        } else if (Number(amountEntered) < Number(configManager.getConfigurationValue("minP2PLimit"))) {
            this.bindGenericError(kony.i18n.getLocalizedString("kony.mb.entitlements.minTransactionLimitUnreached") + " " + configManager.getCurrencyCode() + Number(configManager.getConfigurationValue("minP2PLimit")).toFixed(2));
        } else if (Number(amountEntered) > Number(configManager.getConfigurationValue("maxP2PLimit"))) {
            this.bindGenericError(kony.i18n.getLocalizedString("kony.mb.entitlements.maxTransactionLimitExceeded") + " " + configManager.getCurrencyCode() + Number(configManager.getConfigurationValue("maxP2PLimit")).toFixed(2));
        }
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
    updateDetails: function() {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var data = payeeMod.presentationController.getP2PObject();
        if (data.amount !== undefined && data.amount !== null && data.amount !== "") {
            this.view.lblAmount.text = data.amount;
            this.keypadString = data.amount;
            if (data.amount.indexOf(".") === -1) {
                this.isPeriodUsed = false;
            } else {
                this.isPeriodUsed = true;
            }
        }
        var name = "";
        if (data.fromAccountNickName === null || data.fromAccountNickName === undefined) {
            name = data.fromAccountName;
        } else {
            name = data.fromAccountNickName;
        }
        this.view.lblFromAccountValue.text = applicationManager.getPresentationUtility().formatText(name, 10, data.fromAccountNumber, 4);
        this.view.lblBalanceValue.text = data.fromAccountBalance;
        this.view.lblBank.text = data.fromBankName;
        this.view.lblavailableBalance.text = data.accountBalanceType;
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("PayAPersonModule/frmP2pAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_b4b0659508b24032bdccf88c5571c30f: function AS_Button_b4b0659508b24032bdccf88c5571c30f(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_i653aff0d5f8460080d4585108a8d90d: function AS_Button_i653aff0d5f8460080d4585108a8d90d(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_jcb642958d6f4b679f9eade9225635e6: function AS_Button_jcb642958d6f4b679f9eade9225635e6(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_e4590cce3e06434c86a15b6c8ba05245: function AS_Form_e4590cce3e06434c86a15b6c8ba05245(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_had4ced8f70b425b99461c2032f57297: function AS_Form_had4ced8f70b425b99461c2032f57297(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_c2fb0c70283a4582aa41c9d252eb16e3: function AS_BarButtonItem_c2fb0c70283a4582aa41c9d252eb16e3(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    },
    AS_Button_d2b25f24b00c4638abf3ff8c8a9d3c74: function AS_Button_d2b25f24b00c4638abf3ff8c8a9d3c74(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_a1dd0c487c2d4b7ba8b798ccd9f9be10: function AS_Button_a1dd0c487c2d4b7ba8b798ccd9f9be10(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_c823b201d4034d8fb7750b4ce10eeed2: function AS_Button_c823b201d4034d8fb7750b4ce10eeed2(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_f2878214f4e946f69bb601593e7dc626: function AS_Button_f2878214f4e946f69bb601593e7dc626(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_gc3956d9408d428ab74508df6947dd0f: function AS_Button_gc3956d9408d428ab74508df6947dd0f(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_j727dd9683c6484cabd82b1483aa1ca6: function AS_Button_j727dd9683c6484cabd82b1483aa1ca6(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_b4960b82c6d74fccba37dc2fb1a9d078: function AS_Button_b4960b82c6d74fccba37dc2fb1a9d078(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_ha6bc906d9d34e19a2901c895d0b043e: function AS_Button_ha6bc906d9d34e19a2901c895d0b043e(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_d1ef226536ed4964af81c2606a672e84: function AS_Button_d1ef226536ed4964af81c2606a672e84(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_a7dea4613d1b42598a3e4005dce49c94: function AS_Button_a7dea4613d1b42598a3e4005dce49c94(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_e5f8824cb8e143e799651ab2cbbe5969: function AS_Image_e5f8824cb8e143e799651ab2cbbe5969(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("PayAPersonModule/frmP2pAmountController", ["PayAPersonModule/userfrmP2pAmountController", "PayAPersonModule/frmP2pAmountControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2pAmountController");
    var controllerActions = ["PayAPersonModule/frmP2pAmountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
