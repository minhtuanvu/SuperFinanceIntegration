define("flxWealthDetailsCopy", function() {
    return function(controller) {
        var flxWealthDetailsCopy = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxWealthDetailsCopy",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxWealthDetailsCopy.setDefaultUnit(kony.flex.DP);
        var flxRowOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "35dp",
            "id": "flxRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRowOne.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2({
            "centerY": "50%",
            "height": "24dp",
            "id": "imgLogo",
            "isVisible": false,
            "left": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "1dp",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPSemiBold26px",
            "text": "Alphabet C class",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxClick = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxClick",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "25dp"
        }, {}, {});
        flxClick.setDefaultUnit(kony.flex.DP);
        var imgChevron = new kony.ui.Image2({
            "centerY": "50%",
            "height": "19dp",
            "id": "imgChevron",
            "isVisible": true,
            "right": "10dp",
            "skin": "slImage",
            "src": "more_detail.png",
            "top": "1dp",
            "width": "19dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxClick.add(imgChevron);
        var flxStatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxStatus",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "reverseLayoutDirection": false,
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {}, {});
        flxStatus.setDefaultUnit(kony.flex.DP);
        var imgStatus = new kony.ui.Image2({
            "centerY": "50%",
            "height": "24dp",
            "id": "imgStatus",
            "isVisible": true,
            "right": "85dp",
            "skin": "slImage",
            "src": "activegreendot.png",
            "top": "0dp",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStatus = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblStatus",
            "isVisible": true,
            "right": "10dp",
            "skin": "sknLbl424242SSPSemiBold26px",
            "text": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxStatus.add(imgStatus, lblStatus);
        flxRowOne.add(imgLogo, lblName, flxClick, flxStatus);
        var flxRowTwo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "30dp",
            "id": "flxRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRowTwo.setDefaultUnit(kony.flex.DP);
        var lblId = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblId",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSPR36px",
            "text": "US02079K1079 | NASDAQ",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblOneValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblOneValue",
            "isVisible": true,
            "right": "18dp",
            "skin": "sknLbl424242SSPReg26px",
            "text": "07/22/2020",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblOneKey = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblOneKey",
            "isVisible": true,
            "right": "27%",
            "skin": "sknlbl727272SSPR43px",
            "text": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRowTwo.add(lblId, lblOneValue, lblOneKey);
        var flxRowThree = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "30dp",
            "id": "flxRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRowThree.setDefaultUnit(kony.flex.DP);
        var lblTwoKey = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTwoKey",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSPR43px",
            "text": kony.i18n.getLocalizedString("i18n.wealth.price"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblTwoValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTwoValue",
            "isVisible": true,
            "left": "63dp",
            "skin": "sknLbl424242SSPReg26px",
            "text": "$10.90",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblThreeValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblThreeValue",
            "isVisible": true,
            "right": "18dp",
            "skin": "sknLbl424242SSPReg26px",
            "text": "$11,000.00",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblThreeKey = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblThreeKey",
            "isVisible": true,
            "right": "115dp",
            "skin": "sknlbl727272SSPR43px",
            "text": kony.i18n.getLocalizedString("i18n.wealth.total"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRowThree.add(lblTwoKey, lblTwoValue, lblThreeValue, lblThreeKey);
        var flxRowFour = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "30dp",
            "id": "flxRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRowFour.setDefaultUnit(kony.flex.DP);
        var lblFourKey = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFourKey",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSPR43px",
            "text": kony.i18n.getLocalizedString("i18n.wealth.qty"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblFourValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFourValue",
            "isVisible": true,
            "left": "58dp",
            "skin": "sknLbl424242SSPReg26px",
            "text": "10",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblFiveValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFiveValue",
            "isVisible": true,
            "right": "18dp",
            "skin": "sknLbl424242SSPReg26px",
            "text": "Buy",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblFiveKey = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFiveKey",
            "isVisible": true,
            "right": "115dp",
            "skin": "sknlbl727272SSPR43px",
            "text": "Mkt Value:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRowFour.add(lblFourKey, lblFourValue, lblFiveValue, lblFiveKey);
        var flxBottomBorder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomBorder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "top": "7dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBottomBorder.setDefaultUnit(kony.flex.DP);
        flxBottomBorder.add();
        flxWealthDetailsCopy.add(flxRowOne, flxRowTwo, flxRowThree, flxRowFour, flxBottomBorder);
        return flxWealthDetailsCopy;
    }
})