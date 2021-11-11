define("flxJointHolders", function() {
    return function(controller) {
        var flxJointHolders = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxJointHolders",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxJointHolders.setDefaultUnit(kony.flex.DP);
        var lblJointHolder = new kony.ui.Label({
            "id": "lblJointHolder",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Instrument:",
            "textStyle": {},
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblJointHolderVal = new kony.ui.Label({
            "id": "lblJointHolderVal",
            "isVisible": true,
            "right": "25dp",
            "skin": "sknlbl424242ssp40px",
            "text": "Euro",
            "textStyle": {},
            "top": "5dp",
            "width": "50%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxJointHolders.add(lblJointHolder, lblJointHolderVal);
        return flxJointHolders;
    }
})