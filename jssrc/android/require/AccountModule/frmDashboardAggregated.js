define("AccountModule/frmDashboardAggregated", function() {
    return function(controller) {
        function addWidgetsfrmDashboardAggregated() {
            this.setDefaultUnit(kony.flex.DP);
            var flxTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxTitle.setDefaultUnit(kony.flex.DP);
            var flxTitleSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxTitleSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTitleSeparator.setDefaultUnit(kony.flex.DP);
            flxTitleSeparator.add();
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
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": true
                    },
                    "imgBack": {
                        "src": "hamburger.png"
                    },
                    "imgSearch": {
                        "height": "24dp",
                        "src": "personalbankingwhite.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title")
                    }
                }
            }, {
                "overrides": {
                    "imgSearch": {
                        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO
                    }
                }
            }, {
                "overrides": {}
            });
            flxTitle.add(flxTitleSeparator, customHeader);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "56dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            var noAccounts = new com.kmb.common.noAccounts({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "340dp",
                "id": "noAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 10,
                "overrides": {
                    "flxNoAccounts": {
                        "height": "328dp"
                    },
                    "imginfo": {
                        "src": "infofull.png"
                    },
                    "noAccounts": {
                        "height": "340dp",
                        "isVisible": true,
                        "top": "56dp"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxPageIndicators = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicators",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "280dp",
                "width": "36dp",
                "zIndex": 5
            }, {}, {});
            flxPageIndicators.setDefaultUnit(kony.flex.DP);
            var flxPageIndicator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxPageIndicatorSelected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator1.setDefaultUnit(kony.flex.DP);
            flxPageIndicator1.add();
            var flxPageIndicator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxPageIndicatorUnselected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator2.setDefaultUnit(kony.flex.DP);
            flxPageIndicator2.add();
            var flxPageIndicator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator3",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxPageIndicatorUnselected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator3.setDefaultUnit(kony.flex.DP);
            flxPageIndicator3.add();
            flxPageIndicators.add(flxPageIndicator1, flxPageIndicator2, flxPageIndicator3);
            var flxDashboardHeader = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "55%",
                "horizontalScrollIndicator": true,
                "id": "flxDashboardHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "minHeight": "60dp",
                "pagingEnabled": true,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxDashboardHeader.setDefaultUnit(kony.flex.DP);
            var flxSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSummary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSummary.setDefaultUnit(kony.flex.DP);
            var flxNetSummary = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxNetSummary",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNetSummary.setDefaultUnit(kony.flex.DP);
            var flxShowGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxShowGraph",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "minHeight": "50dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "18%",
                "zIndex": 1
            }, {}, {});
            flxShowGraph.setDefaultUnit(kony.flex.DP);
            var imgShowGraph = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgShowGraph",
                "isVisible": true,
                "right": "15dp",
                "skin": "slImage",
                "src": "dashboardicon.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxShowGraph.add(imgShowGraph);
            var lblNetWorthSummary = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNetWorthSummary",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblb8dcffSSP32px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.netWorthSummary"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBankName = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBankName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblffffffSSP56px",
                "text": "$00,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSummaryWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSummaryWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "35dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSummaryWrapper.setDefaultUnit(kony.flex.DP);
            var flxAssets = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAssets",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxAssets.setDefaultUnit(kony.flex.DP);
            var lblAssetsTitle = new kony.ui.Label({
                "centerX": "51%",
                "id": "lblAssetsTitle",
                "isVisible": true,
                "skin": "sknLblb8dcffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.Assets"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "9dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAssetsValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAssetsValue",
                "isVisible": true,
                "skin": "sknLblffffffSSP44px",
                "text": "+$000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAssets.add(lblAssetsTitle, lblAssetsValue);
            var flxVertSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxVertSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxVertSeperator.setDefaultUnit(kony.flex.DP);
            flxVertSeperator.add();
            var flxDebt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxDebt",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxDebt.setDefaultUnit(kony.flex.DP);
            var lblDebtTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDebtTitle",
                "isVisible": true,
                "skin": "sknLblb8dcffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.debt"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "9dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDebtValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDebtValue",
                "isVisible": true,
                "skin": "sknLblffffffSSP44px",
                "text": "-$0,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDebt.add(lblDebtTitle, lblDebtValue);
            flxSummaryWrapper.add(flxAssets, flxVertSeperator, flxDebt);
            flxNetSummary.add(flxShowGraph, lblNetWorthSummary, lblBankName, flxSummaryWrapper);
            var flxSummarySegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "220dp",
                "id": "flxSummarySegment",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "260dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSummarySegment.setDefaultUnit(kony.flex.DP);
            var flxSummarySeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSummarySeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSummarySeperator1.setDefaultUnit(kony.flex.DP);
            flxSummarySeperator1.add();
            var flxSummaryDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxSummaryDate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffOp15",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSummaryDate.setDefaultUnit(kony.flex.DP);
            var lblMonthAndYearSummary = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblMonthAndYearSummary",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "text": "June - 2018",
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
            var flxPrevMonthSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPrevMonthSummary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "70dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxPrevMonthSummary.setDefaultUnit(kony.flex.DP);
            var imgPrevMonthSummary = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPrevMonthSummary",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage",
                "src": "chevronwhiteleft.png",
                "top": "11dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPrevMonthSummary.add(imgPrevMonthSummary);
            var flxNextMonthSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNextMonthSummary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "70dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxNextMonthSummary.setDefaultUnit(kony.flex.DP);
            var imgNextMonthSummary = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgNextMonthSummary",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage",
                "src": "chevronwhiteright.png",
                "top": "11dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNextMonthSummary.add(imgNextMonthSummary);
            flxSummaryDate.add(lblMonthAndYearSummary, flxPrevMonthSummary, flxNextMonthSummary);
            var flxSummarySeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSummarySeperator2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSummarySeperator2.setDefaultUnit(kony.flex.DP);
            flxSummarySeperator2.add();
            var segSummary = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAmountSpent": "",
                    "lblSpending": ""
                }],
                "groupCells": false,
                "id": "segSummary",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTransparant",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxChartsSpending",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxChartsSpending": "flxChartsSpending",
                    "flxSeperator": "flxSeperator",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblSpending": "lblSpending"
                },
                "widgetSkin": "segTransparant",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSummaryButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSummaryButton",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSummaryButton.setDefaultUnit(kony.flex.DP);
            var flxSummarySeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSummarySeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSummarySeperator.setDefaultUnit(kony.flex.DP);
            flxSummarySeperator.add();
            var btnSummary = new kony.ui.Button({
                "centerY": "40%",
                "focusSkin": "sknBtnTransparentffffffBorder1PxRadius2Px",
                "height": "40dp",
                "id": "btnSummary",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnTransparentffffffBorder1PxRadius2Px",
                "text": kony.i18n.getLocalizedString("kony.mb.Dashboard.ViewAllTransactions"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSummaryButton.add(flxSummarySeperator, btnSummary);
            flxSummarySegment.add(flxSummarySeperator1, flxSummaryDate, flxSummarySeperator2, segSummary, flxSummaryButton);
            flxSummary.add(flxNetSummary, flxSummarySegment);
            var flxGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxGraph",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minHeight": "50dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGraph.setDefaultUnit(kony.flex.DP);
            var browserChart = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "id": "browserChart",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            var flxDonutSegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "220dp",
                "id": "flxDonutSegment",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "260dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxDonutSegment.setDefaultUnit(kony.flex.DP);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxDonutDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxDonutDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffOp15",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDonutDate.setDefaultUnit(kony.flex.DP);
            var lblMonthAndYear = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblMonthAndYear",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "text": "June - 2018",
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
            var flxPrevMonth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPrevMonth",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "70dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxPrevMonth.setDefaultUnit(kony.flex.DP);
            var imgPrevMonth = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPrevMonth",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage",
                "src": "chevronwhiteleft.png",
                "top": "11dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPrevMonth.add(imgPrevMonth);
            var flxNextMonth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNextMonth",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "70dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxNextMonth.setDefaultUnit(kony.flex.DP);
            var imgNextMonth = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgNextMonth",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage",
                "src": "chevronwhiteright.png",
                "top": "11dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNextMonth.add(imgNextMonth);
            flxDonutDate.add(lblMonthAndYear, flxPrevMonth, flxNextMonth);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var segTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAmountSpent": "",
                    "lblSpending": ""
                }],
                "groupCells": false,
                "id": "segTransactions",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTransparant",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxChartsSpending",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxChartsSpending": "flxChartsSpending",
                    "flxSeperator": "flxSeperator",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblSpending": "lblSpending"
                },
                "widgetSkin": "segTransparant",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxViewAllTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxViewAllTransactions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewAllTransactions.setDefaultUnit(kony.flex.DP);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var btnViewAllTransactions = new kony.ui.Button({
                "centerY": "40%",
                "focusSkin": "sknBtnTransparentffffffBorder1PxRadius2PxFocus",
                "height": "40dp",
                "id": "btnViewAllTransactions",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnTransparentffffffBorder1PxRadius2PxNormal",
                "text": kony.i18n.getLocalizedString("kony.mb.Dashboard.ViewAllTransactions"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxViewAllTransactions.add(flxSeperator, btnViewAllTransactions);
            var flxShadow2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxShadow2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueHeaderShadow",
                "top": "-25dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow2.setDefaultUnit(kony.flex.DP);
            flxShadow2.add();
            flxDonutSegment.add(flxSeperator2, flxDonutDate, flxSeperator3, segTransactions, flxViewAllTransactions, flxShadow2);
            var lblTotalSpendingValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalSpendingValue",
                "isVisible": false,
                "skin": "sknLblffffffSSP32px",
                "text": "$0,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "83dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTotalSpending = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalSpending",
                "isVisible": false,
                "skin": "sknLblb8dcff20px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.MonthlySpending"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "109dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxGraph.add(browserChart, flxDonutSegment, lblTotalSpendingValue, lblTotalSpending);
            var flxBarChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBarChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBarChart.setDefaultUnit(kony.flex.DP);
            var lblBarTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBarTitle",
                "isVisible": true,
                "skin": "sknLblb8dcffSSP32px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AllAccountBalances"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var browserBarChart = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "id": "browserBarChart",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            var flxBarSegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "220dp",
                "id": "flxBarSegment",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "260dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxBarSegment.setDefaultUnit(kony.flex.DP);
            var flxBarSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBarSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBarSeperator1.setDefaultUnit(kony.flex.DP);
            flxBarSeperator1.add();
            var flxBarDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxBarDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffOp15",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBarDate.setDefaultUnit(kony.flex.DP);
            var lblYearBar = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblYearBar",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "text": "2019",
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
            var flxPrevMonthBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPrevMonthBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "70dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxPrevMonthBar.setDefaultUnit(kony.flex.DP);
            var imgPrevMonthBar = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPrevMonthBar",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage",
                "src": "chevronwhiteleft.png",
                "top": "11dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPrevMonthBar.add(imgPrevMonthBar);
            var flxNextMonthBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNextMonthBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "70dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxNextMonthBar.setDefaultUnit(kony.flex.DP);
            var imgNextMonthBar = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgNextMonthBar",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage",
                "src": "chevronwhiteright.png",
                "top": "11dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNextMonthBar.add(imgNextMonthBar);
            flxBarDate.add(lblYearBar, flxPrevMonthBar, flxNextMonthBar);
            var flxBarSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBarSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBarSeperator2.setDefaultUnit(kony.flex.DP);
            flxBarSeperator2.add();
            var segBar = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAmountSpent": "",
                    "lblSpending": ""
                }],
                "groupCells": false,
                "id": "segBar",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTransparant",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxChartsSpending",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxChartsSpending": "flxChartsSpending",
                    "flxSeperator": "flxSeperator",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblSpending": "lblSpending"
                },
                "widgetSkin": "segTransparant",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxBarButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBarButton",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBarButton.setDefaultUnit(kony.flex.DP);
            var flxBarSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBarSeperator3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBarSeperator3.setDefaultUnit(kony.flex.DP);
            flxBarSeperator3.add();
            var btnBar = new kony.ui.Button({
                "centerY": "40%",
                "focusSkin": "sknBtnTransparentffffffBorder1PxRadius2Px",
                "height": "40dp",
                "id": "btnBar",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnTransparentffffffBorder1PxRadius2Px",
                "text": kony.i18n.getLocalizedString("kony.mb.Dashboard.ViewAllTransactions"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBarButton.add(flxBarSeperator3, btnBar);
            flxBarSegment.add(flxBarSeperator1, flxBarDate, flxBarSeperator2, segBar, flxBarButton);
            flxBarChart.add(lblBarTitle, browserBarChart, flxBarSegment);
            flxDashboardHeader.add(flxSummary, flxGraph, flxBarChart);
            var flxDashboard = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bottom": "0dp",
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxDashboard",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxDashboard.setDefaultUnit(kony.flex.DP);
            var flxDummyHorizontalScroll = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "250dp",
                "horizontalScrollIndicator": false,
                "id": "flxDummyHorizontalScroll",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "minHeight": "60dp",
                "pagingEnabled": true,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxDummyHorizontalScroll.setDefaultUnit(kony.flex.DP);
            var flxOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOne.setDefaultUnit(kony.flex.DP);
            flxOne.add();
            var flxTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTwo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTwo.setDefaultUnit(kony.flex.DP);
            flxTwo.add();
            var flxThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxThree",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxThree.setDefaultUnit(kony.flex.DP);
            flxThree.add();
            flxDummyHorizontalScroll.add(flxOne, flxTwo, flxThree);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueHeaderShadow",
                "top": "-25dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxChartSizeToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxChartSizeToggle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxChartSizeToggle.setDefaultUnit(kony.flex.DP);
            var imgChartSizeToggle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgChartSizeToggle",
                "isVisible": true,
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxChartSizeToggle.add(imgChartSizeToggle);
            var flxSelectAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSelectAccount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSelectAccount.setDefaultUnit(kony.flex.DP);
            var flxSelectedAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxSelectedAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "-10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectedAccounts.setDefaultUnit(kony.flex.DP);
            var lblSelectedAccountType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSelectedAccountType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl0095e4SSPReg32px",
                "text": "KONY BANK ACCOUNTS",
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
            var flxShowAllAccountTypes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxShowAllAccountTypes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "minHeight": "50dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "18%",
                "zIndex": 1
            }, {}, {});
            flxShowAllAccountTypes.setDefaultUnit(kony.flex.DP);
            var imgShowAllAccounts = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgShowAllAccounts",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "filters.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxShowAllAccountTypes.add(imgShowAllAccounts);
            flxSelectedAccounts.add(lblSelectedAccountType, flxShowAllAccountTypes);
            var flxAccountTypes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccountTypes",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountTypes.setDefaultUnit(kony.flex.DP);
            var segAccountTypes = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgIcon": "imagedrag.png",
                    "lblName": "Label"
                }, {
                    "imgIcon": "imagedrag.png",
                    "lblName": "Label"
                }, {
                    "imgIcon": "imagedrag.png",
                    "lblName": "Label"
                }, {
                    "imgIcon": "imagedrag.png",
                    "lblName": "Label"
                }],
                "groupCells": false,
                "id": "segAccountTypes",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSelectAccountTypes",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSelectAccountTypes": "flxSelectAccountTypes",
                    "flxSeparator": "flxSeparator",
                    "imgIcon": "imgIcon",
                    "lblName": "lblName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountTypes.add(segAccountTypes);
            flxSelectAccount.add(flxSelectedAccounts, flxAccountTypes);
            var flxAccounts = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "400dp",
                "horizontalScrollIndicator": true,
                "id": "flxAccounts",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxAccounts.setDefaultUnit(kony.flex.DP);
            flxAccounts.add();
            var segAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblAccountBal": "Available Balance",
                            "lblTypeName": "Checking Accounts (3)",
                            "lblTypeValue": "$127,912.00"
                        },
                        [{
                            "imgBank": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "imgWarn": "konybanklogo.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgBank": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "imgWarn": "konybanklogo.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgBank": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "imgWarn": "konybanklogo.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }]
                    ],
                    [{
                            "lblAccountBal": "Available Balance",
                            "lblTypeName": "Checking Accounts (3)",
                            "lblTypeValue": "$127,912.00"
                        },
                        [{
                            "imgBank": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "imgWarn": "konybanklogo.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgBank": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "imgWarn": "konybanklogo.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgBank": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "imgWarn": "konybanklogo.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segAccounts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegf9f9f9",
                "rowTemplate": "flxAccounts",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxAccountsHeaderDashboard",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-6dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAccounts": "flxAccounts",
                    "flxAccountsHeaderDashboard": "flxAccountsHeaderDashboard",
                    "flxBank": "flxBank",
                    "flxDelete": "flxDelete",
                    "flxHeaderSeperator": "flxHeaderSeperator",
                    "flxHeaderShadows": "flxHeaderShadows",
                    "flxMain": "flxMain",
                    "flxRefresh": "flxRefresh",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgBank": "imgBank",
                    "imgDelete": "imgDelete",
                    "imgError": "imgError",
                    "imgRefresh": "imgRefresh",
                    "imgWarn": "imgWarn",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblBankName": "lblBankName",
                    "lblDelete": "lblDelete",
                    "lblRefresh": "lblRefresh",
                    "lblTypeName": "lblTypeName",
                    "lblTypeValue": "lblTypeValue"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 2
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": true
            });
            var flxSpendingBudget = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "336dp",
                "id": "flxSpendingBudget",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSpendingBudget.setDefaultUnit(kony.flex.DP);
            var flxAccountsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccountsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAccountsHeader.setDefaultUnit(kony.flex.DP);
            var lblTypeName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTypeName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.DashboardAggregated.TypeName"),
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
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "3dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var CopyimgShowAllAccounts0d83f51bc03244e = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "CopyimgShowAllAccounts0d83f51bc03244e",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountsHeader.add(lblTypeName, flxTypeOneShadow, CopyimgShowAllAccounts0d83f51bc03244e);
            var CopyflxAccounts0bc5e44af563049 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "CopyflxAccounts0bc5e44af563049",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxAccounts0bc5e44af563049.setDefaultUnit(kony.flex.DP);
            var CopyimgShowAllAccounts0aa15f22438fe4a = new kony.ui.Image2({
                "height": "15dp",
                "id": "CopyimgShowAllAccounts0aa15f22438fe4a",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "top": "10dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblTypeName0f830a3b262ff40 = new kony.ui.Label({
                "id": "CopylblTypeName0f830a3b262ff40",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Checking Accounts",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblTypeName0ge03850d420d43 = new kony.ui.Label({
                "id": "CopylblTypeName0ge03850d420d43",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "+$0,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxProgressHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxProgressHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20%",
                "skin": "sknFlxda8b08Rounded",
                "zIndex": 2
            }, {}, {});
            flxProgressHeader.setDefaultUnit(kony.flex.DP);
            flxProgressHeader.add();
            var flxDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "9dp",
                "clipBounds": true,
                "height": "12dp",
                "id": "flxDummy",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "20dp",
                "zIndex": 5
            }, {}, {});
            flxDummy.setDefaultUnit(kony.flex.DP);
            flxDummy.add();
            var flxProgressBackgroundHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxProgressBackgroundHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxda8b08Op20Round",
                "zIndex": 3
            }, {}, {});
            flxProgressBackgroundHeader.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundHeader.add();
            CopyflxAccounts0bc5e44af563049.add(CopyimgShowAllAccounts0aa15f22438fe4a, CopylblTypeName0f830a3b262ff40, CopylblTypeName0ge03850d420d43, flxProgressHeader, flxDummy, flxProgressBackgroundHeader);
            var CopyflxAccounts0a5d478bc87fc4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "CopyflxAccounts0a5d478bc87fc4c",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxAccounts0a5d478bc87fc4c.setDefaultUnit(kony.flex.DP);
            var CopyimgShowAllAccounts0cc6ab2ea3a1f40 = new kony.ui.Image2({
                "height": "15dp",
                "id": "CopyimgShowAllAccounts0cc6ab2ea3a1f40",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "top": "10dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblTypeName0gaccfb30c75749 = new kony.ui.Label({
                "id": "CopylblTypeName0gaccfb30c75749",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Checking Accounts",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblTypeName0i9fcf6c7873e48 = new kony.ui.Label({
                "id": "CopylblTypeName0i9fcf6c7873e48",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "+$0,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxProgressHeader0b80354ed11504c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxProgressHeader0b80354ed11504c",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20%",
                "skin": "sknFlxda8b08Rounded",
                "zIndex": 2
            }, {}, {});
            CopyflxProgressHeader0b80354ed11504c.setDefaultUnit(kony.flex.DP);
            CopyflxProgressHeader0b80354ed11504c.add();
            var CopyflxDummy0gb0bb5628e2b44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "9dp",
                "clipBounds": true,
                "height": "12dp",
                "id": "CopyflxDummy0gb0bb5628e2b44",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "20dp",
                "zIndex": 5
            }, {}, {});
            CopyflxDummy0gb0bb5628e2b44.setDefaultUnit(kony.flex.DP);
            CopyflxDummy0gb0bb5628e2b44.add();
            var CopyflxProgressBackgroundHeader0fdc505b4da5b47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxProgressBackgroundHeader0fdc505b4da5b47",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxda8b08Op20Round",
                "zIndex": 3
            }, {}, {});
            CopyflxProgressBackgroundHeader0fdc505b4da5b47.setDefaultUnit(kony.flex.DP);
            CopyflxProgressBackgroundHeader0fdc505b4da5b47.add();
            CopyflxAccounts0a5d478bc87fc4c.add(CopyimgShowAllAccounts0cc6ab2ea3a1f40, CopylblTypeName0gaccfb30c75749, CopylblTypeName0i9fcf6c7873e48, CopyflxProgressHeader0b80354ed11504c, CopyflxDummy0gb0bb5628e2b44, CopyflxProgressBackgroundHeader0fdc505b4da5b47);
            var CopyflxAccounts0f84d1bcdd03147 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "CopyflxAccounts0f84d1bcdd03147",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxAccounts0f84d1bcdd03147.setDefaultUnit(kony.flex.DP);
            var CopyimgShowAllAccounts0dbfb7ec72ba44a = new kony.ui.Image2({
                "height": "15dp",
                "id": "CopyimgShowAllAccounts0dbfb7ec72ba44a",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "top": "10dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblTypeName0e490e9eb3de941 = new kony.ui.Label({
                "id": "CopylblTypeName0e490e9eb3de941",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Checking Accounts",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblTypeName0efd6bfb71d8f44 = new kony.ui.Label({
                "id": "CopylblTypeName0efd6bfb71d8f44",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "+$0,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxProgressHeader0a9229ea5333a4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxProgressHeader0a9229ea5333a4f",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20%",
                "skin": "sknFlxda8b08Rounded",
                "zIndex": 2
            }, {}, {});
            CopyflxProgressHeader0a9229ea5333a4f.setDefaultUnit(kony.flex.DP);
            CopyflxProgressHeader0a9229ea5333a4f.add();
            var CopyflxDummy0cdb13a423d8d48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "9dp",
                "clipBounds": true,
                "height": "12dp",
                "id": "CopyflxDummy0cdb13a423d8d48",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "20dp",
                "zIndex": 5
            }, {}, {});
            CopyflxDummy0cdb13a423d8d48.setDefaultUnit(kony.flex.DP);
            CopyflxDummy0cdb13a423d8d48.add();
            var CopyflxProgressBackgroundHeader0j46464ad9bed4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxProgressBackgroundHeader0j46464ad9bed4a",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxda8b08Op20Round",
                "zIndex": 3
            }, {}, {});
            CopyflxProgressBackgroundHeader0j46464ad9bed4a.setDefaultUnit(kony.flex.DP);
            CopyflxProgressBackgroundHeader0j46464ad9bed4a.add();
            CopyflxAccounts0f84d1bcdd03147.add(CopyimgShowAllAccounts0dbfb7ec72ba44a, CopylblTypeName0e490e9eb3de941, CopylblTypeName0efd6bfb71d8f44, CopyflxProgressHeader0a9229ea5333a4f, CopyflxDummy0cdb13a423d8d48, CopyflxProgressBackgroundHeader0j46464ad9bed4a);
            flxSpendingBudget.add(flxAccountsHeader, CopyflxAccounts0bc5e44af563049, CopyflxAccounts0a5d478bc87fc4c, CopyflxAccounts0f84d1bcdd03147);
            var flxSuggestedOffers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "300dp",
                "id": "flxSuggestedOffers",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSuggestedOffers.setDefaultUnit(kony.flex.DP);
            var flxOffersHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOffersHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxOffersHeader.setDefaultUnit(kony.flex.DP);
            var lblSuggestedOffersTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSuggestedOffersTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.DashboardAggregated.SuggestedOffersTitle"),
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
            var flxOffersShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "3dp",
                "id": "flxOffersShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOffersShadow.setDefaultUnit(kony.flex.DP);
            flxOffersShadow.add();
            flxOffersHeader.add(lblSuggestedOffersTitle, flxOffersShadow);
            var flxScrollContainerAds = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "200dp",
                "horizontalScrollIndicator": true,
                "id": "flxScrollContainerAds",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollContainerAds.setDefaultUnit(kony.flex.DP);
            var flxLoadingIndicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoadingIndicator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoadingIndicator.setDefaultUnit(kony.flex.DP);
            var imgLoadingIndicator = new kony.ui.Image2({
                "height": "100%",
                "id": "imgLoadingIndicator",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "loadermedium.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoadingIndicator.add(imgLoadingIndicator);
            var flxAd1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd1.setDefaultUnit(kony.flex.DP);
            var imgAd1 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd1",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_a95b84fd97e243f8a7c2ca2f6de31c6e,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd1.add(imgAd1);
            var flxAd2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd2.setDefaultUnit(kony.flex.DP);
            var imgAd2 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd2",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_i21f36e9fa654d1bb39a7ed7ff8fa693,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd2.add(imgAd2);
            var flxAd3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd3.setDefaultUnit(kony.flex.DP);
            var imgAd3 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd3",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_a6d8f076520d49378cb8a8110684ca26,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd3.add(imgAd3);
            var flxAd4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd4.setDefaultUnit(kony.flex.DP);
            var imgAd4 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd4",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_fdc5f3b545bd42bf9022b93014afa2d6,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd4.add(imgAd4);
            var flxAd5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd5.setDefaultUnit(kony.flex.DP);
            var imgAd5 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd5",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_ec2b62be31ea456a98d6ebd4e4b51e29,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd5.add(imgAd5);
            flxScrollContainerAds.add(flxLoadingIndicator, flxAd1, flxAd2, flxAd3, flxAd4, flxAd5);
            var flxProgressBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxProgressBar",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "7dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressBar.setDefaultUnit(kony.flex.DP);
            var flxProgressButton1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "38%",
                "isModalContainer": false,
                "skin": "sknflxADADADRadius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton1.setDefaultUnit(kony.flex.DP);
            flxProgressButton1.add();
            var flxProgressButton2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton2.setDefaultUnit(kony.flex.DP);
            flxProgressButton2.add();
            var flxProgressButton3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton3.setDefaultUnit(kony.flex.DP);
            flxProgressButton3.add();
            var flxProgressButton4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton4.setDefaultUnit(kony.flex.DP);
            flxProgressButton4.add();
            var flxProgressButton5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton5.setDefaultUnit(kony.flex.DP);
            flxProgressButton5.add();
            flxProgressBar.add(flxProgressButton1, flxProgressButton2, flxProgressButton3, flxProgressButton4, flxProgressButton5);
            var flxAdInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxAdInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxAdInfo.setDefaultUnit(kony.flex.DP);
            var lblHeading = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblHeading",
                "isVisible": true,
                "skin": "sknLbl424242SSP93pr",
                "text": "Get Home Loans from ANZ Bank with 4.95 per annum interest rate",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var rtxDetails = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "id": "rtxDetails",
                "isVisible": true,
                "linkSkin": "sknRtx0095e4SSPReg26px",
                "skin": "sknRtx727272SSPReg26px",
                "text": "Get Home Loans from ANZ Bank with 4.95 per <br/> annum  interest rates and get free... <a href=\"\"> <b>Learn More </b></a>",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdInfo.add(lblHeading, rtxDetails);
            flxSuggestedOffers.add(flxOffersHeader, flxScrollContainerAds, flxProgressBar, flxAdInfo);
            var flxEngageAdvert = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "198dp",
                "id": "flxEngageAdvert",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxEngageAdvert.setDefaultUnit(kony.flex.DP);
            var flxEngageAdvertBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "94%",
                "id": "flxEngageAdvertBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlx097ce5bbd0db",
                "top": "3%",
                "width": "96%",
                "zIndex": 1
            }, {}, {});
            flxEngageAdvertBg.setDefaultUnit(kony.flex.DP);
            var flxEngageAdvertLeftPanel = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxEngageAdvertLeftPanel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "19dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "15dp",
                "verticalScrollIndicator": true,
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxEngageAdvertLeftPanel.setDefaultUnit(kony.flex.DP);
            var lblEngageAdvertCaption = new kony.ui.Label({
                "id": "lblEngageAdvertCaption",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblffffffSSPBold33px",
                "text": kony.i18n.getLocalizedString("kony.mb.Engage.advertCaption"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEngageAdvertText = new kony.ui.Label({
                "id": "lblEngageAdvertText",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblffffff20px",
                "text": kony.i18n.getLocalizedString("kony.mb.Engage.advertText"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEngageAdvertLeftPanel.add(lblEngageAdvertCaption, lblEngageAdvertText);
            var imgEngageAdvertHand = new kony.ui.Image2({
                "height": "100%",
                "id": "imgEngageAdvertHand",
                "isVisible": true,
                "left": "60%",
                "skin": "slImage",
                "src": "femalehand.png",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnEngageAdvertChatNow = new kony.ui.Button({
                "bottom": "29dp",
                "focusSkin": "sknBtnffffffSSP22px",
                "height": "32dp",
                "id": "btnEngageAdvertChatNow",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknBtnffffffSSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Engage.chatNow"),
                "width": "125dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEngageAdvertBg.add(flxEngageAdvertLeftPanel, imgEngageAdvertHand, btnEngageAdvertChatNow);
            flxEngageAdvert.add(flxEngageAdvertBg);
            var flxDummyWhitespace = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxDummyWhitespace",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxDummyWhitespace.setDefaultUnit(kony.flex.DP);
            flxDummyWhitespace.add();
            var flxWhiteBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxWhiteBg",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "-30dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWhiteBg.setDefaultUnit(kony.flex.DP);
            flxWhiteBg.add();
            flxDashboard.add(flxDummyHorizontalScroll, flxShadow, flxChartSizeToggle, flxSelectAccount, flxAccounts, segAccounts, flxSpendingBudget, flxSuggestedOffers, flxEngageAdvert, flxDummyWhitespace, flxWhiteBg);
            var flxMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 106
            }, {}, {});
            flxMenu.setDefaultUnit(kony.flex.DP);
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
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customFooter.flxMore.onClick = controller.AS_FlexContainer_h8f1601135884cbb9bae6c06f5cd660a;
            customFooter.flxTransfer.onClick = controller.AS_FlexContainer_ffa9b06e930f4dca9bf7ea3176053cc4;
            flxMenu.add(customFooter);
            var flxBlueBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55%",
                "id": "flxBlueBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBlueBg.setDefaultUnit(kony.flex.DP);
            flxBlueBg.add();
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
                "zIndex": 105
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
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
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
            var flxWhite = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "35%",
                "id": "flxWhite",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWhite.setDefaultUnit(kony.flex.DP);
            flxWhite.add();
            var flxBGDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBGDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBGDummy.setDefaultUnit(kony.flex.DP);
            flxBGDummy.add();
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxTitle, flxGradient, noAccounts, flxPageIndicators, flxDashboardHeader, flxDashboard, flxMenu, flxBlueBg, flxHamburger, flxWhite, flxBGDummy, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmDashboardAggregated,
            "allowVerticalBounce": false,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmDashboardAggregated",
            "init": controller.AS_Form_e6a18daf1b8144d3acc7536ddd145c3f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "onHide": controller.AS_Form_fdac697bdba64726878c5d285152a618,
            "postShow": controller.AS_Form_g208abf3af014acab62d649059b9d665,
            "preShow": function(eventobject) {
                controller.AS_Form_f28ffde4c99c4fa28c50b0c77468d050(eventobject);
            },
            "skin": "sknFrmoa78d1Gradient50",
            "title": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title")
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