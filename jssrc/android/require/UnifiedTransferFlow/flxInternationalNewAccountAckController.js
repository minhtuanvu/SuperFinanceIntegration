define("UnifiedTransferFlow/userflxInternationalNewAccountAckController", {
    onNavigate: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        var data = navMan.getCustomInfo("flxInternationalNewAccountAck");
        if (kony.os.deviceInfo().name === "iPhone") {
            var titleBarAttributes = this.view.titleBarAttributes;
            titleBarAttributes["shadowImage"] = "transparentbox.png";
            this.view.titleBarAttributes = titleBarAttributes;
            this.view.setBackgroundImageForNavbar({
                "image": "transparentbox.png",
                "barMetrics": constants.BAR_METRICS_DEFAULT
            });
        }
        scope.initActions();
        scope.view.Acknowledgement.setContext(data);
    },
    initActions: function() {
        var scope = this;
        this.view.flxInternationalAckMainContainer.onScrolling = function() {
            scope.iPhoneHeaderHandler();
        };
        scope.view.Acknowledgement.onError = function(error) {
            alert(JSON.stringify(error));
        };
        scope.view.Acknowledgement.contextualActionButtonOnClick = function(data, context) {
            //alert(JSON.stringify(data));
            var navMan = applicationManager.getNavigationManager();
            if (data === "NewTransfer") {
                //           var ntf = new kony.mvc.Navigation("frmSelectTransferType");
                //           ntf.navigate();
                navMan.setCustomInfo("frmInternationalAddAccount", {});
                navMan.navigateTo("UnifiedTransferFlow/frmSelectTransferType");
            }
            if (data === "btnTryAgain") {
                //           var ntf = new kony.mvc.Navigation("frmSelectTransferType");
                //           ntf.navigate();
                navMan.navigateTo("UnifiedTransferFlow/frmSelectTransferType");
            }
            if (data === "SaveNewPayee") {
                //         var ntf = new kony.mvc.Navigation("frmNewPayee");
                //         ntf.navigate(context);
                navMan.setCustomInfo("frmInternationalAddAccount", context);
                navMan.navigateTo("UnifiedTransferFlow/frmInternationalAddAccount");
            }
            if (data === "Accounts") {
                var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                accountMod.presentationController.showDashboard();
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
        if (this.view.flxInternationalAckMainContainer.contentOffsetMeasured.y > 50) {
            scope.view.title = "Acknowledgement";
        } else if (this.view.flxInternationalAckMainContainer.contentOffsetMeasured.y < 45) {
            scope.view.title = "";
        }
    },
});
define("UnifiedTransferFlow/flxInternationalNewAccountAckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("UnifiedTransferFlow/flxInternationalNewAccountAckController", ["UnifiedTransferFlow/userflxInternationalNewAccountAckController", "UnifiedTransferFlow/flxInternationalNewAccountAckControllerActions"], function() {
    var controller = require("UnifiedTransferFlow/userflxInternationalNewAccountAckController");
    var controllerActions = ["UnifiedTransferFlow/flxInternationalNewAccountAckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
