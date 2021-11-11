define("AccountModule/frmAddExternalAccountsTermsAndConditions", function() {
    return function(controller) {
        function addWidgetsfrmAddExternalAccountsTermsAndConditions() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "flxHeader": {
                        "left": "-0.04%",
                        "top": "0.00%"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "closeicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.AddExternalAccountsTermsAndConditions.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxTermsConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxTermsConditions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b85a32dac8a444",
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTermsConditions.setDefaultUnit(kony.flex.DP);
            var rtxTermsConditionsValue = new kony.ui.RichText({
                "bottom": "0dp",
                "id": "rtxTermsConditionsValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknRtx424242SSP26px",
                "top": "2%",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTermsConditions.add(rtxTermsConditionsValue);
            this.add(flxHeader, flxTermsConditions);
        };
        return [{
            "addWidgets": addWidgetsfrmAddExternalAccountsTermsAndConditions,
            "enabledForIdleTimeout": true,
            "id": "frmAddExternalAccountsTermsAndConditions",
            "init": controller.AS_Form_a9b0b31a00914c35b8215d7747a067e8,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_dd52eedb80084fb3a3eddc45ef9d1a68(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.AddExternalAccountsTermsAndConditions.Title")
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
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});