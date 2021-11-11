define(function() {
    return function(controller) {
        var quicklinksNative = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "quicklinksNative",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_f7c215ae19ee47188378f9f2bdf36899,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c1dc8f8cca714f499bb325dd6105a76e(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "quicklinksNative"), extendConfig({}, controller.args[1], "quicklinksNative"), extendConfig({}, controller.args[2], "quicklinksNative"));
        quicklinksNative.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxLink1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "1dp",
            "clipBounds": false,
            "id": "flxLink1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSkn000000Op0",
            "top": "1dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxLink1"), extendConfig({}, controller.args[1], "flxLink1"), extendConfig({}, controller.args[2], "flxLink1"));
        flxLink1.setDefaultUnit(kony.flex.DP);
        var flxMain1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "44dp",
            "id": "flxMain1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "44dp",
            "zIndex": 1
        }, controller.args[0], "flxMain1"), extendConfig({}, controller.args[1], "flxMain1"), extendConfig({}, controller.args[2], "flxMain1"));
        flxMain1.setDefaultUnit(kony.flex.DP);
        var imgIcon1 = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "70%",
            "id": "imgIcon1",
            "isVisible": true,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "70%"
        }, controller.args[0], "imgIcon1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon1"), extendConfig({}, controller.args[2], "imgIcon1"));
        flxMain1.add(imgIcon1);
        var lblLink1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblLink1",
            "isVisible": true,
            "text": "Withdrawal Cash",
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblLink1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLink1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLink1"));
        flxLink1.add(flxMain1, lblLink1);
        var flxLink2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "1dp",
            "clipBounds": false,
            "id": "flxLink2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSkn000000Op0",
            "top": "1dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxLink2"), extendConfig({}, controller.args[1], "flxLink2"), extendConfig({}, controller.args[2], "flxLink2"));
        flxLink2.setDefaultUnit(kony.flex.DP);
        var flxMain2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "44dp",
            "id": "flxMain2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "44dp",
            "zIndex": 1
        }, controller.args[0], "flxMain2"), extendConfig({}, controller.args[1], "flxMain2"), extendConfig({}, controller.args[2], "flxMain2"));
        flxMain2.setDefaultUnit(kony.flex.DP);
        var imgIcon2 = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "70%",
            "id": "imgIcon2",
            "isVisible": true,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "70%"
        }, controller.args[0], "imgIcon2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon2"), extendConfig({}, controller.args[2], "imgIcon2"));
        flxMain2.add(imgIcon2);
        var lblLink2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblLink2",
            "isVisible": true,
            "text": "Statements",
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblLink2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLink2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLink2"));
        flxLink2.add(flxMain2, lblLink2);
        var flxLink3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "1dp",
            "clipBounds": false,
            "id": "flxLink3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSkn000000Op0",
            "top": "1dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxLink3"), extendConfig({}, controller.args[1], "flxLink3"), extendConfig({}, controller.args[2], "flxLink3"));
        flxLink3.setDefaultUnit(kony.flex.DP);
        var flxMain3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "44dp",
            "id": "flxMain3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "44dp",
            "zIndex": 1
        }, controller.args[0], "flxMain3"), extendConfig({}, controller.args[1], "flxMain3"), extendConfig({}, controller.args[2], "flxMain3"));
        flxMain3.setDefaultUnit(kony.flex.DP);
        var imgIcon3 = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "70%",
            "id": "imgIcon3",
            "isVisible": true,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "70%"
        }, controller.args[0], "imgIcon3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon3"), extendConfig({}, controller.args[2], "imgIcon3"));
        flxMain3.add(imgIcon3);
        var lblLink3 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblLink3",
            "isVisible": true,
            "skin": "ICSknLblFFFFFF15PxSSP",
            "text": "Statements",
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblLink3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLink3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLink3"));
        flxLink3.add(flxMain3, lblLink3);
        var flxLink4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "1dp",
            "clipBounds": false,
            "id": "flxLink4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSkn000000Op0",
            "top": "1dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxLink4"), extendConfig({}, controller.args[1], "flxLink4"), extendConfig({}, controller.args[2], "flxLink4"));
        flxLink4.setDefaultUnit(kony.flex.DP);
        var flxMain4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "44dp",
            "id": "flxMain4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "44dp",
            "zIndex": 1
        }, controller.args[0], "flxMain4"), extendConfig({}, controller.args[1], "flxMain4"), extendConfig({}, controller.args[2], "flxMain4"));
        flxMain4.setDefaultUnit(kony.flex.DP);
        var imgIcon4 = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "70%",
            "id": "imgIcon4",
            "isVisible": true,
            "skin": "slImage",
            "src": "more_1.png",
            "width": "70%"
        }, controller.args[0], "imgIcon4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon4"), extendConfig({}, controller.args[2], "imgIcon4"));
        flxMain4.add(imgIcon4);
        var lblLink4 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblLink4",
            "isVisible": true,
            "skin": "ICSknLblFFFFFF15PxSSP",
            "text": "More",
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblLink4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLink4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLink4"));
        flxLink4.add(flxMain4, lblLink4);
        flxMain.add(flxLink1, flxLink2, flxLink3, flxLink4);
        var flxAdditionalLinks = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAdditionalLinks",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSkn000000BG50P",
            "top": "0dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxAdditionalLinks"), extendConfig({}, controller.args[1], "flxAdditionalLinks"), extendConfig({}, controller.args[2], "flxAdditionalLinks"));
        flxAdditionalLinks.setDefaultUnit(kony.flex.DP);
        var flxDummyAnimation = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-70%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxDummyAnimation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "reverseLayoutDirection": false,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDummyAnimation"), extendConfig({}, controller.args[1], "flxDummyAnimation"), extendConfig({}, controller.args[2], "flxDummyAnimation"));
        flxDummyAnimation.setDefaultUnit(kony.flex.DP);
        var flxActions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "85dp",
            "centerX": "50%",
            "clipBounds": false,
            "id": "flxActions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "ICSknFlxFFFFFF10PFFFFFFR",
            "width": "94.67%",
            "zIndex": 1
        }, controller.args[0], "flxActions"), extendConfig({}, controller.args[1], "flxActions"), extendConfig({}, controller.args[2], "flxActions"));
        flxActions.setDefaultUnit(kony.flex.DP);
        var flxAddRow1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow1",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow1"), extendConfig({}, controller.args[1], "flxAddRow1"), extendConfig({}, controller.args[2], "flxAddRow1"));
        flxAddRow1.setDefaultUnit(kony.flex.DP);
        var lblAddLink1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink1",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "Skip a Payment",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink1"));
        var flxSeperator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator1"), extendConfig({}, controller.args[1], "flxSeperator1"), extendConfig({}, controller.args[2], "flxSeperator1"));
        flxSeperator1.setDefaultUnit(kony.flex.DP);
        flxSeperator1.add();
        flxAddRow1.add(lblAddLink1, flxSeperator1);
        var flxAddRow2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow2",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow2"), extendConfig({}, controller.args[1], "flxAddRow2"), extendConfig({}, controller.args[2], "flxAddRow2"));
        flxAddRow2.setDefaultUnit(kony.flex.DP);
        var lblAddLink2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink2",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "Skip a Payment",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink2"));
        var flxSeperator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator2"), extendConfig({}, controller.args[1], "flxSeperator2"), extendConfig({}, controller.args[2], "flxSeperator2"));
        flxSeperator2.setDefaultUnit(kony.flex.DP);
        flxSeperator2.add();
        flxAddRow2.add(lblAddLink2, flxSeperator2);
        var flxAddRow3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow3"), extendConfig({}, controller.args[1], "flxAddRow3"), extendConfig({}, controller.args[2], "flxAddRow3"));
        flxAddRow3.setDefaultUnit(kony.flex.DP);
        var lblAddLink3 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink3",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "Skip a Payment",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink3"));
        var flxSeperator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator3"), extendConfig({}, controller.args[1], "flxSeperator3"), extendConfig({}, controller.args[2], "flxSeperator3"));
        flxSeperator3.setDefaultUnit(kony.flex.DP);
        flxSeperator3.add();
        flxAddRow3.add(lblAddLink3, flxSeperator3);
        var flxAddRow4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow4",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow4"), extendConfig({}, controller.args[1], "flxAddRow4"), extendConfig({}, controller.args[2], "flxAddRow4"));
        flxAddRow4.setDefaultUnit(kony.flex.DP);
        var lblAddLink4 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink4",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "View Disputed Transactions",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink4"));
        var flxSeperator4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator4"), extendConfig({}, controller.args[1], "flxSeperator4"), extendConfig({}, controller.args[2], "flxSeperator4"));
        flxSeperator4.setDefaultUnit(kony.flex.DP);
        flxSeperator4.add();
        flxAddRow4.add(lblAddLink4, flxSeperator4);
        var flxAddRow5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow5",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow5"), extendConfig({}, controller.args[1], "flxAddRow5"), extendConfig({}, controller.args[2], "flxAddRow5"));
        flxAddRow5.setDefaultUnit(kony.flex.DP);
        var lblAddLink5 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink5",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "View Disputed Transactions",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink5"));
        var flxSeperator5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator5"), extendConfig({}, controller.args[1], "flxSeperator5"), extendConfig({}, controller.args[2], "flxSeperator5"));
        flxSeperator5.setDefaultUnit(kony.flex.DP);
        flxSeperator5.add();
        flxAddRow5.add(lblAddLink5, flxSeperator5);
        var flxAddRow6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow6",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow6"), extendConfig({}, controller.args[1], "flxAddRow6"), extendConfig({}, controller.args[2], "flxAddRow6"));
        flxAddRow6.setDefaultUnit(kony.flex.DP);
        var lblAddLink6 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink6",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "View Disputed Transactions",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink6"));
        var flxSeperator6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator6"), extendConfig({}, controller.args[1], "flxSeperator6"), extendConfig({}, controller.args[2], "flxSeperator6"));
        flxSeperator6.setDefaultUnit(kony.flex.DP);
        flxSeperator6.add();
        flxAddRow6.add(lblAddLink6, flxSeperator6);
        var flxAddRow7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow7",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow7"), extendConfig({}, controller.args[1], "flxAddRow7"), extendConfig({}, controller.args[2], "flxAddRow7"));
        flxAddRow7.setDefaultUnit(kony.flex.DP);
        var lblAddLink7 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink7",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "View Disputed Transactions",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink7"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink7"));
        var flxSeperator7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator7"), extendConfig({}, controller.args[1], "flxSeperator7"), extendConfig({}, controller.args[2], "flxSeperator7"));
        flxSeperator7.setDefaultUnit(kony.flex.DP);
        flxSeperator7.add();
        flxAddRow7.add(lblAddLink7, flxSeperator7);
        var flxAddRow8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow8",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow8"), extendConfig({}, controller.args[1], "flxAddRow8"), extendConfig({}, controller.args[2], "flxAddRow8"));
        flxAddRow8.setDefaultUnit(kony.flex.DP);
        var lblAddLink8 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink8",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "View Disputed Transactions",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink8"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink8"));
        var flxSeperator8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator8"), extendConfig({}, controller.args[1], "flxSeperator8"), extendConfig({}, controller.args[2], "flxSeperator8"));
        flxSeperator8.setDefaultUnit(kony.flex.DP);
        flxSeperator8.add();
        flxAddRow8.add(lblAddLink8, flxSeperator8);
        var flxAddRow9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow9",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow9"), extendConfig({}, controller.args[1], "flxAddRow9"), extendConfig({}, controller.args[2], "flxAddRow9"));
        flxAddRow9.setDefaultUnit(kony.flex.DP);
        var lblAddLink9 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink9",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "Pay-Off Loan",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink9"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink9"));
        var flxSeperator9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator9"), extendConfig({}, controller.args[1], "flxSeperator9"), extendConfig({}, controller.args[2], "flxSeperator9"));
        flxSeperator9.setDefaultUnit(kony.flex.DP);
        flxSeperator9.add();
        flxAddRow9.add(lblAddLink9, flxSeperator9);
        var flxAddRow10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxAddRow10",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddRow10"), extendConfig({}, controller.args[1], "flxAddRow10"), extendConfig({}, controller.args[2], "flxAddRow10"));
        flxAddRow10.setDefaultUnit(kony.flex.DP);
        var lblAddLink10 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddLink10",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSP",
            "text": "Loan Schedule",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddLink10"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddLink10"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddLink10"));
        var flxSeperator10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx000000BGP",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator10"), extendConfig({}, controller.args[1], "flxSeperator10"), extendConfig({}, controller.args[2], "flxSeperator10"));
        flxSeperator10.setDefaultUnit(kony.flex.DP);
        flxSeperator10.add();
        flxAddRow10.add(lblAddLink10, flxSeperator10);
        flxActions.add(flxAddRow1, flxAddRow2, flxAddRow3, flxAddRow4, flxAddRow5, flxAddRow6, flxAddRow7, flxAddRow8, flxAddRow9, flxAddRow10);
        var flxCancel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "15dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "52dp",
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlxFFFFFF10PFFFFFFR",
            "width": "94.67%",
            "zIndex": 1
        }, controller.args[0], "flxCancel"), extendConfig({}, controller.args[1], "flxCancel"), extendConfig({}, controller.args[2], "flxCancel"));
        flxCancel.setDefaultUnit(kony.flex.DP);
        var lblCancel = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblCancel",
            "isVisible": true,
            "skin": "ICSknLbl007AFF100PSSPBold",
            "text": "Cancel",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCancel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCancel"));
        flxCancel.add(lblCancel);
        flxDummyAnimation.add(flxActions, flxCancel);
        flxAdditionalLinks.add(flxDummyAnimation);
        quicklinksNative.add(flxMain, flxAdditionalLinks);
        return quicklinksNative;
    }
})