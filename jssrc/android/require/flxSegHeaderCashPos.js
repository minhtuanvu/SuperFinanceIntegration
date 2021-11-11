define("flxSegHeaderCashPos", function() {
    return function(controller) {
        var flxSegHeaderCashPos = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxSegHeaderCashPos",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx003e75Bg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSegHeaderCashPos.setDefaultUnit(kony.flex.DP);
        var flxSpendingSub = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSpendingSub",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {}, {});
        flxSpendingSub.setDefaultUnit(kony.flex.DP);
        var lblMemberShipName = new kony.ui.Label({
            "id": "lblMemberShipName",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP129Pr",
            "text": "Org001020",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "7dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "7dp",
            "width": "30dp"
        }, {}, {});
        flxImg.setDefaultUnit(kony.flex.DP);
        var imgArrow = new kony.ui.Image2({
            "height": "100%",
            "id": "imgArrow",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "whitearrowdown.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImg.add(imgArrow);
        flxSpendingSub.add(lblMemberShipName, flxImg);
        var flxSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxBgFFFFFF",
            "top": "15dp",
            "zIndex": 1
        }, {}, {});
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxSegHeaderCashPos.add(flxSpendingSub, flxSeperator);
        return flxSegHeaderCashPos;
    }
})