define("ManageCardsModule/frmCardStatementView", function() {
    return function(controller) {
        function addWidgetsfrmCardStatementView() {
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
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                    "flxSearch": {
                        "centerY": "50%",
                        "height": "40dp",
                        "isVisible": true,
                        "right": "15dp",
                        "zIndex": 10
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "height": "20dp",
                        "right": "5dp",
                        "src": "download.png",
                        "width": "20dp",
                        "zIndex": 10
                    },
                    "lblLocateUs": {
                        "text": "March 2019"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var brwsrPdf = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "220dp",
                "htmlString": "Browser",
                "id": "brwsrPdf",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.add(brwsrPdf);
            this.add(flxHeader, flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmCardStatementView,
            "enabledForIdleTimeout": true,
            "id": "frmCardStatementView",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": "March 2019"
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