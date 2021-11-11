define("TransferModuleEurope/userfrmTransfersPhoneNumberEuropeController", {
    keypadString: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.lblPhoneNumber.text = kony.i18n.getLocalizedString("kony.mb.p2p.enterPhoneNo");
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
        this.setKeyPadActions();
        this.view.btnVerify.onClick = this.onSavePhonenumber;
        //this.validateSSNForgotPwd();
    },
    preShow: function() {
        //this.keypadString = "";
        this.view.flxPopup.setVisibility(false);
        this.initActions();
        this.renderTitleBar();
        //this.handleData();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        this.assignDataToForm(benificiaryData);
        this.updateInputBullets();
        this.setKeyPadActions();
        this.view.btnVerify.onClick = this.onSavePhonenumber;
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (!isIphone) {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
    handleData: function() {
        this.keypadString = "";
        // this.updateInputBullets();
    },
    getKeypadString: function() {
        var ssn = this.keypadString;
        ssn = ssn.replace(/-/g, "");
        return ssn;
    },
    //KEYPAD OPS:
    updateInputBullets: function() {
        /*var dummyString = '___-__-____';
        if (this.keypadString.length === 3 || this.keypadString.length === 6) {
            this.keypadString = this.keypadString + '-';
        }
        var widgets = this.view["flxInputSSN"].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl979797SSP60px";
            if(this.keypadString[i]==='-'){
                widgets[i].text = this.keypadString[i];
            }else{
                widgets[i].text = "•";
            }
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }*/
        if (this.keypadString.length !== 11) {
            this.view.btnVerify.skin = "sknBtnE2E9F0Rounded";
            this.view.btnVerify.setEnabled(false);
        } else {
            this.view.btnVerify.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnVerify.setEnabled(true);
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length === 11) return;
        this.keypadString = this.keypadString + char;
        this.view.lblPhoneNumber.text = this.keypadString;
        this.updateInputBullets();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
        }
        if (this.keypadString.length !== 0) {
            if (this.keypadString[this.keypadString.length - 1] === '-') {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            }
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        }
        this.view.lblPhoneNumber.text = this.keypadString;
        this.updateInputBullets();
    },
    //validateSSNForgotPwd: function() {
    //var SSN = this.getKeypadString();
    //var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    //authModule.presentationController.validateSSN(SSN);
    //},
    onSavePhonenumber: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var data = {};
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (this.view.lblPhoneNumber.text !== "") {
            data = {
                "phoneNumber": this.view.lblPhoneNumber.text
            };
            transferModulePresentationController.navigateToVerifyDetailsFromPhoneNumber(data);
        }
    },
    assignDataToForm: function(benficiaryData) {
        if (benficiaryData.phoneNumber && benficiaryData.phoneNumber !== "" && benficiaryData.phoneNumber !== null) {
            this.view.lblPhoneNumber.text = benficiaryData.phoneNumber;
            this.keypadString = benficiaryData.phoneNumber;
        } else {
            this.view.lblPhoneNumber.text = kony.i18n.getLocalizedString("kony.mb.p2p.enterPhoneNo");
            this.keypadString = "";
        }
        //this.view.lblPhoneNumber.text = (benficiaryData.phoneNumber && benficiaryData.phoneNumber !== "" && benficiaryData.phoneNumber !== null)?benficiaryData.phoneNumber:"";
    },
    bindViewError: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation("frmBenVerifyDetailsEurope");
    },
    setKeyPadActions: function() {
        var scopeObj = this;
        this.view.keypad.btnOne.onClick = function() {
            scopeObj.setKeypadChar(1);
        };
        this.view.keypad.btnTwo.onClick = function() {
            scopeObj.setKeypadChar(2);
        };
        this.view.keypad.btnThree.onClick = function() {
            scopeObj.setKeypadChar(3);
        };
        this.view.keypad.btnFour.onClick = function() {
            scopeObj.setKeypadChar(4);
        };
        this.view.keypad.btnFive.onClick = function() {
            scopeObj.setKeypadChar(5);
        };
        this.view.keypad.btnSix.onClick = function() {
            scopeObj.setKeypadChar(6);
        };
        this.view.keypad.btnSeven.onClick = function() {
            scopeObj.setKeypadChar(7);
        };
        this.view.keypad.btnEight.onClick = function() {
            scopeObj.setKeypadChar(8);
        };
        this.view.keypad.btnNine.onClick = function() {
            scopeObj.setKeypadChar(9);
        };
        this.view.keypad.btnZero.onClick = function() {
            scopeObj.setKeypadChar(0);
        };
        this.view.keypad.imgClearKeypad.onTouchEnd = function() {
            scopeObj.clearKeypadChar();
        };
        // this.view.btnDot.onClick = function() {
        //    scopeObj.setKeypadChar('.');
        // };
    }
});
define("TransferModuleEurope/frmTransfersPhoneNumberEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_dfa2d6ccf2c34e81b4ccc6d28e81067b: function AS_Form_dfa2d6ccf2c34e81b4ccc6d28e81067b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ac12af6576434eb3929c224659cfba92: function AS_Form_ac12af6576434eb3929c224659cfba92(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f89ce3215ea94c8c97202c090c2b124f: function AS_BarButtonItem_f89ce3215ea94c8c97202c090c2b124f(eventobject) {
        var self = this;
        this.onCancel();
    },
    AS_Button_dbe99a4ad1034520ba1521c72da16d89: function AS_Button_dbe99a4ad1034520ba1521c72da16d89(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_g6490ff8ab0b49638cdb0af863c330be: function AS_Button_g6490ff8ab0b49638cdb0af863c330be(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_dcbfa6fda52d42afb9b1a5e925929bd7: function AS_Button_dcbfa6fda52d42afb9b1a5e925929bd7(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_b874a30780194781b743902cd6a9c901: function AS_Button_b874a30780194781b743902cd6a9c901(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_j66da00585a548c28186a8e9a94caff9: function AS_Button_j66da00585a548c28186a8e9a94caff9(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_f54cd4d798f74ae98ba45086cbbf50b6: function AS_Button_f54cd4d798f74ae98ba45086cbbf50b6(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_e833b1c3516a426eb02d41eb6c5b288f: function AS_Button_e833b1c3516a426eb02d41eb6c5b288f(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_jf0b510478dc4f3d9121c0d59b245525: function AS_Button_jf0b510478dc4f3d9121c0d59b245525(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_f979a09590f54f1fb524be4032a533fe: function AS_Button_f979a09590f54f1fb524be4032a533fe(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_e56e668bcbc6486192e92b5cbfdc12ca: function AS_Button_e56e668bcbc6486192e92b5cbfdc12ca(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_h92566d02fa64e6b81d186208d24e691: function AS_Image_h92566d02fa64e6b81d186208d24e691(eventobject, imagesrc, issuccess) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("TransferModuleEurope/frmTransfersPhoneNumberEuropeController", ["TransferModuleEurope/userfrmTransfersPhoneNumberEuropeController", "TransferModuleEurope/frmTransfersPhoneNumberEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmTransfersPhoneNumberEuropeController");
    var controllerActions = ["TransferModuleEurope/frmTransfersPhoneNumberEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
