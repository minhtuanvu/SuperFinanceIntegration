define("flxApprovalsList", function() {
    return function(controller) {
        var flxApprovalsList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxApprovalsList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxApprovalsList.setDefaultUnit(kony.flex.DP);
        var flxContentsAP = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxContentsAP",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxContentsAP.setDefaultUnit(kony.flex.DP);
        var lblDateAP = new kony.ui.Label({
            "bottom": "15dp",
            "id": "lblDateAP",
            "isVisible": true,
            "left": "19dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxSeparatorAP = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorAP",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparatorAP.setDefaultUnit(kony.flex.DP);
        flxSeparatorAP.add();
        var lblTransactionAmountAP = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTransactionAmountAP",
            "isVisible": true,
            "right": "25dp",
            "skin": "sknLbl424242SSP28px",
            "text": "...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTransactionAP = new kony.ui.Label({
            "id": "lblTransactionAP",
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
        flxContentsAP.add(lblDateAP, flxSeparatorAP, lblTransactionAmountAP, lblTransactionAP);
        var flxRejectAP = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxRejectAP",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6Bcg",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxRejectAP.setDefaultUnit(kony.flex.DP);
        var imgRejectAP = new kony.ui.Image2({
            "centerX": "50%",
            "height": "25dp",
            "id": "imgRejectAP",
            "isVisible": true,
            "skin": "slImage",
            "src": "cancelreject.png",
            "top": "10dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRejectAP = new kony.ui.Label({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblRejectAP",
            "isVisible": true,
            "skin": "sknLbl104B80SPReg20px",
            "text": "Reject",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "99%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRejectAP.add(imgRejectAP, lblRejectAP);
        var flxApproveAP = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxApproveAP",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxApproveAP.setDefaultUnit(kony.flex.DP);
        var imgApproveAP = new kony.ui.Image2({
            "centerX": "50%",
            "height": "25dp",
            "id": "imgApproveAP",
            "isVisible": true,
            "skin": "slImage",
            "src": "approvetick.png",
            "top": "10dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblApproveAP = new kony.ui.Label({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblApproveAP",
            "isVisible": true,
            "skin": "sknLblffffff20px",
            "text": "Approve",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "99%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxApproveAP.add(imgApproveAP, lblApproveAP);
        flxApprovalsList.add(flxContentsAP, flxRejectAP, flxApproveAP);
        return flxApprovalsList;
    }
})