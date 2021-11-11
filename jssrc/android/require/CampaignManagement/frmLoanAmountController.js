define("CampaignManagement/userfrmLoanAmountController", {
    keypadString: '0.00',
    isPeriodUsed: false,
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.lblAmount.text = "0.00";
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
        var  transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var amtDet = transMod.presentationController.getTransObject();
        var formatUtil = applicationManager.getFormatUtilManager();
        this.view.lblBalanceValue.text = applicationManager.getConfigurationManager().getCurrencyCode() + " 10,000";
        // this.view.lblDollar.text=formatUtil.getCurrencySymbol(amtDet.transactionCurrency);
        //     if(amtDet.amount&&amtDet.amount!==undefined&&amtDet.amount!==""&&amtDet.amount!==null)
        //       {
        //         this.keypadString = amtDet.amount;
        //         if(amtDet.amount.indexOf(".")==-1)
        //           {
        //             this.isPeriodUsed = false;
        //           }
        //         else
        //           {
        //             this.isPeriodUsed = true;
        //           }
        //       }
        //     else
        //       {
        //         this.keypadString ='0.00';
        //       }
        // this.view.lblAmount.text = "0.00";
        var configManager = applicationManager.getConfigurationManager();
        this.view.lblDollar.text = configManager.getCurrencyCode();
        this.updateAmountValue();
        this.initActions();
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
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        }
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
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
        var maxLimit = "10000";
        var configManager = applicationManager.getConfigurationManager();
        if (Number(amount) >= Number("0") && Number(amount) <= Number(maxLimit)) {
            var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
            campaignMod.presentationController.navigateToCMDuration(this.view.lblAmount.text);
        } else if (Number(amount) > Number(maxLimit)) {
            this.showErrorPopup("Amount should not exceed more than $10000");
            this.view.lblAmount.text = "0.00";
            this.keypadString = "0.00";
        }
    },
    showErrorPopup: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    onCancelClick: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
    }
});
define("CampaignManagement/frmLoanAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e2205130066f4caa93b91a529398c525: function AS_Button_e2205130066f4caa93b91a529398c525(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_d0ea3445e7e0423ea1c949028a411430: function AS_Button_d0ea3445e7e0423ea1c949028a411430(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_bfac9a3053174284babaea3848fe4cd4: function AS_Button_bfac9a3053174284babaea3848fe4cd4(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_e108bbc85ae1487c89d756c586995144: function AS_Form_e108bbc85ae1487c89d756c586995144(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a7a1c263fee449ddaf08983e2d300057: function AS_Form_a7a1c263fee449ddaf08983e2d300057(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ed82d3f27f9e49fcb1377ff1c0a31c3a: function AS_BarButtonItem_ed82d3f27f9e49fcb1377ff1c0a31c3a(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    },
    AS_Button_h147c1dd62e8475eaa13d0c6158353d6: function AS_Button_h147c1dd62e8475eaa13d0c6158353d6(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_aaf3fa43ed2945949f66b6004b510ae5: function AS_Button_aaf3fa43ed2945949f66b6004b510ae5(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_g1e3f08fd7de4c6ba3490e1730d43dff: function AS_Button_g1e3f08fd7de4c6ba3490e1730d43dff(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_g110ed24367b4f68a02699a136c9330b: function AS_Button_g110ed24367b4f68a02699a136c9330b(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_df936ebdc855496c86b5c2bd26d75c62: function AS_Button_df936ebdc855496c86b5c2bd26d75c62(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_a7ba043cc8d74aa0b654e730a3163805: function AS_Button_a7ba043cc8d74aa0b654e730a3163805(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_i7f435117b734fc0a3244082fc19f4a4: function AS_Button_i7f435117b734fc0a3244082fc19f4a4(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_d613fc79e36247d3b15c0430012210be: function AS_Button_d613fc79e36247d3b15c0430012210be(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_ga4f0d0200ed44b3b1d5d676aef3ee6e: function AS_Button_ga4f0d0200ed44b3b1d5d676aef3ee6e(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_f9628f91c9404f17afec47a7b2ea7ec3: function AS_Button_f9628f91c9404f17afec47a7b2ea7ec3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_fab486ab37984d0fb268d01b8596c8a1: function AS_Image_fab486ab37984d0fb268d01b8596c8a1(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("CampaignManagement/frmLoanAmountController", ["CampaignManagement/userfrmLoanAmountController", "CampaignManagement/frmLoanAmountControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmLoanAmountController");
    var controllerActions = ["CampaignManagement/frmLoanAmountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
