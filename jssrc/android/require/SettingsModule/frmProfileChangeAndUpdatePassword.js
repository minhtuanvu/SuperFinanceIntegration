define("SettingsModule/frmProfileChangeAndUpdatePassword", function() {
    return function(controller) {
        function addWidgetsfrmProfileChangeAndUpdatePassword() {
            this.setDefaultUnit(kony.flex.DP);
            var updatePassword = new com.temenos.infinity.updatePassword({
                "height": "100%",
                "id": "updatePassword",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "updatePassword": {
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
            updatePassword.buttonDisabledSkin = "sknBtna0a0a0SSPReg26px";
            updatePassword.objectServiceName = "RBObjects";
            updatePassword.textVisiblityOff = "viewicon.png";
            updatePassword.buttonEnabledSkin = "sknBtn0095e426pxEnabled";
            updatePassword.dataModel = "User";
            updatePassword.textVisiblityOn = "viewactive.png";
            updatePassword.updatePassword = "updateDBXUserPassword";
            updatePassword.greenTick = "greentick.png";
            updatePassword.verifyExistingPassword = "verifyExistingPassword";
            updatePassword.grayTick = "tickmark.png";
            updatePassword.dbxUserDataModel = "DbxUser";
            updatePassword.getPasswordRulesAndPolicy = "getPasswordRulesAndPolicy";
            this.add(updatePassword);
        };
        return [{
            "addWidgets": addWidgetsfrmProfileChangeAndUpdatePassword,
            "enabledForIdleTimeout": true,
            "id": "frmProfileChangeAndUpdatePassword",
            "init": controller.AS_Form_f961560a878c4b2fa0d1e06a1d78b14d,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e49a045d18cc4c728064ed4eff072799(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.ProfileChangeAndUpdatePassword.Title")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});