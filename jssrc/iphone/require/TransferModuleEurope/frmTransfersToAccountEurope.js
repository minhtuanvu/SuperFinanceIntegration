define("TransferModuleEurope/frmTransfersToAccountEurope", function() {
    return function(controller) {
        function addWidgetsfrmTransfersToAccountEurope() {
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
                "zIndex": 8
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
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
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_c4b25eb5d2f9417198a943f3da548521;
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": false,
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
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                        "placeholder": "Search"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "70dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var lblRecipientIBAN = new kony.ui.Label({
                "id": "lblRecipientIBAN",
                "isVisible": false,
                "left": "30dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.RecipientAccNum"),
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxTo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "flxBlueFocus",
                "top": "60dp",
                "zIndex": 30
            }, {}, {});
            flxTo.setDefaultUnit(kony.flex.DP);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxClose",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxClose.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgClose",
                "isVisible": true,
                "right": "8dp",
                "skin": "slImage",
                "src": "closecircle.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClose.add(imgClose);
            var tbxTo = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skntbxBGffffffSSP42424226px",
                "height": "45dp",
                "id": "tbxTo",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.SearchByIBANOrName"),
                "right": "30dp",
                "secureTextEntry": false,
                "skin": "skntbxBGffffffSSP42424226px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxPlaceholdera0a0a0",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxTo.add(flxClose, tbxTo);
            var flxNewRecipient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxNewRecipient",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "110dp",
                "width": "100%",
                "zIndex": 35
            }, {}, {});
            flxNewRecipient.setDefaultUnit(kony.flex.DP);
            var imgtick = new kony.ui.Image2({
                "centerX": "35%",
                "centerY": "50%",
                "height": "24dp",
                "id": "imgtick",
                "isVisible": true,
                "skin": "slImage",
                "src": "greentick.png",
                "top": "15dp",
                "width": "24dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNewRecipient = new kony.ui.Label({
                "centerX": "53%",
                "centerY": "50%",
                "id": "lblNewRecipient",
                "isVisible": true,
                "skin": "sknlbl2a9e05SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.NewRecipient"),
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
            flxNewRecipient.add(imgtick, lblNewRecipient);
            var flxSuggestions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSuggestions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "top": "95dp",
                "zIndex": 30
            }, {}, {});
            flxSuggestions.setDefaultUnit(kony.flex.DP);
            var flxToAccountHints = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxToAccountHints",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxffffffRadiusf6f6f64px",
                "top": "0dp",
                "zIndex": 3
            }, {}, {});
            flxToAccountHints.setDefaultUnit(kony.flex.DP);
            var segToAccount = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                    "lblNickNameValue": "Bill Moron….8979",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "height": "240dp",
                "id": "segToAccount",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_b2ea93c408774da5a0c350b379bb7ef8,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxToAccount",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "5dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxIBAN": "flxIBAN",
                    "flxNickName": "flxNickName",
                    "flxToAccount": "flxToAccount",
                    "lblIBAN": "lblIBAN",
                    "lblIBANValue": "lblIBANValue",
                    "lblNickName": "lblNickName",
                    "lblNickNameValue": "lblNickNameValue",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 3
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
            flxToAccountHints.add(segToAccount);
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "20dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNnMatchesFound = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNnMatchesFound",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.NoMatchesFound"),
                "textStyle": {},
                "top": "50dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblProceed = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblProceed",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.EnterIBANAndProceed"),
                "textStyle": {},
                "top": "70dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoTransactions.add(lblNnMatchesFound, lblProceed);
            var btnAddRecipient = new kony.ui.Button({
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnAddRecipient",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "50dp",
                "width": "100%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxSuggestions.add(flxToAccountHints, flxNoTransactions, btnAddRecipient);
            var flxWelcome = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxWelcome",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxfafafa",
                "top": "0",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxWelcome.setDefaultUnit(kony.flex.DP);
            var flxBorderTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderTop.setDefaultUnit(kony.flex.DP);
            flxBorderTop.add();
            var flxBorderBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderBottom",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderBottom.setDefaultUnit(kony.flex.DP);
            flxBorderBottom.add();
            var lblWelcomeMessage = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblWelcomeMessage",
                "isVisible": true,
                "left": "50dp",
                "maxNumberOfLines": 1,
                "right": "120dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.EnterIBAN"),
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxWelcome.add(flxBorderTop, flxBorderBottom, lblWelcomeMessage);
            flxMainContainer.add(lblRecipientIBAN, flxTo, flxNewRecipient, flxSuggestions, flxWelcome);
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
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
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, flxPopup, flxGradient);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_c5f2fd79d433482fb530200ddb09e3dc,
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
            "addWidgets": addWidgetsfrmTransfersToAccountEurope,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmTransfersToAccountEurope",
            "init": controller.AS_Form_dd71ec169af548c99e8208c990ffe06f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_h9341b312f3f4fedbc0857b76b7167cd(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN")
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
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});