define("UnifiedTransferFlow/userfrmDomesticTransferController", {
    // Global Parameters.
    flxStack: [],
    nativeTitle: "",
    onNavigate: function(params) {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        params = navMan.getCustomInfo("frmDomesticTransfer");
        if (kony.os.deviceInfo().name === "iPhone") {
            var titleBarAttributes = this.view.titleBarAttributes;
            titleBarAttributes["shadowImage"] = "transparentbox.png";
            this.view.titleBarAttributes = titleBarAttributes;
            this.view.setBackgroundImageForNavbar({
                "image": "transparentbox.png",
                "barMetrics": constants.BAR_METRICS_DEFAULT
            });
        }
        if (params !== "" && params !== null && params !== undefined) {
            scope.view.MakeATransfer.setContext(params);
        }
        scope.initActions();
    },
    initActions: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        scope.view.flxDomesticBank.onScrolling = function() {
            scope.iPhoneHeaderHandler();
        };
        scope.view.MakeATransfer.onRequestStart = function() {
            scope.requestStart();
        };
        scope.view.MakeATransfer.onRequestEnd = function() {
            scope.requestEnd();
        };
        scope.view.MakeATransfer.onBackButtonClick = function() {
            scope.backNavigate();
        };
        scope.view.MakeATransfer.createTransSuccessCallback = function(response) {
            if (!response["MFAAttributes"]) {
                //         var ntf = new kony.mvc.Navigation("flxDomesticAcknowledgement");
                //         ntf.navigate(response);    
                navMan.setCustomInfo("flxDomesticAcknowledgement", response);
                navMan.navigateTo("UnifiedTransferFlow/flxDomesticAcknowledgement");
            } else {
                //         var ntf = new kony.mvc.Navigation("frmMFAValidation");
                //         ntf.navigate(response);     
                navMan.setCustomInfo("frmMFAValidation", response);
                navMan.navigateTo("UnifiedTransferFlow/frmMFAValidation");
            }
        };
        scope.view.MakeATransfer.iPhoneHeaderProps = function(headerProperties) {
            scope.setiPhoneHeaderProps(headerProperties);
        };
    },
    requestStart: function() {
        kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    },
    requestEnd: function() {
        kony.application.dismissLoadingScreen();
    },
    backNavigate: function() {
        var navMan = applicationManager.getNavigationManager();
        var previousForm = kony.application.getPreviousForm();
        //     var ntf = new kony.mvc.Navigation(previousForm.id);
        //     ntf.navigate();
        navMan.navigateTo("UnifiedTransferFlow/" + previousForm.id);
    },
    iPhoneHeaderHandler: function() {
        var scope = this;
        if (scope.view.flxDomesticBank.contentOffsetMeasured.y > 50) {
            scope.view.title = this.nativeTitle;
        } else if (scope.view.flxDomesticBank.contentOffsetMeasured.y < 45) {
            scope.view.title = "";
        }
    },
    iPhoneBackNavigation: function() {
        var scope = this;
        var stackLength = scope.flxStack.length;
        var currentScreen = scope.flxStack[stackLength - 1];
        if (this.flxStack.length > 1 && currentScreen !== "flxVerifyDetails" && currentScreen !== "flxDate") {
            scope.view.MakeATransfer.goBack();
        } else if (currentScreen === "flxVerifyDetails") {
            scope.view.MakeATransfer.onVerifyDetailsBack();
        } else if (currentScreen === "flxDate") {
            scope.view.MakeATransfer.dateBackNavigation();
        } else {
            scope.backNavigate();
        }
    },
    showRightBar: function(cancelTitle) {
        var itemArray = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "#ffffff",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": this.backNavigate,
            "metaData": {
                "title": cancelTitle
            }
        });
        this.view.setRightBarButtonItems({
            "items": [itemArray],
            "animated": false
        });
    },
    hideRightBar: function() {
        this.view.setRightBarButtonItems({
            "items": [],
            "animated": false
        });
    },
    setiPhoneHeaderProps: function(headerProperties) {
        var scope = this;
        this.flxStack = headerProperties["stack"];
        this.nativeTitle = headerProperties["headerTitle"];
        var cancelTitle = headerProperties["cancelText"];
        var stackLength = scope.flxStack.length;
        var currentScreen = scope.flxStack[stackLength - 1];
        var screenList = ["flxFrequencySelection", "flxCurrencySelection", "flxAddAddress", "flxFeesPaidBy", "flxDate", "flxPaymentMethod", "flxSwiftBICSearch", "flxSwiftBICSearchList"];
        if (screenList.includes(currentScreen) || cancelTitle === "") {
            this.hideRightBar();
        } else {
            this.showRightBar(cancelTitle);
        }
    },
});
define("UnifiedTransferFlow/frmDomesticTransferControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fa152b1db6d643c69f9f61875086928f: function AS_Form_fa152b1db6d643c69f9f61875086928f(eventobject) {
        var self = this;
        kony.print("Back Navigation Disabled");
    },
    AS_BarButtonItem_aa0e2163284043479c303c5b5b92338d: function AS_BarButtonItem_aa0e2163284043479c303c5b5b92338d(eventobject) {
        var self = this;
        return self.iPhoneBackNavigation.call(this);
    }
});
define("UnifiedTransferFlow/frmDomesticTransferController", ["UnifiedTransferFlow/userfrmDomesticTransferController", "UnifiedTransferFlow/frmDomesticTransferControllerActions"], function() {
    var controller = require("UnifiedTransferFlow/userfrmDomesticTransferController");
    var controllerActions = ["UnifiedTransferFlow/frmDomesticTransferControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
