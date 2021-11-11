define("com/temenos/infinity/mb/sca/securityNotification/usersecurityNotificationController", function() {
    const SDKConstants = {
        "PIN_REQUEST": 100,
        "TX_ACCEPTED": 101,
        "TX_DENIED": 102
    };
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        preShowSecurityNotification: function() {
            this.setTextAndSkinFromProperties();
            this.resetUI();
            this.setFlowActions();
            this.getNotifications();
        },
        setFlowActions: function() {
            let scopeObj = this;
            this.view.flxBack.onTouchEnd = function() {
                const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
                ntf.navigate();
            };
            this.view.btnCancel.onClick = function() {
                const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
                ntf.navigate();
            };
            this.view.btnCheckNewNotification.onClick = function() {
                scopeObj.getNotifications();
                scopeObj.view.flxPopup.setVisibility(!scopeObj.view.segNotifications.data || scopeObj.view.segNotifications.data.length);
            };
            this.view.segNotifications.onRowClick = function() {
                scopeObj.showApprovalScreen();
            };
            this.view.btnOK.onClick = function() {
                scopeObj.view.flxPopup.setVisibility(false);
            };
        },
        resetUI: function() {
            this.view.flxMainContainer.setVisibility(true);
            this.view.flxPopup.setVisibility(false);
            this.view.flxNotificationForUser.setVisibility(false);
            this.view.segNotifications.setData([]);
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "android") {
                this.view.flxTopMsg.shadowDepth = 10;
                this.view.flxTopMsg.shadowType = constants.VIEW_BOUNDS_SHADOW;
                this.view.flxGradient.setVisibility(false);
            } else this.view.flxGradient.setVisibility(true);
        },
        showApprovalScreen: function() {
            let self = this;
            let selItems = this.view.segNotifications.selectedRowItems[0];
            let param = {
                tds: selItems.tds
            };
            this.view.sdk.showApprovalScreen(param, callback);

            function callback(status, policyJSON) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                if (SDKConstants.PIN_REQUEST === status) {
                    var pinLength = JSON.parse(policyJSON).MAX_LENGTH;
                    self.view.sdk.showPinDialog(pinLength);
                } else if (SDKConstants.TX_ACCEPTED === status || SDKConstants.TX_DENIED === status) {
                    self.view.sdk.showOrHideTxStatus(status);
                    self.view.sdk.setFlowActions(self.getNotifications);
                }
            }
            this.view.sdk.setVisibility(true);
        },
        setSecurityNotifications: function(notifications) {
            let self = this,
                segData = [],
                dataArray = [];
            for (let i = 0; i < notifications.length; i++) {
                dataArray.push(JSON.parse(notifications[i]));
            }
            segData = dataArray.map(function(data) {
                return {
                    tds: data.tds,
                    txId: data.txId,
                    lblNotification: {
                        text: data.txId || "N/A"
                    },
                    lblDateTime: {
                        text: data.date || "N/A"
                    },
                };
            });
            this.setSegmentData(segData, this.view.segNotifications, this.view.flxNoNotificationFound);
            this.view.flxNotifications.top = this.view.flxNotificationForUser.isVisible ? "150dp" : "90dp";
            this.view.forceLayout();
        },
        setSegmentData: function(data, segment, flxNoResult) {
            flxNoResult.setVisibility(data.length === 0);
            segment.setVisibility(data.length > 0);
            segment.setData(data);
            this.view.forceLayout();
        },
        getNotifications: function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            const userManager = applicationManager.getUserPreferencesManager();
            const userName = userManager.getUserObj().userName;
            try {
                let response = JSON.parse(this.view.sdk.getUserPendingTransactions(userName));
                if (response.pendingTx) {
                    this.setSecurityNotifications(response.pendingTx);
                }
            } catch (e) {
                this.setSegmentData([], this.view.segNotifications, this.view.flxNoNotificationFound);
            }
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        getStringFromi18n: function(stringValue) {
            return kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue) : stringValue;
        },
        setTextAndSkinFromProperties: function() {},
    };
});
define("com/temenos/infinity/mb/sca/securityNotification/securityNotificationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b5cc6c5eb5c14a90a737e4f1435c7e80: function AS_FlexContainer_b5cc6c5eb5c14a90a737e4f1435c7e80(eventobject) {
        var self = this;
        return self.preShowSecurityNotification.call(this);
    }
});
define("com/temenos/infinity/mb/sca/securityNotification/securityNotificationController", ["com/temenos/infinity/mb/sca/securityNotification/usersecurityNotificationController", "com/temenos/infinity/mb/sca/securityNotification/securityNotificationControllerActions"], function() {
    var controller = require("com/temenos/infinity/mb/sca/securityNotification/usersecurityNotificationController");
    var actions = require("com/temenos/infinity/mb/sca/securityNotification/securityNotificationControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
