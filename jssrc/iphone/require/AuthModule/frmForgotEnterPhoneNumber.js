define("AuthModule/frmForgotEnterPhoneNumber", function() {
    return function(controller) {
        function addWidgetsfrmForgotEnterPhoneNumber() {
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
                    "flxBack": {
                        "isVisible": true,
                        "width": "10%"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": "Let's verify it's you"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.btnRight.onClick = controller.AS_Button_bca535d933294115b6f52552a731b32a;
            customHeader.flxBack.onClick = controller.AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000;
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxEnterPhoneNumTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxEnterPhoneNumTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPhoneNumTitle.setDefaultUnit(kony.flex.DP);
            var lblEnterPhoneNumber = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblEnterPhoneNumber",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Enter Phone Number",
                "textStyle": {},
                "top": "15dp",
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
            flxEnterPhoneNumTitle.add(lblEnterPhoneNumber);
            var flxNumberContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxNumberContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "88dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {}, {});
            flxNumberContent.setDefaultUnit(kony.flex.DP);
            var flxCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxCode.setDefaultUnit(kony.flex.DP);
            var lblCode = new kony.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "lblCode",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg35px",
                "text": "879",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCodeLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxCodeLine",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {}, {});
            flxCodeLine.setDefaultUnit(kony.flex.DP);
            flxCodeLine.add();
            flxCode.add(lblCode, flxCodeLine);
            var flxPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPhoneNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "78%",
                "zIndex": 1
            }, {}, {});
            flxPhoneNumber.setDefaultUnit(kony.flex.DP);
            var lblPhoneNumber = new kony.ui.Label({
                "centerX": "50%",
                "height": "90%",
                "id": "lblPhoneNumber",
                "isVisible": true,
                "maxWidth": "60%",
                "skin": "sknLbl424242SSPReg35px",
                "text": "1234567890123",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxInputPhoneLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInputPhoneLine",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "width": "250dp",
                "zIndex": 2
            }, {}, {});
            flxInputPhoneLine.setDefaultUnit(kony.flex.DP);
            flxInputPhoneLine.add();
            flxPhoneNumber.add(lblPhoneNumber, flxInputPhoneLine);
            flxNumberContent.add(flxCode, flxPhoneNumber);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
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
            flxMainContainer.add(flxEnterPhoneNumTitle, flxNumberContent, btnContinue);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": true,
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
            keypad.btnEight.onClick = controller.AS_Button_b3e6f07f5fd94af9936d40a4296b3d84;
            keypad.btnFive.onClick = controller.AS_Button_bb13965d1d34471f81d20222eec21a42;
            keypad.btnFour.onClick = controller.AS_Button_dd060757283f46f286a7e3cbf0809323;
            keypad.btnNine.onClick = controller.AS_Button_h764c0886ec04401893d7e1513782888;
            keypad.btnOne.onClick = controller.AS_Button_da85512aae1946ab9688fa755a1a2eac;
            keypad.btnSeven.onClick = controller.AS_Button_e88a653f77bc477da4b10a6d9112a219;
            keypad.btnSix.onClick = controller.AS_Button_db2cfa52c55b4832adb14ca9970210d3;
            keypad.btnThree.onClick = controller.AS_Button_f8dd5f33727d433eac544aaf34c67921;
            keypad.btnTwo.onClick = controller.AS_Button_bd4616ab9c574cafb4880155a497c120;
            keypad.btnZero.onClick = controller.AS_Button_i9f4738f679e46ada9a41a0d560981f8;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_ab0be93e0f864bd6a58d9525f5194cec;
            flxKeypad.add(keypad);
            this.add(flxHeader, flxMainContainer, flxKeypad);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_b2f9f9a5d0b54919a080e3d39f382ec8,
            "metaData": {
                "title": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_e9b5d28a7f0c45fb9cf0e35d0825e212,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmForgotEnterPhoneNumber,
            "enabledForIdleTimeout": true,
            "id": "frmForgotEnterPhoneNumber",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b3ab9b1bc8df4031a151bade60516958(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Let's verify it's you"
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
                "translucent": true,
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