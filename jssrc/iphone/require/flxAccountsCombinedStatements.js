define("flxAccountsCombinedStatements", function() {
    return function(controller) {
        var flxAccountsCombinedStatements = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAccountsCombinedStatements",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAccountsCombinedStatements.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
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
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxAccountName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAccountName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxAccountName.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "height": "20dp",
            "id": "lblAccountName",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "Account Nick..3008",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "4dp",
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
        flxAccountName.add(lblAccountName);
        var lblAccountType = new kony.ui.Label({
            "id": "lblAccountType",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272Brf6f6f6Reg98",
            "text": "Savings",
            "textStyle": {},
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 1, 1],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSelect = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c1fd4fa7f5ea4f4da5b9c484ccdd07b6,
            "right": "1%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "16%",
            "zIndex": 6
        }, {}, {});
        flxSelect.setDefaultUnit(kony.flex.DP);
        var imgSelect = new kony.ui.Image2({
            "centerY": "50.00%",
            "height": "30dp",
            "id": "imgSelect",
            "isVisible": true,
            "right": "24dp",
            "skin": "slImage",
            "src": "inactivebox.png",
            "width": "30dp",
            "zIndex": 6
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSelect.add(imgSelect);
        flxMain.add(flxSeparator, flxAccountName, lblAccountType, flxSelect);
        flxAccountsCombinedStatements.add(flxMain);
        return flxAccountsCombinedStatements;
    }
})