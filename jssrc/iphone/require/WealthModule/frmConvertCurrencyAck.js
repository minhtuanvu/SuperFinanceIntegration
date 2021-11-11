define("WealthModule/frmConvertCurrencyAck", function() {
    return function(controller) {
        function addWidgetsfrmConvertCurrencyAck() {
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
                        "isVisible": false
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "text": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement"),
                        "left": "31%",
                        "right": "23%",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxFullScroll = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "75%",
                "horizontalScrollIndicator": true,
                "id": "flxFullScroll",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxFullScroll.setDefaultUnit(kony.flex.DP);
            var imgOnDone = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgOnDone",
                "isVisible": true,
                "src": "confirmation_tick.png",
                "top": "20dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDescription = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl000000SSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.orderSuccessMsg"),
                "textStyle": {},
                "top": "20dp",
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
            var flxFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxFrom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxFrom.setDefaultUnit(kony.flex.DP);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var lblFrom = new kony.ui.Label({
                "height": "20dp",
                "id": "lblFrom",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.From"),
                "textStyle": {},
                "top": "10dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblFromVal = new kony.ui.Label({
                "id": "lblFromVal",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "USD",
                "textStyle": {},
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
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
                "skin": "sknFlxe9e9e9",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxFrom.add(flxSep1, lblFrom, lblFromVal, flxSeparator);
            var flxFromAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxFromAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxFromAmount.setDefaultUnit(kony.flex.DP);
            var lblFromAmount = new kony.ui.Label({
                "height": "20dp",
                "id": "lblFromAmount",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.wealth.amount"),
                "textStyle": {},
                "top": "10dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblFromAmountVal = new kony.ui.Label({
                "id": "lblFromAmountVal",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$850.00",
                "textStyle": {},
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe9e9e9",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            flxFromAmount.add(lblFromAmount, lblFromAmountVal, flxSep2);
            var flxTo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxTo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxTo.setDefaultUnit(kony.flex.DP);
            var lblTo = new kony.ui.Label({
                "height": "20dp",
                "id": "lblTo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.toAck"),
                "textStyle": {},
                "top": "10dp",
                "width": "130dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblToVal = new kony.ui.Label({
                "id": "lblToVal",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "EUR",
                "textStyle": {},
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSep3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe9e9e9",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep3.setDefaultUnit(kony.flex.DP);
            flxSep3.add();
            flxTo.add(lblTo, lblToVal, flxSep3);
            var flxToAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxToAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxToAmount.setDefaultUnit(kony.flex.DP);
            var lblToAmount = new kony.ui.Label({
                "height": "20dp",
                "id": "lblToAmount",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.wealth.amount"),
                "textStyle": {},
                "top": "10dp",
                "width": "180dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblToAmountVal = new kony.ui.Label({
                "id": "lblToAmountVal",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "�729.02",
                "textStyle": {},
                "top": "10dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSep5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe9e9e9",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep5.setDefaultUnit(kony.flex.DP);
            flxSep5.add();
            flxToAmount.add(lblToAmount, lblToAmountVal, flxSep5);
            var flxPeriod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxPeriod",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxPeriod.setDefaultUnit(kony.flex.DP);
            var lblOption = new kony.ui.Label({
                "height": "20dp",
                "id": "lblOption",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.wealth.convertNow"),
                "textStyle": {},
                "top": "10dp",
                "width": "160dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDate = new kony.ui.Label({
                "id": "lblDate",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "11/03/2020",
                "textStyle": {},
                "top": "10dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSep4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe9e9e9",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep4.setDefaultUnit(kony.flex.DP);
            flxSep4.add();
            flxPeriod.add(lblOption, lblDate, flxSep4);
            var flxTax = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxTax",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxTax.setDefaultUnit(kony.flex.DP);
            var lblTax = new kony.ui.Label({
                "height": "20dp",
                "id": "lblTax",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.wealth.estimatedFees"),
                "textStyle": {},
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTaxVal = new kony.ui.Label({
                "id": "lblTaxVal",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$2.00",
                "textStyle": {},
                "top": "10dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSep6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe9e9e9",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep6.setDefaultUnit(kony.flex.DP);
            flxSep6.add();
            flxTax.add(lblTax, lblTaxVal, flxSep6);
            var flxNotes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxNotes",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxNotes.setDefaultUnit(kony.flex.DP);
            var lblNotes = new kony.ui.Label({
                "height": "20dp",
                "id": "lblNotes",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.notes"),
                "textStyle": {},
                "top": "10dp",
                "width": "130dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNotesVal = new kony.ui.Label({
                "id": "lblNotesVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.approximateAmountNote"),
                "textStyle": {},
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNotes.add(lblNotes, lblNotesVal);
            flxFullScroll.add(imgOnDone, lblDescription, flxFrom, flxFromAmount, flxTo, flxToAmount, flxPeriod, flxTax, flxNotes);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnClose = new kony.ui.Button({
                "bottom": "80dp",
                "centerX": "49.97%",
                "focusSkin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "height": "40dp",
                "id": "btnClose",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.close"),
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnView = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "49.97%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnView",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.viewOrder"),
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButtons.add(btnClose, btnView);
            this.add(flxHeader, flxFullScroll, flxButtons);
        };
        return [{
            "addWidgets": addWidgetsfrmConvertCurrencyAck,
            "enabledForIdleTimeout": true,
            "id": "frmConvertCurrencyAck",
            "init": controller.AS_Form_c24d9389fffd4e10a8cc22b7a505e20c,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
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
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
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
                "rightBarButtonItems": []
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});