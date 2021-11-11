define("flxAssetClass", function() {
    return function(controller) {
        var flxAssetClass = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxAssetClass",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAssetClass.setDefaultUnit(kony.flex.DP);
        var flxAssestAcc = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "35%",
            "clipBounds": true,
            "id": "flxAssestAcc",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAssestAcc.setDefaultUnit(kony.flex.DP);
        var lblAssetDet = new kony.ui.Label({
            "id": "lblAssetDet",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSP93pr",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "240dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAssetCost = new kony.ui.Label({
            "id": "lblAssetCost",
            "isVisible": true,
            "right": "5%",
            "skin": "sknLbl424242SSP93pr",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "120dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAssestAcc.add(lblAssetDet, lblAssetCost);
        var flxProgress = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProgress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxProgress.setDefaultUnit(kony.flex.DP);
        var flxProgressBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12dp",
            "id": "flxProgressBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxProgressBar.setDefaultUnit(kony.flex.DP);
        var flxTarget = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTarget",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxe0e0e0Radius20px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTarget.setDefaultUnit(kony.flex.DP);
        flxTarget.add();
        var flxSpent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSpent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxslider2C82BE",
            "top": "0dp",
            "width": "60%",
            "zIndex": 2
        }, {}, {});
        flxSpent.setDefaultUnit(kony.flex.DP);
        flxSpent.add();
        flxProgressBar.add(flxTarget, flxSpent);
        flxProgress.add(flxProgressBar);
        flxAssetClass.add(flxAssestAcc, flxProgress);
        return flxAssetClass;
    }
})