define("frmAcknowledgement", function() {
    return function(controller) {
        function addWidgetsfrmAcknowledgement() {
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
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.close"),
                        "isVisible": false
                    },
                    "flxBack": {
                        "isVisible": true
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
                        "left": "30%",
                        "text": "Acknowledgement"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_ff0bc9d000a74ce49999cc403693ebfd;
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var btnTryAgain = new kony.ui.Button({
                "bottom": "70dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnTryAgain",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.common.TryAgain"),
                "width": "330dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxContainerError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxContainerError",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "52dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "175dp",
                "width": "312dp"
            }, {}, {});
            flxContainerError.setDefaultUnit(kony.flex.DP);
            var imgError = new kony.ui.Image2({
                "centerX": "50%",
                "height": "65dp",
                "id": "imgError",
                "isVisible": true,
                "skin": "slImage",
                "src": "rejected.png",
                "top": "0dp",
                "width": "65dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "87dp",
                "width": "100%"
            }, {}, {});
            flxInfo.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "id": "lblTitle",
                "isVisible": true,
                "left": "0",
                "skin": "sknlbl000000SSPSemiBold24px",
                "text": "Label",
                "textStyle": {},
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMessage = new kony.ui.Label({
                "id": "lblMessage",
                "isVisible": true,
                "left": "0",
                "skin": "sknlbl000000SSP26px",
                "text": "Text",
                "textStyle": {},
                "top": "12dp",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxInfo.add(lblTitle, lblMessage);
            flxContainerError.add(imgError, flxInfo);
            flxError.add(btnTryAgain, flxContainerError);
            var flxSuccessNonTransaction = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSuccessNonTransaction",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSuccessNonTransaction.setDefaultUnit(kony.flex.DP);
            var btnLoginAgain = new kony.ui.Button({
                "bottom": 30,
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnLoginAgain",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.common.TryAgain"),
                "width": "330dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxContainerSuccessNonTransaction = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxContainerSuccessNonTransaction",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "52dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "175dp",
                "width": "312dp"
            }, {}, {});
            flxContainerSuccessNonTransaction.setDefaultUnit(kony.flex.DP);
            var flxInfoSuccessNonTransaction = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInfoSuccessNonTransaction",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "87dp",
                "width": "100%"
            }, {}, {});
            flxInfoSuccessNonTransaction.setDefaultUnit(kony.flex.DP);
            var lblTitleNonTransaction = new kony.ui.Label({
                "id": "lblTitleNonTransaction",
                "isVisible": true,
                "left": "0",
                "skin": "sknlbl000000SSPSemiBold24px",
                "text": "Label",
                "textStyle": {},
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMessageNonTransaction = new kony.ui.Label({
                "id": "lblMessageNonTransaction",
                "isVisible": true,
                "left": "0",
                "skin": "sknlbl000000SSP26px",
                "text": "Text",
                "textStyle": {},
                "top": "12dp",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxInfoSuccessNonTransaction.add(lblTitleNonTransaction, lblMessageNonTransaction);
            var imgSuccess = new kony.ui.Image2({
                "centerX": "50%",
                "height": "65dp",
                "id": "imgSuccess",
                "isVisible": true,
                "skin": "slImage",
                "src": "successicon.png",
                "top": "0dp",
                "width": "65dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContainerSuccessNonTransaction.add(flxInfoSuccessNonTransaction, imgSuccess);
            flxSuccessNonTransaction.add(btnLoginAgain, flxContainerSuccessNonTransaction);
            var flxSuccessTransaction = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSuccessTransaction",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "100%"
            }, {}, {});
            flxSuccessTransaction.setDefaultUnit(kony.flex.DP);
            var flxConfirmationMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "126dp",
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
                "top": "10dp",
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
                "centerX": "49.78%",
                "id": "lblSuccessMessage",
                "isVisible": true,
                "skin": "sknlbl000000SSPSemiBold24px",
                "text": "Transaction was done successfully",
                "textStyle": {},
                "top": "6dp",
                "width": "312dp",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5.33%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "11dp",
                "width": "89.33%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxSuccess.add(imgGreenTick, lblSuccessMessage, flxSeparator);
            var flxConfirmationDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConfirmationDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
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
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
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
                "rowTemplate": "flxAcknowloedgmentRow",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAcknowloedgmentRow": "flxAcknowloedgmentRow",
                    "flxSeparator": "flxSeparator",
                    "lblDetails": "lblDetails",
                    "lblExtras": "lblExtras",
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
                "bottom": "0%",
                "clipBounds": true,
                "height": "126dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "reverseLayoutDirection": true,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnNewTransfer = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50.00%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnNewTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.NewTransfer"),
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnDashboard = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnDashboard",
                "isVisible": true,
                "left": "20dp",
                "right": "0dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title"),
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButtons.add(btnNewTransfer, btnDashboard);
            flxSuccessTransaction.add(flxConfirmationMain, flxButtons);
            this.add(flxHeader, flxError, flxSuccessNonTransaction, flxSuccessTransaction);
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
            "addWidgets": addWidgetsfrmAcknowledgement,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmAcknowledgement",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_fb2d1b08b6944fe4806bfd7f0124e197(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement")
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