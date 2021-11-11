define("flxRequestList", function() {
    return function(controller) {
        var flxRequestList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRequestList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxRequestList.setDefaultUnit(kony.flex.DP);
        var flxContents = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContents",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxContents.setDefaultUnit(kony.flex.DP);
        var flxRow1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRow1.setDefaultUnit(kony.flex.DP);
        var lblTransactionAmount = new kony.ui.Label({
            "id": "lblTransactionAmount",
            "isVisible": true,
            "right": "25dp",
            "skin": "sknLbl424242SSP28px",
            "text": "...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTransaction = new kony.ui.Label({
            "id": "lblTransaction",
            "isVisible": true,
            "left": "19dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "15dp",
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRow1.add(lblTransactionAmount, lblTransaction);
        var flxRow2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRow2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRow2.setDefaultUnit(kony.flex.DP);
        var lblStatus = new kony.ui.Label({
            "id": "lblStatus",
            "isVisible": true,
            "right": "25dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "120dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDate = new kony.ui.Label({
            "id": "lblDate",
            "isVisible": true,
            "left": "19dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRow2.add(lblStatus, lblDate);
        var flxSpace = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
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
        flxContents.add(flxRow1, flxRow2, flxSpace, flxSeparator);
        var flxApprove = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxApprove",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 2
        }, {}, {});
        flxApprove.setDefaultUnit(kony.flex.DP);
        var imgApprove = new kony.ui.Image2({
            "centerX": "50%",
            "height": "25dp",
            "id": "imgApprove",
            "isVisible": true,
            "skin": "slImage",
            "src": "withdrawreq.png",
            "top": "10dp",
            "width": "25dp",
            "zIndex": 3
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblApprove = new kony.ui.Label({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblApprove",
            "isVisible": true,
            "skin": "sknLblffffff20px",
            "text": "Withdraw",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "99%",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxApprove.add(imgApprove, lblApprove);
        flxRequestList.add(flxContents, flxApprove);
        return flxRequestList;
    }
})