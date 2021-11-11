define("flxdesinationaccount", function() {
    return function(controller) {
        var flxdesinationaccount = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxdesinationaccount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxdesinationaccount.setDefaultUnit(kony.flex.DP);
        var flxcontent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxcontent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "18dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "57%",
            "zIndex": 1
        }, {}, {});
        flxcontent.setDefaultUnit(kony.flex.DP);
        var lblRecipientname = new kony.ui.Label({
            "id": "lblRecipientname",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLbl424242SSP26px",
            "text": "Recipient Name",
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxStatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxStatus.setDefaultUnit(kony.flex.DP);
        var lblStatus = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblStatus",
            "isVisible": false,
            "right": "5dp",
            "skin": "sknlbl727272SSP93pr",
            "text": "Status",
            "textStyle": {},
            "top": "9dp",
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
        var lblAccountnumber = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblAccountnumber",
            "isVisible": true,
            "left": "0%",
            "right": "10dp",
            "skin": "sknlbl727272SSP93pr",
            "text": "93649763498647989",
            "textStyle": {},
            "top": "9dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxStatus.add(lblStatus, lblAccountnumber);
        flxcontent.add(lblRecipientname, flxStatus);
        var flxamount = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxamount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "60%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "22dp",
            "width": "38%",
            "zIndex": 1
        }, {}, {});
        flxamount.setDefaultUnit(kony.flex.DP);
        var lblAmount = new kony.ui.Label({
            "id": "lblAmount",
            "isVisible": true,
            "right": "5dp",
            "skin": "sknLbl424242SSP26px",
            "text": "on  21/12/2020 50:20:40",
            "textStyle": {},
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxamount.add(lblAmount);
        var flxComments = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": true,
            "id": "flxComments",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "18dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "60dp",
            "width": "95%"
        }, {}, {});
        flxComments.setDefaultUnit(kony.flex.DP);
        var lblComments = new kony.ui.Label({
            "bottom": "3dp",
            "id": "lblComments",
            "isVisible": true,
            "left": "0%",
            "right": "5dp",
            "skin": "sknlbl727272SSP93pr",
            "text": "Comments",
            "textStyle": {},
            "top": "0dp",
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
        var lblCommentsVal = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblCommentsVal",
            "isVisible": true,
            "left": "0%",
            "right": "10dp",
            "skin": "sknlbl727272SSP93pr",
            "text": "test value",
            "textStyle": {},
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
        flxComments.add(lblComments, lblCommentsVal);
        var flxSeperatorTrans4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorTrans4",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4%",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "92%",
            "zIndex": 110
        }, {}, {});
        flxSeperatorTrans4.setDefaultUnit(kony.flex.DP);
        flxSeperatorTrans4.add();
        var flxSep = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSep",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4%",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "92%",
            "zIndex": 110
        }, {}, {});
        flxSep.setDefaultUnit(kony.flex.DP);
        flxSep.add();
        flxdesinationaccount.add(flxcontent, flxamount, flxComments, flxSeperatorTrans4, flxSep);
        return flxdesinationaccount;
    }
})