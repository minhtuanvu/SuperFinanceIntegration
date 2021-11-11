define("ManageCardsModule/frmCardManageAck", function() {
    return function(controller) {
        function addWidgetsfrmCardManageAck() {
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
                        "left": "20dp"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxReplaceCardSuccess = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "110dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxReplaceCardSuccess",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReplaceCardSuccess.setDefaultUnit(kony.flex.DP);
            var flxConfirmation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxConfirmation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmation.setDefaultUnit(kony.flex.DP);
            var flxConfirmationDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConfirmationDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "117dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgdottedline": "line.png",
                    "lblTitle": "Reference ID",
                    "lblValue": "12334556788"
                }, {
                    "imgdottedline": "line.png",
                    "lblTitle": "Reference ID",
                    "lblValue": "12334556788"
                }, {
                    "imgdottedline": "line.png",
                    "lblTitle": "Reference ID",
                    "lblValue": "12334556788"
                }, {
                    "imgdottedline": "",
                    "lblTitle": "",
                    "lblValue": ""
                }, {
                    "imgdottedline": "",
                    "lblTitle": "",
                    "lblValue": ""
                }, {
                    "imgdottedline": "",
                    "lblTitle": "",
                    "lblValue": ""
                }, {
                    "imgdottedline": "",
                    "lblTitle": "",
                    "lblValue": ""
                }, {
                    "imgdottedline": "",
                    "lblTitle": "",
                    "lblValue": ""
                }, {
                    "imgdottedline": "",
                    "lblTitle": "",
                    "lblValue": ""
                }, {
                    "imgdottedline": "",
                    "lblTitle": "",
                    "lblValue": ""
                }, {
                    "imgdottedline": "",
                    "lblTitle": "",
                    "lblValue": ""
                }],
                "groupCells": false,
                "id": "segDetails",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxMMConfirmation",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxMMConfirmation": "flxMMConfirmation",
                    "flxRightWrapper": "flxRightWrapper",
                    "imgdottedline": "imgdottedline",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxConfirmationDetails.add(segDetails);
            flxConfirmation.add(flxConfirmationDetails);
            var flxSuccess = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "400dp",
                "id": "flxSuccess",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
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
                "src": "confirmation_tick.png",
                "top": "13dp",
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
                "text": kony.i18n.getLocalizedString("kony.mb.cards.activate"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "70%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSuccessMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSuccessMsg",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP22px26",
                "text": "Please cut your old card through the magnetic strip and dispose of it securely.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "60%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnDisposeCard = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e428px",
                "height": "40dp",
                "id": "btnDisposeCard",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "Learn More About Disposing of My Card",
                "top": "30dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSuccess.add(imgGreenTick, lblSuccessMessage, lblSuccessMsg, btnDisposeCard);
            flxReplaceCardSuccess.add(flxConfirmation, flxSuccess);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "112dp",
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
            var btnMyAccounts = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnMyAccounts",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.cardManage"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnMyAccounts);
            var flxFailure = new kony.ui.FlexContainer({
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxFailure",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxScrlffffff0j1a2b91bf84447",
                "top": "56dp",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblError",
                "isVisible": false,
                "skin": "sknLbl424242SSPReg30px",
                "text": "We couldn't schedule your transfer at this time. Please try again later.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "80%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNoTransfer.add(imgCross, lblMessage, lblError);
            var btnToAccount = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnToAccount",
                "isVisible": false,
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
            }, {});
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
                "top": "56dp",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "108dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblP2PMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblP2PMessage",
                "isVisible": true,
                "skin": "CopyslLabel0h237d52e57534a",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.YouCanTransfer"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "138dp",
                "width": "80%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxP2PSuccessful.add(imgTick, lblP2PSuccess, lblP2PMessage);
            flxP2PSuccess.add(flxP2PSuccessful);
            this.add(flxHeader, flxReplaceCardSuccess, flxButtons, flxFailure, flxP2PSuccess);
        };
        return [{
            "addWidgets": addWidgetsfrmCardManageAck,
            "enabledForIdleTimeout": true,
            "id": "frmCardManageAck",
            "init": controller.AS_Form_c117f7abaeea4db7914b2896a31d751f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e5051056dc6c4433900a49d1ee4c0a88(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement")
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