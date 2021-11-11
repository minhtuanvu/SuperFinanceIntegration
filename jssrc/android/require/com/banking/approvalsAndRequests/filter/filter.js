define(function() {
    return function(controller) {
        var filter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "filter",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg000000",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "filter"), extendConfig({}, controller.args[1], "filter"), extendConfig({}, controller.args[2], "filter"));
        filter.setDefaultUnit(kony.flex.DP);
        var flxSelectTransactionType = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "51dp",
            "id": "flxSelectTransactionType",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBg000000",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSelectTransactionType"), extendConfig({}, controller.args[1], "flxSelectTransactionType"), extendConfig({}, controller.args[2], "flxSelectTransactionType"));
        flxSelectTransactionType.setDefaultUnit(kony.flex.DP);
        var lblSelectTransactionTypeSeperator = new kony.ui.Label(extendConfig({
            "bottom": 0,
            "height": "1dp",
            "id": "lblSelectTransactionTypeSeperator",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "right": 0,
            "skin": "sknLblSeparatore3e3e3",
            "text": ".",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 50,
            "width": "100%",
            "zIndex": 10000
        }, controller.args[0], "lblSelectTransactionTypeSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectTransactionTypeSeperator"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSelectTransactionTypeSeperator"));
        var lblSelectTransactionType = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSelectTransactionType",
            "isVisible": true,
            "left": "20dp",
            "maxHeight": "49dp",
            "maxWidth": "90%",
            "skin": "sknlbl424242semibold15px",
            "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.SelectTransactionType"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "90%"
        }, controller.args[0], "lblSelectTransactionType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectTransactionType"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSelectTransactionType"));
        var imgSelectTransactionType = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgSelectTransactionType",
            "isVisible": true,
            "right": "12dp",
            "skin": "slImage",
            "src": "closeicon.png",
            "top": "0",
            "width": "17dp"
        }, controller.args[0], "imgSelectTransactionType"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSelectTransactionType"), extendConfig({}, controller.args[2], "imgSelectTransactionType"));
        var btnSelectTransactionType = new kony.ui.Button(extendConfig({
            "bottom": 1,
            "focusSkin": "sknBtnBgTransparent",
            "height": "49dp",
            "id": "btnSelectTransactionType",
            "isVisible": true,
            "right": 0,
            "skin": "sknBtnBgTransparent",
            "text": "X",
            "top": 1,
            "width": "50%",
            "zIndex": 1000
        }, controller.args[0], "btnSelectTransactionType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSelectTransactionType"), extendConfig({}, controller.args[2], "btnSelectTransactionType"));
        flxSelectTransactionType.add(lblSelectTransactionTypeSeperator, lblSelectTransactionType, imgSelectTransactionType, btnSelectTransactionType);
        var flxAll = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxBg000000",
            "height": "51dp",
            "id": "flxAll",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBg000000",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxAll"), extendConfig({}, controller.args[1], "flxAll"), extendConfig({}, controller.args[2], "flxAll"));
        flxAll.setDefaultUnit(kony.flex.DP);
        var flxAllSeperator = new kony.ui.Label(extendConfig({
            "bottom": 0,
            "height": "1dp",
            "id": "flxAllSeperator",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "right": 0,
            "skin": "sknLblSeparatore3e3e3",
            "text": ".",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 50,
            "width": "100%",
            "zIndex": 10000
        }, controller.args[0], "flxAllSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "flxAllSeperator"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "flxAllSeperator"));
        var imgAll = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgAll",
            "isVisible": true,
            "right": "12dp",
            "skin": "slImage",
            "src": "tickmark_green.png",
            "top": "0",
            "width": "17dp"
        }, controller.args[0], "imgAll"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAll"), extendConfig({}, controller.args[2], "imgAll"));
        var flxAllText = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "49dp",
            "id": "flxAllText",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "29dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "90%"
        }, controller.args[0], "flxAllText"), extendConfig({}, controller.args[1], "flxAllText"), extendConfig({}, controller.args[2], "flxAllText"));
        flxAllText.setDefaultUnit(kony.flex.DP);
        var lblAll = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAll",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknlbl004B95SSPR11dp",
            "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.All"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblAll"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAll"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAll"));
        var lblAllCounter = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAllCounter",
            "isVisible": true,
            "left": "2dp",
            "skin": "sknlbl004B95SSPR11dp",
            "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.Counter"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblAllCounter"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAllCounter"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAllCounter"));
        flxAllText.add(lblAll, lblAllCounter);
        var btnAll = new kony.ui.Button(extendConfig({
            "bottom": 1,
            "focusSkin": "sknBtnBgTransparent",
            "height": "49dp",
            "id": "btnAll",
            "isVisible": true,
            "right": 1,
            "skin": "sknBtnBgTransparent",
            "text": "X",
            "top": 1,
            "width": "99%",
            "zIndex": 1000
        }, controller.args[0], "btnAll"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAll"), extendConfig({}, controller.args[2], "btnAll"));
        flxAll.add(flxAllSeperator, imgAll, flxAllText, btnAll);
        var flxSingleTransactions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "51dp",
            "id": "flxSingleTransactions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBg000000",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSingleTransactions"), extendConfig({}, controller.args[1], "flxSingleTransactions"), extendConfig({}, controller.args[2], "flxSingleTransactions"));
        flxSingleTransactions.setDefaultUnit(kony.flex.DP);
        var lblSingleTransactionsSeperator = new kony.ui.Label(extendConfig({
            "bottom": 0,
            "height": "1dp",
            "id": "lblSingleTransactionsSeperator",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "right": 0,
            "skin": "sknLblSeparatore3e3e3",
            "text": ".",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 50,
            "width": "100%",
            "zIndex": 10000
        }, controller.args[0], "lblSingleTransactionsSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSingleTransactionsSeperator"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSingleTransactionsSeperator"));
        var lblSingleTransactions = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSingleTransactions",
            "isVisible": true,
            "left": "20dp",
            "maxHeight": "49dp",
            "maxNumberOfLines": 1,
            "maxWidth": "90%",
            "skin": "sknlbl424242regular15px",
            "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.SingleTransactions"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "90%"
        }, controller.args[0], "lblSingleTransactions"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSingleTransactions"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSingleTransactions"));
        var imgSingleTransactions = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgSingleTransactions",
            "isVisible": true,
            "right": "12dp",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0",
            "width": "17dp"
        }, controller.args[0], "imgSingleTransactions"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSingleTransactions"), extendConfig({}, controller.args[2], "imgSingleTransactions"));
        var btnSingleTransactions = new kony.ui.Button(extendConfig({
            "bottom": 1,
            "height": "49dp",
            "id": "btnSingleTransactions",
            "isVisible": true,
            "right": 0,
            "skin": "sknBtnBgTransparent",
            "top": 1,
            "width": "99%",
            "zIndex": 1000
        }, controller.args[0], "btnSingleTransactions"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSingleTransactions"), extendConfig({}, controller.args[2], "btnSingleTransactions"));
        flxSingleTransactions.add(lblSingleTransactionsSeperator, lblSingleTransactions, imgSingleTransactions, btnSingleTransactions);
        var segSingleTransactions = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgSelect": "tickmark_green.png",
                "lblCounter": "(1)",
                "lblSeperator": ".",
                "lblText": "International Transfers"
            }, {
                "imgSelect": "transparent.png",
                "lblCounter": "(2)",
                "lblSeperator": ".",
                "lblText": "Bill Payment"
            }],
            "groupCells": false,
            "id": "segSingleTransactions",
            "isVisible": true,
            "left": "0",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxApprovalsAndRequestFilter",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxApprovalsAndRequestFilter": "flxApprovalsAndRequestFilter",
                "flxText": "flxText",
                "imgSelect": "imgSelect",
                "lblCounter": "lblCounter",
                "lblSeperator": "lblSeperator",
                "lblText": "lblText"
            },
            "width": "100%"
        }, controller.args[0], "segSingleTransactions"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSingleTransactions"), extendConfig({}, controller.args[2], "segSingleTransactions"));
        var flxBulkTransactions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "51dp",
            "id": "flxBulkTransactions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBg000000",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxBulkTransactions"), extendConfig({}, controller.args[1], "flxBulkTransactions"), extendConfig({}, controller.args[2], "flxBulkTransactions"));
        flxBulkTransactions.setDefaultUnit(kony.flex.DP);
        var lblBulkTransactionsSeperator = new kony.ui.Label(extendConfig({
            "bottom": 0,
            "height": "1dp",
            "id": "lblBulkTransactionsSeperator",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "right": 0,
            "skin": "sknLblSeparatore3e3e3",
            "text": ".",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 50,
            "width": "100%",
            "zIndex": 10000
        }, controller.args[0], "lblBulkTransactionsSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBulkTransactionsSeperator"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBulkTransactionsSeperator"));
        var lblBulkTransactions = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblBulkTransactions",
            "isVisible": true,
            "left": "20dp",
            "maxHeight": "49dp",
            "maxWidth": "90%",
            "skin": "sknlbl424242regular15px",
            "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.bulkTransactions"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "90%"
        }, controller.args[0], "lblBulkTransactions"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBulkTransactions"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBulkTransactions"));
        var imgBulkTransactionsSeperator = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgBulkTransactionsSeperator",
            "isVisible": true,
            "right": "12dp",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0",
            "width": "17dp"
        }, controller.args[0], "imgBulkTransactionsSeperator"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBulkTransactionsSeperator"), extendConfig({}, controller.args[2], "imgBulkTransactionsSeperator"));
        var btnBulkTransactionsSeperator = new kony.ui.Button(extendConfig({
            "bottom": 1,
            "height": "49dp",
            "id": "btnBulkTransactionsSeperator",
            "isVisible": true,
            "right": 0,
            "skin": "sknBtnBgTransparent",
            "top": 1,
            "width": "99%",
            "zIndex": 1000
        }, controller.args[0], "btnBulkTransactionsSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBulkTransactionsSeperator"), extendConfig({}, controller.args[2], "btnBulkTransactionsSeperator"));
        flxBulkTransactions.add(lblBulkTransactionsSeperator, lblBulkTransactions, imgBulkTransactionsSeperator, btnBulkTransactionsSeperator);
        var segBulkTransactions = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgSelect": "tickmark_green.png",
                "lblCounter": "(1)",
                "lblSeperator": ".",
                "lblText": "International Transfers"
            }, {
                "imgSelect": "transparent.png",
                "lblCounter": "(2)",
                "lblSeperator": ".",
                "lblText": "Bill Payment"
            }],
            "groupCells": false,
            "id": "segBulkTransactions",
            "isVisible": true,
            "left": "0",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxApprovalsAndRequestFilter",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxApprovalsAndRequestFilter": "flxApprovalsAndRequestFilter",
                "flxText": "flxText",
                "imgSelect": "imgSelect",
                "lblCounter": "lblCounter",
                "lblSeperator": "lblSeperator",
                "lblText": "lblText"
            },
            "width": "100%"
        }, controller.args[0], "segBulkTransactions"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segBulkTransactions"), extendConfig({}, controller.args[2], "segBulkTransactions"));
        var flxOtherRequests = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "51dp",
            "id": "flxOtherRequests",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBg000000",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxOtherRequests"), extendConfig({}, controller.args[1], "flxOtherRequests"), extendConfig({}, controller.args[2], "flxOtherRequests"));
        flxOtherRequests.setDefaultUnit(kony.flex.DP);
        var lblOtherRequestsSeperator = new kony.ui.Label(extendConfig({
            "bottom": 0,
            "height": "1dp",
            "id": "lblOtherRequestsSeperator",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "right": 0,
            "skin": "sknLblSeparatore3e3e3",
            "text": ".",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 50,
            "width": "100%",
            "zIndex": 10000
        }, controller.args[0], "lblOtherRequestsSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOtherRequestsSeperator"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblOtherRequestsSeperator"));
        var lblOtherRequests = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblOtherRequests",
            "isVisible": true,
            "left": "20dp",
            "maxHeight": "49dp",
            "maxWidth": "90%",
            "skin": "sknlbl424242regular15px",
            "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.otherRequests"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "90%"
        }, controller.args[0], "lblOtherRequests"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOtherRequests"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblOtherRequests"));
        var imgOtherRequests = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgOtherRequests",
            "isVisible": true,
            "right": "12dp",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0",
            "width": "17dp"
        }, controller.args[0], "imgOtherRequests"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgOtherRequests"), extendConfig({}, controller.args[2], "imgOtherRequests"));
        var btnOtherRequests = new kony.ui.Button(extendConfig({
            "bottom": 1,
            "height": "49dp",
            "id": "btnOtherRequests",
            "isVisible": true,
            "right": 0,
            "skin": "sknBtnBgTransparent",
            "top": 1,
            "width": "99%",
            "zIndex": 1000
        }, controller.args[0], "btnOtherRequests"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherRequests"), extendConfig({}, controller.args[2], "btnOtherRequests"));
        flxOtherRequests.add(lblOtherRequestsSeperator, lblOtherRequests, imgOtherRequests, btnOtherRequests);
        var segOtherRequests = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgSelect": "tickmark_green.png",
                "lblCounter": "(1)",
                "lblSeperator": ".",
                "lblText": "Check Management"
            }],
            "groupCells": false,
            "id": "segOtherRequests",
            "isVisible": true,
            "left": "0",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxApprovalsAndRequestFilter",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxApprovalsAndRequestFilter": "flxApprovalsAndRequestFilter",
                "flxText": "flxText",
                "imgSelect": "imgSelect",
                "lblCounter": "lblCounter",
                "lblSeperator": "lblSeperator",
                "lblText": "lblText"
            },
            "width": "100%"
        }, controller.args[0], "segOtherRequests"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segOtherRequests"), extendConfig({}, controller.args[2], "segOtherRequests"));
        var flxComponentSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxComponentSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxGridSeperator",
            "top": -1,
            "width": "100%",
            "zIndex": 1000000000
        }, controller.args[0], "flxComponentSeperator"), extendConfig({}, controller.args[1], "flxComponentSeperator"), extendConfig({}, controller.args[2], "flxComponentSeperator"));
        flxComponentSeperator.setDefaultUnit(kony.flex.DP);
        flxComponentSeperator.add();
        filter.add(flxSelectTransactionType, flxAll, flxSingleTransactions, segSingleTransactions, flxBulkTransactions, segBulkTransactions, flxOtherRequests, segOtherRequests, flxComponentSeperator);
        return filter;
    }
})