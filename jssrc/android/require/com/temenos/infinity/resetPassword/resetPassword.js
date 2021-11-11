define(function() {
    return function(controller) {
        var resetPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "resetPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_adbd3f829c0d43dcaa5c0a81352adf1a(eventobject);
            },
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "resetPassword"), extendConfig({}, controller.args[1], "resetPassword"), extendConfig({}, controller.args[2], "resetPassword"));
        resetPassword.setDefaultUnit(kony.flex.DP);
        var flxTitle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "55dp",
            "id": "flxTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxTitle"), extendConfig({}, controller.args[1], "flxTitle"), extendConfig({}, controller.args[2], "flxTitle"));
        flxTitle.setDefaultUnit(kony.flex.DP);
        var customHeaderOption = new com.kmb.common.customHeader(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "height": "100%",
            "id": "customHeaderOption",
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
                "customHeader": {
                    "height": "100%"
                },
                "flxHeaderShadow": {
                    "isVisible": false
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
                    "centerX": "50%",
                    "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.Forgotpassword"),
                    "width": "37%"
                }
            }
        }, controller.args[0], "customHeaderOption"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customHeaderOption"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customHeaderOption"));
        flxTitle.add(customHeaderOption);
        var flxContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "93.30%",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "55dp",
            "width": "100%"
        }, controller.args[0], "flxContent"), extendConfig({}, controller.args[1], "flxContent"), extendConfig({}, controller.args[2], "flxContent"));
        flxContent.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var lbHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lbHeader",
            "isVisible": true,
            "skin": "sknLbl424242SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.EnterSecurityCode"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lbHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbHeader"));
        flxHeader.add(lbHeader);
        var flxSecureCodeContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSecureCodeContainer",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "flxSecureCodeContainer"), extendConfig({}, controller.args[1], "flxSecureCodeContainer"), extendConfig({}, controller.args[2], "flxSecureCodeContainer"));
        flxSecureCodeContainer.setDefaultUnit(kony.flex.DP);
        var flxSecureCodeContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecureCodeContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "45dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "flxSecureCodeContent"), extendConfig({}, controller.args[1], "flxSecureCodeContent"), extendConfig({}, controller.args[2], "flxSecureCodeContent"));
        flxSecureCodeContent.setDefaultUnit(kony.flex.DP);
        var lblSubtitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSubtitle",
            "isVisible": true,
            "skin": "sknLbl727272SSPR114pct",
            "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.resetPasswordTitle"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblSubtitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSubtitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSubtitle"));
        var lblErrorOtp = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblErrorOtp",
            "isVisible": false,
            "skin": "sknLblEE0005SSPR114pct",
            "text": "Failed to create a new password!",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblErrorOtp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorOtp"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblErrorOtp"));
        var flxSecureCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSecureCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "40dp",
            "width": "170dp"
        }, controller.args[0], "flxSecureCode"), extendConfig({}, controller.args[1], "flxSecureCode"), extendConfig({}, controller.args[2], "flxSecureCode"));
        flxSecureCode.setDefaultUnit(kony.flex.DP);
        var flxDigit1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDigit1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxDigit1"), extendConfig({}, controller.args[1], "flxDigit1"), extendConfig({}, controller.args[2], "flxDigit1"));
        flxDigit1.setDefaultUnit(kony.flex.DP);
        var lblCode1 = new kony.ui.Label(extendConfig({
            "height": "35dp",
            "id": "lblCode1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblCode1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCode1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCode1"));
        var flxCodeline1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxCodeline1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxCodeline1"), extendConfig({}, controller.args[1], "flxCodeline1"), extendConfig({}, controller.args[2], "flxCodeline1"));
        flxCodeline1.setDefaultUnit(kony.flex.DP);
        flxCodeline1.add();
        flxDigit1.add(lblCode1, flxCodeline1);
        var flxDigit2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDigit2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxDigit2"), extendConfig({}, controller.args[1], "flxDigit2"), extendConfig({}, controller.args[2], "flxDigit2"));
        flxDigit2.setDefaultUnit(kony.flex.DP);
        var lblCode2 = new kony.ui.Label(extendConfig({
            "height": "35dp",
            "id": "lblCode2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblCode2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCode2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCode2"));
        var flxCodeline2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxCodeline2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxCodeline2"), extendConfig({}, controller.args[1], "flxCodeline2"), extendConfig({}, controller.args[2], "flxCodeline2"));
        flxCodeline2.setDefaultUnit(kony.flex.DP);
        flxCodeline2.add();
        flxDigit2.add(lblCode2, flxCodeline2);
        var flxDigit3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDigit3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxDigit3"), extendConfig({}, controller.args[1], "flxDigit3"), extendConfig({}, controller.args[2], "flxDigit3"));
        flxDigit3.setDefaultUnit(kony.flex.DP);
        var lblCode3 = new kony.ui.Label(extendConfig({
            "height": "35dp",
            "id": "lblCode3",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblCode3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCode3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCode3"));
        var flxCodeline3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxCodeline3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxCodeline3"), extendConfig({}, controller.args[1], "flxCodeline3"), extendConfig({}, controller.args[2], "flxCodeline3"));
        flxCodeline3.setDefaultUnit(kony.flex.DP);
        flxCodeline3.add();
        flxDigit3.add(lblCode3, flxCodeline3);
        var flxDigit4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDigit4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxDigit4"), extendConfig({}, controller.args[1], "flxDigit4"), extendConfig({}, controller.args[2], "flxDigit4"));
        flxDigit4.setDefaultUnit(kony.flex.DP);
        var lblCode4 = new kony.ui.Label(extendConfig({
            "height": "35dp",
            "id": "lblCode4",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblCode4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCode4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCode4"));
        var flxCodeline4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxCodeline4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxCodeline4"), extendConfig({}, controller.args[1], "flxCodeline4"), extendConfig({}, controller.args[2], "flxCodeline4"));
        flxCodeline4.setDefaultUnit(kony.flex.DP);
        flxCodeline4.add();
        flxDigit4.add(lblCode4, flxCodeline4);
        var flxDigit5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDigit5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxDigit5"), extendConfig({}, controller.args[1], "flxDigit5"), extendConfig({}, controller.args[2], "flxDigit5"));
        flxDigit5.setDefaultUnit(kony.flex.DP);
        var lblCode5 = new kony.ui.Label(extendConfig({
            "height": "35dp",
            "id": "lblCode5",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblCode5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCode5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCode5"));
        var flxCodeline5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxCodeline5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxCodeline5"), extendConfig({}, controller.args[1], "flxCodeline5"), extendConfig({}, controller.args[2], "flxCodeline5"));
        flxCodeline5.setDefaultUnit(kony.flex.DP);
        flxCodeline5.add();
        flxDigit5.add(lblCode5, flxCodeline5);
        var flxDigit6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDigit6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxDigit6"), extendConfig({}, controller.args[1], "flxDigit6"), extendConfig({}, controller.args[2], "flxDigit6"));
        flxDigit6.setDefaultUnit(kony.flex.DP);
        var lblCode6 = new kony.ui.Label(extendConfig({
            "height": "35dp",
            "id": "lblCode6",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLble3e3e3SSP60px",
            "text": "•",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblCode6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCode6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCode6"));
        var flxCodeline6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxCodeline6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx979797",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxCodeline6"), extendConfig({}, controller.args[1], "flxCodeline6"), extendConfig({}, controller.args[2], "flxCodeline6"));
        flxCodeline6.setDefaultUnit(kony.flex.DP);
        flxCodeline6.add();
        flxDigit6.add(lblCode6, flxCodeline6);
        flxSecureCode.add(flxDigit1, flxDigit2, flxDigit3, flxDigit4, flxDigit5, flxDigit6);
        var lblResend = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblResend",
            "isVisible": true,
            "skin": "sknLbl004B95SSPRegular26px",
            "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.ReSend"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblResend"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblResend"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblResend"));
        var flxLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLine"), extendConfig({}, controller.args[1], "flxLine"), extendConfig({}, controller.args[2], "flxLine"));
        flxLine.setDefaultUnit(kony.flex.DP);
        flxLine.add();
        var lblCVV = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblCVV",
            "isVisible": true,
            "skin": "sknLbl004B95SSPRegular26px",
            "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.UsetheCVV"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCVV"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCVV"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCVV"));
        var btnNext = new kony.ui.Button(extendConfig({
            "bottom": "30dp",
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnNext",
            "isVisible": true,
            "left": "0",
            "skin": "sknBtnDarkTheme",
            "text": kony.i18n.getLocalizedString("kony.tab.common.Next"),
            "top": "35dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnNext"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNext"), extendConfig({}, controller.args[2], "btnNext"));
        flxSecureCodeContent.add(lblSubtitle, lblErrorOtp, flxSecureCode, lblResend, flxLine, lblCVV, btnNext);
        var flxKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "35%",
            "id": "flxKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
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
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "imgClear": {
                    "src": "cancelkeypad.png"
                },
                "imgClearKeypad": {
                    "src": "transparentbox.png"
                },
                "keypad": {
                    "height": "100%"
                }
            }
        }, controller.args[0], "keypad"), extendConfig({
            "overrides": {}
        }, controller.args[1], "keypad"), extendConfig({
            "overrides": {}
        }, controller.args[2], "keypad"));
        flxKeypad.add(keypad);
        flxSecureCodeContainer.add(flxSecureCodeContent, flxKeypad);
        var flxCreatePassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCreatePassword",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "45dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "flxCreatePassword"), extendConfig({}, controller.args[1], "flxCreatePassword"), extendConfig({}, controller.args[2], "flxCreatePassword"));
        flxCreatePassword.setDefaultUnit(kony.flex.DP);
        var lblErrorPwd = new kony.ui.Label(extendConfig({
            "id": "lblErrorPwd",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknLblEE0005SSPR114pct",
            "text": "Failed to create a new password!",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblErrorPwd"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorPwd"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblErrorPwd"));
        var lblNewPassword = new kony.ui.Label(extendConfig({
            "id": "lblNewPassword",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl727272SSPR114pct",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.NewPassword"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 15,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblNewPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNewPassword"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNewPassword"));
        var flxPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxFFFFFFBorderE9E9E9Radius3px",
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "flxPassword"), extendConfig({}, controller.args[1], "flxPassword"), extendConfig({}, controller.args[2], "flxPassword"));
        flxPassword.setDefaultUnit(kony.flex.DP);
        var tbxPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "0dp",
            "height": "100%",
            "id": "tbxPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterNewPassword"),
            "right": "40dp",
            "secureTextEntry": false,
            "skin": "skntbxNoborder",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "tbxPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxPassword"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxPassword"));
        var imgEyeIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgEyeIcon",
            "isVisible": true,
            "right": "10dp",
            "skin": "slImage",
            "src": "viewicon.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgEyeIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgEyeIcon"), extendConfig({}, controller.args[2], "imgEyeIcon"));
        flxPassword.add(tbxPassword, imgEyeIcon);
        var lblReenterPwd = new kony.ui.Label(extendConfig({
            "id": "lblReenterPwd",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl727272SSPR114pct",
            "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.Reenternewpassword"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblReenterPwd"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReenterPwd"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblReenterPwd"));
        var flxCnfPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "20dp",
            "clipBounds": true,
            "height": "48dp",
            "id": "flxCnfPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxFFFFFFBorderE9E9E9Radius3px",
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "flxCnfPassword"), extendConfig({}, controller.args[1], "flxCnfPassword"), extendConfig({}, controller.args[2], "flxCnfPassword"));
        flxCnfPassword.setDefaultUnit(kony.flex.DP);
        var tbxCnfPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "0dp",
            "height": "100%",
            "id": "tbxCnfPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterNewPassword"),
            "right": "40dp",
            "secureTextEntry": false,
            "skin": "skntbxNoborder",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "tbxCnfPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxCnfPassword"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxCnfPassword"));
        var imgCnfIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgCnfIcon",
            "isVisible": true,
            "right": "10dp",
            "skin": "slImage",
            "src": "tickmark.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgCnfIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCnfIcon"), extendConfig({}, controller.args[2], "imgCnfIcon"));
        flxCnfPassword.add(tbxCnfPassword, imgCnfIcon);
        var flxSecurityRequirements = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityRequirements",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 100
        }, controller.args[0], "flxSecurityRequirements"), extendConfig({}, controller.args[1], "flxSecurityRequirements"), extendConfig({}, controller.args[2], "flxSecurityRequirements"));
        flxSecurityRequirements.setDefaultUnit(kony.flex.DP);
        var lblSecurityRequirements = new kony.ui.Label(extendConfig({
            "id": "lblSecurityRequirements",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblSSPRegFD3F2F28px",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.passwordtitle"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSecurityRequirements"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityRequirements"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSecurityRequirements"));
        var rtxRulesPwd = new kony.ui.RichText(extendConfig({
            "id": "rtxRulesPwd",
            "isVisible": true,
            "left": "0dp",
            "linkSkin": "defRichTextLink",
            "right": "0dp",
            "skin": "sknrtxfd3f2fSSp95pr",
            "text": "<ul>\n<li>Minimum length- 8, maximum length- 24 </li>\n<li> Should be a combination of alpha-numeric </li> \n<li> All characters should not be same. Ex: 11111111 </li> \n<li> Values are case sensitive </li>\n</ul>",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "rtxRulesPwd"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxRulesPwd"), extendConfig({}, controller.args[2], "rtxRulesPwd"));
        flxSecurityRequirements.add(lblSecurityRequirements, rtxRulesPwd);
        var btnSetPassword = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnSetPassword",
            "isVisible": true,
            "left": "0",
            "skin": "sknBtnDarkTheme",
            "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.SetPassword"),
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnSetPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSetPassword"), extendConfig({}, controller.args[2], "btnSetPassword"));
        flxCreatePassword.add(lblErrorPwd, lblNewPassword, flxPassword, lblReenterPwd, flxCnfPassword, flxSecurityRequirements, btnSetPassword);
        flxContent.add(flxHeader, flxSecureCodeContainer, flxCreatePassword);
        var flxSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSuccess",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "55dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxSuccess"), extendConfig({}, controller.args[1], "flxSuccess"), extendConfig({}, controller.args[2], "flxSuccess"));
        flxSuccess.setDefaultUnit(kony.flex.DP);
        var flxUser = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxUser"), extendConfig({}, controller.args[1], "flxUser"), extendConfig({}, controller.args[2], "flxUser"));
        flxUser.setDefaultUnit(kony.flex.DP);
        var flxUserImage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "47dp",
            "id": "flxUserImage",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxProfileImage",
            "top": "24dp",
            "width": "47dp",
            "zIndex": 1
        }, controller.args[0], "flxUserImage"), extendConfig({}, controller.args[1], "flxUserImage"), extendConfig({}, controller.args[2], "flxUserImage"));
        flxUserImage.setDefaultUnit(kony.flex.DP);
        var imgUser = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgUser",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "userimg.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgUser"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgUser"), extendConfig({}, controller.args[2], "imgUser"));
        flxUserImage.add(imgUser);
        var lblWelcomeBack = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcomeBack",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg36pxop100",
            "text": kony.i18n.getLocalizedString("kony.mb.ForgotMain.UserName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblWelcomeBack"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcomeBack"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWelcomeBack"));
        var lblUsername = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblUsername",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg36pxop100",
            "text": "john.suresh",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUsername"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUsername"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUsername"));
        var rtxSelectOptionInfo = new kony.ui.RichText(extendConfig({
            "centerX": "50%",
            "id": "rtxSelectOptionInfo",
            "isVisible": true,
            "linkSkin": "defRichTextLink",
            "skin": "sknRtxffffffSSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.ResetPasswordSuccessMsg"),
            "top": "35dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "rtxSelectOptionInfo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxSelectOptionInfo"), extendConfig({}, controller.args[2], "rtxSelectOptionInfo"));
        flxUser.add(flxUserImage, lblWelcomeBack, lblUsername, rtxSelectOptionInfo);
        var flxProceed = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProceed",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "33%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "flxProceed"), extendConfig({}, controller.args[1], "flxProceed"), extendConfig({}, controller.args[2], "flxProceed"));
        flxProceed.setDefaultUnit(kony.flex.DP);
        var btnProceed = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnProceed",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnDarkTheme",
            "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.Proceed"),
            "top": "75dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnProceed"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnProceed"), extendConfig({}, controller.args[2], "btnProceed"));
        flxProceed.add(btnProceed);
        flxSuccess.add(flxUser, flxProceed);
        var flxSelectContact = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "93.30%",
            "id": "flxSelectContact",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "55dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxSelectContact"), extendConfig({}, controller.args[1], "flxSelectContact"), extendConfig({}, controller.args[2], "flxSelectContact"));
        flxSelectContact.setDefaultUnit(kony.flex.DP);
        var flxNewDevice = new kony.ui.FlexContainer(extendConfig({
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
            "skin": "sknFlxffffff",
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
            "skin": "slImage",
            "src": "newdevice.png",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "imgOTP"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgOTP"), extendConfig({}, controller.args[2], "imgOTP"));
        flxImgOTP.add(imgOTP);
        flxNewDevice.add(flxImgOTP);
        var flxDetails = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxDetails"), extendConfig({}, controller.args[1], "flxDetails"), extendConfig({}, controller.args[2], "flxDetails"));
        flxDetails.setDefaultUnit(kony.flex.DP);
        var lblSecurityCode = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSecurityCode",
            "isVisible": true,
            "skin": "sknLbl424242SSReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.SentCodeMultiple"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 8
        }, controller.args[0], "lblSecurityCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityCode"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSecurityCode"));
        var flxModeOfContactPhone = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxModeOfContactPhone",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxModeOfContactPhone"), extendConfig({}, controller.args[1], "flxModeOfContactPhone"), extendConfig({}, controller.args[2], "flxModeOfContactPhone"));
        flxModeOfContactPhone.setDefaultUnit(kony.flex.DP);
        var lblRegisteredModePhone = new kony.ui.Label(extendConfig({
            "id": "lblRegisteredModePhone",
            "isVisible": true,
            "left": "30dp",
            "right": "20dp",
            "skin": "sknLbl727272Reg28px",
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.RegisteredPhone"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblRegisteredModePhone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegisteredModePhone"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRegisteredModePhone"));
        var flxRegisteredModePhone = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxRegisteredModePhone",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "45dp",
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
            "skin": "sknlst424242SSPReg28px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "lbxRegisteredModePhone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "lbxRegisteredModePhone"), extendConfig({
            "applySkinsToPopup": false,
            "dropDownImage": "transparentbox.png",
            "nativeListFieldFocusSkin": "sknlstboxNoBorderSSP42424226px",
            "nativeListFieldSkin": "sknlstboxNoBorderSSP42424226px",
            "placeholderSkin": "sknlstboxNoBorderSSP42424226px",
            "tickedImage": "transparentbox.png",
            "untickedImage": "transparentbox.png",
            "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
        }, controller.args[2], "lbxRegisteredModePhone"));
        var imgArrow = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "25%",
            "id": "imgArrow",
            "isVisible": true,
            "right": "5%",
            "skin": "slImage",
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
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "flxModeOfContactEmail"), extendConfig({}, controller.args[1], "flxModeOfContactEmail"), extendConfig({}, controller.args[2], "flxModeOfContactEmail"));
        flxModeOfContactEmail.setDefaultUnit(kony.flex.DP);
        var lblRegisteredModeEmail = new kony.ui.Label(extendConfig({
            "id": "lblRegisteredModeEmail",
            "isVisible": true,
            "left": "30dp",
            "right": "20dp",
            "skin": "sknLbl727272Reg28px",
            "text": kony.i18n.getLocalizedString("kony.mb.cardManage.regEmailId"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblRegisteredModeEmail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegisteredModeEmail"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRegisteredModeEmail"));
        var flxRegisteredModeEmail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5dp",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxRegisteredModeEmail",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "45dp",
            "zIndex": 8
        }, controller.args[0], "flxRegisteredModeEmail"), extendConfig({}, controller.args[1], "flxRegisteredModeEmail"), extendConfig({}, controller.args[2], "flxRegisteredModeEmail"));
        flxRegisteredModeEmail.setDefaultUnit(kony.flex.DP);
        var lbxRegisteredModeEmail = new kony.ui.ListBox(extendConfig({
            "centerX": "50%",
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
            "skin": "sknlst424242SSPReg28px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "lbxRegisteredModeEmail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "lbxRegisteredModeEmail"), extendConfig({
            "applySkinsToPopup": false,
            "dropDownImage": "transparentbox.png",
            "nativeListFieldFocusSkin": "sknlstboxNoBorderSSP42424226px",
            "nativeListFieldSkin": "sknlstboxNoBorderSSP42424226px",
            "placeholderSkin": "sknlstboxNoBorderSSP42424226px",
            "tickedImage": "transparentbox.png",
            "untickedImage": "transparentbox.png",
            "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
        }, controller.args[2], "lbxRegisteredModeEmail"));
        var imgArrowEmail = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "25%",
            "id": "imgArrowEmail",
            "isVisible": true,
            "right": "5%",
            "skin": "slImage",
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
        var flxContinue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContinue",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30dp",
            "width": "100%"
        }, controller.args[0], "flxContinue"), extendConfig({}, controller.args[1], "flxContinue"), extendConfig({}, controller.args[2], "flxContinue"));
        flxContinue.setDefaultUnit(kony.flex.DP);
        var btnContinue = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnDarkTheme",
            "text": kony.i18n.getLocalizedString("kony.tab.common.Continue"),
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinue"), extendConfig({}, controller.args[2], "btnContinue"));
        flxContinue.add(btnContinue);
        flxDetails.add(lblSecurityCode, flxModeOfContactPhone, flxModeOfContactEmail, flxContinue);
        flxSelectContact.add(flxNewDevice, flxDetails);
        resetPassword.add(flxTitle, flxContent, flxSuccess, flxSelectContact);
        return resetPassword;
    }
})