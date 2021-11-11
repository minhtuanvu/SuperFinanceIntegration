define("TransferModuleEurope/userfrmTransferAmountEuropeController", {
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
            this.view.flxHeader.setVisibility(false);
        }
        var  transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var transObj = transModPresentationController.getTransObject();
        var formatUtil = applicationManager.getFormatUtilManager();
        this.view.lblDollar.text = formatUtil.getCurrencySymbol(transObj.transactionCurrency);
        var amount = transObj.amount;
        if (amount && amount !== undefined && amount !== "" && amount !== null) {
            this.keypadString = amount;
            if (amount.indexOf(".") == -1) {
                this.isPeriodUsed = false;
            } else {
                this.isPeriodUsed = true;
            }
        } else {
            this.keypadString = '0.00';
        }
        // this.view.lblAmount.text = "0.00";
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        var accntType = navManager.getCustomInfo("frmTransfersToAccount");
        if (accntType.newBeneficiaryAdded) {
            if (accntType.newBeneficiaryAdded == "true") this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiaryDuringPayment", "Successfully recipient was added"));
            else this.bindGenericError(JSON.stringify(accntType.errmsg));
        }
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        this.setFromAccountData();
        this.setCurrencies();
        this.updateAmountValue();
        var accountId = applicationManager.getTransactionManager().getTransactionObject().fromAccountNumber;
        transModPresentationController.setLimitsForTransaction(accountId);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.btnChange.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var  transMod = applicationManager.getModulesPresentationController("TransferModule");
            transMod.commonFunctionForNavigation("frmTransfersFromAccountEurope");
        }
        this.view.lstboxCurrency.onSelection = this.selectCurrency;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    setCurrencies: function() {
        var configManager = applicationManager.getConfigurationManager();
        var  transMod = applicationManager.getModulesPresentationController("TransferModule");
        var transferType = transMod.getTransObject().transferType;
        if (!kony.sdk.isNullOrUndefined(transferType) && transferType == "international") {
            var supportedCurrency = configManager.getSupportedCurrencies();
            this.view.lstboxCurrency.masterData = supportedCurrency;
            var transactionCurrency = transMod.getTransObject().transactionCurrency;
            var transactionCurrencyIndex = this.getCurrencyIndex(transactionCurrency, supportedCurrency);
            if (transactionCurrencyIndex != -1) {
                this.view.lstboxCurrency.selectedKey = supportedCurrency[transactionCurrencyIndex][0];
            } else if (supportedCurrency) {
                this.view.lstboxCurrency.selectedKey = supportedCurrency[0][0];
            }
            this.view.flxCurrency.setVisibility(true);
            this.view.flxAmountMain.left = "105Dp";
            this.view.lblDollar.setVisibility(false);
        } else {
            this.view.flxCurrency.setVisibility(false);
            this.view.flxAmountMain.left = "0Dp";
            this.view.lblDollar.setVisibility(true);
        }
    },
    getCurrencyIndex: function(transactionCurrency, supportedCurrency) {
        if (transactionCurrency && supportedCurrency) {
            for (var i = 0; i < supportedCurrency.length; i++) {
                if (transactionCurrency == supportedCurrency[i][0]) return i;
            }
        }
        return -1;
    },
    selectCurrency: function() {},
    cancelOnClick: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.cancelCommon();
    },
    setFromAccountData: function() {
        var  transMod = applicationManager.getModulesPresentationController("TransferModule");
        var fromaccountdata = transMod.getTransferObjectById();
        this.view.lblFromAccountValue.text = fromaccountdata[0].processedName;
        this.view.lblBalanceValue.text = fromaccountdata[0].availableBalance;
        this.view.lblBank.text = fromaccountdata[0].bankName;
        this.view.lblavailableBalance.text = fromaccountdata[0].accountBalanceType;
    },
    setKeypadChar: function(char) {
        if (char == '.') {
            if (this.isPeriodUsed == false) {
                this.isPeriodUsed = true;
            } else {
                return;
            }
        }
        this.keypadString = this.keypadString + char;
        var firstChar = this.keypadString[0];
        this.keypadString = this.keypadString.split("");
        for (var i = 1; i < this.keypadString.length; i++) {
            if (this.keypadString[i] == '.') {
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
            if (this.keypadString[i] == '.') {
                this.keypadString[i + 1] = this.keypadString[i - 1];
                i--;
            } else {
                this.keypadString[i + 1] = this.keypadString[i];
            }
        }
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(1);
        if (this.keypadString[0] == '.') {
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
        //     var amount= this.view.lblAmount.text;
        var selectedCurrency = "";
        var configManager = applicationManager.getConfigurationManager();
        var amount = this.keypadString;
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        var fromaccountdata = transferModule.getTransferObjectById();
        transferModule.setFromAccountsForTransactions(fromaccountdata[0]);
        var fromAvlBal = fromaccountdata[0].fromAccountBalance;
        var fromAccCurr = fromaccountdata[0].fromAccountCurrency;
        if (kony.sdk.isNullOrUndefined(fromAccCurr)) fromAccCurr = configManager.getBaseCurrency();
        if (this.view.flxCurrency.isVisible) {
            if (kony.sdk.isNullOrUndefined(this.view.lstboxCurrency.selectedKey)) {
                this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.selectCurrencyMessage"));
            } else selectedCurrency = this.view.lstboxCurrency.selectedKey;
        } else selectedCurrency = configManager.getBaseCurrency();
        if (selectedCurrency != "") {
            var evalAmountLimits = transferModule.evaluateMinMaxAmountLimits(amount, selectedCurrency);
            if (evalAmountLimits == "valid") transferModule.evaluateAmount(amount, fromAvlBal, selectedCurrency, fromAccCurr);
            else if (evalAmountLimits["max"]) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.entitlements.maxTransactionLimitExceeded") + " " + configManager.getCurrencyCode() + evalAmountLimits["max"]);
            } else if (evalAmountLimits["min"]) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.entitlements.minTransactionLimitUnreached") + " " + configManager.getCurrencyCode() + evalAmountLimits["min"]);
            }
        }
    },
    bindGenericSuccess: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj, msg);
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("TransferModuleEurope/frmTransferAmountEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_gd3a10fb37a440f08d56cf14ce24a482: function AS_Button_gd3a10fb37a440f08d56cf14ce24a482(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_eabafad51f5641a4bbc0db0733059268: function AS_Form_eabafad51f5641a4bbc0db0733059268(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e719fcd3a3f34e6881b41aa7c42d43da: function AS_Form_e719fcd3a3f34e6881b41aa7c42d43da(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b556d5aba6df4f139c517b2af5b5247f: function AS_BarButtonItem_b556d5aba6df4f139c517b2af5b5247f(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    AS_Button_ie0e5417a5a6467ab861c2fdd06bbe91: function AS_Button_ie0e5417a5a6467ab861c2fdd06bbe91(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_e966537bd27f4afda5368db9604cf572: function AS_Button_e966537bd27f4afda5368db9604cf572(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_d08f55c64938492cbe86283cf4488683: function AS_Button_d08f55c64938492cbe86283cf4488683(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_dff975f0cf444d859968416baf589aac: function AS_Button_dff975f0cf444d859968416baf589aac(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_d5b18bbe3ae34025a83683233ac88584: function AS_Button_d5b18bbe3ae34025a83683233ac88584(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_j209d28c1653462c89d94466e418e727: function AS_Button_j209d28c1653462c89d94466e418e727(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_f68308a3092c4496be4e190ca9f6e1c3: function AS_Button_f68308a3092c4496be4e190ca9f6e1c3(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_c036c4664c0d4bbdbbadc53acc9dcb76: function AS_Button_c036c4664c0d4bbdbbadc53acc9dcb76(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_a9a96bb072f042b4baf903e785f81f2c: function AS_Button_a9a96bb072f042b4baf903e785f81f2c(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_da76cdac71eb425fae8f5dce218d63fb: function AS_Button_da76cdac71eb425fae8f5dce218d63fb(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_d002136620794560b4eb9d2b0e52b440: function AS_Image_d002136620794560b4eb9d2b0e52b440(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("TransferModuleEurope/frmTransferAmountEuropeController", ["TransferModuleEurope/userfrmTransferAmountEuropeController", "TransferModuleEurope/frmTransferAmountEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmTransferAmountEuropeController");
    var controllerActions = ["TransferModuleEurope/frmTransferAmountEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
