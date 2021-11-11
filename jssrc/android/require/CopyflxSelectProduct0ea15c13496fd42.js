define("CopyflxSelectProduct0ea15c13496fd42", function() {
    return function(controller) {
        var CopyflxSelectProduct0ea15c13496fd42 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "81dp",
            "id": "CopyflxSelectProduct0ea15c13496fd42",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxffffff"
        }, {}, {});
        CopyflxSelectProduct0ea15c13496fd42.setDefaultUnit(kony.flex.DP);
        var flxShadowUser = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowUser",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxShadowUser.setDefaultUnit(kony.flex.DP);
        flxShadowUser.add();
        var lblProductTitle = new kony.ui.Label({
            "centerY": "50%",
            "height": "25%",
            "id": "lblProductTitle",
            "isVisible": true,
            "left": "20%",
            "skin": "sknLbl424242SSP26px",
            "text": "Th New Product Pro",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50.00%",
            "height": "35dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "left": "2%",
            "skin": "slImage",
            "src": "remeberme.png",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyflxSelectProduct0ea15c13496fd42.add(flxShadowUser, lblProductTitle, imgCheckbox);
        return CopyflxSelectProduct0ea15c13496fd42;
    }
})