define(function() {
    return function(controller) {
        var TransfersFlowSecurityCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "TransfersFlowSecurityCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_dcb6bf221d7a4ea298892e276b1e8770(eventobject);
            },
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "TransfersFlowSecurityCode"), extendConfig({}, controller.args[1], "TransfersFlowSecurityCode"), extendConfig({}, controller.args[2], "TransfersFlowSecurityCode"));
        TransfersFlowSecurityCode.setDefaultUnit(kony.flex.DP);
        var flxMFAOption3Screen = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMFAOption3Screen",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMFAOption3Screen"), extendConfig({}, controller.args[1], "flxMFAOption3Screen"), extendConfig({}, controller.args[2], "flxMFAOption3Screen"));
        flxMFAOption3Screen.setDefaultUnit(kony.flex.DP);
        var flxHeaderMFAOption3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "56dp",
            "id": "flxHeaderMFAOption3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxHeaderMFAOption3"), extendConfig({}, controller.args[1], "flxHeaderMFAOption3"), extendConfig({}, controller.args[2], "flxHeaderMFAOption3"));
        flxHeaderMFAOption3.setDefaultUnit(kony.flex.DP);
        var customHeaderOption3 = new com.kmb.common.customHeader(extendConfig({
            "height": "100%",
            "id": "customHeaderOption3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "btnLeft": {
                    "isVisible": false
                },
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
        }, controller.args[0], "customHeaderOption3"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customHeaderOption3"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customHeaderOption3"));
        flxHeaderMFAOption3.add(customHeaderOption3);
        var flxBody = new kony.ui.FlexScrollContainer(extendConfig({
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
            "top": "56dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBody"), extendConfig({}, controller.args[1], "flxBody"), extendConfig({}, controller.args[2], "flxBody"));
        flxBody.setDefaultUnit(kony.flex.DP);
        var flxNewDevice = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNewDevice",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxNewDevice"), extendConfig({}, controller.args[1], "flxNewDevice"), extendConfig({}, controller.args[2], "flxNewDevice"));
        flxNewDevice.setDefaultUnit(kony.flex.DP);
        var flxImgOTP = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxImgOTP",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxImgOTP"), extendConfig({}, controller.args[1], "flxImgOTP"), extendConfig({}, controller.args[2], "flxImgOTP"));
        flxImgOTP.setDefaultUnit(kony.flex.DP);
        var imgOTP = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "50dp",
            "id": "imgOTP",
            "isVisible": true,
            "src": "newdevice.png",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "imgOTP"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgOTP"), extendConfig({}, controller.args[2], "imgOTP"));
        flxImgOTP.add(imgOTP);
        var rtxNewDevice = new kony.ui.RichText(extendConfig({
            "centerX": "50%",
            "id": "rtxNewDevice",
            "isVisible": true,
            "linkSkin": "defRichTextLink",
            "skin": "sknRtx42424226px",
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.NewDeviceDetected"),
            "top": "5dp",
            "width": "70%",
            "zIndex": 8
        }, controller.args[0], "rtxNewDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxNewDevice"), extendConfig({
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "rtxNewDevice"));
        flxNewDevice.add(flxImgOTP, rtxNewDevice);
        var flxDeviceRegistration = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDeviceRegistration",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxDeviceRegistration"), extendConfig({}, controller.args[1], "flxDeviceRegistration"), extendConfig({}, controller.args[2], "flxDeviceRegistration"));
        flxDeviceRegistration.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblName",
            "isVisible": true,
            "skin": "sknLbl424242SSPBold30px",
            "text": "Hi!! John Doe",
            "textStyle": {},
            "top": "50dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblName"));
        var lblLetsAuthenticate = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblLetsAuthenticate",
            "isVisible": true,
            "skin": "sknLbl424242SSReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.LetsAuthenticate"),
            "textStyle": {},
            "top": "80dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblLetsAuthenticate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLetsAuthenticate"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLetsAuthenticate"));
        flxDeviceRegistration.add(lblName, lblLetsAuthenticate);
        var lblLetsAuthenticateTransaction = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblLetsAuthenticateTransaction",
            "isVisible": true,
            "skin": "sknLbl424242SSPBold30px",
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.LetsAuthenticate"),
            "textStyle": {},
            "top": "4%",
            "width": "80%",
            "zIndex": 8
        }, controller.args[0], "lblLetsAuthenticateTransaction"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLetsAuthenticateTransaction"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLetsAuthenticateTransaction"));
        var flxDetailsOption3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxDetailsOption3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "25dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxDetailsOption3"), extendConfig({}, controller.args[1], "flxDetailsOption3"), extendConfig({}, controller.args[2], "flxDetailsOption3"));
        flxDetailsOption3.setDefaultUnit(kony.flex.DP);
        var lblSecurityCode = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSecurityCode",
            "isVisible": true,
            "skin": "sknLbl424242SSReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.SentCodeMultiple"),
            "textStyle": {},
            "top": "0dp",
            "width": "80%",
            "zIndex": 8
        }, controller.args[0], "lblSecurityCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityCode"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityCode"));
        var flxModeOfContactPhone = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxModeOfContactPhone",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxModeOfContactPhone"), extendConfig({}, controller.args[1], "flxModeOfContactPhone"), extendConfig({}, controller.args[2], "flxModeOfContactPhone"));
        flxModeOfContactPhone.setDefaultUnit(kony.flex.DP);
        var lblRegisteredModePhone = new kony.ui.Label(extendConfig({
            "id": "lblRegisteredModePhone",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272Reg28px",
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.RegisteredPhone"),
            "textStyle": {},
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblRegisteredModePhone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegisteredModePhone"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRegisteredModePhone"));
        var flxRegisteredModePhone = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxRegisteredModePhone"), extendConfig({}, controller.args[1], "flxRegisteredModePhone"), extendConfig({}, controller.args[2], "flxRegisteredModePhone"));
        flxRegisteredModePhone.setDefaultUnit(kony.flex.DP);
        var lbxRegisteredModePhone = new kony.ui.ListBox(extendConfig({
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
        }, controller.args[0], "lbxRegisteredModePhone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbxRegisteredModePhone"), extendConfig({
            "dropDownImage": "transparentbox_1.png",
            "groupCells": false,
            "tickedImage": "transparentbox_1.png",
            "untickedImage": "transparentbox_1.png",
            "viewConfig": {
                "toggleViewConfig": {
                    "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
                }
            },
            "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
        }, controller.args[2], "lbxRegisteredModePhone"));
        var imgArrow = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "25%",
            "id": "imgArrow",
            "isVisible": true,
            "right": "5%",
            "src": "lstbxdropdown.png",
            "width": "6%",
            "zIndex": 8
        }, controller.args[0], "imgArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow"), extendConfig({}, controller.args[2], "imgArrow"));
        flxRegisteredModePhone.add(lbxRegisteredModePhone, imgArrow);
        flxModeOfContactPhone.add(lblRegisteredModePhone, flxRegisteredModePhone);
        var flxModeOfContactEmail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxModeOfContactEmail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "flxModeOfContactEmail"), extendConfig({}, controller.args[1], "flxModeOfContactEmail"), extendConfig({}, controller.args[2], "flxModeOfContactEmail"));
        flxModeOfContactEmail.setDefaultUnit(kony.flex.DP);
        var lblRegisteredModeEmail = new kony.ui.Label(extendConfig({
            "id": "lblRegisteredModeEmail",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272Reg28px",
            "text": kony.i18n.getLocalizedString("kony.mb.cardManage.regEmailId"),
            "textStyle": {},
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblRegisteredModeEmail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegisteredModeEmail"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRegisteredModeEmail"));
        var flxRegisteredModeEmail = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxRegisteredModeEmail"), extendConfig({}, controller.args[1], "flxRegisteredModeEmail"), extendConfig({}, controller.args[2], "flxRegisteredModeEmail"));
        flxRegisteredModeEmail.setDefaultUnit(kony.flex.DP);
        var lbxRegisteredModeEmail = new kony.ui.ListBox(extendConfig({
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
        }, controller.args[0], "lbxRegisteredModeEmail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbxRegisteredModeEmail"), extendConfig({
            "dropDownImage": "transparentbox_1.png",
            "groupCells": false,
            "tickedImage": "transparentbox_1.png",
            "untickedImage": "transparentbox_1.png",
            "viewConfig": {
                "toggleViewConfig": {
                    "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
                }
            },
            "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
        }, controller.args[2], "lbxRegisteredModeEmail"));
        var imgArrowEmail = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "25%",
            "id": "imgArrowEmail",
            "isVisible": true,
            "right": "5%",
            "src": "lstbxdropdown.png",
            "width": "6%",
            "zIndex": 8
        }, controller.args[0], "imgArrowEmail"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowEmail"), extendConfig({}, controller.args[2], "imgArrowEmail"));
        flxRegisteredModeEmail.add(lbxRegisteredModeEmail, imgArrowEmail);
        flxModeOfContactEmail.add(lblRegisteredModeEmail, flxRegisteredModeEmail);
        flxDetailsOption3.add(lblSecurityCode, flxModeOfContactPhone, flxModeOfContactEmail);
        flxBody.add(flxNewDevice, flxDeviceRegistration, lblLetsAuthenticateTransaction, flxDetailsOption3);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnSend = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "sknBtn004B9526pxFocus",
            "height": "40dp",
            "id": "btnSend",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "text": kony.i18n.getLocalizedString("kony.mb.Messages.send"),
            "zIndex": 8
        }, controller.args[0], "btnSend"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSend"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSend"));
        flxButtons.add(btnSend);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var customPopup = new com.kmb.common.customPopup(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "height": "100%",
            "id": "customPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "imgPopup": {
                    "src": "imagedrag.png"
                }
            }
        }, controller.args[0], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customPopup"));
        flxPopup.add(customPopup);
        flxMFAOption3Screen.add(flxHeaderMFAOption3, flxBody, flxButtons, flxPopup);
        var flxSecurityCodeScreen = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSecurityCodeScreen",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSecurityCodeScreen"), extendConfig({}, controller.args[1], "flxSecurityCodeScreen"), extendConfig({}, controller.args[2], "flxSecurityCodeScreen"));
        flxSecurityCodeScreen.setDefaultUnit(kony.flex.DP);
        var flxSecurityCodeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityCodeHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityCodeHeader"), extendConfig({}, controller.args[1], "flxSecurityCodeHeader"), extendConfig({}, controller.args[2], "flxSecurityCodeHeader"));
        flxSecurityCodeHeader.setDefaultUnit(kony.flex.DP);
        var flxSecurityCodeHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityCodeHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityCodeHeaderTop"), extendConfig({}, controller.args[1], "flxSecurityCodeHeaderTop"), extendConfig({}, controller.args[2], "flxSecurityCodeHeaderTop"));
        flxSecurityCodeHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxSecurityCodeBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSecurityCodeBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityCodeBack"), extendConfig({}, controller.args[1], "flxSecurityCodeBack"), extendConfig({}, controller.args[2], "flxSecurityCodeBack"));
        flxSecurityCodeBack.setDefaultUnit(kony.flex.DP);
        var imgSecurityCodeBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgSecurityCodeBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgSecurityCodeBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSecurityCodeBack"), extendConfig({}, controller.args[2], "imgSecurityCodeBack"));
        flxSecurityCodeBack.add(imgSecurityCodeBack);
        var btnSecurityCodeCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnSecurityCodeCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSecurityCodeCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSecurityCodeCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSecurityCodeCancel"));
        flxSecurityCodeHeaderTop.add(flxSecurityCodeBack, btnSecurityCodeCancel);
        var lblSecurityCodeHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblSecurityCodeHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("kony.mb.enroll.securityCode"),
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblSecurityCodeHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityCodeHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityCodeHeader"));
        flxSecurityCodeHeader.add(flxSecurityCodeHeaderTop, lblSecurityCodeHeader);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50%",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxMainContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "80%",
            "id": "flxMainContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxMainContent"), extendConfig({}, controller.args[1], "flxMainContent"), extendConfig({}, controller.args[2], "flxMainContent"));
        flxMainContent.setDefaultUnit(kony.flex.DP);
        var flxSecurityCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxSecurityCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityCode"), extendConfig({}, controller.args[1], "flxSecurityCode"), extendConfig({}, controller.args[2], "flxSecurityCode"));
        flxSecurityCode.setDefaultUnit(kony.flex.DP);
        var lblEnterInfoTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblEnterInfoTitle",
            "isVisible": true,
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.EnterSecurityCodeTitle"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEnterInfoTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEnterInfoTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEnterInfoTitle"));
        flxSecurityCode.add(lblEnterInfoTitle);
        var flxSecurityCodeSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxSecurityCodeSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityCodeSeparator"), extendConfig({}, controller.args[1], "flxSecurityCodeSeparator"), extendConfig({}, controller.args[2], "flxSecurityCodeSeparator"));
        flxSecurityCodeSeparator.setDefaultUnit(kony.flex.DP);
        flxSecurityCodeSeparator.add();
        var lblEnterInfoSubtitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblEnterInfoSubtitle",
            "isVisible": true,
            "skin": "sknLbl3e4f56SSPReg30px",
            "text": "Enter Security Code",
            "textStyle": {},
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblEnterInfoSubtitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEnterInfoSubtitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEnterInfoSubtitle"));
        var flxDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "minWidth": "100dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxDetails"), extendConfig({}, controller.args[1], "flxDetails"), extendConfig({}, controller.args[2], "flxDetails"));
        flxDetails.setDefaultUnit(kony.flex.DP);
        var lblEnterSAC = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblEnterSAC",
            "isVisible": true,
            "skin": "sknLbl424242SSP22px26",
            "text": "Enter Secure Access sent on your 9*****8865 & p*******************@Kony.com...........................",
            "textStyle": {},
            "top": "11dp",
            "width": "85%",
            "zIndex": 8
        }, controller.args[0], "lblEnterSAC"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEnterSAC"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEnterSAC"));
        flxDetails.add(lblEnterSAC);
        var lblError = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblError",
            "isVisible": true,
            "skin": "sknLblF54B5E26px",
            "text": "Code Expired. Try again",
            "textStyle": {},
            "top": "12dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblError"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblError"));
        var flxCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxCode"), extendConfig({}, controller.args[1], "flxCode"), extendConfig({}, controller.args[2], "flxCode"));
        flxCode.setDefaultUnit(kony.flex.DP);
        var customSecurityCode2 = new com.commom.customSecurityCode(extendConfig({
            "height": "100%",
            "id": "customSecurityCode2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "overrides": {}
        }, controller.args[0], "customSecurityCode2"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customSecurityCode2"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customSecurityCode2"));
        flxCode.add(customSecurityCode2);
        var btnReSend = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtn0095e428px",
            "height": "40dp",
            "id": "btnReSend",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtn0095e428px",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.ReSend"),
            "top": "7dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "btnReSend"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnReSend"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnReSend"));
        var flxInputSecurityCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "35dp",
            "id": "flxInputSecurityCode",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "top": "2%",
            "width": "170dp",
            "zIndex": 1
        }, controller.args[0], "flxInputSecurityCode"), extendConfig({}, controller.args[1], "flxInputSecurityCode"), extendConfig({}, controller.args[2], "flxInputSecurityCode"));
        flxInputSecurityCode.setDefaultUnit(kony.flex.DP);
        var lblSecurityOne = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblSecurityOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblSecurityOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityOne"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityOne"));
        var lblSecurityTwo = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblSecurityTwo",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblSecurityTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityTwo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityTwo"));
        var lblSecurityThree = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblSecurityThree",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblSecurityThree"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityThree"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityThree"));
        var lblSecurityFour = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblSecurityFour",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblSecurityFour"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityFour"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityFour"));
        var lblSecurityFive = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblSecurityFive",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblSecurityFive"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityFive"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityFive"));
        var lblSecuritySix = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblSecuritySix",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblSecuritySix"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecuritySix"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecuritySix"));
        var flxInputSecurityCodeBorder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxInputSecurityCodeBorder",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "-170dp",
            "isModalContainer": false,
            "top": "33dp",
            "width": "170dp",
            "zIndex": 1
        }, controller.args[0], "flxInputSecurityCodeBorder"), extendConfig({}, controller.args[1], "flxInputSecurityCodeBorder"), extendConfig({}, controller.args[2], "flxInputSecurityCodeBorder"));
        flxInputSecurityCodeBorder.setDefaultUnit(kony.flex.DP);
        var flxSecurityOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSecurityOne",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxSecurityOne"), extendConfig({}, controller.args[1], "flxSecurityOne"), extendConfig({}, controller.args[2], "flxSecurityOne"));
        flxSecurityOne.setDefaultUnit(kony.flex.DP);
        flxSecurityOne.add();
        var flxSecurityTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSecurityTwo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxSecurityTwo"), extendConfig({}, controller.args[1], "flxSecurityTwo"), extendConfig({}, controller.args[2], "flxSecurityTwo"));
        flxSecurityTwo.setDefaultUnit(kony.flex.DP);
        flxSecurityTwo.add();
        var flxSecurityThree = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSecurityThree",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxSecurityThree"), extendConfig({}, controller.args[1], "flxSecurityThree"), extendConfig({}, controller.args[2], "flxSecurityThree"));
        flxSecurityThree.setDefaultUnit(kony.flex.DP);
        flxSecurityThree.add();
        var flxSecurityFour = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSecurityFour",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxSecurityFour"), extendConfig({}, controller.args[1], "flxSecurityFour"), extendConfig({}, controller.args[2], "flxSecurityFour"));
        flxSecurityFour.setDefaultUnit(kony.flex.DP);
        flxSecurityFour.add();
        var flxSecurityFive = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSecurityFive",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxSecurityFive"), extendConfig({}, controller.args[1], "flxSecurityFive"), extendConfig({}, controller.args[2], "flxSecurityFive"));
        flxSecurityFive.setDefaultUnit(kony.flex.DP);
        flxSecurityFive.add();
        var flxSecuritySix = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSecuritySix",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxSecuritySix"), extendConfig({}, controller.args[1], "flxSecuritySix"), extendConfig({}, controller.args[2], "flxSecuritySix"));
        flxSecuritySix.setDefaultUnit(kony.flex.DP);
        flxSecuritySix.add();
        flxInputSecurityCodeBorder.add(flxSecurityOne, flxSecurityTwo, flxSecurityThree, flxSecurityFour, flxSecurityFive, flxSecuritySix);
        flxInputSecurityCode.add(lblSecurityOne, lblSecurityTwo, lblSecurityThree, lblSecurityFour, lblSecurityFive, lblSecuritySix, flxInputSecurityCodeBorder);
        var flxResendTimer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxResendTimer",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "3%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxResendTimer"), extendConfig({}, controller.args[1], "flxResendTimer"), extendConfig({}, controller.args[2], "flxResendTimer"));
        flxResendTimer.setDefaultUnit(kony.flex.DP);
        var lblResendin = new kony.ui.Label(extendConfig({
            "centerX": "40%",
            "centerY": "50%",
            "id": "lblResendin",
            "isVisible": true,
            "skin": "sknlbl424242SSPReg32",
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.Resendin"),
            "textStyle": {},
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblResendin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblResendin"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblResendin"));
        var lblTimeRemaining = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTimeRemaining",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknlbl424242SSPReg32",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTimeRemaining"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTimeRemaining"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTimeRemaining"));
        flxResendTimer.add(lblResendin, lblTimeRemaining);
        var flxBottomContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "140dp",
            "id": "flxBottomContainer",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBottomContainer"), extendConfig({}, controller.args[1], "flxBottomContainer"), extendConfig({}, controller.args[2], "flxBottomContainer"));
        flxBottomContainer.setDefaultUnit(kony.flex.DP);
        flxBottomContainer.add();
        flxMainContent.add(flxSecurityCode, flxSecurityCodeSeparator, lblEnterInfoSubtitle, flxDetails, lblError, flxCode, btnReSend, flxInputSecurityCode, flxResendTimer, flxBottomContainer);
        var flxRememberMyDevice = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "80dp",
            "clipBounds": false,
            "height": "40dp",
            "id": "flxRememberMyDevice",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRememberMyDevice"), extendConfig({}, controller.args[1], "flxRememberMyDevice"), extendConfig({}, controller.args[2], "flxRememberMyDevice"));
        flxRememberMyDevice.setDefaultUnit(kony.flex.DP);
        var lblRememberMyDevice = new kony.ui.Label(extendConfig({
            "centerX": "45%",
            "centerY": "50%",
            "id": "lblRememberMyDevice",
            "isVisible": true,
            "skin": "sknLbl424242SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.devReg.remMyDevice"),
            "textStyle": {},
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRememberMyDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRememberMyDevice"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRememberMyDevice"));
        var flxCheckBox = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCheckBox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxCheckBox"), extendConfig({}, controller.args[1], "flxCheckBox"), extendConfig({}, controller.args[2], "flxCheckBox"));
        flxCheckBox.setDefaultUnit(kony.flex.DP);
        var imgTermsAccepted = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "18dp",
            "id": "imgTermsAccepted",
            "isVisible": true,
            "left": "0dp",
            "src": "tickmarkbox.png",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "imgTermsAccepted"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTermsAccepted"), extendConfig({}, controller.args[2], "imgTermsAccepted"));
        flxCheckBox.add(imgTermsAccepted);
        flxRememberMyDevice.add(lblRememberMyDevice, flxCheckBox);
        var btnVerify = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "40dp",
            "id": "btnVerify",
            "isVisible": true,
            "skin": "sknBtn0095e426pxEnabled",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Verify"),
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnVerify"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVerify"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnVerify"));
        flxMainContainer.add(flxMainContent, flxRememberMyDevice, btnVerify);
        var flxKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "32%",
            "id": "flxKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxKeypad"), extendConfig({}, controller.args[1], "flxKeypad"), extendConfig({}, controller.args[2], "flxKeypad"));
        flxKeypad.setDefaultUnit(kony.flex.DP);
        var keypad = new com.kmb.common.keypad(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "height": "100%",
            "id": "keypad",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "imgClear": {
                    "src": "cancelkeypad_1.png"
                },
                "imgClearKeypad": {
                    "src": "transparentbox_1.png"
                }
            }
        }, controller.args[0], "keypad"), extendConfig({
            "overrides": {}
        }, controller.args[1], "keypad"), extendConfig({
            "overrides": {}
        }, controller.args[2], "keypad"));
        flxKeypad.add(keypad);
        flxSecurityCodeScreen.add(flxSecurityCodeHeader, flxMainContainer, flxKeypad);
        TransfersFlowSecurityCode.add(flxMFAOption3Screen, flxSecurityCodeScreen);
        return TransfersFlowSecurityCode;
    }
})