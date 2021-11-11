define("TransferModule/userfrmTransferAmountController", {
    keypadString: '0.00',
    isPeriodUsed: false,
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    //     onNavigate: function (obj) {
    //         if(obj==undefined){
    //             return;
    //         }
    //         var scope = this;
    //         var setType = {
    //             "mykony": function () {
    //             },
    //             "myother": function () {
    //             },
    //             "otherkony": function () {
    //             },
    //             "otherbank": function () {
    //             },
    //             "international": function () {
    //             },
    //             "wire": function () {
    //             },
    //         };
    //         setType[obj];
    //     },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            // this.view.flxHeader.isVisible = false;
            this.view.flxHeader.setVisibility(false);
        }
        var configManager = applicationManager.getConfigurationManager();
        var formatUtil = applicationManager.getFormatUtilManager();
        // this.view.lblDollar.text=configManager.getCurrencyCode();
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var transObj = transModPresentationController.getTransObject();
        transModPresentationController.setLimitsForTransaction(transObj.fromAccountNumber);
        this.view.lblDollar.text = formatUtil.getCurrencySymbol(transObj.transactionCurrency);
        var amount = transObj.amount;
        if (amount && amount !== undefined && amount !== "" && amount !== null) {
            this.keypadString = amount;
            if (amount.indexOf(".") === -1) {
                this.isPeriodUsed = false;
            } else {
                this.isPeriodUsed = true;
            }
        } else {
            this.keypadString = '0.00';
        }
        // this.view.lblAmount.text = "0.00";
        this.updateAmountValue();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        if (transModPresentationController.internationalBenificiaryAdded || transModPresentationController.otherBankBenificiaryAdded || transModPresentationController.sameBankBenificiaryAdded) {
            applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiaryDuringPayment", "Successfully added recipient account. Please proceed with your transaction."));
            transModPresentationController.internationalBenificiaryAdded = false;
            transModPresentationController.otherBankBenificiaryAdded = false;
            transModPresentationController.sameBankBenificiaryAdded = false;
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.setFromAccountData();
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.btnChange.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transModPresentationController.commonFunctionForNavigation("frmTransfersFromAccount");
        }
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    cancelOnClick: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon();
    },
    setFromAccountData: function() {
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var fromaccountdata = transModPresentationController.getTransferObjectById();
        this.view.lblFromAccountValue.text = fromaccountdata[0].processedName;
        this.view.lblBalanceValue.text = fromaccountdata[0].availableBalance;
        this.view.lblBank.text = fromaccountdata[0].bankName;
        this.view.lblavailableBalance.text = fromaccountdata[0].accountBalanceType;
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
        //     var amount= this.view.lblAmount.text;
        var configManager = applicationManager.getConfigurationManager();
        var amount = this.keypadString;
        //var fromAvlBal = this.view.lblBalanceValue.text;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var fromaccountdata = transferModulePresentationController.getTransferObjectById();
        transferModulePresentationController.setFromAccountsForTransactions(fromaccountdata[0]);
        var fromAvlBal = fromaccountdata[0].fromAccountBalance;
        var evalAmountLimits = transferModulePresentationController.evaluateMinMaxAmountLimits(amount);
        if (evalAmountLimits === "valid") transferModulePresentationController.evaluateAmount(amount, fromAvlBal);
        else if (evalAmountLimits["max"]) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.entitlements.maxTransactionLimitExceeded") + " " + configManager.getCurrencyCode() + Number(evalAmountLimits["max"]).toFixed(2));
        } else if (evalAmountLimits["min"]) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.entitlements.minTransactionLimitUnreached") + " " + configManager.getCurrencyCode() + Number(evalAmountLimits["min"]).toFixed(2));
        }
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("TransferModule/frmTransferAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_g7ecde7b68774903b61f60c044259d1e: function AS_Button_g7ecde7b68774903b61f60c044259d1e(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_f1f23d78d81d4e939939ecf8fedb171a: function AS_Form_f1f23d78d81d4e939939ecf8fedb171a(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_afda0f7cfa5249c09ecfdfe940b59ccf: function AS_Form_afda0f7cfa5249c09ecfdfe940b59ccf(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a5bc95ea356846798ecfd61184223799: function AS_BarButtonItem_a5bc95ea356846798ecfd61184223799(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    AS_Button_bfdd6eee50f54c84ac46ba23f56959de: function AS_Button_bfdd6eee50f54c84ac46ba23f56959de(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_ee22b2d04129493baf684faa8f39d7e3: function AS_Button_ee22b2d04129493baf684faa8f39d7e3(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_df48ecda814d422994c1cf486a09dc15: function AS_Button_df48ecda814d422994c1cf486a09dc15(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_id112beefc3d499997bda0f28bcbff39: function AS_Button_id112beefc3d499997bda0f28bcbff39(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_g79700c8683b449493586c00b7c77fcb: function AS_Button_g79700c8683b449493586c00b7c77fcb(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_c9f59c2640ff4502bb916a6090a65473: function AS_Button_c9f59c2640ff4502bb916a6090a65473(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_h7af37e587394b28b4efa4b4c8095c6c: function AS_Button_h7af37e587394b28b4efa4b4c8095c6c(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_af8f205d15954853bf2f6586908ee734: function AS_Button_af8f205d15954853bf2f6586908ee734(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_f1546b0d045d43f6ab86210e1e02f628: function AS_Button_f1546b0d045d43f6ab86210e1e02f628(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_c70c840cab374407b31c054eb597e7d6: function AS_Button_c70c840cab374407b31c054eb597e7d6(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_ea110cbc96c54c5d9f42350f545fb874: function AS_Image_ea110cbc96c54c5d9f42350f545fb874(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("TransferModule/frmTransferAmountController", ["TransferModule/userfrmTransferAmountController", "TransferModule/frmTransferAmountControllerActions"], function() {
    var controller = require("TransferModule/userfrmTransferAmountController");
    var controllerActions = ["TransferModule/frmTransferAmountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
