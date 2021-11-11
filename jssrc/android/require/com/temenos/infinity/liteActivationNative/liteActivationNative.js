define(function() {
    return function(controller) {
        var liteActivationNative = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "liteActivationNative",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onHide": controller.AS_FlexContainer_fcc1e7e1c556435f80cc42e9e9c331f5,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c906fcd91bd140818f72c8f55c927785(eventobject);
            },
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "liteActivationNative"), extendConfig({}, controller.args[1], "liteActivationNative"), extendConfig({}, controller.args[2], "liteActivationNative"));
        liteActivationNative.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "70dp",
            "clipBounds": false,
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxFields = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFields",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFields"), extendConfig({}, controller.args[1], "flxFields"), extendConfig({}, controller.args[2], "flxFields"));
        flxFields.setDefaultUnit(kony.flex.DP);
        var flxGroup1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "20dp",
            "width": "80%"
        }, controller.args[0], "flxGroup1"), extendConfig({}, controller.args[1], "flxGroup1"), extendConfig({}, controller.args[2], "flxGroup1"));
        flxGroup1.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label(extendConfig({
            "id": "lblField1",
            "isVisible": true,
            "left": "0dp",
            "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1"));
        var flxValueField1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField1"), extendConfig({}, controller.args[1], "flxValueField1"), extendConfig({}, controller.args[2], "flxValueField1"));
        flxValueField1.setDefaultUnit(kony.flex.DP);
        flxValueField1.add();
        flxGroup1.add(lblField1, flxValueField1);
        var flxGroup2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "13dp",
            "width": "80%"
        }, controller.args[0], "flxGroup2"), extendConfig({}, controller.args[1], "flxGroup2"), extendConfig({}, controller.args[2], "flxGroup2"));
        flxGroup2.setDefaultUnit(kony.flex.DP);
        var lblField2 = new kony.ui.Label(extendConfig({
            "id": "lblField2",
            "isVisible": true,
            "left": "0dp",
            "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField2"));
        var flxValueField2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField2"), extendConfig({}, controller.args[1], "flxValueField2"), extendConfig({}, controller.args[2], "flxValueField2"));
        flxValueField2.setDefaultUnit(kony.flex.DP);
        flxValueField2.add();
        flxGroup2.add(lblField2, flxValueField2);
        flxFields.add(flxGroup1, flxGroup2);
        var flxActivationMsg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxActivationMsg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxActivationMsg"), extendConfig({}, controller.args[1], "flxActivationMsg"), extendConfig({}, controller.args[2], "flxActivationMsg"));
        flxActivationMsg.setDefaultUnit(kony.flex.DP);
        var flxSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknFlxe3e3e3",
            "top": "1dp",
            "zIndex": 1000
        }, controller.args[0], "flxSeperator"), extendConfig({}, controller.args[1], "flxSeperator"), extendConfig({}, controller.args[2], "flxSeperator"));
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        var flxActivationMsgMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxActivationMsgMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxActivationMsgMain"), extendConfig({}, controller.args[1], "flxActivationMsgMain"), extendConfig({}, controller.args[2], "flxActivationMsgMain"));
        flxActivationMsgMain.setDefaultUnit(kony.flex.DP);
        var flxImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": 0,
            "width": "30dp"
        }, controller.args[0], "flxImg"), extendConfig({}, controller.args[1], "flxImg"), extendConfig({}, controller.args[2], "flxImg"));
        flxImg.setDefaultUnit(kony.flex.DP);
        var imgInfo = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgInfo",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "infonew.png",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "imgInfo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgInfo"), extendConfig({}, controller.args[2], "imgInfo"));
        flxImg.add(imgInfo);
        var flxText = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxText",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "82%"
        }, controller.args[0], "flxText"), extendConfig({}, controller.args[1], "flxText"), extendConfig({}, controller.args[2], "flxText"));
        flxText.setDefaultUnit(kony.flex.DP);
        var lblText = new kony.ui.Label(extendConfig({
            "id": "lblText",
            "includeFontPadding": true,
            "isVisible": true,
            "left": "0",
            "skin": "sknLbl424242SSP22px",
            "text": "You are Activating the e-Bill feature for this payee. Going forward, your bill amount will be appearing in the list automatically. ",
            "textStyle": {
                "lineSpacing": 3,
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "100%"
        }, controller.args[0], "lblText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText"));
        flxText.add(lblText);
        flxActivationMsgMain.add(flxImg, flxText);
        flxActivationMsg.add(flxSeperator, flxActivationMsgMain);
        flxMainContainer.add(flxFields, flxActivationMsg);
        var flxTermsAndConditions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "70dp",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxTermsAndConditions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxTermsAndConditions"), extendConfig({}, controller.args[1], "flxTermsAndConditions"), extendConfig({}, controller.args[2], "flxTermsAndConditions"));
        flxTermsAndConditions.setDefaultUnit(kony.flex.DP);
        var flxImgCheckBox = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxImgCheckBox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": 0,
            "width": "30dp"
        }, controller.args[0], "flxImgCheckBox"), extendConfig({}, controller.args[1], "flxImgCheckBox"), extendConfig({}, controller.args[2], "flxImgCheckBox"));
        flxImgCheckBox.setDefaultUnit(kony.flex.DP);
        var imgCheckBox = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgCheckBox",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "checkboxtick.png",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "imgCheckBox"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCheckBox"), extendConfig({}, controller.args[2], "imgCheckBox"));
        flxImgCheckBox.add(imgCheckBox);
        var lblTC = new kony.ui.Label(extendConfig({
            "id": "lblTC",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknLbl424242SSP22px",
            "text": "I have read and agree to the biller’s",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblTC"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTC"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTC"));
        var btnTC = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnTC",
            "isVisible": true,
            "left": "60dp",
            "skin": "ICSknBtn4176a4",
            "text": "Terms and Conditions",
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "btnTC"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTC"), extendConfig({}, controller.args[2], "btnTC"));
        flxTermsAndConditions.add(flxImgCheckBox, lblTC, btnTC);
        var btnAction = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "focusSkin": "sknBtn004B9526pxFocus",
            "height": "40dp",
            "id": "btnAction",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtn0095e426pxDisabled",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.AddPayee"),
            "zIndex": 3
        }, controller.args[0], "btnAction"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAction"), extendConfig({}, controller.args[2], "btnAction"));
        flxMain.add(flxMainContainer, flxTermsAndConditions, btnAction);
        var flxCustomGroupPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCustomGroupPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxCustomGroupPopup"), extendConfig({}, controller.args[1], "flxCustomGroupPopup"), extendConfig({}, controller.args[2], "flxCustomGroupPopup"));
        flxCustomGroupPopup.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "ICSknFlxffffffBorder",
            "width": "80%",
            "zIndex": 200
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxImageWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "70dp",
            "id": "flxImageWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "20dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "flxImageWrapper"), extendConfig({}, controller.args[1], "flxImageWrapper"), extendConfig({}, controller.args[2], "flxImageWrapper"));
        flxImageWrapper.setDefaultUnit(kony.flex.DP);
        var imgConfirm = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgConfirm",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgConfirm"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgConfirm"), extendConfig({}, controller.args[2], "imgConfirm"));
        flxImageWrapper.add(imgConfirm);
        var lblMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMessage",
            "isVisible": true,
            "text": "eBill Activated Successfully",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMessage"));
        var lblMessage2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMessage2",
            "isVisible": false,
            "skin": "sknlbl727272SSP93pr",
            "text": "Unwanted error happened please start the activation process again.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblMessage2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMessage2"));
        var btn1 = new kony.ui.Button(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "height": "48dp",
            "id": "btn1",
            "isVisible": true,
            "skin": "ICSknBtn0095e4RoundedffffffSSP45px",
            "text": kony.i18n.getLocalizedString("kony.mb.statusMessage.done"),
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btn1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn1"), extendConfig({}, controller.args[2], "btn1"));
        var btn2 = new kony.ui.Button(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "height": "48dp",
            "id": "btn2",
            "isVisible": true,
            "skin": "ICSknBtn003e75Bor003e75",
            "text": kony.i18n.getLocalizedString("kony.mb.statusMessage.done"),
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btn2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn2"), extendConfig({}, controller.args[2], "btn2"));
        flxContainer.add(flxImageWrapper, lblMessage, lblMessage2, btn1, btn2);
        flxCustomGroupPopup.add(flxContainer);
        liteActivationNative.add(flxMain, flxCustomGroupPopup);
        return liteActivationNative;
    }
})