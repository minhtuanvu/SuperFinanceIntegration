define(function() {
    return function(controller) {
        var Acknowledgement = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Acknowledgement",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "Acknowledgement"), extendConfig({}, controller.args[1], "Acknowledgement"), extendConfig({}, controller.args[2], "Acknowledgement"));
        Acknowledgement.setDefaultUnit(kony.flex.DP);
        var flxSuccessTransaction = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "flxSuccessTransaction",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSuccessTransaction"), extendConfig({}, controller.args[1], "flxSuccessTransaction"), extendConfig({}, controller.args[2], "flxSuccessTransaction"));
        flxSuccessTransaction.setDefaultUnit(kony.flex.DP);
        var flxConfirmationMain = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "110dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxConfirmationMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknFlxScrlffffff",
            "top": "56dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxConfirmationMain"), extendConfig({}, controller.args[1], "flxConfirmationMain"), extendConfig({}, controller.args[2], "flxConfirmationMain"));
        flxConfirmationMain.setDefaultUnit(kony.flex.DP);
        var flxSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSuccess",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxSuccess"), extendConfig({}, controller.args[1], "flxSuccess"), extendConfig({}, controller.args[2], "flxSuccess"));
        flxSuccess.setDefaultUnit(kony.flex.DP);
        var imgGreenTick = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "60dp",
            "id": "imgGreenTick",
            "isVisible": true,
            "skin": "slImage",
            "src": "successicon.png",
            "top": "20dp",
            "width": "60dp",
            "zIndex": 4
        }, controller.args[0], "imgGreenTick"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGreenTick"), extendConfig({}, controller.args[2], "imgGreenTick"));
        var lblSuccessMessage = new kony.ui.Label(extendConfig({
            "centerX": "49.78%",
            "id": "lblSuccessMessage",
            "isVisible": true,
            "skin": "sknlbl000000SSPSemiBold24px",
            "text": "Transaction was done successfully",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "18dp",
            "width": "312dp",
            "zIndex": 4
        }, controller.args[0], "lblSuccessMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSuccessMessage"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSuccessMessage"));
        var flxSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5.33%",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "17dp",
            "width": "89.33%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator"), extendConfig({}, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxSuccess.add(imgGreenTick, lblSuccessMessage, flxSeparator);
        var flxConfirmationDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxConfirmationDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxConfirmationDetails"), extendConfig({}, controller.args[1], "flxConfirmationDetails"), extendConfig({}, controller.args[2], "flxConfirmationDetails"));
        flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
        var segDetails = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }, {
                "lblDetails": "Label",
                "lblExtras": "Label",
                "lblTitle": "Reference ID"
            }],
            "groupCells": false,
            "id": "segDetails",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Normal",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxAcknowloedgmentRow",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxAcknowloedgmentRow": "flxAcknowloedgmentRow",
                "flxSeparator": "flxSeparator",
                "lblDetails": "lblDetails",
                "lblExtras": "lblExtras",
                "lblTitle": "lblTitle"
            },
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "segDetails"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segDetails"), extendConfig({}, controller.args[2], "segDetails"));
        flxConfirmationDetails.add(segDetails);
        flxConfirmationMain.add(flxSuccess, flxConfirmationDetails);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "112dp",
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnDashboard = new kony.ui.Button(extendConfig({
            "bottom": "1.3599999999999999%",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnDashboard",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e4RoundedffffffSSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title"),
            "zIndex": 1
        }, controller.args[0], "btnDashboard"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDashboard"), extendConfig({}, controller.args[2], "btnDashboard"));
        var btnNewTransfer = new kony.ui.Button(extendConfig({
            "bottom": "59dp",
            "centerX": "50.00%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnNewTransfer",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e4RoundedffffffSSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.MM.NewTransfer"),
            "zIndex": 1
        }, controller.args[0], "btnNewTransfer"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNewTransfer"), extendConfig({}, controller.args[2], "btnNewTransfer"));
        flxButtons.add(btnDashboard, btnNewTransfer);
        flxSuccessTransaction.add(flxConfirmationMain, flxButtons);
        var flxSuccessNonTransaction = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxSuccessNonTransaction",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "50dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxSuccessNonTransaction"), extendConfig({}, controller.args[1], "flxSuccessNonTransaction"), extendConfig({}, controller.args[2], "flxSuccessNonTransaction"));
        flxSuccessNonTransaction.setDefaultUnit(kony.flex.DP);
        var btnLoginAgain = new kony.ui.Button(extendConfig({
            "bottom": 30,
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnLoginAgain",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnDarkTheme",
            "text": kony.i18n.getLocalizedString("kony.mb.common.TryAgain"),
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnLoginAgain"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLoginAgain"), extendConfig({}, controller.args[2], "btnLoginAgain"));
        var flxContainerSuccessNonTransaction = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxContainerSuccessNonTransaction",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "175dp",
            "width": "312dp"
        }, controller.args[0], "flxContainerSuccessNonTransaction"), extendConfig({}, controller.args[1], "flxContainerSuccessNonTransaction"), extendConfig({}, controller.args[2], "flxContainerSuccessNonTransaction"));
        flxContainerSuccessNonTransaction.setDefaultUnit(kony.flex.DP);
        var flxInfoSuccessNonTransaction = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxInfoSuccessNonTransaction",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "87dp",
            "width": "100%"
        }, controller.args[0], "flxInfoSuccessNonTransaction"), extendConfig({}, controller.args[1], "flxInfoSuccessNonTransaction"), extendConfig({}, controller.args[2], "flxInfoSuccessNonTransaction"));
        flxInfoSuccessNonTransaction.setDefaultUnit(kony.flex.DP);
        var lblTitleNonTransaction = new kony.ui.Label(extendConfig({
            "id": "lblTitleNonTransaction",
            "isVisible": true,
            "left": "0",
            "skin": "sknlbl000000SSPSemiBold24px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblTitleNonTransaction"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitleNonTransaction"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTitleNonTransaction"));
        var lblMessageNonTransaction = new kony.ui.Label(extendConfig({
            "id": "lblMessageNonTransaction",
            "isVisible": true,
            "left": "0",
            "skin": "sknlbl000000SSP26px",
            "text": "Text",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": "100%"
        }, controller.args[0], "lblMessageNonTransaction"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessageNonTransaction"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMessageNonTransaction"));
        flxInfoSuccessNonTransaction.add(lblTitleNonTransaction, lblMessageNonTransaction);
        var imgSuccess = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "65dp",
            "id": "imgSuccess",
            "isVisible": true,
            "skin": "slImage",
            "src": "successicon.png",
            "top": "0dp",
            "width": "65dp",
            "zIndex": 1
        }, controller.args[0], "imgSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSuccess"), extendConfig({}, controller.args[2], "imgSuccess"));
        flxContainerSuccessNonTransaction.add(flxInfoSuccessNonTransaction, imgSuccess);
        flxSuccessNonTransaction.add(btnLoginAgain, flxContainerSuccessNonTransaction);
        var flxError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxError",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "50dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxError"), extendConfig({}, controller.args[1], "flxError"), extendConfig({}, controller.args[2], "flxError"));
        flxError.setDefaultUnit(kony.flex.DP);
        var btnTryAgain = new kony.ui.Button(extendConfig({
            "bottom": "30dp",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnTryAgain",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnDarkTheme",
            "text": kony.i18n.getLocalizedString("kony.mb.common.TryAgain"),
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnTryAgain"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTryAgain"), extendConfig({}, controller.args[2], "btnTryAgain"));
        var flxContainerError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxContainerError",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "100dp",
            "width": "312dp"
        }, controller.args[0], "flxContainerError"), extendConfig({}, controller.args[1], "flxContainerError"), extendConfig({}, controller.args[2], "flxContainerError"));
        flxContainerError.setDefaultUnit(kony.flex.DP);
        var imgError = new kony.ui.Image2(extendConfig({
            "centerX": "50.00%",
            "height": "65dp",
            "id": "imgError",
            "isVisible": true,
            "skin": "slImage",
            "src": "rejected.png",
            "top": "0dp",
            "width": "65dp",
            "zIndex": 1
        }, controller.args[0], "imgError"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgError"), extendConfig({}, controller.args[2], "imgError"));
        var flxInfo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxInfo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "87dp",
            "width": "100%"
        }, controller.args[0], "flxInfo"), extendConfig({}, controller.args[1], "flxInfo"), extendConfig({}, controller.args[2], "flxInfo"));
        flxInfo.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label(extendConfig({
            "id": "lblTitle",
            "isVisible": true,
            "left": "0",
            "skin": "sknlbl000000SSPSemiBold24px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTitle"));
        var lblMessage = new kony.ui.Label(extendConfig({
            "id": "lblMessage",
            "isVisible": true,
            "left": "0",
            "skin": "sknlbl000000SSP26px",
            "text": "Text",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": "100%"
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMessage"));
        flxInfo.add(lblTitle, lblMessage);
        flxContainerError.add(imgError, flxInfo);
        flxError.add(btnTryAgain, flxContainerError);
        Acknowledgement.add(flxSuccessTransaction, flxSuccessNonTransaction, flxError);
        return Acknowledgement;
    }
})