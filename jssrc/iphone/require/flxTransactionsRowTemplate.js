define("flxTransactionsRowTemplate", function() {
    return function(controller) {
        var flxTransactionsRowTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxTransactionsRowTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxTransactionsRowTemplate.setDefaultUnit(kony.flex.DP);
        var flxSwipeContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSwipeContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
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
            "skin": "slFbox",
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
            "skin": "sknFlxe3e3e3",
            "top": "70dp",
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
            "skin": "slFbox",
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
            "skin": "slFbox",
            "top": "6dp",
            "width": "22dp"
        }, {}, {});
        flxIcon1.setDefaultUnit(kony.flex.DP);
        var imgIcon1 = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgIcon1",
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
        flxIcon1.add(imgIcon1);
        var flxField1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxField1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "8dp",
            "width": "80%"
        }, {}, {});
        flxField1.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label({
            "id": "lblField1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSPRegular26px",
            "text": "Money Transfer to Linda",
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
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "18dp",
            "skin": "slFbox",
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
            "right": "60dp",
            "skin": "slFbox",
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
            "right": "0dp",
            "skin": "sknLbl424242SSPRegular26px",
            "text": "$200.00",
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
            "skin": "slFbox",
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
            "skin": "slFbox",
            "top": "-2dp",
            "width": "22dp"
        }, {}, {});
        flxIcon3.setDefaultUnit(kony.flex.DP);
        var imgIcon3 = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgIcon3",
            "isVisible": true,
            "left": "0dp",
            "src": "disputedtransactionicon1.png",
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
            "skin": "slFbox",
            "top": "0dp",
            "width": "80%"
        }, {}, {});
        flxField3.setDefaultUnit(kony.flex.DP);
        var lblField3 = new kony.ui.Label({
            "id": "lblField3",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl727272SSP26pxTab",
            "text": "12/10/2020",
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
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "18dp",
            "skin": "slFbox",
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
            "right": "60dp",
            "skin": "slFbox",
            "top": "22dp",
            "width": "22dp"
        }, {}, {});
        flxIcon4.setDefaultUnit(kony.flex.DP);
        var imgIcon4 = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgIcon4",
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
        flxIcon4.add(imgIcon4);
        var lblField4 = new kony.ui.Label({
            "id": "lblField4",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl727272SSP26pxTab",
            "text": "4th Field",
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
            "skin": "slFbox",
            "top": 0,
            "width": "210dp",
            "zIndex": 1
        }, {}, {});
        flxRightSideContents.setDefaultUnit(kony.flex.DP);
        var flxSwipeBtn1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxSwipeBtn1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx003e75BG100",
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
            "src": "dispute.png",
            "top": "8dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSwipeBtn1Text = new kony.ui.Label({
            "bottom": "8dp",
            "id": "lblSwipeBtn1Text",
            "isVisible": true,
            "left": "10dp",
            "right": "8dp",
            "skin": "ICSknLblFFFFFF13PX",
            "text": "Label",
            "textStyle": {},
            "top": "5dp",
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
        flxSwipeBtn1.add(imgSwipeBtn1, lblSwipeBtn1Text);
        var flxSwipeBtn2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxSwipeBtn2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "ICSknFlx003e75BG100",
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
            "src": "dispute.png",
            "top": "8dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSwipeBtn2Text = new kony.ui.Label({
            "bottom": "8dp",
            "id": "lblSwipeBtn2Text",
            "isVisible": true,
            "left": "10dp",
            "right": "8dp",
            "skin": "ICSknLblFFFFFF13PX",
            "text": "Label",
            "textStyle": {},
            "top": "5dp",
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
        flxSwipeBtn2.add(imgSwipeBtn2, lblSwipeBtn2Text);
        var flxSwipeBtn3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxSwipeBtn3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "ICSknFlxEE0005",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxSwipeBtn3.setDefaultUnit(kony.flex.DP);
        var imgSwipeBtn3 = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgSwipeBtn3",
            "isVisible": true,
            "left": "20dp",
            "src": "cancel_1.png",
            "top": "8dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSwipeBtn3Text = new kony.ui.Label({
            "bottom": "8dp",
            "id": "lblSwipeBtn3Text",
            "isVisible": true,
            "left": "10dp",
            "right": "8dp",
            "skin": "ICSknLblFFFFFF13PX",
            "text": "Label",
            "textStyle": {},
            "top": "5dp",
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
        flxSwipeBtn3.add(imgSwipeBtn3, lblSwipeBtn3Text);
        flxRightSideContents.add(flxSwipeBtn1, flxSwipeBtn2, flxSwipeBtn3);
        flxSwipeContainer.add(flxRow, flxRightSideContents);
        var flxNoRecords = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNoRecords",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flxNoRecords.setDefaultUnit(kony.flex.DP);
        var imgIcon = new kony.ui.Image2({
            "centerY": "50%",
            "height": "40dp",
            "id": "imgIcon",
            "isVisible": true,
            "left": "25dp",
            "src": "norecordsavailableicon_1.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblNoRecords = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblNoRecords",
            "isVisible": true,
            "left": "80dp",
            "skin": "sknLbl424242SSPReg33px",
            "text": "No Records are available",
            "textStyle": {},
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
        flxNoRecords.add(imgIcon, lblNoRecords);
        flxTransactionsRowTemplate.add(flxSwipeContainer, flxNoRecords);
        return flxTransactionsRowTemplate;
    }
})