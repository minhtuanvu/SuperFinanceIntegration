define("flxMessagesMain", function() {
    return function(controller) {
        var flxMessagesMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "95dp",
            "id": "flxMessagesMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onTouchStart": controller.AS_FlexContainer_i426b5aa937245d08ae70f183ee0480a,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMessagesMain.setDefaultUnit(kony.flex.DP);
        var flxMessagesMainSwipe = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxMessagesMainSwipe",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "150%",
            "zIndex": 1
        }, {}, {});
        flxMessagesMainSwipe.setDefaultUnit(kony.flex.DP);
        var flxmain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxmain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "66.67%",
            "zIndex": 1
        }, {}, {});
        flxmain.setDefaultUnit(kony.flex.DP);
        var flxRequestId = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23dp",
            "id": "flxRequestId",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "right": "82dp",
            "skin": "slFbox",
            "top": "13dp",
            "width": "45%",
            "zIndex": 1
        }, {}, {});
        flxRequestId.setDefaultUnit(kony.flex.DP);
        var lblReqId = new kony.ui.Label({
            "height": "23dp",
            "id": "lblReqId",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "maxWidth": "238dp",
            "minWidth": "10dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "RFI-123321",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
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
        flxRequestId.add(lblReqId);
        var lblCategory = new kony.ui.Label({
            "height": "23dp",
            "id": "lblCategory",
            "isVisible": true,
            "minWidth": "60dp",
            "right": "20dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Savings Account",
            "textStyle": {},
            "top": "13dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSubUnread = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23dp",
            "id": "flxSubUnread",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "right": "82dp",
            "skin": "slFbox",
            "top": "40dp",
            "zIndex": 1
        }, {}, {});
        flxSubUnread.setDefaultUnit(kony.flex.DP);
        var lblSubject = new kony.ui.Label({
            "height": "23dp",
            "id": "lblSubject",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "maxWidth": "238dp",
            "minWidth": "10dp",
            "skin": "sknLbl424242SSPBold26px",
            "text": "Subject Line Max one lineSubject Line Max one line",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
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
        var lblNumber = new kony.ui.Label({
            "height": "16dp",
            "id": "lblNumber",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "right": "0dp",
            "skin": "sknLbl424242SSPBold26px",
            "text": "(999)",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxSubUnread.add(lblSubject, lblNumber);
        var lblTime = new kony.ui.Label({
            "height": "16dp",
            "id": "lblTime",
            "isVisible": true,
            "minWidth": "60dp",
            "right": "20dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "02/22/2018",
            "textStyle": {},
            "top": "40dp",
            "width": "75dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblDescription = new kony.ui.RichText({
            "height": "20dp",
            "id": "lblDescription",
            "isVisible": true,
            "left": "20dp",
            "linkSkin": "defRichTextLink",
            "right": "20dp",
            "skin": "sknRtx727272SSPReg26px",
            "text": "Message description to appear here.Show maximum two lines of text. In the end text is going to end here with …",
            "top": "68dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxmain.add(flxRequestId, lblCategory, flxSubUnread, lblTime, lblDescription);
        var flxDeleteReply = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxDeleteReply",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "33.33%",
            "zIndex": 10
        }, {}, {});
        flxDeleteReply.setDefaultUnit(kony.flex.DP);
        var flxDelete = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxff5d6e",
            "top": "0dp",
            "width": "50%",
            "zIndex": 10
        }, {}, {});
        flxDelete.setDefaultUnit(kony.flex.DP);
        var imgDelete = new kony.ui.Image2({
            "centerX": "50%",
            "height": "15dp",
            "id": "imgDelete",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "deleteicon.png",
            "top": "15dp",
            "width": "12dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDelete = new kony.ui.Label({
            "bottom": "15dp",
            "centerX": "50%",
            "id": "lblDelete",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg86pr",
            "text": "Delete",
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
        flxDelete.add(imgDelete, lblDelete);
        var flxReply = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxReply",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlx0095e4",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxReply.setDefaultUnit(kony.flex.DP);
        var imgReply = new kony.ui.Image2({
            "centerX": "50%",
            "height": "17dp",
            "id": "imgReply",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "replyicon.png",
            "top": "13dp",
            "width": "17dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblReply = new kony.ui.Label({
            "bottom": "15dp",
            "centerX": "50%",
            "id": "lblReply",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg86pr",
            "text": "Reply",
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
        flxReply.add(imgReply, lblReply);
        flxDeleteReply.add(flxDelete, flxReply);
        flxMessagesMainSwipe.add(flxmain, flxDeleteReply);
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
        flxMessagesMain.add(flxMessagesMainSwipe, flxSeparator);
        return flxMessagesMain;
    }
})