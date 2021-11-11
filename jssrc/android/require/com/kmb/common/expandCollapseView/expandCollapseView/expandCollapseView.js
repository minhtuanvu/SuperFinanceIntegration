define(function() {
    return function(controller) {
        var expandCollapseView = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "expandCollapseView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "expandCollapseView"), extendConfig({}, controller.args[1], "expandCollapseView"), extendConfig({}, controller.args[2], "expandCollapseView"));
        expandCollapseView.setDefaultUnit(kony.flex.DP);
        var flxMainContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMainContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContent"), extendConfig({}, controller.args[1], "flxMainContent"), extendConfig({}, controller.args[2], "flxMainContent"));
        flxMainContent.setDefaultUnit(kony.flex.DP);
        var flxHeaderBar1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxHeaderBar1",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6Bcg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderBar1"), extendConfig({}, controller.args[1], "flxHeaderBar1"), extendConfig({}, controller.args[2], "flxHeaderBar1"));
        flxHeaderBar1.setDefaultUnit(kony.flex.DP);
        var flxTopShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxTopShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTopShadow"), extendConfig({}, controller.args[1], "flxTopShadow"), extendConfig({}, controller.args[2], "flxTopShadow"));
        flxTopShadow.setDefaultUnit(kony.flex.DP);
        flxTopShadow.add();
        var flxShadowBottom1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "7dp",
            "id": "flxShadowBottom1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadowBottom",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadowBottom1"), extendConfig({}, controller.args[1], "flxShadowBottom1"), extendConfig({}, controller.args[2], "flxShadowBottom1"));
        flxShadowBottom1.setDefaultUnit(kony.flex.DP);
        flxShadowBottom1.add();
        var lblHeaderBar1 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblHeaderBar1",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknEditChannel",
            "text": "..",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblHeaderBar1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderBar1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHeaderBar1"));
        var imgUpArrow1 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgUpArrow1",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "arrowdown.png",
            "width": "20dp",
            "zIndex": 6
        }, controller.args[0], "imgUpArrow1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgUpArrow1"), extendConfig({}, controller.args[2], "imgUpArrow1"));
        flxHeaderBar1.add(flxTopShadow, flxShadowBottom1, lblHeaderBar1, imgUpArrow1);
        var flxListBar1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxListBar1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxListBar1"), extendConfig({}, controller.args[1], "flxListBar1"), extendConfig({}, controller.args[2], "flxListBar1"));
        flxListBar1.setDefaultUnit(kony.flex.DP);
        var segList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [
                [{
                        "imgUpArrow": "arrowdown.png",
                        "lblHeader": "Transactions"
                    },
                    [{
                        "imgIndicator": "",
                        "lblDate": "12/06/2020",
                        "lblTransaction": "Name",
                        "lblTransactionAmount": "200.00"
                    }, {
                        "imgIndicator": "",
                        "lblDate": "12/06/2020",
                        "lblTransaction": "NAme1",
                        "lblTransactionAmount": "300.00"
                    }, {
                        "imgIndicator": "",
                        "lblDate": "12/06/2020",
                        "lblTransaction": "reg",
                        "lblTransactionAmount": "222"
                    }]
                ],
                [{
                        "imgUpArrow": "arrowdown.png",
                        "lblHeader": "Transactions"
                    },
                    [{
                        "imgIndicator": "",
                        "lblDate": "12/06/2020",
                        "lblTransaction": "Name",
                        "lblTransactionAmount": "200.00"
                    }, {
                        "imgIndicator": "",
                        "lblDate": "12/06/2020",
                        "lblTransaction": "NAme1",
                        "lblTransactionAmount": "300.00"
                    }, {
                        "imgIndicator": "",
                        "lblDate": "12/06/2020",
                        "lblTransaction": "reg",
                        "lblTransactionAmount": "222"
                    }]
                ]
            ],
            "groupCells": false,
            "id": "segList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxTransactions",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "sectionHeaderTemplate": "flxApprovalReqExpColHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "e3e3e300",
            "separatorRequired": true,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxApprovalReqExpColHeader": "flxApprovalReqExpColHeader",
                "flxContent": "flxContent",
                "flxImgUp": "flxImgUp",
                "flxImgindicator": "flxImgindicator",
                "flxSeparator": "flxSeparator",
                "flxShadowBottom": "flxShadowBottom",
                "flxTransactions": "flxTransactions",
                "flxWrapper": "flxWrapper",
                "imgIndicator": "imgIndicator",
                "imgUpArrow": "imgUpArrow",
                "lblDate": "lblDate",
                "lblHeader": "lblHeader",
                "lblTransaction": "lblTransaction",
                "lblTransactionAmount": "lblTransactionAmount"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segList"), extendConfig({}, controller.args[2], "segList"));
        flxListBar1.add(segList);
        flxMainContent.add(flxHeaderBar1, flxListBar1);
        expandCollapseView.add(flxMainContent);
        return expandCollapseView;
    }
})