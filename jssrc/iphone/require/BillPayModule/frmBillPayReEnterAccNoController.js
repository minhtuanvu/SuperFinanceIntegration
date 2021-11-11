define("BillPayModule/userfrmBillPayReEnterAccNoController", {
    timerCounter: 0,
    keypadString: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreshow: function() {
        //       this.setDataToForm();
        //       this.updateInputBullets("flxReInputAccNo");
        //        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.title = "Re-enter Account Number";
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxHeader.customHeader.lblLocateUs.text = "Re-enter Account Number";
        }
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        //       this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        //this.view.customHeader.btnRight.onClick=this.flxBackOnClick;
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onNavigate: function(context) {
        var scope = this;
        this.view.dataEntry.setContext(context, scope);
    },
    onContinueReEnterAccountNumber: function(context) {
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
    },
    btnRightOnClick: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var flowType = billPayMod.presentationController.getFlowType();
        billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
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
        var configManager = applicationManager.getConfigurationManager();
        var navMan=applicationManager.getNavigationManager();
      if(configManager.isCombinedUser === "true"){
        navMan.setCustomInfo("formflow","frmBillPayReEnterAccNo");
        navMan.navigateTo("frmBenAccountTypeSelect");
      }else{
        if(this.isAccnoMatched()){
          var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
           var billerCategoryName = billPayMod.presentationController.getBillPayBillerCategory();
            if(billerCategoryName === "Insurance"){
              billPayMod.presentationController.navToPolicyNumber(this.keypadString,"frmBillPayPolicyNumber");
            }
          else{
            navMan.setEntryPoint("contracts",navMan.getCurrentForm());
            billPayMod.presentationController.navToContractDetails(this.keypadString);
            //billPayMod.presentationController.navToVerifyDetails(this.keypadString,"frmContracts");
          }
        }
        else{
          this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.missmatchAccountNumber"));
          this.keypadString = '';
          this.updateInputBullets("flxReInputAccNo");
          this.incompleteCodeView();
        }
      }
        },
      bindGenericError : function(msg){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
      },
      flxBackOnClick: function() {
        var navMan=applicationManager.getNavigationManager();
        navMan.goBack();
      },
      setKeypadChar: function(char) {
          this.keypadString = this.keypadString + char;
          if (this.keypadString.length >= 1 && this.keypadString.length <= 18) {
              this.enterCodePostAction();
          } else if (this.keypadString.length < 1) {
              this.incompleteCodeView();
          } else if (this.keypadString.length > 18) {
              this.keypadString = this.keypadString.slice(0, 18);
              return;
          }
          this.updateInputBullets("flxReInputAccNo");
      },
      clearKeypadChar: function() {
          if (this.keypadString.length === 1) {
              this.incompleteCodeView();
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
      },
      updateInputBullets: function(inputFlx) {
          if(this.keypadString===''){
              this.view.lblAccountNumber.text = '|';
          }else{
              this.view.lblAccountNumber.text = this.keypadString;
          }
      },
      enterCodePostAction: function() {
          this.view.btnContinue.setEnabled(true);
          this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
      },
      incompleteCodeView: function() {
          this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
          this.view.btnContinue.setEnabled(false);
      },
    isAccnoMatched:function(){
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var accNum=billPayMod.presentationController.getBillPayAccountNumber();
      if(accNum===this.keypadString){
        return true;
      }
      else{
        return false;
      }
    },
    setDataToForm:function(){
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var reenter=billPayMod.presentationController.getBillPayReEnterAccountNumber();
      if(reenter)
      {
        this.keypadString=reenter;
        this.enterCodePostAction();
      }
      else{
        this.keypadString="";
        this.incompleteCodeView();
      }
    }
    */
});
define("BillPayModule/frmBillPayReEnterAccNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ga3501ad07464e5e9fca8aa877f99bdc: function AS_Form_ga3501ad07464e5e9fca8aa877f99bdc(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f1e2a6e01219429380eff431def87bd6: function AS_Form_f1e2a6e01219429380eff431def87bd6(eventobject) {
        var self = this;
        this.frmPreshow();
    },
    AS_BarButtonItem_e3c351862d6d4203af2a0d9ed539fb8a: function AS_BarButtonItem_e3c351862d6d4203af2a0d9ed539fb8a(eventobject) {
        var self = this;
        this.btnRightOnClick();
    },
    AS_Button_c1fb9b4e9b2f4373a7972664378679a4: function AS_Button_c1fb9b4e9b2f4373a7972664378679a4(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_h620b3af458f4308a18d6db33e734502: function AS_Button_h620b3af458f4308a18d6db33e734502(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_c34d511a0b29481bbac44732eb1616f7: function AS_Button_c34d511a0b29481bbac44732eb1616f7(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_j3281f9946f040cea5dedd9927541b6f: function AS_Button_j3281f9946f040cea5dedd9927541b6f(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_de379d2920594dc8bd26c9db98ffa39e: function AS_Button_de379d2920594dc8bd26c9db98ffa39e(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_d1fa93cb6b204e06a65a5948447c738b: function AS_Button_d1fa93cb6b204e06a65a5948447c738b(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_jf367706e5074a11b1a1b1bdacacc9da: function AS_Button_jf367706e5074a11b1a1b1bdacacc9da(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_d6c32bd59fe94a088564c6d3c65ee103: function AS_Button_d6c32bd59fe94a088564c6d3c65ee103(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_d92463b835e54e49b96ab8a577013a5e: function AS_Button_d92463b835e54e49b96ab8a577013a5e(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_g01cc08999e54f079155e478fc987fa6: function AS_Button_g01cc08999e54f079155e478fc987fa6(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_a5f695c311bb4376a9dc497e667c5bd3: function AS_Image_a5f695c311bb4376a9dc497e667c5bd3(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("BillPayModule/frmBillPayReEnterAccNoController", ["BillPayModule/userfrmBillPayReEnterAccNoController", "BillPayModule/frmBillPayReEnterAccNoControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayReEnterAccNoController");
    var controllerActions = ["BillPayModule/frmBillPayReEnterAccNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
