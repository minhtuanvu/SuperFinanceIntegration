define("PayAPersonModule/userfrmP2PRecPhoneNoController", {
    keypadString: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreShow: function() {
        var scope = this;
        this.setDataToForm();
        //this.updateInputBullets("flxInputPhoneNo");
        this.view.lblPhoneNumber.text = "";
        this.keypadString = '';
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.view.btnPickFromContacts.onClick = this.btnPickFromContactsOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    btnPickFromContactsOnClick: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navigateToContacts("phone");
    },
    btnContinueOnClick: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navigateToP2PRecipientNamefromPhoneNo("frmP2PRecipientName", this.keypadString.replace(/[()-]/g, ""));
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        //         if (this.keypadString.length === 13) {
        //             this.enterPostAction();
        //         } else if (this.keypadString.length < 13) {
        //             this.incompleteView();
        //         } else if (this.keypadString.length > 13) {
        //             this.keypadString = this.keypadString.slice(0, 13);
        //             return;
        //         }
        this.enterPostAction();
        // this.updateInputBullets("flxInputPhoneNo");
        this.view.lblPhoneNumber.text = this.keypadString;
    },
    clearKeypadChar: function() {
        //         if (this.keypadString.length === 1) {
        //             this.keypadString = '(';
        //           //  this.updateInputBullets("flxInputPhoneNo");
        //         }
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
        if (this.keypadString.length >= 1) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        }
        if (this.keypadString.length === 0) this.incompleteView();
        else this.enterPostAction();
        this.view.lblPhoneNumber.text = this.keypadString;
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
        if (this.view.lblPhoneNumber.text.length > 5 && this.view.lblPhoneNumber.text.length < 20) {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.incompleteView();
        }
    },
    onClickCancel: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
    },
    setDataToForm: function() {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var recipientData = payeeMod.presentationController.getP2PPayeeDetails();
        var phoneNum = recipientData.phone;
        //      if(phoneNum.length>10)
        //       {
        //         phoneNum=phoneNum.slice(2);
        //       }
        //     if(phoneNum && phoneNum.length>6){
        //       this.keypadString="("+phoneNum.substr(0,3)+")"+phoneNum.substr(3,3)+"-"+phoneNum.substr(6,4);
        //       if(phoneNum.length>=10)
        //         this.enterPostAction();
        //       else
        //         this.incompleteView();
        //     }
        //     else if(phoneNum && phoneNum.length<=6){
        //       this.keypadString="("+phoneNum.substr(0,3)+")"+phoneNum.substr(3,3);
        //       this.incompleteView();
        //     }
        //     else{
        //       this.keypadString = '(';
        //       this.incompleteView();
        //     }
        if (phoneNum && phoneNum.length > 0) {
            phoneNum = phoneNum.replace(/[()-/ /]/g, "");
            this.keypadString = phoneNum;
            this.view.lblPhoneNumber.text = phoneNum;
            this.enterPostAction();
        } else {
            this.keypadString = '';
            this.view.lblPhoneNumber.text = "";
            this.incompleteView();
        }
        this.view.forceLayout();
    },
    bindGenericError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    getScope: function() {
        var scope = this;
        return scope;
    },
    bindContactData: function() {
        this.setDataToForm();
        this.updateInputBullets("flxInputPhoneNo");
    }
});
define("PayAPersonModule/frmP2PRecPhoneNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ddac5b07857c4349b4663bad7c072efa: function AS_Form_ddac5b07857c4349b4663bad7c072efa(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a8403027eb1743ebbf78c818e6c10caa: function AS_Form_a8403027eb1743ebbf78c818e6c10caa(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_a35f7fd8ec4d4653966f24ce347e6ba4: function AS_BarButtonItem_a35f7fd8ec4d4653966f24ce347e6ba4(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_f44ace0b937a4d3aab1aa4dda574f7f9: function AS_BarButtonItem_f44ace0b937a4d3aab1aa4dda574f7f9(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_c29becbf3bf2448faec6815fe47620c2: function AS_Button_c29becbf3bf2448faec6815fe47620c2(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_f1671d383324483c86104e017fa68a98: function AS_Button_f1671d383324483c86104e017fa68a98(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_ee1f4c4192904e4f934349eb25ff3430: function AS_Button_ee1f4c4192904e4f934349eb25ff3430(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_i7f9f5abb3664e5fb694af8feb4212a6: function AS_Button_i7f9f5abb3664e5fb694af8feb4212a6(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_ie3bcc135a944dd8baa8de8a0961937b: function AS_Button_ie3bcc135a944dd8baa8de8a0961937b(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_a0158c26af96430caa4ed3bfd9e600dd: function AS_Button_a0158c26af96430caa4ed3bfd9e600dd(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_i93a76d23b8647f791038f00a879241a: function AS_Button_i93a76d23b8647f791038f00a879241a(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828: function AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_jd2f9ffdd6924b03bb0175998407e8d3: function AS_Button_jd2f9ffdd6924b03bb0175998407e8d3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_b8275a188bb543bda67ceee35f4a8969: function AS_Image_b8275a188bb543bda67ceee35f4a8969(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("PayAPersonModule/frmP2PRecPhoneNoController", ["PayAPersonModule/userfrmP2PRecPhoneNoController", "PayAPersonModule/frmP2PRecPhoneNoControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2PRecPhoneNoController");
    var controllerActions = ["PayAPersonModule/frmP2PRecPhoneNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
