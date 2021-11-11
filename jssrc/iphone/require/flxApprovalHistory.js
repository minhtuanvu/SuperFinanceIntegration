define("flxApprovalHistory", function() {
    return function(controller) {
        var flxApprovalHistory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxApprovalHistory",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxApprovalHistory.setDefaultUnit(kony.flex.DP);
        var flxcontent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxcontent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxcontent.setDefaultUnit(kony.flex.DP);
        var flxcontenttop = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxcontenttop",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "9dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxcontenttop.setDefaultUnit(kony.flex.DP);
        var lblPaymentType = new kony.ui.Label({
            "id": "lblPaymentType",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {},
            "top": "3dp",
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblDate = new kony.ui.Label({
            "id": "lblDate",
            "isVisible": true,
            "right": "3%",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "top": "3dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxcontenttop.add(lblPaymentType, lblDate);
        var flxcontentbottom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "9dp",
            "clipBounds": true,
            "id": "flxcontentbottom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxcontentbottom.setDefaultUnit(kony.flex.DP);
        var lblPaymentMode = new kony.ui.Label({
            "id": "lblPaymentMode",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLbl727272SSPReg22px",
            "text": "qwertyuiopasdfghjklzxcvbnmqwertyui...",
            "textStyle": {},
            "top": "3dp",
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "right": "3%",
            "skin": "sknLbl424242SSP26px",
            "text": "lable",
            "textStyle": {},
            "top": "3dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxcontentbottom.add(lblPaymentMode, lblName);
        flxcontent.add(flxcontenttop, flxcontentbottom);
        var flxImagestatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxImagestatus",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "90%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxImagestatus.setDefaultUnit(kony.flex.DP);
        var imgStatus = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": 22,
            "height": "20dp",
            "id": "imgStatus",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "approval.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImagestatus.add(imgStatus);
        var flxsep = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxsep",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxsep.setDefaultUnit(kony.flex.DP);
        flxsep.add();
        flxApprovalHistory.add(flxcontent, flxImagestatus, flxsep);
        return flxApprovalHistory;
    }
})