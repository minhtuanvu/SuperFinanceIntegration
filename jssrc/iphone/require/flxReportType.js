define("flxReportType", function() {
    return function(controller) {
        var flxReportType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxReportType",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxScrlffffff0j1a2b91bf84447",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxReportType.setDefaultUnit(kony.flex.DP);
        var lblTypeName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTypeName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP32px",
            "text": "PDF",
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
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxRadio = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRadio",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, {}, {});
        flxRadio.setDefaultUnit(kony.flex.DP);
        var imgCheck = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgCheck",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "radiobtn.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRadio.add(imgCheck);
        flxReportType.add(lblTypeName, flxSeparator, flxRadio);
        return flxReportType;
    }
})