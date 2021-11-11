define("BillPayModule/frmBillPayConfirmation", function() {
    return function(controller) {
        function addWidgetsfrmBillPayConfirmation() {
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
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.BillPayConfirmation.Title")
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
                "bottom": "60dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxConfirmationMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
            var flxTransferAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransferAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferAmount.setDefaultUnit(kony.flex.DP);
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "110dp",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblPaymentAmount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPaymentAmount",
                "isVisible": true,
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PaymentAmount"),
                "textStyle": {},
                "top": "30dp",
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
            var lblPaymentAmountValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPaymentAmountValue",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg62px",
                "text": "$000.00",
                "textStyle": {},
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAmount.add(lblPaymentAmount, lblPaymentAmountValue);
            var flxConfirmationDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConfirmationDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "110dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
            var flxSeparatortop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatortop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "19dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparatortop.setDefaultUnit(kony.flex.DP);
            flxSeparatortop.add();
            var flxFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxFromAccount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFromAccount.setDefaultUnit(kony.flex.DP);
            var imgdottedline = new kony.ui.Image2({
                "height": "2dp",
                "id": "imgdottedline",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "top": "0dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFromAccountTitle = new kony.ui.Label({
                "id": "lblFromAccountTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.FromAccount"),
                "textStyle": {},
                "top": "15dp",
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
            var flxpayeefullname = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxpayeefullname",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 5,
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxpayeefullname.setDefaultUnit(kony.flex.DP);
            var flxAccountType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "17dp",
                "id": "flxAccountType",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": 7,
                "skin": "sknflxe3e3e3border",
                "top": 3,
                "width": "18dp",
                "zIndex": 1
            }, {}, {});
            flxAccountType.setDefaultUnit(kony.flex.DP);
            var imgAccountType = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "45%",
                "height": "11dp",
                "id": "imgAccountType",
                "isVisible": true,
                "skin": "slImage",
                "src": "personalaccount.png",
                "width": "11dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountType.add(imgAccountType);
            var lblFromAccountValue = new kony.ui.Label({
                "id": "lblFromAccountValue",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "skin": "sknLbl424242SSP26px",
                "text": "My Checking ....xxxx",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
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
            flxpayeefullname.add(flxAccountType, lblFromAccountValue);
            var lblBank = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblBank",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "HDFC Bank",
                "textStyle": {},
                "top": 3,
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
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            var imgdottedline2 = new kony.ui.Image2({
                "bottom": "0dp",
                "height": "2dp",
                "id": "imgdottedline2",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFromAccount.add(imgdottedline, lblFromAccountTitle, flxpayeefullname, lblBank, flxSeparator1, imgdottedline2);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 4
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxToPayee = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxToPayee",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToPayee.setDefaultUnit(kony.flex.DP);
            var lblToPayeeTitle = new kony.ui.Label({
                "id": "lblToPayeeTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.ToPayee"),
                "textStyle": {},
                "top": "15dp",
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
            var flxtopayeefullname = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "id": "flxtopayeefullname",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 5,
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxtopayeefullname.setDefaultUnit(kony.flex.DP);
            var flxtoAccountType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "17dp",
                "id": "flxtoAccountType",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": 7,
                "skin": "sknflxe3e3e3border",
                "top": 3,
                "width": "18dp",
                "zIndex": 1
            }, {}, {});
            flxtoAccountType.setDefaultUnit(kony.flex.DP);
            var imgtoAccountType = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "45%",
                "height": "11dp",
                "id": "imgtoAccountType",
                "isVisible": true,
                "skin": "slImage",
                "src": "personalaccount.png",
                "width": "11dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxtoAccountType.add(imgtoAccountType);
            var lblToPayeeValue = new kony.ui.Label({
                "id": "lblToPayeeValue",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSP26px",
                "text": "Bill Moron….xxxx",
                "textStyle": {},
                "top": "0",
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
            flxtopayeefullname.add(flxtoAccountType, lblToPayeeValue);
            var lblPayeeAddress = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblPayeeAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "2189 Schmeler Flats Apt. 166",
                "textStyle": {},
                "top": 3,
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
            var flxSeparator22 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "79dp",
                "clipBounds": true,
                "height": "0dp",
                "id": "flxSeparator22",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeparator22.setDefaultUnit(kony.flex.DP);
            flxSeparator22.add();
            var imgdottedline3 = new kony.ui.Image2({
                "height": "2dp",
                "id": "imgdottedline3",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "top": "0dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgdottedline4 = new kony.ui.Image2({
                "bottom": "0dp",
                "height": "2dp",
                "id": "imgdottedline4",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator33 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator33",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeparator33.setDefaultUnit(kony.flex.DP);
            flxSeparator33.add();
            flxToPayee.add(lblToPayeeTitle, flxtopayeefullname, lblPayeeAddress, flxSeparator22, imgdottedline3, imgdottedline4, flxSeparator33);
            var flxSeparatorfrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorfrom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "19dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorfrom.setDefaultUnit(kony.flex.DP);
            flxSeparatorfrom.add();
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblKey": "Start Date",
                    "lblValue": "Continue until you cancel"
                }, {
                    "lblKey": "Start Date",
                    "lblValue": "Continue until you cancel"
                }, {
                    "lblKey": "Start Date",
                    "lblValue": "Continue until you cancel"
                }],
                "groupCells": false,
                "id": "segDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxTransferConfirmation",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeparator": "flxSeparator",
                    "flxTransferConfirmation": "flxTransferConfirmation",
                    "lblKey": "lblKey",
                    "lblValue": "lblValue"
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
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "id": "lblDescription",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.DescriptionOptional"),
                "textStyle": {},
                "top": "30dp",
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
            var txtDescription = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "id": "txtDescription",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": "Enter Here",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxBordere3e3e3Radius4px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "5dp",
                "zIndex": 1
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
            flxDescription.add(lblDescription, txtDescription);
            var flxAgree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAgree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 20,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxAgree.setDefaultUnit(kony.flex.DP);
            var flxCheckBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxCheckBox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "14dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "30dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox.setDefaultUnit(kony.flex.DP);
            var imgTermsAccepted = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "18dp",
                "id": "imgTermsAccepted",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tickmarkbox.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox.add(imgTermsAccepted);
            var lblAgree = new kony.ui.Label({
                "id": "lblAgree",
                "isVisible": false,
                "left": "5dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.tc.agreealltc"),
                "textStyle": {},
                "top": "0dp",
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
            var btnTnC = new kony.ui.Button({
                "focusSkin": "sknBtn0095e428px",
                "height": "30dp",
                "id": "btnTnC",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.tc.termsandconditions"),
                "top": "-5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var lblRichTxt = new kony.ui.RichText({
                "id": "lblRichTxt",
                "isVisible": true,
                "left": "13.03%",
                "onClick": controller.AS_RichText_f590043a226143d7a49a46c5c9a11200,
                "skin": "sknRtx424242SSP26px",
                "text": "Estoy de acuerdo con todos ios<a href=\"#\">Termnos y condicine</a>\n",
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAgree.add(flxCheckBox, lblAgree, btnTnC, lblRichTxt);
            flxConfirmationDetails.add(flxSeparatortop, flxFromAccount, flxSeparator, flxToPayee, flxSeparatorfrom, segDetails, flxDescription, flxAgree);
            flxTransferAmount.add(flxAmount, flxConfirmationDetails);
            flxConfirmationMain.add(flxTransferAmount);
            var flxbtnConfirm = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxbtnConfirm",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxbtnConfirm.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "48dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_jf9de2a245f04ad79bce9b4de67dc9c9,
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.Confirm"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxbtnConfirm.add(btnContinue);
            this.add(flxHeader, flxConfirmationMain, flxbtnConfirm);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_f1c6ee9e787b4f82bdeecab60260c466,
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
            "addWidgets": addWidgetsfrmBillPayConfirmation,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayConfirmation",
            "init": controller.AS_Form_f58adfd38d30494a833dc7970d5049c7,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d3a623a4cd17415fb5389a49cdd6dccb,
            "preShow": function(eventobject) {
                controller.AS_Form_fc9fa43e93794226be55b07e7d5811c4(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.BillPayConfirmation.Title")
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
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});