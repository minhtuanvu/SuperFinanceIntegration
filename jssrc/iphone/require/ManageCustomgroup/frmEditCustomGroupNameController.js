define("ManageCustomgroup/userfrmEditCustomGroupNameController", {
    timerCounter: 0,
    /*
     *init is called when the form is loaded , initialisation happen here
     *
     */
    init: function() {
        try {
            kony.print("Entered init");
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
            this.view.preShow = this.preShowForm;
            this.view.postShow = this.postShowForm;
        } catch (e) {
            kony.print("Exception in init::" + e);
        }
    },
    //preShowForm is called when the form is pre loaded 
    preShowForm: function() {
        try {
            kony.print("Entered preShowForm");
            this.initActions();
            this.resetForm();
        } catch (e) {
            kony.print("Exception in preShowForm::" + e);
        }
    },
    //postShowForm is called when the form is post loaded
    postShowForm: function() {
        try {
            kony.print("Entered postShowForm");
        } catch (e) {
            kony.print("Exception in postShowForm::" + e);
        }
    },
    /*
     *initActions is to bind the actions form widgets
     *
     */
    initActions: function() {
        try {
            kony.print("Entered initActions");
            this.view.btnSaveandUpdate.onClick = this.onclickSaveandUpdate;
            this.view.txtCustomviewname.onTextChange = this.editCustomNameValidation;
            this.view.customHeader.flxBack.onClick = this.navToPrevForm;
            this.view.onDeviceBack = this.navToPrevForm;
        } catch (e) {
            kony.print("Exception in initActions" + e);
        }
    },
    dummyFunction: function() {},
    editCustomNameValidation: function() {
        try {
            kony.print("entered navToPrevForm");
            if (this.view.txtCustomviewname.text === "" || this.view.txtCustomviewname.text === null) {
                this.view.btnSaveandUpdate.setEnabled(false);
                this.view.btnSaveandUpdate.skin = "sknBtnOnBoardingInactive";
            } else {
                this.view.btnSaveandUpdate.setEnabled(true);
                this.view.btnSaveandUpdate.skin = "sknBtn0095e4RoundedffffffSSP26px";
            }
        } catch (e) {
            kony.print("exception navToPrevForm" + e);
        }
    },
    /*
       *resetForm is to reset the entire form widgets

       */
    resetForm: function() {
        try {
            kony.print("Entered resetForm");
            var navMan = applicationManager.getNavigationManager();
            var customviewName = navMan.getCustomInfo("customViewDetails");
            this.view.txtCustomviewname.text = customviewName.customviewName;
            this.view.btnSaveandUpdate.setEnabled(false);
            this.view.btnSaveandUpdate.skin = "sknBtnOnBoardingInactive";
            this.view.flxPopup.isVisible = false;
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
                this.view.flxeditcustomerdetails.top = "0dp";
                this.view.flxeditcustomerdetails.height = "100%";
                this.view.title = "Edit Custom View Name"; //kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Approvals"); //"Approvals";//
            } else {
                this.view.flxHeader.isVisible = true;
                this.view.customHeader.imgBack.src = "backbutton.png";
                this.view.customHeader.lblLocateUs.text = "Edit Custom View Name"; //kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Approvals"); //"Approvals";//
                this.view.flxeditcustomerdetails.top = "56dp";
                this.view.flxeditcustomerdetails.height = "93%";
            }
        } catch (e) {
            kony.print("Exception in resetForm" + e);
        }
    },
    onclickSaveandUpdate: function() {
        try {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var navMan = applicationManager.getNavigationManager();
            var customViewAccountid = navMan.getCustomInfo("CustomviewSelectedAccountIds");
            var customviewID = navMan.getCustomInfo("customViewDetails");
            var customViewName = this.view.txtCustomviewname.text;
            var inputParams = {
                "id": customviewID.id,
                "name": customViewName,
                "accountIds": customViewAccountid
            };
            var screenName = "frmEditCustomGroupName";
            var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AccountModule');
            accountModule.presentationController.updateCustomview(inputParams, screenName);
        } catch (e) {
            kony.print("exception navToEditCustomView" + e);
        }
    },
    updateCustomViewNameEditSuccessCallBack: function(response) {
        try {
            if (!kony.sdk.isNullOrUndefined(response)) {
                var navManager = applicationManager.getNavigationManager();
                var accountIds = kony.sdk.isNullOrUndefined(response.accountIds) ? " " : response.accountIds;
                var json = {
                    "customviewName": kony.sdk.isNullOrUndefined(response.name) ? "-" : response.name,
                    "id": response.id,
                    "accountIds": kony.sdk.isNullOrUndefined(response.accountIds) ? "-" : response.accountIds,
                    "customerId": kony.sdk.isNullOrUndefined(response.customerId) ? "-" : response.customerId,
                };
                var keyvalue = "showDonPopup";
                navManager.setCustomInfo("CustomviewSelectedAccountIds", accountIds);
                navManager.setCustomInfo("customViewDetails", json);
                navManager.setCustomInfo("formFlow", keyvalue);
                navManager.navigateTo("frmCustomView");
            }
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } catch (er) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
    },
    /*
     *navToPrevForm - This function is to called to navigate back to prev form
     *
     */
    navToPrevForm: function() {
        try {
            kony.print("entered navToPrevForm");
            var navMan = applicationManager.getNavigationManager();
            navMan.navigateTo("frmCustomView");
        } catch (e) {
            kony.print("exception navToPrevForm" + e);
        }
    },
    fetchErrorcallBack: function(response) {
        try {
            if (!kony.sdk.isNullOrUndefined(response)) {
                var scopeObj = this;
                var errorResponse = response.errorMessage;
                this.view.flxPopup.customPopup.lblPopup.text = errorResponse;
                this.timerCounter = parseInt(this.timerCounter) + 1;
                var timerId = "timerPopupError" + this.timerCounter;
                this.view.flxPopup.skin = "sknFlxf54b5e";
                this.view.customPopup.imgPopup.src = "errormessage.png";
                this.view.flxPopup.setVisibility(true);
                kony.timer.schedule(timerId, function() {
                    scopeObj.view.flxPopup.setVisibility(false);
                }, 1.5, false);
            }
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } catch (error) {
            kony.print("frmACHTransactions fetchErrorcallBack-->" + error);
        }
    },
});
define("ManageCustomgroup/frmEditCustomGroupNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d95e2573561e40b6a1a89c1ae173a3d2: function AS_Form_d95e2573561e40b6a1a89c1ae173a3d2(eventobject) {
        var self = this;
        this.init();
    },
    AS_BarButtonItem_b0152d112c554d31b6f2e0249570afaa: function AS_BarButtonItem_b0152d112c554d31b6f2e0249570afaa(eventobject) {
        var self = this;
        this.navToPrevForm();
    }
});
define("ManageCustomgroup/frmEditCustomGroupNameController", ["ManageCustomgroup/userfrmEditCustomGroupNameController", "ManageCustomgroup/frmEditCustomGroupNameControllerActions"], function() {
    var controller = require("ManageCustomgroup/userfrmEditCustomGroupNameController");
    var controllerActions = ["ManageCustomgroup/frmEditCustomGroupNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
