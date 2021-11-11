define("flxTransfersManage", function() {
    return function(controller) {
        var flxTransfersManage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxTransfersManage",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTransfersManage.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxTransaction = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTransaction",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {}, {});
        flxTransaction.setDefaultUnit(kony.flex.DP);
        var imgTransaction = new kony.ui.Image2({
            "height": "16dp",
            "id": "imgTransaction",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "16dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTransaction = new kony.ui.Label({
            "id": "lblTransaction",
            "isVisible": true,
            "left": "5dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "My Checking Account",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0dp",
            "width": "55%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxTransaction.add(imgTransaction, lblTransaction);
        var lblAmount = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAmount",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSP36pxSegments",
            "text": "$400,00",
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
        var flxAccount = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "15dp",
            "clipBounds": false,
            "height": "16dp",
            "id": "flxAccount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "100dp",
            "skin": "slFbox"
        }, {}, {});
        flxAccount.setDefaultUnit(kony.flex.DP);
        var imgAccount = new kony.ui.Image2({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgAccount",
            "isVisible": false,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "16dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRecurrance = new kony.ui.Image2({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgRecurrance",
            "isVisible": false,
            "left": "5dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "16dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDate = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDate",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": "ABC Bank",
            "textStyle": {},
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
        flxAccount.add(imgAccount, imgRecurrance, lblDate);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxMain.add(flxTransaction, lblAmount, flxAccount, flxSeparator);
        var flxCancelEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxCancelEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "140dp",
            "zIndex": 10
        }, {}, {});
        flxCancelEdit.setDefaultUnit(kony.flex.DP);
        var flxCancel = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxff5d6e",
            "top": "0dp",
            "width": "50%",
            "zIndex": 10
        }, {}, {});
        flxCancel.setDefaultUnit(kony.flex.DP);
        var imgCancel = new kony.ui.Image2({
            "centerX": "50%",
            "height": "15dp",
            "id": "imgCancel",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "closewhite.png",
            "top": "15dp",
            "width": "12dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCancel = new kony.ui.Label({
            "bottom": "15dp",
            "centerX": "50%",
            "id": "lblCancel",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg86pr",
            "text": kony.i18n.getLocalizedString("kony.mb.common.CancelSmall"),
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
        flxCancel.add(imgCancel, lblCancel);
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlx0095e4",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxEdit.setDefaultUnit(kony.flex.DP);
        var imgEdit = new kony.ui.Image2({
            "centerX": "50%",
            "height": "17dp",
            "id": "imgEdit",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "replyicon.png",
            "top": "13dp",
            "width": "17dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEdit = new kony.ui.Label({
            "bottom": "15dp",
            "centerX": "50%",
            "id": "lblEdit",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg86pr",
            "text": "Edit",
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
        flxEdit.add(imgEdit, lblEdit);
        flxCancelEdit.add(flxCancel, flxEdit);
        flxTransfersManage.add(flxMain, flxCancelEdit);
        return flxTransfersManage;
    }
})