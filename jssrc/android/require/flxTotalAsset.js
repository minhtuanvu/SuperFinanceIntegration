define("flxTotalAsset", function() {
    return function(controller) {
        var flxTotalAsset = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTotalAsset",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx003e75Bg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTotalAsset.setDefaultUnit(kony.flex.DP);
        var flxSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        var flxAssetValues = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxAssetValues",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "90%"
        }, {}, {});
        flxAssetValues.setDefaultUnit(kony.flex.DP);
        var flxTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTitle",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx003e75Bg",
            "width": "56%"
        }, {}, {});
        flxTitle.setDefaultUnit(kony.flex.DP);
        var flxDot = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "25px",
            "clipBounds": true,
            "height": "20px",
            "id": "flxDot",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx04C477",
            "width": "20px"
        }, {}, {});
        flxDot.setDefaultUnit(kony.flex.DP);
        flxDot.add();
        var lblTitle = new kony.ui.Label({
            "centerY": "20px",
            "id": "lblTitle",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknffffffSSPR18px",
            "text": "Cash (50%)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "95%",
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxTitle.add(flxDot, lblTitle);
        var lblValue = new kony.ui.Label({
            "centerY": "20px",
            "id": "lblValue",
            "isVisible": true,
            "left": "10dp",
            "right": "0dp",
            "skin": "sknffffffSSPR18px",
            "text": "$30,500.50",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "39%",
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAssetValues.add(flxTitle, lblValue);
        flxTotalAsset.add(flxSeperator, flxAssetValues);
        return flxTotalAsset;
    }
})