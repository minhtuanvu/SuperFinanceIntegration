define("flxSwipe", function() {
    return function(controller) {
        var flxSwipe = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxSwipe",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSwipe.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxRow1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxRow1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "15dp",
            "width": "93%",
            "zIndex": 1
        }, {}, {});
        flxRow1.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label({
            "height": 20,
            "id": "lblField1",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "90%",
            "skin": "sknLbl424242SSP26px",
            "text": "Bill Moran....7",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRow1.add(lblField1);
        var flxRow2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRow2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxRow2.setDefaultUnit(kony.flex.DP);
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": false,
            "height": "20dp",
            "id": "flxAccountType",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "sknflxe3e3e3border",
            "width": "20dp",
            "zIndex": 10000
        }, {}, {});
        flxAccountType.setDefaultUnit(kony.flex.DP);
        var imgAccountType = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "45%",
            "height": "11dp",
            "id": "imgAccountType",
            "isVisible": true,
            "skin": "slImage",
            "src": "personalaccount.png",
            "width": "11dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountType.add(imgAccountType);
        var imgebill = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgebill",
            "isVisible": true,
            "right": "7dp",
            "skin": "slImage",
            "src": "activeebill.png",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblField2 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblField2",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "sknLbla0a0a022px",
            "text": "2189 Schmeler Flats Apt. 166",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRow2.add(flxAccountType, imgebill, lblField2);
        flxMain.add(flxSeparator, flxRow1, flxRow2);
        var flxRightContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxRightContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0",
            "width": "210dp"
        }, {}, {});
        flxRightContainer.setDefaultUnit(kony.flex.DP);
        var flxBox1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxBox1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx0095e4",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxBox1.setDefaultUnit(kony.flex.DP);
        var imgBox1 = new kony.ui.Image2({
            "centerX": "50%",
            "height": "30dp",
            "id": "imgBox1",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "viewbill.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblBox1 = new kony.ui.Label({
            "bottom": "9dp",
            "centerX": "50%",
            "id": "lblBox1",
            "isVisible": true,
            "skin": "sknLblffffff22px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.ViewBillSmall"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxBox1.add(imgBox1, lblBox1);
        var flxBox2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxBox2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "sknFlx0095e4",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxBox2.setDefaultUnit(kony.flex.DP);
        var imgBox2 = new kony.ui.Image2({
            "centerX": "50%",
            "height": "30dp",
            "id": "imgBox2",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "billpayheader.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblBox2 = new kony.ui.Label({
            "bottom": "9dp",
            "centerX": "50%",
            "id": "lblBox2",
            "isVisible": true,
            "skin": "sknLblffffff22px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.PayBillSmall"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxBox2.add(imgBox2, lblBox2);
        var flxBox3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxBox3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "ICSknEE0005BG",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxBox3.setDefaultUnit(kony.flex.DP);
        var imgBox3 = new kony.ui.Image2({
            "centerX": "50%",
            "height": "30dp",
            "id": "imgBox3",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "deleteicon.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTrashIcon = new kony.ui.Label({
            "height": "60%",
            "id": "lblTrashIcon",
            "isVisible": false,
            "left": "0%",
            "skin": "defSegSwipeFontAwesomeIcon",
            "text": "",
            "textStyle": {},
            "top": "4dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblBox3 = new kony.ui.Label({
            "bottom": "9dp",
            "centerX": "50%",
            "id": "lblBox3",
            "isVisible": true,
            "skin": "sknLblffffff22px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.PayBillSmall"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxBox3.add(imgBox3, lblTrashIcon, lblBox3);
        flxRightContainer.add(flxBox1, flxBox2, flxBox3);
        flxSwipe.add(flxMain, flxRightContainer);
        return flxSwipe;
    }
})