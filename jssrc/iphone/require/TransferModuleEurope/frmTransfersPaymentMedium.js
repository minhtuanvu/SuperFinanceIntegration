define("TransferModuleEurope/frmTransfersPaymentMedium", function() {
    return function(controller) {
        function addWidgetsfrmTransfersPaymentMedium() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
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
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.Europe.ChoosePaymentMedium")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "120dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxWarning = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "170dp",
                "id": "flxWarning",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWarning.setDefaultUnit(kony.flex.DP);
            var lblCutOff = new kony.ui.Label({
                "centerX": "50%",
                "height": "75dp",
                "id": "lblCutOff",
                "isVisible": true,
                "skin": "sknlbl424242SSPL",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.paymentCutOff"),
                "textStyle": {},
                "top": "86dp",
                "width": "284dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxWarnImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxWarnImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "36dp",
                "width": "40dp"
            }, {}, {});
            flxWarnImage.setDefaultUnit(kony.flex.DP);
            var ImgWarning = new kony.ui.Image2({
                "centerX": "50%",
                "height": "100%",
                "id": "ImgWarning",
                "isVisible": true,
                "skin": "slImage",
                "src": "warninground.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWarnImage.add(ImgWarning);
            flxWarning.add(lblCutOff, flxWarnImage);
            var flxSameorNextDay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "flxSameorNextDay",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSameorNextDay.setDefaultUnit(kony.flex.DP);
            var flxInstantPayment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90dp",
                "id": "flxInstantPayment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInstantPayment.setDefaultUnit(kony.flex.DP);
            var lblHdrInstantPayment = new kony.ui.Label({
                "id": "lblHdrInstantPayment",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.makeInstantPayment"),
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
            var lblInstantPayment = new kony.ui.Label({
                "id": "lblInstantPayment",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.makeInstantPaymentDescription"),
                "textStyle": {},
                "top": "25dp",
                "width": "68%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgInstantChevron = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgInstantChevron",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevronright.png",
                "top": "16dp",
                "width": "31dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInstantPayment.add(lblHdrInstantPayment, lblInstantPayment, imgInstantChevron);
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            var flxDomesticPayment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90dp",
                "id": "flxDomesticPayment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDomesticPayment.setDefaultUnit(kony.flex.DP);
            var lblHdrDomesticPayment = new kony.ui.Label({
                "id": "lblHdrDomesticPayment",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.domesticPayment"),
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
            var lblDomesticPayment = new kony.ui.Label({
                "id": "lblDomesticPayment",
                "isVisible": true,
                "left": "24dp",
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.domesticPaymentDescription"),
                "textStyle": {},
                "top": "25dp",
                "width": "68%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgDomesticChevron = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgDomesticChevron",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevronright.png",
                "top": "14dp",
                "width": "31dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDomesticPayment.add(lblHdrDomesticPayment, lblDomesticPayment, imgDomesticChevron);
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            flxSameorNextDay.add(flxInstantPayment, flxSeparator1, flxDomesticPayment, flxSeparator2);
            var flxNextDay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "220dp",
                "id": "flxNextDay",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNextDay.setDefaultUnit(kony.flex.DP);
            var lblNextDay = new kony.ui.Label({
                "centerX": "50%",
                "height": "75dp",
                "id": "lblNextDay",
                "isVisible": true,
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.domesticPaymentDescription"),
                "textStyle": {},
                "top": "35dp",
                "width": "284dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNextDay.add(lblNextDay);
            var flxNoSelection = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "300dp",
                "id": "flxNoSelection",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNoSelection.setDefaultUnit(kony.flex.DP);
            var lbltext = new kony.ui.Label({
                "centerX": "50%",
                "id": "lbltext",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.schedulePayment"),
                "textStyle": {},
                "top": "20dp",
                "width": "284dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDate = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDate",
                "isVisible": true,
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.selectDateDescription"),
                "textStyle": {},
                "top": "80dp",
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
            var flxDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "160dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDate.setDefaultUnit(kony.flex.DP);
            var lblSendOn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSendOn",
                "isVisible": true,
                "left": 20,
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("kony.mb.mm.TransferDate"),
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
            var imgChevronDate = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgChevronDate",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron_1.png",
                "top": "14dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparatorDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparatorDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "50dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorDate.setDefaultUnit(kony.flex.DP);
            flxSeparatorDate.add();
            var lblCalender = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCalender",
                "isVisible": true,
                "right": "55dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "22/07/2019",
                "textStyle": {},
                "top": "5dp",
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
            flxDate.add(lblSendOn, imgChevronDate, flxSeparatorDate, lblCalender);
            flxNoSelection.add(lbltext, lblDate, flxDate);
            flxMain.add(flxWarning, flxSameorNextDay, flxNextDay, flxNoSelection);
            flxMainContainer.add(flxMain);
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%"
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnContinue",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "0dp",
                "width": "90%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButton.add(btnContinue);
            this.add(flxHeader, flxMainContainer, flxButton);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_b6ffecd5c28d4ead81f3fc9096bec62c,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_aed577ce6cfc46b3916b8cfe3199f5c9,
            "metaData": {
                "title": "Cancel"
            },
            "id": "RBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmTransfersPaymentMedium,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmTransfersPaymentMedium",
            "init": controller.AS_Form_hff948b5183e4ee7b7801419c2580cc2,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b5518b73d3de4cc9b196b834a5c234f1(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Europe.ChoosePaymentMedium")
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
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [RBarBtnItem0]
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});