define("flxConsentTitle", function() {
    return function(controller) {
        var flxConsentTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxConsentTitle",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxConsentTitle.setDefaultUnit(kony.flex.DP);
        var flxTopShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "3dp",
            "id": "flxTopShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "top": "5dp",
            "width": "100%"
        }, {}, {});
        flxTopShadow.setDefaultUnit(kony.flex.DP);
        flxTopShadow.add();
        var flxConsentType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxConsentType",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxBfF6F6F6",
            "width": "100%"
        }, {}, {});
        flxConsentType.setDefaultUnit(kony.flex.DP);
        var lblConsent = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblConsent",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPReg30px",
            "text": "Consent Type",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxConsentType.add(lblConsent);
        var flxDownShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "3dp",
            "id": "flxDownShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "top": "0",
            "width": "100%"
        }, {}, {});
        flxDownShadow.setDefaultUnit(kony.flex.DP);
        flxDownShadow.add();
        var flxPlaceholder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxPlaceholder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%"
        }, {}, {});
        flxPlaceholder.setDefaultUnit(kony.flex.DP);
        var lblPlaceholder = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblPlaceholder",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl424242SSPR15px",
            "text": "Your personal data allows us to create a better online experience for you",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxPlaceholder.add(lblPlaceholder);
        var flxErrorText = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxErrorText",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "98%"
        }, {}, {});
        flxErrorText.setDefaultUnit(kony.flex.DP);
        var imgErrIcon = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgErrIcon",
            "isVisible": false,
            "left": "20dp",
            "skin": "slImage",
            "src": "alert_2.png",
            "top": "15dp",
            "width": "25dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblErrorText = new kony.ui.Label({
            "height": "40dp",
            "id": "lblErrorText",
            "isVisible": false,
            "right": "20dp",
            "skin": "sknLblff0000SSPReg26px",
            "text": "You can't change this at the moment. Please contact us for more information",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "77%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxErrorText.add(imgErrIcon, lblErrorText);
        var flxConsentBlocked = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": true,
            "id": "flxConsentBlocked",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, {}, {});
        flxConsentBlocked.setDefaultUnit(kony.flex.DP);
        var lblConsentBlocked = new kony.ui.Label({
            "id": "lblConsentBlocked",
            "isVisible": false,
            "left": "20dp",
            "right": 20,
            "skin": "sknlbl727272SSPR13px",
            "text": "This is temporarily not allowed and will revert to allowed later on",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "90%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxConsentBlocked.add(lblConsentBlocked);
        var lblSeparator = new kony.ui.Label({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": false,
            "left": "0dp",
            "right": "0dp",
            "skin": "sknLblSeparatore3e3e3",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxConsentTitle.add(flxTopShadow, flxConsentType, flxDownShadow, flxPlaceholder, flxErrorText, flxConsentBlocked, lblSeparator);
        return flxConsentTitle;
    }
})