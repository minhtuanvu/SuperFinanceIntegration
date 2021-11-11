define("SuperFinanceModule/frmInsightSF", function() {
    return function(controller) {
        function addWidgetsfrmInsightSF() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxMainSF.setDefaultUnit(kony.flex.DP);
            var flxHeaderInsightsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxHeaderInsightsSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderInsightsSF.setDefaultUnit(kony.flex.DP);
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
                    "flxHighlight2SF": {
                        "isVisible": false
                    },
                    "flxHighlight3SF": {
                        "isVisible": false
                    },
                    "imgMenuSF": {
                        "src": "menu_fusion.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderInsightsSF.add(HeaderSF);
            var flxStep2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxStep2SF",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxStepLayoutSF",
                "top": "9%",
                "width": "100%"
            }, {}, {});
            flxStep2SF.setDefaultUnit(kony.flex.DP);
            var flxHeader2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18%",
                "id": "flxHeader2SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader2SF.setDefaultUnit(kony.flex.DP);
            var StepsHeader2SF = new com.SuperFinance.StepsHeaderSF({
                "height": "100%",
                "id": "StepsHeader2SF",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "StepsHeaderSF": {
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
            flxHeader2SF.add(StepsHeader2SF);
            var flxMainData2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "68%",
                "id": "flxMainData2SF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%"
            }, {}, {});
            flxMainData2SF.setDefaultUnit(kony.flex.DP);
            var CopyflxDataSet0fea0ad8b6a344d = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "CopyflxDataSet0fea0ad8b6a344d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "0",
                "width": "90%"
            }, {}, {});
            CopyflxDataSet0fea0ad8b6a344d.setDefaultUnit(kony.flex.DP);
            var CopylblInfo0jdc58602c5a745 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblInfo0jdc58602c5a745",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "With the current market conditions,\nyour equities are overweight while\nyour FX and securities are\nunderweight. It is time to rebalance \nalthough this will have tax\nimplications.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxDataSet0fea0ad8b6a344d.add(CopylblInfo0jdc58602c5a745);
            var CopyflxDataSet0d1ae7687a5ba40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "25%",
                "id": "CopyflxDataSet0d1ae7687a5ba40",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "5%",
                "width": "90%"
            }, {}, {});
            CopyflxDataSet0d1ae7687a5ba40.setDefaultUnit(kony.flex.DP);
            var CopyflxPercentageSF0de548e926bd543 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "CopyflxPercentageSF0de548e926bd543",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "90%"
            }, {}, {});
            CopyflxPercentageSF0de548e926bd543.setDefaultUnit(kony.flex.DP);
            var CopylblPercentage0b14c7566075241 = new kony.ui.Label({
                "id": "CopylblPercentage0b14c7566075241",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblPercentageSF",
                "text": "85%",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblPercentage0c962eb6bffcd49 = new kony.ui.Label({
                "id": "CopylblPercentage0c962eb6bffcd49",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblPercentageSF",
                "text": "5%",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblPercentage0a9de3208187744 = new kony.ui.Label({
                "id": "CopylblPercentage0a9de3208187744",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblPercentageSF",
                "text": "10%",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxPercentageSF0de548e926bd543.add(CopylblPercentage0b14c7566075241, CopylblPercentage0c962eb6bffcd49, CopylblPercentage0a9de3208187744);
            var CopyflxFundsNameSF0i4e67a8fc7f948 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "CopyflxFundsNameSF0i4e67a8fc7f948",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "90%"
            }, {}, {});
            CopyflxFundsNameSF0i4e67a8fc7f948.setDefaultUnit(kony.flex.DP);
            var CopylblEquitiesSF0b1a7ebc917c142 = new kony.ui.Label({
                "id": "CopylblEquitiesSF0b1a7ebc917c142",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblNormalHeaderSF",
                "text": "Equities",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblFX0dbd5519b14c349 = new kony.ui.Label({
                "id": "CopylblFX0dbd5519b14c349",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblNormalHeaderSF",
                "text": "FX",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblSecuritiesSF0afa484f04c3244 = new kony.ui.Label({
                "id": "CopylblSecuritiesSF0afa484f04c3244",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblNormalHeaderSF",
                "text": "Securities",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxFundsNameSF0i4e67a8fc7f948.add(CopylblEquitiesSF0b1a7ebc917c142, CopylblFX0dbd5519b14c349, CopylblSecuritiesSF0afa484f04c3244);
            var CopyflxFundsIndicatorSF0a184907d94804a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "CopyflxFundsIndicatorSF0a184907d94804a",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxFundsIndicatorSF",
                "top": "7%",
                "width": "90%"
            }, {}, {});
            CopyflxFundsIndicatorSF0a184907d94804a.setDefaultUnit(kony.flex.DP);
            var CopylblYellowSF0d2ee06ceb94d4d = new kony.ui.Label({
                "height": "100%",
                "id": "CopylblYellowSF0d2ee06ceb94d4d",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblYellowIndicatorSF",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "85%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblBlueSF0b5fe6fd3f23247 = new kony.ui.Label({
                "height": "100%",
                "id": "CopylblBlueSF0b5fe6fd3f23247",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblBlueIndicatorSF",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "5%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblOrangeSF0f0b4190be0fc40 = new kony.ui.Label({
                "height": "100%",
                "id": "CopylblOrangeSF0f0b4190be0fc40",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblOrangeIndicatorSF",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "10%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxFundsIndicatorSF0a184907d94804a.add(CopylblYellowSF0d2ee06ceb94d4d, CopylblBlueSF0b5fe6fd3f23247, CopylblOrangeSF0f0b4190be0fc40);
            CopyflxDataSet0d1ae7687a5ba40.add(CopyflxPercentageSF0de548e926bd543, CopyflxFundsNameSF0i4e67a8fc7f948, CopyflxFundsIndicatorSF0a184907d94804a);
            var CopyflxDataSet0be1b0fc01e0845 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18%",
                "id": "CopyflxDataSet0be1b0fc01e0845",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "5%",
                "width": "90%"
            }, {}, {});
            CopyflxDataSet0be1b0fc01e0845.setDefaultUnit(kony.flex.DP);
            var CopylblRecommendationsSF0f28b89ac0d114c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblRecommendationsSF0f28b89ac0d114c",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "John has few recommendations for\nyou. Would you like to see them?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxDataSet0be1b0fc01e0845.add(CopylblRecommendationsSF0f28b89ac0d114c);
            flxMainData2SF.add(CopyflxDataSet0fea0ad8b6a344d, CopyflxDataSet0d1ae7687a5ba40, CopyflxDataSet0be1b0fc01e0845);
            var CopyflxApproachesSF0a64891702cd147 = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "70%",
                "horizontalScrollIndicator": true,
                "id": "CopyflxApproachesSF0a64891702cd147",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            CopyflxApproachesSF0a64891702cd147.setDefaultUnit(kony.flex.DP);
            var CopyflxApprochesInfoSF0a1c19d36ca444e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "46%",
                "id": "CopyflxApprochesInfoSF0a1c19d36ca444e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "0",
                "width": "90%"
            }, {}, {});
            CopyflxApprochesInfoSF0a1c19d36ca444e.setDefaultUnit(kony.flex.DP);
            var CopylblApproachesSF0a3f8ab342f4e4b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblApproachesSF0a3f8ab342f4e4b",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "There are 3 approaches based on\npredictive performance as per\ncurrent market conditions. Let me\nknow which one would you like to\nselect. Based on which I shall set up\nan advisory session with your RM\nJohn",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxApprochesInfoSF0a1c19d36ca444e.add(CopylblApproachesSF0a3f8ab342f4e4b);
            var CopysegApproachesSF0f4d2146a297943 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgCircleSF": "radiobuttoninactive.png",
                    "lblApproachesType": "Aggressive Approach - Current",
                    "lblBlueSF": "",
                    "lblEquitiesSF": "Equities",
                    "lblFX": "FX",
                    "lblOrangeSF": "",
                    "lblPercentage1SF": "85%",
                    "lblPercentage2SF": "5%",
                    "lblPercentage3SF": "10%",
                    "lblSecuritiesSF": "Securities",
                    "lblYellowSF": ""
                }, {
                    "imgCircleSF": "radiobuttoninactive.png",
                    "lblApproachesType": "Aggressive Approach - Current",
                    "lblBlueSF": "",
                    "lblEquitiesSF": "Equities",
                    "lblFX": "FX",
                    "lblOrangeSF": "",
                    "lblPercentage1SF": "85%",
                    "lblPercentage2SF": "5%",
                    "lblPercentage3SF": "10%",
                    "lblSecuritiesSF": "Securities",
                    "lblYellowSF": ""
                }, {
                    "imgCircleSF": "radiobuttoninactive.png",
                    "lblApproachesType": "Aggressive Approach - Current",
                    "lblBlueSF": "",
                    "lblEquitiesSF": "Equities",
                    "lblFX": "FX",
                    "lblOrangeSF": "",
                    "lblPercentage1SF": "85%",
                    "lblPercentage2SF": "5%",
                    "lblPercentage3SF": "10%",
                    "lblSecuritiesSF": "Securities",
                    "lblYellowSF": ""
                }],
                "groupCells": false,
                "height": "240dp",
                "id": "CopysegApproachesSF0f4d2146a297943",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowTemplate": "flxApproachListSF",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxApproachListSF": "flxApproachListSF",
                    "flxFundsIndicatorSF": "flxFundsIndicatorSF",
                    "flxFundsNameSF": "flxFundsNameSF",
                    "flxMainView": "flxMainView",
                    "flxPercentageSF": "flxPercentageSF",
                    "flxRadioOptionSF": "flxRadioOptionSF",
                    "imgCircleSF": "imgCircleSF",
                    "lblApproachesType": "lblApproachesType",
                    "lblBlueSF": "lblBlueSF",
                    "lblEquitiesSF": "lblEquitiesSF",
                    "lblFX": "lblFX",
                    "lblOrangeSF": "lblOrangeSF",
                    "lblPercentage1SF": "lblPercentage1SF",
                    "lblPercentage2SF": "lblPercentage2SF",
                    "lblPercentage3SF": "lblPercentage3SF",
                    "lblSecuritiesSF": "lblSecuritiesSF",
                    "lblYellowSF": "lblYellowSF"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxApproachesSF0a64891702cd147.add(CopyflxApprochesInfoSF0a1c19d36ca444e, CopysegApproachesSF0f4d2146a297943);
            var CopyflxApproachRequestSF0bceae0ee10dd46 = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "70%",
                "horizontalScrollIndicator": true,
                "id": "CopyflxApproachRequestSF0bceae0ee10dd46",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            CopyflxApproachRequestSF0bceae0ee10dd46.setDefaultUnit(kony.flex.DP);
            var CopyflxHeaderApproachesSF0ce8179f423a74a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "46%",
                "id": "CopyflxHeaderApproachesSF0ce8179f423a74a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "0",
                "width": "90%"
            }, {}, {});
            CopyflxHeaderApproachesSF0ce8179f423a74a.setDefaultUnit(kony.flex.DP);
            var CopylblApproachesHeaderSF0dfea64a36b5148 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblApproachesHeaderSF0dfea64a36b5148",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "There are 3 approaches based on\npredictive performance as per\ncurrent market conditions. Let me\nknow which one would you like to\nselect. Based on which I shall set up\nan advisory session with your RM\nJohn",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxHeaderApproachesSF0ce8179f423a74a.add(CopylblApproachesHeaderSF0dfea64a36b5148);
            var CopysegRqstApproachesSF0c22b71268aac45 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCircleSF": "radiobuttoninactive.png",
                    "lblApproachesType": "Aggressive Approach - Current",
                    "lblBlueSF": "",
                    "lblEquitiesSF": "Equities",
                    "lblFX": "FX",
                    "lblOrangeSF": "",
                    "lblPercentage1SF": "85%",
                    "lblPercentage2SF": "5%",
                    "lblPercentage3SF": "10%",
                    "lblSecuritiesSF": "Securities",
                    "lblYellowSF": ""
                }],
                "groupCells": false,
                "id": "CopysegRqstApproachesSF0c22b71268aac45",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowTemplate": "flxApproachListSF",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "2%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxApproachListSF": "flxApproachListSF",
                    "flxFundsIndicatorSF": "flxFundsIndicatorSF",
                    "flxFundsNameSF": "flxFundsNameSF",
                    "flxMainView": "flxMainView",
                    "flxPercentageSF": "flxPercentageSF",
                    "flxRadioOptionSF": "flxRadioOptionSF",
                    "imgCircleSF": "imgCircleSF",
                    "lblApproachesType": "lblApproachesType",
                    "lblBlueSF": "lblBlueSF",
                    "lblEquitiesSF": "lblEquitiesSF",
                    "lblFX": "lblFX",
                    "lblOrangeSF": "lblOrangeSF",
                    "lblPercentage1SF": "lblPercentage1SF",
                    "lblPercentage2SF": "lblPercentage2SF",
                    "lblPercentage3SF": "lblPercentage3SF",
                    "lblSecuritiesSF": "lblSecuritiesSF",
                    "lblYellowSF": "lblYellowSF"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyflxRequestDataSF0bd8d7e56bbd14a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18%",
                "id": "CopyflxRequestDataSF0bd8d7e56bbd14a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "1%",
                "width": "90%"
            }, {}, {});
            CopyflxRequestDataSF0bd8d7e56bbd14a.setDefaultUnit(kony.flex.DP);
            var CopylblNotedSF0h4282c580d9d4c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNotedSF0h4282c580d9d4c",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "This is noted Mike, I have forwarded\nthis request to John",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxRequestDataSF0bd8d7e56bbd14a.add(CopylblNotedSF0h4282c580d9d4c);
            CopyflxApproachRequestSF0bceae0ee10dd46.add(CopyflxHeaderApproachesSF0ce8179f423a74a, CopysegRqstApproachesSF0c22b71268aac45, CopyflxRequestDataSF0bd8d7e56bbd14a);
            var CopyflxTammyLogoSF0e6c63bed2c2a4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "CopyflxTammyLogoSF0e6c63bed2c2a4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            CopyflxTammyLogoSF0e6c63bed2c2a4c.setDefaultUnit(kony.flex.DP);
            var CopyimgTammyLogoSF0fe52f790755a40 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60dp",
                "id": "CopyimgTammyLogoSF0fe52f790755a40",
                "isVisible": true,
                "skin": "slImage",
                "src": "tammy_logo.png",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxTammyLogoSF0e6c63bed2c2a4c.add(CopyimgTammyLogoSF0fe52f790755a40);
            flxStep2SF.add(flxHeader2SF, flxMainData2SF, CopyflxApproachesSF0a64891702cd147, CopyflxApproachRequestSF0bceae0ee10dd46, CopyflxTammyLogoSF0e6c63bed2c2a4c);
            var flxStepsMainSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxStepsMainSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGoalOverlaySF",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxStepsMainSF.setDefaultUnit(kony.flex.DP);
            var flxStepsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "91%",
                "id": "flxStepsSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxStepLayoutSF",
                "top": "9%",
                "width": "100%"
            }, {}, {});
            flxStepsSF.setDefaultUnit(kony.flex.DP);
            var flxHeaderSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "12%",
                "id": "flxHeaderSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderSF.setDefaultUnit(kony.flex.DP);
            var flxInsightsLneSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "5%",
                "id": "flxInsightsLneSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxStepGreyIndicatorSF",
                "top": "15%",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxInsightsLneSF.setDefaultUnit(kony.flex.DP);
            flxInsightsLneSF.add();
            var lblInsightsStepSF = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInsightsStepSF",
                "isVisible": true,
                "skin": "sknLblWishesSF",
                "text": "Step: 1/3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxProgressBgSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
                "id": "flxProgressBgSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxProgressBgSF",
                "top": "12%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxProgressBgSF.setDefaultUnit(kony.flex.DP);
            var flxChangeProgressSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxChangeProgressSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxSubmitBg",
                "width": "33.30%",
                "zIndex": 1
            }, {}, {});
            flxChangeProgressSF.setDefaultUnit(kony.flex.DP);
            flxChangeProgressSF.add();
            flxProgressBgSF.add(flxChangeProgressSF);
            flxHeaderSF.add(flxInsightsLneSF, lblInsightsStepSF, flxProgressBgSF);
            var flxMainStepsDataSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75%",
                "id": "flxMainStepsDataSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "12%",
                "width": "100%"
            }, {}, {});
            flxMainStepsDataSF.setDefaultUnit(kony.flex.DP);
            var flxSteps1SF = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxSteps1SF",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSteps1SF.setDefaultUnit(kony.flex.DP);
            var flxStep1aSF = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxStep1aSF",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxStep1aSF.setDefaultUnit(kony.flex.DP);
            var flxStep1L1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "22%",
                "id": "flxStep1L1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep1L1SF.setDefaultUnit(kony.flex.DP);
            var StepsLeftSide = new com.superFinanceRB.StepsLeftSide({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsLeftSide",
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
                    "lblStepsLeftSideSF": {
                        "text": "With the current market conditions, your equities are overweight while your FX and securities are underweight. It is time to rebalance although this will have tax implications."
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep1L1SF.add(StepsLeftSide);
            var flxStep1L2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "20%",
                "id": "flxStep1L2SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep1L2SF.setDefaultUnit(kony.flex.DP);
            var StepsApproach = new com.superFinanceRB.StepsApproach({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsApproach",
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
                    "flxComp1SF": {
                        "width": "85%"
                    },
                    "flxComp2SF": {
                        "width": "5%"
                    },
                    "flxComp3SF": {
                        "width": "10%"
                    },
                    "flxCompPerSF": {
                        "height": "25%"
                    },
                    "flxPerValueSF": {
                        "height": "55%"
                    },
                    "flxSelectApproachSF": {
                        "isVisible": false
                    },
                    "lblPer2SF": {
                        "text": "5%"
                    },
                    "lblPer3SF": {
                        "text": "10%"
                    },
                    "lblPerName2SF": {
                        "text": "FX"
                    },
                    "lblPerName3SF": {
                        "text": "Securities"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep1L2SF.add(StepsApproach);
            var flxStep1L3SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "12%",
                "id": "flxStep1L3SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep1L3SF.setDefaultUnit(kony.flex.DP);
            var StepsLeftSide1 = new com.superFinanceRB.StepsLeftSide({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsLeftSide1",
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
                    "lblStepsLeftSideSF": {
                        "centerY": "50%",
                        "text": "John has few recommendations for you. Would you like to see them?"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep1L3SF.add(StepsLeftSide1);
            flxStep1aSF.add(flxStep1L1SF, flxStep1L2SF, flxStep1L3SF);
            var flxStep1bSF = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxStep1bSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStep1bSF.setDefaultUnit(kony.flex.DP);
            var flxStep1L4SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "24%",
                "id": "flxStep1L4SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep1L4SF.setDefaultUnit(kony.flex.DP);
            var StepsLeftSide2 = new com.superFinanceRB.StepsLeftSide({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsLeftSide2",
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
                    "lblStepsLeftSideSF": {
                        "text": "There are 3 approaches based on predictive performance as per current market conditions. Let me know which one would like to select. Based on which I shall set up an advisory session with your RM John."
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep1L4SF.add(StepsLeftSide2);
            var flxStep1L5SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "27%",
                "id": "flxStep1L5SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep1L5SF.setDefaultUnit(kony.flex.DP);
            var StepsApproach1 = new com.superFinanceRB.StepsApproach({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsApproach1",
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
                    "flxComp1SF": {
                        "centerY": "45%",
                        "width": "85%"
                    },
                    "flxComp2SF": {
                        "centerY": "45%",
                        "width": "5%"
                    },
                    "flxComp3SF": {
                        "centerY": "45%",
                        "width": "10%"
                    },
                    "flxCompPerSF": {
                        "height": "20%"
                    },
                    "flxPerValueSF": {
                        "centerX": "50.00%",
                        "height": "45%",
                        "top": "0.00%"
                    },
                    "flxProgressBgSF": {
                        "centerY": "50%"
                    },
                    "lblApproachOptionSF": {
                        "text": "Aggressive approach - Current"
                    },
                    "lblPer2SF": {
                        "text": "5%"
                    },
                    "lblPer3SF": {
                        "text": "10%"
                    },
                    "lblPerName2SF": {
                        "text": "FX"
                    },
                    "lblPerName3SF": {
                        "text": "Securities"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep1L5SF.add(StepsApproach1);
            var flxStep1L6SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "27%",
                "id": "flxStep1L6SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep1L6SF.setDefaultUnit(kony.flex.DP);
            var StepsApproach2 = new com.superFinanceRB.StepsApproach({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsApproach2",
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
                    "flxComp1SF": {
                        "centerY": "45%",
                        "width": "50%"
                    },
                    "flxComp2SF": {
                        "centerY": "45%",
                        "width": "10%"
                    },
                    "flxComp3SF": {
                        "centerY": "45%",
                        "width": "40%"
                    },
                    "flxCompPerSF": {
                        "height": "20%"
                    },
                    "lblApproachOptionSF": {
                        "text": "Balanced approach"
                    },
                    "lblPer2SF": {
                        "text": "10%"
                    },
                    "lblPer3SF": {
                        "text": "40%"
                    },
                    "lblPerName2SF": {
                        "text": "FX"
                    },
                    "lblPerName3SF": {
                        "text": "Securities"
                    },
                    "lblPerVal1SF": {
                        "text": "50%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep1L6SF.add(StepsApproach2);
            var flxStep1L7SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "27%",
                "id": "flxStep1L7SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep1L7SF.setDefaultUnit(kony.flex.DP);
            var StepsApproach3 = new com.superFinanceRB.StepsApproach({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsApproach3",
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
                    "flxComp1SF": {
                        "centerY": "45%",
                        "width": "35%"
                    },
                    "flxComp2SF": {
                        "centerY": "45%",
                        "width": "10%"
                    },
                    "flxComp3SF": {
                        "centerY": "45%",
                        "width": "55%"
                    },
                    "lblApproachOptionSF": {
                        "text": "Conservative approach"
                    },
                    "lblPer2SF": {
                        "text": "10%"
                    },
                    "lblPer3SF": {
                        "text": "55%"
                    },
                    "lblPerName2SF": {
                        "text": "FX"
                    },
                    "lblPerName3SF": {
                        "text": "Securities"
                    },
                    "lblPerVal1SF": {
                        "text": "35%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep1L7SF.add(StepsApproach3);
            var flxStep1L8SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flxStep1L8SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep1L8SF.setDefaultUnit(kony.flex.DP);
            var StepsLeftSide3 = new com.superFinanceRB.StepsLeftSide({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsLeftSide3",
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
                    "lblStepsLeftSideSF": {
                        "text": "This is noted Mike, I have forwaded this request to John."
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep1L8SF.add(StepsLeftSide3);
            flxStep1bSF.add(flxStep1L4SF, flxStep1L5SF, flxStep1L6SF, flxStep1L7SF, flxStep1L8SF);
            flxSteps1SF.add(flxStep1aSF, flxStep1bSF);
            var flxSteps2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxSteps2SF",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSteps2SF.setDefaultUnit(kony.flex.DP);
            var flxTopWrap = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxTopWrap",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "85%"
            }, {}, {});
            flxTopWrap.setDefaultUnit(kony.flex.DP);
            var StepsLeftSide21 = new com.superFinanceRB.StepsLeftSide({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsLeftSide21",
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
                    "lblStepsLeftSideSF": {
                        "text": "A new re-finance scheme for your mortgage has come up!"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxTopWrap.add(StepsLeftSide21);
            var flxStepsL22SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxStepsL22SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "8%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxStepsL22SF.setDefaultUnit(kony.flex.DP);
            var LeftSide22SF = new com.superFinanceRB.StepsLeftSide({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "LeftSide22SF",
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
                    "lblStepsLeftSideSF": {
                        "text": "Sure"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStepsL22SF.add(LeftSide22SF);
            var flxStepsOptionWp = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "85%",
                "horizontalScrollIndicator": true,
                "id": "flxStepsOptionWp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "2%",
                "verticalScrollIndicator": true,
                "width": "85%"
            }, {}, {});
            flxStepsOptionWp.setDefaultUnit(kony.flex.DP);
            var flxInnerWps = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxInnerWps",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%"
            }, {}, {});
            flxInnerWps.setDefaultUnit(kony.flex.DP);
            var lblfinancescheme = new kony.ui.Label({
                "id": "lblfinancescheme",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0bac342414b3c40",
                "text": "Re-Finance Scheme",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segScheme = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblSchemeName": "",
                    "lblSchemePercent": ""
                }],
                "groupCells": false,
                "id": "segScheme",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_eeebadb80cb94f1da946cbaab383ba45,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0je7d9e1982fa4f",
                "rowTemplate": "flxFinanceScheme",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "11183500",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCircles": "flxCircles",
                    "flxFinanceScheme": "flxFinanceScheme",
                    "lblSchemeName": "lblSchemeName",
                    "lblSchemePercent": "lblSchemePercent"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxScheduleCallWp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxScheduleCallWp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%"
            }, {}, {});
            flxScheduleCallWp.setDefaultUnit(kony.flex.DP);
            var flxScheduleCallSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxScheduleCallSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "90%"
            }, {}, {});
            flxScheduleCallSF.setDefaultUnit(kony.flex.DP);
            var lblScheduleText = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblScheduleText",
                "isVisible": true,
                "skin": "CopydefLabel0i3d4f7a5f1ad49",
                "text": "Scheduling call with Bank of Atlantis",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxScheduleCallSF.add(lblScheduleText);
            var flxSelectTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65%",
                "id": "flxSelectTime",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "4%",
                "width": "100%"
            }, {}, {});
            flxSelectTime.setDefaultUnit(kony.flex.DP);
            var flxTimer1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxTimer1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknBorderunSelect",
                "top": "4%",
                "width": "40%"
            }, {}, {});
            flxTimer1.setDefaultUnit(kony.flex.DP);
            var lblTimer1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblTimer1",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0d5388c10f04541",
                "text": "9am Friday",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTimer1.add(lblTimer1);
            var flxTimer2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxTimer2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "sknBorderunSelect",
                "top": "4%",
                "width": "40%"
            }, {}, {});
            flxTimer2.setDefaultUnit(kony.flex.DP);
            var lblTimer2 = new kony.ui.Label({
                "height": "100%",
                "id": "lblTimer2",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0d5388c10f04541",
                "text": "4pm Friday",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTimer2.add(lblTimer2);
            var flxTimer3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxTimer3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknBorderunSelect",
                "top": "45%",
                "width": "40%"
            }, {}, {});
            flxTimer3.setDefaultUnit(kony.flex.DP);
            var lblTimer3 = new kony.ui.Label({
                "height": "100%",
                "id": "lblTimer3",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0d5388c10f04541",
                "text": "10am Saturday",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTimer3.add(lblTimer3);
            var flxTimer4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxTimer4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "sknBorderunSelect",
                "top": "45%",
                "width": "40%"
            }, {}, {});
            flxTimer4.setDefaultUnit(kony.flex.DP);
            var lblTimer4 = new kony.ui.Label({
                "height": "100%",
                "id": "lblTimer4",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0d5388c10f04541",
                "text": "more slots",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTimer4.add(lblTimer4);
            flxSelectTime.add(flxTimer1, flxTimer2, flxTimer3, flxTimer4);
            var flxNextWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNextWrapper",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%"
            }, {}, {});
            flxNextWrapper.setDefaultUnit(kony.flex.DP);
            var btnNextWp = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnNextWp",
                "isVisible": false,
                "left": "0",
                "skin": "sknBtnClr",
                "text": "Next",
                "top": "0",
                "width": "180dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNextWrapper.add(btnNextWp);
            flxScheduleCallWp.add(flxScheduleCallSF, flxSelectTime, flxNextWrapper);
            flxInnerWps.add(lblfinancescheme, segScheme, flxScheduleCallWp);
            flxStepsOptionWp.add(flxInnerWps);
            flxSteps2SF.add(flxTopWrap, flxStepsL22SF, flxStepsOptionWp);
            var flxSteps3SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxSteps3SF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSteps3SF.setDefaultUnit(kony.flex.DP);
            var flxStep3L1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30%",
                "id": "flxStep3L1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxStepsBGSF",
                "top": "0%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep3L1SF.setDefaultUnit(kony.flex.DP);
            var lblTransIDSF = new kony.ui.Label({
                "id": "lblTransIDSF",
                "isVisible": true,
                "left": "8%",
                "skin": "sknlblInfoStep1SF",
                "text": "Transaction#1312",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAmountSF = new kony.ui.Label({
                "id": "lblAmountSF",
                "isVisible": true,
                "right": "8%",
                "skin": "sknlblInfoStep1SF",
                "text": "Amount",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAmountValSF = new kony.ui.Label({
                "id": "lblAmountValSF",
                "isVisible": true,
                "right": "8%",
                "skin": "sknLblTransTitleSF",
                "text": "€1.099",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTmeandDteSF = new kony.ui.Label({
                "id": "lblTmeandDteSF",
                "isVisible": true,
                "left": "8%",
                "skin": "sknlblInfoStep1SF",
                "text": "At 7PM 6th May, 2021",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "45%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEventNameSF = new kony.ui.Label({
                "id": "lblEventNameSF",
                "isVisible": true,
                "left": "8%",
                "skin": "sknlblInfoStep1SF",
                "text": "SIBOS Event",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "60%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxExpenseSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxExpenseSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "8%",
                "skin": "sknFlxBusinessSF",
                "top": "50%",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxExpenseSF.setDefaultUnit(kony.flex.DP);
            var lblPersonalSF = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblPersonalSF",
                "isVisible": true,
                "skin": "sknLblExpenseSF",
                "text": "Personal",
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
            flxExpenseSF.add(lblPersonalSF);
            flxStep3L1SF.add(lblTransIDSF, lblAmountSF, lblAmountValSF, lblTmeandDteSF, lblEventNameSF, flxExpenseSF);
            var flxStep3L2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "11%",
                "id": "flxStep3L2SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep3L2SF.setDefaultUnit(kony.flex.DP);
            var StepsLeftSide3L2SF = new com.superFinanceRB.StepsLeftSide({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsLeftSide3L2SF",
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
                    "lblStepsLeftSideSF": {
                        "text": "Would you like to tag this under business expense?"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep3L2SF.add(StepsLeftSide3L2SF);
            var flxStep3L1SFNotUsed = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18%",
                "id": "flxStep3L1SFNotUsed",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep3L1SFNotUsed.setDefaultUnit(kony.flex.DP);
            var StepsLeftSide4 = new com.superFinanceRB.StepsLeftSide({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsLeftSide4",
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
                    "lblStepsLeftSideSF": {
                        "text": "You will be running out of stock for mask and cleaning supplies soon. Would you like me to repeat your order on Amazon?"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep3L1SFNotUsed.add(StepsLeftSide4);
            var flxStep3L2SFNotUsed = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxStep3L2SFNotUsed",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "7.50%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxStep3L2SFNotUsed.setDefaultUnit(kony.flex.DP);
            var imgStep3L2SF = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStep3L2SF",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "mask_fusion.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStep3L2SFNotUsed.add(imgStep3L2SF);
            var flxStep3R1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxStep3R1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "7.50%",
                "skin": "sknFlxStepRightBgSF",
                "top": "2%",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxStep3R1SF.setDefaultUnit(kony.flex.DP);
            var lblStepsRightSideSF = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblStepsRightSideSF",
                "isVisible": true,
                "skin": "sknlblInfoStep1SF",
                "text": "Ok",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxStep3R1SF.add(lblStepsRightSideSF);
            var flxStep3L3SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "11%",
                "id": "flxStep3L3SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxStep3L3SF.setDefaultUnit(kony.flex.DP);
            var StepsLeftSide5 = new com.superFinanceRB.StepsLeftSide({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "StepsLeftSide5",
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
                    "lblStepsLeftSideSF": {
                        "text": "Tagged this transaction of €1.099 under business expenses"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxStep3L3SF.add(StepsLeftSide5);
            flxSteps3SF.add(flxStep3L1SF, flxStep3L2SF, flxStep3L1SFNotUsed, flxStep3L2SFNotUsed, flxStep3R1SF, flxStep3L3SF);
            var flxDataSet1SF = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxDataSet1SF",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "0",
                "width": "90%"
            }, {}, {});
            flxDataSet1SF.setDefaultUnit(kony.flex.DP);
            var lblInfo1SF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblInfo1SF",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "With the current market conditions,\nyour equities are overweight while\nyour FX and securities are\nunderweight. It is time to rebalance \nalthough this will have tax\nimplications.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDataSet1SF.add(lblInfo1SF);
            var flxDataSet2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "25%",
                "id": "flxDataSet2SF",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "5%",
                "width": "90%"
            }, {}, {});
            flxDataSet2SF.setDefaultUnit(kony.flex.DP);
            var flxPercentageSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxPercentageSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "90%"
            }, {}, {});
            flxPercentageSF.setDefaultUnit(kony.flex.DP);
            var lblPercentage1SF = new kony.ui.Label({
                "id": "lblPercentage1SF",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblPercentageSF",
                "text": "85%",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPercentage2SF = new kony.ui.Label({
                "id": "lblPercentage2SF",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblPercentageSF",
                "text": "5%",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPercentage3SF = new kony.ui.Label({
                "id": "lblPercentage3SF",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblPercentageSF",
                "text": "10%",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPercentageSF.add(lblPercentage1SF, lblPercentage2SF, lblPercentage3SF);
            var flxFundsNameSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxFundsNameSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "90%"
            }, {}, {});
            flxFundsNameSF.setDefaultUnit(kony.flex.DP);
            var lblEquitiesSF = new kony.ui.Label({
                "id": "lblEquitiesSF",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblNormalHeaderSF",
                "text": "Equities",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFX = new kony.ui.Label({
                "id": "lblFX",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblNormalHeaderSF",
                "text": "FX",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecuritiesSF = new kony.ui.Label({
                "id": "lblSecuritiesSF",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblNormalHeaderSF",
                "text": "Securities",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "33.33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFundsNameSF.add(lblEquitiesSF, lblFX, lblSecuritiesSF);
            var flxFundsIndicatorSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxFundsIndicatorSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxFundsIndicatorSF",
                "top": "7%",
                "width": "90%"
            }, {}, {});
            flxFundsIndicatorSF.setDefaultUnit(kony.flex.DP);
            var lblYellowSF = new kony.ui.Label({
                "height": "100%",
                "id": "lblYellowSF",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblYellowIndicatorSF",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "85%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBlueSF = new kony.ui.Label({
                "height": "100%",
                "id": "lblBlueSF",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblBlueIndicatorSF",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "5%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOrangeSF = new kony.ui.Label({
                "height": "100%",
                "id": "lblOrangeSF",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblOrangeIndicatorSF",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "10%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFundsIndicatorSF.add(lblYellowSF, lblBlueSF, lblOrangeSF);
            flxDataSet2SF.add(flxPercentageSF, flxFundsNameSF, flxFundsIndicatorSF);
            var flxDataSet3SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18%",
                "id": "flxDataSet3SF",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "5%",
                "width": "90%"
            }, {}, {});
            flxDataSet3SF.setDefaultUnit(kony.flex.DP);
            var lblRecommendationsSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRecommendationsSF",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "John has few recommendations for\nyou. Would you like to see them?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDataSet3SF.add(lblRecommendationsSF);
            flxMainStepsDataSF.add(flxSteps1SF, flxSteps2SF, flxSteps3SF, flxDataSet1SF, flxDataSet2SF, flxDataSet3SF);
            var flxApproachesSF = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "70%",
                "horizontalScrollIndicator": true,
                "id": "flxApproachesSF",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxApproachesSF.setDefaultUnit(kony.flex.DP);
            var flxApprochesInfoSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "46%",
                "id": "flxApprochesInfoSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "0",
                "width": "90%"
            }, {}, {});
            flxApprochesInfoSF.setDefaultUnit(kony.flex.DP);
            var lblApproachesSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApproachesSF",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "There are 3 approaches based on\npredictive performance as per\ncurrent market conditions. Let me\nknow which one would you like to\nselect. Based on which I shall set up\nan advisory session with your RM\nJohn",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxApprochesInfoSF.add(lblApproachesSF);
            var segApproachesSF = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgCircleSF": "radiobuttoninactive.png",
                    "lblApproachesType": "Aggressive Approach - Current",
                    "lblBlueSF": "",
                    "lblEquitiesSF": "Equities",
                    "lblFX": "FX",
                    "lblOrangeSF": "",
                    "lblPercentage1SF": "85%",
                    "lblPercentage2SF": "5%",
                    "lblPercentage3SF": "10%",
                    "lblSecuritiesSF": "Securities",
                    "lblYellowSF": ""
                }, {
                    "imgCircleSF": "radiobuttoninactive.png",
                    "lblApproachesType": "Aggressive Approach - Current",
                    "lblBlueSF": "",
                    "lblEquitiesSF": "Equities",
                    "lblFX": "FX",
                    "lblOrangeSF": "",
                    "lblPercentage1SF": "85%",
                    "lblPercentage2SF": "5%",
                    "lblPercentage3SF": "10%",
                    "lblSecuritiesSF": "Securities",
                    "lblYellowSF": ""
                }, {
                    "imgCircleSF": "radiobuttoninactive.png",
                    "lblApproachesType": "Aggressive Approach - Current",
                    "lblBlueSF": "",
                    "lblEquitiesSF": "Equities",
                    "lblFX": "FX",
                    "lblOrangeSF": "",
                    "lblPercentage1SF": "85%",
                    "lblPercentage2SF": "5%",
                    "lblPercentage3SF": "10%",
                    "lblSecuritiesSF": "Securities",
                    "lblYellowSF": ""
                }],
                "groupCells": false,
                "height": "240dp",
                "id": "segApproachesSF",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowTemplate": "flxApproachListSF",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxApproachListSF": "flxApproachListSF",
                    "flxFundsIndicatorSF": "flxFundsIndicatorSF",
                    "flxFundsNameSF": "flxFundsNameSF",
                    "flxMainView": "flxMainView",
                    "flxPercentageSF": "flxPercentageSF",
                    "flxRadioOptionSF": "flxRadioOptionSF",
                    "imgCircleSF": "imgCircleSF",
                    "lblApproachesType": "lblApproachesType",
                    "lblBlueSF": "lblBlueSF",
                    "lblEquitiesSF": "lblEquitiesSF",
                    "lblFX": "lblFX",
                    "lblOrangeSF": "lblOrangeSF",
                    "lblPercentage1SF": "lblPercentage1SF",
                    "lblPercentage2SF": "lblPercentage2SF",
                    "lblPercentage3SF": "lblPercentage3SF",
                    "lblSecuritiesSF": "lblSecuritiesSF",
                    "lblYellowSF": "lblYellowSF"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApproachesSF.add(flxApprochesInfoSF, segApproachesSF);
            var flxApproachRequestSF = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "70%",
                "horizontalScrollIndicator": true,
                "id": "flxApproachRequestSF",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxApproachRequestSF.setDefaultUnit(kony.flex.DP);
            var flxHeaderApproachesSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "46%",
                "id": "flxHeaderApproachesSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "0",
                "width": "90%"
            }, {}, {});
            flxHeaderApproachesSF.setDefaultUnit(kony.flex.DP);
            var lblApproachesHeaderSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApproachesHeaderSF",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "There are 3 approaches based on\npredictive performance as per\ncurrent market conditions. Let me\nknow which one would you like to\nselect. Based on which I shall set up\nan advisory session with your RM\nJohn",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeaderApproachesSF.add(lblApproachesHeaderSF);
            var segRqstApproachesSF = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCircleSF": "radiobuttoninactive.png",
                    "lblApproachesType": "Aggressive Approach - Current",
                    "lblBlueSF": "",
                    "lblEquitiesSF": "Equities",
                    "lblFX": "FX",
                    "lblOrangeSF": "",
                    "lblPercentage1SF": "85%",
                    "lblPercentage2SF": "5%",
                    "lblPercentage3SF": "10%",
                    "lblSecuritiesSF": "Securities",
                    "lblYellowSF": ""
                }],
                "groupCells": false,
                "id": "segRqstApproachesSF",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowTemplate": "flxApproachListSF",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "2%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxApproachListSF": "flxApproachListSF",
                    "flxFundsIndicatorSF": "flxFundsIndicatorSF",
                    "flxFundsNameSF": "flxFundsNameSF",
                    "flxMainView": "flxMainView",
                    "flxPercentageSF": "flxPercentageSF",
                    "flxRadioOptionSF": "flxRadioOptionSF",
                    "imgCircleSF": "imgCircleSF",
                    "lblApproachesType": "lblApproachesType",
                    "lblBlueSF": "lblBlueSF",
                    "lblEquitiesSF": "lblEquitiesSF",
                    "lblFX": "lblFX",
                    "lblOrangeSF": "lblOrangeSF",
                    "lblPercentage1SF": "lblPercentage1SF",
                    "lblPercentage2SF": "lblPercentage2SF",
                    "lblPercentage3SF": "lblPercentage3SF",
                    "lblSecuritiesSF": "lblSecuritiesSF",
                    "lblYellowSF": "lblYellowSF"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxRequestDataSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18%",
                "id": "flxRequestDataSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBlackIndicatorRoundedSF",
                "top": "1%",
                "width": "90%"
            }, {}, {});
            flxRequestDataSF.setDefaultUnit(kony.flex.DP);
            var lblNotedSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNotedSF",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlblInfoStep1SF",
                "text": "This is noted Mike, I have forwarded\nthis request to John",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRequestDataSF.add(lblNotedSF);
            flxApproachRequestSF.add(flxHeaderApproachesSF, segRqstApproachesSF, flxRequestDataSF);
            var flxTammyLogoSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "2%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxTammyLogoSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxTammyLogoSF.setDefaultUnit(kony.flex.DP);
            var imgTammyLogoSF = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60dp",
                "id": "imgTammyLogoSF",
                "isVisible": true,
                "skin": "slImage",
                "src": "tammy_logo.png",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTammyLogoSF.add(imgTammyLogoSF);
            var btnNextSF = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "focusSkin": "sknBtnCheckinSF",
                "height": "6%",
                "id": "btnNextSF",
                "isVisible": false,
                "skin": "sknBtnCheckinSF",
                "text": "Next",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var texttospeech = new com.konymp.texttospeech({
                "height": "10%",
                "id": "texttospeech",
                "isVisible": true,
                "left": "100%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopykonympttsflxImage",
                "top": "0%",
                "width": "12%",
                "overrides": {
                    "texttospeech": {
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
            texttospeech.setAndroidLanguage = "UK";
            texttospeech.preUtteranceDelay = "0.0";
            texttospeech.setWebLanguage = "en-Us";
            texttospeech.postUtteranceDelay = "0.0";
            texttospeech.setPitch = "1";
            texttospeech.pitchMultiplier = "1.0";
            texttospeech.setWebVolume = "1";
            texttospeech.setIphoneLanguage = "en-us";
            texttospeech.volume = "0.5";
            texttospeech.setRate = "0.5";
            texttospeech.stopSpeechApibehaviour = "stop after finishing current word";
            flxStepsSF.add(flxHeaderSF, flxMainStepsDataSF, flxApproachesSF, flxApproachRequestSF, flxTammyLogoSF, btnNextSF, texttospeech);
            flxStepsMainSF.add(flxStepsSF);
            flxMainSF.add(flxHeaderInsightsSF, flxStep2SF, flxStepsMainSF);
            this.add(flxMainSF);
        };
        return [{
            "addWidgets": addWidgetsfrmInsightSF,
            "enabledForIdleTimeout": false,
            "id": "frmInsightSF",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_g12f2cfad41b4d0092ec21424af5d448,
            "preShow": function(eventobject) {
                controller.AS_Form_i9d0cda81b5b4089a96477bfdbd57d5b(eventobject);
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