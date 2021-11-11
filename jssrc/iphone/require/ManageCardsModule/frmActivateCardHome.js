define("ManageCardsModule/frmActivateCardHome", function() {
    return function(controller) {
        function addWidgetsfrmActivateCardHome() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": false,
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
                    "imgBack": {
                        "src": "hamburger.png"
                    },
                    "imgSearch": {
                        "src": "info.png"
                    },
                    "lblLocateUs": {
                        "text": "Axis Bank Visa"
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
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "120dp",
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
                "zIndex": 10
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxCardsContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "170dp",
                "id": "flxCardsContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0%",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxCardsContainer.setDefaultUnit(kony.flex.DP);
            var flxCardList = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bounces": true,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "enableScrolling": true,
                "height": "88%",
                "horizontalScrollIndicator": false,
                "id": "flxCardList",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "pagingEnabled": true,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "verticalScrollIndicator": true,
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxCardList.setDefaultUnit(kony.flex.DP);
            var flxCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCard.setDefaultUnit(kony.flex.DP);
            var imgCard = new kony.ui.Image2({
                "height": "100%",
                "id": "imgCard",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "atmcardgold.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCardNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "60%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxCardNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxCardNumber.setDefaultUnit(kony.flex.DP);
            var flxCardNo1Part = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCardNo1Part",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxCardNo1Part.setDefaultUnit(kony.flex.DP);
            var lblCardNoMasked1 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCardNoMasked1",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop50",
                "text": "XXXX",
                "textStyle": {},
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCardNo1Part.add(lblCardNoMasked1);
            var flxCardNoPart2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCardNoPart2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxCardNoPart2.setDefaultUnit(kony.flex.DP);
            var lblCardNoMasked2 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCardNoMasked2",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop50",
                "text": "XXXX",
                "textStyle": {},
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCardNoPart2.add(lblCardNoMasked2);
            var flxCardNoPart3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCardNoPart3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxCardNoPart3.setDefaultUnit(kony.flex.DP);
            var blCardNoMasked3 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "blCardNoMasked3",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop50",
                "text": "XXXX",
                "textStyle": {},
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCardNoPart3.add(blCardNoMasked3);
            var flxCardNoPart4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCardNoPart4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxCardNoPart4.setDefaultUnit(kony.flex.DP);
            var lblCardNoLastDigits = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCardNoLastDigits",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop100",
                "text": "XXXX",
                "textStyle": {},
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCardNoPart4.add(lblCardNoLastDigits);
            flxCardNumber.add(flxCardNo1Part, flxCardNoPart2, flxCardNoPart3, flxCardNoPart4);
            flxCard.add(imgCard, flxCardNumber);
            flxCardList.add(flxCard);
            flxCardsContainer.add(flxCardList);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0%",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxActivateCardMsg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxActivateCardMsg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "90dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActivateCardMsg.setDefaultUnit(kony.flex.DP);
            var flxActivateCardText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxActivateCardText",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxActivateCardText.setDefaultUnit(kony.flex.DP);
            var imgCardActivate = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgCardActivate",
                "isVisible": true,
                "skin": "slImage",
                "src": "message.png",
                "top": "3dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCardActivateText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCardActivateText",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP22px26",
                "text": "This card is currently incactive. If you already received your card in the mail you may activate it through the app. ",
                "textStyle": {},
                "top": "62dp",
                "width": "64%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxActivateCardText.add(imgCardActivate, lblCardActivateText);
            flxActivateCardMsg.add(flxActivateCardText);
            flxMainContainer.add(flxCardsContainer, flxSeperator, flxActivateCardMsg);
            var flxActivateBtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "112dp",
                "id": "flxActivateBtn",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxActivateBtn.setDefaultUnit(kony.flex.DP);
            var btnActivateCard = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnActivateCard",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Activate Card",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxActivateBtn.add(btnActivateCard);
            this.add(flxHeader, flxMainContainer, flxActivateBtn);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "image": ""
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_DONE,
            "enabled": true,
            "metaData": {
                "title": "Cancel"
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "image": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmActivateCardHome,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmActivateCardHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmTopBlue",
            "title": "Axis Bank Visa"
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
            "needsIndicatorDuringPostShow": true,
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
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});