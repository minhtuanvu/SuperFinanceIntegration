define("flxEditConsent", function() {
    return function(controller) {
        var flxEditConsent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxEditConsent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxEditConsent.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxDetailsConsent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxDetailsConsent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, {}, {});
        flxDetailsConsent.setDefaultUnit(kony.flex.DP);
        var lblDetailsConsent = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDetailsConsent",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl424242SSPR15px",
            "text": "Details",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var switchSelect = new kony.ui.Switch({
            "centerY": "50%",
            "height": "40dp",
            "id": "switchSelect",
            "isVisible": true,
            "right": "30dp",
            "selectedIndex": 1,
            "skin": "sknSwitch0095e4Op100pr000000Op10pr",
            "width": "60dp",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDetailsConsent.add(lblDetailsConsent, switchSelect);
        flxEditConsent.add(flxSeparator, flxDetailsConsent);
        return flxEditConsent;
    }
})