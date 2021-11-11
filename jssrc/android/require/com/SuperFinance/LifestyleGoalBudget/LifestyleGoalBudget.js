define(function() {
    return function(controller) {
        var LifestyleGoalBudget = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "LifestyleGoalBudget",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LifestyleGoalBudget"), extendConfig({}, controller.args[1], "LifestyleGoalBudget"), extendConfig({}, controller.args[2], "LifestyleGoalBudget"));
        LifestyleGoalBudget.setDefaultUnit(kony.flex.DP);
        var flxParentSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxParentSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxParentSF"), extendConfig({}, controller.args[1], "flxParentSF"), extendConfig({}, controller.args[2], "flxParentSF"));
        flxParentSF.setDefaultUnit(kony.flex.DP);
        var flxMainSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "90%",
            "id": "flxMainSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxMainSF"), extendConfig({}, controller.args[1], "flxMainSF"), extendConfig({}, controller.args[2], "flxMainSF"));
        flxMainSF.setDefaultUnit(kony.flex.DP);
        var lblTitleSF = new kony.ui.Label(extendConfig({
            "id": "lblTitleSF",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblTransTitleSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTitleSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitleSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTitleSF"));
        var lblSpentAmtSF = new kony.ui.Label(extendConfig({
            "id": "lblSpentAmtSF",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblWishesSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSpentAmtSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSpentAmtSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSpentAmtSF"));
        var lblMonLeftSF = new kony.ui.Label(extendConfig({
            "id": "lblMonLeftSF",
            "isVisible": true,
            "right": "4%",
            "skin": "sknLblDescSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMonLeftSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMonLeftSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMonLeftSF"));
        var lblMonRangeSF = new kony.ui.Label(extendConfig({
            "id": "lblMonRangeSF",
            "isVisible": true,
            "right": "4%",
            "skin": "sknLblDescSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMonRangeSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMonRangeSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMonRangeSF"));
        var rchTxtMonRangeSF = new kony.ui.RichText(extendConfig({
            "id": "rchTxtMonRangeSF",
            "isVisible": true,
            "left": "4%",
            "linkSkin": "defRichTextLink",
            "skin": "CopyslRichText0df997d3db82b44",
            "text": "RichText",
            "top": "35%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "rchTxtMonRangeSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rchTxtMonRangeSF"), extendConfig({}, controller.args[2], "rchTxtMonRangeSF"));
        var flxMainRangeSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "2%",
            "id": "flxMainRangeSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxMainRangeSF",
            "top": "55%",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "flxMainRangeSF"), extendConfig({}, controller.args[1], "flxMainRangeSF"), extendConfig({}, controller.args[2], "flxMainRangeSF"));
        flxMainRangeSF.setDefaultUnit(kony.flex.DP);
        var flxRangeDoneSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxRangeDoneSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxRangeDoneSF",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "flxRangeDoneSF"), extendConfig({}, controller.args[1], "flxRangeDoneSF"), extendConfig({}, controller.args[2], "flxRangeDoneSF"));
        flxRangeDoneSF.setDefaultUnit(kony.flex.DP);
        flxRangeDoneSF.add();
        flxMainRangeSF.add(flxRangeDoneSF);
        flxMainSF.add(lblTitleSF, lblSpentAmtSF, lblMonLeftSF, lblMonRangeSF, rchTxtMonRangeSF, flxMainRangeSF);
        flxParentSF.add(flxMainSF);
        LifestyleGoalBudget.add(flxParentSF);
        return LifestyleGoalBudget;
    }
})