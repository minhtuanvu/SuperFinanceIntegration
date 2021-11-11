define(function() {
    return function(controller) {
        var CustomRightBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "CustomRightBar",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxBgF9F9F9Tab",
            "top": 0,
            "width": "100%"
        }, controller.args[0], "CustomRightBar"), extendConfig({}, controller.args[1], "CustomRightBar"), extendConfig({}, controller.args[2], "CustomRightBar"));
        CustomRightBar.setDefaultUnit(kony.flex.DP);
        var flxFirstRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxFirstRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFirstRow"), extendConfig({}, controller.args[1], "flxFirstRow"), extendConfig({}, controller.args[2], "flxFirstRow"));
        flxFirstRow.setDefaultUnit(kony.flex.DP);
        var flxCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCheckedRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCheckedRow"), extendConfig({}, controller.args[1], "flxCheckedRow"), extendConfig({}, controller.args[2], "flxCheckedRow"));
        flxCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Payee",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCheckedRowLabel"));
        var lblCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLbl000000424242SSP30PxTab",
            "text": "Bill Martin...2345",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCheckedRowName"));
        flxCheckedRow.add(lblCheckedRowLabel, lblCheckedRowName);
        var flxActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxActiveRow"), extendConfig({}, controller.args[1], "flxActiveRow"), extendConfig({}, controller.args[2], "flxActiveRow"));
        flxActiveRow.setDefaultUnit(kony.flex.DP);
        var lblActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblActiveRowLabel"));
        var flxTransferActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTransferActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxTransferActiveBar"), extendConfig({}, controller.args[1], "flxTransferActiveBar"), extendConfig({}, controller.args[2], "flxTransferActiveBar"));
        flxTransferActiveBar.setDefaultUnit(kony.flex.DP);
        flxTransferActiveBar.add();
        flxActiveRow.add(lblActiveRowLabel, flxTransferActiveBar);
        var flxInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxInActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxInActiveRow"), extendConfig({}, controller.args[1], "flxInActiveRow"), extendConfig({}, controller.args[2], "flxInActiveRow"));
        flxInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Date & Frequency",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblInActiveLabel"));
        flxInActiveRow.add(lblInActiveLabel);
        flxFirstRow.add(flxCheckedRow, flxActiveRow, flxInActiveRow);
        var flxSecondRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxSecondRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSecondRow"), extendConfig({}, controller.args[1], "flxSecondRow"), extendConfig({}, controller.args[2], "flxSecondRow"));
        flxSecondRow.setDefaultUnit(kony.flex.DP);
        var flxSecondCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSecondCheckedRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecondCheckedRow"), extendConfig({}, controller.args[1], "flxSecondCheckedRow"), extendConfig({}, controller.args[2], "flxSecondCheckedRow"));
        flxSecondCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblSecondCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblSecondCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSecondCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecondCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSecondCheckedRowLabel"));
        var lblSecondCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblSecondCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLbl000000424242SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSecondCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecondCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSecondCheckedRowName"));
        flxSecondCheckedRow.add(lblSecondCheckedRowLabel, lblSecondCheckedRowName);
        var flxSecondActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSecondActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecondActiveRow"), extendConfig({}, controller.args[1], "flxSecondActiveRow"), extendConfig({}, controller.args[2], "flxSecondActiveRow"));
        flxSecondActiveRow.setDefaultUnit(kony.flex.DP);
        var lblSecondActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSecondActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSecondActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecondActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSecondActiveRowLabel"));
        var flxSecondActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSecondActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxSecondActiveBar"), extendConfig({}, controller.args[1], "flxSecondActiveBar"), extendConfig({}, controller.args[2], "flxSecondActiveBar"));
        flxSecondActiveBar.setDefaultUnit(kony.flex.DP);
        flxSecondActiveBar.add();
        flxSecondActiveRow.add(lblSecondActiveRowLabel, flxSecondActiveBar);
        var flxSecondInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSecondInActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecondInActiveRow"), extendConfig({}, controller.args[1], "flxSecondInActiveRow"), extendConfig({}, controller.args[2], "flxSecondInActiveRow"));
        flxSecondInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblSecondInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSecondInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Date & Frequency",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSecondInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecondInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSecondInActiveLabel"));
        flxSecondInActiveRow.add(lblSecondInActiveLabel);
        flxSecondRow.add(flxSecondCheckedRow, flxSecondActiveRow, flxSecondInActiveRow);
        var flxThirdRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxThirdRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxThirdRow"), extendConfig({}, controller.args[1], "flxThirdRow"), extendConfig({}, controller.args[2], "flxThirdRow"));
        flxThirdRow.setDefaultUnit(kony.flex.DP);
        var flxThirdCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxThirdCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxThirdCheckedRow"), extendConfig({}, controller.args[1], "flxThirdCheckedRow"), extendConfig({}, controller.args[2], "flxThirdCheckedRow"));
        flxThirdCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblThirdCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblThirdCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblThirdCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblThirdCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblThirdCheckedRowLabel"));
        var lblThirdCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblThirdCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblThirdCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblThirdCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblThirdCheckedRowName"));
        flxThirdCheckedRow.add(lblThirdCheckedRowLabel, lblThirdCheckedRowName);
        var flxThirdActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxThirdActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxThirdActiveRow"), extendConfig({}, controller.args[1], "flxThirdActiveRow"), extendConfig({}, controller.args[2], "flxThirdActiveRow"));
        flxThirdActiveRow.setDefaultUnit(kony.flex.DP);
        var lblThirdActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblThirdActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblThirdActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblThirdActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblThirdActiveRowLabel"));
        var flxThirdActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxThirdActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxThirdActiveBar"), extendConfig({}, controller.args[1], "flxThirdActiveBar"), extendConfig({}, controller.args[2], "flxThirdActiveBar"));
        flxThirdActiveBar.setDefaultUnit(kony.flex.DP);
        flxThirdActiveBar.add();
        flxThirdActiveRow.add(lblThirdActiveRowLabel, flxThirdActiveBar);
        var flxThirdInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxThirdInActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxThirdInActiveRow"), extendConfig({}, controller.args[1], "flxThirdInActiveRow"), extendConfig({}, controller.args[2], "flxThirdInActiveRow"));
        flxThirdInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblThirdInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblThirdInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Date & Frequency",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblThirdInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblThirdInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblThirdInActiveLabel"));
        flxThirdInActiveRow.add(lblThirdInActiveLabel);
        flxThirdRow.add(flxThirdCheckedRow, flxThirdActiveRow, flxThirdInActiveRow);
        var flxFourthRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxFourthRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFourthRow"), extendConfig({}, controller.args[1], "flxFourthRow"), extendConfig({}, controller.args[2], "flxFourthRow"));
        flxFourthRow.setDefaultUnit(kony.flex.DP);
        var flxFourthCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFourthCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFourthCheckedRow"), extendConfig({}, controller.args[1], "flxFourthCheckedRow"), extendConfig({}, controller.args[2], "flxFourthCheckedRow"));
        flxFourthCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblFourthCheckedRow = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblFourthCheckedRow",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFourthCheckedRow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFourthCheckedRow"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFourthCheckedRow"));
        var lblFourthCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblFourthCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFourthCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFourthCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFourthCheckedRowName"));
        flxFourthCheckedRow.add(lblFourthCheckedRow, lblFourthCheckedRowName);
        var flxFourthActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFourthActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFourthActiveRow"), extendConfig({}, controller.args[1], "flxFourthActiveRow"), extendConfig({}, controller.args[2], "flxFourthActiveRow"));
        flxFourthActiveRow.setDefaultUnit(kony.flex.DP);
        var lblFourthActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFourthActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFourthActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFourthActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFourthActiveRowLabel"));
        var flxFourthActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFourthActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxFourthActiveBar"), extendConfig({}, controller.args[1], "flxFourthActiveBar"), extendConfig({}, controller.args[2], "flxFourthActiveBar"));
        flxFourthActiveBar.setDefaultUnit(kony.flex.DP);
        flxFourthActiveBar.add();
        flxFourthActiveRow.add(lblFourthActiveRowLabel, flxFourthActiveBar);
        var flxFourthInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFourthInActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFourthInActiveRow"), extendConfig({}, controller.args[1], "flxFourthInActiveRow"), extendConfig({}, controller.args[2], "flxFourthInActiveRow"));
        flxFourthInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblFourthInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFourthInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Date & Frequency",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFourthInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFourthInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFourthInActiveLabel"));
        flxFourthInActiveRow.add(lblFourthInActiveLabel);
        flxFourthRow.add(flxFourthCheckedRow, flxFourthActiveRow, flxFourthInActiveRow);
        var flxFifthRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxFifthRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFifthRow"), extendConfig({}, controller.args[1], "flxFifthRow"), extendConfig({}, controller.args[2], "flxFifthRow"));
        flxFifthRow.setDefaultUnit(kony.flex.DP);
        var flxFifthCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFifthCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFifthCheckedRow"), extendConfig({}, controller.args[1], "flxFifthCheckedRow"), extendConfig({}, controller.args[2], "flxFifthCheckedRow"));
        flxFifthCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblFifthCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblFifthCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFifthCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFifthCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFifthCheckedRowLabel"));
        var lblFifthCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblFifthCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFifthCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFifthCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFifthCheckedRowName"));
        flxFifthCheckedRow.add(lblFifthCheckedRowLabel, lblFifthCheckedRowName);
        var flxFifthActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFifthActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFifthActiveRow"), extendConfig({}, controller.args[1], "flxFifthActiveRow"), extendConfig({}, controller.args[2], "flxFifthActiveRow"));
        flxFifthActiveRow.setDefaultUnit(kony.flex.DP);
        var lblFifthActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFifthActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFifthActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFifthActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFifthActiveRowLabel"));
        var flxFifthActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFifthActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxFifthActiveBar"), extendConfig({}, controller.args[1], "flxFifthActiveBar"), extendConfig({}, controller.args[2], "flxFifthActiveBar"));
        flxFifthActiveBar.setDefaultUnit(kony.flex.DP);
        flxFifthActiveBar.add();
        flxFifthActiveRow.add(lblFifthActiveRowLabel, flxFifthActiveBar);
        var flxFifthInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFifthInActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFifthInActiveRow"), extendConfig({}, controller.args[1], "flxFifthInActiveRow"), extendConfig({}, controller.args[2], "flxFifthInActiveRow"));
        flxFifthInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblFifthInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFifthInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Bill Details",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFifthInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFifthInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFifthInActiveLabel"));
        flxFifthInActiveRow.add(lblFifthInActiveLabel);
        flxFifthRow.add(flxFifthCheckedRow, flxFifthActiveRow, flxFifthInActiveRow);
        var flxSixthRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxSixthRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSixthRow"), extendConfig({}, controller.args[1], "flxSixthRow"), extendConfig({}, controller.args[2], "flxSixthRow"));
        flxSixthRow.setDefaultUnit(kony.flex.DP);
        var flxSixthCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSixthCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSixthCheckedRow"), extendConfig({}, controller.args[1], "flxSixthCheckedRow"), extendConfig({}, controller.args[2], "flxSixthCheckedRow"));
        flxSixthCheckedRow.setDefaultUnit(kony.flex.DP);
        var lbSixthCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lbSixthCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lbSixthCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbSixthCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbSixthCheckedRowLabel"));
        var lblSixthCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblSixthCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSixthCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSixthCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSixthCheckedRowName"));
        flxSixthCheckedRow.add(lbSixthCheckedRowLabel, lblSixthCheckedRowName);
        var flxSixthActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSixthActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSixthActiveRow"), extendConfig({}, controller.args[1], "flxSixthActiveRow"), extendConfig({}, controller.args[2], "flxSixthActiveRow"));
        flxSixthActiveRow.setDefaultUnit(kony.flex.DP);
        var lblSixthActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSixthActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSixthActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSixthActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSixthActiveRowLabel"));
        var flxSixthActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSixthActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxSixthActiveBar"), extendConfig({}, controller.args[1], "flxSixthActiveBar"), extendConfig({}, controller.args[2], "flxSixthActiveBar"));
        flxSixthActiveBar.setDefaultUnit(kony.flex.DP);
        flxSixthActiveBar.add();
        flxSixthActiveRow.add(lblSixthActiveRowLabel, flxSixthActiveBar);
        var flxSixthInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSixthInActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSixthInActiveRow"), extendConfig({}, controller.args[1], "flxSixthInActiveRow"), extendConfig({}, controller.args[2], "flxSixthInActiveRow"));
        flxSixthInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblSixthInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSixthInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Pay Details",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSixthInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSixthInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSixthInActiveLabel"));
        flxSixthInActiveRow.add(lblSixthInActiveLabel);
        flxSixthRow.add(flxSixthCheckedRow, flxSixthActiveRow, flxSixthInActiveRow);
        var flxSeventhRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxSeventhRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSeventhRow"), extendConfig({}, controller.args[1], "flxSeventhRow"), extendConfig({}, controller.args[2], "flxSeventhRow"));
        flxSeventhRow.setDefaultUnit(kony.flex.DP);
        var flxSeventhCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSeventhCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeventhCheckedRow"), extendConfig({}, controller.args[1], "flxSeventhCheckedRow"), extendConfig({}, controller.args[2], "flxSeventhCheckedRow"));
        flxSeventhCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblSeventhCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblSeventhCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSeventhCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeventhCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeventhCheckedRowLabel"));
        var lblSeventhCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblSeventhCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSeventhCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeventhCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeventhCheckedRowName"));
        flxSeventhCheckedRow.add(lblSeventhCheckedRowLabel, lblSeventhCheckedRowName);
        var flxSeventhActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSeventhActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeventhActiveRow"), extendConfig({}, controller.args[1], "flxSeventhActiveRow"), extendConfig({}, controller.args[2], "flxSeventhActiveRow"));
        flxSeventhActiveRow.setDefaultUnit(kony.flex.DP);
        var lblSeventhActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSeventhActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSeventhActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeventhActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeventhActiveRowLabel"));
        var flxSeventhActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSeventhActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxSeventhActiveBar"), extendConfig({}, controller.args[1], "flxSeventhActiveBar"), extendConfig({}, controller.args[2], "flxSeventhActiveBar"));
        flxSeventhActiveBar.setDefaultUnit(kony.flex.DP);
        flxSeventhActiveBar.add();
        flxSeventhActiveRow.add(lblSeventhActiveRowLabel, flxSeventhActiveBar);
        var flxSeventhInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSeventhInActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeventhInActiveRow"), extendConfig({}, controller.args[1], "flxSeventhInActiveRow"), extendConfig({}, controller.args[2], "flxSeventhInActiveRow"));
        flxSeventhInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblSeventhInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSeventhInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Details",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSeventhInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeventhInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeventhInActiveLabel"));
        flxSeventhInActiveRow.add(lblSeventhInActiveLabel);
        flxSeventhRow.add(flxSeventhCheckedRow, flxSeventhActiveRow, flxSeventhInActiveRow);
        var flxEighthRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxEighthRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxEighthRow"), extendConfig({}, controller.args[1], "flxEighthRow"), extendConfig({}, controller.args[2], "flxEighthRow"));
        flxEighthRow.setDefaultUnit(kony.flex.DP);
        var flxEighthCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEighthCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEighthCheckedRow"), extendConfig({}, controller.args[1], "flxEighthCheckedRow"), extendConfig({}, controller.args[2], "flxEighthCheckedRow"));
        flxEighthCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblEighthCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblEighthCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEighthCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEighthCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEighthCheckedRowLabel"));
        var lblEighthCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblEighthCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEighthCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEighthCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEighthCheckedRowName"));
        flxEighthCheckedRow.add(lblEighthCheckedRowLabel, lblEighthCheckedRowName);
        var flxEighthActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEighthActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEighthActiveRow"), extendConfig({}, controller.args[1], "flxEighthActiveRow"), extendConfig({}, controller.args[2], "flxEighthActiveRow"));
        flxEighthActiveRow.setDefaultUnit(kony.flex.DP);
        var lblEighthActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblEighthActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEighthActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEighthActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEighthActiveRowLabel"));
        var flxEighthActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEighthActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxEighthActiveBar"), extendConfig({}, controller.args[1], "flxEighthActiveBar"), extendConfig({}, controller.args[2], "flxEighthActiveBar"));
        flxEighthActiveBar.setDefaultUnit(kony.flex.DP);
        flxEighthActiveBar.add();
        flxEighthActiveRow.add(lblEighthActiveRowLabel, flxEighthActiveBar);
        var flxEighthInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEighthInActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEighthInActiveRow"), extendConfig({}, controller.args[1], "flxEighthInActiveRow"), extendConfig({}, controller.args[2], "flxEighthInActiveRow"));
        flxEighthInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblEighthInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblEighthInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Confirm",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEighthInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEighthInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEighthInActiveLabel"));
        flxEighthInActiveRow.add(lblEighthInActiveLabel);
        flxEighthRow.add(flxEighthCheckedRow, flxEighthActiveRow, flxEighthInActiveRow);
        var flxNineRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxNineRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxNineRow"), extendConfig({}, controller.args[1], "flxNineRow"), extendConfig({}, controller.args[2], "flxNineRow"));
        flxNineRow.setDefaultUnit(kony.flex.DP);
        var flxNineCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNineCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNineCheckedRow"), extendConfig({}, controller.args[1], "flxNineCheckedRow"), extendConfig({}, controller.args[2], "flxNineCheckedRow"));
        flxNineCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblNineCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblNineCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNineCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNineCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNineCheckedRowLabel"));
        var lblNineCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblNineCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNineCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNineCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNineCheckedRowName"));
        flxNineCheckedRow.add(lblNineCheckedRowLabel, lblNineCheckedRowName);
        var flxNineActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNineActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNineActiveRow"), extendConfig({}, controller.args[1], "flxNineActiveRow"), extendConfig({}, controller.args[2], "flxNineActiveRow"));
        flxNineActiveRow.setDefaultUnit(kony.flex.DP);
        var lblNineActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblNineActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNineActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNineActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNineActiveRowLabel"));
        var flxNineActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNineActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxNineActiveBar"), extendConfig({}, controller.args[1], "flxNineActiveBar"), extendConfig({}, controller.args[2], "flxNineActiveBar"));
        flxNineActiveBar.setDefaultUnit(kony.flex.DP);
        flxNineActiveBar.add();
        flxNineActiveRow.add(lblNineActiveRowLabel, flxNineActiveBar);
        var flxNineInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNineInActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNineInActiveRow"), extendConfig({}, controller.args[1], "flxNineInActiveRow"), extendConfig({}, controller.args[2], "flxNineInActiveRow"));
        flxNineInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblNineInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblNineInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Confirm",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNineInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNineInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNineInActiveLabel"));
        flxNineInActiveRow.add(lblNineInActiveLabel);
        flxNineRow.add(flxNineCheckedRow, flxNineActiveRow, flxNineInActiveRow);
        var flxTenRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxTenRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxTenRow"), extendConfig({}, controller.args[1], "flxTenRow"), extendConfig({}, controller.args[2], "flxTenRow"));
        flxTenRow.setDefaultUnit(kony.flex.DP);
        var flxTenCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTenCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTenCheckedRow"), extendConfig({}, controller.args[1], "flxTenCheckedRow"), extendConfig({}, controller.args[2], "flxTenCheckedRow"));
        flxTenCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblTenCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblTenCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTenCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTenCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTenCheckedRowLabel"));
        var lblTenCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblTenCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTenCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTenCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTenCheckedRowName"));
        flxTenCheckedRow.add(lblTenCheckedRowLabel, lblTenCheckedRowName);
        var flxTenActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTenActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTenActiveRow"), extendConfig({}, controller.args[1], "flxTenActiveRow"), extendConfig({}, controller.args[2], "flxTenActiveRow"));
        flxTenActiveRow.setDefaultUnit(kony.flex.DP);
        var lblTenActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTenActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTenActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTenActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTenActiveRowLabel"));
        var flxTenActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTenActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxTenActiveBar"), extendConfig({}, controller.args[1], "flxTenActiveBar"), extendConfig({}, controller.args[2], "flxTenActiveBar"));
        flxTenActiveBar.setDefaultUnit(kony.flex.DP);
        flxTenActiveBar.add();
        flxTenActiveRow.add(lblTenActiveRowLabel, flxTenActiveBar);
        var flxTenInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTenInActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTenInActiveRow"), extendConfig({}, controller.args[1], "flxTenInActiveRow"), extendConfig({}, controller.args[2], "flxTenInActiveRow"));
        flxTenInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblTenInActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTenInActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Confirm",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTenInActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTenInActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTenInActiveLabel"));
        flxTenInActiveRow.add(lblTenInActiveLabel);
        flxTenRow.add(flxTenCheckedRow, flxTenActiveRow, flxTenInActiveRow);
        var flxElevenRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxElevenRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxElevenRow"), extendConfig({}, controller.args[1], "flxElevenRow"), extendConfig({}, controller.args[2], "flxElevenRow"));
        flxElevenRow.setDefaultUnit(kony.flex.DP);
        var flxElevenCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxElevenCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxElevenCheckedRow"), extendConfig({}, controller.args[1], "flxElevenCheckedRow"), extendConfig({}, controller.args[2], "flxElevenCheckedRow"));
        flxElevenCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblElevenCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblElevenCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblElevenCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblElevenCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblElevenCheckedRowLabel"));
        var lblElevenCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblElevenCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblElevenCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblElevenCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblElevenCheckedRowName"));
        flxElevenCheckedRow.add(lblElevenCheckedRowLabel, lblElevenCheckedRowName);
        var flxElevenActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxElevenActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxElevenActiveRow"), extendConfig({}, controller.args[1], "flxElevenActiveRow"), extendConfig({}, controller.args[2], "flxElevenActiveRow"));
        flxElevenActiveRow.setDefaultUnit(kony.flex.DP);
        var lblElevenActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblElevenActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblElevenActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblElevenActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblElevenActiveRowLabel"));
        var flxElevenActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxElevenActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxElevenActiveBar"), extendConfig({}, controller.args[1], "flxElevenActiveBar"), extendConfig({}, controller.args[2], "flxElevenActiveBar"));
        flxElevenActiveBar.setDefaultUnit(kony.flex.DP);
        flxElevenActiveBar.add();
        flxElevenActiveRow.add(lblElevenActiveRowLabel, flxElevenActiveBar);
        var flxElevenInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxElevenInActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxElevenInActiveRow"), extendConfig({}, controller.args[1], "flxElevenInActiveRow"), extendConfig({}, controller.args[2], "flxElevenInActiveRow"));
        flxElevenInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblElevenActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblElevenActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Confirm",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblElevenActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblElevenActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblElevenActiveLabel"));
        flxElevenInActiveRow.add(lblElevenActiveLabel);
        flxElevenRow.add(flxElevenCheckedRow, flxElevenActiveRow, flxElevenInActiveRow);
        var flxTwelveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxTwelveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxTwelveRow"), extendConfig({}, controller.args[1], "flxTwelveRow"), extendConfig({}, controller.args[2], "flxTwelveRow"));
        flxTwelveRow.setDefaultUnit(kony.flex.DP);
        var flxTwelveCheckedRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTwelveCheckedRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTwelveCheckedRow"), extendConfig({}, controller.args[1], "flxTwelveCheckedRow"), extendConfig({}, controller.args[2], "flxTwelveCheckedRow"));
        flxTwelveCheckedRow.setDefaultUnit(kony.flex.DP);
        var lblTwelveCheckedRowLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblTwelveCheckedRowLabel",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "From Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTwelveCheckedRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTwelveCheckedRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTwelveCheckedRowLabel"));
        var lblTwelveCheckedRowName = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblTwelveCheckedRowName",
            "isVisible": true,
            "left": "29dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "My Checked...9780",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTwelveCheckedRowName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTwelveCheckedRowName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTwelveCheckedRowName"));
        flxTwelveCheckedRow.add(lblTwelveCheckedRowLabel, lblTwelveCheckedRowName);
        var flxTwelveActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTwelveActiveRow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTwelveActiveRow"), extendConfig({}, controller.args[1], "flxTwelveActiveRow"), extendConfig({}, controller.args[2], "flxTwelveActiveRow"));
        flxTwelveActiveRow.setDefaultUnit(kony.flex.DP);
        var lblTwelveActiveRowLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTwelveActiveRowLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFs004b95Tab",
            "text": "Transfer Amount",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTwelveActiveRowLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTwelveActiveRowLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTwelveActiveRowLabel"));
        var flxTwelveActiveBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTwelveActiveBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "sknFlxBg004B95Tab",
            "top": "0dp",
            "width": "8dp",
            "zIndex": 1
        }, controller.args[0], "flxTwelveActiveBar"), extendConfig({}, controller.args[1], "flxTwelveActiveBar"), extendConfig({}, controller.args[2], "flxTwelveActiveBar"));
        flxTwelveActiveBar.setDefaultUnit(kony.flex.DP);
        flxTwelveActiveBar.add();
        flxTwelveActiveRow.add(lblTwelveActiveRowLabel, flxTwelveActiveBar);
        var flxTwelveInActiveRow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTwelveInActiveRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgf9f9f9Border1PxTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTwelveInActiveRow"), extendConfig({}, controller.args[1], "flxTwelveInActiveRow"), extendConfig({}, controller.args[2], "flxTwelveInActiveRow"));
        flxTwelveInActiveRow.setDefaultUnit(kony.flex.DP);
        var lblTwelveActiveLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTwelveActiveLabel",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblBg000000SSP30PxTab",
            "text": "Confirm",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTwelveActiveLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTwelveActiveLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTwelveActiveLabel"));
        flxTwelveInActiveRow.add(lblTwelveActiveLabel);
        flxTwelveRow.add(flxTwelveCheckedRow, flxTwelveActiveRow, flxTwelveInActiveRow);
        var flxSeparatorBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgE6E6E6Tab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparatorBottom"), extendConfig({}, controller.args[1], "flxSeparatorBottom"), extendConfig({}, controller.args[2], "flxSeparatorBottom"));
        flxSeparatorBottom.setDefaultUnit(kony.flex.DP);
        flxSeparatorBottom.add();
        CustomRightBar.add(flxFirstRow, flxSecondRow, flxThirdRow, flxFourthRow, flxFifthRow, flxSixthRow, flxSeventhRow, flxEighthRow, flxNineRow, flxTenRow, flxElevenRow, flxTwelveRow, flxSeparatorBottom);
        return CustomRightBar;
    }
})