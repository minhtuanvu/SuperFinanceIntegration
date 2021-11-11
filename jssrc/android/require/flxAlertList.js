define("flxAlertList", function() {
    return function(controller) {
        var flxAlertList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxAlertList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxAlertList.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "maxWidth": "65%",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "6dp",
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblValue",
            "isVisible": false,
            "maxNumberOfLines": 1,
            "maxWidth": "20%",
            "right": "35dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "10dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxShadowOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxShadowOne.setDefaultUnit(kony.flex.DP);
        flxShadowOne.add();
        var flxOptions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "8dp",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxOptions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxOptions.setDefaultUnit(kony.flex.DP);
        var lblSMS = new kony.ui.Label({
            "bottom": "0dp",
            "id": "lblSMS",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLblalertA0A0A0",
            "text": kony.i18n.getLocalizedString("kony.mb.Alerts.SMS"),
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
        var lblcomma1 = new kony.ui.Label({
            "bottom": "0dp",
            "id": "lblcomma1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblalertA0A0A0",
            "text": ",",
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
        var lblEmail = new kony.ui.Label({
            "bottom": "0dp",
            "id": "lblEmail",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblalertA0A0A0",
            "text": kony.i18n.getLocalizedString("kony.mb.Alerts.Email"),
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
        var lblcomma2 = new kony.ui.Label({
            "bottom": "0dp",
            "id": "lblcomma2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblalertA0A0A0",
            "text": ",",
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
        var lblPushNotification = new kony.ui.Label({
            "bottom": "0dp",
            "id": "lblPushNotification",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblalertA0A0A0",
            "text": kony.i18n.getLocalizedString("kony.mb.Alerts.pushNotifications"),
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
        flxOptions.add(lblSMS, lblcomma1, lblEmail, lblcomma2, lblPushNotification);
        flxAlertList.add(lblTitle, lblValue, imgArrow, flxShadowOne, flxOptions);
        return flxAlertList;
    }
})