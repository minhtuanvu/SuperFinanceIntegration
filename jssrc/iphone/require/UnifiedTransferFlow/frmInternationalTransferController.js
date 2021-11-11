define("UnifiedTransferFlow/userfrmInternationalTransferController", {
    // Global Parameters.
    flxStack: [],
    nativeTitle: "",
    onNavigate: function(params) {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        params = navMan.getCustomInfo("frmInternationalTransfer");
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
        scope.view.flxInternationalTransfer.onScrolling = function() {
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
                //         var ntf = new kony.mvc.Navigation("flxInternationalAcknowledgement");
                //         ntf.navigate(response);    
                navMan.setCustomInfo("flxInternationalAcknowledgement", response);
                navMan.navigateTo("UnifiedTransferFlow/flxInternationalAcknowledgement");
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
        var previousForm = kony.application.getPreviousForm();
        //     var ntf = new kony.mvc.Navigation(previousForm.id);
        //     ntf.navigate();
        var navMan = applicationManager.getNavigationManager();
        navMan.navigateTo("UnifiedTransferFlow/" + previousForm.id);
    },
    iPhoneHeaderHandler: function() {
        var scope = this;
        if (scope.view.flxInternationalTransfer.contentOffsetMeasured.y > 50) {
            scope.view.title = this.nativeTitle;
        } else if (scope.view.flxInternationalTransfer.contentOffsetMeasured.y < 45) {
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
define("UnifiedTransferFlow/frmInternationalTransferControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c78b409dc6dc40018c1ab96b25af4043: function AS_Form_c78b409dc6dc40018c1ab96b25af4043(eventobject) {
        var self = this;
        kony.print("Back Navigation Disabled");
    },
    AS_BarButtonItem_g9486bbf51be4b37be4e533a060012d2: function AS_BarButtonItem_g9486bbf51be4b37be4e533a060012d2(eventobject) {
        var self = this;
        return self.iPhoneBackNavigation.call(this);
    }
});
define("UnifiedTransferFlow/frmInternationalTransferController", ["UnifiedTransferFlow/userfrmInternationalTransferController", "UnifiedTransferFlow/frmInternationalTransferControllerActions"], function() {
    var controller = require("UnifiedTransferFlow/userfrmInternationalTransferController");
    var controllerActions = ["UnifiedTransferFlow/frmInternationalTransferControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
