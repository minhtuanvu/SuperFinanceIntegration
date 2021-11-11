define("EnrollModule/frmEnrollMFAOption3", function() {
    return function(controller) {
        function addWidgetsfrmEnrollMFAOption3() {
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
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true,
                        "right": "10dp",
                        "width": "70dp"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": false,
                        "src": "hamburger.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.MFA.2StepVerification")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "80dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxNewDevice = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNewDevice",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxNewDevice.setDefaultUnit(kony.flex.DP);
            var flxImgOTP = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxImgOTP",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxImgOTP.setDefaultUnit(kony.flex.DP);
            var imgOTP = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50dp",
                "id": "imgOTP",
                "isVisible": true,
                "skin": "slImage",
                "src": "newdevice.png",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgOTP.add(imgOTP);
            flxNewDevice.add(flxImgOTP);
            var flxDeviceRegistration = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDeviceRegistration",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxDeviceRegistration.setDefaultUnit(kony.flex.DP);
            var lblName = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblName",
                "isVisible": true,
                "skin": "sknLbl424242SSPBold30px",
                "text": "Hi!! John Doe",
                "textStyle": {},
                "top": "50dp",
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
            var lblLetsAuthenticate = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblLetsAuthenticate",
                "isVisible": true,
                "skin": "sknLbl424242SSReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.MFA.LetsAuthenticate"),
                "textStyle": {},
                "top": "80dp",
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
            flxDeviceRegistration.add(lblName, lblLetsAuthenticate);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "25dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var lblSecurityCode = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSecurityCode",
                "isVisible": true,
                "skin": "sknLbl424242SSReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.MFA.SentCodeMultiple"),
                "textStyle": {},
                "top": "0dp",
                "width": "80%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxModeOfContactPhone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxModeOfContactPhone",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "20dp",
                "width": "100%"
            }, {}, {});
            flxModeOfContactPhone.setDefaultUnit(kony.flex.DP);
            var lblRegisteredModePhone = new kony.ui.Label({
                "id": "lblRegisteredModePhone",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272Reg28px",
                "text": kony.i18n.getLocalizedString("kony.mb.MFA.RegisteredPhone"),
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
            var flxRegisteredModePhone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRegisteredModePhone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "10dp",
                "width": "90%",
                "zIndex": 8
            }, {}, {});
            flxRegisteredModePhone.setDefaultUnit(kony.flex.DP);
            var lbxRegisteredModePhone = new kony.ui.ListBox({
                "focusSkin": "sknlstboxNoBorderSSP42424226px",
                "height": "50dp",
                "id": "lbxRegisteredModePhone",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["lb1", "1234567890"],
                    ["lb2", "0987654321"],
                    ["lb3", "6789054321"]
                ],
                "selectedKey": "lb1",
                "selectedKeyValue": ["lb1", "1234567890"],
                "skin": "sknlstboxNoBorderSSP42424226px",
                "top": "0dp",
                "width": "98%",
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
            flxRegisteredModePhone.add(lbxRegisteredModePhone, imgArrow);
            flxModeOfContactPhone.add(lblRegisteredModePhone, flxRegisteredModePhone);
            var flxModeOfContactEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxModeOfContactEmail",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            flxModeOfContactEmail.setDefaultUnit(kony.flex.DP);
            var lblRegisteredModeEmail = new kony.ui.Label({
                "id": "lblRegisteredModeEmail",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272Reg28px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.regEmailId"),
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
            var flxRegisteredModeEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRegisteredModeEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "10dp",
                "width": "90%",
                "zIndex": 8
            }, {}, {});
            flxRegisteredModeEmail.setDefaultUnit(kony.flex.DP);
            var lbxRegisteredModeEmail = new kony.ui.ListBox({
                "focusSkin": "sknlstboxNoBorderSSP42424226px",
                "height": "50dp",
                "id": "lbxRegisteredModeEmail",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["lb1", "abc@h.com"],
                    ["lb2", "xyz@k.com"],
                    ["lb3", "rts@l.com"]
                ],
                "selectedKey": "lb1",
                "selectedKeyValue": ["lb1", "abc@h.com"],
                "skin": "sknlstboxNoBorderSSP42424226px",
                "top": "0dp",
                "width": "98%",
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
            var imgArrowEmail = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25%",
                "id": "imgArrowEmail",
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
            flxRegisteredModeEmail.add(lbxRegisteredModeEmail, imgArrowEmail);
            flxModeOfContactEmail.add(lblRegisteredModeEmail, flxRegisteredModeEmail);
            flxDetails.add(lblSecurityCode, flxModeOfContactPhone, flxModeOfContactEmail);
            flxBody.add(flxNewDevice, flxDeviceRegistration, flxDetails);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnSend = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "48dp",
                "id": "btnSend",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.send"),
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButtons.add(btnSend);
            this.add(flxHeader, flxBody, flxButtons);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_a2770fa05b644ab3884fdcf90a54c4c3,
            "metaData": {
                "title": kony.i18n.getLocalizedString("kony.tab.common.cancel")
            },
            "id": "RBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmEnrollMFAOption3,
            "enabledForIdleTimeout": false,
            "id": "frmEnrollMFAOption3",
            "init": controller.AS_Form_caf31045b984462eb912e4754b65a1d5,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f32d18e46f2842c391672b54df68b8f0(eventobject);
            },
            "skin": "sknFrmoa78d1Gradient50",
            "title": kony.i18n.getLocalizedString("kony.mb.MFA.2StepVerification")
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
                "rightBarButtonItems": [RBarBtnItem0]
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});