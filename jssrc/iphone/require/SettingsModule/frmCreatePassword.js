define("SettingsModule/frmCreatePassword", function() {
    return function(controller) {
        function addWidgetsfrmCreatePassword() {
            this.setDefaultUnit(kony.flex.DP);
            var changeORcreatePassword = new com.temenos.infinity.mb.sca.changeORcreatePassword({
                "height": "100%",
                "id": "changeORcreatePassword",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "changeORcreatePassword": {
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
            changeORcreatePassword.objectServiceName1 = "SCAObjects";
            changeORcreatePassword.objectServiceName2 = "SCAObjects";
            changeORcreatePassword.objectServiceName3 = "SCAObjects";
            changeORcreatePassword.objectServiceName4 = "SCAActivationObjects";
            changeORcreatePassword.objectName1 = "SCAUser";
            changeORcreatePassword.objectName2 = "SCAUser";
            changeORcreatePassword.objectName3 = "SCAUser";
            changeORcreatePassword.objectName4 = "PasswordPolicy";
            changeORcreatePassword.operationName1 = "checkPasswordAuthenticatorForUser";
            changeORcreatePassword.operationName2 = "changeOLBPassword";
            changeORcreatePassword.operationName3 = "createOLBPassword";
            changeORcreatePassword.operationName4 = "fetch";
            this.add(changeORcreatePassword);
        };
        return [{
            "addWidgets": addWidgetsfrmCreatePassword,
            "enabledForIdleTimeout": false,
            "id": "frmCreatePassword",
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