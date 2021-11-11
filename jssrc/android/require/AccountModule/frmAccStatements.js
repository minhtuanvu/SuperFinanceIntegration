define("AccountModule/frmAccStatements", function() {
    return function(controller) {
        function addWidgetsfrmAccStatements() {
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
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 30
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
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "chevronwhiteleft.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.AccStatements.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.btnRight.onClick = controller.AS_Button_af97396e008646d4ad75cc38f42be800;
            flxHeader.add(customHeader);
            var flxMainWrapper = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxbgf6f6f6",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMainWrapper.setDefaultUnit(kony.flex.DP);
            var flxTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "64dp",
                "id": "flxTabs",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTabs.setDefaultUnit(kony.flex.DP);
            var flxTabsWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "15dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "38dp",
                "id": "flxTabsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTabBg767680",
                "top": "15dp",
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxTabsWrapper.setDefaultUnit(kony.flex.DP);
            var btnEStatements = new kony.ui.Button({
                "focusSkin": "sknBtnRounded003e7528pxffffffbg",
                "height": "32dp",
                "id": "btnEStatements",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknBtnRounded003e7528pxffffffbg",
                "text": kony.i18n.getLocalizedString("kony.mb.EStmt.EStatements"),
                "top": "2dp",
                "width": "48%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator01 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxSeparator01",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6dp",
                "isModalContainer": false,
                "skin": "sknFlxSeperator8e8e93",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSeparator01.setDefaultUnit(kony.flex.DP);
            flxSeparator01.add();
            var btnCombinedStatements = new kony.ui.Button({
                "focusSkin": "sknBtn003E75RoundedFFFFFF28px",
                "height": "32dp",
                "id": "btnCombinedStatements",
                "isVisible": true,
                "left": "6dp",
                "right": "18dp",
                "skin": "sknBtn003E75RoundedFFFFFF28px",
                "text": kony.i18n.getLocalizedString("kony.mb.Combined.Statements"),
                "top": "2dp",
                "width": "47%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTabsWrapper.add(btnEStatements, flxSeparator01, btnCombinedStatements);
            flxTabs.add(flxTabsWrapper);
            var flxSelectYear = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "76dp",
                "id": "flxSelectYear",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "55dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectYear.setDefaultUnit(kony.flex.DP);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxStatementYr1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxStatementYr1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatementYr1.setDefaultUnit(kony.flex.DP);
            var lblYear1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblYear1",
                "isVisible": true,
                "left": "74dp",
                "skin": "sknLbl0095e422px",
                "text": "2018 Statements",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxStatementYr1.add(lblYear1);
            var flxSepertor2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepertor2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSepertor2.setDefaultUnit(kony.flex.DP);
            flxSepertor2.add();
            var flxStatementYr2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxStatementYr2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatementYr2.setDefaultUnit(kony.flex.DP);
            var lblYear2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblYear2",
                "isVisible": true,
                "left": "74dp",
                "skin": "sknLbla0a0a022px",
                "text": "2017 Statements",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxStatementYr2.add(lblYear2);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var flxStatementYr3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxStatementYr3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatementYr3.setDefaultUnit(kony.flex.DP);
            var lblYear3 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblYear3",
                "isVisible": true,
                "left": "74dp",
                "skin": "sknLbla0a0a022px",
                "text": "2018 Statements",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxStatementYr3.add(lblYear3);
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            var flxStatementYr4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxStatementYr4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatementYr4.setDefaultUnit(kony.flex.DP);
            var lblYear4 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblYear4",
                "isVisible": true,
                "left": "74dp",
                "skin": "sknLbla0a0a022px",
                "text": "2018 Statements",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxStatementYr4.add(lblYear4);
            var flxSeperator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator5.setDefaultUnit(kony.flex.DP);
            flxSeperator5.add();
            flxSelectYear.add(flxSeperator, flxStatementYr1, flxSepertor2, flxStatementYr2, flxSeperator3, flxStatementYr3, flxSeperator4, flxStatementYr4, flxSeperator5);
            var flxSegStatements = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxSegStatements",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "onTouchStart": controller.AS_FlexScrollContainer_a802cb13639b416e96351b677d3d1c27,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "65dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxSegStatements.setDefaultUnit(kony.flex.DP);
            var segStatements = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblStatementMonth": "January 2018"
                }, {
                    "lblStatementMonth": "February 2018"
                }, {
                    "lblStatementMonth": "March 2018"
                }, {
                    "lblStatementMonth": "April 2018"
                }, {
                    "lblStatementMonth": "May 2018"
                }, {
                    "lblStatementMonth": "June 2018"
                }, {
                    "lblStatementMonth": "July 2018"
                }],
                "groupCells": false,
                "id": "segStatements",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "5dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeprator": "flxSeprator",
                    "flxStatements": "flxStatements",
                    "lblStatementMonth": "lblStatementMonth"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAccountSelection = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccountSelection",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_g91496c83558462a8247c0a8a854bea3,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 150
            }, {}, {});
            flxAccountSelection.setDefaultUnit(kony.flex.DP);
            var lblAccount = new kony.ui.Label({
                "id": "lblAccount",
                "isVisible": true,
                "left": "21dp",
                "skin": "sknlbl4176a4SSPSB18px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxAccountNext = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxAccountNext",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "22dp",
                "skin": "slFbox",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxAccountNext.setDefaultUnit(kony.flex.DP);
            var imgAccountNext = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgAccountNext",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "calenderarrowright.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountNext.add(imgAccountNext);
            var lblSeparator = new kony.ui.Label({
                "height": "2dp",
                "id": "lblSeparator",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "49dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAccountSelection.add(lblAccount, flxAccountNext, lblSeparator);
            var flxYearSelection = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxYearSelection",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxYearSelection.setDefaultUnit(kony.flex.DP);
            var lblYear = new kony.ui.Label({
                "id": "lblYear",
                "isVisible": true,
                "left": "21dp",
                "skin": "sknlbl4176a4SSPSB18px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblStatements = new kony.ui.Label({
                "id": "lblStatements",
                "isVisible": false,
                "left": "60dp",
                "skin": "sknlbl4176a4SSPSB18px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.statements"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxYearNext = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxYearNext",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "22dp",
                "skin": "slFbox",
                "top": 18,
                "width": "20dp",
                "zIndex": 10
            }, {}, {});
            flxYearNext.setDefaultUnit(kony.flex.DP);
            var imgYearNext = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgYearNext",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "calenderarrowright.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxYearNext.add(imgYearNext);
            flxYearSelection.add(lblYear, lblStatements, flxYearNext);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxMonthlyStatements = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthlyStatements",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthlyStatements.setDefaultUnit(kony.flex.DP);
            var flxMonthStatements1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements1.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement1 = new kony.ui.Label({
                "id": "lblMonthStatement1",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements1 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements1",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements1.add(lblMonthStatement1, segMonthlyStatements1);
            var flxShadow1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow1.setDefaultUnit(kony.flex.DP);
            flxShadow1.add();
            var flxMonthStatements2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements2.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement2 = new kony.ui.Label({
                "id": "lblMonthStatement2",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements2 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements2",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements2.add(lblMonthStatement2, segMonthlyStatements2);
            var flxShadow2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow2.setDefaultUnit(kony.flex.DP);
            flxShadow2.add();
            var flxMonthStatements3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements3",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements3.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement3 = new kony.ui.Label({
                "id": "lblMonthStatement3",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements3 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements3",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements3.add(lblMonthStatement3, segMonthlyStatements3);
            var flxShadow3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow3.setDefaultUnit(kony.flex.DP);
            flxShadow3.add();
            var flxMonthStatements4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements4",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements4.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement4 = new kony.ui.Label({
                "id": "lblMonthStatement4",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements4 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements4",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements4.add(lblMonthStatement4, segMonthlyStatements4);
            var flxShadow4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow4.setDefaultUnit(kony.flex.DP);
            flxShadow4.add();
            var flxMonthStatements5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements5",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements5.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement5 = new kony.ui.Label({
                "id": "lblMonthStatement5",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements5 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements5",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements5.add(lblMonthStatement5, segMonthlyStatements5);
            var flxShadow5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow5.setDefaultUnit(kony.flex.DP);
            flxShadow5.add();
            var flxMonthStatements6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements6",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements6.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement6 = new kony.ui.Label({
                "id": "lblMonthStatement6",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements6 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements6",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements6.add(lblMonthStatement6, segMonthlyStatements6);
            var flxShadow6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow6.setDefaultUnit(kony.flex.DP);
            flxShadow6.add();
            var flxMonthStatements7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements7",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements7.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement7 = new kony.ui.Label({
                "id": "lblMonthStatement7",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements7 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements7",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements7.add(lblMonthStatement7, segMonthlyStatements7);
            var flxShadow7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow7.setDefaultUnit(kony.flex.DP);
            flxShadow7.add();
            var flxMonthStatements8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements8",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements8.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement8 = new kony.ui.Label({
                "id": "lblMonthStatement8",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements8 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements8",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements8.add(lblMonthStatement8, segMonthlyStatements8);
            var flxShadow8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow8.setDefaultUnit(kony.flex.DP);
            flxShadow8.add();
            var flxMonthStatements9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements9",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements9.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement9 = new kony.ui.Label({
                "id": "lblMonthStatement9",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements9 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements9",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements9.add(lblMonthStatement9, segMonthlyStatements9);
            var flxShadow9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow9.setDefaultUnit(kony.flex.DP);
            flxShadow9.add();
            var flxMonthStatements10 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements10",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements10.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement10 = new kony.ui.Label({
                "id": "lblMonthStatement10",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements10 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements10",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements10.add(lblMonthStatement10, segMonthlyStatements10);
            var flxShadow10 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow10",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow10.setDefaultUnit(kony.flex.DP);
            flxShadow10.add();
            var flxMonthStatements11 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements11",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements11.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement11 = new kony.ui.Label({
                "id": "lblMonthStatement11",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements11 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements11",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements11.add(lblMonthStatement11, segMonthlyStatements11);
            var flxShadow11 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow11",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow11.setDefaultUnit(kony.flex.DP);
            flxShadow11.add();
            var flxMonthStatements12 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMonthStatements12",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMonthStatements12.setDefaultUnit(kony.flex.DP);
            var lblMonthStatement12 = new kony.ui.Label({
                "id": "lblMonthStatement12",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLabel424242SSPSB",
                "text": "December",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segMonthlyStatements12 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnMonth": "",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segMonthlyStatements12",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f171594686b74e",
                "rowTemplate": "flxMonthlyStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "13dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnMonth": "btnMonth",
                    "flxMonthlyStatements": "flxMonthlyStatements",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthStatements12.add(lblMonthStatement12, segMonthlyStatements12);
            var flxShadow12 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32dp",
                "clipBounds": true,
                "height": "11dp",
                "id": "flxShadow12",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowf6f6f6",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow12.setDefaultUnit(kony.flex.DP);
            flxShadow12.add();
            flxMonthlyStatements.add(flxMonthStatements1, flxShadow1, flxMonthStatements2, flxShadow2, flxMonthStatements3, flxShadow3, flxMonthStatements4, flxShadow4, flxMonthStatements5, flxShadow5, flxMonthStatements6, flxShadow6, flxMonthStatements7, flxShadow7, flxMonthStatements8, flxShadow8, flxMonthStatements9, flxShadow9, flxMonthStatements10, flxShadow10, flxMonthStatements11, flxShadow11, flxMonthStatements12, flxShadow12);
            var flxNoStatements = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": 200,
                "id": "flxNoStatements",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoStatements.setDefaultUnit(kony.flex.DP);
            var flxSeperator7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator7",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator7.setDefaultUnit(kony.flex.DP);
            flxSeperator7.add();
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.OB.NoRecordsAvailable"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNoStatements.add(flxSeperator7, lblNoTransaction);
            flxSegStatements.add(segStatements, flxAccountSelection, flxYearSelection, flxShadow, flxMonthlyStatements, flxNoStatements);
            var flxCombinedStatementsWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85%",
                "id": "flxCombinedStatementsWrapper",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "64dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxCombinedStatementsWrapper.setDefaultUnit(kony.flex.DP);
            var flxGenerate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "3%",
                "clipBounds": true,
                "height": "73dp",
                "id": "flxGenerate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxGenerate.setDefaultUnit(kony.flex.DP);
            var btnGenerate = new kony.ui.Button({
                "bottom": 3,
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "48dp",
                "id": "btnGenerate",
                "isVisible": true,
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.AccStatements.GenerateNewStatement"),
                "width": "88%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxGenerate.add(btnGenerate);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0px",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var flxCombinedStatementInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxCombinedStatementInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "top": "20dp",
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCombinedStatementInfo.setDefaultUnit(kony.flex.DP);
            var imgInfo = new kony.ui.Image2({
                "bottom": "21dp",
                "height": "20dp",
                "id": "imgInfo",
                "isVisible": true,
                "left": "15dp",
                "skin": "slImage",
                "src": "info_icon.png",
                "top": "21dp",
                "width": "20dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblInfo = new kony.ui.Label({
                "bottom": "14dp",
                "id": "lblInfo",
                "isVisible": true,
                "left": "45dp",
                "skin": "sknLbl000000424242SSP30PxTab",
                "text": "Once a new statement is generated, the previous statement  will no longer be available.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "14dp",
                "width": "84%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCombinedStatementInfo.add(imgInfo, lblInfo);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.09%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "top": "20dp",
                "width": "92.27%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var imgPDFIcon = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgPDFIcon",
                "isVisible": true,
                "left": "23dp",
                "skin": "slImage",
                "src": "pdf.png",
                "top": "20dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDate = new kony.ui.Label({
                "id": "lblDate",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknLbl424242SSP22px",
                "text": "26/11/2020, 10.34AM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPdfName = new kony.ui.Label({
                "id": "lblPdfName",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknlbl424242SSPsemibold40px",
                "text": "Infinity Bank - 0097 account statement.pdf",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "55dp",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgDownloadSymbol = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgDownloadSymbol",
                "isVisible": true,
                "left": "73dp",
                "skin": "slImage",
                "src": "download.png",
                "top": "110dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDownloadTitle = new kony.ui.Label({
                "id": "lblDownloadTitle",
                "isVisible": true,
                "left": "110dp",
                "skin": "sknLbl000000424242SSP30PxTab",
                "text": kony.i18n.getLocalizedString("i18n.common.Download"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "115dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMain.add(imgPDFIcon, lblDate, lblPdfName, imgDownloadSymbol, lblDownloadTitle);
            flxContent.add(flxCombinedStatementInfo, flxMain);
            flxCombinedStatementsWrapper.add(flxGenerate, flxContent);
            flxMainWrapper.add(flxTabs, flxSelectYear, flxSegStatements, flxCombinedStatementsWrapper);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "height": "60dp",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 300,
                "overrides": {
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": false
                    },
                    "imgAccounts": {
                        "src": "accounts.png"
                    },
                    "imgBillPay": {
                        "src": "billpay.png"
                    },
                    "imgMore": {
                        "src": "more.png"
                    },
                    "imgTransfer": {
                        "src": "transfer.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxFooter.add(customFooter, flxSeperator1);
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxHamburgerWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamburgerWrapper.setDefaultUnit(kony.flex.DP);
            var flxHamburgerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "50dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 10
            }, {}, {});
            flxHamburgerContainer.setDefaultUnit(kony.flex.DP);
            var Hamburger = new com.kmb.common.Hamburger({
                "height": "100%",
                "id": "Hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgLogout": {
                        "src": "logout.png"
                    },
                    "imgUser": {
                        "src": "userimg.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHamburgerContainer.add(Hamburger);
            var flxHamburgerDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburgerDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            this.add(flxHeader, flxMainWrapper, flxFooter, flxHamburger);
        };
        return [{
            "addWidgets": addWidgetsfrmAccStatements,
            "enabledForIdleTimeout": true,
            "id": "frmAccStatements",
            "init": controller.AS_Form_da6cda809b7d4365bb459548a45fa23d,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "onHide": controller.AS_Form_fe0e4b16e6ac4b3bb66aee507ced8afc,
            "preShow": function(eventobject) {
                controller.AS_Form_ecdcfd3b9a8642fdbd8c3e6c243dff4b(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.AccStatements.Title")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
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