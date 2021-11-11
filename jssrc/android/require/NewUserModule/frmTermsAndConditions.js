define("NewUserModule/frmTermsAndConditions", function() {
    return function(controller) {
        function addWidgetsfrmTermsAndConditions() {
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
                    "flxBack": {
                        "width": "10%"
                    },
                    "flxHeader": {
                        "left": "-0.04%",
                        "top": "0.00%"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "height": "40dp",
                        "src": "closewhite.png",
                        "width": "40dp"
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
            var flxTermsConditions = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxTermsConditions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTermsConditions.setDefaultUnit(kony.flex.DP);
            var rtxTermsConditionsValue = new kony.ui.RichText({
                "bottom": "0dp",
                "id": "rtxTermsConditionsValue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknRtx424242SSP26px",
                "text": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.",
                "top": "2%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTermsConditions.add(rtxTermsConditionsValue);
            this.add(flxHeader, flxTermsConditions);
        };
        return [{
            "addWidgets": addWidgetsfrmTermsAndConditions,
            "enabledForIdleTimeout": true,
            "id": "frmTermsAndConditions",
            "init": controller.AS_Form_f839b18da8a3429b914619c1cdc3f2ea,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_gc36cc0a9cc447bfa49a55fecb2a695f(eventobject);
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