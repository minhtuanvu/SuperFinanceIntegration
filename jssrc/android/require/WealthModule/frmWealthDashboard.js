define("WealthModule/frmWealthDashboard", function() {
    return function(controller) {
        function addWidgetsfrmWealthDashboard() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
                "overrides": {
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "height": "25dp",
                        "isVisible": false,
                        "src": "info.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "text": "My Accounts"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "250dp",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var lblTotalAsset = new kony.ui.Label({
                "id": "lblTotalAsset",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIwb8dcff18px",
                "text": "Total Assets",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTotalAssetValue = new kony.ui.Label({
                "id": "lblTotalAssetValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblffffffSSP44px",
                "text": "$61,149.30",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "5dp",
                "width": "90%",
                "zIndex": 6
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxChartDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "180dp",
                "id": "flxChartDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "2dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxChartDetails.setDefaultUnit(kony.flex.DP);
            var flxDonutChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxDonutChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "35%"
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
                    "URL": "",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDonutChart.add(brwTotalAssetChart);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "60%"
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
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTotalAsset",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDot": "flxDot",
                    "flxTitle": "flxTitle",
                    "flxTotalAsset": "flxTotalAsset",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDetails.add(segDetails);
            flxChartDetails.add(flxDonutChart, flxDetails);
            flxContainer.add(lblTotalAsset, lblTotalAssetValue, flxSeparator, flxChartDetails);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var flxSelectedAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "51dp",
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
            flxShadowBox.add(flxRectangle);
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
            var lblTypeName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTypeName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP32pxBold",
                "text": "Investment Summary (3)",
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
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow2",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
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
            flxHeaderShadows.add(flxTypeOneShadow, flxShadowBottom);
            flxAccountsHeaderDashboardExact.add(lblTypeName, flxShortSeperator, flxHeaderSeperator, flxHeaderShadows);
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
                "top": "0dp",
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
            investmentLineChart.onFilterChanged = controller.AS_UWI_e12ae468259a4abdbbf1656755b2622a;
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
                "dockSectionHeaders": true
            });
            var segAccounts = new kony.ui.SegmentedUI2({
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
                "id": "segAccounts",
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
                "dockSectionHeaders": true
            });
            flxContent.add(flxSelectedAccounts, flxShadowBox, flxAccountsHeaderDashboardExact, flxPortfolioLineChart, segInvestmentAccounts, segAccounts);
            flxMainContainer.add(flxHeader, flxContainer, flxContent);
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
                        "src": "transfer.png"
                    },
                    "imgMore": {
                        "src": "more.png"
                    },
                    "imgTransfer": {
                        "src": "billpay.png"
                    },
                    "lblBillPay": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.transfer")
                    },
                    "lblTransfer": {
                        "text": "Watchlist"
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
            this.add(flxMainContainer, flxMenu);
        };
        return [{
            "addWidgets": addWidgetsfrmWealthDashboard,
            "bounces": true,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmWealthDashboard",
            "init": controller.AS_Form_ebef21cc490d4e41b8b804261cdd4e94,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_jdbd335e167e4639b4362a223c40364a,
            "preShow": function(eventobject) {
                controller.AS_Form_f0cbbecd39834baf967f73176e410df6(eventobject);
            },
            "skin": "sknFrmTitleBar",
            "title": "My Accounts"
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