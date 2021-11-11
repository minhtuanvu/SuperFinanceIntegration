define("flxP2PMain", function() {
    return function(controller) {
        var flxP2PMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "110dp",
            "id": "flxP2PMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxP2PMain.setDefaultUnit(kony.flex.DP);
        var lblP2PDown = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblP2PDown",
            "isVisible": true,
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.MM.NoP2PRecipients"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxP2PMain.add(lblP2PDown);
        return flxP2PMain;
    }
})