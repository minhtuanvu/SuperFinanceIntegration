define("flxFiltertype", function() {
    return function(controller) {
        var flxFiltertype = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFiltertype",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFiltertype.setDefaultUnit(kony.flex.DP);
        var flxalltrans = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxalltrans",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxalltrans.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "27dp",
            "skin": "sknLbl4176A4SSPReg26px",
            "text": "All Transactions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flximg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "98%",
            "id": "flximg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "84%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": "15%"
        }, {}, {});
        flximg.setDefaultUnit(kony.flex.DP);
        var imgtick = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgtick",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "tickmark_green.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flximg.add(imgtick);
        var flxallransline = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1.50%",
            "id": "flxallransline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "99%",
            "width": "100%",
            "zIndex": 100
        }, {}, {});
        flxallransline.setDefaultUnit(kony.flex.DP);
        flxallransline.add();
        flxalltrans.add(lblTitle, flximg, flxallransline);
        flxFiltertype.add(flxalltrans);
        return flxFiltertype;
    }
})