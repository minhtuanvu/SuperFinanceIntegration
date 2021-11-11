define("flxCountryCode", function() {
    return function(controller) {
        var flxCountryCode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxCountryCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCountryCode.setDefaultUnit(kony.flex.DP);
        var flxCountry = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCountry",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCountry.setDefaultUnit(kony.flex.DP);
        var imgCountryCodeFlag = new kony.ui.Image2({
            "bottom": "17dp",
            "height": "23dp",
            "id": "imgCountryCodeFlag",
            "isVisible": false,
            "left": "20dp",
            "src": "french.png",
            "top": "19dp",
            "width": "32dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCountryName = new kony.ui.Label({
            "bottom": "21dp",
            "height": "19dp",
            "id": "lblCountryName",
            "isVisible": true,
            "left": "5%",
            "skin": "ICSknLbl42424234px",
            "text": "Afghanistan",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": "55%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCountry.add(imgCountryCodeFlag, lblCountryName);
        var flxCode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "15%",
            "top": "16dp",
            "width": "10%"
        }, {}, {});
        flxCode.setDefaultUnit(kony.flex.DP);
        var lblCountryCode = new kony.ui.Label({
            "bottom": "21dp",
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblCountryCode",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl72727234px",
            "text": "93",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCode.add(lblCountryCode);
        var flxImageRightArrow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "15dp",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxImageRightArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5%",
            "top": "16dp",
            "width": "34dp",
            "zIndex": 1
        }, {}, {});
        flxImageRightArrow.setDefaultUnit(kony.flex.DP);
        var imgRightArrow = new kony.ui.Image2({
            "bottom": "17dp",
            "centerY": "50%",
            "height": "13dp",
            "id": "imgRightArrow",
            "isVisible": true,
            "left": "20dp",
            "src": "chevron.png",
            "top": "19dp",
            "width": "13dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImageRightArrow.add(imgRightArrow);
        flxCountryCode.add(flxCountry, flxCode, flxImageRightArrow);
        return flxCountryCode;
    }
})