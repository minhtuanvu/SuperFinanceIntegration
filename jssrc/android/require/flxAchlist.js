define("flxAchlist", function() {
    return function(controller) {
        var flxAchlist = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAchlist",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAchlist.setDefaultUnit(kony.flex.DP);
        var flxCategory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": 60,
            "id": "flxCategory",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCategory.setDefaultUnit(kony.flex.DP);
        var lblSeparator = new kony.ui.Label({
            "bottom": "0dp",
            "height": "1.50%",
            "id": "lblSeparator",
            "isVisible": false,
            "left": "5%",
            "skin": "sknLblSeparatore3e3e3",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "98%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxsep = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxsep",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "98%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxsep.setDefaultUnit(kony.flex.DP);
        flxsep.add();
        var flxcontent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "98%",
            "id": "flxcontent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxcontent.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "18dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxArrow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "99%",
            "id": "flxArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxArrow.setDefaultUnit(kony.flex.DP);
        var imgArrow = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "18dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxArrow.add(imgArrow);
        flxcontent.add(lblTitle, flxArrow);
        flxCategory.add(lblSeparator, flxsep, flxcontent);
        flxAchlist.add(flxCategory);
        return flxAchlist;
    }
})