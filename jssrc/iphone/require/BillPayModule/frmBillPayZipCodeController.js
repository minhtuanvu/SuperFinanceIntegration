define("BillPayModule/userfrmBillPayZipCodeController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxContainerNew.top = "-50dp";
        } else {
            this.view.flxHeader.isVisible = true;
        }
        //this.view.lblZipCode.text = "";
        //    this.setDataToForm();
        //    this.view.txtZipCode.onTextChange = this.updateAmountValue;
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.btnContinue.onClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.isValidZipCode(scope.view.txtZipCode.text, "frmBillPayZipCode");
        };
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
            scope.onClickCancel();
        };
    },
    onNavigate: function(context) {
        var scope = this;
        this.view.dataEntry.setContext(context, scope);
    },
    onContinueZipCode: function(context) {
            if (context && context.flowType === "ADD") {
                context.accountNumber = "";
            }
            var navManager = applicationManager.getNavigationManager();
            navManager.navigateTo("frmBillPayEnterAccNo", false, context);
        }
        /*
	onContinueClick:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayMod.presentationController.setBillPayZipCode(this.view.txtZipCode.text);
    var billerCategoryName = billPayMod.presentationController.getBillPayBillerCategory();
    if(billerCategoryName === "Phone"){
         billPayMod.presentationController.navToRelationNumber("frmBillPayRelationNumber");
       }
    else{
         billPayMod.presentationController.navToBillPayAccNumberSearchFlow("frmBillPayEnterAccNo");
       }
   },
   setDataToForm:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var zipCode=billPayMod.presentationController.getBillPayZipCode();
     var specialCharactersSet = "~#^|$%&*!@()_-+=}{][/|?,.><`':;\"\\";
     this.view.txtZipCode.restrictCharactersSet = specialCharactersSet;
     this.view.txtZipCode.maxTextLength = 35;
    if(zipCode)
    {
      this.view.txtZipCode.text = zipCode;
      this.updateAmountValue();
    }
    else{
      this.view.txtZipCode.text = "";
      this.updateAmountValue();
    }
  },
    updateAmountValue: function(){
        if(this.view.txtZipCode.text === ""){
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnContinue.setEnabled(false);
        }else{
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
            this.view.btnContinue.setEnabled(true);
        }
  },
	bindError : function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
     this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
     this.view.btnContinue.setEnabled(false);
  },
  */
        ,
    onClickCancel: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
    }
});
define("BillPayModule/frmBillPayZipCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_j892d8b7a153409b949a744a75ed05dc: function AS_Button_j892d8b7a153409b949a744a75ed05dc(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Form_j4db11bf3e85415183ec2ec8587b4f1b: function AS_Form_j4db11bf3e85415183ec2ec8587b4f1b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c2ee012baa1542949176264707f41247: function AS_Form_c2ee012baa1542949176264707f41247(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ib62e52eb4174f9384c85b5675ecf838: function AS_BarButtonItem_ib62e52eb4174f9384c85b5675ecf838(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Button_g79c057e67b940f08ae62e85037b3d7c: function AS_Button_g79c057e67b940f08ae62e85037b3d7c(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_d2db9f9b94f14a6e982315e3657dd4f8: function AS_Button_d2db9f9b94f14a6e982315e3657dd4f8(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_hbd61728cbfb4ae3b1dbad081ebc11c7: function AS_Button_hbd61728cbfb4ae3b1dbad081ebc11c7(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_f5f4b4bfc5ae438ba3a297f7862e0c0e: function AS_Button_f5f4b4bfc5ae438ba3a297f7862e0c0e(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_b6d9ed0910de488da699b3fc69b0b954: function AS_Button_b6d9ed0910de488da699b3fc69b0b954(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_d652f0c1c6be4b80ab7faa7d85d0fe78: function AS_Button_d652f0c1c6be4b80ab7faa7d85d0fe78(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_e3b9dcb8159b49b8893a8496fa196785: function AS_Button_e3b9dcb8159b49b8893a8496fa196785(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_g82e2a2670b2436184fe08aa47dd8314: function AS_Button_g82e2a2670b2436184fe08aa47dd8314(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_jf4ef4f99b5d488fac606e39e82100d4: function AS_Button_jf4ef4f99b5d488fac606e39e82100d4(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_j0682136a1ed44d988e59e5db4710e9a: function AS_Button_j0682136a1ed44d988e59e5db4710e9a(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_hd917e07fcb0484fa26301a7bbb6e5ec: function AS_Image_hd917e07fcb0484fa26301a7bbb6e5ec(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("BillPayModule/frmBillPayZipCodeController", ["BillPayModule/userfrmBillPayZipCodeController", "BillPayModule/frmBillPayZipCodeControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayZipCodeController");
    var controllerActions = ["BillPayModule/frmBillPayZipCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
