define("UnifiedTransferFlow/userfrmP2PTransferTypeController", {
    onNavigate: function() {
        var scope = this;
        if (kony.os.deviceInfo().name === "iPhone") {
            var titleBarAttributes = this.view.titleBarAttributes;
            titleBarAttributes["shadowImage"] = "transparentbox.png";
            this.view.titleBarAttributes = titleBarAttributes;
            this.view.setBackgroundImageForNavbar({
                "image": "transparentbox.png",
                "barMetrics": constants.BAR_METRICS_DEFAULT
            });
            this.view.flxHeaderTop.setVisibility(false);
        } else {
            this.view.flxHeaderTop.setVisibility(true);
        }
        var params = {};
        var tokenParams = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.security_attributes;
        params.entitlement = {};
        params.entitlement.features = JSON.parse(tokenParams.features);
        params.entitlement.permissions = JSON.parse(tokenParams.permissions);
        this.view.transferTypeSelection4.setContext(params);
        this.view.flxMainContainer.onScrolling = this.iPhoneHeaderHandler;
        this.view.transferTypeSelection4.enableHideDescription = function(visibleDesc) {
            if (visibleDesc) {
                scope.enablingDetails();
            } else {
                scope.hideDetailsPage();
            }
        };
        this.view.transferTypeSelection4.buttonActionHandling = function(trannsferTypeDetails) {
            if (trannsferTypeDetails["id"] === "MakeTransfer") {
                scope.navigatePage(trannsferTypeDetails);
            } else {
                scope.navigateAddAccount(trannsferTypeDetails);
            }
        };
        this.view.transferTypeSelection4.hideTile = function() {
            scope.view.flxP2PTrnsfer.setVisibility(false);
        };
    },
    enablingDetails: function() {
        this.view.flxMainContainer.setVisibility(false);
        this.view.flxMainContainer.forceLayout();
    },
    hideDetailsPage: function() {
        this.view.flxMainContainer.setVisibility(true);
        this.view.flxMainContainer.forceLayout();
    },
    navigatePage: function(transferTypeDetails) {
        var navMan = applicationManager.getNavigationManager();
        //     var ntf = new kony.mvc.Navigation("frmP2PTransfer");
        //     ntf.navigate(transferTypeDetails);
        navMan.setCustomInfo("frmP2PTransfer", transferTypeDetails);
        navMan.navigateTo("UnifiedTransferFlow/frmP2PTransfer");
    },
    navigateAddAccount: function(transferTypeDetails) {
        var navMan = applicationManager.getNavigationManager();
        if (transferTypeDetails["transferType"] === "Pay a Person") {
            //       var ntf = new kony.mvc.Navigation("frmP2PAddAccount");   
            //       ntf.navigate();
            navMan.navigateTo("UnifiedTransferFlow/frmP2PAddAccount");
        }
    },
    iPhoneHeaderHandler: function() {
        var scope = this;
        if (this.view.flxMainContainer.contentOffsetMeasured.y > 50) {
            scope.view.title = "Transfer type";
        } else if (this.view.flxMainContainer.contentOffsetMeasured.y < 45) {
            scope.view.title = "";
        }
    }
});
define("UnifiedTransferFlow/frmP2PTransferTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ffa423223b114e2ba34ae61599799a7b: function AS_Form_ffa423223b114e2ba34ae61599799a7b(eventobject) {
        var self = this;
        kony.print("Back Navigation Disabled");
    },
    AS_Image_d88aff863d2843e1afeef01c13d0ee41: function AS_Image_d88aff863d2843e1afeef01c13d0ee41(eventobject, x, y) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});
define("UnifiedTransferFlow/frmP2PTransferTypeController", ["UnifiedTransferFlow/userfrmP2PTransferTypeController", "UnifiedTransferFlow/frmP2PTransferTypeControllerActions"], function() {
    var controller = require("UnifiedTransferFlow/userfrmP2PTransferTypeController");
    var controllerActions = ["UnifiedTransferFlow/frmP2PTransferTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
