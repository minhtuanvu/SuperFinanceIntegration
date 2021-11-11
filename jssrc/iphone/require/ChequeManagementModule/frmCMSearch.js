define("ChequeManagementModule/frmCMSearch", function() {
    return function(controller) {
        function addWidgetsfrmCMSearch() {
            this.setDefaultUnit(kony.flex.DP);
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
                "zIndex": 4
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
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxHeader": {
                        "left": "0%"
                    },
                    "flxSearch": {
                        "isVisible": true
                    },
                    "imgBack": {
                        "src": "backbutton_1.png"
                    },
                    "imgSearch": {
                        "isVisible": false,
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "text": kony.i18n.getLocalizedString("kony.mb.common.search"),
                        "left": "40%",
                        "width": "20%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_d6b695d7802c4c4e805886a49b7b3bb2;
            flxHeader.add(customHeader);
            var flxAdvanceSearchWrapper = new kony.ui.FlexContainer({
                "bottom": "70dp",
                "clipBounds": true,
                "id": "flxAdvanceSearchWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxAdvanceSearchWrapper.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxSearchMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSearchMain.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "id": "imgSearchIcon",
                "isVisible": false,
                "left": "30dp",
                "skin": "slImage",
                "src": "search.png",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterKeyword"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxSearchMain.add(imgSearchIcon, tbxSearch);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxSearch.add(flxSearchMain, flxSeperator);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxStatusType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxStatusType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "sknFlxf8f8f8",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatusType.setDefaultUnit(kony.flex.DP);
            var imgArrowStatusType = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgArrowStatusType",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparatorStatusType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1%",
                "id": "flxSeparatorStatusType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf8f8f8",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeparatorStatusType.setDefaultUnit(kony.flex.DP);
            flxSeparatorStatusType.add();
            var flxStatusTypeWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxStatusTypeWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatusTypeWrapper.setDefaultUnit(kony.flex.DP);
            var lblStatusTypeTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStatusTypeTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.statusType"),
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
            var lblStatusTypeCount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStatusTypeCount",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": " (All Status)",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxStatusTypeWrapper.add(lblStatusTypeTitle, lblStatusTypeCount);
            flxStatusType.add(imgArrowStatusType, flxSeparatorStatusType, flxStatusTypeWrapper);
            var flxStatusTypeValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50.03%",
                "clipBounds": true,
                "id": "flxStatusTypeValue",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatusTypeValue.setDefaultUnit(kony.flex.DP);
            var segStatusType = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgIcon": "radiobuttoninactive.png",
                    "lblName": "All Status"
                }, {
                    "imgIcon": "radiobuttoninactive.png",
                    "lblName": "Stop Cheques"
                }, {
                    "imgIcon": "radiobuttoninactive.png",
                    "lblName": "Returned"
                }],
                "groupCells": false,
                "id": "segStatusType",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAdvanceSearch",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgIcon",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAdvanceSearch": "flxAdvanceSearch",
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
            flxStatusTypeValue.add(segStatusType);
            var flxShadowBorder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowBorder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": 0,
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxShadowBorder.setDefaultUnit(kony.flex.DP);
            flxShadowBorder.add();
            var flxChequeDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxChequeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "sknFlxf8f8f8",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeDetails.setDefaultUnit(kony.flex.DP);
            var imgChequeDetails = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgChequeDetails",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparatorChequeDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorChequeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeparatorChequeDetails.setDefaultUnit(kony.flex.DP);
            flxSeparatorChequeDetails.add();
            var flxChequeDetailsWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxChequeDetailsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeDetailsWrapper.setDefaultUnit(kony.flex.DP);
            var lblChequeDetailsTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChequeDetailsTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.Name"),
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
            var lblChequeDetailsCount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChequeDetailsCount",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbla0a0a0SSP26px",
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
            flxChequeDetailsWrapper.add(lblChequeDetailsTitle, lblChequeDetailsCount);
            flxChequeDetails.add(imgChequeDetails, flxSeparatorChequeDetails, flxChequeDetailsWrapper);
            var flxChequeDetailsValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxChequeDetailsValue",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeDetailsValue.setDefaultUnit(kony.flex.DP);
            var flxPayeeName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "110dp",
                "id": "flxPayeeName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPayeeName.setDefaultUnit(kony.flex.DP);
            var lblPayeeName = new kony.ui.Label({
                "id": "lblPayeeName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.payeeName"),
                "textStyle": {},
                "top": "20dp",
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
            var txtPayeeName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "20dp",
                "focusSkin": "defTextBoxFocus",
                "height": "48dp",
                "id": "txtPayeeName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": "Enter Payee Name",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular26px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxPayeeName.add(lblPayeeName, txtPayeeName);
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "110dp",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblAmountTitle = new kony.ui.Label({
                "id": "lblAmountTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
                "textStyle": {},
                "top": "20dp",
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
            var lblDollarOne = new kony.ui.Label({
                "bottom": "28dp",
                "id": "lblDollarOne",
                "isVisible": true,
                "left": "33dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDollarTwo = new kony.ui.Label({
                "bottom": "28dp",
                "id": "lblDollarTwo",
                "isVisible": false,
                "right": "150dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAddRangeTitleOne = new kony.ui.Label({
                "id": "lblAddRangeTitleOne",
                "isVisible": true,
                "right": "48dp",
                "skin": "sknLbl3e4f56SSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.AddRange"),
                "textStyle": {},
                "top": "20dp",
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
            var lblToTitleOne = new kony.ui.Label({
                "bottom": "30dp",
                "centerX": "50%",
                "id": "lblToTitleOne",
                "isVisible": false,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
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
            var txtAmountFrom = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "20dp",
                "focusSkin": "sknTbx424242SSPRegular26px",
                "height": "48dp",
                "id": "txtAmountFrom",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DECIMAL,
                "left": "20dp",
                "placeholder": "0.00",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular26px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "50dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [25, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var txtAmountTo = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "20dp",
                "focusSkin": "sknTbx424242SSPRegular26px",
                "height": "48dp",
                "id": "txtAmountTo",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DECIMAL,
                "placeholder": "0.00",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular26px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "50dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [25, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgCheckboxAmount = new kony.ui.Image2({
                "height": "21dp",
                "id": "imgCheckboxAmount",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "remeberme.png",
                "top": "21dp",
                "width": "21dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparatorAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeparatorAmount.setDefaultUnit(kony.flex.DP);
            flxSeparatorAmount.add();
            var flxAddRangeAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxAddRangeAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "150dp",
                "zIndex": 5
            }, {}, {});
            flxAddRangeAmount.setDefaultUnit(kony.flex.DP);
            flxAddRangeAmount.add();
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1px",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxAmount.add(lblAmountTitle, lblDollarOne, lblDollarTwo, lblAddRangeTitleOne, lblToTitleOne, txtAmountFrom, txtAmountTo, imgCheckboxAmount, flxSeparatorAmount, flxAddRangeAmount, flxSeparator);
            var flxCheckNumbers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxCheckNumbers",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCheckNumbers.setDefaultUnit(kony.flex.DP);
            var lblCheckNumbersTitle = new kony.ui.Label({
                "id": "lblCheckNumbersTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.CheckNumbersTitle"),
                "textStyle": {},
                "top": "10dp",
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
            var lblAddRangeTitleTwo = new kony.ui.Label({
                "id": "lblAddRangeTitleTwo",
                "isVisible": true,
                "right": "48dp",
                "skin": "sknLbl3e4f56SSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.AddRange"),
                "textStyle": {},
                "top": "10dp",
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
            var lblToTitleTwo = new kony.ui.Label({
                "bottom": "30dp",
                "centerX": "50%",
                "id": "lblToTitleTwo",
                "isVisible": false,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
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
            var txtCheckNumbersFrom = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "20dp",
                "focusSkin": "sknTbx424242SSPRegular26px",
                "height": "48dp",
                "id": "txtCheckNumbersFrom",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": "Enter Cheque No.",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular26px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "40dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var txtCheckNumbersTo = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "20dp",
                "focusSkin": "sknTbx424242SSPRegular26px",
                "height": "48dp",
                "id": "txtCheckNumbersTo",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter Cheque No.",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular26px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "40dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgCheckboxCheckNumbers = new kony.ui.Image2({
                "height": "21dp",
                "id": "imgCheckboxCheckNumbers",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "remeberme.png",
                "top": "11dp",
                "width": "21dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAddRangeCheckNumbers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxAddRangeCheckNumbers",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "150dp",
                "zIndex": 5
            }, {}, {});
            flxAddRangeCheckNumbers.setDefaultUnit(kony.flex.DP);
            flxAddRangeCheckNumbers.add();
            flxCheckNumbers.add(lblCheckNumbersTitle, lblAddRangeTitleTwo, lblToTitleTwo, txtCheckNumbersFrom, txtCheckNumbersTo, imgCheckboxCheckNumbers, flxAddRangeCheckNumbers);
            flxChequeDetailsValue.add(flxPayeeName, flxAmount, flxCheckNumbers);
            flxMainContainer.add(flxStatusType, flxStatusTypeValue, flxShadowBorder, flxChequeDetails, flxChequeDetailsValue);
            flxAdvanceSearchWrapper.add(flxSearch, flxMainContainer);
            var flxSearchButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSearchButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxSearchButton.setDefaultUnit(kony.flex.DP);
            var btnSearch = new kony.ui.Button({
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnSearch",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.search"),
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxSearchButton.add(btnSearch);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "250dp",
                "id": "flxGradient",
                "isVisible": false,
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
                "zIndex": 200
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
                "overrides": {
                    "imgPopup": {
                        "src": "imagedrag.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxAdvanceSearchWrapper, flxSearchButton, flxGradient, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_d430dc78c315459b9c0dda97b8d43628,
            "metaData": {
                "title": "Cancel"
            },
            "id": "RBarBtnItem0"
        });
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
            "addWidgets": addWidgetsfrmCMSearch,
            "bounces": true,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmCMSearch",
            "init": controller.AS_Form_b6b5a5f8688c4b47a27d8e8a56d5f7c8,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_cb63aca867a14972a5e10f4e5fb2d7c6,
            "preShow": function(eventobject) {
                controller.AS_Form_bb10d60d6f50477cac15242d35ea849a(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.common.search")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": true,
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NEXTPREV,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});