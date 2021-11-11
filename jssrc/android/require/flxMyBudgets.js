define("flxMyBudgets", function() {
    return function(controller) {
        var flxMyBudgets = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "143dp",
            "id": "flxMyBudgets",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxMyBudgets.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "143dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
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
            "right": "0dp",
            "skin": "sknFlxe3e3e3",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxRow1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxRow1.setDefaultUnit(kony.flex.DP);
        var lblBudgetName = new kony.ui.Label({
            "height": "30dp",
            "id": "lblBudgetName",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "maxWidth": "80%",
            "skin": "sknLbl424242SSPSemiBold42px",
            "text": "Christmas Budget",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblBudgetAmount = new kony.ui.Label({
            "height": "25dp",
            "id": "lblBudgetAmount",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSPSemiBold42px",
            "text": "$ 10,000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgGoalStatus = new kony.ui.Image2({
            "height": "10dp",
            "id": "imgGoalStatus",
            "isVisible": false,
            "right": "80dp",
            "skin": "slImage",
            "src": "alert_2.png",
            "top": "6dp",
            "width": "10dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRow1.add(lblBudgetName, lblBudgetAmount, imgGoalStatus);
        var flxRow2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": false,
            "height": "15dp",
            "id": "flxRow2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRow2.setDefaultUnit(kony.flex.DP);
        var lblGoalDurationLeft = new kony.ui.Label({
            "centerY": "50%",
            "height": "25dp",
            "id": "lblGoalDurationLeft",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272ssp40px",
            "text": "Current Balance",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblGoalCompleteStatus = new kony.ui.Label({
            "bottom": "15dp",
            "centerY": "50%",
            "height": "25dp",
            "id": "lblGoalCompleteStatus",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSPReg36px",
            "text": "$4,000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRow2.add(lblGoalDurationLeft, lblGoalCompleteStatus);
        var flxProgressBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8dp",
            "id": "flxProgressBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "81dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxProgressBar.setDefaultUnit(kony.flex.DP);
        var flxTarget = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTarget",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxe0e0e0Radius20px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTarget.setDefaultUnit(kony.flex.DP);
        flxTarget.add();
        var flxSpent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSpent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxslider",
            "top": "0dp",
            "width": "60%",
            "zIndex": 2
        }, {}, {});
        flxSpent.setDefaultUnit(kony.flex.DP);
        flxSpent.add();
        var flxExceeded = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxExceeded",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "sknflxfd031fRadius20px",
            "top": "0dp",
            "width": "40%",
            "zIndex": 2
        }, {}, {});
        flxExceeded.setDefaultUnit(kony.flex.DP);
        flxExceeded.add();
        flxProgressBar.add(flxTarget, flxSpent, flxExceeded);
        var flxRow4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxRow4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "94dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxRow4.setDefaultUnit(kony.flex.DP);
        var lblMinBudgetVal = new kony.ui.Label({
            "height": "25dp",
            "id": "lblMinBudgetVal",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "maxWidth": "40%",
            "skin": "sknlbl424242SSPReg32",
            "text": "0%",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblMaxBudgetVal = new kony.ui.Label({
            "height": "25dp",
            "id": "lblMaxBudgetVal",
            "isVisible": true,
            "maxNumberOfLines": 1,
            "right": "20dp",
            "skin": "sknlbl424242SSPReg32",
            "text": "100%",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPotId = new kony.ui.Label({
            "height": "25dp",
            "id": "lblPotId",
            "isVisible": false,
            "maxNumberOfLines": 1,
            "right": "20dp",
            "skin": "sknlbl424242SSPReg32",
            "text": "100%",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRow4.add(lblMinBudgetVal, lblMaxBudgetVal, lblPotId);
        var flxRow5 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxRow5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "65dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxRow5.setDefaultUnit(kony.flex.DP);
        var imgWarnImg = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgWarnImg",
            "isVisible": true,
            "left": 20,
            "skin": "slImage",
            "src": "alert.png",
            "top": "4dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblWarnImg = new kony.ui.Label({
            "height": "25dp",
            "id": "lblWarnImg",
            "isVisible": true,
            "left": "50dp",
            "maxNumberOfLines": 1,
            "maxWidth": "40%",
            "skin": "sknLbl727272ssp40px",
            "text": "Deposit pending",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxClick = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25dp",
            "id": "flxClick",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "18dp",
            "skin": "slFbox",
            "top": "4dp",
            "width": "150dp",
            "zIndex": 1
        }, {}, {});
        flxClick.setDefaultUnit(kony.flex.DP);
        var lblTransfer = new kony.ui.Label({
            "height": "25dp",
            "id": "lblTransfer",
            "isVisible": true,
            "maxNumberOfLines": 1,
            "right": "2dp",
            "skin": "sknLbl4176A4spsemibold18px",
            "text": " Initiate Transfer",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxClick.add(lblTransfer);
        flxRow5.add(imgWarnImg, lblWarnImg, flxClick);
        flxMain.add(flxSeparator, flxRow1, flxRow2, flxProgressBar, flxRow4, flxRow5);
        flxMyBudgets.add(flxMain);
        return flxMyBudgets;
    }
})