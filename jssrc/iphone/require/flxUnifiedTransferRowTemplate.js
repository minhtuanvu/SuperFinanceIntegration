define("flxUnifiedTransferRowTemplate", function() {
    return function(controller) {
        var flxUnifiedTransferRowTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxUnifiedTransferRowTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxUnifiedTransferRowTemplate.setDefaultUnit(kony.flex.DP);
        var flxRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxRow.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
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
        var imgIcon12 = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgIcon12",
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
        flxIcon1.add(imgIcon1, imgIcon12);
        var flxField1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxField1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6dp",
            "isModalContainer": false,
            "top": "8dp",
            "width": "80%"
        }, {}, {});
        flxField1.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label({
            "height": "20dp",
            "id": "lblField1",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSPRegular26px",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
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
            "text": "Label",
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
            "top": "0dp",
            "width": "70%"
        }, {}, {});
        flxGroup3.setDefaultUnit(kony.flex.DP);
        var flxIcon3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxIcon3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "-2dp",
            "width": "46dp"
        }, {}, {});
        flxIcon3.setDefaultUnit(kony.flex.DP);
        var imgIcon3 = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgIcon3",
            "isVisible": false,
            "left": "0dp",
            "src": "personal.png",
            "top": "40dp",
            "width": "22dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgIcon31 = new kony.ui.Image2({
            "height": "24dp",
            "id": "imgIcon31",
            "isVisible": false,
            "left": "2dp",
            "src": "citi.png",
            "top": "40dp",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxIcon3.add(imgIcon3, imgIcon31);
        var flxField3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxField3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "80%"
        }, {}, {});
        flxField3.setDefaultUnit(kony.flex.DP);
        var lblField3 = new kony.ui.Label({
            "id": "lblField3",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl727272SSP26pxTab",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
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
        var flxNoRecords = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNoRecords",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "20dp",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flxNoRecords.setDefaultUnit(kony.flex.DP);
        var imgIcon = new kony.ui.Image2({
            "height": "40dp",
            "id": "imgIcon",
            "isVisible": true,
            "left": "25dp",
            "src": "norecordsavailableicon.png",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblNoRecords = new kony.ui.Label({
            "height": "50%",
            "id": "lblNoRecords",
            "isVisible": true,
            "left": "80dp",
            "skin": "sknLbl424242SSPReg33px",
            "text": "No Record is available.",
            "textStyle": {},
            "top": "0dp",
            "width": "300dp",
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
        flxUnifiedTransferRowTemplate.add(flxRow, flxNoRecords);
        return flxUnifiedTransferRowTemplate;
    }
})