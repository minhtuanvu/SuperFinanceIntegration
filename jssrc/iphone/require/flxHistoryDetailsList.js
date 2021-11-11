define("flxHistoryDetailsList", function() {
    return function(controller) {
        var flxHistoryDetailsList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHistoryDetailsList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxHistoryDetailsList.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxRowOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "35dp",
            "id": "flxRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
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
            "width": "63%",
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
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": false,
            "left": "0dp",
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%"
        }, {}, {});
        flxClick.setDefaultUnit(kony.flex.DP);
        var imgChevron = new kony.ui.Image2({
            "centerY": "50%",
            "height": "24dp",
            "id": "imgChevron",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "activegreendot.png",
            "top": "1dp",
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
            "left": "0dp",
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
        flxClick.add(imgChevron, lblStatus);
        flxRowOne.add(imgLogo, lblName, flxClick);
        var flxRowTwo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "30dp",
            "id": "flxRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRowTwo.setDefaultUnit(kony.flex.DP);
        var flxDetail = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxDetail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "44%"
        }, {}, {});
        flxDetail.setDefaultUnit(kony.flex.DP);
        var lblId = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblId",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl727272SSPLight22px",
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
        flxDetail.add(lblId);
        var flxDetailOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "20dp",
            "id": "flxDetailOne",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "f9f9",
            "width": "47%",
            "zIndex": 1
        }, {}, {});
        flxDetailOne.setDefaultUnit(kony.flex.DP);
        var lblOneValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblOneValue",
            "isVisible": true,
            "left": "0",
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
            "right": "1dp",
            "skin": "sknlbl727272SSP93pr",
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
        flxDetailOne.add(lblOneValue, lblOneKey);
        flxRowTwo.add(flxDetail, flxDetailOne);
        var flxRowThree = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "30dp",
            "id": "flxRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRowThree.setDefaultUnit(kony.flex.DP);
        var flxDetailTwo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "20dp",
            "id": "flxDetailTwo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxDetailTwo.setDefaultUnit(kony.flex.DP);
        var lblTwoKey = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTwoKey",
            "isVisible": true,
            "left": 0,
            "skin": "sknlbl727272SSP93pr",
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
            "left": "5dp",
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
        flxDetailTwo.add(lblTwoKey, lblTwoValue);
        var flxDetailThree = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "20dp",
            "id": "flxDetailThree",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "f9f9",
            "width": "41%",
            "zIndex": 1
        }, {}, {});
        flxDetailThree.setDefaultUnit(kony.flex.DP);
        var lblThreeValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblThreeValue",
            "isVisible": true,
            "right": 0,
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
            "right": 0,
            "skin": "sknlbl727272SSP93pr",
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
        flxDetailThree.add(lblThreeValue, lblThreeKey);
        flxRowThree.add(flxDetailTwo, flxDetailThree);
        var flxRowFour = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "30dp",
            "id": "flxRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRowFour.setDefaultUnit(kony.flex.DP);
        var flxDetailFour = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxDetailFour",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%"
        }, {}, {});
        flxDetailFour.setDefaultUnit(kony.flex.DP);
        var lblFourKey = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFourKey",
            "isVisible": true,
            "skin": "sknlbl727272SSP93pr",
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
            "left": "5dp",
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
        flxDetailFour.add(lblFourKey, lblFourValue);
        var flxDetailFive = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "20dp",
            "id": "flxDetailFive",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "f9f9",
            "width": "41%",
            "zIndex": 1
        }, {}, {});
        flxDetailFive.setDefaultUnit(kony.flex.DP);
        var lblFiveValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFiveValue",
            "isVisible": true,
            "left": "5dp",
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
            "centerY": "49.81%",
            "id": "lblFiveKey",
            "isVisible": true,
            "left": "0",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.type"),
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
        flxDetailFive.add(lblFiveValue, lblFiveKey);
        flxRowFour.add(flxDetailFour, flxDetailFive);
        var flxBottomBorder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
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
        flxMain.add(flxRowOne, flxRowTwo, flxRowThree, flxRowFour, flxBottomBorder);
        flxHistoryDetailsList.add(flxMain);
        return flxHistoryDetailsList;
    }
})