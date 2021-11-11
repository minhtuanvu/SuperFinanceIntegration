define("flxSegSwiftBICSearchList", function() {
    return function(controller) {
        var flxSegSwiftBICSearchList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxSegSwiftBICSearchList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSegSwiftBICSearchList.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchListOptions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxSwiftBICSearchListOptions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSwiftBICSearchListOptions.setDefaultUnit(kony.flex.DP);
        var imgSwiftBICSearchListTick = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgSwiftBICSearchListTick",
            "isVisible": false,
            "right": 10,
            "src": "selectedtick.png",
            "top": "5dp",
            "width": "30dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSwiftBICSearchOptions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxSwiftBICSearchOptions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3Bdr8Px",
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSwiftBICSearchOptions.setDefaultUnit(kony.flex.DP);
        var lblSwiftBICSearchListName = new kony.ui.Label({
            "height": "20dp",
            "id": "lblSwiftBICSearchListName",
            "isVisible": true,
            "left": "20dp",
            "right": "15dp",
            "skin": "ICSknLbl72727234px",
            "text": "BIC/ SWIFT :",
            "textStyle": {},
            "top": "15dp",
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
        var lblSwiftBICSearchListHeader = new kony.ui.Label({
            "bottom": "10dp",
            "height": "25dp",
            "id": "lblSwiftBICSearchListHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "text": "MCRBRUMM123",
            "textStyle": {},
            "top": "0dp",
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
        var lblBICSwiftBICSearchListDescription = new kony.ui.Label({
            "bottom": "15dp",
            "id": "lblBICSwiftBICSearchListDescription",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
            "textStyle": {},
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxSwiftBICSearchOptions.add(lblSwiftBICSearchListName, lblSwiftBICSearchListHeader, lblBICSwiftBICSearchListDescription);
        flxSwiftBICSearchListOptions.add(imgSwiftBICSearchListTick, flxSwiftBICSearchOptions);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxSegSwiftBICSearchList.add(flxSwiftBICSearchListOptions, flxSeparator);
        return flxSegSwiftBICSearchList;
    }
})