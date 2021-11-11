define("ApprovalsReqModule/frmApprovalsAndRequestsFilters", function() {
    return function(controller) {
        function addWidgetsfrmApprovalsAndRequestsFilters() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "btnLeft": {
                        "isVisible": false
                    },
                    "btnRight": {
                        "isVisible": false
                    },
                    "customHeader": {
                        "isVisible": true
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": true
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "closewhite.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.FilterAccounts.ApplyFilter")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.preShow = controller.AS_FlexContainer_df653453cfe245f1b9085829b6ad33e5;
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxSelectTransactionType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxSelectTransactionType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBfF6F6F6",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSelectTransactionType.setDefaultUnit(kony.flex.DP);
            var lblSelectTransactionTypeSeperator = new kony.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSelectTransactionType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSelectTransactionType",
                "isVisible": true,
                "left": "20dp",
                "maxHeight": "49dp",
                "maxWidth": "90%",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.SelectTransactionType"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgSelectTransactionType = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgSelectTransactionType",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "arrowup.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSelectTransactionType = new kony.ui.Button({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectTransactionType.add(lblSelectTransactionTypeSeperator, lblSelectTransactionType, imgSelectTransactionType, btnSelectTransactionType);
            var flxSelectTransactionTypeS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSelectTransactionTypeS",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSelectTransactionTypeS.setDefaultUnit(kony.flex.DP);
            var flxAll = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxAll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxAll.setDefaultUnit(kony.flex.DP);
            var flxAllSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "flxAllSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgAll = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgAll",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAllText = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxAllText.setDefaultUnit(kony.flex.DP);
            var lblAll = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAll",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.All"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAllCounter = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAllCounter",
                "isVisible": false,
                "left": "2dp",
                "skin": "sknlbl004B95SSPR11dp",
                "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.Counter"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAllText.add(lblAll, lblAllCounter);
            var btnAll = new kony.ui.Button({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAll.add(flxAllSeperator, imgAll, flxAllText, btnAll);
            var flxSingleTransactions = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxSingleTransactions.setDefaultUnit(kony.flex.DP);
            var lblSingleTransactionsSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblSingleTransactionsSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSingleTransactions = new kony.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgSingleTransactions = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgSingleTransactions",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "transparentbox.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSingleTransactions = new kony.ui.Button({
                "bottom": 1,
                "height": "49dp",
                "id": "btnSingleTransactions",
                "isVisible": true,
                "right": 0,
                "skin": "sknBtnBgTransparent",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSingleTransactions.add(lblSingleTransactionsSeperator, lblSingleTransactions, imgSingleTransactions, btnSingleTransactions);
            var segSingleTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgSelect": "tickmark_green.png",
                    "lblCounter": "",
                    "lblSeperator": ".",
                    "lblText": "Some Data"
                }, {
                    "imgSelect": "tickmark_green.png",
                    "lblCounter": "",
                    "lblSeperator": ".",
                    "lblText": ""
                }],
                "groupCells": false,
                "id": "segSingleTransactions",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowTemplate": "flxApprovalsAndRequestHistory",
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
                    "flxApprovalsAndRequestHistory": "flxApprovalsAndRequestHistory",
                    "flxText": "flxText",
                    "imgSelect": "imgSelect",
                    "lblCounter": "lblCounter",
                    "lblSeperator": "lblSeperator",
                    "lblText": "lblText"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxBulkTransactions = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxBulkTransactions.setDefaultUnit(kony.flex.DP);
            var lblBulkTransactionsSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblBulkTransactionsSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBulkTransactions = new kony.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgBulkTransactionsSeperator = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgBulkTransactionsSeperator",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "transparentbox.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnBulkTransactionsSeperator = new kony.ui.Button({
                "bottom": 1,
                "height": "49dp",
                "id": "btnBulkTransactionsSeperator",
                "isVisible": true,
                "right": 0,
                "skin": "sknBtnBgTransparent",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBulkTransactions.add(lblBulkTransactionsSeperator, lblBulkTransactions, imgBulkTransactionsSeperator, btnBulkTransactionsSeperator);
            var segBulkTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgSelect": "tickmark_green.png",
                    "lblCounter": "",
                    "lblSeperator": ".",
                    "lblText": ""
                }, {
                    "imgSelect": "tickmark_green.png",
                    "lblCounter": "",
                    "lblSeperator": ".",
                    "lblText": ""
                }],
                "groupCells": false,
                "id": "segBulkTransactions",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxApprovalsAndRequestHistory",
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
                    "flxApprovalsAndRequestHistory": "flxApprovalsAndRequestHistory",
                    "flxText": "flxText",
                    "imgSelect": "imgSelect",
                    "lblCounter": "lblCounter",
                    "lblSeperator": "lblSeperator",
                    "lblText": "lblText"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOtherRequests = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxOtherRequests.setDefaultUnit(kony.flex.DP);
            var lblOtherRequestsSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblOtherRequestsSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOtherRequests = new kony.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgOtherRequests = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgOtherRequests",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "transparentbox.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnOtherRequests = new kony.ui.Button({
                "bottom": 1,
                "height": "49dp",
                "id": "btnOtherRequests",
                "isVisible": true,
                "right": 0,
                "skin": "sknBtnBgTransparent",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOtherRequests.add(lblOtherRequestsSeperator, lblOtherRequests, imgOtherRequests, btnOtherRequests);
            var segOtherRequests = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgSelect": "tickmark_green.png",
                    "lblCounter": "",
                    "lblSeperator": ".",
                    "lblText": ""
                }],
                "groupCells": false,
                "id": "segOtherRequests",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxApprovalsAndRequestHistory",
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
                    "flxApprovalsAndRequestHistory": "flxApprovalsAndRequestHistory",
                    "flxText": "flxText",
                    "imgSelect": "imgSelect",
                    "lblCounter": "lblCounter",
                    "lblSeperator": "lblSeperator",
                    "lblText": "lblText"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectTransactionTypeS.add(flxAll, flxSingleTransactions, segSingleTransactions, flxBulkTransactions, segBulkTransactions, flxOtherRequests, segOtherRequests);
            var flxSortBy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxSortBy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBfF6F6F6",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSortBy.setDefaultUnit(kony.flex.DP);
            var lblSortBySeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblSortBySeperator",
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSortByText = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSortByText",
                "isVisible": true,
                "left": "20dp",
                "maxHeight": "49dp",
                "maxWidth": "90%",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.sortBy"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgSortBy = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgSortBy",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSortBy = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnSortBy",
                "isVisible": true,
                "right": 0,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "50%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSortBy.add(lblSortBySeperator, lblSortByText, imgSortBy, btnSortBy);
            var flxSortBys = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSortBys",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSortBys.setDefaultUnit(kony.flex.DP);
            var flxApprovalDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxApprovalDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxApprovalDate.setDefaultUnit(kony.flex.DP);
            var flxApprovvalDateSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "flxApprovvalDateSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxpprovaldate = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "flxpprovaldate",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxApprovals = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxApprovals",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxApprovals.setDefaultUnit(kony.flex.DP);
            var lblApprovals = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApprovals",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Approval Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCounterApprovalDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCounterApprovalDate",
                "isVisible": false,
                "left": "2dp",
                "skin": "sknlbl004B95SSPR11dp",
                "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.Counter"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxApprovals.add(lblApprovals, lblCounterApprovalDate);
            var btnApprovalDate = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnApprovalDate",
                "isVisible": true,
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApprovalDate.add(flxApprovvalDateSeperator, flxpprovaldate, flxApprovals, btnApprovalDate);
            var flxStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxStatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxStatus.setDefaultUnit(kony.flex.DP);
            var flxStatusSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "flxStatusSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgStatus = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgStatus",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxStatusCounter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxStatusCounter",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxStatusCounter.setDefaultUnit(kony.flex.DP);
            var lblStatusText = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStatusText",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Status",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblStatusCounter = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStatusCounter",
                "isVisible": false,
                "left": "2dp",
                "skin": "sknlbl004B95SSPR11dp",
                "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.Counter"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxStatusCounter.add(lblStatusText, lblStatusCounter);
            var btnStatus = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnStatus",
                "isVisible": true,
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStatus.add(flxStatusSeperator, imgStatus, flxStatusCounter, btnStatus);
            var flxTransactionType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxTransactionType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxTransactionType.setDefaultUnit(kony.flex.DP);
            var flxTransactionTypeSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "flxTransactionTypeSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgTransactionType = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgTransactionType",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTransactionTypeText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxTransactionTypeText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxTransactionTypeText.setDefaultUnit(kony.flex.DP);
            var lblTransactionType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTransactionType",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Transaction Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionTypeCounter = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTransactionTypeCounter",
                "isVisible": false,
                "left": "2dp",
                "skin": "sknlbl004B95SSPR11dp",
                "text": kony.i18n.getLocalizedString("kony.mb.approvalsAndRequest.filter.Counter"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTransactionTypeText.add(lblTransactionType, lblTransactionTypeCounter);
            var btnTransactionType = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnTransactionType",
                "isVisible": true,
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTransactionType.add(flxTransactionTypeSeperator, imgTransactionType, flxTransactionTypeText, btnTransactionType);
            flxSortBys.add(flxApprovalDate, flxStatus, flxTransactionType);
            var flxViewByStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxViewByStatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBfF6F6F6",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxViewByStatus.setDefaultUnit(kony.flex.DP);
            var lblViewByStatusSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblViewByStatusSeperator",
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblViewByText = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblViewByText",
                "isVisible": true,
                "left": "20dp",
                "maxHeight": "49dp",
                "maxWidth": "90%",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.i18n.ApproavalsAndRequests.viewByStatus"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgViewBy = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgViewBy",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnViewBy = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnViewBy",
                "isVisible": true,
                "right": 0,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "50%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxViewByStatus.add(lblViewByStatusSeperator, lblViewByText, imgViewBy, btnViewBy);
            var flxViewByStatuss = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxViewByStatuss",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxViewByStatuss.setDefaultUnit(kony.flex.DP);
            var flxViewByStatusAll = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxViewByStatusAll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxViewByStatusAll.setDefaultUnit(kony.flex.DP);
            var flxViewByStatusAllSperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "flxViewByStatusAllSperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgViewByStatusAll = new kony.ui.Image2({
                "centerY": "50%",
                "height": "28dp",
                "id": "imgViewByStatusAll",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "0",
                "width": "28dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxViewByStatusAllText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxViewByStatusAllText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxViewByStatusAllText.setDefaultUnit(kony.flex.DP);
            var lblViewByStatusAll = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblViewByStatusAll",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Select All",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxViewByStatusAllText.add(lblViewByStatusAll);
            var btnViewByStatusAll = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnViewByStatusAll",
                "isVisible": true,
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxViewByStatusAll.add(flxViewByStatusAllSperator, imgViewByStatusAll, flxViewByStatusAllText, btnViewByStatusAll);
            var flxApproved = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxApproved",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxApproved.setDefaultUnit(kony.flex.DP);
            var lblApprovedSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblApprovedSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgApproved = new kony.ui.Image2({
                "centerY": "50%",
                "height": "28dp",
                "id": "imgApproved",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "0",
                "width": "28dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxApprovedText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxApprovedText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "39dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxApprovedText.setDefaultUnit(kony.flex.DP);
            var lblApproved = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApproved",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Approved",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxApprovedText.add(lblApproved);
            var btnApproved = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnApproved",
                "isVisible": true,
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApproved.add(lblApprovedSeperator, imgApproved, flxApprovedText, btnApproved);
            var flxRejected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxRejected",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxRejected.setDefaultUnit(kony.flex.DP);
            var flxRejectedSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "flxRejectedSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgRejected = new kony.ui.Image2({
                "centerY": "50%",
                "height": "28dp",
                "id": "imgRejected",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "0",
                "width": "28dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxRejectedText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxRejectedText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "39dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxRejectedText.setDefaultUnit(kony.flex.DP);
            var lblRejected = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRejected",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Rejected",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRejectedText.add(lblRejected);
            var btnRejected = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnRejected",
                "isVisible": true,
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRejected.add(flxRejectedSeperator, imgRejected, flxRejectedText, btnRejected);
            var flxPending = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxPending",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxPending.setDefaultUnit(kony.flex.DP);
            var lblPendingSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblPendingSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgPending = new kony.ui.Image2({
                "centerY": "50%",
                "height": "28dp",
                "id": "imgPending",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "0",
                "width": "28dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxPendingText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxPendingText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "39dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxPendingText.setDefaultUnit(kony.flex.DP);
            var lblPending = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPending",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Pending",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPendingText.add(lblPending);
            var btnPending = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnPending",
                "isVisible": true,
                "left": "2.50%",
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "100%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPending.add(lblPendingSeperator, imgPending, flxPendingText, btnPending);
            flxViewByStatuss.add(flxViewByStatusAll, flxApproved, flxRejected, flxPending);
            var flxViewByDuration = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxViewByDuration",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBfF6F6F6",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxViewByDuration.setDefaultUnit(kony.flex.DP);
            var lblViewByDurationSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblViewByDurationSeperator",
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblViewByDuration = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblViewByDuration",
                "isVisible": true,
                "left": "20dp",
                "maxHeight": "49dp",
                "maxWidth": "90%",
                "skin": "sknLbl424242SSPReg30px",
                "text": "View by Duration",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgViewByDuration = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgViewByDuration",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "top": "0",
                "width": "17dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnViewByDuration = new kony.ui.Button({
                "bottom": 1,
                "height": "49dp",
                "id": "btnViewByDuration",
                "isVisible": true,
                "right": 0,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "50%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxViewByDuration.add(lblViewByDurationSeperator, lblViewByDuration, imgViewByDuration, btnViewByDuration);
            var flxViewByDurations = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxViewByDurations",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxViewByDurations.setDefaultUnit(kony.flex.DP);
            var flxLastSixMonths = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxLastSixMonths",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxLastSixMonths.setDefaultUnit(kony.flex.DP);
            var lblLastSixMonthsSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblLastSixMonthsSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgLastSixMonths = new kony.ui.Image2({
                "centerY": "50%",
                "height": "24dp",
                "id": "imgLastSixMonths",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "0",
                "width": "24dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLastSixMonthsText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxLastSixMonthsText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxLastSixMonthsText.setDefaultUnit(kony.flex.DP);
            var lblLastSixMonths = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLastSixMonths",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Last Six Months",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLastSixMonthsText.add(lblLastSixMonths);
            var btnLastSixMonths = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnLastSixMonths",
                "isVisible": true,
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "100%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLastSixMonths.add(lblLastSixMonthsSeperator, imgLastSixMonths, flxLastSixMonthsText, btnLastSixMonths);
            var flxToday = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxToday",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxToday.setDefaultUnit(kony.flex.DP);
            var flxTodaySeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "flxTodaySeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgToday = new kony.ui.Image2({
                "centerY": "50%",
                "height": "24dp",
                "id": "imgToday",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "0",
                "width": "24dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTodayText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxTodayText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxTodayText.setDefaultUnit(kony.flex.DP);
            var lblToday = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblToday",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Today",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTodayText.add(lblToday);
            var btnToday = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnToday",
                "isVisible": true,
                "left": "2.50%",
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "95%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToday.add(flxTodaySeperator, imgToday, flxTodayText, btnToday);
            var flxlastoneweek = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxlastoneweek",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxlastoneweek.setDefaultUnit(kony.flex.DP);
            var flxlastoneweekSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "flxlastoneweekSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imglastoneweek = new kony.ui.Image2({
                "centerY": "50%",
                "height": "24dp",
                "id": "imglastoneweek",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "0",
                "width": "24dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxlastoneweekText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxlastoneweekText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxlastoneweekText.setDefaultUnit(kony.flex.DP);
            var lbllastoneweek = new kony.ui.Label({
                "centerY": "50%",
                "id": "lbllastoneweek",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Last One Week",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxlastoneweekText.add(lbllastoneweek);
            var btnlastoneweek = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnlastoneweek",
                "isVisible": true,
                "left": "2.50%",
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "95%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxlastoneweek.add(flxlastoneweekSeperator, imglastoneweek, flxlastoneweekText, btnlastoneweek);
            var flxLastOneMonth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxLastOneMonth",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxLastOneMonth.setDefaultUnit(kony.flex.DP);
            var flxLastOneMonthSeperator = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "flxLastOneMonthSeperator",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgLastOneMonth = new kony.ui.Image2({
                "centerY": "50%",
                "height": "24dp",
                "id": "imgLastOneMonth",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "0",
                "width": "24dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLastOneMonthText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxLastOneMonthText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxLastOneMonthText.setDefaultUnit(kony.flex.DP);
            var lblLastOneMonth = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLastOneMonth",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Last One Month",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLastOneMonthText.add(lblLastOneMonth);
            var btnLastOneMonth = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnLastOneMonth",
                "isVisible": true,
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLastOneMonth.add(flxLastOneMonthSeperator, imgLastOneMonth, flxLastOneMonthText, btnLastOneMonth);
            var flxLastOneYear = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "51dp",
                "id": "flxLastOneYear",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxLastOneYear.setDefaultUnit(kony.flex.DP);
            var lblLastOneYearSepeartor = new kony.ui.Label({
                "bottom": 0,
                "height": "1dp",
                "id": "lblLastOneYearSepeartor",
                "isVisible": true,
                "left": "3%",
                "maxNumberOfLines": 1,
                "right": 0,
                "skin": "sknLblSeparatore3e3e3",
                "text": ".",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 50,
                "width": "94%",
                "zIndex": 10000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgLastOneYear = new kony.ui.Image2({
                "centerY": "50%",
                "height": "24dp",
                "id": "imgLastOneYear",
                "isVisible": true,
                "right": "12dp",
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "0",
                "width": "24dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLastOneYearText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "49dp",
                "id": "flxLastOneYearText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxLastOneYearText.setDefaultUnit(kony.flex.DP);
            var lblLastOneYear = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLastOneYear",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlbl424242SSPR11dp",
                "text": "Last One Year",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLastOneYearText.add(lblLastOneYear);
            var btnLastOneYear = new kony.ui.Button({
                "bottom": 1,
                "focusSkin": "sknBtnBgTransparent",
                "height": "49dp",
                "id": "btnLastOneYear",
                "isVisible": true,
                "right": 1,
                "skin": "sknBtnBgTransparent",
                "text": "X",
                "top": 1,
                "width": "99%",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLastOneYear.add(lblLastOneYearSepeartor, imgLastOneYear, flxLastOneYearText, btnLastOneYear);
            flxViewByDurations.add(flxLastSixMonths, flxToday, flxlastoneweek, flxLastOneMonth, flxLastOneYear);
            var btnApplyFilter = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "ICSknBtn003E75FFFFFF9px",
                "height": "50dp",
                "id": "btnApplyFilter",
                "isVisible": true,
                "left": "0",
                "skin": "ICSknBtn003E75FFFFFF9px",
                "text": "Apply Filter",
                "top": "28dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSpacer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSpacer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSpacer.setDefaultUnit(kony.flex.DP);
            flxSpacer.add();
            flxBody.add(flxSelectTransactionType, flxSelectTransactionTypeS, flxSortBy, flxSortBys, flxViewByStatus, flxViewByStatuss, flxViewByDuration, flxViewByDurations, btnApplyFilter, flxSpacer);
            flxMain.add(flxHeader, flxBody);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmApprovalsAndRequestsFilters,
            "enabledForIdleTimeout": true,
            "id": "frmApprovalsAndRequestsFilters",
            "init": controller.AS_Form_h884f3c7706c43c592e1cfd0984d1f44,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c14645afac8049c498354992281b5f8d,
            "preShow": function(eventobject) {
                controller.AS_Form_f2619f735c5b4f268df761176fca3ad5(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.FilterAccounts.ApplyFilter")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknTitle003e75Bg",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});