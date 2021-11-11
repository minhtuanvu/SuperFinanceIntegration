define("BillPayModule/frmBillPayEditNickName", function() {
    return function(controller) {
        function addWidgetsfrmBillPayEditNickName() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
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
                        "centerX": "viz.val_cleared",
                        "left": "15%",
                        "text": "Edit Nickname"
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
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknTransparentBs",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxToastDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "65dp",
                "id": "flxToastDummy",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknScrFlxffffff0d1e21161723c43",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var flxMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "60%",
                "horizontalScrollIndicator": true,
                "id": "flxMain",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknTransparentBs",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
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
            var lblNameTitle = new kony.ui.Label({
                "id": "lblNameTitle",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl4242421SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.PayeeName"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.Manage.EnterPayeeName"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxBordere3e3e3Radius4px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "45dp",
                "zIndex": 1
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
            var btnSave = new kony.ui.Button({
                "bottom": "187dp",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnSave",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.common.save"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMain.add(flxShadow, lblNameTitle, txtName, btnSave);
            flxMainContainer.add(flxToastDummy, flxMain);
            var flxMainContainerNew = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainerNew",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknTransparentBs",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
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
            dataEntry.lblHeading = "";
            dataEntry.lblWord = "Payee Nickname:";
            dataEntry.btn1 = "";
            dataEntry.sknLblHeading = "ICSknLbl424242SSP26px";
            dataEntry.lblDynamicWord = "";
            dataEntry.payeeObjectService = "PayeeObjects";
            dataEntry.imgCheckBoxSelected = "";
            dataEntry.tbxInputWord = "{   \"mapping\": \"{$.c.payeeNickName}\",   \"placeHolder\": \"Enter payee nickName\",   \"inputMode\": \"Any\" }";
            dataEntry.sknLblWord = "ICSknLabel72727215PxNew";
            dataEntry.tbxDynamicInputWord = "";
            dataEntry.maskingEnabled = false;
            dataEntry.payeeObject = "Recipients";
            dataEntry.btn1Edit = "{   \"text\": \"Continue\",   \"action\": {     \"level\": \"Form\",     \"method\": \"navigateToAckScreen\"   } }";
            dataEntry.imgCheckBoxUnSelected = "";
            dataEntry.skntbxInputWord = "ICSknTbx72727215PxNew";
            dataEntry.dvfConfig = "{   \"Recipients\": {     \"tbxInputWord\": \"NAME\"   } }";
            dataEntry.lblCode = "";
            dataEntry.payeeEDITOperation = "editBillPayPayee";
            dataEntry.tbxInputNotice = "";
            dataEntry.lookUp = "";
            dataEntry.skntbxInputWordFocus = "ICSkntbxFocusBlueNew";
            dataEntry.minFillMapping = "{   \"Recipients\": {     \"tbxInputWord\": \"3\"   } }";
            dataEntry.payeeEDITCriteria = "{   \"payeeId\": \"{$.c.payeeId}\",   \"payeeNickName\": \"{$.c.payeeNickName}\",   \"addressLine1\": \"{$.c.addressLine1}\",   \"addressLine2\": \"{$.c.addressLine2}\",   \"state\": \"{$.c.state}\",   \"zipCode\": \"{$.c.zipCode}\",   \"cityName\": \"{$.c.city}\" }";
            dataEntry.lblCheckBoxInfo = "";
            dataEntry.sknBtnAction = "ICSknbtnfocus003e75New";
            dataEntry.payeeEDITIdentifier = "payeeEdit";
            dataEntry.lblErrorPrompt = "DVF Error";
            dataEntry.countryCodeEnabled = false;
            dataEntry.sknBtnActionFocus = "ICSknbtnfocus003e75New";
            dataEntry.customServiceOperation = "";
            dataEntry.checkBox = "";
            dataEntry.sknInputWordError = "ICSknskntxtSSP424242BorderFF0000Op100Radius2px";
            dataEntry.customServiceCriteria = "";
            dataEntry.sknActionButtonBlocked = "ICSknsknBtnBlockedSSPFFFFFF15Px";
            dataEntry.customServiceIdentifier = "";
            dataEntry.sknLblLookUp = "ICSknLblFont4176A4100ONew";
            dataEntry.sknLblErrorPrompt = "ICSknLblErrorNew";
            dataEntry.skntbxInputNotice = "ICSknTbx72727215PxNew";
            dataEntry.sknLblCheckBoxInfo = "ICSknLbl424242SSP26px";
            dataEntry.skntbxInputNoticeFocus = "ICSkntbxFocusBlueNew";
            flxMainContainerNew.add(dataEntry);
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
            this.add(flxHeader, flxMainContainer, flxMainContainerNew, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmBillPayEditNickName,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayEditNickName",
            "init": controller.AS_Form_bb7df99b289a43e6bb66f0de76aaedea,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_a9216fa9baa547758724d2cb7b72ff6a(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Edit Nickname"
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