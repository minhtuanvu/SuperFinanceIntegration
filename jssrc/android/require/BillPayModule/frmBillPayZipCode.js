define("BillPayModule/frmBillPayZipCode", function() {
    return function(controller) {
        function addWidgetsfrmBillPayZipCode() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.BillPayZipCode.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxZipCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxZipCode",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxZipCode.setDefaultUnit(kony.flex.DP);
            var lblZipCodeTitle = new kony.ui.Label({
                "id": "lblZipCodeTitle",
                "isVisible": true,
                "left": "31dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.ZipCode"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "16dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnContinue = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_j892d8b7a153409b949a744a75ed05dc,
                "right": "20dp",
                "skin": "sknBtnOnBoardingInactive",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "135dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxZipCodeWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxZipCodeWrapper",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "45dp",
                "zIndex": 1
            }, {}, {});
            flxZipCodeWrapper.setDefaultUnit(kony.flex.DP);
            var lblZipCode = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblZipCode",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxZipCodeWrapper.add(lblZipCode);
            var txtZipCode = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtZipCode",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "40dp",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxZipCode.add(lblZipCodeTitle, btnContinue, flxZipCodeWrapper, txtZipCode);
            flxContainer.add(flxZipCode);
            var flxContainerNew = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxContainerNew",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainerNew.setDefaultUnit(kony.flex.DP);
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
            dataEntry.lblHeading = "";
            dataEntry.lblWord = "Zip Code:";
            dataEntry.btn1 = "{\"text\":\"Continue\",\"action\":{\"level\":\"form\",\"method\":\"onContinueZipCode\"}}";
            dataEntry.sknLblHeading = "ICSknLbl424242SSP26px";
            dataEntry.lblDynamicWord = "[   {     \"heading\": \"Please enter your phone number.\",     \"text\": \"Phone Number:\",     \"category\": [       \"2\"     ]   },   {     \"heading\": \"Please enter your policy number.\",     \"category\": [       \"4\"     ]   } ]";
            dataEntry.payeeObjectService = "PayeeObjects";
            dataEntry.imgCheckBoxSelected = "";
            dataEntry.tbxInputWord = "{   \"mapping\": \"{$.c.zipCode}\",   \"placeHolder\": \"Enter  the zip code\",   \"inputMode\": \"Numeric\" }";
            dataEntry.sknLblWord = "ICSknLabel72727215PxNew";
            dataEntry.tbxDynamicInputWord = "[   {     \"category\": [       \"2\"     ],     \"mapping\": \"{$.c.phone}\",     \"inputMode\": \"Numeric\"   },   {     \"category\": [       \"4\"     ],     \"mapping\": \"{$.c.phone}\",     \"inputMode\": \"Numeric\"   } ]";
            dataEntry.maskingEnabled = false;
            dataEntry.payeeObject = "Recipients";
            dataEntry.btn1Edit = "";
            dataEntry.imgCheckBoxUnSelected = "";
            dataEntry.skntbxInputWord = "ICSknTbx72727215PxNew";
            dataEntry.dvfConfig = "{   \"Recipients\": {     \"tbxInputWord\": \"MANDATORY\"   } }";
            dataEntry.lblCode = "Code:";
            dataEntry.payeeEDITOperation = "editBillPayPayee";
            dataEntry.tbxInputNotice = "";
            dataEntry.lookUp = "{    \"text\":\"Look Up\",    \"action\":{       \"level\":\"Form\",       \"method\":\"lookUpAction\"    } }";
            dataEntry.skntbxInputWordFocus = "ICSkntbxFocusBlueNew";
            dataEntry.minFillMapping = "{   \"Recipients\": {     \"tbxInputWord\": \"3\"   } }";
            dataEntry.payeeEDITCriteria = "{   \"payeeId\": \"{$.c.payeeId}\",   \"payeeNickName\": \"{$.c.payeeNickName}\",   \"addressLine1\": \"{$.c.addressLine1}\",   \"addressLine2\": \"{$.c.addressLine2}\",   \"state\": \"{$.c.state}\",   \"zipCode\": \"{$.c.zipCode}\",   \"cityName\": \"{$.c.city}\" }";
            dataEntry.lblCheckBoxInfo = "";
            dataEntry.sknBtnAction = "ICSknbtnfocus003e75New";
            dataEntry.payeeEDITIdentifier = "payeeEdit";
            dataEntry.lblErrorPrompt = "DVF Error";
            dataEntry.countryCodeEnabled = true;
            dataEntry.sknBtnActionFocus = "ICSknbtnfocus003e75New";
            dataEntry.customServiceOperation = "getBillPayPayees";
            dataEntry.checkBox = "";
            dataEntry.sknInputWordError = "ICSknskntxtSSP424242BorderFF0000Op100Radius2px";
            dataEntry.customServiceCriteria = "{   \"offset\": 0,   \"limit\": 10,   \"sortBy\": \"payeeNickName\",   \"order\": \"asc\",   \"paginationRowLimit\": 10,   \"sortByType\": \"string\" }";
            dataEntry.sknActionButtonBlocked = "ICSknsknBtnBlockedSSPFFFFFF15Px";
            dataEntry.customServiceIdentifier = "customService";
            dataEntry.sknLblLookUp = "ICSknLbl4176a4Reg35px";
            dataEntry.sknLblErrorPrompt = "ICSknLblErrorNew";
            dataEntry.skntbxInputNotice = "ICSknTbx72727215PxNew";
            dataEntry.sknLblCheckBoxInfo = "ICSknLbl424242SSP26px";
            dataEntry.skntbxInputNoticeFocus = "ICSkntbxFocusBlueNew";
            flxContainerNew.add(dataEntry);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
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
            keypad.btnEight.onClick = controller.AS_Button_g79c057e67b940f08ae62e85037b3d7c;
            keypad.btnFive.onClick = controller.AS_Button_d2db9f9b94f14a6e982315e3657dd4f8;
            keypad.btnFour.onClick = controller.AS_Button_hbd61728cbfb4ae3b1dbad081ebc11c7;
            keypad.btnNine.onClick = controller.AS_Button_f5f4b4bfc5ae438ba3a297f7862e0c0e;
            keypad.btnOne.onClick = controller.AS_Button_b6d9ed0910de488da699b3fc69b0b954;
            keypad.btnSeven.onClick = controller.AS_Button_d652f0c1c6be4b80ab7faa7d85d0fe78;
            keypad.btnSix.onClick = controller.AS_Button_e3b9dcb8159b49b8893a8496fa196785;
            keypad.btnThree.onClick = controller.AS_Button_g82e2a2670b2436184fe08aa47dd8314;
            keypad.btnTwo.onClick = controller.AS_Button_jf4ef4f99b5d488fac606e39e82100d4;
            keypad.btnZero.onClick = controller.AS_Button_j0682136a1ed44d988e59e5db4710e9a;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_hd917e07fcb0484fa26301a7bbb6e5ec;
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
                "zIndex": 201
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
                "zIndex": 10,
                "overrides": {
                    "customPopup": {
                        "height": "100%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxContainer, flxContainerNew, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmBillPayZipCode,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayZipCode",
            "init": controller.AS_Form_j4db11bf3e85415183ec2ec8587b4f1b,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_c2ee012baa1542949176264707f41247(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.BillPayZipCode.Title")
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