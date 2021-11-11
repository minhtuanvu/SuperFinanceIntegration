define("flxClearViewAll", function() {
    return function(controller) {
        var flxClearViewAll = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxClearViewAll",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxClearViewAll.setDefaultUnit(kony.flex.DP);
        var flxViewContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxViewContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxViewContainer.setDefaultUnit(kony.flex.DP);
        var lblViewAll = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblViewAll",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl0095e4SSPReg32px",
            "text": "View All",
            "textStyle": {},
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var imgViewAll = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgViewAll",
            "isVisible": true,
            "left": "65%",
            "skin": "slImage",
            "src": "chevronright.png",
            "top": "18dp",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxViewContainer.add(lblViewAll, imgViewAll);
        flxClearViewAll.add(flxViewContainer);
        return flxClearViewAll;
    }
})