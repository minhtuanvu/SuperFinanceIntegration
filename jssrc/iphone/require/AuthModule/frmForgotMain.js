define("AuthModule/frmForgotMain", function() {
    return function(controller) {
        function addWidgetsfrmForgotMain() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "flxBack": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.ForgotCredentials.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1;
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "flxUser",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUser.setDefaultUnit(kony.flex.DP);
            var flxUserImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "flxUserImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxProfileImage",
                "top": "24dp",
                "width": "47dp",
                "zIndex": 1
            }, {}, {});
            flxUserImage.setDefaultUnit(kony.flex.DP);
            var imgUser = new kony.ui.Image2({
                "height": "100%",
                "id": "imgUser",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "userimg.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserImage.add(imgUser);
            var lblUserName = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblUserName",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop100",
                "text": kony.i18n.getLocalizedString("kony.mb.ForgotMain.UserName"),
                "textStyle": {},
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var rtxForgotInfo = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxForgotInfo",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknRtxffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.forgot.wefoundyouwith"),
                "top": "10dp",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUser.add(flxUserImage, lblUserName, rtxForgotInfo);
            var flxUsernameList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUsernameList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "20dp",
                "width": "100%"
            }, {}, {});
            flxUsernameList.setDefaultUnit(kony.flex.DP);
            var lblUsernameList = new kony.ui.Label({
                "id": "lblUsernameList",
                "isVisible": true,
                "left": "35dp",
                "skin": "sknLbl424242SSPBold30px",
                "text": "Username",
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxUsernameListBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": true,
                "height": "46dp",
                "id": "flxUsernameListBox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "44dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {}, {});
            flxUsernameListBox.setDefaultUnit(kony.flex.DP);
            var lblUsernameListBox = new kony.ui.ListBox({
                "focusSkin": "sknlstboxNoBorderSSP42424226px",
                "height": "46dp",
                "id": "lblUsernameListBox",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["lb1", "John.bailey"],
                    ["lb2", "0987654321"],
                    ["lb3", "6789054321"]
                ],
                "selectedKey": "lb1",
                "selectedKeyValue": ["lb1", "John.bailey"],
                "skin": "sknlstboxNoBorderSSP42424226px",
                "top": "0dp",
                "width": "98.00%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dropDownImage": "transparentbox.png",
                "groupCells": false,
                "tickedImage": "transparentbox.png",
                "untickedImage": "transparentbox.png",
                "viewConfig": {
                    "toggleViewConfig": {
                        "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
                    }
                },
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            var imgArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25%",
                "id": "imgArrow",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "lstbxdropdown.png",
                "width": "6%",
                "zIndex": 8
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUsernameListBox.add(lblUsernameListBox, imgArrow);
            flxUsernameList.add(lblUsernameList, flxUsernameListBox);
            var flxShadowUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowUser",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowUser.setDefaultUnit(kony.flex.DP);
            flxShadowUser.add();
            var flxSelectCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSelectCVV",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxBorder3e4f564px",
                "top": "30dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSelectCVV.setDefaultUnit(kony.flex.DP);
            var imgSelectCVV = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgSelectCVV",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "loginicon.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLineSelectCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxLineSelectCVV",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40dp",
                "isModalContainer": false,
                "skin": "sknFlx3e4f56Op10",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxLineSelectCVV.setDefaultUnit(kony.flex.DP);
            flxLineSelectCVV.add();
            var rtxSelectCVV = new kony.ui.RichText({
                "centerY": "50%",
                "height": "60%",
                "id": "rtxSelectCVV",
                "isVisible": true,
                "left": "55dp",
                "skin": "sknRtx424242SSP26px",
                "text": "Login as john.bailey",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgArrowSelectCVV = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowSelectCVV",
                "isVisible": true,
                "right": "6.25%",
                "skin": "slImage",
                "src": "chevronright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectCVV.add(imgSelectCVV, flxLineSelectCVV, rtxSelectCVV, imgArrowSelectCVV);
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxRounded3e4f56Op10",
                "top": "30dp",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var lblOr = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "47%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknlbl727272SSPSSP79pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Or"),
                "textStyle": {},
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
            flxOr.add(lblOr);
            var flxSelectSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSelectSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknFlxBorder3e4f564px",
                "top": "30dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSelectSecurityCode.setDefaultUnit(kony.flex.DP);
            var imgSelectSecurityCode = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgSelectSecurityCode",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "resetpassword.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLineSelectSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxLineSelectSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40dp",
                "isModalContainer": false,
                "skin": "sknFlx3e4f56Op10",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxLineSelectSecurityCode.setDefaultUnit(kony.flex.DP);
            flxLineSelectSecurityCode.add();
            var rtxSelectSecurityCode = new kony.ui.RichText({
                "centerY": "50%",
                "id": "rtxSelectSecurityCode",
                "isVisible": true,
                "left": "55dp",
                "skin": "sknRtx424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ForgotMain.ResetYourPassword"),
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgArrowSelectSecurityCode = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowSelectSecurityCode",
                "isVisible": true,
                "right": "6.25%",
                "skin": "slImage",
                "src": "chevronright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectSecurityCode.add(imgSelectSecurityCode, flxLineSelectSecurityCode, rtxSelectSecurityCode, imgArrowSelectSecurityCode);
            flxMainContainer.add(flxUser, flxUsernameList, flxShadowUser, flxSelectCVV, flxOr, flxSelectSecurityCode);
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
            "action": controller.AS_BarButtonItem_g319e0839beb441083d27d4b6f63453f,
            "metaData": {
                "title": "Cancel"
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
            "addWidgets": addWidgetsfrmForgotMain,
            "enabledForIdleTimeout": true,
            "id": "frmForgotMain",
            "init": controller.AS_Form_c3bb9f3b2d0c4bcc9c94fef6b64cc1b1,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_e69bee8d00d0418ca365257a1fa7d2e8(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.ForgotCredentials.Title")
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