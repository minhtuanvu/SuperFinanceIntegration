define("flxPdf", function() {
    return function(controller) {
        var flxPdf = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxPdf",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxPdf.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxFFFFFFBorderE9E9E9Radius3px",
            "top": "10dp",
            "width": "90%"
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var imgPdf = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgPdf",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "pdf.png",
            "top": "7dp",
            "width": "25dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknLbl4176A4SSPReg26px",
            "text": "Factsheet.pdf",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgDownload = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgDownload",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "download.png",
            "top": "7dp",
            "width": "25dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxContent.add(imgPdf, lblName, imgDownload);
        flxPdf.add(flxContent);
        return flxPdf;
    }
})