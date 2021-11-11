define("SavingsPotModule/frmEditMonthlyFrequencyDay", function() {
    return function(controller) {
        function addWidgetsfrmEditMonthlyFrequencyDay() {
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": "Frequency Day"
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
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "64%",
                "horizontalScrollIndicator": true,
                "id": "flxFullScroll",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxFullScroll.setDefaultUnit(kony.flex.DP);
            var flxTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
                "skin": "sknLbl424242SSP26px",
                "text": "This date will be taken for every month.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTitle.add(lblHead);
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var flxScrollFrequency = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "80%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollFrequency",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "5dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxScrollFrequency.setDefaultUnit(kony.flex.DP);
            var segFrequencyDay = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblOption": "1"
                }, {
                    "lblOption": "2"
                }, {
                    "lblOption": "3"
                }, {
                    "lblOption": "4"
                }, {
                    "lblOption": "5"
                }, {
                    "lblOption": "6"
                }, {
                    "lblOption": "7"
                }, {
                    "lblOption": "8"
                }, {
                    "lblOption": "9"
                }, {
                    "lblOption": "10"
                }, {
                    "lblOption": "11"
                }, {
                    "lblOption": "12"
                }, {
                    "lblOption": "13"
                }, {
                    "lblOption": "14"
                }, {
                    "lblOption": "15"
                }, {
                    "lblOption": "16"
                }, {
                    "lblOption": "17"
                }, {
                    "lblOption": "18"
                }, {
                    "lblOption": "19"
                }, {
                    "lblOption": "20"
                }, {
                    "lblOption": "21"
                }, {
                    "lblOption": "22"
                }, {
                    "lblOption": "23"
                }, {
                    "lblOption": "24"
                }, {
                    "lblOption": "25"
                }, {
                    "lblOption": "26"
                }, {
                    "lblOption": "27"
                }, {
                    "lblOption": "28"
                }, {
                    "lblOption": "29"
                }, {
                    "lblOption": "30"
                }, {
                    "lblOption": "31"
                }],
                "groupCells": false,
                "id": "segFrequencyDay",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxFrequencyDay",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxFrequencyDay": "flxFrequencyDay",
                    "flxMain": "flxMain",
                    "lblOption": "lblOption"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrollFrequency.add(segFrequencyDay);
            flxFullScroll.add(flxTitle, flxTypeOneShadow, flxScrollFrequency);
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxButton",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var lblSeparator = new kony.ui.Label({
                "bottom": "1dp",
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeparator",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSelectedValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxSelectedValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectedValue.setDefaultUnit(kony.flex.DP);
            var lblSelectedDateValue = new kony.ui.Label({
                "bottom": "2dp",
                "centerX": "50%",
                "id": "lblSelectedDateValue",
                "isVisible": true,
                "left": "70dp",
                "right": "50dp",
                "skin": "sknLbl000000SSPSemiBold48px",
                "text": "03",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMonths = new kony.ui.Label({
                "centerX": "50%",
                "height": "17dp",
                "id": "lblMonths",
                "isVisible": true,
                "skin": "sknlbl949494SSPR13px",
                "text": "of every month",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSelectedValue.add(lblSelectedDateValue, lblMonths);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "height": "46dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "20dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButton.add(lblSeparator, flxSelectedValue, btnContinue);
            this.add(flxHeader, flxFullScroll, flxButton);
        };
        return [{
            "addWidgets": addWidgetsfrmEditMonthlyFrequencyDay,
            "enabledForIdleTimeout": true,
            "id": "frmEditMonthlyFrequencyDay",
            "init": controller.AS_Form_j1df68481620487fbc83cfbfe4426611,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_i9c7a4fbe2504d58a4b6ad92711b8bf0(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Frequency Day"
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