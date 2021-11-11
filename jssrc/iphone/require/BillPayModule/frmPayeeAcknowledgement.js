define("BillPayModule/frmPayeeAcknowledgement", function() {
    return function(controller) {
        function addWidgetsfrmPayeeAcknowledgement() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                "zIndex": 1,
                "overrides": {
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "customHeader": {
                        "height": "100%",
                        "zIndex": 1
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": "Acknowledgement"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "80dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": false,
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
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxToastDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxToastDummy",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxfafafa",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var flxAccDetailContainerCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccDetailContainerCC",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxfafafa",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxAccDetailContainerCC.setDefaultUnit(kony.flex.DP);
            var flxPayeeFullName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxPayeeFullName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPayeeFullName.setDefaultUnit(kony.flex.DP);
            var lblPayeeFullName = new kony.ui.Label({
                "id": "lblPayeeFullName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayeeFullName"),
                "textStyle": {},
                "top": "6dp",
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
            var lblPayeeFullNameValue = new kony.ui.Label({
                "bottom": "4dp",
                "id": "lblPayeeFullNameValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "John Bailey",
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
            var flxAccountType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "4dp",
                "clipBounds": false,
                "height": "17dp",
                "id": "flxAccountType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "17dp",
                "zIndex": 10000
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
            flxPayeeFullName.add(lblPayeeFullName, lblPayeeFullNameValue, flxAccountType);
            var flxAccNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccNo.setDefaultUnit(kony.flex.DP);
            var lblAccNo = new kony.ui.Label({
                "id": "lblAccNo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber"),
                "textStyle": {},
                "top": "6dp",
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
            var lblAccNoValue = new kony.ui.Label({
                "bottom": "4dp",
                "id": "lblAccNoValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "XXXX-XXXX-XXXX-XXXX",
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
            flxAccNo.add(lblAccNo, lblAccNoValue);
            var flxPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxPhoneNumber",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPhoneNumber.setDefaultUnit(kony.flex.DP);
            var lblPhoneNumberKey = new kony.ui.Label({
                "id": "lblPhoneNumberKey",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.phoneNo"),
                "textStyle": {},
                "top": "6dp",
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
            var lblPhoneNumberValue = new kony.ui.Label({
                "bottom": "6dp",
                "id": "lblPhoneNumberValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "950-238-3965",
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
            flxPhoneNumber.add(lblPhoneNumberKey, lblPhoneNumberValue);
            var flxRelationNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRelationNumber",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRelationNumber.setDefaultUnit(kony.flex.DP);
            var lblRelationNumberKey = new kony.ui.Label({
                "id": "lblRelationNumberKey",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.RelationNumber"),
                "textStyle": {},
                "top": "6dp",
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
            var lblRelationNumberValue = new kony.ui.Label({
                "bottom": "6dp",
                "id": "lblRelationNumberValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "96325874123",
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
            flxRelationNumber.add(lblRelationNumberKey, lblRelationNumberValue);
            var flxPolicyNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxPolicyNumber",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPolicyNumber.setDefaultUnit(kony.flex.DP);
            var lblPolicyNumberKey = new kony.ui.Label({
                "id": "lblPolicyNumberKey",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.PolicyNumber"),
                "textStyle": {},
                "top": "6dp",
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
            var lblPolicyNumberValue = new kony.ui.Label({
                "bottom": "6dp",
                "id": "lblPolicyNumberValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "21XX-XXXX-XXXX-7868",
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
            flxPolicyNumber.add(lblPolicyNumberKey, lblPolicyNumberValue);
            var flxPayeeAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPayeeAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPayeeAddress.setDefaultUnit(kony.flex.DP);
            var lblPayeeAddress = new kony.ui.Label({
                "id": "lblPayeeAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayeeAddress"),
                "textStyle": {},
                "top": "6dp",
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
            var lblPayeeAddressValue = new kony.ui.Label({
                "bottom": "4dp",
                "id": "lblPayeeAddressValue",
                "isVisible": true,
                "left": "20dp",
                "right": 20,
                "skin": "sknLbl424242SSP26px",
                "text": "535 Freda Apt, Maryland, Austin, US, 728292",
                "textStyle": {},
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxPayeeAddress.add(lblPayeeAddress, lblPayeeAddressValue);
            var flxContract = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxContract",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContract.setDefaultUnit(kony.flex.DP);
            var flxLinkedCustomer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxLinkedCustomer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxLinkedCustomer.setDefaultUnit(kony.flex.DP);
            var lblLinkedWith = new kony.ui.Label({
                "id": "lblLinkedWith",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Linked With",
                "textStyle": {},
                "top": "6dp",
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
            var lblLinkedCustomer = new kony.ui.Label({
                "bottom": "4dp",
                "id": "lblLinkedCustomer",
                "isVisible": true,
                "left": "20dp",
                "right": 20,
                "skin": "sknLbl424242SSP26px",
                "text": "0 Customers ID",
                "textStyle": {},
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxLinkedCustomer.add(lblLinkedWith, lblLinkedCustomer);
            var flxEdit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxEdit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxEdit.setDefaultUnit(kony.flex.DP);
            var lblEdit = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50%",
                "id": "lblEdit",
                "isVisible": true,
                "skin": "sknLblCheckNowLink",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Edit"),
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
            flxEdit.add(lblEdit);
            flxContract.add(flxLinkedCustomer, flxEdit);
            var flxDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDummy.setDefaultUnit(kony.flex.DP);
            flxDummy.add();
            flxAccDetailContainerCC.add(flxPayeeFullName, flxAccNo, flxPhoneNumber, flxRelationNumber, flxPolicyNumber, flxPayeeAddress, flxContract, flxDummy);
            var lblNameOnBill = new kony.ui.Label({
                "id": "lblNameOnBill",
                "isVisible": true,
                "left": "28dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.NameOnBill"),
                "textStyle": {},
                "top": "24dp",
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
            var txtNameOnBill = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtNameOnBill",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": null,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "5dp",
                "width": "89%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [8, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxBordere3e3e3A0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblAccNickName = new kony.ui.Label({
                "id": "lblAccNickName",
                "isVisible": true,
                "left": "28dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.AccNickName"),
                "textStyle": {},
                "top": "20dp",
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
            var txtAccNickName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtAccNickName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": null,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "5dp",
                "width": "89%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [8, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxBordere3e3e3A0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxMainContainer.add(flxToastDummy, flxAccDetailContainerCC, lblNameOnBill, txtNameOnBill, lblAccNickName, txtAccNickName);
            var flxMainContainerNew = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainerNew",
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
            flxMainContainerNew.setDefaultUnit(kony.flex.DP);
            var payeeVerifyAck = new com.temenos.infinity.payeeVerifyAck({
                "height": "100%",
                "id": "payeeVerifyAck",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "payeeVerifyAck": {
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
            payeeVerifyAck.lblField1 = "Payee Full Name:";
            payeeVerifyAck.sknlblSeparator = "ICSknlblSeparatorNew";
            payeeVerifyAck.payeeObjectService = "PayeeObjects";
            payeeVerifyAck.ackPage = true;
            payeeVerifyAck.minFillMapping = "{   \"Recipients\": {     \"txtEditValue1\": \"5\",     \"txtEditValue2\": \"5\"   } }";
            payeeVerifyAck.lblField1Edit = "";
            payeeVerifyAck.lblField2 = "Account Number:";
            payeeVerifyAck.sknlblField = "ICSknLabel72727215PxNew";
            payeeVerifyAck.payeeObject = "Recipients";
            payeeVerifyAck.imgAcknowledgementError = "error_1.png";
            payeeVerifyAck.dvfConfig = "{   \"Recipients\": {     \"txtEditValue1\": \"MANDATORY\",     \"txtEditValue2\": \"MANDATORY\"   } }";
            payeeVerifyAck.lblField2Edit = "";
            payeeVerifyAck.lblField3 = "[   {     \"text\": \"Phone Number:\",     \"category\": [       \"2\"     ]   },   {     \"text\":\"Policy Number:\",     \"category\": [       \"4\"     ]   } ]";
            payeeVerifyAck.sknlblFieldValue = "ICSknLbl424242SSP26pxNew";
            payeeVerifyAck.payeeCREATEOperation = "createBillPayPayee";
            payeeVerifyAck.lblAcknowledgementError = "Failed to add the payee";
            payeeVerifyAck.lblField3Edit = "";
            payeeVerifyAck.lblField4 = "Payee Address:";
            payeeVerifyAck.sknBtnAction1 = "ICSknbtnfocus003e75New";
            payeeVerifyAck.payeeCREATECriteria = "{   \"accountNumber\": \"{$.c.accountNumber}\",   \"street\": \"{$.c.street}\",   \"addressLine2\": \"{$.c.addressLine2}\",   \"cityName\": \"{$.c.cityName}\",   \"payeeNickName\": \"{$.c.payeeNickName}\",   \"zipCode\": \"{$.c.zipCode}\",   \"companyName\": \"{$.c.companyName}\",   \"isBusinessPayee\": \"{$.c.isBusinessPayee}\",   \"nameOnBill\": \"{$.c.nameOnBill}\",   \"billerId\": \"{$.c.billerId}\",   \"phone\": \"{$.c.phone}\",   \"state\": \"{$.c.state}\",   \"notes\": \"{$.c.notes}\",   \"cif\": \"{$.c.cif}\" }";
            payeeVerifyAck.imgAcknowledgementSuccess = "confirmation_2.png";
            payeeVerifyAck.lblField4Edit = "";
            payeeVerifyAck.lblField5 = "Paying for:";
            payeeVerifyAck.sknBtnActionFocus1 = "ICSknbtnfocus003e75New";
            payeeVerifyAck.payeeCREATEIdentifier = "payeeCreate";
            payeeVerifyAck.lblAcknowledgementSuccess = "Payee was added Successfully";
            payeeVerifyAck.lblField5Edit = "";
            payeeVerifyAck.lblField6 = "Account Nickname:";
            payeeVerifyAck.sknEditLblField = "ICSknLabel72727215PxNew";
            payeeVerifyAck.payeeEDITOperation = "editBillPayPayee";
            payeeVerifyAck.lblReference = "Reference Number";
            payeeVerifyAck.lblField6Edit = "";
            payeeVerifyAck.lblFieldValue1 = "{   \"mapping\": \"{$.c.companyName}\",   \"mask\": \"false\" }";
            payeeVerifyAck.sknTxtValue = "sknTbx424242SSPRegular28px";
            payeeVerifyAck.payeeEDITCriteria = "{   \"payeeId\": \"{$.c.payeeId}\",   \"payeeNickName\": \"{$.c.payeeNickName}\",   \"addressLine1\": \"{$.c.addressLine1}\",   \"addressLine2\": \"{$.c.addressLine2}\",   \"state\": \"{$.c.state}\",   \"zipCode\": \"{$.c.zipCode}\",   \"cityName\": \"{$.c.city}\" }";
            payeeVerifyAck.lblReferenceValue = "{\"mapping\":\"{$.c.payeeId}\"}";
            payeeVerifyAck.lblField7Edit = "";
            payeeVerifyAck.lblFieldValue2 = "{   \"mapping\": \"{$.c.accountNumber}\",   \"mask\": \"true\" }";
            payeeVerifyAck.sknNonEditbaleContainer = "ICSknFlxfafafaNew";
            payeeVerifyAck.payeeEDITIdentifier = "payeeEdit";
            payeeVerifyAck.btnError = "{   \"text\": \"Close\",   \"action\": {     \"level\": \"form\",     \"method\": \"closeAck\"   } }";
            payeeVerifyAck.lblFieldValue3 = "{   \"mapping\": \"{$.c.phone}\",   \"mask\": \"false\" }";
            payeeVerifyAck.sknBtnAction2 = "ICSknBtnfffffBlueBorderNew";
            payeeVerifyAck.customCREATEOperation = "CreateBillPayPayee";
            payeeVerifyAck.lblFieldValue4 = "{ \"mapping\": \"{$.c.street}\" }";
            payeeVerifyAck.sknBtnActionFocus2 = "ICSknbtnfocus003e75New";
            payeeVerifyAck.customCREATECriteria = "{   \"accountNumber\": \"{$.c.accountNumber}\",   \"street\": \"{$.c.street}\",   \"addressLine2\": \"{$.c.addressLine2}\",   \"cityName\": \"{$.c.cityName}\",   \"payeeNickName\": \"{$.c.payeeNickName}\",   \"zipCode\": \"{$.c.zipCode}\",   \"companyName\": \"{$.c.companyName}\",   \"isBusinessPayee\": \"{$.c.isBusinessPayee}\",   \"nameOnBill\": \"{$.c.nameOnBill}\",   \"billerId\": \"{$.c.billerId}\",   \"phone\": \"{$.c.phone}\",   \"state\": \"{$.c.state}\",   \"notes\": \"{$.c.notes}\" }";
            payeeVerifyAck.lblFieldValue5 = "{   \"mapping\": \"{$.c.nameOnBill}\",   \"mask\": \"false\",   \"placeHolder\" :\"Paying for\" }";
            payeeVerifyAck.sknlblAcknowledgment = "ICSknBlackSemibold24PxNew";
            payeeVerifyAck.customCREATEIdentifier = "payeeCreate";
            payeeVerifyAck.lblFieldValue6 = "{   \"mapping\": \"{$.c.payeeNickName}\",   \"mask\": \"false\",   \"placeHolder\" :\"Paying for\" }";
            payeeVerifyAck.sknlblReference = "ICSknBlack20PxNew";
            payeeVerifyAck.btn1 = "{   \"text\": \"Make a Bill Payment\",   \"action\": {     \"level\": \"form\",     \"method\": \"makeABillPayment\"   } }";
            payeeVerifyAck.sknlblReferenceValue = "ICSknBlack20PxNew";
            payeeVerifyAck.btn2 = "{   \"text\": \"All Payee\",   \"action\": {     \"level\": \"form\",     \"method\": \"allPayees\"   } }";
            payeeVerifyAck.sknBtnError = "ICSknBtn003E75FFFFFF15px";
            payeeVerifyAck.lblEditField1 = "";
            payeeVerifyAck.sknTextBoxError = "ICSknskntxtSSP424242BorderFF0000Op100Radius2px";
            payeeVerifyAck.txtEditValue1 = "";
            payeeVerifyAck.sknTxtboxFocus = "ICSknTxt003E75BdrRadius3PX";
            payeeVerifyAck.lblEditField2 = "";
            payeeVerifyAck.txtEditValue2 = "";
            payeeVerifyAck.lblField7 = "Linked with:";
            payeeVerifyAck.lblFieldValue7 = "{   \"mapping\": \"{$.c.selectedCustomersWithSeparatorSuffix}\",   \"mask\": \"false\" }";
            flxMainContainerNew.add(payeeVerifyAck);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.ConfirmAddPayee"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
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
            this.add(flxHeader, flxMainContainer, flxMainContainerNew, btnContinue, flxPopup);
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
            "addWidgets": addWidgetsfrmPayeeAcknowledgement,
            "enabledForIdleTimeout": true,
            "id": "frmPayeeAcknowledgement",
            "init": controller.AS_Form_db7c1a4ab2ca4ee3b1e9d721f9652479,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_ab1bbc53e7f247118827683a8209ed44(eventobject);
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
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
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