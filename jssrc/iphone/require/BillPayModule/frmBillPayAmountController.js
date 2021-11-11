define("BillPayModule/userfrmBillPayAmountController", {
    keypadString: '0.00',
    isPeriodUsed: false,
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, this.customBack);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
        var  transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var amtDet = transMod.presentationController.getTransObject();
        var formatUtil = applicationManager.getFormatUtilManager();
        this.view.lblDollar.text = formatUtil.getCurrencySymbol(amtDet.transactionCurrency);
        if (amtDet.amount && amtDet.amount !== undefined && amtDet.amount !== "" && amtDet.amount !== null) {
            this.keypadString = amtDet.amount;
            if (amtDet.amount.indexOf(".") == -1) {
                this.isPeriodUsed = false;
            } else {
                this.isPeriodUsed = true;
            }
        } else {
            this.keypadString = '0.00';
        }
        // this.view.lblAmount.text = "0.00";
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        var configManager = applicationManager.getConfigurationManager();
        if (configManager.isCombinedUser === "true") {
            var isBusinessAccount = accountMod.presentationController.fetchIsBusinessAccount(amtDet.fromAccountNumber);
            this.view.flxAccountType.isVisible = true;
            this.view.imgAccountType.src = (isBusinessAccount === "false") ? "personalaccount.png" : "businessaccount.png";
        }
        //   this.view.lblDollar.text=configManager.getCurrencyCode();
        var navManager = applicationManager.getNavigationManager();
        var toast = navManager.getCustomInfo("frmBillPayAmount");
        if (toast) {
            if (toast.status == "success" && toast.acountUpdated) {
                this.showSuccessPopup(toast.res, toast.status);
            } else if (toast.status == "error") this.showErrorPopup(JSON.stringify(toast.err));
            navManager.setCustomInfo("frmBillPayAmount", "");
        }
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (transMod.presentationController.isPayeeAdded) {
            applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.addedBillPayPayeeDuringBillPay", "Successfully added payee account. Please proceed with your transaction."));
            transMod.presentationController.isPayeeAdded = false;
        }
        this.view.postShow = this.postshow;
    },
    customBack: function() {
        var navMan = applicationManager.getNavigationManager();
        if (navMan.getPreviousForm() === "frmAcknowledgement") {
            navMan.navigateTo("frmBillPay");
        } else {
            navMan.goBack();
        }
    },
    postshow: function() {
        this.initActions();
        this.updateAmountValue();
        var formatUtility = applicationManager.getFormatUtilManager();
        var presenter = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
        if (!kony.sdk.isNullOrUndefined(presenter.presentationController.selectedAccountBankDone = false))
            if (presenter.presentationController.selectedAccountBankDone) {
                this.view.lblBank.text = presenter.presentationController.selectedAccountBank;
                this.view.lblFromAccountValue.text = presenter.presentationController.selectedAccount;
                this.view.lblBalanceValue.text = formatUtility.getCurrencySymbol() + presenter.presentationController.selectedAccountBalance;
            }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.setFromAccountData();
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.btnChange.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var  transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            transMod.presentationController.navFromAccountsPage();
        }
        this.view.customHeader.flxBack.onClick = this.customBack;
        this.view.customHeader.btnRight.onClick = function() {
            var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            transferModule.presentationController.cancelCommon();
        }
    },
    isNotEmpty: function(str) {
        return !(!str || 0 === str.length);
    },
    setFromAccountData: function() {
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var frmdata = transMod.presentationController.getTransferObjectById();
        this.view.lblFromAccountValue.text = frmdata[0].processedAccountName;
        this.view.lblBalanceValue.text = frmdata[0].availableBalance;
        this.view.lblBank.text = frmdata[0].bankName;
        this.view.lblavailableBalance.text = frmdata[0].accountBalanceType;
        var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
        var profileAccess = applicationManager.getUserPreferencesManager().profileAccess;
        if (isSingleCustomerProfile === true || isSingleCustomerProfile === "true") {
            this.view.flxAccountType.isVisible = false;
        } else {
            if (profileAccess === "both") {
                this.view.flxAccountType.isVisible = true;
                this.view.imgAccountType.src = "businessaccount.png";
                if (frmdata[0].isBusinessAccount === false || frmdata[0].isBusinessAccount === "false") {
                    this.view.imgAccountType.src = "personalaccount.png";
                }
            } else {
                this.view.flxAccountType.isVisible = false;
            }
        }
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
        // if (this.keypadString.length === 1) {
        //   this.keypadString = '';
        //   this.updateAmountValue();
        // }else if (this.keypadString.length !== 0) {
        //   if(this.keypadString[this.keypadString.length-1]==='.'){
        //     this.isPeriodUsed = false;
        //   }
        //   this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        //   this.updateAmountValue();
        // }
    },
    updateAmountValue: function() {
        if (this.keypadString === '0.00') {
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
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
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
            this.view.btnContinue.setEnabled(true);
            this.view.lblAmount.text = this.view.keypad.formatAmount(keypadStringCommas);
        }
    },
    continueOnClick: function() {
        var amount = this.keypadString;
        var configManager = applicationManager.getConfigurationManager();
        if (Number(amount) >= Number(configManager.getConfigurationValue("minBillPayLimit")) && Number(amount) <= Number(configManager.getConfigurationValue("maxBillPayLimit"))) {
            var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var fromaccountdata = transferModule.presentationController.getTransferObjectById();
            transferModule.presentationController.setFromAccountsForTransactions(fromaccountdata[0]);
            var fromAvlBal = fromaccountdata[0].fromAccountBalance;
            transferModule.presentationController.evaluateAmount(amount, fromAvlBal);
        } else if (Number(amount) < Number(configManager.getConfigurationValue("minBillPayLimit"))) {
            this.showErrorPopup(kony.i18n.getLocalizedString("kony.mb.entitlements.minTransactionLimitUnreached") + " " + configManager.getCurrencyCode() + Number(configManager.getConfigurationValue("minBillPayLimit")).toFixed(2));
        } else if (Number(amount) > Number(configManager.getConfigurationValue("maxBillPayLimit"))) {
            this.showErrorPopup(kony.i18n.getLocalizedString("kony.mb.entitlements.maxTransactionLimitExceeded") + " " + configManager.getCurrencyCode() + Number(configManager.getConfigurationValue("maxBillPayLimit")).toFixed(2));
        }
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    showSuccessPopup: function(refID, type) {
        var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.BillPay.DefaultFromAccToastMessage");
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },
    showErrorPopup: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("BillPayModule/frmBillPayAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_c72300d05f6440e38841a8b174ec85f1: function AS_Button_c72300d05f6440e38841a8b174ec85f1(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_d818649a0fa849218f58d0052887b1a9: function AS_Button_d818649a0fa849218f58d0052887b1a9(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_e2c7fb9f4e8340e0ac603e9564e2f5c6: function AS_Button_e2c7fb9f4e8340e0ac603e9564e2f5c6(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_gcbb1c170143426280794a2c2a96dd6e: function AS_Form_gcbb1c170143426280794a2c2a96dd6e(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hbe49153656c471facf5d27f63ffcf79: function AS_Form_hbe49153656c471facf5d27f63ffcf79(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a72a78a766ce40258bafcc799599d639: function AS_BarButtonItem_a72a78a766ce40258bafcc799599d639(eventobject) {
        var self = this;
        this.customBack();
    },
    AS_BarButtonItem_df4c6550e4bc492593742867d2510941: function AS_BarButtonItem_df4c6550e4bc492593742867d2510941(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    },
    AS_Button_fe17aa3f9c134ceaba4f0b4307809089: function AS_Button_fe17aa3f9c134ceaba4f0b4307809089(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_df0d1a1eeb6c4e37af20fa89f580ac79: function AS_Button_df0d1a1eeb6c4e37af20fa89f580ac79(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_g21ccb1e0aa64bada87756e4a335c632: function AS_Button_g21ccb1e0aa64bada87756e4a335c632(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_jcefc73fc44d4a35ba93da5dedcc1fe3: function AS_Button_jcefc73fc44d4a35ba93da5dedcc1fe3(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_f8c6f7940e1a43579e19e675d8a2659f: function AS_Button_f8c6f7940e1a43579e19e675d8a2659f(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_b82af1cd12644430bc32a22636fbecef: function AS_Button_b82af1cd12644430bc32a22636fbecef(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_e07ad692203d457790a74a821af7c955: function AS_Button_e07ad692203d457790a74a821af7c955(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_fe6a7227ee7b4ca9bc2c0f933a0bb351: function AS_Button_fe6a7227ee7b4ca9bc2c0f933a0bb351(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_e2128d45f5e94fcc85e492ac104c70aa: function AS_Button_e2128d45f5e94fcc85e492ac104c70aa(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_h067e162fc9345da99585d343d887fc3: function AS_Button_h067e162fc9345da99585d343d887fc3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_h06747e2dadc4fdb88cc1a43838554aa: function AS_Image_h06747e2dadc4fdb88cc1a43838554aa(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("BillPayModule/frmBillPayAmountController", ["BillPayModule/userfrmBillPayAmountController", "BillPayModule/frmBillPayAmountControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayAmountController");
    var controllerActions = ["BillPayModule/frmBillPayAmountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
