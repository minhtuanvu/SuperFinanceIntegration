define("flxCountryCodeNoListIC", function() {
    return function(controller) {
        var flxCountryCodeNoListIC = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "19dp",
            "id": "flxCountryCodeNoListIC",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCountryCodeNoListIC.setDefaultUnit(kony.flex.DP);
        var lblCountryCodeNo = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblCountryCodeNo",
            "isVisible": true,
            "skin": "ICSknLbl424242SSP26px",
            "text": "A",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCountryCodeNoListIC.add(lblCountryCodeNo);
        return flxCountryCodeNoListIC;
    }
})