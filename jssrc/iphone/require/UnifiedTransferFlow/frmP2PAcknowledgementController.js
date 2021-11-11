define("UnifiedTransferFlow/userfrmP2PAcknowledgementController", {
    onNavigate: function(data) {
        var scope = this;
        if (kony.os.deviceInfo().name === "iPhone") {
            var titleBarAttributes = this.view.titleBarAttributes;
            titleBarAttributes["shadowImage"] = "transparentbox.png";
            this.view.titleBarAttributes = titleBarAttributes;
            this.view.setBackgroundImageForNavbar({
                "image": "transparentbox.png",
                "barMetrics": constants.BAR_METRICS_DEFAULT
            });
        }
        var navMan = applicationManager.getNavigationManager();
        data = navMan.getCustomInfo("frmP2PAcknowledgement");
        scope.initActions();
        scope.view.Acknowledgement.setContext(data);
    },
    initActions: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        scope.view.flxAcknowledgement.onScrolling = function() {
            scope.iPhoneHeaderHandler();
        };
        scope.view.Acknowledgement.onError = function(error) {
            alert(JSON.stringify(error));
        };
        scope.view.Acknowledgement.contextualActionButtonOnClick = function(data, context) {
            //alert(JSON.stringify(data));
            if (data === "NewTransfer") {
                //         var ntf = new kony.mvc.Navigation("frmP2PTransferType");
                //         ntf.navigate();
                navMan.navigateTo("UnifiedTransferFlow/frmP2PTransferType");
            }
            if (data === "btnTryAgain") {
                //         var ntf = new kony.mvc.Navigation("frmP2PTransferType");
                //         ntf.navigate();
                navMan.navigateTo("UnifiedTransferFlow/frmP2PTransferType");
            }
            if (data === "SaveNewPayee") {
                //         var ntf = new kony.mvc.Navigation("frmNewPayee");
                //         ntf.navigate(context);
                navMan.setCustomInfo("frmNewPayee", context);
                navMan.navigateTo("UnifiedTransferFlow/frmNewPayee");
            }
            if (data === "TransferActivities") {
                var transMod = applicationManager.getModulesPresentationController("TransactionModule");
                if (configManager.getDeploymentGeography() === 'EUROPE') {
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
                    transferModPresentationController.clearEuropeFlowAtributes();
                    navMan.setEntryPoint("europeTransferFlow", "frmTransferActivitiesTransfersEurope");
                    navMan.navigateTo("frmTransferActivitiesTransfersEurope");
                } else {
                    var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                    moneyMovementModule.clearMMFlowAtributes();
                    navMan.setEntryPoint("centralmoneymovement", "frmTransferActivitiesTransfers");
                    navMan.navigateTo("frmTransferActivitiesTransfers");
                }
            }
        };
        scope.view.Acknowledgement.getBtnEntitlement = function(btnId, data, callback) {
            callback(true);
        };
        scope.view.Acknowledgement.onBack = function() {
            alert("Back Navigation");
        };
    },
    iPhoneHeaderHandler: function() {
        var scope = this;
        if (this.view.flxAcknowledgement.contentOffsetMeasured.y > 50) {
            scope.view.title = "Acknowledgement";
        } else if (this.view.flxAcknowledgement.contentOffsetMeasured.y < 45) {
            scope.view.title = "";
        }
    },
});
define("UnifiedTransferFlow/frmP2PAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b3106af293e84b349a306bbf1a9ca90f: function AS_Form_b3106af293e84b349a306bbf1a9ca90f(eventobject) {
        var self = this;
        kony.print("Back Navigation Disabled");
    }
});
define("UnifiedTransferFlow/frmP2PAcknowledgementController", ["UnifiedTransferFlow/userfrmP2PAcknowledgementController", "UnifiedTransferFlow/frmP2PAcknowledgementControllerActions"], function() {
    var controller = require("UnifiedTransferFlow/userfrmP2PAcknowledgementController");
    var controllerActions = ["UnifiedTransferFlow/frmP2PAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
