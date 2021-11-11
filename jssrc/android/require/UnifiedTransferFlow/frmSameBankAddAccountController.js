define("UnifiedTransferFlow/userfrmSameBankAddAccountController", {
    // Global Parameters.
    flxStack: [],
    nativeTitle: "",
    onNavigate: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        var params = navMan.getCustomInfo("frmSameBankAddAccount")
        if (kony.os.deviceInfo().name === "iPhone") {
            var titleBarAttributes = scope.view.titleBarAttributes;
            titleBarAttributes["shadowImage"] = "transparentbox.png";
            scope.view.titleBarAttributes = titleBarAttributes;
            scope.view.setBackgroundImageForNavbar({
                "image": "transparentbox.png",
                "barMetrics": constants.BAR_METRICS_DEFAULT
            });
        }
        if (params !== "" && params !== null && params !== undefined && Object.keys(params).length > 0) {
            // Modify the params based upon the contracts using in same bank account
            params["phoneNumber"] = params["phone"];
            params["emailAddress"] = params["email"];
            params["payeeName"] = params["beneficiaryName"];
            params["bic"] = params["swiftCode"];
            scope.view.AddNewAccount.setContext(params);
        } else {
            scope.view.AddNewAccount.setContext({});
        }
        scope.initActions();
    },
    initActions: function() {
        var scope = this;
        scope.view.flxSameBankMain.onScrolling = function() {
            scope.iPhoneHeaderHandler();
        };
        scope.view.AddNewAccount.onRequestStart = function() {
            scope.requestStart();
        };
        scope.view.AddNewAccount.onRequestEnd = function() {
            scope.requestEnd();
        };
        scope.view.AddNewAccount.onBackButtonClick = function() {
            scope.backNavigate();
        };
        scope.view.AddNewAccount.createAccountCallback = function(response) {
            var navMan = applicationManager.getNavigationManager();
            if (!response["MFAAttributes"]) {
                //var ntf = new kony.mvc.Navigation("frmSameBankNewAccountAck");
                //ntf.navigate(response);   
                navMan.setCustomInfo("frmSameBankNewAccountAck", response);
                navMan.navigateTo("UnifiedTransferFlow/frmSameBankNewAccountAck");
            } else {
                var ntf = new kony.mvc.Navigation("frmMFAValidation");
                ntf.navigate(response);
            }
        };
        scope.view.AddNewAccount.iPhoneHeaderProps = function(headerProperties) {
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
        var ntf = new kony.mvc.Navigation(previousForm.id);
        ntf.navigate();
    },
    iPhoneHeaderHandler: function() {
        var scope = this;
        if (this.view.flxSameBankMain.contentOffsetMeasured.y > 50) {
            scope.view.title = this.nativeTitle;
        } else if (this.view.flxSameBankMain.contentOffsetMeasured.y < 45) {
            scope.view.title = "";
        }
    },
    iPhoneBackNavigation: function() {
        var scope = this;
        var stackLength = scope.flxStack.length;
        var currentScreen = scope.flxStack[stackLength - 1];
        if (this.flxStack.length > 1) {
            scope.view.AddNewAccount.goBack();
        } else {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
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
        var screenList = ["flxFrequencySelection", "flxPayeeNickname", "flxAddAddress", "flxEmailAddress", "flxPhoneNumber", "flxPaymentMethod", "flxSwiftBICSearch", "flxSwiftBICSearchList"];
        if ((screenList.includes(currentScreen)) || cancelTitle === "") {
            this.hideRightBar();
        } else {
            this.showRightBar(cancelTitle);
        }
    },
});
define("UnifiedTransferFlow/frmSameBankAddAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_BarButtonItem_dcedf09e770e4923af4eec0699565ae3: function AS_BarButtonItem_dcedf09e770e4923af4eec0699565ae3(eventobject) {
        var self = this;
        return self.iPhoneBackNavigation.call(this);
    }
});
define("UnifiedTransferFlow/frmSameBankAddAccountController", ["UnifiedTransferFlow/userfrmSameBankAddAccountController", "UnifiedTransferFlow/frmSameBankAddAccountControllerActions"], function() {
    var controller = require("UnifiedTransferFlow/userfrmSameBankAddAccountController");
    var controllerActions = ["UnifiedTransferFlow/frmSameBankAddAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
