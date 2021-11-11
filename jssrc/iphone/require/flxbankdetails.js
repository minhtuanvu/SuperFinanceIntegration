define("flxbankdetails", function() {
    return function(controller) {
        var flxbankdetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxbankdetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxbgfffffNoborder",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxbankdetails.setDefaultUnit(kony.flex.DP);
        var flxbankdetailscontainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxbankdetailscontainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxbankdetailscontainer.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "bottom": "0dp",
            "id": "lblTitle",
            "isVisible": true,
            "left": "19dp",
            "skin": "sknLbl727272SSPR15px",
            "text": "Label",
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
        var lblValue = new kony.ui.Label({
            "bottom": "0dp",
            "id": "lblValue",
            "isVisible": true,
            "right": "19dp",
            "skin": "sknlbl424242SSPR15px",
            "text": "lblttext",
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
        flxbankdetailscontainer.add(lblTitle, lblValue);
        flxbankdetails.add(flxbankdetailscontainer);
        return flxbankdetails;
    }
})