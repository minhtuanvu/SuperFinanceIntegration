define("frmDefaultLogin", function() {
    return function(controller) {
        function addWidgetsfrmDefaultLogin() {
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
                "zIndex": 200
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
                        "text": kony.i18n.getLocalizedString("kony.mb.devReg.defaultLogin")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTop.setDefaultUnit(kony.flex.DP);
            var lblDefaultLogin = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDefaultLogin",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.defaultLogin"),
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnChange = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnffffff0095e4SSPReg28px",
                "id": "btnChange",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknBtnffffff0095e4SSPReg28px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.change"),
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "displayText": true,
                "padding": [1, 1, 1, 1],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxTop.add(lblDefaultLogin, btnChange);
            var flxLineUpper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLineUpper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "15%",
                "zIndex": 10
            }, {}, {});
            flxLineUpper.setDefaultUnit(kony.flex.DP);
            flxLineUpper.add();
            var flxLineLower = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLineLower",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "25%",
                "zIndex": 10
            }, {}, {});
            flxLineLower.setDefaultUnit(kony.flex.DP);
            flxLineLower.add();
            var imgIcon = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgIcon",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "touch.png",
                "top": "18.50%",
                "width": "20dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTitle = new kony.ui.Label({
                "id": "lblTitle",
                "isVisible": true,
                "left": "67dp",
                "skin": "sknLbl0a78d1SSp93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.TouchId"),
                "textStyle": {},
                "top": "17%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSubTitle = new kony.ui.Label({
                "id": "lblSubTitle",
                "isVisible": true,
                "left": "67dp",
                "skin": "sknLbla0a0a0SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.enabled"),
                "textStyle": {},
                "top": "20.50%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNote = new kony.ui.Label({
                "id": "lblNote",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.note"),
                "textStyle": {},
                "top": "31%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var rtxNoteMsg = new kony.ui.RichText({
                "id": "rtxNoteMsg",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "defRichTextLink",
                "right": "60dp",
                "skin": "sknRtx424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.noteMsg"),
                "top": "34.50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnDone = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnDone",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_g3c0df342fa54a61bc31b878732847a1,
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.done"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxMainContainer.add(flxTop, flxLineUpper, flxLineLower, imgIcon, lblTitle, lblSubTitle, lblNote, rtxNoteMsg, btnDone);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "customPopup": {
                        "height": "100%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmDefaultLogin,
            "enabledForIdleTimeout": true,
            "id": "frmDefaultLogin",
            "init": controller.AS_Form_fe54551aa1964d6d98235a4d19d2ac71,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_i5817b53183e4fba9f3323f67f9ec29e(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.devReg.defaultLogin")
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
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": []
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});