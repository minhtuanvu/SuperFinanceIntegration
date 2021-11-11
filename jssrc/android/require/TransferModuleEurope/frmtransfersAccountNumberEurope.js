define("TransferModuleEurope/frmtransfersAccountNumberEurope", function() {
    return function(controller) {
        function addWidgetsfrmtransfersAccountNumberEurope() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.toAccountSmall")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_jcaea33a14c94a6eb312c6d699d6e5df;
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
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var lblRecipientIBAN = new kony.ui.Label({
                "id": "lblRecipientIBAN",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.RecipientAccNum"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "top": "50dp",
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
                "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterHere"),
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
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxPlaceholdera0a0a0",
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
                "zIndex": 30
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "skin": "slFbox",
                "top": "95dp",
                "zIndex": 2
            }, {}, {});
            flxSuggestions.setDefaultUnit(kony.flex.DP);
            var flxToAccountHints = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxToAccountHints",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknflxffffffRadiusf6f6f64px",
                "top": "0dp",
                "zIndex": 3
            }, {}, {});
            flxToAccountHints.setDefaultUnit(kony.flex.DP);
            var segToAccount = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }, {
                    "lblIBAN": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
                    "lblIBANValue": "FR 4567 7456 3425 4532 1423 4356 321 ",
                    "lblNickName": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
                    "lblNickNameValue": "Linda",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "height": "240dp",
                "id": "segToAccount",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxToAccountNumber",
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
                    "flxToAccountNumber": "flxToAccountNumber",
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
            }, {});
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "50dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProceed = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblProceed",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.EnterIBANAndProceed"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "70dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
            }, {});
            flxSuggestions.add(flxToAccountHints, flxNoTransactions, btnAddRecipient);
            flxMainContainer.add(lblRecipientIBAN, flxTo, flxNewRecipient, flxSuggestions);
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
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, flxPopup, flxGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmtransfersAccountNumberEurope,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmtransfersAccountNumberEurope",
            "init": controller.AS_Form_f63fec6580274ad1a9635e6768d5809a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_c8f3e95e441c4eca829ccf415be09355(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.checkDeposit.toAccountSmall")
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
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});