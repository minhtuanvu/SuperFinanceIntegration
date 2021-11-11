define("flxAccountsEngageInsert", function() {
    return function(controller) {
        var flxAccountsEngageInsert = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFbox",
            "height": "158dp",
            "id": "flxAccountsEngageInsert",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxAccountsEngageInsert.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "158dp",
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
        var imgEngageInsertIcon = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgEngageInsertIcon",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "engagemenu.png",
            "top": "10%",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEngageInsertCaption = new kony.ui.Label({
            "id": "lblEngageInsertCaption",
            "isVisible": true,
            "left": "13%",
            "right": "10%",
            "skin": "sknLbl424242SSPBold22px",
            "text": kony.i18n.getLocalizedString("kony.mb.Engage.accountsInsertCaption"),
            "textStyle": {},
            "top": "15%",
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
        var lblEngageInsertText = new kony.ui.Label({
            "id": "lblEngageInsertText",
            "isVisible": true,
            "left": "13%",
            "right": "10%",
            "skin": "sknLbl424242SSP19px",
            "text": kony.i18n.getLocalizedString("kony.mb.Engage.accountsInsertText"),
            "textStyle": {},
            "top": "32%",
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
        var btnEngageInsertChatNow = new kony.ui.Button({
            "bottom": "10%",
            "focusSkin": "sknBtn0A78D1BgffffffSSP36pxTab",
            "height": "28%",
            "id": "btnEngageInsertChatNow",
            "isVisible": true,
            "left": "5%",
            "right": "5%",
            "skin": "sknBtn0A78D1BgffffffSSP36pxTab",
            "text": kony.i18n.getLocalizedString("kony.mb.Engage.chatNow"),
            "top": "62%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
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
        flxMain.add(imgEngageInsertIcon, lblEngageInsertCaption, lblEngageInsertText, btnEngageInsertChatNow, flxSeparator);
        flxAccountsEngageInsert.add(flxMain);
        return flxAccountsEngageInsert;
    }
})