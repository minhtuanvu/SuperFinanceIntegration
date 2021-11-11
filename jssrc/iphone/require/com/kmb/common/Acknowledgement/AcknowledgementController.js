define("com/kmb/common/Acknowledgement/userAcknowledgementController", function() {
    return {
        mainData: null,
        setUpData: function(data) {
            this.mainData = data;
            this.initActions();
            this.setupUI();
        },
        initActions: function() {
            var scope = this;
            scope.view.btnDashboard.onClick = this.mainData.functionToCall;
            scope.view.btnNewTransfer.onClick = this.mainData.functionToCallTwo;
            scope.view.btnTryAgain.onClick = this.mainData.functionToCallError;
        },
        setupUI: function() {
            var scope = this;
            switch (this.mainData.flow) {
                case 'transfers':
                    scope.setupUIForTransfer();
                    break;
                case 'noTransfers':
                    scope.setupUIForNonTransfer();
                    break;
                case 'error':
                    scope.setupUIForError();
                    break;
            }
        },
        setupUIForTransfer: function() {
            if (this.mainData.isScheduled === "0") this.view.lblSuccessMessage.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.TransferCompleted");
            else this.view.lblSuccessMessage.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.TransferScheduled");
            this.view.flxSuccessTransaction.isVisible = true;
            this.view.flxSuccessNonTransaction.isVisible = false;
            this.view.flxError.isVisible = false;
            this.view.flxButtons.isVisible = true;
            this.setSegmentData(this.mainData.transferData);
        },
        setSegmentData: function(data) {
            var scope = this;
            this.view.segDetails.widgetDataMap = {
                lblTitle: "property",
                lblDetails: "value",
                lblExtras: "valueTwo"
            };
            this.view.segDetails.setData(data);
        },
        setupUIForNonTransfer: function() {},
        setupUIForError: function() {
            this.view.flxError.isVisible = true;
            this.view.flxSuccessTransaction.isVisible = false;
            this.view.flxSuccessNonTransaction.isVisible = false;
            this.view.lblTitle.text = this.mainData.errMessage;
            this.view.lblMessage.text = this.mainData.transferErrorMessage;
        }
    };
});
define("com/kmb/common/Acknowledgement/AcknowledgementControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/Acknowledgement/AcknowledgementController", ["com/kmb/common/Acknowledgement/userAcknowledgementController", "com/kmb/common/Acknowledgement/AcknowledgementControllerActions"], function() {
    var controller = require("com/kmb/common/Acknowledgement/userAcknowledgementController");
    var actions = require("com/kmb/common/Acknowledgement/AcknowledgementControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
