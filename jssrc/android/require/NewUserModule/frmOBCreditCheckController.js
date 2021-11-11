define("NewUserModule/userfrmOBCreditCheckController", {
    timerCounter: 0,
    currentInputModule: 'ssn',
    init: function() {
        var FormValidator = require("FormValidatorManager")
        this.fv = new FormValidator(1);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var scopeObj = this;
        this.fv.submissionView(this.view.btnSSNAccept);
        this.showENterSSN();
        //this.onCloseTnC();
        this.assignDataToForm();
        this.view.btnTnC.onClick = this.navToTermsAndConditions;
        //this.view.customHeaderTermsConditions.flxBack.onClick = this.onCloseTnC;
        this.view.keypad.btnOne.onClick = function() {
            scopeObj.setKeypadChar("1");
        };
        this.view.keypad.btnTwo.onClick = function() {
            scopeObj.setKeypadChar("2");
        };
        this.view.keypad.btnThree.onClick = function() {
            scopeObj.setKeypadChar("3");
        };
        this.view.keypad.btnFour.onClick = function() {
            scopeObj.setKeypadChar("4");
        };
        this.view.keypad.btnFive.onClick = function() {
            scopeObj.setKeypadChar("5");
        };
        this.view.keypad.btnSix.onClick = function() {
            scopeObj.setKeypadChar("6");
        };
        this.view.keypad.btnSeven.onClick = function() {
            scopeObj.setKeypadChar("7");
        };
        this.view.keypad.btnEight.onClick = function() {
            scopeObj.setKeypadChar("8");
        };
        this.view.keypad.btnNine.onClick = function() {
            scopeObj.setKeypadChar("9");
        };
        this.view.keypad.btnZero.onClick = function() {
            scopeObj.setKeypadChar("0");
        };
        this.view.keypad.imgClearKeypad.onTouchEnd = function() {
            scopeObj.clearKeypadChar("");
        };
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onClose;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    navToTermsAndConditions: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmTermsAndConditions");
    },
    assignDataToForm: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        var NUOData = NUOMod.presentationController.getUserData();
        var ssn = (NUOData.ssn && NUOData.ssn !== "" && NUOData.ssn !== null) ? NUOData.ssn : "";
        var previousForm = NUOMod.presentationController.previousFormCheck;
        /*if(previousForm !== "frmOBDependents")
        {
          ssn = "";
        }*/
        if (ssn !== "") {
            //var ssnData = ssn.split("-");
            //ssn = ssnData[0]+""+ssnData[1]+""+ssnData[2];
            for (var i = 0; i < ssn.length; i++) {
                this.setKeypadChar(ssn.charAt(i));
            }
        } else {
            this.keypadString = "";
            this.view.lblSSN.text = "";
            // this.updateInputBullets();
        }
        NUOMod.presentationController.previousFormCheck = "";
    },
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onClose: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.onClose();
    },
    onCloseTnC: function() {
        this.view.flxKeypad.isVisible = true;
        this.view.flxMainContainer.isVisible = true;
        this.view.flxHeader.isVisible = true;
        this.view.flxTermsConditions.isVisible = false;
    },
    showTermsAndConditions: function() {
        var scope = this;
        this.view.flxKeypad.isVisible = false;
        this.view.flxMainContainer.isVisible = false;
        this.view.flxHeader.isVisible = false;
        this.view.flxTermsConditions.isVisible = true;
    },
    showENterSSN: function() {
        this.view.flxResult.isVisible = false;
        this.view.flxMainContainer.isVisible = true;
        this.view.flxKeypad.isVisible = true;
        var scope = this;
        this.keypadString = '';
        this.currentInputModule = 'ssn';
        // this.updateInputBullets();
        //     this.setHeaderData(null, function(){
        //       var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        //       NUOMod.presentationController.onClose();
        //     }, 'LOGOUT', 'CREDIT CHECK');
        //     this.view.btnSSNReject.onClick = function () {
        //       var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        //       nuoMod.presentationController.getCurrentState();
        //     };
        this.view.btnSSNAccept.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var data = {
                "ssn": scope.keypadString,
                "informationType": "PersonalInfo"
            };
            var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
            NUOMod.presentationController.updateNewUserModel(data);
            NUOMod.presentationController.userNavigation = data.informationType;
            NUOMod.presentationController.createPersonalInfo();
        };
    },
    storeSSNData: function() {
        var scope = this;
        var data = {
            "ssn": scope.keypadString,
            "informationType": "PersonalInfo"
        };
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
    },
    updateInputBullets: function() {
        var scope = this;
        var updateBullets = {
            'ssn': function() {
                scope.updateInputBulletsOf('___-__-____', "flxInputSSN");
            }
        };
        updateBullets[this.currentInputModule]();
    },
    updateInputBulletsOf: function(dummyString, inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        var scope = this;
        //if (this.keypadString.length === 11 && this.currentInputModule === 'ssn') return;
        this.keypadString = this.keypadString + char;
        var manageString = {
            'ssn': function() {
                /*if(scope.keypadString.length===3||scope.keypadString.length===6){
                  scope.keypadString+='-';
                }*/
            }
        };
        manageString[this.currentInputModule]();
        //  this.updateInputBullets();
        this.fv.checkSSNLength(this.keypadString);
        this.view.lblSSN.text = this.keypadString;
        this.storeSSNData();
    },
    clearKeypadChar: function() {
        var scope = this;
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            //  this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            var manageString = {
                'ssn': function() {
                    if (scope.keypadString[scope.keypadString.length - 1] === '-') {
                        scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length - 2);
                    } else {
                        scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length - 1);
                    }
                }
            };
            manageString[this.currentInputModule]();
            //this.updateInputBullets();
        }
        this.fv.checkSSNLength(this.keypadString);
        this.view.lblSSN.text = this.keypadString;
        this.storeSSNData();
    },
    setHeaderData: function(backAction, cancelAction, cancelTitle, title) {
        this.view.customHeader.lblLocateUs.text = title;
        if (cancelAction !== null) {
            this.view.customHeader.btnRight.onClick = cancelAction;
            this.view.customHeader.btnRight.isVisible = true;
            this.view.customHeader.btnRight.text = cancelTitle;
        } else {
            this.view.customHeader.btnRight.isVisible = false;
        }
        if (backAction !== null) {
            this.view.customHeader.flxBack.onClick = backAction;
            this.view.customHeader.flxBack.isVisible = true;
        } else {
            this.view.customHeader.flxBack.isVisible = false;
        }
    },
    showResult: function(isSuccess, title, subTitle, btnContinueAction, btnCancelAction, btnCallNowAction) {
        this.view.flxResult.isVisible = true;
        this.view.flxMainContainer.isVisible = false;
        this.view.flxKeypad.isVisible = false;
        if (isSuccess) {
            this.view.imgResult.src = "confirmation.png";
        } else {
            this.view.imgResult.src = "error.png";
        }
        this.view.rtxTitle.text = title;
        this.view.lblSubTitle.text = subTitle;
        if (subTitle == '') {
            this.view.lblSubTitle.isVisible = false;
        } else {
            this.view.lblSubTitle.isVisible = true;
        }
        if (btnContinueAction != null) {
            this.view.btnContinueResult.onClick = btnContinueAction;
            this.view.btnContinueResult.isVisible = true;
        } else {
            this.view.btnContinueResult.isVisible = false
        }
        if (btnCancelAction != null) {
            this.view.btnCancelResult.onClick = btnCancelAction;
            this.view.btnCancelResult.isVisible = true;
        } else {
            this.view.btnCancelResult.isVisible = false;
        }
        if (btnCallNowAction != null) {
            this.view.flxCallNow.onClick = btnCallNowAction();
            this.view.flxCallNow.isVisible = true;
        } else {
            this.view.flxCallNow.isVisible = false;
        }
    },
    showJustamoment: function() {
        var scopeObj = this;
        this.view.flxMainContainer.isVisible = false;
        this.view.flxKeypad.isVisible = false;
        this.view.imgResult.src = "confirmation.png";
        this.view.rtxTitle.text = "Just a moment";
        this.timerCounter = parseInt(this.timerCounter) + 3;
        var timerId = "timerPopupSuccess" + this.timerCounter;
        this.view.flxResult.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxResult.setVisibility(false);
        }, 3, false);
        scopeObj.showSuccess();
    },
    showSignature: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmOBSignature");
    },
    showSuccess: function() {
        var scopeObj = this;
        this.view.flxMainContainer.isVisible = false;
        this.view.flxKeypad.isVisible = false;
        this.view.imgResult.src = "confirmation.png";
        this.view.rtxTitle.text = "Successfully Verified";
        this.timerCounter = parseInt(this.timerCounter) + 3;
        var timerId = "timerPopupSuccess" + this.timerCounter;
        this.view.flxResult.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxResult.setVisibility(false);
        }, 3, false);
        scopeObj.showSignature();
    },
    ssnAccept: function() {
        var ssn = this.keypadString;
        var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        nuoMod.presentationController.acceptCreditCheck(ssn);
    }
});
define("NewUserModule/frmOBCreditCheckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b3bb32f78e22426e8f5794b84c539137: function AS_Form_b3bb32f78e22426e8f5794b84c539137(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ddf2c6d5109441e9820dbd14406f2175: function AS_Form_ddf2c6d5109441e9820dbd14406f2175(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_efcf8e99fff742aca19097351d817362: function AS_BarButtonItem_efcf8e99fff742aca19097351d817362(eventobject) {
        var self = this;
        this.onClose();
    },
    AS_Button_ad318f912a5642f4bf7096a0174f3e1b: function AS_Button_ad318f912a5642f4bf7096a0174f3e1b(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_jcc1edecd1814f27b85b87c06d6a86c9: function AS_Button_jcc1edecd1814f27b85b87c06d6a86c9(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_j64622c5317a428aa087faa0c479d14b: function AS_Button_j64622c5317a428aa087faa0c479d14b(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_i51859e00a4543618695ebb5a2a16a6f: function AS_Button_i51859e00a4543618695ebb5a2a16a6f(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_c2562c12d9654920a56aa023aef0aecb: function AS_Button_c2562c12d9654920a56aa023aef0aecb(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e966c5957b58463b8fcf56116ae15c33: function AS_Button_e966c5957b58463b8fcf56116ae15c33(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_fe8b04f913e24664ac3f6621d9f15e33: function AS_Button_fe8b04f913e24664ac3f6621d9f15e33(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_e66b833502a647ed82ebc09af7864aec: function AS_Button_e66b833502a647ed82ebc09af7864aec(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_baf938f6644f408889c7065f64f29f0e: function AS_Button_baf938f6644f408889c7065f64f29f0e(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_d30ba0eb7c694275afead1bc25cf3dc7: function AS_Button_d30ba0eb7c694275afead1bc25cf3dc7(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_d96c2b3ec7f24caabf4a0d4b800a4af6: function AS_Image_d96c2b3ec7f24caabf4a0d4b800a4af6(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("NewUserModule/frmOBCreditCheckController", ["NewUserModule/userfrmOBCreditCheckController", "NewUserModule/frmOBCreditCheckControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBCreditCheckController");
    var controllerActions = ["NewUserModule/frmOBCreditCheckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
