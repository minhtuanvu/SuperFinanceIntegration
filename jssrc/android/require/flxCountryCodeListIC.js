define("flxCountryCodeListIC", function() {
    return function(controller) {
        var flxCountryCodeListIC = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "52dp",
            "id": "flxCountryCodeListIC",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCountryCodeListIC.setDefaultUnit(kony.flex.DP);
        var lblCountryCode = new kony.ui.Label({
            "id": "lblCountryCode",
            "isVisible": true,
            "left": "24dp",
            "right": "44dp",
            "skin": "ICSknLbl424242SSP26px",
            "text": "Afghanistan (+004)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCountryCodeListIC.add(lblCountryCode);
        return flxCountryCodeListIC;
    }
})