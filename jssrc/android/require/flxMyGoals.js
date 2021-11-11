define("flxMyGoals", function() {
    return function(controller) {
        var flxMyGoals = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "143dp",
            "id": "flxMyGoals",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxMyGoals.setDefaultUnit(kony.flex.DP);
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
            "minWidth": "100%",
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
        var lblGoalName = new kony.ui.Label({
            "height": "25dp",
            "id": "lblGoalName",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "maxWidth": "80%",
            "skin": "sknLbl424242SSPSemiBold42px",
            "text": "Tesla Electric Car ",
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
        var lblGoalStatus = new kony.ui.Label({
            "height": "20dp",
            "id": "lblGoalStatus",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSReg30px",
            "text": "Completed",
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
            "height": "25dp",
            "id": "imgGoalStatus",
            "isVisible": false,
            "right": "80dp",
            "skin": "slImage",
            "src": "activegreendot.png",
            "top": "-1dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCur = new kony.ui.Label({
            "height": "9dp",
            "id": "lblCur",
            "isVisible": true,
            "right": "105dp",
            "skin": "lbldotgreen",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": "9dp",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRow1.add(lblGoalName, lblGoalStatus, imgGoalStatus, lblCur);
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
            "text": "22 Montha left",
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
        var lblGoalCompleteStatusPercentage = new kony.ui.Label({
            "centerY": "50%",
            "height": "25dp",
            "id": "lblGoalCompleteStatusPercentage",
            "isVisible": true,
            "right": "90dp",
            "skin": "sknlbl424242SSPsemibold40px",
            "text": "75%",
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
        var lblGoalCompleteStatus = new kony.ui.Label({
            "centerY": "50%",
            "height": "25dp",
            "id": "lblGoalCompleteStatus",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl727272ssp40px",
            "text": "Complete",
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
        flxRow2.add(lblGoalDurationLeft, lblGoalCompleteStatusPercentage, lblGoalCompleteStatus);
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
        var lblMinGoalAmount = new kony.ui.Label({
            "height": "25dp",
            "id": "lblMinGoalAmount",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "maxWidth": "40%",
            "skin": "sknlbl424242SSPReg32",
            "text": "$1,000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblMaxGoalAmount = new kony.ui.Label({
            "height": "25dp",
            "id": "lblMaxGoalAmount",
            "isVisible": true,
            "maxNumberOfLines": 1,
            "right": "20dp",
            "skin": "sknlbl424242SSPReg32",
            "text": "$12,000",
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
            "left": "20dp",
            "maxNumberOfLines": 1,
            "maxWidth": "40%",
            "skin": "sknlbl424242SSPReg32",
            "text": "$1,000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRow4.add(lblMinGoalAmount, lblMaxGoalAmount, lblPotId);
        flxMain.add(flxSeparator, flxRow1, flxRow2, flxProgressBar, flxRow4);
        flxMyGoals.add(flxMain);
        return flxMyGoals;
    }
})