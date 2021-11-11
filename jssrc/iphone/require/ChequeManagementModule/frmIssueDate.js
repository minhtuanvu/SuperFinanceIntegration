define("ChequeManagementModule/frmIssueDate", function() {
    return function(controller) {
        function addWidgetsfrmIssueDate() {
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
                    "lblLocateUs": {
                        "centerX": "50%",
                        "left": "viz.val_cleared",
                        "text": "Issue Date",
                        "width": "25%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75dp",
                "id": "flxDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDate.setDefaultUnit(kony.flex.DP);
            var flxSeparatorDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorDate.setDefaultUnit(kony.flex.DP);
            flxSeparatorDate.add();
            var flxDateValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxDateValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "180dp",
                "zIndex": 1
            }, {}, {});
            flxDateValue.setDefaultUnit(kony.flex.DP);
            var lblDayOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblDayOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "M",
                "textStyle": {},
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDayTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblDayTwo",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "M",
                "textStyle": {},
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSlashDay = new kony.ui.Label({
                "height": "100%",
                "id": "lblSlashDay",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "/",
                "textStyle": {},
                "top": "0dp",
                "width": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMonthOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblMonthOne",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "D",
                "textStyle": {},
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMonthTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblMonthTwo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "D",
                "textStyle": {},
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSlashMonth = new kony.ui.Label({
                "height": "100%",
                "id": "lblSlashMonth",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "/",
                "textStyle": {},
                "top": "0dp",
                "width": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearOne",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearTwo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearThree",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearFour",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSPReg40px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDateValue.add(lblDayOne, lblDayTwo, lblSlashDay, lblMonthOne, lblMonthTwo, lblSlashMonth, lblYearOne, lblYearTwo, lblYearThree, lblYearFour);
            flxDate.add(flxSeparatorDate, flxDateValue);
            var customCalendar = new com.common.customCalendar({
                "height": "280dp",
                "id": "customCalendar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "100dp",
                "width": "100%",
                "overrides": {
                    "CopyLabel0a76a5b3ff1614d": {
                        "text": "28"
                    },
                    "CopyLabel0ab34c408890a48": {
                        "text": "8"
                    },
                    "CopyLabel0b0a37999379943": {
                        "text": "9"
                    },
                    "CopyLabel0b4b0a19342f045": {
                        "text": "25"
                    },
                    "CopyLabel0bd3347987a2d42": {
                        "text": "2"
                    },
                    "CopyLabel0bf31efe96e8544": {
                        "text": "4"
                    },
                    "CopyLabel0bf70befd32634d": {
                        "text": "18"
                    },
                    "CopyLabel0c0d1ace9366e41": {
                        "text": "19"
                    },
                    "CopyLabel0c17fd38ae73541": {
                        "text": "29"
                    },
                    "CopyLabel0c37cb272050745": {
                        "text": "14"
                    },
                    "CopyLabel0c6604e04cd0746": {
                        "text": "20"
                    },
                    "CopyLabel0d441e1e8b5f745": {
                        "text": "24"
                    },
                    "CopyLabel0db83591229ee48": {
                        "text": "3"
                    },
                    "CopyLabel0ddfbd882ca6e49": {
                        "text": "23"
                    },
                    "CopyLabel0e467834fb93444": {
                        "text": "16"
                    },
                    "CopyLabel0e6c614860b2e49": {
                        "text": "10"
                    },
                    "CopyLabel0eb2ee0908f754b": {
                        "text": "12"
                    },
                    "CopyLabel0ebdb65cb337e40": {
                        "text": "30"
                    },
                    "CopyLabel0ebebef81288b49": {
                        "text": "31"
                    },
                    "CopyLabel0ec3ea718928e43": {
                        "text": "13"
                    },
                    "CopyLabel0f56560e182094f": {
                        "text": "21"
                    },
                    "CopyLabel0f7c31ea05bdd4e": {
                        "text": "17"
                    },
                    "CopyLabel0f818d2b46a9443": {
                        "text": "6"
                    },
                    "CopyLabel0fd179b6989af49": {
                        "text": "11"
                    },
                    "CopyLabel0fdca447397194f": {
                        "text": "5"
                    },
                    "CopyLabel0ga2fb49aa72949": {
                        "text": "22"
                    },
                    "CopyLabel0h55e7685c4484d": {
                        "text": "15"
                    },
                    "CopyLabel0h896370364c647": {
                        "text": "28"
                    },
                    "CopyLabel0h8af2ed5093c4b": {
                        "text": "27"
                    },
                    "CopyLabel0hbe2d314e8e74d": {
                        "text": "30"
                    },
                    "CopyLabel0iacbb14118244b": {
                        "text": "7"
                    },
                    "CopyLabel0j0d027a8ae2a4b": {
                        "text": "29"
                    },
                    "CopyLabel0j9b527661d284c": {
                        "text": "26"
                    },
                    "CopyLabel0jd77222a5bf043": {
                        "text": "1"
                    },
                    "customCalendar": {
                        "isVisible": true,
                        "top": "100dp"
                    },
                    "flxMonthDummy": {
                        "isVisible": false
                    },
                    "flxWeekSix": {
                        "isVisible": false
                    },
                    "imgNextMonth": {
                        "height": "25dp",
                        "src": "calenderarrowright_2.png",
                        "width": "25dp"
                    },
                    "imgPreviousMonth": {
                        "height": "25dp",
                        "src": "calenderarrowleft_2.png",
                        "width": "25dp"
                    },
                    "lblMonth": {
                        "text": "May, 2020"
                    }
                }
            }, {
                "overrides": {
                    "imgPreviousMonth": {
                        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS
                    }
                }
            }, {
                "overrides": {}
            });
            var btnSkip = new kony.ui.Button({
                "bottom": "100dp",
                "centerX": "50%",
                "id": "btnSkip",
                "isVisible": true,
                "skin": "konympassknBtn018AD1Regular34",
                "text": kony.i18n.getLocalizedString("kony.mb.common.skip"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnContinue = new kony.ui.Button({
                "bottom": "30dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "50dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnE2E9F0SSP31PX",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxMainContainer.add(flxDate, customCalendar, btnSkip, btnContinue);
            this.add(flxHeader, flxMainContainer);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_f3344f444f7c49f38d3a2dfc368dfe60,
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
            "action": controller.AS_BarButtonItem_cb6a22377d634ed28856952f3bcd7a3f,
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
            "addWidgets": addWidgetsfrmIssueDate,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmIssueDate",
            "init": controller.AS_Form_d9fba242ca684562971fe01ce1480fb4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_df7cbe03261745238c54e0c684b776bc(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Issue Date"
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