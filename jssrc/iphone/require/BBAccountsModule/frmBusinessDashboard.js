define("BBAccountsModule/frmBusinessDashboard", function() {
    return function(controller) {
        function addWidgetsfrmBusinessDashboard() {
            this.setDefaultUnit(kony.flex.DP);
            var flxTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxTitle.setDefaultUnit(kony.flex.DP);
            var flxTitleSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxTitleSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTitleSeparator.setDefaultUnit(kony.flex.DP);
            flxTitleSeparator.add();
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
                        "isVisible": false
                    },
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": true
                    },
                    "imgBack": {
                        "src": "hamburger.png"
                    },
                    "imgSearch": {
                        "centerY": "50.23%",
                        "right": "0.00%",
                        "src": "businessbankingwhite.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title")
                    }
                }
            }, {
                "overrides": {
                    "imgSearch": {
                        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO
                    }
                }
            }, {
                "overrides": {}
            });
            flxTitle.add(flxTitleSeparator, customHeader);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            var flxPageIndicators = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicators",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "225dp",
                "width": "24dp",
                "zIndex": 7
            }, {}, {});
            flxPageIndicators.setDefaultUnit(kony.flex.DP);
            var flxPageIndicator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxPageIndicatorSelected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator1.setDefaultUnit(kony.flex.DP);
            flxPageIndicator1.add();
            var flxPageIndicator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxPageIndicatorUnselected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator2.setDefaultUnit(kony.flex.DP);
            flxPageIndicator2.add();
            flxPageIndicators.add(flxPageIndicator1, flxPageIndicator2);
            var flxDashboardHeader = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "250dp",
                "horizontalScrollIndicator": true,
                "id": "flxDashboardHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "minHeight": "60dp",
                "pagingEnabled": true,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxDashboardHeader.setDefaultUnit(kony.flex.DP);
            var flxApprovalRequest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxApprovalRequest",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxApprovalRequest.setDefaultUnit(kony.flex.DP);
            var flxApprovalContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxApprovalContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-5%",
                "width": "48%",
                "zIndex": 2
            }, {}, {});
            flxApprovalContainer.setDefaultUnit(kony.flex.DP);
            var flxApprovalInnerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "68%",
                "id": "flxApprovalInnerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlx003463Bg",
                "top": "6%",
                "width": "90%"
            }, {}, {});
            flxApprovalInnerContainer.setDefaultUnit(kony.flex.DP);
            var flxApprovalTitleContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalTitleContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%"
            }, {}, {});
            flxApprovalTitleContainer.setDefaultUnit(kony.flex.DP);
            var lblApprovalHeader = new kony.ui.Label({
                "id": "lblApprovalHeader",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Approvals",
                "textStyle": {},
                "top": "8%",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxApprovalImageContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxApprovalImageContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "11dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxApprovalImageContainer.setDefaultUnit(kony.flex.DP);
            var imgApprovalArrow = new kony.ui.Image2({
                "height": "18dp",
                "id": "imgApprovalArrow",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "approvalarrow.png",
                "top": "0dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApprovalImageContainer.add(imgApprovalArrow);
            flxApprovalTitleContainer.add(lblApprovalHeader, flxApprovalImageContainer);
            var flxApprovalSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxApprovalSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBgOp15",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxApprovalSeparator.setDefaultUnit(kony.flex.DP);
            flxApprovalSeparator.add();
            var flxApprovalTransactionContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalTransactionContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%"
            }, {}, {});
            flxApprovalTransactionContainer.setDefaultUnit(kony.flex.DP);
            var lblTransaction = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTransaction",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "Transactions",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTransactionValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTransactionValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "11",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxApprovalTransactionContainer.add(lblTransaction, lblTransactionValue);
            var flxApprovalACHTransactionContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalACHTransactionContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "18dp",
                "width": "100%"
            }, {}, {});
            flxApprovalACHTransactionContainer.setDefaultUnit(kony.flex.DP);
            var lblACHTransaction = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblACHTransaction",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "ACH transactions",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblACHTransactionValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblACHTransactionValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "05",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxApprovalACHTransactionContainer.add(lblACHTransaction, lblACHTransactionValue);
            var flxApprovalACHFileContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalACHFileContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "18dp",
                "width": "100%"
            }, {}, {});
            flxApprovalACHFileContainer.setDefaultUnit(kony.flex.DP);
            var lblACHFile = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblACHFile",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "ACH Files",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblACHFileValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblACHFileValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "12",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxApprovalACHFileContainer.add(lblACHFile, lblACHFileValue);
            flxApprovalInnerContainer.add(flxApprovalTitleContainer, flxApprovalSeparator, flxApprovalTransactionContainer, flxApprovalACHTransactionContainer, flxApprovalACHFileContainer);
            flxApprovalContainer.add(flxApprovalInnerContainer);
            var flxRequestContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRequestContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "52%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-5%",
                "width": "48%",
                "zIndex": 2
            }, {}, {});
            flxRequestContainer.setDefaultUnit(kony.flex.DP);
            var flxRequestInnerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "68%",
                "id": "flxRequestInnerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "10%",
                "skin": "sknFlx003463Bg",
                "top": "6%",
                "width": "90%"
            }, {}, {});
            flxRequestInnerContainer.setDefaultUnit(kony.flex.DP);
            var flxRequestTitleContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxRequestTitleContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%"
            }, {}, {});
            flxRequestTitleContainer.setDefaultUnit(kony.flex.DP);
            var lblRequestHeader = new kony.ui.Label({
                "id": "lblRequestHeader",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Requests",
                "textStyle": {},
                "top": "8%",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxRequestImageContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRequestImageContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "11dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxRequestImageContainer.setDefaultUnit(kony.flex.DP);
            var imgRequestArrow = new kony.ui.Image2({
                "height": "18dp",
                "id": "imgRequestArrow",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "approvalarrow.png",
                "top": "0dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRequestImageContainer.add(imgRequestArrow);
            flxRequestTitleContainer.add(lblRequestHeader, flxRequestImageContainer);
            var flxRequestSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxRequestSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBgOp15",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRequestSeparator.setDefaultUnit(kony.flex.DP);
            flxRequestSeparator.add();
            var flxRequestPendingContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxRequestPendingContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%"
            }, {}, {});
            flxRequestPendingContainer.setDefaultUnit(kony.flex.DP);
            var lblPending = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPending",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "Pending",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblPendingValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPendingValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "0",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRequestPendingContainer.add(lblPending, lblPendingValue);
            var flxRequestApprovedContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxRequestApprovedContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "18dp",
                "width": "100%"
            }, {}, {});
            flxRequestApprovedContainer.setDefaultUnit(kony.flex.DP);
            var lblApproved = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApproved",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "Approved",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblApprovedValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApprovedValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "24",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRequestApprovedContainer.add(lblApproved, lblApprovedValue);
            var flxRequestRejectedContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxRequestRejectedContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "18dp",
                "width": "100%"
            }, {}, {});
            flxRequestRejectedContainer.setDefaultUnit(kony.flex.DP);
            var lblRejected = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRejected",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "Rejected",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblRejectedValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRejectedValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "01",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRequestRejectedContainer.add(lblRejected, lblRejectedValue);
            flxRequestInnerContainer.add(flxRequestTitleContainer, flxRequestSeparator, flxRequestPendingContainer, flxRequestApprovedContainer, flxRequestRejectedContainer);
            flxRequestContainer.add(flxRequestInnerContainer);
            var flxApprovalAndRequestContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalAndRequestContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "198dp",
                "width": "100%"
            }, {}, {});
            flxApprovalAndRequestContainer.setDefaultUnit(kony.flex.DP);
            var imgApprovalAndRequest = new kony.ui.Image2({
                "centerY": "50%",
                "height": "16dp",
                "id": "imgApprovalAndRequest",
                "isVisible": false,
                "left": "29%",
                "skin": "slImage",
                "src": "businessaccount.png",
                "top": "0dp",
                "width": "16dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblApprovalRequestTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApprovalRequestTitle",
                "isVisible": true,
                "left": "35%",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Approvals & Requests",
                "textStyle": {},
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxApprovalAndRequestContainer.add(imgApprovalAndRequest, lblApprovalRequestTitle);
            flxApprovalRequest.add(flxApprovalContainer, flxRequestContainer, flxApprovalAndRequestContainer);
            var flxMultiLineBarChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMultiLineBarChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMultiLineBarChart.setDefaultUnit(kony.flex.DP);
            var browserMultiLine = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "id": "browserMultiLine",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "chartist/multilinebarchart.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "browserType": constants.BROWSER_TYPE_WKWEBVIEW,
                "bounces": false
            });
            var flxCashPositionContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxCashPositionContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "198dp",
                "width": "100%"
            }, {}, {});
            flxCashPositionContainer.setDefaultUnit(kony.flex.DP);
            var imgCashPositionTitle = new kony.ui.Image2({
                "centerY": "50%",
                "height": "16dp",
                "id": "imgCashPositionTitle",
                "isVisible": true,
                "left": "25%",
                "skin": "slImage",
                "src": "businessaccount.png",
                "top": "0dp",
                "width": "16dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCashPositionTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCashPositionTitle",
                "isVisible": true,
                "left": "31%",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Monthly Business Cash Position",
                "textStyle": {},
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCashPositionContainer.add(imgCashPositionTitle, lblCashPositionTitle);
            flxMultiLineBarChart.add(browserMultiLine, flxCashPositionContainer);
            flxDashboardHeader.add(flxApprovalRequest, flxMultiLineBarChart);
            var flxDashboard = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bottom": "60dp",
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxDashboard",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxDashboard.setDefaultUnit(kony.flex.DP);
            var flxDummyHorizontalScroll = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "250dp",
                "horizontalScrollIndicator": false,
                "id": "flxDummyHorizontalScroll",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "minHeight": "60dp",
                "onTouchStart": controller.AS_FlexScrollContainer_bb65e7f72c3e44328bb7aba449650e6e,
                "pagingEnabled": true,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxDummyHorizontalScroll.setDefaultUnit(kony.flex.DP);
            var flxOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOne.setDefaultUnit(kony.flex.DP);
            flxOne.add();
            var flxTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTwo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTwo.setDefaultUnit(kony.flex.DP);
            flxTwo.add();
            var flxThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxThree",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxThree.setDefaultUnit(kony.flex.DP);
            flxThree.add();
            flxDummyHorizontalScroll.add(flxOne, flxTwo, flxThree);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueHeaderShadow",
                "top": "-25dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxChartSizeToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxChartSizeToggle",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxChartSizeToggle.setDefaultUnit(kony.flex.DP);
            var imgChartSizeToggle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgChartSizeToggle",
                "isVisible": true,
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxChartSizeToggle.add(imgChartSizeToggle);
            var flxSelectAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSelectAccount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSelectAccount.setDefaultUnit(kony.flex.DP);
            var flxSelectedAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxSelectedAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectedAccounts.setDefaultUnit(kony.flex.DP);
            var lblSelectedAccountType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSelectedAccountType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl0095e4SSPReg32px",
                "text": "View by Business Group",
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
            var flxShowAllAccountTypes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxShowAllAccountTypes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "minHeight": "50dp",
                "isModalContainer": false,
                "right": "18%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "18%",
                "zIndex": 1
            }, {}, {});
            flxShowAllAccountTypes.setDefaultUnit(kony.flex.DP);
            var imgShowAllAccounts = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgShowAllAccounts",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "filters.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxShowAllAccountTypes.add(imgShowAllAccounts);
            var flxSearchAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxSearchAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0",
                "width": "18%"
            }, {}, {});
            flxSearchAccounts.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "searchicon2.png",
                "top": "0",
                "width": "25dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSearchFilterSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchFilterSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "1%"
            }, {}, {});
            flxSearchFilterSeparator.setDefaultUnit(kony.flex.DP);
            flxSearchFilterSeparator.add();
            flxSearchAccounts.add(imgSearchIcon, flxSearchFilterSeparator);
            flxSelectedAccounts.add(lblSelectedAccountType, flxShowAllAccountTypes, flxSearchAccounts);
            var flxAccountTypes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccountTypes",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountTypes.setDefaultUnit(kony.flex.DP);
            var flxFilterHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxFilterHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxFilterHeader.setDefaultUnit(kony.flex.DP);
            var lblFilterHeader = new kony.ui.Label({
                "centerY": "50%",
                "height": "20dp",
                "id": "lblFilterHeader",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl424242SSPRBold15px",
                "text": "Label",
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
            var imgFilterClose = new kony.ui.Image2({
                "centerY": "50%",
                "height": "12dp",
                "id": "imgFilterClose",
                "isVisible": true,
                "right": "15dp",
                "skin": "slImage",
                "src": "closeicon.png",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxFilterHeader.add(lblFilterHeader, imgFilterClose, flxSeparator);
            var segAccountTypes = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgIcon": "imagedrag.png",
                    "lblName": "Label"
                }, {
                    "imgIcon": "imagedrag.png",
                    "lblName": "Label"
                }, {
                    "imgIcon": "imagedrag.png",
                    "lblName": "Label"
                }, {
                    "imgIcon": "imagedrag.png",
                    "lblName": "Label"
                }],
                "groupCells": false,
                "id": "segAccountTypes",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
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
            var flxAccountShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxAccountShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxgradient000000",
                "top": "0",
                "width": "100%",
                "zIndex": 10000000
            }, {}, {});
            flxAccountShadow.setDefaultUnit(kony.flex.DP);
            flxAccountShadow.add();
            flxAccountTypes.add(flxFilterHeader, segAccountTypes, flxAccountShadow);
            var flxSearchContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxSearchContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSearchContainer.setDefaultUnit(kony.flex.DP);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxHeaderSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
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
                    "btnCancel": {
                        "centerY": "45%",
                        "isVisible": true,
                        "right": "15dp"
                    },
                    "customSearchbox": {
                        "height": "100%",
                        "top": "0dp"
                    },
                    "flxHeaderShadow": {
                        "bottom": "0dp",
                        "zIndex": 10
                    },
                    "imgSearchIcon": {
                        "centerY": "45%",
                        "src": "search.png"
                    },
                    "tbxSearch": {
                        "centerY": "45%",
                        "height": "70%",
                        "width": "75%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            flxSearchContainer.add(flxHeaderSearchbox);
            flxSelectAccount.add(flxSelectedAccounts, flxAccountTypes, flxSearchContainer);
            var flxAccounts = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "400dp",
                "horizontalScrollIndicator": true,
                "id": "flxAccounts",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxAccounts.setDefaultUnit(kony.flex.DP);
            flxAccounts.add();
            var segAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblAccountBal": "Available Balance",
                            "lblTypeName": "Checking Accounts (3)",
                            "lblTypeValue": "$127,912.00"
                        },
                        [{
                            "imgAccountType": "personalaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "gggg",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgAccountType": "personalaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "gggg",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgAccountType": "personalaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "gggg",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }]
                    ],
                    [{
                            "lblAccountBal": "Available Balance",
                            "lblTypeName": "Checking Accounts (3)",
                            "lblTypeValue": "$127,912.00"
                        },
                        [{
                            "imgAccountType": "personalaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "gggg",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgAccountType": "personalaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "gggg",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgAccountType": "personalaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "gggg",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segAccounts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onTouchStart": controller.AS_Segment_b383aae6f3774f72951a6d829807b2eb,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegf9f9f9",
                "rowTemplate": "flxCombinedAccounts",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxAccountsHeaderDashboard",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAccountsHeaderDashboard": "flxAccountsHeaderDashboard",
                    "flxBank": "flxBank",
                    "flxCombinedAccounts": "flxCombinedAccounts",
                    "flxDelete": "flxDelete",
                    "flxHeaderSeperator": "flxHeaderSeperator",
                    "flxHeaderShadows": "flxHeaderShadows",
                    "flxMain": "flxMain",
                    "flxRefresh": "flxRefresh",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgAccountType": "imgAccountType",
                    "imgBank": "imgBank",
                    "imgDelete": "imgDelete",
                    "imgError": "imgError",
                    "imgRefresh": "imgRefresh",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblBankName": "lblBankName",
                    "lblDelete": "lblDelete",
                    "lblRefresh": "lblRefresh",
                    "lblTypeName": "lblTypeName",
                    "lblTypeValue": "lblTypeValue"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 2
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
            var flxSpendingBudget = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "336dp",
                "id": "flxSpendingBudget",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSpendingBudget.setDefaultUnit(kony.flex.DP);
            var flxAccountsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccountsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAccountsHeader.setDefaultUnit(kony.flex.DP);
            var lblTypeName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTypeName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.DashboardAggregated.TypeName"),
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
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "3dp",
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
            var CopyimgShowAllAccounts0d83f51bc03244e = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "CopyimgShowAllAccounts0d83f51bc03244e",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountsHeader.add(lblTypeName, flxTypeOneShadow, CopyimgShowAllAccounts0d83f51bc03244e);
            var CopyflxAccounts0bc5e44af563049 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "CopyflxAccounts0bc5e44af563049",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxAccounts0bc5e44af563049.setDefaultUnit(kony.flex.DP);
            var CopyimgShowAllAccounts0aa15f22438fe4a = new kony.ui.Image2({
                "height": "15dp",
                "id": "CopyimgShowAllAccounts0aa15f22438fe4a",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "top": "10dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblTypeName0f830a3b262ff40 = new kony.ui.Label({
                "id": "CopylblTypeName0f830a3b262ff40",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Checking Accounts",
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
            var CopylblTypeName0ge03850d420d43 = new kony.ui.Label({
                "id": "CopylblTypeName0ge03850d420d43",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "+$3,222.23",
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
            var flxProgressHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxProgressHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20%",
                "skin": "sknFlxda8b08Rounded",
                "zIndex": 2
            }, {}, {});
            flxProgressHeader.setDefaultUnit(kony.flex.DP);
            flxProgressHeader.add();
            var flxDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "9dp",
                "clipBounds": true,
                "height": "12dp",
                "id": "flxDummy",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "20dp",
                "zIndex": 5
            }, {}, {});
            flxDummy.setDefaultUnit(kony.flex.DP);
            flxDummy.add();
            var flxProgressBackgroundHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxProgressBackgroundHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxda8b08Op20Round",
                "zIndex": 3
            }, {}, {});
            flxProgressBackgroundHeader.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundHeader.add();
            CopyflxAccounts0bc5e44af563049.add(CopyimgShowAllAccounts0aa15f22438fe4a, CopylblTypeName0f830a3b262ff40, CopylblTypeName0ge03850d420d43, flxProgressHeader, flxDummy, flxProgressBackgroundHeader);
            var CopyflxAccounts0a5d478bc87fc4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "CopyflxAccounts0a5d478bc87fc4c",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxAccounts0a5d478bc87fc4c.setDefaultUnit(kony.flex.DP);
            var CopyimgShowAllAccounts0cc6ab2ea3a1f40 = new kony.ui.Image2({
                "height": "15dp",
                "id": "CopyimgShowAllAccounts0cc6ab2ea3a1f40",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "top": "10dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblTypeName0gaccfb30c75749 = new kony.ui.Label({
                "id": "CopylblTypeName0gaccfb30c75749",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Checking Accounts",
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
            var CopylblTypeName0i9fcf6c7873e48 = new kony.ui.Label({
                "id": "CopylblTypeName0i9fcf6c7873e48",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "+$3,222.23",
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
            var CopyflxProgressHeader0b80354ed11504c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxProgressHeader0b80354ed11504c",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20%",
                "skin": "sknFlxda8b08Rounded",
                "zIndex": 2
            }, {}, {});
            CopyflxProgressHeader0b80354ed11504c.setDefaultUnit(kony.flex.DP);
            CopyflxProgressHeader0b80354ed11504c.add();
            var CopyflxDummy0gb0bb5628e2b44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "9dp",
                "clipBounds": true,
                "height": "12dp",
                "id": "CopyflxDummy0gb0bb5628e2b44",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "20dp",
                "zIndex": 5
            }, {}, {});
            CopyflxDummy0gb0bb5628e2b44.setDefaultUnit(kony.flex.DP);
            CopyflxDummy0gb0bb5628e2b44.add();
            var CopyflxProgressBackgroundHeader0fdc505b4da5b47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxProgressBackgroundHeader0fdc505b4da5b47",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxda8b08Op20Round",
                "zIndex": 3
            }, {}, {});
            CopyflxProgressBackgroundHeader0fdc505b4da5b47.setDefaultUnit(kony.flex.DP);
            CopyflxProgressBackgroundHeader0fdc505b4da5b47.add();
            CopyflxAccounts0a5d478bc87fc4c.add(CopyimgShowAllAccounts0cc6ab2ea3a1f40, CopylblTypeName0gaccfb30c75749, CopylblTypeName0i9fcf6c7873e48, CopyflxProgressHeader0b80354ed11504c, CopyflxDummy0gb0bb5628e2b44, CopyflxProgressBackgroundHeader0fdc505b4da5b47);
            var CopyflxAccounts0f84d1bcdd03147 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "CopyflxAccounts0f84d1bcdd03147",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxAccounts0f84d1bcdd03147.setDefaultUnit(kony.flex.DP);
            var CopyimgShowAllAccounts0dbfb7ec72ba44a = new kony.ui.Image2({
                "height": "15dp",
                "id": "CopyimgShowAllAccounts0dbfb7ec72ba44a",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "top": "10dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblTypeName0e490e9eb3de941 = new kony.ui.Label({
                "id": "CopylblTypeName0e490e9eb3de941",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Checking Accounts",
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
            var CopylblTypeName0efd6bfb71d8f44 = new kony.ui.Label({
                "id": "CopylblTypeName0efd6bfb71d8f44",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "+$3,222.23",
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
            var CopyflxProgressHeader0a9229ea5333a4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxProgressHeader0a9229ea5333a4f",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20%",
                "skin": "sknFlxda8b08Rounded",
                "zIndex": 2
            }, {}, {});
            CopyflxProgressHeader0a9229ea5333a4f.setDefaultUnit(kony.flex.DP);
            CopyflxProgressHeader0a9229ea5333a4f.add();
            var CopyflxDummy0cdb13a423d8d48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "9dp",
                "clipBounds": true,
                "height": "12dp",
                "id": "CopyflxDummy0cdb13a423d8d48",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "20dp",
                "zIndex": 5
            }, {}, {});
            CopyflxDummy0cdb13a423d8d48.setDefaultUnit(kony.flex.DP);
            CopyflxDummy0cdb13a423d8d48.add();
            var CopyflxProgressBackgroundHeader0j46464ad9bed4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxProgressBackgroundHeader0j46464ad9bed4a",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxda8b08Op20Round",
                "zIndex": 3
            }, {}, {});
            CopyflxProgressBackgroundHeader0j46464ad9bed4a.setDefaultUnit(kony.flex.DP);
            CopyflxProgressBackgroundHeader0j46464ad9bed4a.add();
            CopyflxAccounts0f84d1bcdd03147.add(CopyimgShowAllAccounts0dbfb7ec72ba44a, CopylblTypeName0e490e9eb3de941, CopylblTypeName0efd6bfb71d8f44, CopyflxProgressHeader0a9229ea5333a4f, CopyflxDummy0cdb13a423d8d48, CopyflxProgressBackgroundHeader0j46464ad9bed4a);
            flxSpendingBudget.add(flxAccountsHeader, CopyflxAccounts0bc5e44af563049, CopyflxAccounts0a5d478bc87fc4c, CopyflxAccounts0f84d1bcdd03147);
            var flxSuggestedOffers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "300dp",
                "id": "flxSuggestedOffers",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSuggestedOffers.setDefaultUnit(kony.flex.DP);
            var flxOffersHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOffersHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxOffersHeader.setDefaultUnit(kony.flex.DP);
            var lblSuggestedOffersTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSuggestedOffersTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.DashboardAggregated.SuggestedOffersTitle"),
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
            var flxOffersShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "3dp",
                "id": "flxOffersShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOffersShadow.setDefaultUnit(kony.flex.DP);
            flxOffersShadow.add();
            flxOffersHeader.add(lblSuggestedOffersTitle, flxOffersShadow);
            var flxScrollContainerAds = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "200dp",
                "horizontalScrollIndicator": true,
                "id": "flxScrollContainerAds",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollContainerAds.setDefaultUnit(kony.flex.DP);
            var flxLoadingIndicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoadingIndicator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoadingIndicator.setDefaultUnit(kony.flex.DP);
            var imgLoadingIndicator = new kony.ui.Image2({
                "height": "100%",
                "id": "imgLoadingIndicator",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "loadermedium.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoadingIndicator.add(imgLoadingIndicator);
            var flxAd1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd1.setDefaultUnit(kony.flex.DP);
            var imgAd1 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd1",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_c86405045aa04dffa72b74da5845da5c,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd1.add(imgAd1);
            var flxAd2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd2.setDefaultUnit(kony.flex.DP);
            var imgAd2 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd2",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_e3f2ee4031994b7f8a79ebce90f2e9ac,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd2.add(imgAd2);
            var flxAd3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd3.setDefaultUnit(kony.flex.DP);
            var imgAd3 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd3",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_d759f3768cf0454a8be054c8b94d931a,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd3.add(imgAd3);
            var flxAd4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd4.setDefaultUnit(kony.flex.DP);
            var imgAd4 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd4",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_b83a4fb80df5471a8af8239dbd28c4b9,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd4.add(imgAd4);
            var flxAd5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd5.setDefaultUnit(kony.flex.DP);
            var imgAd5 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd5",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_ed61b986e9ac46d1ba58d42cda0f98bc,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd5.add(imgAd5);
            flxScrollContainerAds.add(flxLoadingIndicator, flxAd1, flxAd2, flxAd3, flxAd4, flxAd5);
            var flxProgressBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxProgressBar",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "7dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressBar.setDefaultUnit(kony.flex.DP);
            var flxProgressButton1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "38%",
                "isModalContainer": false,
                "skin": "sknflxADADADRadius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton1.setDefaultUnit(kony.flex.DP);
            flxProgressButton1.add();
            var flxProgressButton2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton2.setDefaultUnit(kony.flex.DP);
            flxProgressButton2.add();
            var flxProgressButton3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton3.setDefaultUnit(kony.flex.DP);
            flxProgressButton3.add();
            var flxProgressButton4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton4.setDefaultUnit(kony.flex.DP);
            flxProgressButton4.add();
            var flxProgressButton5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton5.setDefaultUnit(kony.flex.DP);
            flxProgressButton5.add();
            flxProgressBar.add(flxProgressButton1, flxProgressButton2, flxProgressButton3, flxProgressButton4, flxProgressButton5);
            var flxAdInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxAdInfo",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxAdInfo.setDefaultUnit(kony.flex.DP);
            var lblHeading = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblHeading",
                "isVisible": true,
                "skin": "sknLbl424242SSP93pr",
                "text": "Get Home Loans from ANZ Bank with 4.95 per annum interest rate",
                "textStyle": {},
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var rtxDetails = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "id": "rtxDetails",
                "isVisible": true,
                "linkSkin": "sknRtx0095e4SSPReg26px",
                "skin": "sknRtx727272SSPReg26px",
                "text": "Get Home Loans from ANZ Bank with 4.95 per <br/> annum  interest rates and get free... <a href=\"\"> <b>Learn More </b></a>",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAdInfo.add(lblHeading, rtxDetails);
            flxSuggestedOffers.add(flxOffersHeader, flxScrollContainerAds, flxProgressBar, flxAdInfo);
            var flxEngageAdvert = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "198dp",
                "id": "flxEngageAdvert",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxEngageAdvert.setDefaultUnit(kony.flex.DP);
            var flxEngageAdvertBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "94%",
                "id": "flxEngageAdvertBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlx097ce5bbd0db",
                "top": "3%",
                "width": "96%",
                "zIndex": 1
            }, {}, {});
            flxEngageAdvertBg.setDefaultUnit(kony.flex.DP);
            var flxEngageAdvertLeftPanel = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxEngageAdvertLeftPanel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "19dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "15dp",
                "verticalScrollIndicator": true,
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxEngageAdvertLeftPanel.setDefaultUnit(kony.flex.DP);
            var lblEngageAdvertCaption = new kony.ui.Label({
                "id": "lblEngageAdvertCaption",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblffffffSSPBold33px",
                "text": kony.i18n.getLocalizedString("kony.mb.Engage.advertCaption"),
                "textStyle": {},
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblEngageAdvertText = new kony.ui.Label({
                "id": "lblEngageAdvertText",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblffffff20px",
                "text": kony.i18n.getLocalizedString("kony.mb.Engage.advertText"),
                "textStyle": {},
                "top": "4dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxEngageAdvertLeftPanel.add(lblEngageAdvertCaption, lblEngageAdvertText);
            var imgEngageAdvertHand = new kony.ui.Image2({
                "height": "100%",
                "id": "imgEngageAdvertHand",
                "isVisible": true,
                "left": "60%",
                "skin": "slImage",
                "src": "femalehand.png",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnEngageAdvertChatNow = new kony.ui.Button({
                "bottom": "29dp",
                "focusSkin": "sknBtnffffffSSP22px",
                "height": "32dp",
                "id": "btnEngageAdvertChatNow",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknBtnffffffSSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Engage.chatNow"),
                "width": "125dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxEngageAdvertBg.add(flxEngageAdvertLeftPanel, imgEngageAdvertHand, btnEngageAdvertChatNow);
            flxEngageAdvert.add(flxEngageAdvertBg);
            var flxDummyWhitespace = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxDummyWhitespace",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxDummyWhitespace.setDefaultUnit(kony.flex.DP);
            flxDummyWhitespace.add();
            var flxWhiteBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxWhiteBg",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "-30dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWhiteBg.setDefaultUnit(kony.flex.DP);
            flxWhiteBg.add();
            flxDashboard.add(flxDummyHorizontalScroll, flxShadow, flxChartSizeToggle, flxSelectAccount, flxAccounts, segAccounts, flxSpendingBudget, flxSuggestedOffers, flxEngageAdvert, flxDummyWhitespace, flxWhiteBg);
            var flxMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 106
            }, {}, {});
            flxMenu.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "height": "60dp",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 300,
                "overrides": {
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": false
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customFooter.flxMore.onClick = controller.AS_FlexContainer_i635d71212d643ad85f71d29f652f620;
            customFooter.flxTransfer.onClick = controller.AS_FlexContainer_c989d9a0b02c493b8c3167cb28e18b2f;
            flxMenu.add(customFooter);
            var flxBlueBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55%",
                "id": "flxBlueBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBlueBg.setDefaultUnit(kony.flex.DP);
            flxBlueBg.add();
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "60dp",
                "clipBounds": true,
                "id": "flxHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 105
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxHamburgerWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamburgerWrapper.setDefaultUnit(kony.flex.DP);
            var flxHamburgerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 10
            }, {}, {});
            flxHamburgerContainer.setDefaultUnit(kony.flex.DP);
            var Hamburger = new com.kmb.common.Hamburger({
                "height": "100%",
                "id": "Hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHamburgerContainer.add(Hamburger);
            var flxHamburgerDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburgerDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "-50dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            var flxWhite = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "35%",
                "id": "flxWhite",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWhite.setDefaultUnit(kony.flex.DP);
            flxWhite.add();
            var flxBGDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBGDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBGDummy.setDefaultUnit(kony.flex.DP);
            flxBGDummy.add();
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
            this.add(flxTitle, flxGradient, flxPageIndicators, flxDashboardHeader, flxDashboard, flxMenu, flxBlueBg, flxHamburger, flxWhite, flxBGDummy, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_b8e6117a48a44297942bef0d3277939f,
            "metaData": {
                "image": "businessbankingwhite.png"
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": " "
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmBusinessDashboard,
            "allowVerticalBounce": false,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmBusinessDashboard",
            "init": controller.AS_Form_f9c1302f7d314729a5c40ecdc7bd5374,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "postShow": controller.AS_Form_e622ed9f48a44f8db528c7c156fb5ac0,
            "preShow": function(eventobject) {
                controller.AS_Form_fb991be7614a448bb2fa98b9accb2b54(eventobject);
            },
            "skin": "sknFrmoa78d1Gradient50",
            "title": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title")
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