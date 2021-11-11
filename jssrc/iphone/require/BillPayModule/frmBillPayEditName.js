define("BillPayModule/frmBillPayEditName", function() {
    return function(controller) {
        function addWidgetsfrmBillPayEditName() {
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
                        "text": "Payee Name"
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
                "skin": "sknScrFlxffffff",
                "top": "0dp",
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
                "skin": "sknScrFlxffffff",
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
                "textStyle": {},
                "top": "20dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
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
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.common.save"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
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
                "skin": "sknScrFlxffffff",
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
            dataEntry.lblWord = "Payee Name:";
            dataEntry.btn1 = "{\"text\":\"Continue\",\"action\":{\"level\":\"form\",\"method\":\"onContinuePayeeName\"}}";
            dataEntry.sknLblHeading = "ICSknLbl424242SSP26px";
            dataEntry.lblDynamicWord = "[   {     \"heading\": \"Please enter your phone number.\",     \"text\": \"Phone Number:\",     \"category\": [       \"2\"     ]   },   {     \"heading\": \"Please enter your policy number.\",     \"category\": [       \"4\"     ]   } ]";
            dataEntry.payeeObjectService = "PayeeObjects";
            dataEntry.imgCheckBoxSelected = "";
            dataEntry.tbxInputWord = "{\"mapping\":\"{$.c.companyName}\",\"placeHolder\":\"Enter Payee Name\",\"inputMode\":\"Any\"}";
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
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_f166360d647f46928f3f0eb0c36a6af9,
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
            "addWidgets": addWidgetsfrmBillPayEditName,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayEditName",
            "init": controller.AS_Form_f98eed697d724d13bcfbdc4493e1c56d,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_fb078dad82f8406ea89ecb3d299d7926(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Payee Name"
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