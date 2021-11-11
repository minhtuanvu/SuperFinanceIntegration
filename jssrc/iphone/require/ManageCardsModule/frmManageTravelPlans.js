define("ManageCardsModule/frmManageTravelPlans", function() {
    return function(controller) {
        function addWidgetsfrmManageTravelPlans() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 9
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
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
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.cardManage.ManageTravelPlansSmall")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxManageTravelPlans = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "60dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxManageTravelPlans",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "-1dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxManageTravelPlans.setDefaultUnit(kony.flex.DP);
            var segTravelPlans = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblHeaderTitle": "Active"
                        },
                        [{
                            "Image0b84625802bcd4d": "segmentarrow.png",
                            "lblColon": ":",
                            "lblFromDate": "FromDate",
                            "lblPlanDescription": "Destination",
                            "lblSelectedCards": kony.i18n.getLocalizedString("kony.mb.cardManage.SelectedCards"),
                            "lblSelectedCardsValue": "x",
                            "lblTo": kony.i18n.getLocalizedString("kony.mb.common.To"),
                            "lblToDate": "ToDate"
                        }]
                    ],
                    [{
                            "lblHeaderTitle": "Expired"
                        },
                        [{
                            "Image0b84625802bcd4d": "segmentarrow.png",
                            "lblColon": ":",
                            "lblFromDate": "FromDate",
                            "lblPlanDescription": "Destination",
                            "lblSelectedCards": kony.i18n.getLocalizedString("kony.mb.cardManage.SelectedCards"),
                            "lblSelectedCardsValue": "x",
                            "lblTo": kony.i18n.getLocalizedString("kony.mb.common.To"),
                            "lblToDate": "ToDate"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segTravelPlans",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTravelPlan",
                "scrollingEvents": {},
                "sectionHeaderSkin": "seg2Normal",
                "sectionHeaderTemplate": "flxMakeTravelHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "Image0b84625802bcd4d": "Image0b84625802bcd4d",
                    "flxMakeTravelHeader": "flxMakeTravelHeader",
                    "flxSelectedCards": "flxSelectedCards",
                    "flxSeparator": "flxSeparator",
                    "flxToFromDate": "flxToFromDate",
                    "flxTravelPlan": "flxTravelPlan",
                    "imgArrow": "imgArrow",
                    "lblColon": "lblColon",
                    "lblFromDate": "lblFromDate",
                    "lblHeaderTitle": "lblHeaderTitle",
                    "lblPlanDescription": "lblPlanDescription",
                    "lblSelectedCards": "lblSelectedCards",
                    "lblSelectedCardsValue": "lblSelectedCardsValue",
                    "lblTo": "lblTo",
                    "lblToDate": "lblToDate"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": false,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "180dp",
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNoPlans = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblNoPlans",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.noActiveTravelPlans"),
                "textStyle": {},
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoTransactions.add(lblNoPlans);
            flxManageTravelPlans.add(segTravelPlans, flxNoTransactions);
            var flxAddNewPlan = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAddNewPlan",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddNewPlan.setDefaultUnit(kony.flex.DP);
            var btnAddTravelPlans = new kony.ui.Button({
                "bottom": "10dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnAddTravelPlans",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.AddTravelPlans"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxAddNewPlan.add(btnAddTravelPlans, flxSeparator);
            flxMainContainer.add(flxManageTravelPlans, flxAddNewPlan);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 202
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmManageTravelPlans,
            "enabledForIdleTimeout": true,
            "id": "frmManageTravelPlans",
            "init": controller.AS_Form_b6941ad4334d4058a021ad4ea714f878,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_bbf95e7f9ae7446090051cd00545ffc9(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.cardManage.ManageTravelPlansSmall")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});