define("flxDownloadOptions", function() {
    return function(controller) {
        var flxDownloadOptions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxDownloadOptions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDownloadOptions.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "79%",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "right": "5%",
            "skin": "sknFlxEBEBEBBorder",
            "top": "15%",
            "width": "90%"
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var imgPdfIcon = new kony.ui.Image2({
            "centerY": "50%",
            "height": "35dp",
            "id": "imgPdfIcon",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "pdf_image.png",
            "width": "45dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblType = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblType",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLbl4176A4SSPReg26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgDownload = new kony.ui.Image2({
            "centerY": "50%",
            "height": "45dp",
            "id": "imgDownload",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "download.png",
            "width": "45dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxContent.add(imgPdfIcon, lblType, imgDownload);
        flxDownloadOptions.add(flxContent);
        return flxDownloadOptions;
    }
})