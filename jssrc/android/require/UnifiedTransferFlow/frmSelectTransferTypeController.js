define("UnifiedTransferFlow/userfrmSelectTransferTypeController", {
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
            this.view.flxTop.setVisibility(false);
        } else {
            this.view.flxTop.setVisibility(true);
        }
        var params = {};
        var tokenParams = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.security_attributes;
        params.entitlement = {};
        params.entitlement.features = JSON.parse(tokenParams.features);
        params.entitlement.permissions = JSON.parse(tokenParams.permissions);
        this.view.transferTypeSelection1.setContext(params);
        this.view.transferTypeSelection2.setContext(params);
        this.view.transferTypeSelection3.setContext(params);
        this.view.flxSelectTransferType.onScrolling = this.iPhoneHeaderHandler;
        this.view.transferTypeSelection1.enableHideDescription = function(visibleDesc) {
            if (visibleDesc) {
                scope.enablingDetails();
            } else {
                scope.hideDetailsPage();
            }
        };
        this.view.transferTypeSelection2.enableHideDescription = function(visibleDesc) {
            if (visibleDesc) {
                scope.enablingDetails();
            } else {
                scope.hideDetailsPage();
            }
        };
        this.view.transferTypeSelection3.enableHideDescription = function(visibleDesc) {
            if (visibleDesc) {
                scope.enablingDetails();
            } else {
                scope.hideDetailsPage();
            }
        };
        this.view.transferTypeSelection1.buttonActionHandling = function(trannsferTypeDetails) {
            if (trannsferTypeDetails["id"] === "MakeTransfer") {
                scope.navigatePage(trannsferTypeDetails);
            } else {
                scope.navigateAddAccount(trannsferTypeDetails);
            }
        };
        this.view.transferTypeSelection2.buttonActionHandling = function(trannsferTypeDetails) {
            if (trannsferTypeDetails["id"] === "MakeTransfer") {
                scope.navigatePage(trannsferTypeDetails);
            } else {
                scope.navigateAddAccount(trannsferTypeDetails);
            }
        };
        this.view.transferTypeSelection3.buttonActionHandling = function(trannsferTypeDetails) {
            if (trannsferTypeDetails["id"] === "MakeTransfer") {
                scope.navigatePage(trannsferTypeDetails);
            } else {
                scope.navigateAddAccount(trannsferTypeDetails);
            }
        };
        this.view.transferTypeSelection1.hideTile = function() {
            scope.view.flxTransferType1.setVisibility(false);
        };
        this.view.transferTypeSelection2.hideTile = function() {
            scope.view.flxTransferType2.setVisibility(false);
        };
        this.view.transferTypeSelection3.hideTile = function() {
            scope.view.flxTransferType3.setVisibility(false);
        };
    },
    enablingDetails: function() {
        this.view.flxSelectTransferType.setVisibility(false);
        this.view.flxSelectTransferType.forceLayout();
    },
    hideDetailsPage: function() {
        this.view.flxSelectTransferType.setVisibility(true);
        this.view.flxSelectTransferType.forceLayout();
    },
    navigatePage: function(transferTypeDetails) {
        var navMan = applicationManager.getNavigationManager();
        if (transferTypeDetails["transferType"] === "Within Same Bank") {
            //       var ntf = new kony.mvc.Navigation("frmSameBank");
            navMan.setCustomInfo("frmSameBank", transferTypeDetails);
            navMan.navigateTo("UnifiedTransferFlow/frmSameBank");
        } else if (transferTypeDetails["transferType"] === "Domestic Transfer") {
            //       var ntf = new kony.mvc.Navigation("frmDomesticTransfer");
            navMan.setCustomInfo("frmDomesticTransfer", transferTypeDetails);
            navMan.navigateTo("UnifiedTransferFlow/frmDomesticTransfer");
        } else {
            //       var ntf = new kony.mvc.Navigation("frmInternationalTransfer");
            navMan.setCustomInfo("frmInternationalTransfer", transferTypeDetails);
            navMan.navigateTo("UnifiedTransferFlow/frmInternationalTransfer");
        }
        //     ntf.navigate(transferTypeDetails);
    },
    navigateAddAccount: function(transferTypeDetails) {
        var navMan = applicationManager.getNavigationManager();
        if (transferTypeDetails["transferType"] === "Within Same Bank") {
            navMan.navigateTo("UnifiedTransferFlow/frmSameBankAddAccount");
        } else if (transferTypeDetails["transferType"] === "Domestic Transfer") {
            navMan.navigateTo("UnifiedTransferFlow/frmDomesticAddAccount");
        } else {
            navMan.navigateTo("UnifiedTransferFlow/frmInternationalAddAccount");
        }
    },
    iPhoneHeaderHandler: function() {
        var scope = this;
        if (this.view.flxSelectTransferType.contentOffsetMeasured.y > 50) {
            scope.view.title = "Transfer type";
        } else if (this.view.flxSelectTransferType.contentOffsetMeasured.y < 45) {
            scope.view.title = "";
        }
    }
});
define("UnifiedTransferFlow/frmSelectTransferTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f5f5bfac92f94ab19ea4920c55409a8e: function AS_Form_f5f5bfac92f94ab19ea4920c55409a8e(eventobject) {
        var self = this;
        kony.print("Back Navigation Disabled");
    },
    AS_Image_h6b8c2c73f4d4d1490f518bb2e399f3c: function AS_Image_h6b8c2c73f4d4d1490f518bb2e399f3c(eventobject, x, y) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});
define("UnifiedTransferFlow/frmSelectTransferTypeController", ["UnifiedTransferFlow/userfrmSelectTransferTypeController", "UnifiedTransferFlow/frmSelectTransferTypeControllerActions"], function() {
    var controller = require("UnifiedTransferFlow/userfrmSelectTransferTypeController");
    var controllerActions = ["UnifiedTransferFlow/frmSelectTransferTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
