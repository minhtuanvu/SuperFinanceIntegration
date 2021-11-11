define("flxWealthAccountDetail", function() {
    return function(controller) {
        var flxWealthAccountDetail = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxWealthAccountDetail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxWealthAccountDetail.setDefaultUnit(kony.flex.DP);
        var flxRowOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "30dp",
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
        var flxName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "20dp",
            "id": "flxName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flxName.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName",
            "isVisible": true,
            "skin": "sknLbl424242SSPReg30px",
            "text": "Income",
            "textStyle": {},
            "top": "0dp",
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
        flxName.add(lblName);
        var flxAmount = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "20dp",
            "id": "flxAmount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "f9f9",
            "width": "31%",
            "zIndex": 1
        }, {}, {});
        flxAmount.setDefaultUnit(kony.flex.DP);
        var lblValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblValue",
            "isVisible": true,
            "right": "10dp",
            "skin": "sknLbl424242SSPReg30px",
            "text": "+$550.00",
            "textStyle": {},
            "top": "0dp",
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
        flxAmount.add(lblValue);
        flxRowOne.add(flxName, flxAmount);
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
        var flxDate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "20dp",
            "id": "flxDate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flxDate.setDefaultUnit(kony.flex.DP);
        var lblDate = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDate",
            "isVisible": true,
            "left": 0,
            "skin": "sknlbl727272SSP93pr",
            "text": "11/10/2020",
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
        flxDate.add(lblDate);
        var flxValue = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "20dp",
            "id": "flxValue",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "f9f9",
            "width": "61%",
            "zIndex": 1
        }, {}, {});
        flxValue.setDefaultUnit(kony.flex.DP);
        var lblAmountValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAmountValue",
            "isVisible": true,
            "right": "10dp",
            "skin": "sknlbl727272SSP93pr",
            "text": "$66,232.00",
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
        flxValue.add(lblAmountValue);
        flxRowTwo.add(flxDate, flxValue);
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
        flxWealthAccountDetail.add(flxRowOne, flxRowTwo, flxBottomBorder);
        return flxWealthAccountDetail;
    }
})