define("TransferModule/frmManageTransferRecipientInfo", function() {
    return function(controller) {
        function addWidgetsfrmManageTransferRecipientInfo() {
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
                "isVisible": true,
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
                        "isVisible": true,
                        "right": "20dp",
                        "text": "EDIT"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "left": 0,
                        "text": "Singh...9121"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": 0,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "70%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
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
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAccounts.setDefaultUnit(kony.flex.DP);
            var lblBankName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBankName",
                "isVisible": true,
                "left": "23dp",
                "skin": "sknLbla0a0a022px",
                "text": "Bank of America",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccountBal = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountBal",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "Savings Account",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "35%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgBank = new kony.ui.Image2({
                "centerY": "50%",
                "height": "24dp",
                "id": "imgBank",
                "isVisible": false,
                "left": "23dp",
                "skin": "slImage",
                "src": "bankofamerica.png",
                "width": "24dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
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
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxAccounts.add(lblBankName, lblAccountBal, imgBank, flxSeparator);
            var lblRecipientNameTitle = new kony.ui.Label({
                "id": "lblRecipientNameTitle",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.Manage.RecipientName"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRecipientNameValue = new kony.ui.Label({
                "id": "lblRecipientNameValue",
                "isVisible": true,
                "left": "23dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Jimmy Sherman",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparatorRecipientName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorRecipientName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorRecipientName.setDefaultUnit(kony.flex.DP);
            flxSeparatorRecipientName.add();
            var lblAccountNumber = new kony.ui.Label({
                "id": "lblAccountNumber",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknLbla0a0a022px",
                "text": "Account Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccountNumberValue = new kony.ui.Label({
                "id": "lblAccountNumberValue",
                "isVisible": true,
                "left": "23dp",
                "skin": "sknLbl424242SSP26px",
                "text": "063-709-0654",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparatorAccountNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorAccountNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorAccountNumber.setDefaultUnit(kony.flex.DP);
            flxSeparatorAccountNumber.add();
            var lblAccountType = new kony.ui.Label({
                "id": "lblAccountType",
                "isVisible": false,
                "left": "22dp",
                "skin": "sknLbla0a0a022px",
                "text": "Account Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccountTypeValue = new kony.ui.Label({
                "id": "lblAccountTypeValue",
                "isVisible": false,
                "left": "23dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Jimmy School Friend",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparatorAccountType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorAccountType",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorAccountType.setDefaultUnit(kony.flex.DP);
            flxSeparatorAccountType.add();
            var lblRoutingNumber = new kony.ui.Label({
                "id": "lblRoutingNumber",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.Manage.RoutingNumber"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRoutingNumberValue = new kony.ui.Label({
                "id": "lblRoutingNumberValue",
                "isVisible": true,
                "left": "23dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Jimmy School Friend",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparatorRounteNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorRounteNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorRounteNo.setDefaultUnit(kony.flex.DP);
            flxSeparatorRounteNo.add();
            var lblBankBranch = new kony.ui.Label({
                "id": "lblBankBranch",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknLbla0a0a022px",
                "text": "Bank Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBankBranchValue = new kony.ui.Label({
                "id": "lblBankBranchValue",
                "isVisible": true,
                "left": "23dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Jimmy School Friend",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparatorBankName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorBankName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxf1f1f1",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorBankName.setDefaultUnit(kony.flex.DP);
            flxSeparatorBankName.add();
            var lblNickName = new kony.ui.Label({
                "id": "lblNickName",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblNickNameValue = new kony.ui.Label({
                "id": "lblNickNameValue",
                "isVisible": true,
                "left": "23dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Jimmy School Friend",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparatorNickname = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorNickname",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorNickname.setDefaultUnit(kony.flex.DP);
            flxSeparatorNickname.add();
            var lblLinkedWith = new kony.ui.Label({
                "id": "lblLinkedWith",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknLbla0a0a022px",
                "text": "Linked With",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLinkedWithValue = new kony.ui.Label({
                "id": "lblLinkedWithValue",
                "isVisible": true,
                "left": "23dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0 Customer IDs",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparatorLinkedWith = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorLinkedWith",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorLinkedWith.setDefaultUnit(kony.flex.DP);
            flxSeparatorLinkedWith.add();
            flxMainContainer.add(flxShadow, flxAccounts, lblRecipientNameTitle, lblRecipientNameValue, flxSeparatorRecipientName, lblAccountNumber, lblAccountNumberValue, flxSeparatorAccountNumber, lblAccountType, lblAccountTypeValue, flxSeparatorAccountType, lblRoutingNumber, lblRoutingNumberValue, flxSeparatorRounteNo, lblBankBranch, lblBankBranchValue, flxSeparatorBankName, lblNickName, lblNickNameValue, flxSeparatorNickname, lblLinkedWith, lblLinkedWithValue, flxSeparatorLinkedWith);
            var flxButtonContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "140dp",
                "id": "flxButtonContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxButtonContainer.setDefaultUnit(kony.flex.DP);
            var btnDeleteRecipient = new kony.ui.Button({
                "bottom": "21dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnDeleteRecipient",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.Manage.DeleteRecipient"),
                "top": "20dp",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnTransfer = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnTransfer",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.common.transfer"),
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtonContainer.add(btnDeleteRecipient, btnTransfer);
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
            var flxEditOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEditOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxEditOptions.setDefaultUnit(kony.flex.DP);
            var flxEditOptionsActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "7%",
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxEditOptionsActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxEditOptionsActions.setDefaultUnit(kony.flex.DP);
            var btnEditRecipientDetails = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnEditRecipientDetails",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "Edit Recipient Details",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSeparatorPopupDocuments = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeparatorPopupDocuments",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknLbl0095e4SSPRegular26px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-1dp",
                "width": "105%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnEditLinkedCustomer = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnEditLinkedCustomer",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "Edit Linked Customer ID",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEditOptionsActions.add(btnEditRecipientDetails, lblSeparatorPopupDocuments, btnEditLinkedCustomer);
            flxEditOptions.add(flxEditOptionsActions);
            this.add(flxHeader, flxMainContainer, flxButtonContainer, flxPopup, flxEditOptions);
        };
        return [{
            "addWidgets": addWidgetsfrmManageTransferRecipientInfo,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmManageTransferRecipientInfo",
            "init": controller.AS_Form_fcc1cb4f9c1e4b1b8d36360785dd6d8f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b5c239a3f464495c961b0c9d9c4256c9(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Singh...9121"
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