define("BillPayModule/userfrmBillPayEnterAccNoController", {
    keypadString: '',
    timerCounter: 0,
    /*
      onNavigate: function(obj) {
          if (obj === undefined) {
              return;
          }
          if (obj === "addManually") {
          }
      },
      */
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreshow: function() {
        //      this.setDataToForm();
        //      this.updateInputBullets("flxInputAccNo");
        //      this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        //       this.view.imgCheckbox.onTouchEnd=this.onCheckBoxTouchEnd;
        //       this.renderTitleBar();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    onNavigate: function(context) {
        var scope = this;
        this.view.dataEntry.setContext(context, scope);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.btnRight.onClick = function() {
            scope.onClickCancel();
        };
    },
    onClickCancel: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
    },
    onContinueAccountNumber: function(context) {
        if (context['accountNumberCheckbox'] == true) {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var navManager = applicationManager.getNavigationManager();
            if (context.hasOwnProperty('billerCategoryId')) {
                var categoryId = context.billerCategoryId;
                if (categoryId == "2" || categoryId == "4") {
                    navManager.navigateTo("frmBillPayPhoneNumber", false, context);
                } else {
                    navManager.navigateTo("frmBillPaySelectPayee", false, context);
                }
            } else {
                navManager.navigateTo("frmBillPaySelectPayee", false, context);
            }
        } else {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var navManager = applicationManager.getNavigationManager();
            navManager.navigateTo("frmBillPayReEnterAccNo", false, context);
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    /*
    btnRightOnClick: function() {
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var flowType=billPayMod.presentationController.getFlowType();
      billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
      },
    btnContinueOnClick: function() {
      if(this.view.imgCheckbox.src === "remembermetick.png"){
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var navMan=applicationManager.getNavigationManager();
        navMan.setEntryPoint("contracts",navMan.getCurrentForm());
        billPayMod.presentationController.navToContractDetailsWithoutAccountNum();
        //billPayMod.presentationController.navToVerifyDetailsWithoutAccountNum("frmBillPayVerifyDetails");
      }
      else{
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToReenterAccNum(this.keypadString,"frmBillPayReEnterAccNo");
      }
    },
    flxBackOnClick: function() {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length >= 1 && this.keypadString.length <= 18) {
            this.view.imgCheckbox.src = "remeberme.png";
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else if (this.keypadString.length > 18) {
            this.keypadString = this.keypadString.slice(0, 18);
            return;
        }
        this.updateInputBullets("flxInputAccNo");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.incompleteCodeView();
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
		else{
        this.enterCodePostAction();
      }
    },
    updateInputBullets: function(inputFlx) {
        if(this.keypadString===''){
            this.view.lblAccountNumber.text = '|';
        }else{
            this.view.lblAccountNumber.text = this.keypadString;
        }
    },
    enterCodePostAction: function() {
      if(this.view.lblAccountNumber.text.length > 1 && this.view.lblAccountNumber.text.length < 50){
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
      }
      else {
        this.incompleteCodeView();
      }
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
  onCheckBoxTouchEnd: function(){
    if(this.view.imgCheckbox.src === "remeberme.png"){
      this.view.imgCheckbox.src = "remembermetick.png";
      this.keypadString='';
      this.updateInputBullets("flxInputAccNo");
      this.enterCodePostAction();
    }else{
      this.view.imgCheckbox.src = "remeberme.png";
      this.incompleteCodeView();
    }
  },
  setDataToForm:function(){
     var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
     var accNum=billPayMod.presentationController.getBillPayAccountNumber();
     if(billPayMod.presentationController.getManuallyAddedFlag()==="true"){
       this.view.flxCheckbox.isVisible=true;
     }else if(billPayMod.presentationController.getManuallyAddedFlag()==="false"){
       this.view.flxCheckbox.isVisible=false;
     }
    if(accNum || billPayMod.presentationController.getIsPayeeWithOutAccNum()){
        this.keypadString = accNum;
        this.enterCodePostAction();
    }
    else{
      this.keypadString = '';
      this.view.imgCheckbox.src ="remeberme.png";
      this.incompleteCodeView();
    }
  },
  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  */
});
define("BillPayModule/frmBillPayEnterAccNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ad5cee80de4742f080073e63d24dbbed: function AS_Form_ad5cee80de4742f080073e63d24dbbed(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fb2e14a17ae642f5adf6533df7e4f5ab: function AS_Form_fb2e14a17ae642f5adf6533df7e4f5ab(eventobject) {
        var self = this;
        return self.frmPreshow.call(this);
    },
    AS_BarButtonItem_ib40f50af0604e1395533ae247e280f0: function AS_BarButtonItem_ib40f50af0604e1395533ae247e280f0(eventobject) {
        var self = this;
        this.btnRightOnClick();
    },
    AS_Button_a75e8b5e531d49c9b7edae9c12363d52: function AS_Button_a75e8b5e531d49c9b7edae9c12363d52(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_d8e20fb2e5664a33886a807e3359666a: function AS_Button_d8e20fb2e5664a33886a807e3359666a(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_i8927e276e284992bbf5cc7110df4f85: function AS_Button_i8927e276e284992bbf5cc7110df4f85(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_d120c5f4681b4d4d87703df00990d819: function AS_Button_d120c5f4681b4d4d87703df00990d819(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_f5befcc5afe244939f3641d6c84abb5e: function AS_Button_f5befcc5afe244939f3641d6c84abb5e(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_g2f96fecf33b41aeb632f913aa73912a: function AS_Button_g2f96fecf33b41aeb632f913aa73912a(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_bb947477cbdb4d2995cf5c9fdd69ab2b: function AS_Button_bb947477cbdb4d2995cf5c9fdd69ab2b(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_h286c43696d04f52ba3b11c173a60b4f: function AS_Button_h286c43696d04f52ba3b11c173a60b4f(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_d8bdc816124a4c73810dd852e2552b90: function AS_Button_d8bdc816124a4c73810dd852e2552b90(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_je50201fc8e348f28c4f4df881076c18: function AS_Button_je50201fc8e348f28c4f4df881076c18(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_b4b7bf19ad314be29ce6f421ded37a44: function AS_Image_b4b7bf19ad314be29ce6f421ded37a44(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("BillPayModule/frmBillPayEnterAccNoController", ["BillPayModule/userfrmBillPayEnterAccNoController", "BillPayModule/frmBillPayEnterAccNoControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayEnterAccNoController");
    var controllerActions = ["BillPayModule/frmBillPayEnterAccNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
