define(function() {
    return function(controller) {
        var customSecurityCode = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "customSecurityCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_cf094292300444b9adf37d0a9980f410(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "customSecurityCode"), extendConfig({}, controller.args[1], "customSecurityCode"), extendConfig({}, controller.args[2], "customSecurityCode"));
        customSecurityCode.setDefaultUnit(kony.flex.DP);
        var flxTextKA = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxTextKA",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTextKA"), extendConfig({}, controller.args[1], "flxTextKA"), extendConfig({}, controller.args[2], "flxTextKA"));
        flxTextKA.setDefaultUnit(kony.flex.DP);
        var lblText0 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblText0",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblWhiteDot",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "lblText0"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText0"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblText0"));
        var lblText1 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblText1",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblWhiteDot",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "lblText1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblText1"));
        var lblText2 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblText2",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblWhiteDot",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "lblText2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblText2"));
        var lblText3 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblText3",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblWhiteDot",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "lblText3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblText3"));
        var lblText4 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblText4",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblWhiteDot",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "lblText4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblText4"));
        var lblText5 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblText5",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblWhiteDot",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "lblText5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblText5"));
        var lblText6 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblText6",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblWhiteDot",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "lblText6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblText6"));
        var lblText7 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblText7",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblWhiteDot",
            "text": "•",
            "textStyle": {},
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "lblText7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText7"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblText7"));
        flxTextKA.add(lblText0, lblText1, lblText2, lblText3, lblText4, lblText5, lblText6, lblText7);
        var flxInputSecurityCodeBorder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxInputSecurityCodeBorder",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxInputSecurityCodeBorder"), extendConfig({}, controller.args[1], "flxInputSecurityCodeBorder"), extendConfig({}, controller.args[2], "flxInputSecurityCodeBorder"));
        flxInputSecurityCodeBorder.setDefaultUnit(kony.flex.DP);
        var flxDash0 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDash0",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxDash0"), extendConfig({}, controller.args[1], "flxDash0"), extendConfig({}, controller.args[2], "flxDash0"));
        flxDash0.setDefaultUnit(kony.flex.DP);
        var lblDash0 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblDash0",
            "isVisible": true,
            "skin": "lblBlueSeparator",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblDash0"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDash0"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDash0"));
        flxDash0.add(lblDash0);
        var flxDash1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDash1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxDash1"), extendConfig({}, controller.args[1], "flxDash1"), extendConfig({}, controller.args[2], "flxDash1"));
        flxDash1.setDefaultUnit(kony.flex.DP);
        var lblDash1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblDash1",
            "isVisible": true,
            "skin": "lblBlueSeparator",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblDash1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDash1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDash1"));
        flxDash1.add(lblDash1);
        var flxDash2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDash2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxDash2"), extendConfig({}, controller.args[1], "flxDash2"), extendConfig({}, controller.args[2], "flxDash2"));
        flxDash2.setDefaultUnit(kony.flex.DP);
        var lblDash2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblDash2",
            "isVisible": true,
            "skin": "lblBlueSeparator",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblDash2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDash2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDash2"));
        flxDash2.add(lblDash2);
        var flxDash3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDash3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxDash3"), extendConfig({}, controller.args[1], "flxDash3"), extendConfig({}, controller.args[2], "flxDash3"));
        flxDash3.setDefaultUnit(kony.flex.DP);
        var lblDash3 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblDash3",
            "isVisible": true,
            "skin": "lblBlueSeparator",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblDash3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDash3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDash3"));
        flxDash3.add(lblDash3);
        var flxDash4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDash4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxDash4"), extendConfig({}, controller.args[1], "flxDash4"), extendConfig({}, controller.args[2], "flxDash4"));
        flxDash4.setDefaultUnit(kony.flex.DP);
        var lblDash4 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblDash4",
            "isVisible": true,
            "skin": "lblBlueSeparator",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblDash4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDash4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDash4"));
        flxDash4.add(lblDash4);
        var flxDash5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDash5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxDash5"), extendConfig({}, controller.args[1], "flxDash5"), extendConfig({}, controller.args[2], "flxDash5"));
        flxDash5.setDefaultUnit(kony.flex.DP);
        var lblDash5 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblDash5",
            "isVisible": true,
            "skin": "lblBlueSeparator",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblDash5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDash5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDash5"));
        flxDash5.add(lblDash5);
        var flxDash6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDash6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxDash6"), extendConfig({}, controller.args[1], "flxDash6"), extendConfig({}, controller.args[2], "flxDash6"));
        flxDash6.setDefaultUnit(kony.flex.DP);
        var lblDash6 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblDash6",
            "isVisible": true,
            "skin": "lblBlueSeparator",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblDash6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDash6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDash6"));
        flxDash6.add(lblDash6);
        var flxDash7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDash7",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxDash7"), extendConfig({}, controller.args[1], "flxDash7"), extendConfig({}, controller.args[2], "flxDash7"));
        flxDash7.setDefaultUnit(kony.flex.DP);
        var lblDash7 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblDash7",
            "isVisible": true,
            "skin": "lblBlueSeparator",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblDash7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDash7"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDash7"));
        flxDash7.add(lblDash7);
        flxInputSecurityCodeBorder.add(flxDash0, flxDash1, flxDash2, flxDash3, flxDash4, flxDash5, flxDash6, flxDash7);
        customSecurityCode.add(flxTextKA, flxInputSecurityCodeBorder);
        return customSecurityCode;
    }
})