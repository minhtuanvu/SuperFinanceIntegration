define("TransferModuleEurope/frmEuropeConfirmation", function() {
    return function(controller) {
        function addWidgetsfrmEuropeConfirmation() {
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
                "zIndex": 8
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": true
                    },
                    "imgBack": {
                        "isVisible": false,
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "share.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement"),
                        "left": "40%",
                        "width": "45%"
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
                "top": "50dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var btnTryAgain = new kony.ui.Button({
                "bottom": "30dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnTryAgain",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.TryAgain"),
                "width": "330dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInfo.add(lblTitle);
            flxContainerError.add(imgError, flxInfo);
            flxError.add(btnTryAgain, flxContainerError);
            var flxSuccessTransaction = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxSuccessTransaction",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSuccessTransaction.setDefaultUnit(kony.flex.DP);
            var flxConfirmationMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "120dp",
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
                "top": "56dp",
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
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.successfulTransfer"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "312dp",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSavedRecipient = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSavedRecipient",
                "isVisible": true,
                "skin": "sknLbl000000424242SSP34PxTab",
                "text": "Michele Michelotti \n has been saved to your recipients",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "312dp",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 5],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSuccess.add(imgGreenTick, lblSuccessMessage, lblSavedRecipient);
            var flxInsufficientFunds = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInsufficientFunds",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxInsufficientFunds.setDefaultUnit(kony.flex.DP);
            var imgInProgress = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgInProgress",
                "isVisible": true,
                "skin": "slImage",
                "src": "inprogress.png",
                "top": "20dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAwaitingFunds = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAwaitingFunds",
                "isVisible": true,
                "skin": "sknlbl000000SSPSemiBold24px",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.AwaitingFunds"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "312dp",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var rtxtWarning = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxtWarning",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknLbl42424234px",
                "text": "You have insufficient funds to complete this transaction",
                "top": 15,
                "width": "312dp",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 5],
                "paddingInPixel": false
            }, {});
            flxInsufficientFunds.add(imgInProgress, lblAwaitingFunds, rtxtWarning);
            var lblUploadFailedMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblUploadFailedMsg",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknlblee0005SSPReg15px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "89%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
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
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "lblDetails": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "imgAccountType": "personalaccount.png",
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
                "rowTemplate": "flxAcknowloedgmentDetailsRow",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountType": "flxAccountType",
                    "flxAcknowloedgmentDetailsRow": "flxAcknowloedgmentDetailsRow",
                    "flxSeparator": "flxSeparator",
                    "flxcontent": "flxcontent",
                    "imgAccountType": "imgAccountType",
                    "lblDetails": "lblDetails",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSupportingDocuments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSupportingDocuments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSupportingDocuments.setDefaultUnit(kony.flex.DP);
            var lblSupportingDocumentsTitle = new kony.ui.Label({
                "id": "lblSupportingDocumentsTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272ssp40px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.Attachments"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSupportingDocumentsValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSupportingDocumentsValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "75%",
                "zIndex": 4
            }, {}, {});
            flxSupportingDocumentsValue.setDefaultUnit(kony.flex.DP);
            flxSupportingDocumentsValue.add();
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5.33%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "89.33%",
                "zIndex": 1
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            flxSupportingDocuments.add(lblSupportingDocumentsTitle, flxSupportingDocumentsValue, flxSeparator1);
            var segDetails2 = new kony.ui.SegmentedUI2({
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
                }, {
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
                "id": "segDetails2",
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
            }, {});
            flxConfirmationDetails.add(segDetails, flxSupportingDocuments, segDetails2);
            var flxFurtherDetailsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFurtherDetailsHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxFurtherDetailsHeader.setDefaultUnit(kony.flex.DP);
            var imgUpArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgUpArrow",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "arrowup.png",
                "width": "20dp",
                "zIndex": 6
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFurtherDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFurtherDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknEditChannel",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.FurtherDetails"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var flxShadowBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBottom.setDefaultUnit(kony.flex.DP);
            flxShadowBottom.add();
            flxFurtherDetailsHeader.add(imgUpArrow, lblFurtherDetails, flxTypeOneShadow, flxShadowBottom);
            var flxFurtherDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFurtherDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxFurtherDetails.setDefaultUnit(kony.flex.DP);
            var flxChargesBreakdown = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxChargesBreakdown",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxChargesBreakdown.setDefaultUnit(kony.flex.DP);
            var lblChargesBreakdown = new kony.ui.Label({
                "id": "lblChargesBreakdown",
                "isVisible": true,
                "left": "15dp",
                "skin": "sknLbl727272ssp40px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.FeeBreakdown"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "11dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segChargesBreakdown = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblDetails": "$ 3,56",
                    "lblTitle": "Transaction Fee"
                }, {
                    "lblDetails": "$ 2,45",
                    "lblTitle": "Tax"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Label"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Label"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Label"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Label"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Label"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Label"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Label"
                }, {
                    "lblDetails": "Label",
                    "lblTitle": "Label"
                }],
                "groupCells": false,
                "id": "segChargesBreakdown",
                "isVisible": true,
                "left": 0,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxCharges",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": 0,
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCharges": "flxCharges",
                    "flxResults": "flxResults",
                    "lblDetails": "lblDetails",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5.33%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "89.33%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxChargesBreakdown.add(lblChargesBreakdown, segChargesBreakdown, flxSeparator);
            var segFurtherDetails = new kony.ui.SegmentedUI2({
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
                }, {
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
                "id": "segFurtherDetails",
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
            }, {});
            flxFurtherDetails.add(flxChargesBreakdown, segFurtherDetails);
            flxConfirmationMain.add(flxSuccess, flxInsufficientFunds, lblUploadFailedMsg, flxConfirmationDetails, flxFurtherDetailsHeader, flxFurtherDetails);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "120dp",
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
                "bottom": "5dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnDashboard",
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
            }, {});
            var btnNewTransfer = new kony.ui.Button({
                "bottom": "61dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnNewTransfer",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.NewPayment"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnDashboard, btnNewTransfer);
            flxSuccessTransaction.add(flxConfirmationMain, flxButtons);
            var socialshare = new com.konymp.socialshare({
                "height": "0%",
                "id": "socialshare",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "0%",
                "overrides": {
                    "socialshare": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            socialshare.title = "Kony";
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
            var pdfgenerator = new com.konymp.pdfgenerator({
                "height": "0%",
                "id": "pdfgenerator",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "0%",
                "overrides": {
                    "pdfgenerator": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            pdfgenerator.fileName = "test";
            pdfgenerator.unit = "pt";
            pdfgenerator.orientation = "portrait";
            pdfgenerator.leftprop = 0;
            pdfgenerator.topprop = 0;
            pdfgenerator.format = "a4";
            pdfgenerator.widthprop = 400;
            pdfgenerator.compress = false;
            pdfgenerator.bottomprop = 0;
            this.add(flxHeader, flxError, flxSuccessTransaction, socialshare, flxPopup, pdfgenerator);
        };
        return [{
            "addWidgets": addWidgetsfrmEuropeConfirmation,
            "enabledForIdleTimeout": true,
            "id": "frmEuropeConfirmation",
            "init": controller.AS_Form_c0f1c4e78e804902a4933ea5a1bf78a4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_d686085e54614600a624b86561801478(eventobject);
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