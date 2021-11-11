define("ManageCardsModule/userfrmCardMngBillAddressController", {
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
            this.renderTitleBar();
            this.view.tbxSearch.onTouchStart = this.tbxSearchOnTouchEnd;
            this.view.btnSave.onClick = this.btnSaveOnClick;
            this.view.customSearchbox.btnCancel.onClick = this.tbxSearchOnTouchEnd;
            this.view.flxMainContainer.showFadingEdges = false;
            this.view.flxMainContainer.skin = "slfSbox";
            this.view.btnSave.setEnabled(false);
            this.view.btnSave.skin = "sknBtne9e9e9a0a0a0SSReg30px";
            this.view.txtAddressLineOne.onTextChange = this.onTextChange();
            this.view.txtAddressLineTwo.onTextChange = this.onTextChange();
            this.view.txtCity.onTextChange = this.onTextChange();
            this.view.txtCountry.onTextChange = this.onTextChange();
            this.view.txtState.onTextChange = this.onTextChange();
            this.view.txtZipCode.onTextChange = this.onTextChange();
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    tbxSearchOnTouchEnd: function() {
        try {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                if (this.view.flxSearchAddress.isVisible === true) {
                    this.view.flxSearchAddress.isVisible = false;
                    this.view.flxMainContainer.isVisible = true;
                    this.view.flxSearch.isVisible = true;
                    this.view.flxMainContainer.skin = "slfSbox";
                    this.view.flxMainContainer.top = "0dp";
                } else {
                    this.view.flxSearch.isVisible = false;
                    this.view.flxMainContainer.top = "40dp";
                    this.view.flxSearchAddress.isVisible = true;
                    this.view.flxMainContainer.skin = "sknFlxScrlffffff";
                    this.view.flxMainContainer.isVisible = false;
                    this.view.customSearchbox.tbxSearch.setFocus(true);
                }
            } else {
                if (this.view.flxSearchAddress.isVisible === true) {
                    this.view.flxSearchAddress.isVisible = false;
                    this.view.flxMainContainer.isVisible = true;
                    this.view.flxMainContainer.skin = "slfSbox";
                    this.view.flxSearch.isVisible = true;
                    this.view.flxHeader.isVisible = true;
                    this.view.flxMainContainer.top = "56dp";
                } else {
                    this.view.flxSearch.isVisible = false;
                    this.view.flxHeader.isVisible = false;
                    this.view.flxMainContainer.top = "40dp";
                    this.view.flxMainContainer.skin = "sknFlxScrlffffff";
                    this.view.flxSearchAddress.isVisible = true;
                    this.view.flxMainContainer.isVisible = false;
                    this.view.customSearchbox.tbxSearch.setFocus(true);
                }
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    },
    btnSaveOnClick: function() {
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.commonFunctionForNavigation("frmCardManageDetails");
    },
    onTextChange: function() {
        try {
            if (this.view.txtAddressLineOne.text.length > 0 && this.view.txtAddressLineTwo.text.length > 0 && this.view.txtCity.text.length > 0 && this.view.txtCountry.text.length > 0 && this.view.txtState.text.length > 0 && this.view.txtZipCode.text.length > 0) {
                this.view.btnSave.setEnabled(true);
                this.view.btnSave.skin = "sknBtn0095e4RoundedffffffSSP26px";
            } else {
                this.view.btnSave.setEnabled(false);
                this.view.btnSave.skin = "sknBtne9e9e9a0a0a0SSReg30px";
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    }
});
define("ManageCardsModule/frmCardMngBillAddressControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c986b1fb52e3472bb79402226da7ef31: function AS_Form_c986b1fb52e3472bb79402226da7ef31(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("ManageCardsModule/frmCardMngBillAddressController", ["ManageCardsModule/userfrmCardMngBillAddressController", "ManageCardsModule/frmCardMngBillAddressControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmCardMngBillAddressController");
    var controllerActions = ["ManageCardsModule/frmCardMngBillAddressControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
