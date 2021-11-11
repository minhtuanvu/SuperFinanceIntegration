define("SuperFinanceModule/frmGoalSF", function() {
    return function(controller) {
        function addWidgetsfrmGoalSF() {
            this.setDefaultUnit(kony.flex.DP);
            var flxParentGoalSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxParentGoalSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxParentGoalSF.setDefaultUnit(kony.flex.DP);
            var flxHeaderGoalSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxHeaderGoalSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxHeaderSF",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderGoalSF.setDefaultUnit(kony.flex.DP);
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
            flxHeaderGoalSF.add(HeaderSF);
            var flxMainGoalSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainGoalSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxGoalOverlaySF",
                "top": "0%",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxMainGoalSF.setDefaultUnit(kony.flex.DP);
            var flxGoalsParentSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "91%",
                "id": "flxGoalsParentSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxHeaderSF",
                "top": "9%",
                "width": "100%"
            }, {}, {});
            flxGoalsParentSF.setDefaultUnit(kony.flex.DP);
            var flxGoalNameSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "6%",
                "id": "flxGoalNameSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGoalNameSF.setDefaultUnit(kony.flex.DP);
            var lblGoalNameSF = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblGoalNameSF",
                "isVisible": true,
                "skin": "sknLblWishesSF",
                "text": "Stella's PS5",
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
            var flxCancelSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCancelSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "top": "4dp",
                "width": "17%",
                "zIndex": 1
            }, {}, {});
            flxCancelSF.setDefaultUnit(kony.flex.DP);
            var imgCancelSF = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgCancelSF",
                "isVisible": true,
                "skin": "slImage",
                "src": "closewhite.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCancelSF.add(imgCancelSF);
            flxGoalNameSF.add(lblGoalNameSF, flxCancelSF);
            var flxGoalMainSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "82%",
                "id": "flxGoalMainSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGoalMainSF.setDefaultUnit(kony.flex.DP);
            var flxGoalSF1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxGoalSF1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGoalSF1.setDefaultUnit(kony.flex.DP);
            var lblCurrentBalSF = new kony.ui.Label({
                "id": "lblCurrentBalSF",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblGoalTiteSF",
                "text": "Current Balance",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCrntBalVal = new kony.ui.Label({
                "id": "lblCrntBalVal",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblBalValueSF",
                "text": "€ 350,00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxLneChartSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "38%",
                "id": "flxLneChartSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLneChartSF.setDefaultUnit(kony.flex.DP);
            flxLneChartSF.add();
            var flxGoalAmountSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxGoalAmountSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGoalAmountSF.setDefaultUnit(kony.flex.DP);
            var lblGoalAmtSF = new kony.ui.Label({
                "id": "lblGoalAmtSF",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblGoalTiteSF",
                "text": "Goal Amount",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblGoalAmtValSF = new kony.ui.Label({
                "bottom": "5%",
                "id": "lblGoalAmtValSF",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblWishesSF",
                "text": "€ 500,00",
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
            var btnFund = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnCheckinSF",
                "height": "70%",
                "id": "btnFund",
                "isVisible": true,
                "onClick": controller.AS_Button_d67def84709c4c0c9a203568cbd5b8ae,
                "right": "4%",
                "skin": "sknBtnCheckinSF",
                "text": "FUND",
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxGoalAmountSF.add(lblGoalAmtSF, lblGoalAmtValSF, btnFund);
            var flxTasksAchievedSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "36%",
                "id": "flxTasksAchievedSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTasksAchievedSF.setDefaultUnit(kony.flex.DP);
            var flxTitleTasksSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "20%",
                "id": "flxTitleTasksSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTitleTasksSF.setDefaultUnit(kony.flex.DP);
            var lblTaskTitleSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTaskTitleSF",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblGoalTiteSF",
                "text": "Tasks Achieved",
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
            var lblAssignNew = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAssignNew",
                "isVisible": true,
                "right": "4%",
                "skin": "sknLblAddExpSF",
                "text": "Assign New",
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
            flxTitleTasksSF.add(lblTaskTitleSF, lblAssignNew);
            var segTasksSF = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "imgTickSF": "",
                    "lblTaskDate": "",
                    "lblTaskTitleSF": ""
                }],
                "groupCells": false,
                "id": "segTasksSF",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegTransSF",
                "rowSkin": "sknSegTransSF",
                "rowTemplate": "flxTasksAchievedSF",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "2%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxParentSF": "flxParentSF",
                    "flxTasksAchievedSF": "flxTasksAchievedSF",
                    "flxTickImgSF": "flxTickImgSF",
                    "imgTickSF": "imgTickSF",
                    "lblTaskDate": "lblTaskDate",
                    "lblTaskTitleSF": "lblTaskTitleSF"
                },
                "width": "94%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTasksAchievedSF.add(flxTitleTasksSF, segTasksSF);
            flxGoalSF1.add(lblCurrentBalSF, lblCrntBalVal, flxLneChartSF, flxGoalAmountSF, flxTasksAchievedSF);
            var flxGoalSF2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxGoalSF2",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGoalSF2.setDefaultUnit(kony.flex.DP);
            var lblTransferTitleSF = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTransferTitleSF",
                "isVisible": true,
                "skin": "sknLblGoalTiteSF",
                "text": "Transfer from current balance to",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblGoalTitleSF = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblGoalTitleSF",
                "isVisible": true,
                "skin": "sknLblWishesSF",
                "text": "Stella's PS5 Goal",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxAmountSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flxAmountSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15%",
                "width": "55%",
                "zIndex": 1
            }, {}, {});
            flxAmountSF.setDefaultUnit(kony.flex.DP);
            var lblEnterAmtSF = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterAmtSF",
                "isVisible": true,
                "skin": "sknLblGoalTiteSF",
                "text": "Enter Amount",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxAmtValSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxAmtValSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxAmtValSF.setDefaultUnit(kony.flex.DP);
            var lblCrncySF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCrncySF",
                "isVisible": true,
                "left": "20%",
                "skin": "sknLblCrncySF",
                "text": "€",
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
            var txtBoxAmtSF = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skntxtBoxAmtSF",
                "height": "100%",
                "id": "txtBoxAmtSF",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "2%",
                "secureTextEntry": false,
                "skin": "skntxtBoxAmtSF",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtBoxAmtSF",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxAmtValSF.add(lblCrncySF, txtBoxAmtSF);
            var flxLneAmtSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLneAmtSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxGreyLneSF",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLneAmtSF.setDefaultUnit(kony.flex.DP);
            flxLneAmtSF.add();
            flxAmountSF.add(lblEnterAmtSF, flxAmtValSF, flxLneAmtSF);
            var btnTransferSF = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnCheckinSF",
                "height": "8%",
                "id": "btnTransferSF",
                "isVisible": true,
                "onClick": controller.AS_Button_jb8ec25da8524fd29fe4737815ccbf4f,
                "skin": "sknBtnCheckinSF",
                "text": "TRANSFER",
                "top": "15%",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxGoalSF2.add(lblTransferTitleSF, lblGoalTitleSF, flxAmountSF, btnTransferSF);
            var flxGoalSF3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxGoalSF3",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGoalSF3.setDefaultUnit(kony.flex.DP);
            var flxSuccessImgSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "27%",
                "id": "flxSuccessImgSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "7%",
                "width": "75%",
                "zIndex": 1
            }, {}, {});
            flxSuccessImgSF.setDefaultUnit(kony.flex.DP);
            var imgSuccessSF = new kony.ui.Image2({
                "height": "100%",
                "id": "imgSuccessSF",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "group3956.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSuccessImgSF.add(imgSuccessSF);
            var lblCelebrationSF = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCelebrationSF",
                "isVisible": true,
                "skin": "sknLblGoalTiteSF",
                "text": "This is a celebration announcement",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCongratsSF = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCongratsSF",
                "isVisible": true,
                "skin": "sknLblCrncySF",
                "text": "Congratulations",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCongratsDescSF = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCongratsDescSF",
                "isVisible": true,
                "skin": "sknLblWishesSF",
                "text": "Stella completed her savings goal for a PS5",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnDoneSF = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnCheckinSF",
                "height": "8%",
                "id": "btnDoneSF",
                "isVisible": true,
                "skin": "sknBtnCheckinSF",
                "text": "DONE",
                "top": "10%",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxGoalSF3.add(flxSuccessImgSF, lblCelebrationSF, lblCongratsSF, lblCongratsDescSF, btnDoneSF);
            flxGoalMainSF.add(flxGoalSF1, flxGoalSF2, flxGoalSF3);
            var flxTammyLogoSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxTammyLogoSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
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
            flxGoalsParentSF.add(flxGoalNameSF, flxGoalMainSF, flxTammyLogoSF);
            flxMainGoalSF.add(flxGoalsParentSF);
            flxParentGoalSF.add(flxHeaderGoalSF, flxMainGoalSF);
            this.add(flxParentGoalSF);
        };
        return [{
            "addWidgets": addWidgetsfrmGoalSF,
            "enabledForIdleTimeout": false,
            "id": "frmGoalSF",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_d8bad1575253417b952c3a1f1df25ce4(eventobject);
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