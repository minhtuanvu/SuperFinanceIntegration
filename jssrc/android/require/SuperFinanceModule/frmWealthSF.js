define("SuperFinanceModule/frmWealthSF", function() {
    return function(controller) {
        function addWidgetsfrmWealthSF() {
            this.setDefaultUnit(kony.flex.DP);
            var flxParentWealthSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxParentWealthSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxParentWealthSF.setDefaultUnit(kony.flex.DP);
            var flxWeHeaderTammySF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flxWeHeaderTammySF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxHeaderSF",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWeHeaderTammySF.setDefaultUnit(kony.flex.DP);
            var flxWeHeaderSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxWeHeaderSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWeHeaderSF.setDefaultUnit(kony.flex.DP);
            var HeaderSF = new com.SuperFinance.HeaderSF({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "HeaderSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "flxHighlight1SF": {
                        "isVisible": false
                    },
                    "flxHighlight2SF": {
                        "isVisible": false
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            HeaderSF.flxWorkSF.onClick = controller.AS_FlexContainer_b93df700081f4aa386a53aa3a3c3fb39;
            flxWeHeaderSF.add(HeaderSF);
            var flxWeInsightsDtlsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxWeInsightsDtlsSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxTammySF",
                "top": "50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWeInsightsDtlsSF.setDefaultUnit(kony.flex.DP);
            var rchTxtInsightsWeSF = new kony.ui.RichText({
                "centerY": "50%",
                "id": "rchTxtInsightsWeSF",
                "isVisible": true,
                "left": "6%",
                "linkSkin": "defRichTextLink",
                "skin": "sknRchTxtTammySF",
                "text": "You have <font color = \"#ec691d\">5</font> insights and actions that I can assist you with",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxWeTammySF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWeTammySF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_e83ff47ea8fd409b9c2c12ed82d3c2f6,
                "right": "6%",
                "skin": "slFbox",
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxWeTammySF.setDefaultUnit(kony.flex.DP);
            var imgWeTammySF = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgWeTammySF",
                "isVisible": true,
                "skin": "slImage",
                "src": "tammy_logo.png",
                "width": "70%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWeTammySF.add(imgWeTammySF);
            flxWeInsightsDtlsSF.add(rchTxtInsightsWeSF, flxWeTammySF);
            flxWeHeaderTammySF.add(flxWeHeaderSF, flxWeInsightsDtlsSF);
            var flxScrollWealthSF = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "85%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollWealthSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "15%",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollWealthSF.setDefaultUnit(kony.flex.DP);
            var flxWealthMainSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "34%",
                "id": "flxWealthMainSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxLifestyleMainSF",
                "top": "-3%",
                "width": "110%",
                "zIndex": 1
            }, {}, {});
            flxWealthMainSF.setDefaultUnit(kony.flex.DP);
            var lblWealthTitleSF = new kony.ui.Label({
                "id": "lblWealthTitleSF",
                "isVisible": true,
                "left": "10%",
                "skin": "sknLblNormalHeaderSF",
                "text": "Wealth",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxOverviewSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "flxOverviewSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxOverviewSF.setDefaultUnit(kony.flex.DP);
            var lblOverviewTxtSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOverviewTxtSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblOverviewSF",
                "text": "Overview",
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
            var lblOverviewValSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOverviewValSF",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLblWishesSF",
                "text": "€ 146.000",
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
            var imgUpArrowSF = new kony.ui.Image2({
                "centerY": "50%",
                "height": "55%",
                "id": "imgUpArrowSF",
                "isVisible": true,
                "left": "8%",
                "skin": "slImage",
                "src": "uparrow_normal.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblIncresedValSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblIncresedValSF",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblIncreasedValSF",
                "text": "+2.95",
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
            flxOverviewSF.add(lblOverviewTxtSF, lblOverviewValSF, imgUpArrowSF, lblIncresedValSF);
            flxWealthMainSF.add(lblWealthTitleSF, flxOverviewSF);
            var flxChart1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "25%",
                "id": "flxChart1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-19%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChart1SF.setDefaultUnit(kony.flex.DP);
            var imgChart1SF = new kony.ui.Image2({
                "height": "100%",
                "id": "imgChart1SF",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "chart1.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxChart1SF.add(imgChart1SF);
            var flxHoldingsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "37%",
                "id": "flxHoldingsSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "4%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHoldingsSF.setDefaultUnit(kony.flex.DP);
            var flxHeaderWe1Sf = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flxHeaderWe1Sf",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderWe1Sf.setDefaultUnit(kony.flex.DP);
            var lblHeaderTitleWe1SSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHeaderTitleWe1SSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblLifestyleHeaderSF",
                "text": "Top Holdings",
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
            var flxLneWe1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLneWe1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "6%",
                "skin": "sknFlxGreyLneSF",
                "width": "53%",
                "zIndex": 1
            }, {}, {});
            flxLneWe1SF.setDefaultUnit(kony.flex.DP);
            flxLneWe1SF.add();
            flxHeaderWe1Sf.add(lblHeaderTitleWe1SSF, flxLneWe1SF);
            var segHoldingsSF = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "imgHlogoSF": "atlassian_fusion.png",
                    "lblRDescSF": "NASDAQ: TEAM",
                    "lblRTitleSF": "Atlassian Corporation"
                }, {
                    "imgHlogoSF": "xero_logo.png",
                    "lblRDescSF": "ASX: XRO",
                    "lblRTitleSF": "Zero Limited"
                }],
                "groupCells": false,
                "height": "85%",
                "id": "segHoldingsSF",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegTransSF",
                "rowSkin": "sknSegTransSF",
                "rowTemplate": "flxHoldingsWeSF",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "17%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxHLogoSF": "flxHLogoSF",
                    "flxHoldingsWeSF": "flxHoldingsWeSF",
                    "flxMainSF": "flxMainSF",
                    "flxParentSF": "flxParentSF",
                    "flxRDtlsSF": "flxRDtlsSF",
                    "flxRL1SF": "flxRL1SF",
                    "flxRL2SF": "flxRL2SF",
                    "imgHlogoSF": "imgHlogoSF",
                    "lblRDescSF": "lblRDescSF",
                    "lblRTitleSF": "lblRTitleSF"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHoldingsSF.add(flxHeaderWe1Sf, segHoldingsSF);
            var flxDiversificationSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxDiversificationSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDiversificationSF.setDefaultUnit(kony.flex.DP);
            var flxDHeaderSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
                "id": "flxDHeaderSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDHeaderSF.setDefaultUnit(kony.flex.DP);
            var lblDiversifyTitleSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDiversifyTitleSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblLifestyleHeaderSF",
                "text": "Diversification",
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
            var flxLneWe2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLneWe2SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "6%",
                "skin": "sknFlxGreyLneSF",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxLneWe2SF.setDefaultUnit(kony.flex.DP);
            flxLneWe2SF.add();
            flxDHeaderSF.add(lblDiversifyTitleSF, flxLneWe2SF);
            var flxImgDiversifySF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxImgDiversifySF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxImgDiversifySF.setDefaultUnit(kony.flex.DP);
            var imgDiversifySF = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "400dp",
                "id": "imgDiversifySF",
                "isVisible": true,
                "skin": "slImage",
                "src": "chart2.png",
                "width": "400dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgDiversifySF.add(imgDiversifySF);
            flxDiversificationSF.add(flxDHeaderSF, flxImgDiversifySF);
            var flxNewsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "67%",
                "id": "flxNewsSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNewsSF.setDefaultUnit(kony.flex.DP);
            var flxNewsHeaderSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxNewsHeaderSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNewsHeaderSF.setDefaultUnit(kony.flex.DP);
            var lblNewsTitleSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNewsTitleSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblLifestyleHeaderSF",
                "text": "Curated News",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxLneWe3SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLneWe3SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "6%",
                "skin": "sknFlxGreyLneSF",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxLneWe3SF.setDefaultUnit(kony.flex.DP);
            flxLneWe3SF.add();
            flxNewsHeaderSF.add(lblNewsTitleSF, flxLneWe3SF);
            var segCuratedNewsSF = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "imgDotsLne": "dashedlines.png",
                    "imgDotsSF": "dots_normal.png",
                    "imgLeftArrowSF": "leftarrow_normal.png",
                    "lblNewsDescSF": "Here's how much Trump's tweets are influencing traders, survey reveals",
                    "lblNewsTitleSF": "Aug. 28, 2021 at 6:54 p.m."
                }, {
                    "imgDotsLne": "dashedlines.png",
                    "imgDotsSF": "dots_normal.png",
                    "imgLeftArrowSF": "leftarrow_normal.png",
                    "lblNewsDescSF": "European stocks slide after U.S. and North Korea cross swords",
                    "lblNewsTitleSF": "Sep. 18 2021 at 1:00 p.m."
                }, {
                    "imgDotsLne": "dashedlines.png",
                    "imgDotsSF": "dots_normal.png",
                    "imgLeftArrowSF": "leftarrow_normal.png",
                    "lblNewsDescSF": "Maecenas faucibus mollis",
                    "lblNewsTitleSF": "Margaret Mead"
                }, {
                    "imgDotsLne": "",
                    "imgDotsSF": "dots_normal.png",
                    "imgLeftArrowSF": "leftarrow_normal.png",
                    "lblNewsDescSF": "Maecenas faucibus mollis",
                    "lblNewsTitleSF": "Margaret Mead"
                }],
                "groupCells": false,
                "height": "90%",
                "id": "segCuratedNewsSF",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegTransSF",
                "rowTemplate": "flxCuratedNewsSF",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "10%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCuratedNewsSF": "flxCuratedNewsSF",
                    "flxDotsLneSF": "flxDotsLneSF",
                    "flxDotsSF": "flxDotsSF",
                    "flxLeftArrowSF": "flxLeftArrowSF",
                    "flxMainNewsSF": "flxMainNewsSF",
                    "flxNewsDtlsSF": "flxNewsDtlsSF",
                    "flxParentSF": "flxParentSF",
                    "imgDotsLne": "imgDotsLne",
                    "imgDotsSF": "imgDotsSF",
                    "imgLeftArrowSF": "imgLeftArrowSF",
                    "lblNewsDescSF": "lblNewsDescSF",
                    "lblNewsTitleSF": "lblNewsTitleSF"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNewsSF.add(flxNewsHeaderSF, segCuratedNewsSF);
            flxScrollWealthSF.add(flxWealthMainSF, flxChart1SF, flxHoldingsSF, flxDiversificationSF, flxNewsSF);
            flxParentWealthSF.add(flxWeHeaderTammySF, flxScrollWealthSF);
            this.add(flxParentWealthSF);
        };
        return [{
            "addWidgets": addWidgetsfrmWealthSF,
            "enabledForIdleTimeout": false,
            "id": "frmWealthSF",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f64f06736116470591720ac903be5bf5(eventobject);
            },
            "skin": "sknFrmBgSF"
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
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});