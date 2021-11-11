define("flxUnifiedTransferHeader", function() {
    return function(controller) {
        var flxUnifiedTransferHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxUnifiedTransferHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxF6F6F6",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxUnifiedTransferHeader.setDefaultUnit(kony.flex.DP);
        var flxImgChevron = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxImgChevron",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "-5dp",
            "top": "7dp",
            "width": "70dp"
        }, {}, {});
        flxImgChevron.setDefaultUnit(kony.flex.DP);
        var imgChevron = new kony.ui.Image2({
            "height": "100%",
            "id": "imgChevron",
            "isVisible": true,
            "left": "0dp",
            "src": "groupexpandicon.png",
            "top": "0dp",
            "width": "100%",
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
            "skin": "ICSknFlxShadow000fff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxUpShadow.setDefaultUnit(kony.flex.DP);
        flxUpShadow.add();
        flxUnifiedTransferHeader.add(flxImgChevron, lblHeaderName, flxUpShadow);
        return flxUnifiedTransferHeader;
    }
})