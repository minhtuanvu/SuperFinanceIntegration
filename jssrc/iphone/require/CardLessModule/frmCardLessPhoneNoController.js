define("CardLessModule/userfrmCardLessPhoneNoController", {
    keypadString: '',
    originalValue: '',
    frmPreShow: function() {
        var scope = this;
        this.fv.submissionView(this.view.btnContinue);
        //this.keypadString = '(';
        this.keypadString = '';
        this.fv.checkPhoneNumberLengthNormal(this.keypadString);
        //  this.updateInputBullets("flxInputPhoneNo");
        this.view.lblPhoneNumber.text = "";
        //   this.incompleteView();
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.flxHeader.btnRight.onClick = this.btnRightOnClick;
        this.view.btnPickFromContacts.onClick = this.btnPickFromContactsOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.renderTitleBar();
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        var data = cLMod.presentationController.getTransactionObject();
        var phn = data.cashlessPhone;
        if (phn !== null && phn !== '' && phn !== undefined) this.populateDetails(phn);
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        var FormValidator = require("FormValidatorManager");
        this.fv = new FormValidator(1);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    populateDetails: function(phn) {
        phn = phn.replace(/[()-/ /]/g, "");
        //      if(phn.length>10)
        //       {
        //         phn=phn.slice(2);
        //       }
        for (var i = 0; i < phn.length; i++) {
            this.setKeypadChar(phn.charAt(i));
        }
        //      this.fv.checkPhoneNumberLengthNormal(this.keypadString);
    },
    btnRightOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.cancelCommon();
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnPickFromContactsOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.navigateToContacts();
    },
    btnContinueOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.setCardlessPhoneNumber(this.keypadString, "frmCardLessRecName");
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        this.originalValue = this.keypadString;
        //         if (this.keypadString.length === 13) {
        //             this.enterPostAction();
        //         } else if (this.keypadString.length < 13) {
        //             this.incompleteView();
        //         } else if (this.keypadString.length > 13) {
        //             this.keypadString = this.keypadString.slice(0, 13);
        //             return;
        //         }
        if (this.keypadString === null || this.keypadString.length === 0) {
            this.incompleteView();
        } else {
            this.enterPostAction();
        }
        //  this.updateInputBullets("flxInputPhoneNo");
        // this.fv.checkPhoneNumberLengthNormal(this.keypadString);
        this.view.lblPhoneNumber.text = this.keypadString;
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 0) {
            this.incompleteView();
        }
        if (this.keypadString.length >= 1) {
            //             if ((this.keypadString.length === 5) || (this.keypadString.length === 9)) {
            //                 this.keypadString = this.keypadString.substr(0, this.keypadString.length - 2);
            //             } else {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            //             }
            //this.updateInputBullets("flxInputPhoneNo");
        }
        if (this.keypadString.length === 0) this.incompleteView();
        else this.enterPostAction();
        this.view.lblPhoneNumber.text = this.keypadString;
        //       this.fv.checkPhoneNumberLengthNormal(this.keypadString);
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
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    bindContactData: function(data) {
        if (data.phone) {
            //     	this.keypadString = '(';
            this.keypadString = '';
            this.populateDetails(data.phone);
            this.view.forceLayout();
        }
    },
    getScope: function() {
        var scope = this;
        return scope;
    }
});
define("CardLessModule/frmCardLessPhoneNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c56c83c0e6d549f0bb2481ec1e3c1851: function AS_Form_c56c83c0e6d549f0bb2481ec1e3c1851(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_h3425f81412f4e159c7384495655c36b: function AS_Form_h3425f81412f4e159c7384495655c36b(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_c334aedd82da4240928cc51a3c6feef5: function AS_BarButtonItem_c334aedd82da4240928cc51a3c6feef5(eventobject) {
        var self = this;
        this.btnRightOnClick();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_b575222dcabb4dc7a67b95486b79deb7: function AS_Button_b575222dcabb4dc7a67b95486b79deb7(eventobject) {
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
define("CardLessModule/frmCardLessPhoneNoController", ["CardLessModule/userfrmCardLessPhoneNoController", "CardLessModule/frmCardLessPhoneNoControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessPhoneNoController");
    var controllerActions = ["CardLessModule/frmCardLessPhoneNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
