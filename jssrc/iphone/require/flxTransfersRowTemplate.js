define("flxTransfersRowTemplate", function() {
    return function(controller) {
        var flxTransfersRowTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "73dp",
            "id": "flxTransfersRowTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknTNf9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTransfersRowTemplate.setDefaultUnit(kony.flex.DP);
        var flxSwipeContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSwipeContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSwipeContainer.setDefaultUnit(kony.flex.DP);
        var flxRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxRow.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknTLFlxE3E3E3",
            "top": "72dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxGroup1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "18dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "70%"
        }, {}, {});
        flxGroup1.setDefaultUnit(kony.flex.DP);
        var flxIcon1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxIcon1",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "6dp",
            "width": "22dp"
        }, {}, {});
        flxIcon1.setDefaultUnit(kony.flex.DP);
        var imgIcon1 = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgIcon1",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknTNSlimage",
            "src": "disputedtransactionicon1.png",
            "top": "0dp",
            "width": "22dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxIcon1.add(imgIcon1);
        var flxField1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxField1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "8dp",
            "width": "80%"
        }, {}, {});
        flxField1.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label({
            "id": "lblField1",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknTLSSP42424215px",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxField1.add(lblField1);
        flxGroup1.add(flxIcon1, flxField1);
        var flxGroup2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "18dp",
            "skin": "ICSknTNSlfbox",
            "top": -5,
            "width": "70%"
        }, {}, {});
        flxGroup2.setDefaultUnit(kony.flex.DP);
        var flxIcon2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "22dp",
            "id": "flxIcon2",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "ICSknTNSlfbox",
            "top": "16dp",
            "width": "22dp"
        }, {}, {});
        flxIcon2.setDefaultUnit(kony.flex.DP);
        var imgIcon2 = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgIcon2",
            "isVisible": true,
            "left": "0dp",
            "src": "disputedtransactionicon1.png",
            "top": "0dp",
            "width": "22dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxIcon2.add(imgIcon2);
        var lblField2 = new kony.ui.Label({
            "id": "lblField2",
            "isVisible": true,
            "right": "5dp",
            "skin": "ICSknTLSSP42424215px",
            "textStyle": {},
            "top": "15dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxGroup2.add(flxIcon2, lblField2);
        var flxGroup3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxGroup3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "18dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "70%"
        }, {}, {});
        flxGroup3.setDefaultUnit(kony.flex.DP);
        var flxIcon3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxIcon3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "-2dp",
            "width": "22dp"
        }, {}, {});
        flxIcon3.setDefaultUnit(kony.flex.DP);
        var imgIcon3 = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgIcon3",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknTNSlimage",
            "src": "green.png",
            "top": "40dp",
            "width": "22dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxIcon3.add(imgIcon3);
        var flxField3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxField3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "80%"
        }, {}, {});
        flxField3.setDefaultUnit(kony.flex.DP);
        var lblField3 = new kony.ui.Label({
            "id": "lblField3",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknTNSSP72727215px",
            "textStyle": {},
            "top": "40dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxField3.add(lblField3);
        flxGroup3.add(flxIcon3, flxField3);
        var flxGroup4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "18dp",
            "skin": "ICSknTNSlfbox",
            "top": "20dp",
            "width": "70%"
        }, {}, {});
        flxGroup4.setDefaultUnit(kony.flex.DP);
        var flxIcon4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "22dp",
            "id": "flxIcon4",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "ICSknTNSlfbox",
            "top": "22dp",
            "width": "22dp"
        }, {}, {});
        flxIcon4.setDefaultUnit(kony.flex.DP);
        var imgIcon4 = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgIcon4",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknTNSlimage",
            "src": "disputedtransactionicon1.png",
            "top": "0dp",
            "width": "22dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxIcon4.add(imgIcon4);
        var lblField4 = new kony.ui.Label({
            "id": "lblField4",
            "isVisible": true,
            "right": "5dp",
            "skin": "ICSknTNSSP72727215px",
            "textStyle": {},
            "top": "23dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxGroup4.add(flxIcon4, lblField4);
        flxRow.add(flxSeparator, flxGroup1, flxGroup2, flxGroup3, flxGroup4);
        var flxRightSideContents = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRightSideContents",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "140dp",
            "zIndex": 1
        }, {}, {});
        flxRightSideContents.setDefaultUnit(kony.flex.DP);
        var flxSwipeBtn1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSwipeBtn1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx003E75",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxSwipeBtn1.setDefaultUnit(kony.flex.DP);
        var imgSwipeBtn1 = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgSwipeBtn1",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknTNSlimage",
            "src": "repeat.png",
            "top": "8dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSwipeBtn1Text = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblSwipeBtn1Text",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLblFFFFFF15PX",
            "text": "Edit",
            "textStyle": {},
            "top": "5dp",
            "width": "60dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxSwipeBtn1.add(imgSwipeBtn1, lblSwipeBtn1Text);
        var flxSwipeBtn2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSwipeBtn2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "ICSknFlxEE0005",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxSwipeBtn2.setDefaultUnit(kony.flex.DP);
        var imgSwipeBtn2 = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgSwipeBtn2",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknTNSlimage",
            "src": "cancel.png",
            "top": "8dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSwipeBtn2Text = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblSwipeBtn2Text",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLblFFFFFF15PX",
            "text": "View Attachments",
            "textStyle": {},
            "top": "5dp",
            "width": "60dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxSwipeBtn2.add(imgSwipeBtn2, lblSwipeBtn2Text);
        flxRightSideContents.add(flxSwipeBtn1, flxSwipeBtn2);
        flxSwipeContainer.add(flxRow, flxRightSideContents);
        flxTransfersRowTemplate.add(flxSwipeContainer);
        return flxTransfersRowTemplate;
    }
})