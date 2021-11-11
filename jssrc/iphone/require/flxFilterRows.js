define("flxFilterRows", function() {
    return function(controller) {
        var flxFilterRows = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxBgFFFFFF",
            "height": "60dp",
            "id": "flxFilterRows",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFilterRows.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "...",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "75%",
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
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknFlxe3e3e3",
            "zIndex": 2
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxSelection = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSelection",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "1dp",
            "width": "30dp",
            "zIndex": 2
        }, {}, {});
        flxSelection.setDefaultUnit(kony.flex.DP);
        var imgSelection = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgSelection",
            "isVisible": true,
            "left": 0,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSelection.add(imgSelection);
        flxContent.add(lblName, flxSeparator, flxSelection);
        flxFilterRows.add(flxContent);
        return flxFilterRows;
    }
})