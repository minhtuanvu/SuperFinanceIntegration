define(function() {
    return function(controller) {
        var TransfersListMobileNative = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "TransfersListMobileNative",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_b3ee4769169e4401b7fb4771bb9bdcb5(eventobject);
            },
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "TransfersListMobileNative"), extendConfig({}, controller.args[1], "TransfersListMobileNative"), extendConfig({}, controller.args[2], "TransfersListMobileNative"));
        TransfersListMobileNative.setDefaultUnit(kony.flex.DP);
        var flxTransfersList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTransfersList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxTransfersList"), extendConfig({}, controller.args[1], "flxTransfersList"), extendConfig({}, controller.args[2], "flxTransfersList"));
        flxTransfersList.setDefaultUnit(kony.flex.DP);
        var segTransfersList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "curntView": "",
                "imgIcon1": "",
                "imgIcon2": "",
                "imgIcon3": "",
                "imgIcon4": "",
                "imgSwipeBtn1": "",
                "imgSwipeBtn2": "",
                "lblField1": "SomeField",
                "lblField2": "$20",
                "lblField3": "Posted",
                "lblField4": "01/01/2020",
                "lblSwipeBtn1Text": "",
                "lblSwipeBtn2Text": ""
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segTransfersList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxTransfersRowTemplate",
            "scrollingEvents": {
                "onReachingEnd": controller.AS_Segment_b14b6be8b8af40dcb5ba1451bc751dd6
            },
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "00000000",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxField1": "flxField1",
                "flxField3": "flxField3",
                "flxGroup1": "flxGroup1",
                "flxGroup2": "flxGroup2",
                "flxGroup3": "flxGroup3",
                "flxGroup4": "flxGroup4",
                "flxIcon1": "flxIcon1",
                "flxIcon2": "flxIcon2",
                "flxIcon3": "flxIcon3",
                "flxIcon4": "flxIcon4",
                "flxRightSideContents": "flxRightSideContents",
                "flxRow": "flxRow",
                "flxSeparator": "flxSeparator",
                "flxSwipeBtn1": "flxSwipeBtn1",
                "flxSwipeBtn2": "flxSwipeBtn2",
                "flxSwipeContainer": "flxSwipeContainer",
                "flxTransfersRowTemplate": "flxTransfersRowTemplate",
                "imgIcon1": "imgIcon1",
                "imgIcon2": "imgIcon2",
                "imgIcon3": "imgIcon3",
                "imgIcon4": "imgIcon4",
                "imgSwipeBtn1": "imgSwipeBtn1",
                "imgSwipeBtn2": "imgSwipeBtn2",
                "lblField1": "lblField1",
                "lblField2": "lblField2",
                "lblField3": "lblField3",
                "lblField4": "lblField4",
                "lblSwipeBtn1Text": "lblSwipeBtn1Text",
                "lblSwipeBtn2Text": "lblSwipeBtn2Text"
            },
            "widgetSkin": "Copyseg0f1ff04918e0042",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segTransfersList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segTransfersList"), extendConfig({}, controller.args[2], "segTransfersList"));
        flxTransfersList.add(segTransfersList);
        var flxNoTransactions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNoTransactions",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxNoTransactions"), extendConfig({}, controller.args[1], "flxNoTransactions"), extendConfig({}, controller.args[2], "flxNoTransactions"));
        flxNoTransactions.setDefaultUnit(kony.flex.DP);
        var flxNoRecords = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxNoRecords",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxNoRecords"), extendConfig({}, controller.args[1], "flxNoRecords"), extendConfig({}, controller.args[2], "flxNoRecords"));
        flxNoRecords.setDefaultUnit(kony.flex.DP);
        var lblNoRecords = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblNoRecords",
            "isVisible": true,
            "left": 70,
            "skin": "sknEditChannel",
            "text": "No Rec Available !",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 20,
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblNoRecords"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoRecords"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNoRecords"));
        var imgExclamation = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgExclamation",
            "isVisible": true,
            "left": 25,
            "skin": "ICSknTNSlimage",
            "src": "norecordsavailableicon.png",
            "top": 20,
            "width": "30dp"
        }, controller.args[0], "imgExclamation"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgExclamation"), extendConfig({}, controller.args[2], "imgExclamation"));
        flxNoRecords.add(lblNoRecords, imgExclamation);
        flxNoTransactions.add(flxNoRecords);
        var flxWait = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxWait",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "skin": "ICSknTNSlfbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxWait"), extendConfig({}, controller.args[1], "flxWait"), extendConfig({}, controller.args[2], "flxWait"));
        flxWait.setDefaultUnit(kony.flex.DP);
        var lblWait = new kony.ui.Label(extendConfig({
            "id": "lblWait",
            "isVisible": true,
            "left": "26dp",
            "skin": "sknEditChannel",
            "text": "Please wait...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblWait"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWait"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWait"));
        flxWait.add(lblWait);
        TransfersListMobileNative.add(flxTransfersList, flxNoTransactions, flxWait);
        return TransfersListMobileNative;
    }
})