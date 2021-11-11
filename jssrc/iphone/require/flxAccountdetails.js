define("flxAccountdetails", function() {
    return function(controller) {
        var flxAccountdetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxAccountdetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAccountdetails.setDefaultUnit(kony.flex.DP);
        var flxRowcontainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxRowcontainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRowcontainer.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "19dp",
            "text": kony.i18n.getLocalizedString("kony.mb.accountdetails.accountNumber"),
            "textStyle": {},
            "top": "10dp",
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
        var lblValue = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblValue",
            "isVisible": true,
            "left": "19dp",
            "skin": "sknlbl424242SSPR15px",
            "text": "XXXXXXXXXX2390",
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
        var flxAccNoToggle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "90%",
            "id": "flxAccNoToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "top": "0%",
            "width": "33dp",
            "zIndex": 1
        }, {}, {});
        flxAccNoToggle.setDefaultUnit(kony.flex.DP);
        var imgAccNoToggle = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgAccNoToggle",
            "isVisible": true,
            "skin": "slImage",
            "src": "view.png",
            "width": "17dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccNoToggle.add(imgAccNoToggle);
        flxRowcontainer.add(lblTitle, lblValue, flxAccNoToggle);
        flxAccountdetails.add(flxRowcontainer);
        return flxAccountdetails;
    }
})