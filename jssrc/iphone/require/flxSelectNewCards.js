define("flxSelectNewCards", function() {
    return function(controller) {
        var flxSelectNewCards = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSelectNewCards",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false
        }, {}, {});
        flxSelectNewCards.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCard",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCard.setDefaultUnit(kony.flex.DP);
        var flxCardImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCardImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "36%"
        }, {}, {});
        flxCardImg.setDefaultUnit(kony.flex.DP);
        var imgCard = new kony.ui.Image2({
            "height": "66dp",
            "id": "imgCard",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "atmcardred.png",
            "top": "15dp",
            "width": "100dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCardImg.add(imgCard);
        var flxCardDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCardDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60%"
        }, {}, {});
        flxCardDetails.setDefaultUnit(kony.flex.DP);
        var lblCardName = new kony.ui.Label({
            "id": "lblCardName",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "Golden Rewards Card",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var rtxCardDetails = new kony.ui.RichText({
            "id": "rtxCardDetails",
            "isVisible": true,
            "left": "0dp",
            "linkSkin": "defRichTextLink",
            "skin": "sknRtx15px",
            "text": "• Upto 1% Cashback on retail and online shopping (Max $ 500/month) </br>\n• Up to $ 25000 Personal Accidental Death Cover (rail/ road/ air)",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblAccess = new kony.ui.Label({
            "height": "17dp",
            "id": "lblAccess",
            "isVisible": false,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblBankName = new kony.ui.Label({
            "id": "lblBankName",
            "isVisible": false,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxCardDetails.add(lblCardName, rtxCardDetails, lblAccess, lblBankName);
        flxCard.add(flxCardImg, flxCardDetails);
        var flxButtons = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%"
        }, {}, {});
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnLearnMore = new kony.ui.Button({
            "focusSkin": "sknBtnHere",
            "id": "btnLearnMore",
            "isVisible": true,
            "left": "185dp",
            "skin": "sknBtnHere",
            "text": "Learn More",
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        var btnApply = new kony.ui.Button({
            "focusSkin": "sknBtnHere",
            "id": "btnApply",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknBtnHere",
            "text": kony.i18n.getLocalizedString("kony.mb.Location.Apply"),
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        flxButtons.add(btnLearnMore, btnApply);
        flxMain.add(flxCard, flxButtons);
        flxSelectNewCards.add(flxMain);
        return flxSelectNewCards;
    }
})