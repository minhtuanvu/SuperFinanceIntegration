define("SavingsPotModule/frmTermsAndConditionCheck", function() {
    return function(controller) {
        function addWidgetsfrmTermsAndConditionCheck() {
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
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
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
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.TermsAndConditions.Title"),
                        "left": "viz.val_cleared",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 32,
                "clipBounds": false,
                "height": "80%",
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTitle.setDefaultUnit(kony.flex.DP);
            var lblHead = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHead",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg33px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.almostThere"),
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
            flxTitle.add(lblHead);
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var lbltxt = new kony.ui.Label({
                "id": "lbltxt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPReg30px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.PleaseRead"),
                "textStyle": {},
                "top": "3%",
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
            var flxConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxConditions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConditions.setDefaultUnit(kony.flex.DP);
            var flxCheckBox1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxCheckBox1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "35dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox1.setDefaultUnit(kony.flex.DP);
            var imgTermsAccepted = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "18dp",
                "id": "imgTermsAccepted",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tickmarkbox.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox1.add(imgTermsAccepted);
            var lblagreetc = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblagreetc",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.Iagree"),
                "textStyle": {},
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btntermsandconditions = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn0095e428px",
                "height": "40dp",
                "id": "btntermsandconditions",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.TermsAndConditions.Title"),
                "top": "0dp",
                "width": "192dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxConditions.add(flxCheckBox1, lblagreetc, btntermsandconditions);
            var flxVtu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxVtu",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxVtu.setDefaultUnit(kony.flex.DP);
            var flxCheckBox2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxCheckBox2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "35dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox2.setDefaultUnit(kony.flex.DP);
            var imgTerms = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "18dp",
                "id": "imgTerms",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tickmarkbox.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox2.add(imgTerms);
            var lblAgree = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAgree",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.Iaccept"),
                "textStyle": {},
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnVtu = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn0095e428px",
                "height": "40dp",
                "id": "btnVtu",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.VTU"),
                "top": "0dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxVtu.add(flxCheckBox2, lblAgree, btnVtu);
            flxMainContainer.add(flxTitle, flxTypeOneShadow, lbltxt, flxConditions, flxVtu);
            var flxContinue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxContinue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContinue.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "centerX": "50.00%",
                "centerY": "49.79%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CardLessOverdraft.Title"),
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxContinue.add(btnContinue);
            var flxTermsConditions = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxTermsConditions",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTermsConditions.setDefaultUnit(kony.flex.DP);
            var rtxTermsConditionsValue = new kony.ui.RichText({
                "id": "rtxTermsConditionsValue",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknRtx424242SSP26px",
                "text": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.2\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.3\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.4\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.5\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.6\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.7\n\n",
                "top": "2%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var brsrTerms = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "id": "brsrTerms",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "right": "0dp",
                "top": "0dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {
                "browserType": constants.BROWSER_TYPE_WKWEBVIEW,
                "bounces": false
            });
            flxTermsConditions.add(rtxTermsConditionsValue, brsrTerms);
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
            this.add(flxHeader, flxMainContainer, flxContinue, flxTermsConditions, flxPopup);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
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
            "action": controller.AS_BarButtonItem_gd001d88be244050bdd4d8d21c70f12b,
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
            "addWidgets": addWidgetsfrmTermsAndConditionCheck,
            "enabledForIdleTimeout": true,
            "id": "frmTermsAndConditionCheck",
            "init": controller.AS_Form_jf580050ad88474895a2515ffe6bb0d1,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "postShow": controller.AS_Form_c0ff2183c35b43e2a65323f773649981,
            "preShow": function(eventobject) {
                controller.AS_Form_d2abbf37735a4cca90636212099bd11d(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Terms & Conditions"
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
                "backIndicatorImage": "iphoneback.png",
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": true,
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