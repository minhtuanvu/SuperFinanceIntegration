define("ChequeManagementModule/userfrmPayeeNameController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
        this.initActions();
    },
    initActions: function() {
        this.view.btnSkip.onClick = this.skipOnClick;
        this.view.btnContinue.onClick = this.continueOnClick;
        //    this.view.customHeader.flxBack.onClick = function(){
        //    var commonBack = applicationManager.getModulesPresentationController("ChequeManagementModule");
        //    commonBack.commonFunctionForgoBack();
        //   };
        this.view.customHeader.flxBack.onClick = this.backOnClick;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    backOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  backOnClick  ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmChequeManagement");
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    postShow: function() {
        this.updateUI();
        this.textChange();
        this.view.txtRecipientName.setFocus(true);
        this.view.txtRecipientName.onTextChange = this.textChange;
    },
    updateUI: function() {
        var transObj = applicationManager.getModulesPresentationController("ChequeManagementModule");
        var objData = transObj.getTransObject();
        if (objData.payeeName === null) {
            this.view.txtRecipientName.text = "";
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        }
    },
    skipOnClick: function() {
        this.view.txtRecipientName.text = "";
        var selectedPayeeName = "";
        var payeeName = applicationManager.getModulesPresentationController("ChequeManagementModule");
        payeeName.setPayeeName(selectedPayeeName);
        var navMan = applicationManager.getModulesPresentationController("ChequeManagementModule");
        navMan.commonFunctionForNavigation("frmSCChequeType");
    },
    cancelOnClick: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.commonCancel();
    },
    textChange: function() {
        if (this.view.txtRecipientName.text == null || this.view.txtRecipientName.text == "") {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        } else {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
        }
    },
    continueOnClick: function() {
        var selectedPayeeName = this.view.txtRecipientName.text;
        var payeeName = applicationManager.getModulesPresentationController("ChequeManagementModule");
        payeeName.setPayeeName(selectedPayeeName);
        var navMan = applicationManager.getModulesPresentationController("ChequeManagementModule");
        if (scope_ChequePresentationController.isReview == true) {
            navMan.commonFunctionForNavigation("frmSCReview");
        } else {
            navMan.commonFunctionForNavigation("frmSCChequeType");
        }
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("ChequeManagementModule/frmPayeeNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b97282ba9ed24cd7b14782c318afbecd: function AS_Form_b97282ba9ed24cd7b14782c318afbecd(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_c3c6c3e79f1d48e7b9d52821bd27922d: function AS_Form_c3c6c3e79f1d48e7b9d52821bd27922d(eventobject) {
        var self = this;
        return self.postShow.call(this);
    },
    AS_Form_g3cbc0e0f3a24020a7e3c276d6d12599: function AS_Form_g3cbc0e0f3a24020a7e3c276d6d12599(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_j500db8fed964d5081d5a6776b9cbd79: function AS_BarButtonItem_j500db8fed964d5081d5a6776b9cbd79(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("ChequeManagementModule/frmPayeeNameController", ["ChequeManagementModule/userfrmPayeeNameController", "ChequeManagementModule/frmPayeeNameControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmPayeeNameController");
    var controllerActions = ["ChequeManagementModule/frmPayeeNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
