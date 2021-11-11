define(function() {
    return function(controller) {
        var offlineSigning = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "offlineSigning",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_de087bb4bb74476bafc36c54d1af8217,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c5ec761a0e204ce89e0bcef0758207c5(eventobject);
            },
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "offlineSigning"), extendConfig({}, controller.args[1], "offlineSigning"), extendConfig({}, controller.args[2], "offlineSigning"));
        offlineSigning.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "56dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx003e75Bg",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBack",
            "isVisible": true,
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
        var lblScreenName = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblScreenName",
            "isVisible": true,
            "left": "15%",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP30px",
            "text": "Account Number",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblScreenName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblScreenName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblScreenName"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "CopyCopysknBtnffffffSSP",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "CopyCopysknBtnffffffSSP",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        flxHeader.add(flxBack, lblScreenName, btnCancel);
        var flxInputContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxInputContainer",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxffffff",
            "top": "56dp",
            "zIndex": 1
        }, controller.args[0], "flxInputContainer"), extendConfig({}, controller.args[1], "flxInputContainer"), extendConfig({}, controller.args[2], "flxInputContainer"));
        flxInputContainer.setDefaultUnit(kony.flex.DP);
        var flxTopMsg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxTopMsg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxTopMsg"), extendConfig({}, controller.args[1], "flxTopMsg"), extendConfig({}, controller.args[2], "flxTopMsg"));
        flxTopMsg.setDefaultUnit(kony.flex.DP);
        var lblTopMsg = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "id": "lblTopMsg",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424215pxSSPR",
            "text": "Enter the recipient's IBAN number",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTopMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTopMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTopMsg"));
        var flxGradient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxGradient",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxGradientEEEEEEToFFFFFF",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxGradient"), extendConfig({}, controller.args[1], "flxGradient"), extendConfig({}, controller.args[2], "flxGradient"));
        flxGradient.setDefaultUnit(kony.flex.DP);
        flxGradient.add();
        flxTopMsg.add(lblTopMsg, flxGradient);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "90dp",
            "width": "100%"
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxErrorMsg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxErrorMsg",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%"
        }, controller.args[0], "flxErrorMsg"), extendConfig({}, controller.args[1], "flxErrorMsg"), extendConfig({}, controller.args[2], "flxErrorMsg"));
        flxErrorMsg.setDefaultUnit(kony.flex.DP);
        var lblErrorMsg = new kony.ui.Label(extendConfig({
            "id": "lblErrorMsg",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknLblEE0005SSPR114pct",
            "text": "Error Message",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "lblErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblErrorMsg"));
        flxErrorMsg.add(lblErrorMsg);
        var flxAccountNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAccountNumber",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumber"), extendConfig({}, controller.args[1], "flxAccountNumber"), extendConfig({}, controller.args[2], "flxAccountNumber"));
        flxAccountNumber.setDefaultUnit(kony.flex.DP);
        var tbxAccountNumber = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxAccountNumber",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "sknTransparent",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "24dp",
            "zIndex": 1
        }, controller.args[0], "tbxAccountNumber"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxAccountNumber"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "CopyCopysknTbxA",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxAccountNumber"));
        flxAccountNumber.add(tbxAccountNumber);
        var flxAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAmount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmount"), extendConfig({}, controller.args[1], "flxAmount"), extendConfig({}, controller.args[2], "flxAmount"));
        flxAmount.setDefaultUnit(kony.flex.DP);
        var lblAmountHeader = new kony.ui.Label(extendConfig({
            "id": "lblAmountHeader",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopyCopysknLbl2",
            "text": "Amount :",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblAmountHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAmountHeader"));
        var tbxAmount = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxAmount",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DECIMAL,
            "left": "20dp",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "sknTransparent",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "24dp",
            "zIndex": 3
        }, controller.args[0], "tbxAmount"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxAmount"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "CopyCopysknTbxA",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxAmount"));
        var flxClearAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "9dp",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxClearAmount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxClearAmount"), extendConfig({}, controller.args[1], "flxClearAmount"), extendConfig({}, controller.args[2], "flxClearAmount"));
        flxClearAmount.setDefaultUnit(kony.flex.DP);
        var imgClearAmount = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "16dp",
            "id": "imgClearAmount",
            "isVisible": true,
            "skin": "slImage",
            "src": "clear_field.png",
            "width": "16dp",
            "zIndex": 1
        }, controller.args[0], "imgClearAmount"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearAmount"), extendConfig({}, controller.args[2], "imgClearAmount"));
        flxClearAmount.add(imgClearAmount);
        flxAmount.add(lblAmountHeader, tbxAmount, flxClearAmount);
        flxMain.add(flxErrorMsg, flxAccountNumber, flxAmount);
        var btnContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "height": "50dp",
            "id": "btnContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBg003E75Border1pxRad4pxFont15pxFFFFFF",
            "text": "Continue",
            "zIndex": 1
        }, controller.args[0], "btnContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinue"), extendConfig({}, controller.args[2], "btnContinue"));
        flxInputContainer.add(flxTopMsg, flxMain, btnContinue);
        var flxVerifyDetailsContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxVerifyDetailsContainer",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "56dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxVerifyDetailsContainer"), extendConfig({}, controller.args[1], "flxVerifyDetailsContainer"), extendConfig({}, controller.args[2], "flxVerifyDetailsContainer"));
        flxVerifyDetailsContainer.setDefaultUnit(kony.flex.DP);
        var flxDetailsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDetailsMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetailsMain"), extendConfig({}, controller.args[1], "flxDetailsMain"), extendConfig({}, controller.args[2], "flxDetailsMain"));
        flxDetailsMain.setDefaultUnit(kony.flex.DP);
        var flxAccountDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxAccountDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountDetails"), extendConfig({}, controller.args[1], "flxAccountDetails"), extendConfig({}, controller.args[2], "flxAccountDetails"));
        flxAccountDetails.setDefaultUnit(kony.flex.DP);
        var lblToAccount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblToAccount",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl72727215pxSSPR",
            "text": "To:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblToAccount"));
        var lblAccountNumberDetail = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAccountNumberDetail",
            "isVisible": true,
            "right": "50dp",
            "skin": "ICSknlblSSP4176A418px",
            "text": "FR60 X054 2811 1010 0000 0123 456",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAccountNumberDetail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountNumberDetail"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAccountNumberDetail"));
        var flxModify1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "15dp",
            "id": "flxModify1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "width": "15dp"
        }, controller.args[0], "flxModify1"), extendConfig({}, controller.args[1], "flxModify1"), extendConfig({}, controller.args[2], "flxModify1"));
        flxModify1.setDefaultUnit(kony.flex.DP);
        var imgModify1 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgModify1",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgModify1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgModify1"), extendConfig({}, controller.args[2], "imgModify1"));
        flxModify1.add(imgModify1);
        var lblSeparator = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblE9E9E9bg4176A4SSPReg26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator"));
        flxAccountDetails.add(lblToAccount, lblAccountNumberDetail, flxModify1, lblSeparator);
        var flxAmountDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxAmountDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmountDetails"), extendConfig({}, controller.args[1], "flxAmountDetails"), extendConfig({}, controller.args[2], "flxAmountDetails"));
        flxAmountDetails.setDefaultUnit(kony.flex.DP);
        var lblAmount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAmount",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl72727215pxSSPR",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAmount"));
        var lblAmountDetail = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAmountDetail",
            "isVisible": true,
            "right": "50dp",
            "skin": "ICSknlblSSP4176A418px",
            "text": "100,000.00",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmountDetail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountDetail"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAmountDetail"));
        var flxModify2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "15dp",
            "id": "flxModify2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "width": "15dp"
        }, controller.args[0], "flxModify2"), extendConfig({}, controller.args[1], "flxModify2"), extendConfig({}, controller.args[2], "flxModify2"));
        flxModify2.setDefaultUnit(kony.flex.DP);
        var imgModify2 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgModify2",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgModify2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgModify2"), extendConfig({}, controller.args[2], "imgModify2"));
        flxModify2.add(imgModify2);
        var lblSeparator1 = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblSeparator1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblE9E9E9bg4176A4SSPReg26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparator1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator1"));
        flxAmountDetails.add(lblAmount, lblAmountDetail, flxModify2, lblSeparator1);
        flxDetailsMain.add(flxAccountDetails, flxAmountDetails);
        var btnGenerateCode = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "height": "50dp",
            "id": "btnGenerateCode",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBg003E75Border1pxRad4pxFont15pxFFFFFF",
            "text": "Generate Code",
            "zIndex": 1
        }, controller.args[0], "btnGenerateCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnGenerateCode"), extendConfig({}, controller.args[2], "btnGenerateCode"));
        flxVerifyDetailsContainer.add(flxDetailsMain, btnGenerateCode);
        var flxSuccessContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxSuccessContainer",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "54dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSuccessContainer"), extendConfig({}, controller.args[1], "flxSuccessContainer"), extendConfig({}, controller.args[2], "flxSuccessContainer"));
        flxSuccessContainer.setDefaultUnit(kony.flex.DP);
        var flxSucess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxSucess",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxSucess"), extendConfig({}, controller.args[1], "flxSucess"), extendConfig({}, controller.args[2], "flxSucess"));
        flxSucess.setDefaultUnit(kony.flex.DP);
        var imgSuccess = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgSuccess",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSuccess"), extendConfig({}, controller.args[2], "imgSuccess"));
        var lblSuccessMsg = new kony.ui.Label(extendConfig({
            "id": "lblSuccessMsg",
            "isVisible": true,
            "left": 0,
            "skin": "sknSSPSemiBold24px000000",
            "text": "The code has been generated successfully",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "17dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSuccessMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSuccessMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSuccessMsg"));
        var lblSeparator2 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblE9E9E9bg4176A4SSPReg26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "23dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparator2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator2"));
        var lblCode = new kony.ui.Label(extendConfig({
            "id": "lblCode",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "15923647",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCode"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCode"));
        var lblCodeMsg = new kony.ui.Label(extendConfig({
            "id": "lblCodeMsg",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblSSPR16px727272",
            "text": "Please share this code with bank through email/fax to initiate the transaction",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblCodeMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCodeMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCodeMsg"));
        var lblSeparator3 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator3",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblE9E9E9bg4176A4SSPReg26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparator3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator3"));
        var flxAccountDetails1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxAccountDetails1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountDetails1"), extendConfig({}, controller.args[1], "flxAccountDetails1"), extendConfig({}, controller.args[2], "flxAccountDetails1"));
        flxAccountDetails1.setDefaultUnit(kony.flex.DP);
        var lblToAccount1 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblToAccount1",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727215pxSSPR",
            "text": "To:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToAccount1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccount1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblToAccount1"));
        var lblAccountNumberDetail1 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAccountNumberDetail1",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICSknLbl42424215pxSSPR",
            "text": "FR60 X054 2811 1010 0000 0123 456",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAccountNumberDetail1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountNumberDetail1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAccountNumberDetail1"));
        var lblSeparator4 = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblSeparator4",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblE9E9E9bg4176A4SSPReg26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparator4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator4"));
        flxAccountDetails1.add(lblToAccount1, lblAccountNumberDetail1, lblSeparator4);
        var flxAmountDetails1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxAmountDetails1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmountDetails1"), extendConfig({}, controller.args[1], "flxAmountDetails1"), extendConfig({}, controller.args[2], "flxAmountDetails1"));
        flxAmountDetails1.setDefaultUnit(kony.flex.DP);
        var lblAmount1 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAmount1",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727215pxSSPR",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmount1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAmount1"));
        var lblAmountDetail1 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAmountDetail1",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICSknLbl42424215pxSSPR",
            "text": "100,000.00",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmountDetail1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountDetail1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAmountDetail1"));
        var lblSeparator5 = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblSeparator5",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblE9E9E9bg4176A4SSPReg26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparator5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator5"));
        flxAmountDetails1.add(lblAmount1, lblAmountDetail1, lblSeparator5);
        flxSucess.add(imgSuccess, lblSuccessMsg, lblSeparator2, lblCode, lblCodeMsg, lblSeparator3, flxAccountDetails1, flxAmountDetails1);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "20px",
            "clipBounds": true,
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnCreateNewSignature = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "btnCreateNewSignature",
            "isVisible": true,
            "skin": "sknBtnBg003E75Border1pxRad4pxFont15pxFFFFFF",
            "text": "Create New Signature",
            "top": "0dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "btnCreateNewSignature"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCreateNewSignature"), extendConfig({}, controller.args[2], "btnCreateNewSignature"));
        var btnDashboard = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "btnDashboard",
            "isVisible": true,
            "skin": "sknBtnBgFFFFFFBorder1px003E75Rad4pxFont15px003E75",
            "text": "Go To Dashboard",
            "top": "20dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "btnDashboard"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDashboard"), extendConfig({}, controller.args[2], "btnDashboard"));
        flxButtons.add(btnCreateNewSignature, btnDashboard);
        flxSuccessContainer.add(flxSucess, flxButtons);
        var sdk = new com.temenos.hidapprove.sdk(extendConfig({
            "height": "100%",
            "id": "sdk",
            "isVisible": false,
            "left": "-5dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-4dp",
            "width": "100%",
            "zIndex": 210,
            "overrides": {
                "sdk": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "sdk"), extendConfig({
            "overrides": {}
        }, controller.args[1], "sdk"), extendConfig({
            "overrides": {}
        }, controller.args[2], "sdk"));
        sdk.pushId = "";
        offlineSigning.add(flxHeader, flxInputContainer, flxVerifyDetailsContainer, flxSuccessContainer, sdk);
        return offlineSigning;
    }
})