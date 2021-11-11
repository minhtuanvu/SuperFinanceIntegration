define("InformationModule/frmSupportInfo", function() {
    return function(controller) {
        function addWidgetsfrmSupportInfo() {
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.SupportInfo.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxHeaderTermsConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxHeaderTermsConditions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "55dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderTermsConditions.setDefaultUnit(kony.flex.DP);
            var customSearch = new com.kmb.Search.customSearch({
                "height": "95dp",
                "id": "customSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0%",
                "width": "100%",
                "overrides": {
                    "btnCancel": {
                        "isVisible": false
                    },
                    "flxHeader": {
                        "isVisible": false
                    },
                    "flxSearchMain": {
                        "isVisible": true
                    },
                    "lblLocateUs": {
                        "text": "Locate Us"
                    },
                    "tbxSearch": {
                        "placeholder": "Search",
                        "top": "0dp"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customSearch.flxBack.onClick = controller.AS_FlexContainer_je36524c6c8841a0b2d99134bb15eef6;
            flxHeaderTermsConditions.add(customSearch);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "height": "40dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "customSearchbox": {
                        "top": "0dp"
                    },
                    "tbxSearch": {
                        "placeholder": "Search "
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxTermsConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxTermsConditions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "106dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTermsConditions.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var rtxInfo = new kony.ui.RichText({
                "id": "rtxInfo",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknRtx424242SSP26px",
                "text": "<b>By accessing the information provided at the Kony Mobile Banking site, </b></br></br>you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br><b>By accessing the information provided at the Kony Mobile Banking site, </b></br></br>\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br><b>By accessing the information provided at the Kony Mobile Banking site, </b></br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.",
                "top": "20dp",
                "width": "89%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var segFaq = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [
                    [{
                            "imgUpArrow": "arrowdown.png",
                            "lblHeader": "Transactions"
                        },
                        [{
                            "lblAnswer": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent",
                            "lblQuestion": "Question appears here. Question will be in bold text and can be in multiple lines."
                        }, {
                            "lblAnswer": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.",
                            "lblQuestion": "Question appears here. Question will be in bold text and can be in multiple lines."
                        }, {
                            "lblAnswer": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.",
                            "lblQuestion": "Question appears here. Question will be in bold text and can be in multiple lines."
                        }]
                    ],
                    [{
                            "imgUpArrow": "arrowdown.png",
                            "lblHeader": "Transactions"
                        },
                        [{
                            "lblAnswer": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent",
                            "lblQuestion": "Question appears here. Question will be in bold text and can be in multiple lines."
                        }, {
                            "lblAnswer": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.",
                            "lblQuestion": "Question appears here. Question will be in bold text and can be in multiple lines."
                        }, {
                            "lblAnswer": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.",
                            "lblQuestion": "Question appears here. Question will be in bold text and can be in multiple lines."
                        }]
                    ]
                ],
                "groupCells": false,
                "height": "100%",
                "id": "segFaq",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxFaq",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxFaq": "flxFaq",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgUpArrow": "imgUpArrow",
                    "lblAnswer": "lblAnswer",
                    "lblHeader": "lblHeader",
                    "lblQuestion": "lblQuestion"
                },
                "width": "100%",
                "zIndex": 1
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
            var browserContent = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "htmlString": "Browser",
                "id": "browserContent",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "right": "0dp",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {
                "browserType": constants.BROWSER_TYPE_WKWEBVIEW,
                "bounces": false
            });
            flxContainer.add(rtxInfo, segFaq, browserContent);
            flxTermsConditions.add(flxContainer);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "45%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            this.add(flxHeader, flxHeaderTermsConditions, flxHeaderSearchbox, flxTermsConditions, flxGradient);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
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
            "addWidgets": addWidgetsfrmSupportInfo,
            "enabledForIdleTimeout": true,
            "id": "frmSupportInfo",
            "init": controller.AS_Form_g1f2b2b54e8c41ed9e2b17966e5297ac,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b2216e7e551c4a3ab1efc7b5833e19f2(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("kony.mb.SupportInfo.Title")
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