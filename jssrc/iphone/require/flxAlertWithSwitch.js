define("flxAlertWithSwitch", function() {
    return function(controller) {
        var flxAlertWithSwitch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxAlertWithSwitch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAlertWithSwitch.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblAlert = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAlert",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSwitchBackground = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxSwitchBackground",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknflxffffffBordera0a0a010px",
            "width": "40dp",
            "zIndex": 1
        }, {}, {});
        flxSwitchBackground.setDefaultUnit(kony.flex.DP);
        var flxSwitch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "48%",
            "clipBounds": true,
            "height": "15dp",
            "id": "flxSwitch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2dp",
            "isModalContainer": false,
            "skin": "sknflxa0a0a0Bordera0a0a0Border100pxRadius",
            "width": "15dp",
            "zIndex": 1
        }, {}, {});
        flxSwitch.setDefaultUnit(kony.flex.DP);
        flxSwitch.add();
        flxSwitchBackground.add(flxSwitch);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxMain.add(lblAlert, flxSwitchBackground, flxSeparator);
        flxAlertWithSwitch.add(flxMain);
        return flxAlertWithSwitch;
    }
})