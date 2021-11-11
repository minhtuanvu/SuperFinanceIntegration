define("BillPayModule/frmBillPayEnterAccNo", function() {
    return function(controller) {
        function addWidgetsfrmBillPayEnterAccNo() {
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
                "zIndex": 1
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
                        "centerY": "50.29%",
                        "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber"),
                        "left": "14.95%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
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
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxheaderChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxheaderChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf8f8f8",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxheaderChange.setDefaultUnit(kony.flex.DP);
            var lblEnterAccNo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterAccNo",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.EnterAccNo"),
                "textStyle": {},
                "top": "4dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxheaderChange.add(lblEnterAccNo);
            var flxInputAccNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputAccNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "flxBlueFocus",
                "top": "61dp",
                "zIndex": 1
            }, {}, {});
            flxInputAccNo.setDefaultUnit(kony.flex.DP);
            var lblAccountNumber = new kony.ui.Label({
                "height": "40dp",
                "id": "lblAccountNumber",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "sknLbl484848sspReg50px",
                "textStyle": {},
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit1",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit2 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit2",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit3 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit3",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit4 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit4",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit5 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit5",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit6 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit6",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit7 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit7",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit8 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit8",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit9 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit9",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit10 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit10",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit11 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit11",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit12 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit12",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit13 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit13",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit14 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit14",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit15 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit15",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit16 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit16",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit17 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit17",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit18 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit18",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxInputAccNo.add(lblAccountNumber, lblDigit1, lblDigit2, lblDigit3, lblDigit4, lblDigit5, lblDigit6, lblDigit7, lblDigit8, lblDigit9, lblDigit10, lblDigit11, lblDigit12, lblDigit13, lblDigit14, lblDigit15, lblDigit16, lblDigit17, lblDigit18);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxCheckbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxCheckbox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "110dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxCheckbox.setDefaultUnit(kony.flex.DP);
            var imgCheckbox = new kony.ui.Image2({
                "height": "18dp",
                "id": "imgCheckbox",
                "isVisible": true,
                "left": "20dp",
                "onTouchEnd": controller.AS_Image_j07ce39457be4124b1f265f90a34f40e,
                "skin": "slImage",
                "src": "remeberme.png",
                "top": "20dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCheckboxInfo = new kony.ui.Label({
                "id": "lblCheckboxInfo",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPayEnterAccNo.CheckboxInfo"),
                "textStyle": {},
                "top": "20dp",
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
            flxCheckbox.add(imgCheckbox, lblCheckboxInfo);
            flxMain.add(flxheaderChange, flxInputAccNo, btnContinue, flxCheckbox);
            flxMainContainer.add(flxToastDummy, flxMain);
            var flxMainContainerNew = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "id": "flxMainContainerNew",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainerNew.setDefaultUnit(kony.flex.DP);
            var dataEntry = new com.temenos.infinity.dataEntry({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "dataEntry",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "dataEntry": {
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
            dataEntry.lblHeading = "Please enter the account number that appears on your statement or bill";
            dataEntry.lblWord = "";
            dataEntry.btn1 = "{\"text\":\"Continue\",\"action\":{\"level\":\"form\",\"method\":\"onContinueAccountNumber\"}}";
            dataEntry.sknLblHeading = "ICSknLbl424242SSP26px";
            dataEntry.lblDynamicWord = "";
            dataEntry.payeeObjectService = "PayeeObjects";
            dataEntry.imgCheckBoxSelected = "checkboxtick.png";
            dataEntry.tbxInputWord = "{   \"mapping\": \"{$.c.accountNumber}\",   \"placeHolder\": \"Enter account number\",   \"inputMode\": \"Numeric\" }";
            dataEntry.sknLblWord = "ICSknLabel72727215PxNew";
            dataEntry.tbxDynamicInputWord = "[   {     \"category\": [       \"2\"     ],     \"mapping\": \"{$.c.phone}\",     \"inputMode\": \"Numeric\"   },   {     \"category\": [       \"4\"     ],     \"mapping\": \"{$.c.phone}\",     \"inputMode\": \"Numeric\"   } ]";
            dataEntry.maskingEnabled = false;
            dataEntry.payeeObject = "Recipients";
            dataEntry.btn1Edit = "";
            dataEntry.imgCheckBoxUnSelected = "checkboxempty.png";
            dataEntry.skntbxInputWord = "ICSknTbx72727215PxNew";
            dataEntry.dvfConfig = "{   \"Recipients\": {     \"tbxInputWord\": \"MANDATORY\"   } }";
            dataEntry.lblCode = "";
            dataEntry.payeeEDITOperation = "editBillPayPayee";
            dataEntry.tbxInputNotice = "";
            dataEntry.lookUp = "";
            dataEntry.skntbxInputWordFocus = "ICSkntbxFocusBlueNew";
            dataEntry.minFillMapping = "{   \"Recipients\": {     \"tbxInputWord\": \"3\"   } }";
            dataEntry.payeeEDITCriteria = "{   \"payeeId\": \"{$.c.payeeId}\",   \"payeeNickName\": \"{$.c.payeeNickName}\",   \"addressLine1\": \"{$.c.addressLine1}\",   \"addressLine2\": \"{$.c.addressLine2}\",   \"state\": \"{$.c.state}\",   \"zipCode\": \"{$.c.zipCode}\",   \"cityName\": \"{$.c.city}\" }";
            dataEntry.lblCheckBoxInfo = "I don't have an account number associated with this Payee";
            dataEntry.sknBtnAction = "ICSknbtnfocus003e75New";
            dataEntry.payeeEDITIdentifier = "payeeEdit";
            dataEntry.lblErrorPrompt = "DVF Error";
            dataEntry.countryCodeEnabled = false;
            dataEntry.sknBtnActionFocus = "ICSknbtnfocus003e75New";
            dataEntry.customServiceOperation = "getBillPayPayees";
            dataEntry.checkBox = "{   \"action\": {     \"level\": \"Component\",     \"method\": \"checkBoxSelection\"   } }";
            dataEntry.sknInputWordError = "ICSknskntxtSSP424242BorderFF0000Op100Radius2px";
            dataEntry.customServiceCriteria = "{   \"offset\": 0,   \"limit\": 10,   \"sortBy\": \"payeeNickName\",   \"order\": \"asc\",   \"paginationRowLimit\": 10,   \"sortByType\": \"string\" }";
            dataEntry.sknActionButtonBlocked = "ICSknsknBtnBlockedSSPFFFFFF15Px";
            dataEntry.customServiceIdentifier = "customService";
            dataEntry.sknLblLookUp = "ICSknLbl4176a4Reg35px";
            dataEntry.sknLblErrorPrompt = "ICSknLblErrorNew";
            dataEntry.skntbxInputNotice = "ICSknTbx72727215PxNew";
            dataEntry.sknLblCheckBoxInfo = "ICSknLbl424242SSP26px";
            dataEntry.skntbxInputNoticeFocus = "ICSkntbxFocusBlueNew";
            flxMainContainerNew.add(dataEntry);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxF5F6FB",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxKeypad.setDefaultUnit(kony.flex.DP);
            var keypad = new com.kmb.common.keypad({
                "height": "100%",
                "id": "keypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
            keypad.btnEight.onClick = controller.AS_Button_a75e8b5e531d49c9b7edae9c12363d52;
            keypad.btnFive.onClick = controller.AS_Button_d8e20fb2e5664a33886a807e3359666a;
            keypad.btnFour.onClick = controller.AS_Button_i8927e276e284992bbf5cc7110df4f85;
            keypad.btnNine.onClick = controller.AS_Button_d120c5f4681b4d4d87703df00990d819;
            keypad.btnOne.onClick = controller.AS_Button_f5befcc5afe244939f3641d6c84abb5e;
            keypad.btnSeven.onClick = controller.AS_Button_g2f96fecf33b41aeb632f913aa73912a;
            keypad.btnSix.onClick = controller.AS_Button_bb947477cbdb4d2995cf5c9fdd69ab2b;
            keypad.btnThree.onClick = controller.AS_Button_h286c43696d04f52ba3b11c173a60b4f;
            keypad.btnTwo.onClick = controller.AS_Button_d8bdc816124a4c73810dd852e2552b90;
            keypad.btnZero.onClick = controller.AS_Button_je50201fc8e348f28c4f4df881076c18;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_b4b7bf19ad314be29ce6f421ded37a44;
            flxKeypad.add(keypad);
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxMainContainerNew, flxKeypad, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_ib40f50af0604e1395533ae247e280f0,
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
            "addWidgets": addWidgetsfrmBillPayEnterAccNo,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayEnterAccNo",
            "init": controller.AS_Form_ad5cee80de4742f080073e63d24dbbed,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_fb2e14a17ae642f5adf6533df7e4f5ab(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber")
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