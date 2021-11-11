define("AccountModule/frmPFMMyMoney", function() {
    return function(controller) {
        function addWidgetsfrmPFMMyMoney() {
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
                "zIndex": 11
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "hamburger.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.PFMMyMoney")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "60dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "46dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var flxTopButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTopButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "50dp",
                "isModalContainer": false,
                "right": "50dp",
                "skin": "sknflxbgffffffborder046AF9radius4px",
                "zIndex": 1
            }, {}, {});
            flxTopButtons.setDefaultUnit(kony.flex.DP);
            var flxBtnSpending = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBtnSpending",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%"
            }, {}, {});
            flxBtnSpending.setDefaultUnit(kony.flex.DP);
            var lblSpending = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblSpending",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.SPENDING"),
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
            flxBtnSpending.add(lblSpending);
            var flxBtnBudget = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBtnBudget",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%"
            }, {}, {});
            flxBtnBudget.setDefaultUnit(kony.flex.DP);
            var lblBudget = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblBudget",
                "isVisible": true,
                "skin": "sknlbl003E7536px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.BUDGET"),
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
            flxBtnBudget.add(lblBudget);
            flxTopButtons.add(flxBtnSpending, flxBtnBudget);
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxButtons.add(flxTopButtons, flxSeperator1);
            var flxRangeAndCal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxRangeAndCal",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRangeAndCal.setDefaultUnit(kony.flex.DP);
            var flxDateLeft = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDateLeft",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 1
            }, {}, {});
            flxDateLeft.setDefaultUnit(kony.flex.DP);
            var imgCalLeft = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgCalLeft",
                "isVisible": true,
                "skin": "slImage",
                "src": "calenderarrowleft.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDateLeft.add(imgCalLeft);
            var flxDateRange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDateRange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "55dp",
                "isModalContainer": false,
                "right": "111dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 2
            }, {}, {});
            flxDateRange.setDefaultUnit(kony.flex.DP);
            var lblDateRange = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDateRange",
                "isVisible": true,
                "skin": "sknLbl4a4a4a22px",
                "text": "January 2018",
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
            flxDateRange.add(lblDateRange);
            var flxDateRight = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDateRight",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "56dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 1
            }, {}, {});
            flxDateRight.setDefaultUnit(kony.flex.DP);
            var imgCalRight = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgCalRight",
                "isVisible": true,
                "skin": "slImage",
                "src": "calenderarrowright.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDateRight.add(imgCalRight);
            var flxCalSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCalSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "55dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 2
            }, {}, {});
            flxCalSeperator.setDefaultUnit(kony.flex.DP);
            flxCalSeperator.add();
            var flxCalIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCalIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 1
            }, {}, {});
            flxCalIcon.setDefaultUnit(kony.flex.DP);
            var imgCalIcon = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "35dp",
                "id": "imgCalIcon",
                "isVisible": true,
                "skin": "slImage",
                "src": "calender.png",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCalIcon.add(imgCalIcon);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 9
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            flxRangeAndCal.add(flxDateLeft, flxDateRange, flxDateRight, flxCalSeperator, flxCalIcon, flxSeperator2);
            var flxCharts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "280dp",
                "id": "flxCharts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCharts.setDefaultUnit(kony.flex.DP);
            var flxPieChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPieChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPieChart.setDefaultUnit(kony.flex.DP);
            var brwsrPie = new kony.ui.Browser({
                "centerX": "50%",
                "centerY": "47%",
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "80%",
                "id": "brwsrPie",
                "isVisible": true,
                "left": "0%",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0%",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            var flxSpendingCenter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "46dp",
                "id": "flxSpendingCenter",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": 100,
                "zIndex": 1
            }, {}, {});
            flxSpendingCenter.setDefaultUnit(kony.flex.DP);
            var lblTotalSpendingVal = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalSpendingVal",
                "isVisible": true,
                "skin": "sknLbl4a4a4aSSPBold36px",
                "text": "$000.00",
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
            var lblTotalSpendnigTxt = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalSpendnigTxt",
                "isVisible": true,
                "skin": "sknLbl4a4a4a22px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.TotalSpending"),
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
            flxSpendingCenter.add(lblTotalSpendingVal, lblTotalSpendnigTxt);
            flxPieChart.add(brwsrPie, flxSpendingCenter);
            var flxDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_f440b7436f27438ca4595c1d01793cff,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDummy.setDefaultUnit(kony.flex.DP);
            flxDummy.add();
            var flxBarChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBarChart",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBarChart.setDefaultUnit(kony.flex.DP);
            var ImgBarChart = new kony.ui.Image2({
                "bottom": "25dp",
                "id": "ImgBarChart",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "bardaigram.png",
                "top": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBarChart.add(ImgBarChart);
            var flxNoSpending = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNoSpending",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxNoSpending.setDefaultUnit(kony.flex.DP);
            var lblNoSpendingMsg = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblNoSpendingMsg",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.PFMMyMoney.NoMonthSpending"),
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
            flxNoSpending.add(lblNoSpendingMsg);
            flxCharts.add(flxPieChart, flxDummy, flxBarChart, flxNoSpending);
            var flxBudgetSegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBudgetSegment",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBudgetSegment.setDefaultUnit(kony.flex.DP);
            var flxColors = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxColors",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxColors.setDefaultUnit(kony.flex.DP);
            var flxSpent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSpent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {}, {});
            flxSpent.setDefaultUnit(kony.flex.DP);
            var flxColorSpent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxColorSpent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30dp",
                "isModalContainer": false,
                "skin": "sknflx5caf00Radius20px",
                "width": "10dp",
                "zIndex": 1
            }, {}, {});
            flxColorSpent.setDefaultUnit(kony.flex.DP);
            flxColorSpent.add();
            var lblSpent = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSpent",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.Spent"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSpent.add(flxColorSpent, lblSpent);
            var flxTarget = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTarget",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {}, {});
            flxTarget.setDefaultUnit(kony.flex.DP);
            var flxColorTarget = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxColorTarget",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknflxe0e0e0Radius20px",
                "width": "10dp",
                "zIndex": 1
            }, {}, {});
            flxColorTarget.setDefaultUnit(kony.flex.DP);
            flxColorTarget.add();
            var lblTarget = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTarget",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.Target"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTarget.add(flxColorTarget, lblTarget);
            var flxExceeded = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxExceeded",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {}, {});
            flxExceeded.setDefaultUnit(kony.flex.DP);
            var flxColorExceeding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxColorExceeding",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxfd031fRadius20px",
                "width": "10dp",
                "zIndex": 1
            }, {}, {});
            flxColorExceeding.setDefaultUnit(kony.flex.DP);
            flxColorExceeding.add();
            var lblExceeded = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExceeded",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.Exceeded"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxExceeded.add(flxColorExceeding, lblExceeded);
            flxColors.add(flxSpent, flxTarget, flxExceeded);
            var flxBudgetSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBudgetSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 9
            }, {}, {});
            flxBudgetSeperator.setDefaultUnit(kony.flex.DP);
            flxBudgetSeperator.add();
            var segBudget = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgBudgetType": "",
                    "lblBudgetAmount": "",
                    "lblBudgetName": ""
                }],
                "groupCells": false,
                "id": "segBudget",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxPFMBudget",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f1f1f100",
                "separatorRequired": true,
                "separatorThickness": 2,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxExceeded": "flxExceeded",
                    "flxPFMBudget": "flxPFMBudget",
                    "flxProgressBar": "flxProgressBar",
                    "flxSpent": "flxSpent",
                    "flxTarget": "flxTarget",
                    "imgBudgetType": "imgBudgetType",
                    "lblBudgetAmount": "lblBudgetAmount",
                    "lblBudgetName": "lblBudgetName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBudgetSegment.add(flxColors, flxBudgetSeperator, segBudget);
            var flxToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxToggle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToggle.setDefaultUnit(kony.flex.DP);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 9
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var flxToggleWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxToggleWrapper.setDefaultUnit(kony.flex.DP);
            var flxPie = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPie",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxPie.setDefaultUnit(kony.flex.DP);
            var imgPie = new kony.ui.Image2({
                "height": "100%",
                "id": "imgPie",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "piechartactive.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPie.add(imgPie);
            var flxBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxBar.setDefaultUnit(kony.flex.DP);
            var imgBar = new kony.ui.Image2({
                "height": "100%",
                "id": "imgBar",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "barchartinactive.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBar.add(imgBar);
            flxToggleWrapper.add(flxPie, flxBar);
            flxToggle.add(flxSeperator3, flxToggleWrapper);
            var flxIncomeAndSpending = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxIncomeAndSpending",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIncomeAndSpending.setDefaultUnit(kony.flex.DP);
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 9
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            var flxIncome = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxIncome",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxIncome.setDefaultUnit(kony.flex.DP);
            var lblTotalIncome = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalIncome",
                "isVisible": true,
                "skin": "sknLbl4a4a4a22px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.TotalIncome"),
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
            var lblTotalIncomeValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalIncomeValue",
                "isVisible": true,
                "skin": "sknLbl4a4a4aSSPBold36px",
                "text": "$0,000.00",
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
            flxIncome.add(lblTotalIncome, lblTotalIncomeValue);
            var flxSpendingSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxSpendingSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 2
            }, {}, {});
            flxSpendingSeperator.setDefaultUnit(kony.flex.DP);
            flxSpendingSeperator.add();
            var flxSpending = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSpending",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxSpending.setDefaultUnit(kony.flex.DP);
            var lblTotalSpendnig = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalSpendnig",
                "isVisible": true,
                "skin": "sknLbl4a4a4a22px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.TotalSpending"),
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
            var lblTotalSpendingValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalSpendingValue",
                "isVisible": true,
                "skin": "sknLbl4a4a4aSSPBold36px",
                "text": "$000.00",
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
            flxSpending.add(lblTotalSpendnig, lblTotalSpendingValue);
            var flxSeperator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 9
            }, {}, {});
            flxSeperator5.setDefaultUnit(kony.flex.DP);
            flxSeperator5.add();
            flxIncomeAndSpending.add(flxSeperator4, flxIncome, flxSpendingSeperator, flxSpending, flxSeperator5);
            var flxSpendingDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSpendingDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSpendingDetails.setDefaultUnit(kony.flex.DP);
            var segSpending = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAmountSpent": "",
                    "lblSpending": ""
                }],
                "groupCells": false,
                "id": "segSpending",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "Copyseg0ebc367f9205c46",
                "rowTemplate": "flxPFMSpending",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxColor": "flxColor",
                    "flxPFMSpending": "flxPFMSpending",
                    "flxSeperator": "flxSeperator",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblSpending": "lblSpending"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 1,
                "enableReordering": false
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSegSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSegSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 9
            }, {}, {});
            flxSegSeperator.setDefaultUnit(kony.flex.DP);
            flxSegSeperator.add();
            flxSpendingDetails.add(segSpending, flxSegSeperator);
            var btnViewTransactions = new kony.ui.Button({
                "bottom": 27,
                "centerX": "50.00%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnViewTransactions",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFM.VIEWTRANSACTIONS"),
                "top": "20dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(flxButtons, flxRangeAndCal, flxCharts, flxBudgetSegment, flxToggle, flxIncomeAndSpending, flxSpendingDetails, btnViewTransactions);
            var flxEdit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEdit",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 12
            }, {}, {});
            flxEdit.setDefaultUnit(kony.flex.DP);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 1
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var flxOption1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxOption1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOption1.setDefaultUnit(kony.flex.DP);
            var lblOption1 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOption1",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.TakeAPicture"),
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
            var flxSeparatorOption1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorOption1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorOption1.setDefaultUnit(kony.flex.DP);
            flxSeparatorOption1.add();
            flxOption1.add(lblOption1, flxSeparatorOption1);
            var flxOption2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius4px",
                "height": "50dp",
                "id": "flxOption2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOption2.setDefaultUnit(kony.flex.DP);
            var lblOption2 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOption2",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.ChooseFromGallery"),
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
            flxOption2.add(lblOption2);
            flxOptions.add(flxOption1, flxOption2);
            flxEdit.add(flxOptions);
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
                "zIndex": 202
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
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 120
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
                    "flxAccSelect": {
                        "isVisible": false
                    },
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": true
                    },
                    "flxTypeOneShadow": {
                        "clipBounds": true
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
            var CopyflxSeperator0ha8d1c07117149 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperator0ha8d1c07117149",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            CopyflxSeperator0ha8d1c07117149.setDefaultUnit(kony.flex.DP);
            CopyflxSeperator0ha8d1c07117149.add();
            flxFooter.add(customFooter, CopyflxSeperator0ha8d1c07117149);
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
                "zIndex": 100
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
            this.add(flxHeader, flxMainContainer, flxEdit, flxPopup, flxFooter, flxHamburger);
        };
        return [{
            "addWidgets": addWidgetsfrmPFMMyMoney,
            "enabledForIdleTimeout": true,
            "id": "frmPFMMyMoney",
            "init": controller.AS_Form_jef8886af76f4bf09cfd02330accc0e1,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a5df6ed5cc624a70aa85db84531df974,
            "preShow": function(eventobject) {
                controller.AS_Form_c9294c1e0a0243fb9f426fd2dd224ffe(eventobject);
            },
            "skin": "sknFrmTitleBar",
            "title": kony.i18n.getLocalizedString("kony.mb.PFMMyMoney")
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