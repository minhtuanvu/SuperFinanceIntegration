define(function() {
    return function(controller) {
        var sdk = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "sdk",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c9d1a50f6cf34b96bcac2a0256b40953(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 210
        }, controller.args[0], "sdk"), extendConfig({}, controller.args[1], "sdk"), extendConfig({}, controller.args[2], "sdk"));
        sdk.setDefaultUnit(kony.flex.DP);
        var flxApprove = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxApprove",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxApprove"), extendConfig({}, controller.args[1], "flxApprove"), extendConfig({}, controller.args[2], "flxApprove"));
        flxApprove.setDefaultUnit(kony.flex.DP);
        var flxApprovePopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50.00%",
            "centerY": "50.00%",
            "clipBounds": true,
            "id": "flxApprovePopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "11%",
            "isModalContainer": false,
            "right": "11%",
            "skin": "CopysknFlxffffffB2",
            "zIndex": 100
        }, controller.args[0], "flxApprovePopup"), extendConfig({}, controller.args[1], "flxApprovePopup"), extendConfig({}, controller.args[2], "flxApprovePopup"));
        flxApprovePopup.setDefaultUnit(kony.flex.DP);
        var lblHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "maxNumberOfLines": 3,
            "skin": "sknLblSSPSemiBold18px424242",
            "text": "Approve Sign In?",
            "textStyle": {},
            "top": "26dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, controller.args[0], "lblHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblHeader"));
        var lblNotification = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblNotification",
            "isVisible": true,
            "skin": "sknLblSSPR15px424242",
            "text": "Please approve the sign in to Infinity\n Online Banking",
            "textStyle": {},
            "top": "16dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblNotification"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotification"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNotification"));
        var flxLineBottomSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1px",
            "id": "flxLineBottomSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "24dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLineBottomSeparator"), extendConfig({}, controller.args[1], "flxLineBottomSeparator"), extendConfig({}, controller.args[2], "flxLineBottomSeparator"));
        flxLineBottomSeparator.setDefaultUnit(kony.flex.DP);
        flxLineBottomSeparator.add();
        var flxDecision = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxDecision",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDecision"), extendConfig({}, controller.args[1], "flxDecision"), extendConfig({}, controller.args[2], "flxDecision"));
        flxDecision.setDefaultUnit(kony.flex.DP);
        var btnDecisionNo = new kony.ui.Button(extendConfig({
            "bottom": 0,
            "centerY": "50.00%",
            "height": "100%",
            "id": "btnDecisionNo",
            "isVisible": true,
            "left": "0%",
            "skin": "sknBtnSSPR15pxEE0005BgFFFFFF",
            "text": "Deny",
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "btnDecisionNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecisionNo"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnDecisionNo"));
        var flxMiddleFLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxMiddleFLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "1px",
            "zIndex": 1
        }, controller.args[0], "flxMiddleFLine"), extendConfig({}, controller.args[1], "flxMiddleFLine"), extendConfig({}, controller.args[2], "flxMiddleFLine"));
        flxMiddleFLine.setDefaultUnit(kony.flex.DP);
        flxMiddleFLine.add();
        var btnDecisionYes = new kony.ui.Button(extendConfig({
            "bottom": 0,
            "centerY": "49.68%",
            "height": "100%",
            "id": "btnDecisionYes",
            "isVisible": true,
            "right": "0%",
            "skin": "slnBtnSSPSemiBold15px4176A4BgFFF",
            "text": "Approve",
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "btnDecisionYes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecisionYes"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnDecisionYes"));
        flxDecision.add(btnDecisionNo, flxMiddleFLine, btnDecisionYes);
        flxApprovePopup.add(lblHeader, lblNotification, flxLineBottomSeparator, flxDecision);
        flxApprove.add(flxApprovePopup);
        var transactionPinPopup = new com.temenos.infinity.mb.sca.transactionPinPopup(extendConfig({
            "height": "100%",
            "id": "transactionPinPopup",
            "isVisible": false,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 210,
            "overrides": {
                "transactionPinPopup": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "transactionPinPopup"), extendConfig({
            "overrides": {}
        }, controller.args[1], "transactionPinPopup"), extendConfig({
            "overrides": {}
        }, controller.args[2], "transactionPinPopup"));
        transactionPinPopup.identityServiceName = "CIBACustomIdentity";
        transactionPinPopup.pinPopupTitleSkin = "sknLbl3e4f56SSPReg32px";
        transactionPinPopup.pinPopupNumbersSkin = "btnNumbere3e3e3B";
        transactionPinPopup.pinPopupClearButtonSkin = "sknFlxImgCancel";
        transactionPinPopup.pinPopupTitleText = "Enter PIN";
        transactionPinPopup.popupCancelButtonSkin = "sknLbl0A78D1SSPR15px";
        transactionPinPopup.popupCancelBtnText = "Cancel";
        var flxSignInApprovedPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSignInApprovedPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxSignInApprovedPopup"), extendConfig({}, controller.args[1], "flxSignInApprovedPopup"), extendConfig({}, controller.args[2], "flxSignInApprovedPopup"));
        flxSignInApprovedPopup.setDefaultUnit(kony.flex.DP);
        var flxSignInApprovedPopupInner = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxSignInApprovedPopupInner",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "11%",
            "isModalContainer": false,
            "right": "11%",
            "skin": "CopysknFlxffffffB2",
            "zIndex": 100
        }, controller.args[0], "flxSignInApprovedPopupInner"), extendConfig({}, controller.args[1], "flxSignInApprovedPopupInner"), extendConfig({}, controller.args[2], "flxSignInApprovedPopupInner"));
        flxSignInApprovedPopupInner.setDefaultUnit(kony.flex.DP);
        var imgSuccess = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgSuccess",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "30dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSuccess"), extendConfig({}, controller.args[2], "imgSuccess"));
        var lblSignInApproved = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSignInApproved",
            "isVisible": true,
            "skin": "sknSSPSemiBold24px000000",
            "text": "Sign In Approved",
            "textStyle": {},
            "top": "24dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblSignInApproved"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSignInApproved"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSignInApproved"));
        var lblSignInDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSignInDescription",
            "isVisible": true,
            "maxNumberOfLines": null,
            "skin": "sknLblSSPR16px727272",
            "text": "You have now signed in to online banking.",
            "textStyle": {},
            "top": "23dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblSignInDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSignInDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSignInDescription"));
        var btnDone = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "48dp",
            "id": "btnDone",
            "isVisible": true,
            "skin": "ICSknBtn003E75FFFFFF15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.done"),
            "top": "26dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDone"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnDone"));
        flxSignInApprovedPopupInner.add(imgSuccess, lblSignInApproved, lblSignInDescription, btnDone);
        flxSignInApprovedPopup.add(flxSignInApprovedPopupInner);
        var flxSignInDeniedPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSignInDeniedPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxSignInDeniedPopup"), extendConfig({}, controller.args[1], "flxSignInDeniedPopup"), extendConfig({}, controller.args[2], "flxSignInDeniedPopup"));
        flxSignInDeniedPopup.setDefaultUnit(kony.flex.DP);
        var flxSignInDeniedPopupInner = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxSignInDeniedPopupInner",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "11%",
            "isModalContainer": false,
            "right": "11%",
            "skin": "CopysknFlxffffffB2",
            "zIndex": 100
        }, controller.args[0], "flxSignInDeniedPopupInner"), extendConfig({}, controller.args[1], "flxSignInDeniedPopupInner"), extendConfig({}, controller.args[2], "flxSignInDeniedPopupInner"));
        flxSignInDeniedPopupInner.setDefaultUnit(kony.flex.DP);
        var imgDeclined = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgDeclined",
            "isVisible": true,
            "skin": "slImage",
            "src": "error.png",
            "top": "30dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgDeclined"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDeclined"), extendConfig({}, controller.args[2], "imgDeclined"));
        var lblSignInDeclined = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSignInDeclined",
            "isVisible": true,
            "skin": "sknSSPSemiBold24px000000",
            "text": "Sign in denied",
            "textStyle": {},
            "top": "24dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblSignInDeclined"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSignInDeclined"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSignInDeclined"));
        var lblSignInDeclineDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSignInDeclineDescription",
            "isVisible": true,
            "skin": "sknLblSSPR16px727272",
            "text": "You have denied the sign in request.",
            "textStyle": {},
            "top": "23dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblSignInDeclineDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSignInDeclineDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSignInDeclineDescription"));
        var btnClose = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "48dp",
            "id": "btnClose",
            "isVisible": true,
            "skin": "ICSknBtnFFFFFF003E7515px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.close"),
            "top": "26dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnClose"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnClose"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnClose"));
        flxSignInDeniedPopupInner.add(imgDeclined, lblSignInDeclined, lblSignInDeclineDescription, btnClose);
        flxSignInDeniedPopup.add(flxSignInDeniedPopupInner);
        sdk.add(flxApprove, transactionPinPopup, flxSignInApprovedPopup, flxSignInDeniedPopup);
        return sdk;
    }
})