define("ManageCardsModule/frmManageNewCardAck", function() {
    return function(controller) {
        function addWidgetsfrmManageNewCardAck() {
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
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": false,
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "text": kony.i18n.getLocalizedString("kony.mb.MM.Confirmation"),
                        "left": "30%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxConfirmationMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "80dp",
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
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmationMain.setDefaultUnit(kony.flex.DP);
            var flxSuccess = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxSuccess.setDefaultUnit(kony.flex.DP);
            var imgGreenTick = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgGreenTick",
                "isVisible": true,
                "skin": "slImage",
                "src": "successicon.png",
                "top": "20dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSuccessMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSuccessMessage",
                "isVisible": true,
                "skin": "sknlbl000000SSPSemiBold24px",
                "text": kony.i18n.getLocalizedString("kony.mb.cards.newCardSuccess"),
                "textStyle": {},
                "top": "20dp",
                "width": "312dp",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSavedRecipient = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSavedRecipient",
                "isVisible": false,
                "skin": "sknLbl000000424242SSP34PxTab",
                "text": "Confirmation Text \n Demonstrating Next Line",
                "textStyle": {},
                "top": "15dp",
                "width": "312dp",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 5],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSuccess.add(imgGreenTick, lblSuccessMessage, lblSavedRecipient);
            var flxConfirmationDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConfirmationDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
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
                "rowTemplate": "flxAcknowloedgmentRowEuro",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAcknowloedgmentRowEuro": "flxAcknowloedgmentRowEuro",
                    "flxSeparator": "flxSeparator",
                    "lblDetails": "lblDetails",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 4
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
            flxConfirmationDetails.add(segDetails);
            flxConfirmationMain.add(flxSuccess, flxConfirmationDetails);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnDashboard = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnDashboard",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cards.backToCardMng"),
                "top": 0,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnNewTransfer = new kony.ui.Button({
                "bottom": "70dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnNewTransfer",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.NewTransfer"),
                "top": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButtons.add(btnDashboard, btnNewTransfer);
            var flxFailure = new kony.ui.FlexContainer({
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxFailure",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxScrlffffff0j1a2b91bf84447",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFailure.setDefaultUnit(kony.flex.DP);
            var flxNoTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "47.37%",
                "clipBounds": true,
                "id": "flxNoTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxNoTransfer.setDefaultUnit(kony.flex.DP);
            var imgCross = new kony.ui.Image2({
                "centerX": "50.00%",
                "height": "72dp",
                "id": "imgCross",
                "isVisible": true,
                "skin": "slImage",
                "src": "error.png",
                "top": "17%",
                "width": "73dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblMessage",
                "isVisible": true,
                "skin": "sknLbl424242SSP55px",
                "text": "There was an issue with your transfer",
                "textStyle": {},
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg30px",
                "text": "We couldn't schedule your transfer at this time. Please try again later.",
                "textStyle": {},
                "top": "20dp",
                "width": "80%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoTransfer.add(imgCross, lblMessage, lblError);
            var btnToAccount = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnToAccount",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxFailure.add(flxNoTransfer, btnToAccount);
            var flxP2PSuccess = new kony.ui.FlexContainer({
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxP2PSuccess",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxScrlffffff0j1a2b91bf84447",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxP2PSuccess.setDefaultUnit(kony.flex.DP);
            var flxP2PSuccessful = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "47.37%",
                "clipBounds": true,
                "id": "flxP2PSuccessful",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "100dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxP2PSuccessful.setDefaultUnit(kony.flex.DP);
            var imgTick = new kony.ui.Image2({
                "centerX": "50%",
                "height": "70dp",
                "id": "imgTick",
                "isVisible": true,
                "skin": "slImage",
                "src": "confirmation.png",
                "top": "19dp",
                "width": "70dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblP2PSuccess = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblP2PSuccess",
                "isVisible": true,
                "skin": "CopyslLabel0h237d52e57534a",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.P2PSuccessful"),
                "textStyle": {},
                "top": "108dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblP2PMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblP2PMessage",
                "isVisible": true,
                "skin": "CopyslLabel0h237d52e57534a",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.YouCanTransfer"),
                "textStyle": {},
                "top": "138dp",
                "width": "80%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxP2PSuccessful.add(imgTick, lblP2PSuccess, lblP2PMessage);
            flxP2PSuccess.add(flxP2PSuccessful);
            this.add(flxHeader, flxConfirmationMain, flxButtons, flxFailure, flxP2PSuccess);
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
            "addWidgets": addWidgetsfrmManageNewCardAck,
            "enabledForIdleTimeout": true,
            "id": "frmManageNewCardAck",
            "init": controller.AS_Form_i1dde7e3df064289a702a65d6184cd27,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_cc5e872a4aed49dbb71e89c5bb3de15e(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.MM.Confirmation")
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
                "hidesBackButton": true,
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