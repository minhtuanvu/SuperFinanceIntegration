define("AuthModule/frmDevRegLanding", function() {
    return function(controller) {
        function addWidgetsfrmDevRegLanding() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 100
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
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.preferences.DeviceRegistration")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxRegisterNow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxRegisterNow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRegisterNow.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "120dp",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var imgDevReg = new kony.ui.Image2({
                "centerX": "50%",
                "height": "130dp",
                "id": "imgDevReg",
                "isVisible": false,
                "left": "173dp",
                "skin": "slImage",
                "src": "deviceregistration.png",
                "top": "3%",
                "width": "160dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMsg = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lblMsg",
                "isVisible": true,
                "skin": "sknLbl424242SSPLight36px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.msg"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknflxe6e6e6",
                "top": "40dp",
                "width": "88%",
                "zIndex": 3
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var lblSecMsg = new kony.ui.Label({
                "id": "lblSecMsg",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPLight36px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.SecCodeMsg"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "40dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxMobNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxMobNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMobNo.setDefaultUnit(kony.flex.DP);
            var flxMobile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxMobile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMobile.setDefaultUnit(kony.flex.DP);
            var lblMobNo = new kony.ui.Label({
                "id": "lblMobNo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.mobNo"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblColon = new kony.ui.Label({
                "id": "lblColon",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLbl424242SSPReg30px",
                "text": ":",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMobNoValue = new kony.ui.Label({
                "id": "lblMobNoValue",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": "91XXXXXX1213",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMobile.add(lblMobNo, lblColon, lblMobNoValue);
            flxMobNo.add(flxMobile);
            var flxEmailId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxEmailId",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {}, {});
            flxEmailId.setDefaultUnit(kony.flex.DP);
            var lblEmailId = new kony.ui.Label({
                "id": "lblEmailId",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.emailId"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblColon2 = new kony.ui.Label({
                "id": "lblColon2",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLbl424242SSPReg30px",
                "text": ":",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEmailIdValue = new kony.ui.Label({
                "id": "lblEmailIdValue",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": "ab****ny@kony.com",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 2,
                "width": "58%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEmailId.add(lblEmailId, lblColon2, lblEmailIdValue);
            flxMain.add(imgDevReg, lblMsg, flxSeperator, lblSecMsg, flxMobNo, flxEmailId);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnRegNow = new kony.ui.Button({
                "bottom": "50dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF129pr",
                "height": "40dp",
                "id": "btnRegNow",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_e4c5558cfcbd426daa54c7a7e3a64852,
                "right": "20dp",
                "skin": "sknBtnffffffSSPReg32px0095e4",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.regNow"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnNoThanks = new kony.ui.Button({
                "bottom": "0dp",
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius4px",
                "height": "40dp",
                "id": "btnNoThanks",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.noThanks"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 1, 1, 1],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnRegNow, btnNoThanks);
            flxRegisterNow.add(flxMain, flxButtons);
            this.add(flxHeader, flxRegisterNow);
        };
        return [{
            "addWidgets": addWidgetsfrmDevRegLanding,
            "enabledForIdleTimeout": true,
            "id": "frmDevRegLanding",
            "init": controller.AS_Form_edc932272eae4b4d8b357d4bf53d518f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_dcf023c0b2754db8929b53a224e6e948(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.preferences.DeviceRegistration")
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