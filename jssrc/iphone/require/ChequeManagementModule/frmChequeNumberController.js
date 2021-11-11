define("ChequeManagementModule/userfrmChequeNumberController", {
    keypadString: '',
    isPeriodUsed: false,
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.lblError.setVisibility(false);
        this.view.flxChequeWrapper.skin = "flxBlueFocus";
        // this.view.txtChequeNo.setFocus(false);
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            // this.view.flxHeader.isVisible = false;
            this.view.flxHeader.setVisibility(false);
        }
        this.initActions();
    },
    postShow: function() {
        this.updateAmountValue();
        this.updateUI();
    },
    updateUI: function() {
        var transObj = applicationManager.getModulesPresentationController("ChequeManagementModule");
        var objData = transObj.getTransObject();
        if (objData.checkNumber1 === null) {
            this.view.lblChequeNumber.text = "";
            this.keypadString = '';
            this.view.lblCheqNumber.setVisibility(true);
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
        }
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.customHeader.flxBack.onClick = this.backOnClick;
        //    this.view.customHeader.flxBack.onClick = function(){
        //    var commonBack = applicationManager.getModulesPresentationController("ChequeManagementModule");
        //    commonBack.commonFunctionForgoBack();
        //    };
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    backOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  backOnClick  ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmSCChequeType");
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    cancelOnClick: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.commonCancel();
    },
    setKeypadChar: function(char) {
        this.view.lblError.setVisibility(false);
        this.view.flxChequeWrapper.skin = "flxBlueFocus";
        var char = char.toString();
        if (this.keypadString === '') {
            this.keypadString = char;
            this.view.lblCheqNumber.setVisibility(false);
        } else {
            this.keypadString = this.keypadString + char;
        }
        this.updateAmountValue();
    },
    clearKeypadChar: function() {
        this.view.lblError.setVisibility(false);
        this.view.flxChequeWrapper.skin = "flxBlueFocus";
        if (this.keypadString === '') return;
        var value = (this.keypadString / 10).toString();
        if (parseInt(value) > 0) {
            var value1 = value.split('.')[0];
            this.keypadString = value1;
            var count = this.keypadString.split("");
            if (count === 0) {
                this.keypadString = '';
            }
        } else {
            this.keypadString = '';
            this.view.lblCheqNumber.setVisibility(true);
        }
        this.updateAmountValue();
    },
    updateAmountValue: function() {
        if (this.keypadString === '') {
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
            this.view.lblChequeNumber.text = this.view.keypad.formatAmount(this.keypadString);
        } else {
            var finalValue = this.keypadString;
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
            this.view.lblChequeNumber.text = this.view.keypad.formatAmount(finalValue);
        }
    },
    continueOnClick: function() {
        var selectedChequeNumber = this.view.lblChequeNumber.text;
        if (selectedChequeNumber !== "0") {
            var chequeNumber = applicationManager.getModulesPresentationController("ChequeManagementModule");
            chequeNumber.setChequeNumber(selectedChequeNumber);
            var navMan = applicationManager.getModulesPresentationController("ChequeManagementModule");
            if (scope_ChequePresentationController.isReview == true) {
                navMan.commonFunctionForNavigation("frmSCReview");
            } else {
                navMan.commonFunctionForNavigation("frmIssueDate");
            }
        } else {
            this.view.lblError.text = "Please provide Valid Account Number, Account is not related to Customer";
            this.view.lblError.setVisibility(true);
            this.view.flxChequeWrapper.skin = "sknFlxff0000ErrorMsg";
        }
        // presentation call
        //   var stopChequePresentationController = applicationManager.getModulesPresentationController("ChequeManagementModule");
        //   stopChequePresentationController.chequeNumberValidate(selectedChequeNumber);
        //     if(selectedChequeNumber === data){
        //       this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        //       this.view.btnContinue.setEnabled(false);
        //       this.bindGenericError(err);
        //     }
        //   else{
        //     var chequeNumber = applicationManager.getModulesPresentationController("ChequeManagementModule");
        //     chequeNumber.setChequeNumber(selectedChequeNumber);
        //     var navMan = applicationManager.getModulesPresentationController("ChequeManagementModule");
        //         if( scope_ChequePresentationController.isReview==true){
        //          navMan.commonFunctionForNavigation("frmSCReview");
        //     }else{
        //              navMan.commonFunctionForNavigation("frmIssueDate");
        //             }
        //   }
    },
    bindGenericError: function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, err);
        this.view.lblError.setVisibility(true);
        this.view.lblError.text = err;
        this.view.lblError.skin = "sknLbl0095e422px";
        this.view.lblChequeNumber.skin = "sknTbx424242SSP28pxBorder1PxBgff5d6eTab";
    }
});
define("ChequeManagementModule/frmChequeNumberControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h8ec2073022d4ec2a1be4ca1296066e3: function AS_Form_h8ec2073022d4ec2a1be4ca1296066e3(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_d9bc6d64bfd94259a249b34af40a7db1: function AS_Form_d9bc6d64bfd94259a249b34af40a7db1(eventobject) {
        var self = this;
        return self.postShow.call(this);
    },
    AS_Form_e9d4b3199f414834b11164791210640d: function AS_Form_e9d4b3199f414834b11164791210640d(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_cde01f75167d4df19f81e99783091cdf: function AS_BarButtonItem_cde01f75167d4df19f81e99783091cdf(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    AS_Button_ab348c740e13405b85db057f0ada20e0: function AS_Button_ab348c740e13405b85db057f0ada20e0(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_e64c5906d80e426e9304afb09a9460d4: function AS_Button_e64c5906d80e426e9304afb09a9460d4(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_h7f063827414421eb3ad6734426c825f: function AS_Button_h7f063827414421eb3ad6734426c825f(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_d65e2b276a9f4a15b1733797f708e875: function AS_Button_d65e2b276a9f4a15b1733797f708e875(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_b1be19563f814a51b7ab31877b5954f2: function AS_Button_b1be19563f814a51b7ab31877b5954f2(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_bee1c7cf64ee4df580f96efae63cd62d: function AS_Button_bee1c7cf64ee4df580f96efae63cd62d(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_jdcc4bbe26c541e39b783ebe38f951bb: function AS_Button_jdcc4bbe26c541e39b783ebe38f951bb(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_g61f491aec2049778653276546b3458c: function AS_Button_g61f491aec2049778653276546b3458c(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_e8ed86db1b8b4047bc056e77aef22522: function AS_Button_e8ed86db1b8b4047bc056e77aef22522(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_e323863770a840aeb5ce3fb3930b451b: function AS_Button_e323863770a840aeb5ce3fb3930b451b(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_a3a1c3188c74401892b7cee38cfa4fbc: function AS_Image_a3a1c3188c74401892b7cee38cfa4fbc(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("ChequeManagementModule/frmChequeNumberController", ["ChequeManagementModule/userfrmChequeNumberController", "ChequeManagementModule/frmChequeNumberControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmChequeNumberController");
    var controllerActions = ["ChequeManagementModule/frmChequeNumberControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
