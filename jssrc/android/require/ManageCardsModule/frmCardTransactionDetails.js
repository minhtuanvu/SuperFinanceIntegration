define("ManageCardsModule/frmCardTransactionDetails", function() {
    return function(controller) {
        function addWidgetsfrmCardTransactionDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton_1.png"
                    },
                    "imgSearch": {
                        "src": "info.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.transaction.transactionDetails")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxCardTransactionDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxCardTransactionDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxCardTransactionDetails.setDefaultUnit(kony.flex.DP);
            var flxDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxTransactionAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionAmount.setDefaultUnit(kony.flex.DP);
            var lblTransactionAmount = new kony.ui.Label({
                "id": "lblTransactionAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPLight20px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionAmountValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblTransactionAmountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl4176a4SSPSB18px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var lblTransactionSuccess = new kony.ui.Label({
                "id": "lblTransactionSuccess",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknlblSSPR22px",
                "text": "Successful",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTransactionAmount.add(lblTransactionAmount, lblTransactionAmountValue, flxSeperator2, lblTransactionSuccess);
            var flxTransactionDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionDescription",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionDescription.setDefaultUnit(kony.flex.DP);
            var lblTransactionDescription = new kony.ui.Label({
                "id": "lblTransactionDescription",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.Description"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionDescriptionValue = new kony.ui.Label({
                "id": "lblTransactionDescriptionValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxTransactionDescription.add(lblTransactionDescription, lblTransactionDescriptionValue, flxSeperator);
            var flxTransactionDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionDate.setDefaultUnit(kony.flex.DP);
            var lblTransactionDate = new kony.ui.Label({
                "id": "lblTransactionDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.TransactionDate"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionDateValue = new kony.ui.Label({
                "id": "lblTransactionDateValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxTransactionDate.add(lblTransactionDate, lblTransactionDateValue, flxSeperator1);
            var flxTransactionTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionTime",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionTime.setDefaultUnit(kony.flex.DP);
            var lblTransactionTime = new kony.ui.Label({
                "id": "lblTransactionTime",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.TransactionTime"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionTimeValue = new kony.ui.Label({
                "id": "lblTransactionTimeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator9.setDefaultUnit(kony.flex.DP);
            flxSeperator9.add();
            flxTransactionTime.add(lblTransactionTime, lblTransactionTimeValue, flxSeperator9);
            var flxTransactionMerchantAddressName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionMerchantAddressName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionMerchantAddressName.setDefaultUnit(kony.flex.DP);
            var lblTransactionMerchantAddressName = new kony.ui.Label({
                "id": "lblTransactionMerchantAddressName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.MerchantAddressName"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionMerchantAddressNameValue = new kony.ui.Label({
                "id": "lblTransactionMerchantAddressNameValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            flxTransactionMerchantAddressName.add(lblTransactionMerchantAddressName, lblTransactionMerchantAddressNameValue, flxSeperator3);
            var flxTransactionMerchantCity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionMerchantCity",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionMerchantCity.setDefaultUnit(kony.flex.DP);
            var lblTransactionMerchantCity = new kony.ui.Label({
                "id": "lblTransactionMerchantCity",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.MerchantCity"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionMerchantCityValue = new kony.ui.Label({
                "id": "lblTransactionMerchantCityValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            flxTransactionMerchantCity.add(lblTransactionMerchantCity, lblTransactionMerchantCityValue, flxSeperator4);
            var flxMerchantCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxMerchantCategory",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMerchantCategory.setDefaultUnit(kony.flex.DP);
            var lblMerchantCategory = new kony.ui.Label({
                "id": "lblMerchantCategory",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.Category"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMerchantCategoryValue = new kony.ui.Label({
                "id": "lblMerchantCategoryValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator5.setDefaultUnit(kony.flex.DP);
            flxSeperator5.add();
            flxMerchantCategory.add(lblMerchantCategory, lblMerchantCategoryValue, flxSeperator5);
            var flxTransactionStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionStatus",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionStatus.setDefaultUnit(kony.flex.DP);
            var lblTransactionStatus = new kony.ui.Label({
                "id": "lblTransactionStatus",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.TransactionStatus"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionStatusValue = new kony.ui.Label({
                "id": "lblTransactionStatusValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator6.setDefaultUnit(kony.flex.DP);
            flxSeperator6.add();
            flxTransactionStatus.add(lblTransactionStatus, lblTransactionStatusValue, flxSeperator6);
            var flxTransactionType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionType.setDefaultUnit(kony.flex.DP);
            var lblTransactionType = new kony.ui.Label({
                "id": "lblTransactionType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.transactionType"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionTypeValue = new kony.ui.Label({
                "id": "lblTransactionTypeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator7.setDefaultUnit(kony.flex.DP);
            flxSeperator7.add();
            flxTransactionType.add(lblTransactionType, lblTransactionTypeValue, flxSeperator7);
            var flxTransactionCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionCategory",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionCategory.setDefaultUnit(kony.flex.DP);
            var lblTransactionCategory = new kony.ui.Label({
                "id": "lblTransactionCategory",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.TransactionCategory"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionCategoryValue = new kony.ui.Label({
                "id": "lblTransactionCategoryValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator8.setDefaultUnit(kony.flex.DP);
            flxSeperator8.add();
            flxTransactionCategory.add(lblTransactionCategory, lblTransactionCategoryValue, flxSeperator8);
            var flxTransactionReferenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionReferenceNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionReferenceNumber.setDefaultUnit(kony.flex.DP);
            var lblTransactionReferenceNumber = new kony.ui.Label({
                "id": "lblTransactionReferenceNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.referenceNo"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionReferenceNumberValue = new kony.ui.Label({
                "id": "lblTransactionReferenceNumberValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator10 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator10",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator10.setDefaultUnit(kony.flex.DP);
            flxSeperator10.add();
            flxTransactionReferenceNumber.add(lblTransactionReferenceNumber, lblTransactionReferenceNumberValue, flxSeperator10);
            var flxTransactionExchangeRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionExchangeRate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionExchangeRate.setDefaultUnit(kony.flex.DP);
            var lblTransactionExchangeRate = new kony.ui.Label({
                "id": "lblTransactionExchangeRate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.ExchangeRate"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionExchangeRateValue = new kony.ui.Label({
                "id": "lblTransactionExchangeRateValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator11 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator11",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator11.setDefaultUnit(kony.flex.DP);
            flxSeperator11.add();
            flxTransactionExchangeRate.add(lblTransactionExchangeRate, lblTransactionExchangeRateValue, flxSeperator11);
            var flxExchangeCurrency = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxExchangeCurrency",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExchangeCurrency.setDefaultUnit(kony.flex.DP);
            var lblExchangeCurrency = new kony.ui.Label({
                "id": "lblExchangeCurrency",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.ExchangeCurrency"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblExchangeCurrencyValue = new kony.ui.Label({
                "id": "lblExchangeCurrencyValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator12 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator12",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator12.setDefaultUnit(kony.flex.DP);
            flxSeperator12.add();
            flxExchangeCurrency.add(lblExchangeCurrency, lblExchangeCurrencyValue, flxSeperator12);
            var flxExchangeAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxExchangeAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExchangeAmount.setDefaultUnit(kony.flex.DP);
            var lblExchangeAmount = new kony.ui.Label({
                "id": "lblExchangeAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.ExchangeAmount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblExchangeAmountValue = new kony.ui.Label({
                "id": "lblExchangeAmountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator13 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator13",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator13.setDefaultUnit(kony.flex.DP);
            flxSeperator13.add();
            flxExchangeAmount.add(lblExchangeAmount, lblExchangeAmountValue, flxSeperator13);
            var flxTaxPercentage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTaxPercentage",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTaxPercentage.setDefaultUnit(kony.flex.DP);
            var lblTaxPercentage = new kony.ui.Label({
                "id": "lblTaxPercentage",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.TaxPercentage"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTaxPercentageValue = new kony.ui.Label({
                "id": "lblTaxPercentageValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator14 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator14",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator14.setDefaultUnit(kony.flex.DP);
            flxSeperator14.add();
            flxTaxPercentage.add(lblTaxPercentage, lblTaxPercentageValue, flxSeperator14);
            var flxTransactionTaxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTransactionTaxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionTaxAmount.setDefaultUnit(kony.flex.DP);
            var lblTransactionTaxAmount = new kony.ui.Label({
                "id": "lblTransactionTaxAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.TransactionTaxAmount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionTaxAmountValue = new kony.ui.Label({
                "id": "lblTransactionTaxAmountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator15 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator15",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "8dp",
                "width": "93%",
                "zIndex": 100
            }, {}, {});
            flxSeperator15.setDefaultUnit(kony.flex.DP);
            flxSeperator15.add();
            flxTransactionTaxAmount.add(lblTransactionTaxAmount, lblTransactionTaxAmountValue, flxSeperator15);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.disputeTransaction"),
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDetails.add(flxTransactionAmount, flxTransactionDescription, flxTransactionDate, flxTransactionTime, flxTransactionMerchantAddressName, flxTransactionMerchantCity, flxMerchantCategory, flxTransactionStatus, flxTransactionType, flxTransactionCategory, flxTransactionReferenceNumber, flxTransactionExchangeRate, flxExchangeCurrency, flxExchangeAmount, flxTaxPercentage, flxTransactionTaxAmount, btnContinue);
            flxCardTransactionDetails.add(flxDetails);
            this.add(flxHeader, flxCardTransactionDetails);
        };
        return [{
            "addWidgets": addWidgetsfrmCardTransactionDetails,
            "enabledForIdleTimeout": true,
            "id": "frmCardTransactionDetails",
            "init": controller.AS_Form_gba156e24db54d5b882d3e57ca6f8b07,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_eccaef9d08ea45a08f3cdf836af473da(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Transaction Details"
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