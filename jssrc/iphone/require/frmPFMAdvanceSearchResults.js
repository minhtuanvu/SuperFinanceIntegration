define("frmPFMAdvanceSearchResults", function() {
    return function(controller) {
        function addWidgetsfrmPFMAdvanceSearchResults() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSearchResults = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxSearchResults",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSearchResults.setDefaultUnit(kony.flex.DP);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "height": "40dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "customSearchbox": {
                        "top": "0dp"
                    },
                    "tbxSearch": {
                        "placeholder": "Search Transactions..."
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxSelectType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSelectType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSelectType.setDefaultUnit(kony.flex.DP);
            var flxSelectedType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxSelectedType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectedType.setDefaultUnit(kony.flex.DP);
            var lblShow = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShow",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.ShowColon"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSelectedType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSelectedType",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.CategorisedTransactions"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxDropdownImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxDropdownImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "minHeight": "50dp",
                "isModalContainer": false,
                "right": "5dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45dp",
                "zIndex": 1
            }, {}, {});
            flxDropdownImage.setDefaultUnit(kony.flex.DP);
            var imgShowTransactionTypes = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgShowTransactionTypes",
                "isVisible": true,
                "right": "15dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDropdownImage.add(imgShowTransactionTypes);
            flxSelectedType.add(lblShow, lblSelectedType, flxDropdownImage);
            var flxTransactionTypes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransactionTypes",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionTypes.setDefaultUnit(kony.flex.DP);
            var segTransactionTypes = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgIcon": "tick.png",
                    "lblName": "CATEGORIZED TRANSACTIONS"
                }, {
                    "imgIcon": "tick.png",
                    "lblName": "UNCATEGORIZED TRANSACTIONS"
                }],
                "groupCells": false,
                "id": "segTransactionTypes",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSelectAccountTypes",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSelectAccountTypes": "flxSelectAccountTypes",
                    "flxSeparator": "flxSeparator",
                    "imgIcon": "imgIcon",
                    "lblName": "lblName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxTransactionTypes.add(segTransactionTypes);
            flxSelectType.add(flxSelectedType, flxTransactionTypes);
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "350dp",
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
                "textStyle": {},
                "top": "200dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoTransactions.add(flxSeperator3, lblNoTransaction);
            var segTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "imgUpArrow": "",
                            "lblHeader": kony.i18n.getLocalizedString("kony.mb.accdetails.pendingTransactions")
                        },
                        [{
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }]
                    ],
                    [{
                            "imgUpArrow": "",
                            "lblHeader": kony.i18n.getLocalizedString("kony.mb.accdetails.postedTransactions")
                        },
                        [{
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "02/26/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Wire Trasfers to Stuvert",
                            "lblTransactionAmount": "-$83.54"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segTransactions",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTransactions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f1f1f100",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTransactions": "flxTransactions",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "flxWrapper": "flxWrapper",
                    "imgIndicator": "imgIndicator",
                    "imgUpArrow": "imgUpArrow",
                    "lblDate": "lblDate",
                    "lblHeader": "lblHeader",
                    "lblTransaction": "lblTransaction",
                    "lblTransactionAmount": "lblTransactionAmount"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": true,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxSearchResults.add(flxHeaderSearchbox, flxSelectType, flxNoTransactions, segTransactions);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "45%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            this.add(flxSearchResults, flxGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmPFMAdvanceSearchResults,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmPFMAdvanceSearchResults",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_jb4344cf8e4f48598a8cd9d6d07866b8(eventobject);
            },
            "skin": "sknFrmTopBlue"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});