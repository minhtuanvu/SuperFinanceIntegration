define("LoansPayoffModule/frmLoansVerify", function() {
    return function(controller) {
        function addWidgetsfrmLoansVerify() {
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
                        "isVisible": true,
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Verify"),
                        "left": "15%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_ff0bc9d000a74ce49999cc403693ebfd;
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxLoansDetails = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoansDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxLoansDetails.setDefaultUnit(kony.flex.DP);
            var flxDetailsMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "135dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetailsMain.setDefaultUnit(kony.flex.DP);
            var flxPayoffAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPayoffAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxPayoffAmount.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "skin": "sknLbl727272ssp40px",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.PayoffAmount"),
                "textStyle": {},
                "top": "27dp",
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
            var lblAmount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "0",
                "skin": "slLabel",
                "text": "$314,062.50",
                "textStyle": {},
                "top": 5,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5.33%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "11dp",
                "width": "89.33%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxPayoffAmount.add(lblTitle, lblAmount, flxSeparator);
            var flxPayoffDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPayoffDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxPayoffDetails.setDefaultUnit(kony.flex.DP);
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }, {
                    "lblDetails": "Label",
                    "lblExtras": "Label",
                    "lblTitle": "Reference ID"
                }],
                "groupCells": false,
                "id": "segDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAcknowloedgmentRow",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAcknowloedgmentRow": "flxAcknowloedgmentRow",
                    "flxSeparator": "flxSeparator",
                    "lblDetails": "lblDetails",
                    "lblExtras": "lblExtras",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxPayoffDetails.add(segDetails);
            flxDetailsMain.add(flxPayoffAmount, flxPayoffDetails);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "135dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var flxRememberMyDevice = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "60dp",
                "id": "flxRememberMyDevice",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRememberMyDevice.setDefaultUnit(kony.flex.DP);
            var flxCheckBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxCheckBox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "35dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox.setDefaultUnit(kony.flex.DP);
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
            flxCheckBox.add(imgTermsAccepted);
            var lblagreetc = new kony.ui.Label({
                "centerX": "17%",
                "centerY": "50%",
                "id": "lblagreetc",
                "isVisible": false,
                "left": "30%",
                "skin": "sknLbl424242SSPReg30px",
                "text": "Estoy de acuerdo con todos los",
                "textStyle": {},
                "top": "8dp",
                "width": "142dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btntermsandconditions = new kony.ui.Button({
                "focusSkin": "sknBtn0095e428px",
                "height": "40dp",
                "id": "btntermsandconditions",
                "isVisible": false,
                "left": "8dp",
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
            var lblRichTxt = new kony.ui.RichText({
                "id": "lblRichTxt",
                "isVisible": true,
                "left": "20%",
                "onClick": controller.AS_RichText_gb4907507fea4d1f90ab1b6a6ac4489f,
                "right": 0,
                "skin": "sknRtx424242SSP26px",
                "text": "Estoy de acuerdo con todos ios<a href=\"#\">Termnos y condicine</a>",
                "top": "10dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRememberMyDevice.add(flxCheckBox, lblagreetc, btntermsandconditions, lblRichTxt);
            var btnContinue = new kony.ui.Button({
                "bottom": "10%",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
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
            flxButtons.add(flxRememberMyDevice, btnContinue);
            flxLoansDetails.add(flxDetailsMain, flxButtons);
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
            this.add(flxHeader, flxLoansDetails, flxPopup);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_a44693e2682d478ba0ae42b51c47ebe2,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_SYSTEM_ITEM,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_ea84eeab25b1425eb1d3926513b0fc83,
            "metaData": {
                "systemItem": constants.SYSTEM_ITEM_CANCEL
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
            "addWidgets": addWidgetsfrmLoansVerify,
            "enabledForIdleTimeout": true,
            "id": "frmLoansVerify",
            "init": controller.AS_Form_da1927d0808045bf9404c94c6ec14044,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a197b23bb7374cb5a7e046774579dd72,
            "preShow": function(eventobject) {
                controller.AS_Form_f51c72776ab64e3d8af3297442e2bc0d(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Forgot.Verify")
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