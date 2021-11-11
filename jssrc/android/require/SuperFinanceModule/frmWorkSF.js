define("SuperFinanceModule/frmWorkSF", function() {
    return function(controller) {
        function addWidgetsfrmWorkSF() {
            this.setDefaultUnit(kony.flex.DP);
            var flxParentWorkSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxParentWorkSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxParentWorkSF.setDefaultUnit(kony.flex.DP);
            var flxHeaderTammySF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15%",
                "id": "flxHeaderTammySF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderSF",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderTammySF.setDefaultUnit(kony.flex.DP);
            var flxWorkHeaderSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxWorkHeaderSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWorkHeaderSF.setDefaultUnit(kony.flex.DP);
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
                    "flxHighlight3SF": {
                        "isVisible": false
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            HeaderSF.flxWealthSF.onClick = controller.AS_FlexContainer_e4e98be0fcfa4db49dbbd4a2a0cb6988;
            flxWorkHeaderSF.add(HeaderSF);
            var flxInsightsDtlsWSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxInsightsDtlsWSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxTammySF",
                "top": "50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInsightsDtlsWSF.setDefaultUnit(kony.flex.DP);
            var rchTxtInsightsSF = new kony.ui.RichText({
                "centerY": "50%",
                "id": "rchTxtInsightsSF",
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
            var flxWorkTammySF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWorkTammySF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_e03938a6b3bf4ad1a92f06b1833ae3e0,
                "right": "6%",
                "skin": "slFbox",
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxWorkTammySF.setDefaultUnit(kony.flex.DP);
            var imgWorkTammySF = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgWorkTammySF",
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
            flxWorkTammySF.add(imgWorkTammySF);
            flxInsightsDtlsWSF.add(rchTxtInsightsSF, flxWorkTammySF);
            flxHeaderTammySF.add(flxWorkHeaderSF, flxInsightsDtlsWSF);
            var flxScrollWorkMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "85%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollWorkMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "15%",
                "verticalScrollIndicator": false,
                "width": "100%"
            }, {}, {});
            flxScrollWorkMain.setDefaultUnit(kony.flex.DP);
            var flxWorkMainSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30%",
                "id": "flxWorkMainSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxLifestyleMainSF",
                "top": "-3%",
                "width": "110%"
            }, {}, {});
            flxWorkMainSF.setDefaultUnit(kony.flex.DP);
            var flxBalAndLimitsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "35%",
                "id": "flxBalAndLimitsSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "17%",
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxBalAndLimitsSF.setDefaultUnit(kony.flex.DP);
            var lblBalLimitsTitleSF = new kony.ui.Label({
                "id": "lblBalLimitsTitleSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblNormalHeaderSF",
                "text": "Available Balance & Limits",
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
            var flxBalValueSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxBalValueSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalValueSF.setDefaultUnit(kony.flex.DP);
            var lblBalValueSF = new kony.ui.Label({
                "id": "lblBalValueSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblBalValueSF",
                "text": "€ 96.150,23",
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
            var flxWorkHeatSignSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWorkHeatSignSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "9%",
                "zIndex": 1
            }, {}, {});
            flxWorkHeatSignSF.setDefaultUnit(kony.flex.DP);
            var imgHeatSignSF = new kony.ui.Image2({
                "height": "100%",
                "id": "imgHeatSignSF",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "highlight_fusion.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWorkHeatSignSF.add(imgHeatSignSF);
            flxBalValueSF.add(lblBalValueSF, flxWorkHeatSignSF);
            flxBalAndLimitsSF.add(lblBalLimitsTitleSF, flxBalValueSF);
            flxWorkMainSF.add(flxBalAndLimitsSF);
            var flxWorkAccLstSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "34%",
                "id": "flxWorkAccLstSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-13%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWorkAccLstSF.setDefaultUnit(kony.flex.DP);
            var lblWorkAccTitleSF = new kony.ui.Label({
                "id": "lblWorkAccTitleSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblLifestyleHeaderSF",
                "text": "Accounts",
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
            var flxAccLstsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "85%",
                "id": "flxAccLstsSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccLstsSF.setDefaultUnit(kony.flex.DP);
            var flx1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "95%",
                "id": "flx1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "isModalContainer": false,
                "skin": "sknFlxAccBg1SF",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flx1SF.setDefaultUnit(kony.flex.DP);
            var cardsSF = new com.SuperFinance.cardsSF({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "cardsSF",
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
                    "imgWLogoSF": {
                        "src": "wallet.png"
                    },
                    "lblWCrncySF": {
                        "text": "€ 90.000"
                    },
                    "lblWDescSF": {
                        "text": "Available Limit"
                    },
                    "lblWTitleSF": {
                        "text": "AMEX"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flx1SF.add(cardsSF);
            var flx2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "95%",
                "id": "flx2SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "7%",
                "isModalContainer": false,
                "skin": "sknFlxAcc2BgSF",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flx2SF.setDefaultUnit(kony.flex.DP);
            var cardsSF1 = new com.SuperFinance.cardsSF({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "cardsSF1",
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
                    "imgWLogoSF": {
                        "src": "wallet1.png"
                    },
                    "lblWCrncySF": {
                        "text": "€ 6.150,23"
                    },
                    "lblWDescSF": {
                        "text": "Total Balance"
                    },
                    "lblWTitleSF": {
                        "text": "FOREX"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flx2SF.add(cardsSF1);
            flxAccLstsSF.add(flx1SF, flx2SF);
            flxWorkAccLstSF.add(lblWorkAccTitleSF, flxAccLstsSF);
            var flxExpenseSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "27%",
                "id": "flxExpenseSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "4%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExpenseSF.setDefaultUnit(kony.flex.DP);
            var lblExpenseTitleSF = new kony.ui.Label({
                "id": "lblExpenseTitleSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblLifestyleHeaderSF",
                "text": "Expense Report",
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
            var flxExpenseReportSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "75%",
                "id": "flxExpenseReportSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "9dp",
                "isModalContainer": false,
                "skin": "sknFlxExpenseSF",
                "top": "20%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxExpenseReportSF.setDefaultUnit(kony.flex.DP);
            var flxExp1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxExp1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExp1SF.setDefaultUnit(kony.flex.DP);
            var lblL1SF = new kony.ui.Label({
                "id": "lblL1SF",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblExpenseSF",
                "text": "Ongoing Business trip",
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
            var lblL2SF = new kony.ui.Label({
                "bottom": "15%",
                "id": "lblL2SF",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblWishesSF",
                "text": "€ 5.612",
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
            var lblR1SF = new kony.ui.Label({
                "id": "lblR1SF",
                "isVisible": true,
                "right": "4%",
                "skin": "sknLblExpenseSF",
                "text": "Report Ready",
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
            var lblR2SF = new kony.ui.Label({
                "bottom": "15%",
                "id": "lblR2SF",
                "isVisible": true,
                "right": "4%",
                "skin": "sknLblExpenseSF",
                "text": "Oct 2021 - Dec 2021",
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
            flxExp1SF.add(lblL1SF, lblL2SF, lblR1SF, lblR2SF);
            var flxSubmitSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40%",
                "id": "flxSubmitSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "sknFlxSubmitBg",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSubmitSF.setDefaultUnit(kony.flex.DP);
            var lblSubmitSF = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "50%",
                "id": "lblSubmitSF",
                "isVisible": true,
                "skin": "CopydefLabel0g19bd724b9b248",
                "text": "SUBMIT FOR REIMBURSEMENT",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxRightArrowSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRightArrowSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxRightArrowSF.setDefaultUnit(kony.flex.DP);
            var imgRightArrowSF = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgRightArrowSF",
                "isVisible": true,
                "skin": "slImage",
                "src": "rightarrow_normal.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRightArrowSF.add(imgRightArrowSF);
            flxSubmitSF.add(lblSubmitSF, flxRightArrowSF);
            flxExpenseReportSF.add(flxExp1SF, flxSubmitSF);
            flxExpenseSF.add(lblExpenseTitleSF, flxExpenseReportSF);
            var flxTransSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "48%",
                "id": "flxTransSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransSF.setDefaultUnit(kony.flex.DP);
            var flxTransTitleSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "14%",
                "id": "flxTransTitleSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransTitleSF.setDefaultUnit(kony.flex.DP);
            var lblMonNameSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMonNameSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblNormalHeaderSF",
                "text": "Oct 2021",
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
            var lblAddExpSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAddExpSF",
                "isVisible": true,
                "right": "6%",
                "skin": "sknLblAddExpSF",
                "text": "Add Expense",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTransTitleSF.add(lblMonNameSF, lblAddExpSF);
            var segTransSF = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "imgTransSF": "vehicle_fusion.png",
                    "lblTransAmtSF": "-€ 34.50",
                    "lblTransDescSF": "Oct 1, 2021",
                    "lblTransTitleSF": "Taxi"
                }, {
                    "imgTransSF": "food_work.png",
                    "lblTransAmtSF": "-€ 12.00",
                    "lblTransDescSF": "Oct 2, 2021",
                    "lblTransTitleSF": "Food"
                }, {
                    "imgTransSF": "internet_fusion.png",
                    "lblTransAmtSF": "-€ 80.00",
                    "lblTransDescSF": "Oct 4, 2021",
                    "lblTransTitleSF": "Roaming Recharge"
                }],
                "groupCells": false,
                "height": "74%",
                "id": "segTransSF",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegTransSF",
                "rowSkin": "sknSegTransSF",
                "rowTemplate": "flxWorkTransSF",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxImgSF": "flxImgSF",
                    "flxMainSF": "flxMainSF",
                    "flxParentSF": "flxParentSF",
                    "flxTransTitleSF": "flxTransTitleSF",
                    "flxWorkTransSF": "flxWorkTransSF",
                    "imgTransSF": "imgTransSF",
                    "lblTransAmtSF": "lblTransAmtSF",
                    "lblTransDescSF": "lblTransDescSF",
                    "lblTransTitleSF": "lblTransTitleSF"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblViewTransSF = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblViewTransSF",
                "isVisible": true,
                "skin": "sknLblAddExpSF",
                "text": "View All Transactions",
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
            flxTransSF.add(flxTransTitleSF, segTransSF, lblViewTransSF);
            var flxTripsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30%",
                "id": "flxTripsSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTripsSF.setDefaultUnit(kony.flex.DP);
            var flxTripsTitleSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18%",
                "id": "flxTripsTitleSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTripsTitleSF.setDefaultUnit(kony.flex.DP);
            var lblUpcomingSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblUpcomingSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblLifestyleHeaderSF",
                "text": "Upcoming Trips",
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
            var lblAddTripSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAddTripSF",
                "isVisible": true,
                "right": "6%",
                "skin": "sknLblAddExpSF",
                "text": "Add Trip",
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
            flxTripsTitleSF.add(lblUpcomingSF, lblAddTripSF);
            var flxTripDtlsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxTripDtlsSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxTripsBgSF",
                "top": "2%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxTripDtlsSF.setDefaultUnit(kony.flex.DP);
            var flxV1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "28%",
                "id": "flxV1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxV1SF.setDefaultUnit(kony.flex.DP);
            var lblDubaiSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDubaiSF",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblWishesSF",
                "text": "Dubai",
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
            var flxFlightSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxFlightSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "12%",
                "zIndex": 1
            }, {}, {});
            flxFlightSF.setDefaultUnit(kony.flex.DP);
            var imgFlightSF = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "27dp",
                "id": "imgFlightSF",
                "isVisible": true,
                "left": "1dp",
                "skin": "slImage",
                "src": "material_flight.png",
                "width": "27dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFlightSF.add(imgFlightSF);
            var lblSwizzSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSwizzSF",
                "isVisible": true,
                "right": "4%",
                "skin": "sknLblWishesSF",
                "text": "Switzerland",
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
            flxV1SF.add(lblDubaiSF, flxFlightSF, lblSwizzSF);
            var flxV2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40%",
                "id": "flxV2SF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxV2SF.setDefaultUnit(kony.flex.DP);
            var flxH1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxH1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxH1SF.setDefaultUnit(kony.flex.DP);
            var lblFlighNoSF = new kony.ui.Label({
                "id": "lblFlighNoSF",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblDescSF",
                "text": "Flight no.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFlightNoValSF = new kony.ui.Label({
                "bottom": "18%",
                "id": "lblFlightNoValSF",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblDescSF",
                "text": "BKN7",
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
            flxH1SF.add(lblFlighNoSF, lblFlightNoValSF);
            var flxH2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxH2SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxH2SF.setDefaultUnit(kony.flex.DP);
            var lblSeatSF = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSeatSF",
                "isVisible": true,
                "skin": "sknLblDescSF",
                "text": "Seat",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSeatValSF = new kony.ui.Label({
                "bottom": "18%",
                "centerX": "50%",
                "id": "lblSeatValSF",
                "isVisible": true,
                "skin": "sknLblDescSF",
                "text": "21B",
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
            flxH2SF.add(lblSeatSF, lblSeatValSF);
            var btnCheckInSF = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnCheckinSF",
                "height": "75%",
                "id": "btnCheckInSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknBtnCheckinSF",
                "text": "CHECK-IN",
                "width": "26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxV2SF.add(flxH1SF, flxH2SF, btnCheckInSF);
            var flxV3SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30%",
                "id": "flxV3SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxV3SF.setDefaultUnit(kony.flex.DP);
            var lblDurationSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDurationSF",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblDescSF",
                "text": "Duration: 7hrs 30mins",
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
            var lblTripDateSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTripDateSF",
                "isVisible": true,
                "right": "4%",
                "skin": "sknLblDescSF",
                "text": "10th Oct 2021",
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
            flxV3SF.add(lblDurationSF, lblTripDateSF);
            flxTripDtlsSF.add(flxV1SF, flxV2SF, flxV3SF);
            flxTripsSF.add(flxTripsTitleSF, flxTripDtlsSF);
            var flxRewardPointsSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40%",
                "id": "flxRewardPointsSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRewardPointsSF.setDefaultUnit(kony.flex.DP);
            var flxRewardHeaderSF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flxRewardHeaderSF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRewardHeaderSF.setDefaultUnit(kony.flex.DP);
            var lblRewardsTitleSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRewardsTitleSF",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblLifestyleHeaderSF",
                "text": "Reward Points",
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
            var lblTrackSF = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTrackSF",
                "isVisible": true,
                "right": "6%",
                "skin": "sknLblAddExpSF",
                "text": "Track New",
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
            flxRewardHeaderSF.add(lblRewardsTitleSF, lblTrackSF);
            var flxRewardsDtlsSF = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "80%",
                "horizontalScrollIndicator": false,
                "id": "flxRewardsDtlsSF",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxRewardsDtlsSF.setDefaultUnit(kony.flex.DP);
            var flxRH1SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "95%",
                "id": "flxRH1SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxTripsBgSF",
                "width": "38%",
                "zIndex": 1
            }, {}, {});
            flxRH1SF.setDefaultUnit(kony.flex.DP);
            var cardsSF2 = new com.SuperFinance.cardsSF({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "cardsSF2",
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
                    "imgWLogoSF": {
                        "src": "vantage_fusion.png"
                    },
                    "lblWCrncySF": {
                        "text": "9000 Points"
                    },
                    "lblWDescSF": {
                        "text": "Recognition points"
                    },
                    "lblWTitleSF": {
                        "text": "Vantage Circle"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRH1SF.add(cardsSF2);
            var flxRH2SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "95%",
                "id": "flxRH2SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "7%",
                "isModalContainer": false,
                "skin": "sknFlxAccBg1SF",
                "width": "38%",
                "zIndex": 1
            }, {}, {});
            flxRH2SF.setDefaultUnit(kony.flex.DP);
            var cardsSF3 = new com.SuperFinance.cardsSF({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "cardsSF3",
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
                    "imgWLogoSF": {
                        "src": "marriott_fusion.png"
                    },
                    "lblWCrncySF": {
                        "text": "8 Nights"
                    },
                    "lblWDescSF": {
                        "text": "Free Nights"
                    },
                    "lblWTitleSF": {
                        "text": "Bonvoy - Gold"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRH2SF.add(cardsSF3);
            var flxRH3SF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "95%",
                "id": "flxRH3SF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "7%",
                "isModalContainer": false,
                "skin": "sknFlxAcc2BgSF",
                "width": "38%",
                "zIndex": 1
            }, {}, {});
            flxRH3SF.setDefaultUnit(kony.flex.DP);
            var cardsSF4 = new com.SuperFinance.cardsSF({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "cardsSF4",
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
                    "imgWLogoSF": {
                        "src": "emirates.png"
                    },
                    "lblWCrncySF": {
                        "text": "7056"
                    },
                    "lblWDescSF": {
                        "text": "Air mile points"
                    },
                    "lblWTitleSF": {
                        "text": "Emirates"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRH3SF.add(cardsSF4);
            flxRewardsDtlsSF.add(flxRH1SF, flxRH2SF, flxRH3SF);
            flxRewardPointsSF.add(flxRewardHeaderSF, flxRewardsDtlsSF);
            flxScrollWorkMain.add(flxWorkMainSF, flxWorkAccLstSF, flxExpenseSF, flxTransSF, flxTripsSF, flxRewardPointsSF);
            flxParentWorkSF.add(flxHeaderTammySF, flxScrollWorkMain);
            this.add(flxParentWorkSF);
        };
        return [{
            "addWidgets": addWidgetsfrmWorkSF,
            "enabledForIdleTimeout": false,
            "id": "frmWorkSF",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_afde5dcd684d466883857c18de6bdfa1(eventobject);
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