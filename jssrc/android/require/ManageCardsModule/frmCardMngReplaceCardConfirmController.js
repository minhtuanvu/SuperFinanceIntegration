define("ManageCardsModule/userfrmCardMngReplaceCardConfirmController", {
    titleText: '',
    objReturn: null,
    loggerManager: applicationManager.getLoggerManager(),
    init: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    preShow: function() {
        try {
            this.view.btnSubmit.onClick = this.btnSubmitOnClick.bind(this);
            this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
            this.view.customHeader.btnRight.onClick = this.cancelOnClick;
            this.view.flxAddress1.onClick = this.addRadioOnclick1;
            this.view.flxAddress2.onClick = this.addRadioOnclick2;
            this.view.flxAddress3.onClick = this.addRadioOnclick3;
            var navManager = applicationManager.getNavigationManager();
            var cardData = navManager.getCustomInfo("frmCardMngReplaceCardConfirm");
            this.cardData = cardData;
            if (cardData === undefined) {
                var newObj = {
                    "view": "none"
                };
                cardData = newObj;
            }
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard");
            //this.renderViewForReplaceCard(cardData);
            this.objReturn = cardData;
            this.view.txtNote.text = this.cardData.Reason;
            this.view.btnSubmit.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnSubmit.setEnabled(false);
            //Setting Addresses
            var address1 = "";
            var address2 = "";
            var address3 = "";
            if (cardData.hasOwnProperty("Addresses")) {
                var addressesOfUsers = cardData.Addresses;
                var noOfRegisteredAddresses = addressesOfUsers.length;
                if (noOfRegisteredAddresses === 0) {
                    this.view.lblAddress1.text = kony.i18n.getLocalizedString("kony.mb.cardManage.NoRegisteredAddress");
                    this.view.imgRadioAddress1.src = "radiobuttoninactive.png";
                    this.view.imgRadioAddress1.setVisibility(false);
                    this.view.lblAddress2.setVisibility(false);
                    this.view.imgRadioAddress2.setVisibility(false);
                    this.view.flxSeperatorWrapper3.setVisibility(false);
                    this.view.lblAddress3.setVisibility(false);
                    this.view.imgRadioAddress3.setVisibility(false);
                    this.view.flxSeperatorWrapper4.setVisibility(false);
                    this.view.flxMainContainer.forceLayout();
                } else if (noOfRegisteredAddresses === 1) {
                    address1 = addressesOfUsers[0].AddressLine1 + ", " + addressesOfUsers[0].AddressLine2 + ", " + addressesOfUsers[0].CityName + ", " + addressesOfUsers[0].CountryName + ", " + addressesOfUsers[0].ZipCode;
                    this.view.lblAddress1.text = address1;
                    this.view.imgRadioAddress1.setVisibility(true);
                    this.view.imgRadioAddress1.src = "radiobuttoninactive.png";
                    this.view.lblAddress2.setVisibility(false);
                    this.view.imgRadioAddress2.setVisibility(false);
                    this.view.flxSeperatorWrapper3.setVisibility(false);
                    this.view.lblAddress3.setVisibility(false);
                    this.view.imgRadioAddress3.setVisibility(false);
                    this.view.flxSeperatorWrapper4.setVisibility(false);
                    this.view.flxMainContainer.forceLayout();
                } else if (noOfRegisteredAddresses === 2) {
                    address1 = addressesOfUsers[0].AddressLine1 + ", " + addressesOfUsers[0].AddressLine2 + ", " + addressesOfUsers[0].CityName + ", " + addressesOfUsers[0].CountryName + ", " + addressesOfUsers[0].ZipCode;
                    this.view.lblAddress1.text = address1;
                    address2 = addressesOfUsers[1].AddressLine1 + ", " + addressesOfUsers[1].AddressLine2 + ", " + addressesOfUsers[1].CityName + ", " + addressesOfUsers[1].CountryName + ", " + addressesOfUsers[1].ZipCode;
                    this.view.lblAddress2.text = address2;
                    this.view.imgRadioAddress1.setVisibility(true);
                    this.view.imgRadioAddress1.src = "radiobuttoninactive.png";
                    this.view.imgRadioAddress2.setVisibility(true);
                    this.view.imgRadioAddress2.src = "radiobuttoninactive.png";
                    this.view.lblAddress3.setVisibility(false);
                    this.view.imgRadioAddress3.setVisibility(false);
                    this.view.flxSeperatorWrapper4.setVisibility(false);
                    this.view.flxMainContainer.forceLayout();
                } else {
                    address1 = addressesOfUsers[0].AddressLine1 + ", " + addressesOfUsers[0].AddressLine2 + ", " + addressesOfUsers[0].CityName + ", " + addressesOfUsers[0].CountryName + ", " + addressesOfUsers[0].ZipCode;
                    this.view.lblAddress1.text = address1;
                    address2 = addressesOfUsers[1].AddressLine1 + ", " + addressesOfUsers[1].AddressLine2 + ", " + addressesOfUsers[1].CityName + ", " + addressesOfUsers[1].CountryName + ", " + addressesOfUsers[1].ZipCode;
                    this.view.lblAddress2.text = address2;
                    address3 = addressesOfUsers[2].AddressLine1 + ", " + addressesOfUsers[2].AddressLine2 + ", " + addressesOfUsers[2].CityName + ", " + addressesOfUsers[2].CountryName + ", " + addressesOfUsers[2].ZipCode;
                    this.view.lblAddress3.text = address3;
                    this.view.imgRadioAddress1.setVisibility(true);
                    this.view.imgRadioAddress1.src = "radiobuttoninactive.png";
                    this.view.imgRadioAddress2.setVisibility(true);
                    this.view.imgRadioAddress2.src = "radiobuttoninactive.png";
                    this.view.imgRadioAddress3.setVisibility(true);
                    this.view.imgRadioAddress3.src = "radiobuttoninactive.png";
                    this.view.flxMainContainer.forceLayout();
                }
            } else {
                this.view.lblAddress1.text = kony.i18n.getLocalizedString("kony.mb.cardManage.NoRegisteredAddress");
                this.view.imgRadioAddress1.src = "radiobuttoninactive.png";
                this.view.imgRadioAddress1.setVisibility(false);
                this.view.lblAddress2.setVisibility(false);
                this.view.imgRadioAddress2.setVisibility(false);
                this.view.flxSeperatorWrapper3.setVisibility(false);
                this.view.lblAddress3.setVisibility(false);
                this.view.imgRadioAddress3.setVisibility(false);
                this.view.flxSeperatorWrapper4.setVisibility(false);
                this.view.flxMainContainer.forceLayout();
            }
            //this.view.forceLayout();
            this.renderTitleBar();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    cancelOnClick: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var frmData = {
                "isMainScreen": false
            };
            navManager.setCustomInfo("frmCardManageHome", frmData);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.showCardsHome();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    renderTitleBar: function() {
        try {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.flxHeader.setVisibility(false);
                if ((this.titleText !== null) && (this.titleText !== '')) {
                    this.view.title = this.titleText;
                }
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    btnSubmitOnClick: function() {
        try {
            var addressSelected = "";
            if (this.view.imgRadioAddress1.src === "radiobtn.png") {
                addressSelected = this.view.lblAddress1.text;
            } else if (this.view.imgRadioAddress2.src === "radiobtn.png") {
                addressSelected = this.view.lblAddress2.text;
            } else {
                addressSelected = this.view.lblAddress3.text;
            }
            this.loggerManager.log("####Selected Address = " + addressSelected);
            applicationManager.getPresentationUtility().showLoadingScreen();
            this.updateCurrentCard();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    addRadioOnclick1: function() {
        try {
            if (this.view.lblAddress1.text != kony.i18n.getLocalizedString("kony.mb.cardManage.NoRegisteredAddress")) {
                this.view.imgRadioAddress1.src = "radiobtn.png";
                this.view.imgRadioAddress2.src = "radiobuttoninactive.png";
                this.view.imgRadioAddress3.src = "radiobuttoninactive.png";
                this.view.btnSubmit.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnSubmit.setEnabled(true);
                this.view.flxMainContainer.forceLayout();
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    addRadioOnclick2: function() {
        try {
            this.view.imgRadioAddress2.src = "radiobtn.png";
            this.view.imgRadioAddress1.src = "radiobuttoninactive.png";
            this.view.imgRadioAddress3.src = "radiobuttoninactive.png";
            this.view.btnSubmit.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnSubmit.setEnabled(true);
            this.view.flxMainContainer.forceLayout();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    addRadioOnclick3: function() {
        try {
            this.view.imgRadioAddress3.src = "radiobtn.png";
            this.view.imgRadioAddress1.src = "radiobuttoninactive.png";
            this.view.imgRadioAddress2.src = "radiobuttoninactive.png";
            this.view.btnSubmit.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnSubmit.setEnabled(true);
            this.view.flxMainContainer.forceLayout();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    updateCurrentCard: function() {
        try {
            delete this.cardData.view;
            var updateCardDetails = {
                "cardId": this.cardData.cardId,
                "Action": this.cardData.Action,
                "Reason": this.view.txtNote.text
            };
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.updateCardData(updateCardDetails);
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    //   	updateCardSuccess : function(response){
    //       try{
    //         var navManager = applicationManager.getNavigationManager();
    //         var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
    //         manageCardsModule.presentationController.showCardsHome();
    //       }
    //       catch(err) {
    //         applicationManager.getPresentationUtility().dismissLoadingScreen();
    //         throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    //       }
    //     },
    // 	updateCardFailure : function(response){
    //       try{
    //         applicationManager.getPresentationUtility().dismissLoadingScreen();
    //         if(response["isServerUnreachable"])
    //           applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
    //         else{
    //           applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.cardManage.failUpdateCard"));
    //         }
    //       }
    //       catch(err) {
    //         applicationManager.getPresentationUtility().dismissLoadingScreen();
    //         throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    //       }
    //     },
    /*renderViewForReplaceCard:function(){
        this.view.flxCallCusCare.setVisibility(false);
        this.view.flxSeperator1.setVisibility(false);
    },*/
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
});
define("ManageCardsModule/frmCardMngReplaceCardConfirmControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g982769a1a044336be718cad49016920: function AS_Form_g982769a1a044336be718cad49016920(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_eff24c9d8c094f3680dbbc8874c6177f: function AS_Form_eff24c9d8c094f3680dbbc8874c6177f(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_bc730c7e59824dd58884182d3dbce79e: function AS_BarButtonItem_bc730c7e59824dd58884182d3dbce79e(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("ManageCardsModule/frmCardMngReplaceCardConfirmController", ["ManageCardsModule/userfrmCardMngReplaceCardConfirmController", "ManageCardsModule/frmCardMngReplaceCardConfirmControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmCardMngReplaceCardConfirmController");
    var controllerActions = ["ManageCardsModule/frmCardMngReplaceCardConfirmControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
