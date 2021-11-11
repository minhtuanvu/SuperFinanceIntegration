define("SettingsModule/frmPreferencesDefaultLogin", function() {
    return function(controller) {
        function addWidgetsfrmPreferencesDefaultLogin() {
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
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNote.setDefaultUnit(kony.flex.DP);
            var lblNote = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblNote",
                "isVisible": true,
                "left": "60dp",
                "right": "60dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.preferences.PleaseSelectWhichOneYouWantAsDefaultLoginOption."),
                "textStyle": {},
                "top": "15dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNote.add(lblNote);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var flxOption1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOption1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOption1.setDefaultUnit(kony.flex.DP);
            var imgOption1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgOption1",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "loginicon.png",
                "top": "11dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOption1 = new kony.ui.Label({
                "id": "lblOption1",
                "isVisible": true,
                "left": "54dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.preferences.UsernameAndPassword"),
                "textStyle": {},
                "top": "8dp",
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
            var lblStatus1 = new kony.ui.Label({
                "id": "lblStatus1",
                "isVisible": true,
                "left": "54dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.preferences.DefaultLoginSmall"),
                "textStyle": {},
                "top": "27dp",
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
            var imgStatusAndNav1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgStatusAndNav1",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOption1.add(imgOption1, lblOption1, lblStatus1, imgStatusAndNav1);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxOption2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOption2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOption2.setDefaultUnit(kony.flex.DP);
            var imgOption2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgOption2",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "touchidbig.png",
                "top": "11dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOption2 = new kony.ui.Label({
                "id": "lblOption2",
                "isVisible": true,
                "left": "54dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.TouchId"),
                "textStyle": {},
                "top": "8dp",
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
            var lblStatus2 = new kony.ui.Label({
                "id": "lblStatus2",
                "isVisible": true,
                "left": "54dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.enabled"),
                "textStyle": {},
                "top": "27dp",
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
            var imgStatusAndNav2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgStatusAndNav2",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOption2.add(imgOption2, lblOption2, lblStatus2, imgStatusAndNav2);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var flxOption3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOption3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOption3.setDefaultUnit(kony.flex.DP);
            var imgOption3 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgOption3",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "pin.png",
                "top": "11dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOption3 = new kony.ui.Label({
                "id": "lblOption3",
                "isVisible": true,
                "left": "54dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.pin"),
                "textStyle": {},
                "top": "8dp",
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
            var lblStatus3 = new kony.ui.Label({
                "id": "lblStatus3",
                "isVisible": true,
                "left": "54dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.generate"),
                "textStyle": {},
                "top": "27dp",
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
            var imgStatusAndNav3 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgStatusAndNav3",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOption3.add(imgOption3, lblOption3, lblStatus3, imgStatusAndNav3);
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            var flxOption4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOption4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOption4.setDefaultUnit(kony.flex.DP);
            var imgOption4 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgOption4",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "face.png",
                "top": "11dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOption4 = new kony.ui.Label({
                "id": "lblOption4",
                "isVisible": true,
                "left": "54dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.FaceCaps"),
                "textStyle": {},
                "top": "8dp",
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
            var lblStatus4 = new kony.ui.Label({
                "id": "lblStatus4",
                "isVisible": true,
                "left": "54dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.notEnabled"),
                "textStyle": {},
                "top": "27dp",
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
            var imgStatusAndNav4 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgStatusAndNav4",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOption4.add(imgOption4, lblOption4, lblStatus4, imgStatusAndNav4);
            var flxSeperator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator5.setDefaultUnit(kony.flex.DP);
            flxSeperator5.add();
            flxOptions.add(flxSeperator1, flxOption1, flxSeperator2, flxOption2, flxSeperator3, flxOption3, flxSeperator4, flxOption4, flxSeperator5);
            flxMainContainer.add(flxNote, flxOptions);
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_b16fdcc3af0c4b9083bc8f9403d95613,
            "metaData": {
                "title": ""
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmPreferencesDefaultLogin,
            "enabledForIdleTimeout": true,
            "id": "frmPreferencesDefaultLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b8803554ba3d482a8ded66ba4945fbf9(eventobject);
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
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});