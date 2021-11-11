define("flxAchtransation", function() {
    return function(controller) {
        var flxAchtransation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAchtransation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAchtransation.setDefaultUnit(kony.flex.DP);
        var flxmain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxmain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxmain.setDefaultUnit(kony.flex.DP);
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
        var lblToAccount = new kony.ui.Label({
            "id": "lblToAccount",
            "isVisible": true,
            "left": "5.07%",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAmount = new kony.ui.Label({
            "id": "lblAmount",
            "isVisible": true,
            "right": "3%",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxcontenttop.add(lblToAccount, lblAmount);
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
        var lblDate = new kony.ui.Label({
            "id": "lblDate",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPayment = new kony.ui.Label({
            "id": "lblPayment",
            "isVisible": true,
            "right": "3%",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxcontentbottom.add(lblDate, lblPayment);
        flxmain.add(flxcontenttop, flxcontentbottom);
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
        flxAchtransation.add(flxmain, flxsep);
        return flxAchtransation;
    }
})