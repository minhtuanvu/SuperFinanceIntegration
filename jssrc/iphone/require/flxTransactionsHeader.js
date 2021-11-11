define("flxTransactionsHeader", function() {
    return function(controller) {
        var flxTransactionsHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxTransactionsHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxF6F6F6",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTransactionsHeader.setDefaultUnit(kony.flex.DP);
        var flxImgChevron = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxImgChevron",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "8dp",
            "skin": "slFbox",
            "top": "10dp",
            "width": "40dp"
        }, {}, {});
        flxImgChevron.setDefaultUnit(kony.flex.DP);
        var imgChevron = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "16dp",
            "id": "imgChevron",
            "isVisible": true,
            "left": "0dp",
            "src": "arrowup_1.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImgChevron.add(imgChevron);
        var lblHeaderName = new kony.ui.Label({
            "id": "lblHeaderName",
            "isVisible": true,
            "left": "25dp",
            "skin": "sknLbl424242SSPReg33px",
            "text": "Transaction header name",
            "textStyle": {},
            "top": "20dp",
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
        var flxUpShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxUpShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxUpShadow.setDefaultUnit(kony.flex.DP);
        flxUpShadow.add();
        flxTransactionsHeader.add(flxImgChevron, lblHeaderName, flxUpShadow);
        return flxTransactionsHeader;
    }
})