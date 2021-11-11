define("SuperFinanceModule/frmSteps2", function() {
    return function(controller) {
        function addWidgetsfrmSteps2() {
            this.setDefaultUnit(kony.flex.DP);
            var flxStepsGroup = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxStepsGroup",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxStepLayoutSF",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxStepsGroup.setDefaultUnit(kony.flex.DP);
            flxStepsGroup.add();
            this.add(flxStepsGroup);
        };
        return [{
            "addWidgets": addWidgetsfrmSteps2,
            "enabledForIdleTimeout": false,
            "id": "frmSteps2",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_j76ded4d5c9048e58d26f6a7b40429fb(eventobject);
            },
            "skin": "sknFrmBgSF"
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
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});