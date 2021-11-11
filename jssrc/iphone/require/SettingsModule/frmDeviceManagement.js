define("SettingsModule/frmDeviceManagement", function() {
    return function(controller) {
        function addWidgetsfrmDeviceManagement() {
            this.setDefaultUnit(kony.flex.DP);
            var registeredDevices = new com.temenos.infinity.mb.sca.registeredDevices({
                "height": "100%",
                "id": "registeredDevices",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "registeredDevices": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            registeredDevices.lblRegisteredDevicesText = "kony.mb.sca.RegisteredDevices";
            registeredDevices.objectServiceName1 = "SCAActivationObjects";
            registeredDevices.objectServiceName2 = "SCAActivationObjects";
            registeredDevices.objectServiceName3 = "SCAActivationObjects";
            registeredDevices.objectServiceName4 = "SCAActivationObjects";
            registeredDevices.btnRegisterNewDeviceText = "kony.mb.sca.RegisterANewDevice";
            registeredDevices.objectName1 = "Device";
            registeredDevices.objectName2 = "Device";
            registeredDevices.objectName3 = "Device";
            registeredDevices.objectName4 = "Device";
            registeredDevices.btnSuspendDeviceText = "kony.mb.sca.SuspendDevice";
            registeredDevices.operationName1 = "getMyDevices";
            registeredDevices.operationName2 = "updateMyDeviceStatus";
            registeredDevices.operationName3 = "revokeMyDevice";
            registeredDevices.operationName4 = "registerNewDevice";
            registeredDevices.btnUnsuspendDeviceText = "kony.mb.sca.UnsuspendDevice";
            registeredDevices.btnRemoveDeviceText = "kony.mb.sca.RemoveDevice";
            this.add(registeredDevices);
        };
        return [{
            "addWidgets": addWidgetsfrmDeviceManagement,
            "enabledForIdleTimeout": false,
            "id": "frmDeviceManagement",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});