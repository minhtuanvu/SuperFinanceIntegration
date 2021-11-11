define("WealthModule/frmUnifiedDashboardWealth", function() {
    return function(controller) {
        function addWidgetsfrmUnifiedDashboardWealth() {
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
                "zIndex": 8
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
                    "btnRight": {
                        "isVisible": false
                    },
                    "customHeader": {
                        "isVisible": true
                    },
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": true,
                        "right": "5%"
                    },
                    "imgBack": {
                        "src": "hamburger.png"
                    },
                    "imgSearch": {
                        "src": "combinedbankingwhite.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxTitle.add(flxTitleSeparator, customHeader);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "250dp",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            var noAccounts = new com.kmb.common.noAccounts({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "95%",
                "id": "noAccounts",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 10,
                "overrides": {
                    "flxHeaderShadows": {
                        "isVisible": false
                    },
                    "flxNoAccounts": {
                        "height": "100%",
                        "top": "0%"
                    },
                    "imginfo": {
                        "src": "infofull.png"
                    },
                    "noAccounts": {
                        "height": "95%",
                        "isVisible": false,
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
                "clipBounds": false,
                "height": "7dp",
                "id": "flxPageIndicators",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "17dp",
                "skin": "slFbox",
                "top": "225dp",
                "width": "73dp",
                "zIndex": 16
            }, {}, {});
            flxPageIndicators.setDefaultUnit(kony.flex.DP);
            var flxPageIndicator6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator6",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlxPageIndicatorSelected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator6.setDefaultUnit(kony.flex.DP);
            flxPageIndicator6.add();
            var flxPageIndicator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator5",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlxPageIndicatorUnselected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator5.setDefaultUnit(kony.flex.DP);
            flxPageIndicator5.add();
            var flxPageIndicator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator4",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlxPageIndicatorUnselected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator4.setDefaultUnit(kony.flex.DP);
            flxPageIndicator4.add();
            var flxPageIndicator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator3",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlxPageIndicatorUnselected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator3.setDefaultUnit(kony.flex.DP);
            flxPageIndicator3.add();
            var flxPageIndicator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlxPageIndicatorUnselected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator2.setDefaultUnit(kony.flex.DP);
            flxPageIndicator2.add();
            var flxPageIndicator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxPageIndicator1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlxPageIndicatorSelected",
                "top": "0dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxPageIndicator1.setDefaultUnit(kony.flex.DP);
            flxPageIndicator1.add();
            flxPageIndicators.add(flxPageIndicator6, flxPageIndicator5, flxPageIndicator4, flxPageIndicator3, flxPageIndicator2, flxPageIndicator1);
            var flxDashboardHeader = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "250dp",
                "horizontalScrollIndicator": true,
                "id": "flxDashboardHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "minHeight": "60dp",
                "pagingEnabled": true,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxDashboardHeader.setDefaultUnit(kony.flex.DP);
            var flxWealthContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxWealthContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxWealthContainer.setDefaultUnit(kony.flex.DP);
            var flxTotalAssets = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTotalAssets",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxTotalAssets.setDefaultUnit(kony.flex.DP);
            var lblTotalAsset = new kony.ui.Label({
                "id": "lblTotalAsset",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIwb8dcff18px",
                "text": "Total Assets:",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTotalAssetValue = new kony.ui.Label({
                "id": "lblTotalAssetValue",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknffffffSSPR18px",
                "text": "$61,149.30",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxTotalAssets.add(lblTotalAsset, lblTotalAssetValue);
            var flxSeparate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2px",
                "id": "flxSeparate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "25dp",
                "width": "90%",
                "zIndex": 6
            }, {}, {});
            flxSeparate.setDefaultUnit(kony.flex.DP);
            flxSeparate.add();
            var flxChartDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxChartDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "28dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxChartDetails.setDefaultUnit(kony.flex.DP);
            var flxDonutChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxDonutChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxDonutChart.setDefaultUnit(kony.flex.DP);
            var brwTotalAssetChart = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableNativeCommunication": false,
                "enableZoom": false,
                "height": "100%",
                "id": "brwTotalAssetChart",
                "isVisible": true,
                "left": "5dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "wealthDonutChart/wealthdonutchart.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "browserType": constants.BROWSER_TYPE_WKWEBVIEW
            });
            flxDonutChart.add(brwTotalAssetChart);
            var flxTotalAsset = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxTotalAsset",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTotalAsset.setDefaultUnit(kony.flex.DP);
            var flxImgTotalAsset = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "16dp",
                "id": "flxImgTotalAsset",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40%",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFroundedBorder",
                "top": "0dp",
                "width": "16dp"
            }, {}, {});
            flxImgTotalAsset.setDefaultUnit(kony.flex.DP);
            var imgTotalAsset = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgTotalAsset",
                "isVisible": true,
                "skin": "slImage",
                "src": "personalaccount.png",
                "top": "0dp",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgTotalAsset.add(imgTotalAsset);
            var lblTotalAssets = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTotalAssets",
                "isVisible": true,
                "left": "45%",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Total Assets",
                "textStyle": {},
                "top": "6.08%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxTotalAsset.add(flxImgTotalAsset, lblTotalAssets);
            flxChartDetails.add(flxDonutChart, flxTotalAsset);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlx003e75Bg",
                "top": "270dp",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblTitle": "Cash (50%)",
                    "lblValue": "$30,574.50"
                }, {
                    "lblTitle": "Stocks (20%)",
                    "lblValue": "$12,229.80"
                }, {
                    "lblTitle": "Bond  (16%)",
                    "lblValue": "$9,783.84"
                }, {
                    "lblTitle": "Mutual Fund  (10%)",
                    "lblValue": "$6,114.93"
                }, {
                    "lblTitle": "Term Deposit  (4%)",
                    "lblValue": "$2,445.97"
                }],
                "groupCells": false,
                "id": "segDetails",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTotalAsset",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAssetValues": "flxAssetValues",
                    "flxDot": "flxDot",
                    "flxSeperator": "flxSeperator",
                    "flxTitle": "flxTitle",
                    "flxTotalAsset": "flxTotalAsset",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": false
            });
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            flxDetails.add(segDetails, flxSeparator1);
            flxWealthContainer.add(flxTotalAssets, flxSeparate, flxChartDetails, flxDetails);
            var flxApprovalRequest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxApprovalRequest",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxApprovalRequest.setDefaultUnit(kony.flex.DP);
            var flxApprovalContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxApprovalContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-4.95%",
                "width": "48%",
                "zIndex": 2
            }, {}, {});
            flxApprovalContainer.setDefaultUnit(kony.flex.DP);
            var flxApprovalInnerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "149dp",
                "id": "flxApprovalInnerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlx003463Bg",
                "top": "6%",
                "width": "90%"
            }, {}, {});
            flxApprovalInnerContainer.setDefaultUnit(kony.flex.DP);
            var flxApprovalTitleContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalTitleContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%"
            }, {}, {});
            flxApprovalTitleContainer.setDefaultUnit(kony.flex.DP);
            var lblApprovalHeader = new kony.ui.Label({
                "id": "lblApprovalHeader",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Approvals",
                "textStyle": {},
                "top": "8%",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxApprovalImageContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxApprovalImageContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "11dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxApprovalImageContainer.setDefaultUnit(kony.flex.DP);
            var imgApprovalArrow = new kony.ui.Image2({
                "height": "18dp",
                "id": "imgApprovalArrow",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "approvalarrow.png",
                "top": "0dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApprovalImageContainer.add(imgApprovalArrow);
            flxApprovalTitleContainer.add(lblApprovalHeader, flxApprovalImageContainer);
            var flxApprovalSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxApprovalSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBgOp15",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxApprovalSeparator.setDefaultUnit(kony.flex.DP);
            flxApprovalSeparator.add();
            var flxApprovalTransactionContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalTransactionContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%"
            }, {}, {});
            flxApprovalTransactionContainer.setDefaultUnit(kony.flex.DP);
            var lblTransaction = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTransaction",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "Transactions",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTransactionValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTransactionValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "00",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxApprovalTransactionContainer.add(lblTransaction, lblTransactionValue);
            var flxApprovalACHTransactionContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalACHTransactionContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "18dp",
                "width": "100%"
            }, {}, {});
            flxApprovalACHTransactionContainer.setDefaultUnit(kony.flex.DP);
            var lblACHTransaction = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblACHTransaction",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "ACH transactions",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblACHTransactionValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblACHTransactionValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "00",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxApprovalACHTransactionContainer.add(lblACHTransaction, lblACHTransactionValue);
            var flxApprovalACHFileContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalACHFileContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "18dp",
                "width": "100%"
            }, {}, {});
            flxApprovalACHFileContainer.setDefaultUnit(kony.flex.DP);
            var lblACHFile = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblACHFile",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "ACH Files",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblACHFileValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblACHFileValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "00",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxApprovalACHFileContainer.add(lblACHFile, lblACHFileValue);
            flxApprovalInnerContainer.add(flxApprovalTitleContainer, flxApprovalSeparator, flxApprovalTransactionContainer, flxApprovalACHTransactionContainer, flxApprovalACHFileContainer);
            flxApprovalContainer.add(flxApprovalInnerContainer);
            var flxRequestContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRequestContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "52%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-5%",
                "width": "48%",
                "zIndex": 2
            }, {}, {});
            flxRequestContainer.setDefaultUnit(kony.flex.DP);
            var flxRequestInnerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "150dp",
                "id": "flxRequestInnerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "10%",
                "skin": "sknFlx003463Bg",
                "top": "6%",
                "width": "90%"
            }, {}, {});
            flxRequestInnerContainer.setDefaultUnit(kony.flex.DP);
            var flxRequestTitleContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxRequestTitleContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%"
            }, {}, {});
            flxRequestTitleContainer.setDefaultUnit(kony.flex.DP);
            var lblRequestHeader = new kony.ui.Label({
                "id": "lblRequestHeader",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Requests",
                "textStyle": {},
                "top": "8%",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxRequestImageContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRequestImageContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "11dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxRequestImageContainer.setDefaultUnit(kony.flex.DP);
            var imgRequestArrow = new kony.ui.Image2({
                "height": "18dp",
                "id": "imgRequestArrow",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "approvalarrow.png",
                "top": "0dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRequestImageContainer.add(imgRequestArrow);
            flxRequestTitleContainer.add(lblRequestHeader, flxRequestImageContainer);
            var flxRequestSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxRequestSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBgOp15",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRequestSeparator.setDefaultUnit(kony.flex.DP);
            flxRequestSeparator.add();
            var flxRequestPendingContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxRequestPendingContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%"
            }, {}, {});
            flxRequestPendingContainer.setDefaultUnit(kony.flex.DP);
            var lblPending = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPending",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "Pending",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblPendingValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPendingValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "0",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRequestPendingContainer.add(lblPending, lblPendingValue);
            var flxRequestApprovedContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxRequestApprovedContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "18dp",
                "width": "100%"
            }, {}, {});
            flxRequestApprovedContainer.setDefaultUnit(kony.flex.DP);
            var lblApproved = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApproved",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "Approved",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblApprovedValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApprovedValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "0",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRequestApprovedContainer.add(lblApproved, lblApprovedValue);
            var flxRequestRejectedContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxRequestRejectedContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "18dp",
                "width": "100%"
            }, {}, {});
            flxRequestRejectedContainer.setDefaultUnit(kony.flex.DP);
            var lblRejected = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRejected",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLblFFFFFFSSPRegular24px",
                "text": "Rejected",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblRejectedValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRejectedValue",
                "isVisible": true,
                "right": "11dp",
                "skin": "sknLblFFFFFFSSPSemiBold24px",
                "text": "0",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRequestRejectedContainer.add(lblRejected, lblRejectedValue);
            flxRequestInnerContainer.add(flxRequestTitleContainer, flxRequestSeparator, flxRequestPendingContainer, flxRequestApprovedContainer, flxRequestRejectedContainer);
            flxRequestContainer.add(flxRequestInnerContainer);
            var flxApprovalAndRequestContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxApprovalAndRequestContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "170dp",
                "width": "100%"
            }, {}, {});
            flxApprovalAndRequestContainer.setDefaultUnit(kony.flex.DP);
            var flximgApprovalAndRequest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "16dp",
                "id": "flximgApprovalAndRequest",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "29%",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFroundedBorder",
                "top": "0dp",
                "width": "16dp"
            }, {}, {});
            flximgApprovalAndRequest.setDefaultUnit(kony.flex.DP);
            var imgApprovalAndRequest = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgApprovalAndRequest",
                "isVisible": true,
                "skin": "slImage",
                "src": "businessaccount.png",
                "top": "0dp",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flximgApprovalAndRequest.add(imgApprovalAndRequest);
            var lblApprovalRequestTitle = new kony.ui.Label({
                "centerY": "56.08%",
                "id": "lblApprovalRequestTitle",
                "isVisible": true,
                "left": "35.07%",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Approvals & Requests",
                "textStyle": {},
                "top": "6.08%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxApprovalAndRequestContainer.add(flximgApprovalAndRequest, lblApprovalRequestTitle);
            var flxApprovalSeg = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxApprovalSeg",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "270dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxApprovalSeg.setDefaultUnit(kony.flex.DP);
            var flxSepratorApprovals = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepratorApprovals",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepratorApprovals.setDefaultUnit(kony.flex.DP);
            flxSepratorApprovals.add();
            var flxRecentTranactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxRecentTranactions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffOp15",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecentTranactions.setDefaultUnit(kony.flex.DP);
            var lblRecenTransactions = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblRecenTransactions",
                "isVisible": true,
                "skin": "sknLblb8dcffSSP32px",
                "text": "Recent Transactions",
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
            flxRecentTranactions.add(lblRecenTransactions);
            var flxSepApprovals = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepApprovals",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepApprovals.setDefaultUnit(kony.flex.DP);
            flxSepApprovals.add();
            var flxRecentTransactions = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "80%",
                "horizontalScrollIndicator": true,
                "id": "flxRecentTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxRecentTransactions.setDefaultUnit(kony.flex.DP);
            flxRecentTransactions.add();
            var segRecentTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblAmountSpent": "",
                    "lblPaymentMode": "",
                    "lblSpendingCategory": "",
                    "lblTotalAmount": ""
                }],
                "groupCells": false,
                "height": "52%",
                "id": "segRecentTransactions",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTransparant",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxChartSpendingNew",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxChartSpendingNew": "flxChartSpendingNew",
                    "flxSeperator": "flxSeperator",
                    "flxSpending": "flxSpending",
                    "flxSpendingSub": "flxSpendingSub",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblPaymentMode": "lblPaymentMode",
                    "lblSpendingCategory": "lblSpendingCategory",
                    "lblTotalAmount": "lblTotalAmount"
                },
                "widgetSkin": "segTransparant",
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
            var flxViewTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxViewTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewTransactions.setDefaultUnit(kony.flex.DP);
            var btnViewTransactions = new kony.ui.Button({
                "focusSkin": "sknBtnTransparentffffffBorder1PxRadius2PxFocus",
                "height": "100%",
                "id": "btnViewTransactions",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnTransparentffffffBorder1PxRadius2PxNormal",
                "text": kony.i18n.getLocalizedString("kony.mb.Dashboard.ViewAllTransactions"),
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxViewTransactions.add(btnViewTransactions);
            flxApprovalSeg.add(flxSepratorApprovals, flxRecentTranactions, flxSepApprovals, flxRecentTransactions, segRecentTransactions, flxViewTransactions);
            flxApprovalRequest.add(flxApprovalContainer, flxRequestContainer, flxApprovalAndRequestContainer, flxApprovalSeg);
            var flxMultiLineBarChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMultiLineBarChart",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMultiLineBarChart.setDefaultUnit(kony.flex.DP);
            var flxBrowserBarchart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "250dp",
                "id": "flxBrowserBarchart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxBrowserBarchart.setDefaultUnit(kony.flex.DP);
            var browserMultiLine = new kony.ui.Browser({
                "detectTelNumber": false,
                "enableZoom": false,
                "height": "100%",
                "id": "browserMultiLine",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "chartist/multilinebarchart.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "browserType": constants.BROWSER_TYPE_WKWEBVIEW,
                "bounces": false
            });
            flxBrowserBarchart.add(browserMultiLine);
            var flxCashPositionContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxCashPositionContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "200dp",
                "width": "100%"
            }, {}, {});
            flxCashPositionContainer.setDefaultUnit(kony.flex.DP);
            var flximgCashPositionTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "16dp",
                "id": "flximgCashPositionTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25%",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFroundedBorder",
                "top": "0dp",
                "width": "16dp"
            }, {}, {});
            flximgCashPositionTitle.setDefaultUnit(kony.flex.DP);
            var imgCashPositionTitle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgCashPositionTitle",
                "isVisible": true,
                "skin": "slImage",
                "src": "businessaccount.png",
                "top": "0dp",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flximgCashPositionTitle.add(imgCashPositionTitle);
            var lblCashPositionTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCashPositionTitle",
                "isVisible": true,
                "left": "31%",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Monthly Business Cash Position",
                "textStyle": {},
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCashPositionContainer.add(flximgCashPositionTitle, lblCashPositionTitle);
            var flxCashpos = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCashpos",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "270dp",
                "width": "100%"
            }, {}, {});
            flxCashpos.setDefaultUnit(kony.flex.DP);
            var flxSepCashPos = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepCashPos",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepCashPos.setDefaultUnit(kony.flex.DP);
            flxSepCashPos.add();
            var flxMonthDet = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxMonthDet",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffOp15",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMonthDet.setDefaultUnit(kony.flex.DP);
            var lblMonthAndYearCashPos = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblMonthAndYearCashPos",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "text": "June - 2018",
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
            var flxPrevMontCashPos = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPrevMontCashPos",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "70dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxPrevMontCashPos.setDefaultUnit(kony.flex.DP);
            var imgPrevMonthCashPos = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPrevMonthCashPos",
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
            flxPrevMontCashPos.add(imgPrevMonthCashPos);
            var flxNextMonthCashPos = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNextMonthCashPos",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "70dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxNextMonthCashPos.setDefaultUnit(kony.flex.DP);
            var imgNextMonthCashPos = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgNextMonthCashPos",
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
            flxNextMonthCashPos.add(imgNextMonthCashPos);
            flxMonthDet.add(lblMonthAndYearCashPos, flxPrevMontCashPos, flxNextMonthCashPos);
            var flxSepCash = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepCash",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepCash.setDefaultUnit(kony.flex.DP);
            flxSepCash.add();
            var flxSegCashPos = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxSegCashPos",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSegCashPos.setDefaultUnit(kony.flex.DP);
            flxSegCashPos.add();
            var segCashpos = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }],
                "groupCells": false,
                "height": "52%",
                "id": "segCashpos",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTransparant",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxTotalBalance",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeperator": "flxSeperator",
                    "flxSpendingSub": "flxSpendingSub",
                    "flxTotalBalance": "flxTotalBalance",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblPaymentMode": "lblPaymentMode"
                },
                "widgetSkin": "segTransparant",
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
            flxCashpos.add(flxSepCashPos, flxMonthDet, flxSepCash, flxSegCashPos, segCashpos);
            flxMultiLineBarChart.add(flxBrowserBarchart, flxCashPositionContainer, flxCashpos);
            var flxSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSummary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
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
                "skin": "sknlblB8DCFFSSPR15px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.netWorthSummary"),
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblBankName = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBankName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblffffffSSP56px",
                "text": "$12,783.54",
                "textStyle": {},
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
                "skin": "sknlblB8DCFFSSPR15px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.Assets"),
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
            var lblAssetsValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAssetsValue",
                "isVisible": true,
                "skin": "sknLblffffffSSP44px",
                "text": "+$783.54",
                "textStyle": {},
                "top": "12dp",
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
            flxAssets.add(lblAssetsTitle, lblAssetsValue);
            var flxVertSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxVertSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "5dp",
                "zIndex": 1
            }, {}, {});
            flxVertSeperator.setDefaultUnit(kony.flex.DP);
            var flxdot1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxdot1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxB8DCFFOpacity35",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxdot1.setDefaultUnit(kony.flex.DP);
            flxdot1.add();
            var flxdot2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxdot2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxB8DCFFOpacity35",
                "top": "3dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxdot2.setDefaultUnit(kony.flex.DP);
            flxdot2.add();
            var flxdot3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxdot3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxB8DCFFOpacity35",
                "top": "3dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxdot3.setDefaultUnit(kony.flex.DP);
            flxdot3.add();
            var flxdot4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxdot4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxB8DCFFOpacity35",
                "top": "3dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxdot4.setDefaultUnit(kony.flex.DP);
            flxdot4.add();
            var flxdot5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxdot5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxB8DCFFOpacity35",
                "top": "3dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxdot5.setDefaultUnit(kony.flex.DP);
            flxdot5.add();
            var flxdot6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxdot6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxB8DCFFOpacity35",
                "top": "3dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxdot6.setDefaultUnit(kony.flex.DP);
            flxdot6.add();
            var flxdot7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxdot7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxB8DCFFOpacity35",
                "top": "3dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxdot7.setDefaultUnit(kony.flex.DP);
            flxdot7.add();
            var flxdot8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxdot8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxB8DCFFOpacity35",
                "top": "3dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxdot8.setDefaultUnit(kony.flex.DP);
            flxdot8.add();
            var flxdot9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxdot9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxB8DCFFOpacity35",
                "top": "3dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxdot9.setDefaultUnit(kony.flex.DP);
            flxdot9.add();
            flxVertSeperator.add(flxdot1, flxdot2, flxdot3, flxdot4, flxdot5, flxdot6, flxdot7, flxdot8, flxdot9);
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
                "skin": "sknlblB8DCFFSSPR15px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.debt"),
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
            var lblDebtValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDebtValue",
                "isVisible": true,
                "skin": "sknLblffffffSSP44px",
                "text": "-$9,568.54",
                "textStyle": {},
                "top": "12dp",
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
            flxDebt.add(lblDebtTitle, lblDebtValue);
            flxSummaryWrapper.add(flxAssets, flxVertSeperator, flxDebt);
            var flxBalanceOverview = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxBalanceOverview",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            flxBalanceOverview.setDefaultUnit(kony.flex.DP);
            var flximgPersonalAccnt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "16dp",
                "id": "flximgPersonalAccnt",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "31%",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFroundedBorder",
                "top": "0dp",
                "width": "16dp"
            }, {}, {});
            flximgPersonalAccnt.setDefaultUnit(kony.flex.DP);
            var imgPersonalAccnt = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgPersonalAccnt",
                "isVisible": true,
                "skin": "slImage",
                "src": "personalaccount.png",
                "top": "0dp",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [1, 1, 1, 1],
                "paddingInPixel": false
            }, {});
            flximgPersonalAccnt.add(imgPersonalAccnt);
            var lblBalanceOverview = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBalanceOverview",
                "isVisible": true,
                "left": "36%",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.netWorthSummary"),
                "textStyle": {},
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxBalanceOverview.add(flximgPersonalAccnt, lblBalanceOverview);
            flxNetSummary.add(flxShowGraph, lblNetWorthSummary, lblBankName, flxSummaryWrapper, flxBalanceOverview);
            var flxSummarySegment = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxSummarySegment",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "270dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSummarySegment.setDefaultUnit(kony.flex.DP);
            var flxSepratorSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepratorSummary",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepratorSummary.setDefaultUnit(kony.flex.DP);
            flxSepratorSummary.add();
            var flxMonthDetSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxMonthDetSummary",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffOp15",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMonthDetSummary.setDefaultUnit(kony.flex.DP);
            var lblMonthAndYearSummary = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblMonthAndYearSummary",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "text": "June - 2018",
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
            flxMonthDetSummary.add(lblMonthAndYearSummary, flxPrevMonthSummary, flxNextMonthSummary);
            var flxSepSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepSummary",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepSummary.setDefaultUnit(kony.flex.DP);
            flxSepSummary.add();
            var flxSummarySeg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxSummarySeg",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFSbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSummarySeg.setDefaultUnit(kony.flex.DP);
            flxSummarySeg.add();
            var segSummary = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }],
                "groupCells": false,
                "height": "52%",
                "id": "segSummary",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTransparant",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxTotalBalance",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeperator": "flxSeperator",
                    "flxSpendingSub": "flxSpendingSub",
                    "flxTotalBalance": "flxTotalBalance",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblPaymentMode": "lblPaymentMode"
                },
                "widgetSkin": "segTransparant",
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
            var flxViewTransactionsSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxViewTransactionsSummary",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewTransactionsSummary.setDefaultUnit(kony.flex.DP);
            var btnViewTransactionsSummary = new kony.ui.Button({
                "focusSkin": "sknBtnTransparentffffffBorder1PxRadius2PxFocus",
                "height": "100%",
                "id": "btnViewTransactionsSummary",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnTransparentffffffBorder1PxRadius2PxNormal",
                "text": kony.i18n.getLocalizedString("kony.mb.Dashboard.ViewAllTransactions"),
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxViewTransactionsSummary.add(btnViewTransactionsSummary);
            flxSummarySegment.add(flxSepratorSummary, flxMonthDetSummary, flxSepSummary, flxSummarySeg, segSummary, flxViewTransactionsSummary);
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
            var flxBroswerChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "250dp",
                "id": "flxBroswerChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxBroswerChart.setDefaultUnit(kony.flex.DP);
            var browserChart = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "id": "browserChart",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "chartist/donutchart.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {
                "browserType": constants.BROWSER_TYPE_WKWEBVIEW,
                "bounces": false
            });
            flxBroswerChart.add(browserChart);
            var flxDonutSegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0dp",
                "id": "flxDonutSegment",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
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
                    "lblAmountSpent": "$2,999.70",
                    "lblSpending": "Entertainment - 30%"
                }, {
                    "lblAmountSpent": "$1,999.80",
                    "lblSpending": "Rent - 20%"
                }, {
                    "lblAmountSpent": "$999.90",
                    "lblSpending": "Grocery - 10%"
                }, {
                    "lblAmountSpent": "$1,499.85",
                    "lblSpending": "Utility - 15%"
                }, {
                    "lblAmountSpent": "$999.90",
                    "lblSpending": "Travel - 10%"
                }, {
                    "lblAmountSpent": "$999.90",
                    "lblSpending": "Medical - 10%"
                }, {
                    "lblAmountSpent": "$499.95",
                    "lblSpending": "Auto - 5%"
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
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
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
            }, {
                "showProgressIndicator": false
            });
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
                "text": "$9,999.00",
                "textStyle": {},
                "top": "83dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTotalSpending = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalSpending",
                "isVisible": false,
                "skin": "sknLblb8dcff20px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.MonthlySpending"),
                "textStyle": {},
                "top": "109dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxMonthlySpendingContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxMonthlySpendingContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "198dp",
                "width": "100%"
            }, {}, {});
            flxMonthlySpendingContainer.setDefaultUnit(kony.flex.DP);
            var flximgMonthlySpending = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "16dp",
                "id": "flximgMonthlySpending",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "29%",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFroundedBorder",
                "top": "0dp",
                "width": "16dp"
            }, {}, {});
            flximgMonthlySpending.setDefaultUnit(kony.flex.DP);
            var imgMonthlySpending = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgMonthlySpending",
                "isVisible": true,
                "skin": "slImage",
                "src": "businessaccount.png",
                "top": "0dp",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flximgMonthlySpending.add(imgMonthlySpending);
            var lblMonthlySpending = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMonthlySpending",
                "isVisible": true,
                "left": "35%",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Monthly Personal Spending",
                "textStyle": {},
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxMonthlySpendingContainer.add(flximgMonthlySpending, lblMonthlySpending);
            var flxSegGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSegGraph",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "270dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegGraph.setDefaultUnit(kony.flex.DP);
            var flxSepratorApprovalsGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepratorApprovalsGraph",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepratorApprovalsGraph.setDefaultUnit(kony.flex.DP);
            flxSepratorApprovalsGraph.add();
            var flxMonthDetGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxMonthDetGraph",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffOp15",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMonthDetGraph.setDefaultUnit(kony.flex.DP);
            var lblMonthAndYearGraph = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblMonthAndYearGraph",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "text": "June - 2018",
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
            var flxPrevMonthGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPrevMonthGraph",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "70dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxPrevMonthGraph.setDefaultUnit(kony.flex.DP);
            var imgPrevMonthGraph = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPrevMonthGraph",
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
            flxPrevMonthGraph.add(imgPrevMonthGraph);
            var flxNextMonthGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNextMonthGraph",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "70dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxNextMonthGraph.setDefaultUnit(kony.flex.DP);
            var imgNextMonthGraph = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgNextMonthGraph",
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
            flxNextMonthGraph.add(imgNextMonthGraph);
            flxMonthDetGraph.add(lblMonthAndYearGraph, flxPrevMonthGraph, flxNextMonthGraph);
            var flxSepApprovalsGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepApprovalsGraph",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepApprovalsGraph.setDefaultUnit(kony.flex.DP);
            flxSepApprovalsGraph.add();
            var flxSeg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxSeg",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSeg.setDefaultUnit(kony.flex.DP);
            flxSeg.add();
            var segGraph = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }],
                "groupCells": false,
                "height": "41%",
                "id": "segGraph",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTransparant",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxTotalBalance",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeperator": "flxSeperator",
                    "flxSpendingSub": "flxSpendingSub",
                    "flxTotalBalance": "flxTotalBalance",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblPaymentMode": "lblPaymentMode"
                },
                "widgetSkin": "segTransparant",
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
            var flxViewTransactionsGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxViewTransactionsGraph",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewTransactionsGraph.setDefaultUnit(kony.flex.DP);
            var btnViewTransactionsGraph = new kony.ui.Button({
                "focusSkin": "sknBtnTransparentffffffBorder1PxRadius2PxFocus",
                "height": "100%",
                "id": "btnViewTransactionsGraph",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnTransparentffffffBorder1PxRadius2PxNormal",
                "text": kony.i18n.getLocalizedString("kony.mb.Dashboard.ViewAllTransactions"),
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxViewTransactionsGraph.add(btnViewTransactionsGraph);
            flxSegGraph.add(flxSepratorApprovalsGraph, flxMonthDetGraph, flxSepApprovalsGraph, flxSeg, segGraph, flxViewTransactionsGraph);
            flxGraph.add(flxBroswerChart, flxDonutSegment, lblTotalSpendingValue, lblTotalSpending, flxMonthlySpendingContainer, flxSegGraph);
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
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var FlxBrowBarChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "250dp",
                "id": "FlxBrowBarChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            FlxBrowBarChart.setDefaultUnit(kony.flex.DP);
            var browserBarChart = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "id": "browserBarChart",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "chartist/barchart.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "browserType": constants.BROWSER_TYPE_WKWEBVIEW,
                "bounces": false
            });
            FlxBrowBarChart.add(browserBarChart);
            var flxBarSegment = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxBarSegment",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "270dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBarSegment.setDefaultUnit(kony.flex.DP);
            var flxSepratorBarSegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepratorBarSegment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepratorBarSegment.setDefaultUnit(kony.flex.DP);
            flxSepratorBarSegment.add();
            var flxMonthDetBarSegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxMonthDetBarSegment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffOp15",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMonthDetBarSegment.setDefaultUnit(kony.flex.DP);
            var lblMonthAndYearCashBarSeg = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblMonthAndYearCashBarSeg",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "text": "June - 2018",
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
            var flxPrevMontBarSeg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPrevMontBarSeg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "70dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxPrevMontBarSeg.setDefaultUnit(kony.flex.DP);
            var imgPrevMonthBarSeg = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPrevMonthBarSeg",
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
            flxPrevMontBarSeg.add(imgPrevMonthBarSeg);
            var flxNextMonthBarSeg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNextMonthBarSeg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "70dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxNextMonthBarSeg.setDefaultUnit(kony.flex.DP);
            var imgNextMonthBarSeg = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgNextMonthBarSeg",
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
            flxNextMonthBarSeg.add(imgNextMonthBarSeg);
            flxMonthDetBarSegment.add(lblMonthAndYearCashBarSeg, flxPrevMontBarSeg, flxNextMonthBarSeg);
            var flxSepBarSeg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepBarSeg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxb8dcff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepBarSeg.setDefaultUnit(kony.flex.DP);
            flxSepBarSeg.add();
            var flxSegmentBarGraph = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "90%",
                "id": "flxSegmentBarGraph",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSegmentBarGraph.setDefaultUnit(kony.flex.DP);
            flxSegmentBarGraph.add();
            var segBar = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }, {
                    "lblAmountSpent": "Rent - 45%",
                    "lblPaymentMode": "$134.00"
                }],
                "groupCells": false,
                "height": "52%",
                "id": "segBar",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTransparant",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxTotalBalance",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeperator": "flxSeperator",
                    "flxSpendingSub": "flxSpendingSub",
                    "flxTotalBalance": "flxTotalBalance",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblPaymentMode": "lblPaymentMode"
                },
                "widgetSkin": "segTransparant",
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
            var flxViewTransactionsBarSeg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxViewTransactionsBarSeg",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewTransactionsBarSeg.setDefaultUnit(kony.flex.DP);
            var btnViewTransactionsBarSeg = new kony.ui.Button({
                "focusSkin": "sknBtnTransparentffffffBorder1PxRadius2PxFocus",
                "height": "100%",
                "id": "btnViewTransactionsBarSeg",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnTransparentffffffBorder1PxRadius2PxNormal",
                "text": kony.i18n.getLocalizedString("kony.mb.Dashboard.ViewAllTransactions"),
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxViewTransactionsBarSeg.add(btnViewTransactionsBarSeg);
            flxBarSegment.add(flxSepratorBarSegment, flxMonthDetBarSegment, flxSepBarSeg, flxSegmentBarGraph, segBar, flxViewTransactionsBarSeg);
            var flxTotalAccountBalanceContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxTotalAccountBalanceContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "198dp",
                "width": "100%"
            }, {}, {});
            flxTotalAccountBalanceContainer.setDefaultUnit(kony.flex.DP);
            var flximgTotalAccountBalancesContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "16dp",
                "id": "flximgTotalAccountBalancesContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "29%",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFroundedBorder",
                "top": "0dp",
                "width": "16dp"
            }, {}, {});
            flximgTotalAccountBalancesContainer.setDefaultUnit(kony.flex.DP);
            var imgTotalAccountBalancesContainer = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgTotalAccountBalancesContainer",
                "isVisible": true,
                "skin": "slImage",
                "src": "businessaccount.png",
                "top": "0dp",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flximgTotalAccountBalancesContainer.add(imgTotalAccountBalancesContainer);
            var lblTotalAccountBalancesContainer = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTotalAccountBalancesContainer",
                "isVisible": true,
                "left": "35%",
                "skin": "sknLblffffffSSPSemiBold26px",
                "text": "Total Account Balances",
                "textStyle": {},
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxTotalAccountBalanceContainer.add(flximgTotalAccountBalancesContainer, lblTotalAccountBalancesContainer);
            flxBarChart.add(lblBarTitle, FlxBrowBarChart, flxBarSegment, flxTotalAccountBalanceContainer);
            flxDashboardHeader.add(flxWealthContainer, flxApprovalRequest, flxMultiLineBarChart, flxSummary, flxGraph, flxBarChart);
            var flxDashboard = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bottom": "60dp",
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
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 7
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
                "onTouchStart": controller.AS_FlexScrollContainer_d5aab77c9f2d44cf97a7ef51151b5037,
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
            var flxFour = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFour",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFour.setDefaultUnit(kony.flex.DP);
            flxFour.add();
            var flxFive = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFive",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFive.setDefaultUnit(kony.flex.DP);
            flxFive.add();
            flxDummyHorizontalScroll.add(flxOne, flxTwo, flxThree, flxFour, flxFive);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "27dp",
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
            var flxSelectAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSelectAccount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxbgf6f6f6",
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
                "skin": "sknflxbgf6f6f6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxSelectedAccounts.setDefaultUnit(kony.flex.DP);
            var lblSelectedAccountType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSelectedAccountType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl0095e4SSPReg32px",
                "text": "All Accounts",
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
                "right": "18%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "18%",
                "zIndex": 1
            }, {}, {});
            flxShowAllAccountTypes.setDefaultUnit(kony.flex.DP);
            var imgShowAllAccounts = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "imgShowAllAccounts",
                "isVisible": true,
                "right": "15dp",
                "skin": "slImage",
                "src": "filters.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxShowAllAccountTypes.add(imgShowAllAccounts);
            var flxSearchAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxSearchAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0",
                "width": "18%"
            }, {}, {});
            flxSearchAccounts.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "searchicon2.png",
                "top": "0",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSearchFilterSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchFilterSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "1%"
            }, {}, {});
            flxSearchFilterSeparator.setDefaultUnit(kony.flex.DP);
            flxSearchFilterSeparator.add();
            flxSearchAccounts.add(imgSearchIcon, flxSearchFilterSeparator);
            flxSelectedAccounts.add(lblSelectedAccountType, flxShowAllAccountTypes, flxSearchAccounts);
            var flxAccountTypes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccountTypes",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountTypes.setDefaultUnit(kony.flex.DP);
            var flxFilterHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxFilterHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxFilterHeader.setDefaultUnit(kony.flex.DP);
            var lblFilterHeader = new kony.ui.Label({
                "centerY": "50%",
                "height": "20dp",
                "id": "lblFilterHeader",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl424242SSPRBold15px",
                "text": "Label",
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
            var imgFilterClose = new kony.ui.Image2({
                "centerY": "50%",
                "height": "12dp",
                "id": "imgFilterClose",
                "isVisible": true,
                "right": "15dp",
                "skin": "slImage",
                "src": "closeicon.png",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxFilterHeader.add(lblFilterHeader, imgFilterClose, flxSeparator);
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
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxAccountShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6dp",
                "id": "flxAccountShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxgradient000000",
                "top": "0",
                "width": "100%",
                "zIndex": 10000000
            }, {}, {});
            flxAccountShadow.setDefaultUnit(kony.flex.DP);
            flxAccountShadow.add();
            flxAccountTypes.add(flxFilterHeader, segAccountTypes, flxAccountShadow);
            var flxSearchContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxSearchContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSearchContainer.setDefaultUnit(kony.flex.DP);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxHeaderSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
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
                    "btnCancel": {
                        "centerY": "45%",
                        "isVisible": true,
                        "right": "15dp"
                    },
                    "customSearchbox": {
                        "height": "100%",
                        "top": "0dp"
                    },
                    "flxHeaderShadow": {
                        "bottom": "0dp",
                        "clipBounds": false,
                        "zIndex": 10
                    },
                    "flxSearchMain": {
                        "isVisible": true
                    },
                    "imgSearchIcon": {
                        "centerY": "45%",
                        "src": "search.png"
                    },
                    "tbxSearch": {
                        "centerY": "45%",
                        "height": "70%",
                        "width": "75%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            flxSearchContainer.add(flxHeaderSearchbox);
            flxSelectAccount.add(flxSelectedAccounts, flxAccountTypes, flxSearchContainer);
            var flxShadow3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadow3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueHeaderShadowWhite2Dark",
                "top": "-10dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxShadow3.setDefaultUnit(kony.flex.DP);
            flxShadow3.add();
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
            var flxAccountsHeaderDashboardExact = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccountsHeaderDashboardExact",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAccountsHeaderDashboardExact.setDefaultUnit(kony.flex.DP);
            var flxTitleHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTitleHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTitleHeader.setDefaultUnit(kony.flex.DP);
            var lblInvestmentSummary = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblInvestmentSummary",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "text": "Investment Summary (3)",
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
            var flxRecentActivity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRecentActivity",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%"
            }, {}, {});
            flxRecentActivity.setDefaultUnit(kony.flex.DP);
            var lblRecentActivity = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRecentActivity",
                "isVisible": true,
                "right": "39dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "Recent Activity",
                "textStyle": {},
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgChevronOne = new kony.ui.Image2({
                "centerY": "53.85%",
                "height": "20dp",
                "id": "imgChevronOne",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 20
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRecentActivity.add(lblRecentActivity, imgChevronOne);
            flxTitleHeader.add(lblInvestmentSummary, flxRecentActivity);
            var flxShortSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShortSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxShortSeperator.setDefaultUnit(kony.flex.DP);
            flxShortSeperator.add();
            var flxHeaderSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxHeaderSeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "12dp",
                "zIndex": 1
            }, {}, {});
            flxHeaderSeperator.setDefaultUnit(kony.flex.DP);
            flxHeaderSeperator.add();
            var flxHeaderShadows = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12dp",
                "id": "flxHeaderShadows",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadows.setDefaultUnit(kony.flex.DP);
            var CopyflxTypeOneShadow0a844eb94d63643 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6dp",
                "id": "CopyflxTypeOneShadow0a844eb94d63643",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow2",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxTypeOneShadow0a844eb94d63643.setDefaultUnit(kony.flex.DP);
            CopyflxTypeOneShadow0a844eb94d63643.add();
            var flxShadowBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom2",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBottom.setDefaultUnit(kony.flex.DP);
            flxShadowBottom.add();
            flxHeaderShadows.add(CopyflxTypeOneShadow0a844eb94d63643, flxShadowBottom);
            flxAccountsHeaderDashboardExact.add(flxTitleHeader, flxShortSeperator, flxHeaderSeperator, flxHeaderShadows);
            var flxPortfolioValues = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxPortfolioValues",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxPortfolioValues.setDefaultUnit(kony.flex.DP);
            var lblTotalValue = new kony.ui.Label({
                "id": "lblTotalValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.totalValue"),
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTotalVal = new kony.ui.Label({
                "id": "lblTotalVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWLblSSPSemibold30px",
                "text": "$38,300.00",
                "textStyle": {},
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxPL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxPL",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxPL.setDefaultUnit(kony.flex.DP);
            var flxUnrealizedPL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxUnrealizedPL",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 6
            }, {}, {});
            flxUnrealizedPL.setDefaultUnit(kony.flex.DP);
            var lblUnrealizedPL = new kony.ui.Label({
                "id": "lblUnrealizedPL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.unrealizedPL\:"),
                "textStyle": {},
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblUnrealizedPLValue = new kony.ui.Label({
                "id": "lblUnrealizedPLValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWlbl2F8523SemiBold15px",
                "text": "+ $672.58 (+14.42%)",
                "textStyle": {},
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUnrealizedPL.add(lblUnrealizedPL, lblUnrealizedPLValue);
            var flxTodayPL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTodayPL",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 6
            }, {}, {});
            flxTodayPL.setDefaultUnit(kony.flex.DP);
            var lblTodayPL = new kony.ui.Label({
                "id": "lblTodayPL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.todaysPL\:"),
                "textStyle": {},
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTodayPLValue = new kony.ui.Label({
                "id": "lblTodayPLValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWlbl2F8523SemiBold15px",
                "text": "+ $192.62 (+0.90%)",
                "textStyle": {},
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxTodayPL.add(lblTodayPL, lblTodayPLValue);
            flxPL.add(flxUnrealizedPL, flxTodayPL);
            flxPortfolioValues.add(lblTotalValue, lblTotalVal, flxPL);
            var flxPortfolioLineChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "350dp",
                "id": "flxPortfolioLineChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxPortfolioLineChart.setDefaultUnit(kony.flex.DP);
            var investmentLineChart = new com.wealth.common.investmentLineChart({
                "height": "100%",
                "id": "investmentLineChart",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "investmentLineChart": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            investmentLineChart.currencySymbol = "$";
            investmentLineChart.currentFilter = "1Y";
            investmentLineChart.onFilterChanged = controller.AS_UWI_ca7d4c86a22440cd816228e6ac809dfc;
            flxPortfolioLineChart.add(investmentLineChart);
            var segInvestmentAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgAccountType": "personalaccount.png",
                    "imgBankIcon": "citi.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$20,000.00",
                    "lblAccountName": "sdfsdfdf",
                    "lblBankName": "Checking",
                    "lblJoint": "Checking"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBankIcon": "citi.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$20,000.00",
                    "lblAccountName": "sdfsdfdf",
                    "lblBankName": "Checking",
                    "lblJoint": "Checking"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBankIcon": "citi.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$20,000.00",
                    "lblAccountName": "sdfsdfdf",
                    "lblBankName": "Checking",
                    "lblJoint": "Checking"
                }],
                "groupCells": false,
                "id": "segInvestmentAccounts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "slWatchSegment",
                "rowTemplate": "flxWealthAccountList",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAccountType": "flxAccountType",
                    "flxBankIcon": "flxBankIcon",
                    "flxMain": "flxMain",
                    "flxSeparator": "flxSeparator",
                    "flxWealthAccountList": "flxWealthAccountList",
                    "flxcontent": "flxcontent",
                    "imgAccountType": "imgAccountType",
                    "imgBankIcon": "imgBankIcon",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblBankName": "lblBankName",
                    "lblJoint": "lblJoint"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 2
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
            var segAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblAccountBal": "Available Balance",
                            "lblTypeName": "Checking Accounts (3)",
                            "lblTypeValue": "$127,912.00"
                        },
                        [{
                            "imgAccountType": "businessaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "balance",
                            "lblAccountBalValue": "$678900",
                            "lblAccountName": "test",
                            "lblAccountNumber": "     ",
                            "lblBankName": "ggg",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgAccountType": "businessaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "balance",
                            "lblAccountBalValue": "$678900",
                            "lblAccountName": "test",
                            "lblAccountNumber": "     ",
                            "lblBankName": "ggg",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgAccountType": "businessaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "balance",
                            "lblAccountBalValue": "$678900",
                            "lblAccountName": "test",
                            "lblAccountNumber": "     ",
                            "lblBankName": "ggg",
                            "lblDelete": "Delete",
                            "lblRefresh": "Refresh"
                        }, {
                            "imgAccountType": "businessaccount.png",
                            "imgBank": "personalaccount.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "imgRefresh": "recurrenceindication.png",
                            "lblAccountBal": "balance",
                            "lblAccountBalValue": "$678900",
                            "lblAccountName": "test",
                            "lblAccountNumber": "     ",
                            "lblBankName": "ggg",
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
                "rowSkin": "slWatchSegment",
                "rowTemplate": "flxCombinedAccounts",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxAccountsHeaderDashboardNew",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAccountType": "flxAccountType",
                    "flxAccountsHeaderDashboardNew": "flxAccountsHeaderDashboardNew",
                    "flxBank": "flxBank",
                    "flxCombinedAccounts": "flxCombinedAccounts",
                    "flxDelete": "flxDelete",
                    "flxHeaderSeperator": "flxHeaderSeperator",
                    "flxHeaderShadows": "flxHeaderShadows",
                    "flxMain": "flxMain",
                    "flxRefresh": "flxRefresh",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "flximgBank": "flximgBank",
                    "imgAccountType": "imgAccountType",
                    "imgBank": "imgBank",
                    "imgDelete": "imgDelete",
                    "imgError": "imgError",
                    "imgRefresh": "imgRefresh",
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
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxShadowTopNews = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12dp",
                "id": "flxShadowTopNews",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowTopNews.setDefaultUnit(kony.flex.DP);
            var flxShadowBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9px",
                "id": "flxShadowBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBox.setDefaultUnit(kony.flex.DP);
            flxShadowBox.add();
            var flxRectangle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRectangle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRectangle.setDefaultUnit(kony.flex.DP);
            flxRectangle.add();
            flxShadowTopNews.add(flxShadowBox, flxRectangle);
            var flxTopNews = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "220dp",
                "id": "flxTopNews",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxTopNews.setDefaultUnit(kony.flex.DP);
            var flxMarketnewsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxMarketnewsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMarketnewsHeader.setDefaultUnit(kony.flex.DP);
            var flxSeperatorNews = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorNews",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeperatorNews.setDefaultUnit(kony.flex.DP);
            flxSeperatorNews.add();
            var lblTodayMarket = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTodayMarket",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "text": "Today's Markets",
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
            var flxTopNewsLink = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTopNewsLink",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": "40%"
            }, {}, {});
            flxTopNewsLink.setDefaultUnit(kony.flex.DP);
            var lblTopNews = new kony.ui.Label({
                "centerY": "50.00%",
                "id": "lblTopNews",
                "isVisible": true,
                "right": "45dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "Top News",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgChevron = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgChevron",
                "isVisible": true,
                "left": "73%",
                "right": "0dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 20
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTopNewsLink.add(lblTopNews, imgChevron);
            flxMarketnewsHeader.add(flxSeperatorNews, lblTodayMarket, flxTopNewsLink);
            var segMarketNews = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }, {
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }, {
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }, {
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }, {
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }, {
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }, {
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }, {
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }, {
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }, {
                    "lblAmount": "Label",
                    "lblMarketName": "Label",
                    "lblProfitLoss": "Label"
                }],
                "groupCells": false,
                "id": "segMarketNews",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxWealthMarket",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": 0,
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxContent": "flxContent",
                    "flxShortSeperator": "flxShortSeperator",
                    "flxWealthMarket": "flxWealthMarket",
                    "lblAmount": "lblAmount",
                    "lblMarketName": "lblMarketName",
                    "lblProfitLoss": "lblProfitLoss"
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
            flxTopNews.add(flxMarketnewsHeader, segMarketNews);
            var lblNoDataFound = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "25%",
                "id": "lblNoDataFound",
                "isVisible": false,
                "skin": "sknLbl424242SSP26px",
                "text": "No Results Found",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 20,
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
                "textStyle": {},
                "top": "10dp",
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
            var CopylblTypeName0ge03850d420d43 = new kony.ui.Label({
                "id": "CopylblTypeName0ge03850d420d43",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "+$3,222.23",
                "textStyle": {},
                "top": "10dp",
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
                "textStyle": {},
                "top": "10dp",
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
            var CopylblTypeName0i9fcf6c7873e48 = new kony.ui.Label({
                "id": "CopylblTypeName0i9fcf6c7873e48",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "+$3,222.23",
                "textStyle": {},
                "top": "10dp",
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
                "textStyle": {},
                "top": "10dp",
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
            var CopylblTypeName0efd6bfb71d8f44 = new kony.ui.Label({
                "id": "CopylblTypeName0efd6bfb71d8f44",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "+$3,222.23",
                "textStyle": {},
                "top": "10dp",
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
                "bottom": "15dp",
                "clipBounds": true,
                "height": "310dp",
                "id": "flxSuggestedOffers",
                "isVisible": false,
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
            var flxAdsBorder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxAdsBorder",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "flxAdsShadow7px7d7d7dBorder4pxe3e3e3",
                "top": "15dp",
                "width": "100%"
            }, {}, {});
            flxAdsBorder.setDefaultUnit(kony.flex.DP);
            var flxScrollContainerAds = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxScrollContainerAds",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
                "imageWhenFailed": "loadermedium.gif",
                "imageWhileDownloading": "loadermedium.gif",
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
                "imageWhenFailed": "loadermedium.gif",
                "imageWhileDownloading": "loadermedium.gif",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_a8f48394ba054bb8b845eb89a9217536,
                "skin": "slImage",
                "src": "loadermedium.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [2, 1, 2, 1],
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
                "imageWhenFailed": "loadermedium.gif",
                "imageWhileDownloading": "loadermedium.gif",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_ae57a5874cc04b82a47108c78c06f15f,
                "skin": "slImage",
                "src": "loadermedium.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [2, 1, 2, 1],
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
                "imageWhenFailed": "loadermedium.gif",
                "imageWhileDownloading": "loadermedium.gif",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_afefaa4257c145e1877c9b98acb2ae68,
                "skin": "slImage",
                "src": "loadermedium.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [2, 1, 2, 1],
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
                "imageWhenFailed": "loadermedium.gif",
                "imageWhileDownloading": "loadermedium.gif",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_a48956e57921409f95de093a67a339ba,
                "skin": "slImage",
                "src": "loadermedium.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [2, 1, 2, 1],
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
                "imageWhenFailed": "loadermedium.gif",
                "imageWhileDownloading": "loadermedium.gif",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_i9a6d30b02dd42999aee59194d31ef97,
                "skin": "slImage",
                "src": "loadermedium.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [2, 1, 2, 1],
                "paddingInPixel": false
            }, {});
            flxAd5.add(imgAd5);
            flxScrollContainerAds.add(flxLoadingIndicator, flxAd1, flxAd2, flxAd3, flxAd4, flxAd5);
            flxAdsBorder.add(flxScrollContainerAds);
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
                "isVisible": false,
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
                "textStyle": {},
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAdInfo.add(lblHeading, rtxDetails);
            flxSuggestedOffers.add(flxOffersHeader, flxAdsBorder, flxProgressBar, flxAdInfo);
            var flxEngageAdvert = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "25dp",
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
                "textStyle": {},
                "top": 0,
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
            var lblEngageAdvertText = new kony.ui.Label({
                "id": "lblEngageAdvertText",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblffffff20px",
                "text": kony.i18n.getLocalizedString("kony.mb.Engage.advertText"),
                "textStyle": {},
                "top": "4dp",
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
            }, {
                "showProgressIndicator": true
            });
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
            flxDashboard.add(flxDummyHorizontalScroll, flxShadow, flxSelectAccount, flxShadow3, flxAccounts, flxAccountsHeaderDashboardExact, flxPortfolioValues, flxPortfolioLineChart, segInvestmentAccounts, segAccounts, flxShadowTopNews, flxTopNews, lblNoDataFound, flxSpendingBudget, flxSuggestedOffers, flxEngageAdvert, flxDummyWhitespace, flxWhiteBg);
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
            customFooter.flxMore.onClick = controller.AS_FlexContainer_i770d8443e3f45ddaab58257c32cff87;
            customFooter.flxTransfer.onClick = controller.AS_FlexContainer_f5b09e6930c444848c6ee6aae4b475de;
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
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBlueBg.setDefaultUnit(kony.flex.DP);
            flxBlueBg.add();
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "60dp",
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
                "right": "0dp",
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
                "right": "0dp",
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
                "right": "-50dp",
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
            var flxChartSizeToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxChartSizeToggle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "275dp",
                "width": "100%",
                "zIndex": 14
            }, {}, {});
            flxChartSizeToggle.setDefaultUnit(kony.flex.DP);
            var flxInnerChartSizeToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxInnerChartSizeToggle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 17
            }, {}, {});
            flxInnerChartSizeToggle.setDefaultUnit(kony.flex.DP);
            var imgChartSizeToggle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgChartSizeToggle",
                "isVisible": true,
                "skin": "slImage",
                "src": "whitearrowdown.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInnerChartSizeToggle.add(imgChartSizeToggle);
            flxChartSizeToggle.add(flxInnerChartSizeToggle);
            this.add(flxTitle, flxGradient, noAccounts, flxPageIndicators, flxDashboardHeader, flxDashboard, flxMenu, flxBlueBg, flxHamburger, flxWhite, flxBGDummy, flxPopup, flxChartSizeToggle);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_ca06c8c518fc47cfbef44203b9603b6a,
            "metaData": {
                "image": "combinedbanking.png"
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": " "
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmUnifiedDashboardWealth,
            "allowVerticalBounce": false,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmUnifiedDashboardWealth",
            "init": controller.AS_Form_c5979fbef3364f97a4814ffd9b888644,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "postShow": controller.AS_Form_f9191b1cdeb44de688f69be33f1d2abb,
            "preShow": function(eventobject) {
                controller.AS_Form_ce93f513eaf94de583cd8ba78de6d6a6(eventobject);
            },
            "skin": "sknFrmoa78d1Gradient50",
            "title": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title")
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
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});