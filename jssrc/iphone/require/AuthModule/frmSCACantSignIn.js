define("AuthModule/frmSCACantSignIn", function() {
    return function(controller) {
        function addWidgetsfrmSCACantSignIn() {
            this.setDefaultUnit(kony.flex.DP);
            var cantSignIn = new com.temenos.infinity.mb.sca.cantSignIn({
                "height": "100%",
                "id": "cantSignIn",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "cantSignIn": {
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
            cantSignIn.selectedUser = {};
            cantSignIn.operation1 = "lostDevice";
            cantSignIn.operation2 = "sendActivationCode";
            cantSignIn.objectService1 = "SCAActivationObjects";
            cantSignIn.dataModel2 = "Customer";
            cantSignIn.dataModel1 = "SCADevice";
            cantSignIn.objectService2 = "CustomerManagementObjService";
            this.add(cantSignIn);
        };
        return [{
            "addWidgets": addWidgetsfrmSCACantSignIn,
            "enabledForIdleTimeout": false,
            "id": "frmSCACantSignIn",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_ad99787f85ec48329ae4d59e7c4696db(eventobject);
            },
            "skin": "sknFrmffffff"
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