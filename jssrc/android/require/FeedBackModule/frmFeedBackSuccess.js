define("FeedBackModule/frmFeedBackSuccess", function() {
    return function(controller) {
        function addWidgetsfrmFeedBackSuccess() {
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
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
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
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.close"),
                        "isVisible": false
                    },
                    "flxBack": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": false,
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.feedback.feedback"),
                        "left": "40%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_fcac5df801a94a0aa2941fdb5cc285d7;
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxSuccess = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSuccess",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSuccess.setDefaultUnit(kony.flex.DP);
            var flxSuccessContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "60%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxSuccessContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSuccessContainer.setDefaultUnit(kony.flex.DP);
            var imgSuccess = new kony.ui.Image2({
                "centerX": "50%",
                "height": "74dp",
                "id": "imgSuccess",
                "isVisible": true,
                "skin": "slImage",
                "src": "successicon.png",
                "top": "0dp",
                "width": "74dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSuccessText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSuccessText",
                "isVisible": true,
                "left": "20dp",
                "right": 20,
                "skin": "sknLbl424242SSP140prBold",
                "text": kony.i18n.getLocalizedString("kony.feedback.ratingsuccess"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "90dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSuccessContainer.add(imgSuccess, lblSuccessText);
            var btnDone = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtnDarkTheme",
                "height": "40dp",
                "id": "btnDone",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.common.done"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSuccess.add(flxSuccessContainer, btnDone);
            this.add(flxHeader, flxSuccess);
        };
        return [{
            "addWidgets": addWidgetsfrmFeedBackSuccess,
            "enabledForIdleTimeout": true,
            "id": "frmFeedBackSuccess",
            "init": controller.AS_Form_ee8f69ff5abb41fd8322048793f5255b,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_hc52ef30714c4b2a86bf3787990e8d08,
            "preShow": function(eventobject) {
                controller.AS_Form_b8885dd877dd4435ba95083069289394(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.feedback.feedback")
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