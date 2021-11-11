define("BillPayModule/userfrmBillPayPhoneNumberController", {
    keypadString: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreShow: function() {
        //     var scope = this;
        //      this.setDataToForm();
        //  this.updateInputBullets("flxInputPhoneNo");
        //      this.view.lblPhoneNumber.text = "";
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        //       this.view.btnContinue.onClick = function(){
        //        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        //    	  billPayMod.presentationController.setBillPayPhoneNumber(scope.keypadString.replace(/[()-]/g,""));
        //        var navMan=applicationManager.getNavigationManager();
        //       navMan.setEntryPoint("contracts",navMan.getCurrentForm());
        //       billPayMod.presentationController.getContractDetails("BILL_PAY_CREATE_PAYEES");
        //billPayMod.presentationController.commonFunctionForNavigation("frmBillPayVerifyDetails");
        //     };
        //     this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    onNavigate: function(context) {
        var scope = this;
        if (context['billerCategoryId']) {
            var categoryId = context['billerCategoryId'];
            if (categoryId == "2") {
                this.view.flxHeader.customHeader.lblLocateUs.text = "Phone Number";
                this.view.title = "Phone Number";
            }
            if (categoryId == "4") {
                this.view.flxHeader.customHeader.lblLocateUs.text = "Policy Number";
                this.view.title = "Policy Number";
            }
        }
        this.view.dataEntry.setContext(context, scope);
    },
    lookUpAction: function(context) {
        context['countryLookUp'] = true;
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmBillPayCountryLookUp", false, context);
    },
    continueDynamicField: function(context) {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmBillPaySelectPayee", false, context);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnRightOnClick: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
    },
    /*
  
    btnRightOnClick: function() {
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
    },
    renderTitleBar: function() {
        if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
           this.view.flxHeader.isVisible = false;
         }else{
           this.view.flxHeader.isVisible = true;
         }
    },
    flxBackOnClick: function() {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    },
//     btnContinueOnClick: function() {
//     },
    setKeypadChar: function(char) {
      this.keypadString = this.keypadString + char;
      this.view.lblPhoneNumber.text = this.keypadString;
      if(this.keypadString.length > 0)
        this.enterPostAction();
//         if (this.keypadString.length === 13) {
//             this.enterPostAction();
//         } else if (this.keypadString.length < 13) {
//             this.incompleteView();
//         } else if (this.keypadString.length > 13) {
//             this.keypadString = this.keypadString.slice(0, 13);
//             return;
//         }
       // this.updateInputBullets("flxInputPhoneNo");
    },
    clearKeypadChar: function() {
      if (this.keypadString.length === 1) {
        this.keypadString = '';
        // this.updateInputBullets("flxInputPhoneNo");
      }
      else
      {
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      }
	  this.enterPostAction();
      this.view.lblPhoneNumber.text = this.keypadString;
//         if (this.keypadString.length !== 0) {
//             if ((this.keypadString.length === 5) || (this.keypadString.length === 9)) {
//                 this.keypadString = this.keypadString.substr(0, this.keypadString.length - 2);
//             } else {
//                 this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
//             }
//             if (this.keypadString.length < 13) {
//                 this.incompleteView();
//             }
//            // this.updateInputBullets("flxInputPhoneNo");
//         }
    },
    updateInputBullets: function(inputFlx) {
        var dummyString = '(___)___-____';
        //         if(this.keypadString.length===1||this.keypadString.length===5||this.keypadString.length===9){
        //             this.keypadString = this.keypadString.substr(0, this.keypadString.length-1);
        //         }
        if (this.keypadString.length === 8) {
            this.keypadString = this.keypadString + '-';
        } else if (this.keypadString.length === 0) {
            this.keypadString = this.keypadString + '(';
        } else if (this.keypadString.length === 4) {
            this.keypadString = this.keypadString + ')';
        }
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }
        this.view.forceLayout();
    },
    incompleteView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    enterPostAction: function() {
      if(this.view.lblPhoneNumber.text.length > 5 && this.view.lblPhoneNumber.text.length < 20) {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
      }
      else{
        this.incompleteView();
      }
    },
    setDataToForm:function(){
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var phoneNo=billPayMod.presentationController.getBillPayPhoneNumber();
      if(phoneNo && phoneNo.length>0)
      {
        this.keypadString=phoneNo;
        this.enterPostAction();
      }
      else
      {
        this.keypadString = '';
        this.view.lblPhoneNumber.text = "";
        this.incompleteView();
      }
//       if(phoneNo && phoneNo.length>6){
//         this.keypadString="("+phoneNo.substr(0,3)+")"+phoneNo.substr(3,3)+"-"+phoneNo.substr(6,4);
//         this.enterPostAction();
//       }
//       else if(phoneNo && phoneNo.length<=6){
//         this.keypadString="("+phoneNo.substr(0,3)+")"+phoneNo.substr(3,3);
//         this.enterPostAction();
//       }
//       else{
//         this.keypadString = '(';
//         this.incompleteView();
//       }
    }
    */
});
define("BillPayModule/frmBillPayPhoneNumberControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ac312e513a4b44818d5da728ea2874b3: function AS_Form_ac312e513a4b44818d5da728ea2874b3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_cb62bff3eeb449a19f1cf9aa0f11d859: function AS_Form_cb62bff3eeb449a19f1cf9aa0f11d859(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_a129170fad764a7a9e801daa2da2856d: function AS_BarButtonItem_a129170fad764a7a9e801daa2da2856d(eventobject) {
        var self = this;
        this.btnRightOnClick();
    },
    AS_Button_e204228890774dd8848a1fd4ad518b2e: function AS_Button_e204228890774dd8848a1fd4ad518b2e(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_gd99635f871e41c88b086d0f38abf266: function AS_Button_gd99635f871e41c88b086d0f38abf266(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_fd9d850e6fca45f3bcb8c77de6995697: function AS_Button_fd9d850e6fca45f3bcb8c77de6995697(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_ea74e7d419404e3480d461fcd447bfbd: function AS_Button_ea74e7d419404e3480d461fcd447bfbd(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_d441a3eb88e845a481251bc8aa27792b: function AS_Button_d441a3eb88e845a481251bc8aa27792b(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_d243f57d61654e92a106d7a161404fff: function AS_Button_d243f57d61654e92a106d7a161404fff(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_cbfb1b9550654843a89d8649d749eaa7: function AS_Button_cbfb1b9550654843a89d8649d749eaa7(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_a85d07a7e4ca4fb28deb7c0ab9163451: function AS_Button_a85d07a7e4ca4fb28deb7c0ab9163451(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_ce220b6b3c7f4c1ba580a1a3e45964ee: function AS_Button_ce220b6b3c7f4c1ba580a1a3e45964ee(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_a182e737fd464a928d8203ee2e40d711: function AS_Button_a182e737fd464a928d8203ee2e40d711(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_b633675ea41048e2af645d70a7ad1574: function AS_Image_b633675ea41048e2af645d70a7ad1574(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("BillPayModule/frmBillPayPhoneNumberController", ["BillPayModule/userfrmBillPayPhoneNumberController", "BillPayModule/frmBillPayPhoneNumberControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayPhoneNumberController");
    var controllerActions = ["BillPayModule/frmBillPayPhoneNumberControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
