define("AuthModule/frmLanguageSelectionLoading", function() {
    return function(controller) {
        function addWidgetsfrmLanguageSelectionLoading() {
            this.setDefaultUnit(kony.flex.DP);
            var imgLanguageBG = new kony.ui.Image2({
                "height": "100%",
                "id": "imgLanguageBG",
                "isVisible": false,
                "left": "0dp",
                "skin": "slImage",
                "src": "splash.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUpdateLanguage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblUpdateLanguage",
                "isVisible": true,
                "skin": "sknLblffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.UpdatePreferredLanguage"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "60%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            this.add(imgLanguageBG, lblUpdateLanguage);
        };
        return [{
            "addWidgets": addWidgetsfrmLanguageSelectionLoading,
            "enabledForIdleTimeout": true,
            "id": "frmLanguageSelectionLoading",
            "init": controller.AS_Form_i21e8f31a03d4e5e99501182769c41a7,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_j494345be9644feab4186c97ea6a7d53,
            "preShow": function(eventobject) {
                controller.AS_Form_c876415c32634851b41ad00aabb91bd4(eventobject);
            },
            "skin": "sknflxfullPageSplash"
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
            "titleBarSkin": "sknTitle0a78d1ffffff30px2",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});