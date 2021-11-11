define("userfrmPFMNoteController", {
    preshow: function() {
        try {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
            } else {
                this.view.flxHeader.isVisible = true;
            }
            var navManager = applicationManager.getNavigationManager();
            var currentTransactionRecord = navManager.getCustomInfo("frmPFMEditNote");
            this.view.txtNote.text = currentTransactionRecord.transactionNotes;
            this.setFlowActions();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method updateNote
     * @return
     */
    updateNote: function() {
        try {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            var navManager = applicationManager.getNavigationManager();
            var currentTransactionRecord = navManager.getCustomInfo("frmPFMEditNote");
            var transactionRecord = {
                "transactionId": currentTransactionRecord.transactionId,
                "transactionNotes": this.view.txtNote.text,
            };
            accountMod.presentationController.updatePFMTransaction(transactionRecord, this.updateNoteSuccess.bind(this), this.updateNoteFailure.bind(this));
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method updateNoteSuccess
     * @param {} response
     * @return
     */
    updateNoteSuccess: function(response) {
        try {
            var self = this;
            var navManager = applicationManager.getNavigationManager();
            var currentTransactionRecord = navManager.getCustomInfo("frmPFMEditNote");
            var currentTransaction = navManager.getCustomInfo("frmPFMTransactionDetails");
            currentTransaction.categoryId = currentTransactionRecord.transactionId;
            currentTransaction.transactionNotes = this.view.txtNote.text;
            navManager.setCustomInfo("frmPFMTransactionDetails", currentTransaction);
            var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method updateNoteFailure
     * @param {} response
     * @return
     */
    updateNoteFailure: function(response) {
        try {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            //    kony.ui.Alert("Snap : " + JSON.stringify(response));
            if (response["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setFlowActions: function() {
        try {
            var scopeObj = this;
            this.view.btnSave.isVisible = true;
            this.view.btnSave.onClick = scopeObj.updateNote;
            this.view.customHeader.flxBack.onClick = function() {
                var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
            };
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    }
});
define("frmPFMNoteControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f1620dd876674d358e726f8ac2021b9e: function AS_Form_f1620dd876674d358e726f8ac2021b9e(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_c60d9b7973e247c58e94c00e9beae4f4: function AS_BarButtonItem_c60d9b7973e247c58e94c00e9beae4f4(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
    }
});
define("frmPFMNoteController", ["userfrmPFMNoteController", "frmPFMNoteControllerActions"], function() {
    var controller = require("userfrmPFMNoteController");
    var controllerActions = ["frmPFMNoteControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
