define("ManageCardsModule/frmCardManageHome", function() {
    return function(controller) {
        function addWidgetsfrmCardManageHome() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
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
                    "flxSearch": {
                        "bottom": "viz.val_cleared",
                        "right": "10dp"
                    },
                    "imgBack": {
                        "src": "hamburger.png"
                    },
                    "imgSearch": {
                        "centerX": "50%",
                        "centerY": "50%",
                        "minHeight": "viz.val_cleared",
                        "src": "info.png"
                    },
                    "lblLocateUs": {
                        "text": "Axis Bank Visa"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxHeaderUsers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeaderUsers",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderUsers.setDefaultUnit(kony.flex.DP);
            var customCardHeader = new com.kmb.comman.customCardHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customCardHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgIcon": {
                        "src": "personalaccount.png"
                    },
                    "imgSearch": {
                        "src": "info.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderUsers.add(customCardHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": false,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "bounces": false,
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
            var flxCardsContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "170dp",
                "id": "flxCardsContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0%",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxCardsContainer.setDefaultUnit(kony.flex.DP);
            var flxCardList = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bounces": true,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "enableScrolling": true,
                "height": "88%",
                "horizontalScrollIndicator": false,
                "id": "flxCardList",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "pagingEnabled": true,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "verticalScrollIndicator": true,
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxCardList.setDefaultUnit(kony.flex.DP);
            var flxCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCard.setDefaultUnit(kony.flex.DP);
            var imgCard = new kony.ui.Image2({
                "height": "100%",
                "id": "imgCard",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "atmcardgold.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCardNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "60%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxCardNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxCardNumber.setDefaultUnit(kony.flex.DP);
            var flxCardNo1Part = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCardNo1Part",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxCardNo1Part.setDefaultUnit(kony.flex.DP);
            var lblCardNoMasked1 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCardNoMasked1",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop50",
                "text": "XXXX",
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
            flxCardNo1Part.add(lblCardNoMasked1);
            var flxCardNoPart2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCardNoPart2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxCardNoPart2.setDefaultUnit(kony.flex.DP);
            var lblCardNoMasked2 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCardNoMasked2",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop50",
                "text": "XXXX",
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
            flxCardNoPart2.add(lblCardNoMasked2);
            var flxCardNoPart3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCardNoPart3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxCardNoPart3.setDefaultUnit(kony.flex.DP);
            var blCardNoMasked3 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "blCardNoMasked3",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop50",
                "text": "XXXX",
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
            flxCardNoPart3.add(blCardNoMasked3);
            var flxCardNoPart4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCardNoPart4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxCardNoPart4.setDefaultUnit(kony.flex.DP);
            var lblCardNoLastDigits = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCardNoLastDigits",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop100",
                "text": "XXXX",
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
            flxCardNoPart4.add(lblCardNoLastDigits);
            flxCardNumber.add(flxCardNo1Part, flxCardNoPart2, flxCardNoPart3, flxCardNoPart4);
            flxCard.add(imgCard, flxCardNumber);
            flxCardList.add(flxCard);
            flxCardsContainer.add(flxCardList);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0%",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxAvailableBal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75dp",
                "id": "flxAvailableBal",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxAvailableBal.setDefaultUnit(kony.flex.DP);
            var lblAvailBal = new kony.ui.Label({
                "id": "lblAvailBal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AvailableBalance"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAvailBalValue = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblAvailBalValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl0a78d1SSP42px",
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
            var lblGiftPoints = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblGiftPoints",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "500 pts",
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
            var imgGift = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgGift",
                "isVisible": false,
                "right": "32dp",
                "skin": "slImage",
                "src": "offers.png",
                "top": "20dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAvailableBal.add(lblAvailBal, lblAvailBalValue, lblGiftPoints, imgGift);
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0%",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var flxCardsHomeTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCardsHomeTabs",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxCardsHomeTabs.setDefaultUnit(kony.flex.DP);
            var flxMainTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxMainTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainTabs.setDefaultUnit(kony.flex.DP);
            var flxTabsWrap = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "32dp",
                "id": "flxTabsWrap",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "84%",
                "zIndex": 1
            }, {}, {});
            flxTabsWrap.setDefaultUnit(kony.flex.DP);
            var flxTabsBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "32dp",
                "id": "flxTabsBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTabBg767680",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTabsBg.setDefaultUnit(kony.flex.DP);
            var btnManageTab = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnFFFFFFBdr10px",
                "height": "27dp",
                "id": "btnManageTab",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknBtnFFFFFFSSPSBoldBdr8Px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.Manage"),
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnTransactionTab = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknbtn000000SSPSemiBold15px",
                "height": "27dp",
                "id": "btnTransactionTab",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknbtn000000SSPSemiBold15px",
                "text": kony.i18n.getLocalizedString("kony.mb.PFMCategorisedTransactions.Title"),
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTabsBg.add(btnManageTab, btnTransactionTab);
            flxTabsWrap.add(flxTabsBg);
            flxMainTabs.add(flxTabsWrap);
            var flxCardBalNCreditStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75dp",
                "id": "flxCardBalNCreditStatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCardBalNCreditStatus.setDefaultUnit(kony.flex.DP);
            var flxBalNCreditWarp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "75dp",
                "id": "flxBalNCreditWarp",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxBalNCreditWarp.setDefaultUnit(kony.flex.DP);
            var flxCurntBalDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxCurntBalDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "38%",
                "zIndex": 1
            }, {}, {});
            flxCurntBalDetails.setDefaultUnit(kony.flex.DP);
            var lblCrntBalText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCrntBalText",
                "isVisible": true,
                "skin": "sknLbl424242SSP22px26",
                "text": "Current Balance",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBalanceAmount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBalanceAmount",
                "isVisible": true,
                "skin": "skinLblSSPRegular4176A422px",
                "text": "€0,00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCurntBalDetails.add(lblCrntBalText, lblBalanceAmount);
            var flxRewardPoints = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxRewardPoints",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "37.6%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "24.50%",
                "zIndex": 1
            }, {}, {});
            flxRewardPoints.setDefaultUnit(kony.flex.DP);
            var imgReward = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25dp",
                "id": "imgReward",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "offers.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 6
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblRewardPoints = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRewardPoints",
                "isVisible": true,
                "skin": "sknLbl424242SSP22px26",
                "text": "50pts",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRewardPoints.add(imgReward, lblRewardPoints);
            var flxAvialCredits = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxAvialCredits",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "width": "38%",
                "zIndex": 1
            }, {}, {});
            flxAvialCredits.setDefaultUnit(kony.flex.DP);
            var lblAvialCreditText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAvialCreditText",
                "isVisible": true,
                "skin": "sknLbl424242SSP22px26",
                "text": "Available Credit",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCreditAmount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCreditAmount",
                "isVisible": true,
                "skin": "skinLblSSPRegular24AC2522px",
                "text": "€0,00 ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPaymentDueText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPaymentDueText",
                "isVisible": true,
                "skin": "sknLbl424242SSPLight20px",
                "text": "Payment due 12 June",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAvialCredits.add(lblAvialCreditText, lblCreditAmount, lblPaymentDueText);
            flxBalNCreditWarp.add(flxCurntBalDetails, flxRewardPoints, flxAvialCredits);
            flxCardBalNCreditStatus.add(flxBalNCreditWarp);
            var flxBalNCreditGraphic = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxBalNCreditGraphic",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalNCreditGraphic.setDefaultUnit(kony.flex.DP);
            var flxCredLimitBarNTxt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "31%",
                "clipBounds": true,
                "height": "12dp",
                "id": "flxCredLimitBarNTxt",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "30dp",
                "skin": "slFbox",
                "width": "58%",
                "zIndex": 1
            }, {}, {});
            flxCredLimitBarNTxt.setDefaultUnit(kony.flex.DP);
            var flxCreditBarGraphic = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12dp",
                "id": "flxCreditBarGraphic",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBg24AC25Bdr20px",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCreditBarGraphic.setDefaultUnit(kony.flex.DP);
            flxCreditBarGraphic.add();
            flxCredLimitBarNTxt.add(flxCreditBarGraphic);
            var flxCurntBalBarNTxt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "31%",
                "clipBounds": true,
                "height": "12dp",
                "id": "flxCurntBalBarNTxt",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "32dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "18%",
                "zIndex": 1
            }, {}, {});
            flxCurntBalBarNTxt.setDefaultUnit(kony.flex.DP);
            var flxBalanceBarGraphic = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12dp",
                "id": "flxBalanceBarGraphic",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBg4176A4Bdr20px",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalanceBarGraphic.setDefaultUnit(kony.flex.DP);
            flxBalanceBarGraphic.add();
            flxCurntBalBarNTxt.add(flxBalanceBarGraphic);
            var lblBalGraphicTxt = new kony.ui.Label({
                "id": "lblBalGraphicTxt",
                "isVisible": true,
                "left": "37dp",
                "skin": "skinLblSSPRegular4176A412px",
                "text": "€0,00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "22dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCreditLimitTxt = new kony.ui.Label({
                "id": "lblCreditLimitTxt",
                "isVisible": true,
                "right": "35dp",
                "skin": "skinLblSSPRegular45454512px",
                "text": "Credit Limit: € 0,00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "22dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBalNCreditGraphic.add(flxCredLimitBarNTxt, flxCurntBalBarNTxt, lblBalGraphicTxt, lblCreditLimitTxt);
            var flxAboutExpire = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "61dp",
                "id": "flxAboutExpire",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAboutExpire.setDefaultUnit(kony.flex.DP);
            var flxSeperatorExpire = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorExpire",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperatorExpire.setDefaultUnit(kony.flex.DP);
            flxSeperatorExpire.add();
            var flxSub = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSub",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSub.setDefaultUnit(kony.flex.DP);
            var imgInfo = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "imgInfo",
                "isVisible": true,
                "left": "26dp",
                "skin": "slImage",
                "src": "infoappbar.png",
                "width": "30dp",
                "zIndex": 6
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnAboutExpire = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnSSPR4176a426px",
                "id": "btnAboutExpire",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknBtnSSPR4176a426px",
                "text": "This card is about expire. If you received a replacement card, tap here to activate it.",
                "width": "68%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSub.add(imgInfo, btnAboutExpire);
            flxAboutExpire.add(flxSeperatorExpire, flxSub);
            flxCardsHomeTabs.add(flxMainTabs, flxCardBalNCreditStatus, flxBalNCreditGraphic, flxAboutExpire);
            var flxOptionsContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "60dp",
                "clipBounds": true,
                "id": "flxOptionsContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOptionsContainer.setDefaultUnit(kony.flex.DP);
            var flxTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "28dp",
                "id": "flxTabs",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTabBg767680",
                "top": "30dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxTabs.setDefaultUnit(kony.flex.DP);
            var btnManage = new kony.ui.Button({
                "focusSkin": "sknBtnFFFFFFBdr10px",
                "height": "26dp",
                "id": "btnManage",
                "isVisible": true,
                "right": 0,
                "skin": "sknBtnFFFFFFBdr10px",
                "text": "Manage",
                "top": "0dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnTransaction = new kony.ui.Button({
                "centerX": "24%",
                "centerY": "50%",
                "focusSkin": "sknbtn000000SSPSemiBold15px",
                "id": "btnTransaction",
                "isVisible": true,
                "skin": "sknbtn000000SSPSemiBold15px",
                "text": "Transactions",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTabs.add(btnManage, btnTransaction);
            var flxscrmain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxscrmain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxscrmain.setDefaultUnit(kony.flex.DP);
            var flxActiveOrInactive = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "49dp",
                "id": "flxActiveOrInactive",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxActiveOrInactive.setDefaultUnit(kony.flex.DP);
            var lblActiveOrInactive = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblActiveOrInactive",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.cardActive"),
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
            var imgActiveOrInactive = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgActiveOrInactive",
                "isVisible": false,
                "right": "-500dp",
                "skin": "slImage",
                "src": "active.png",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var switchActiveorInactive = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchActiveorInactive",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxActiveOrInactive.add(lblActiveOrInactive, imgActiveOrInactive, switchActiveorInactive);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxSetPurchaseLimit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "54dp",
                "id": "flxSetPurchaseLimit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSetPurchaseLimit.setDefaultUnit(kony.flex.DP);
            var lblSetPurchaseLimit = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSetPurchaseLimit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.i18n.cards.setPurchaseLimit"),
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
            var flxSeparator8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeparator8.setDefaultUnit(kony.flex.DP);
            flxSeparator8.add();
            flxSetPurchaseLimit.add(lblSetPurchaseLimit, flxSeparator8);
            var flxSetPurchaseLimitSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSetPurchaseLimitSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSetPurchaseLimitSeparator.setDefaultUnit(kony.flex.DP);
            flxSetPurchaseLimitSeparator.add();
            var flxSetATMWithdrawalLimit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "54dp",
                "id": "flxSetATMWithdrawalLimit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSetATMWithdrawalLimit.setDefaultUnit(kony.flex.DP);
            var lblSetATMWithdrawalLimit = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSetATMWithdrawalLimit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.i18n.cards.setATMWithdrawalLimit"),
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
            var flxSeparator9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeparator9.setDefaultUnit(kony.flex.DP);
            flxSeparator9.add();
            flxSetATMWithdrawalLimit.add(lblSetATMWithdrawalLimit, flxSeparator9);
            var flxSetATMWithdrawalLimitSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSetATMWithdrawalLimitSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSetATMWithdrawalLimitSeparator.setDefaultUnit(kony.flex.DP);
            flxSetATMWithdrawalLimitSeparator.add();
            var flxChangePin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "49dp",
                "id": "flxChangePin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxChangePin.setDefaultUnit(kony.flex.DP);
            var lblChangePin = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChangePin",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.changePIN"),
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
            flxChangePin.add(lblChangePin);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var flxReplaceCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "49dp",
                "id": "flxReplaceCard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxReplaceCard.setDefaultUnit(kony.flex.DP);
            var lblReplaceCard = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReplaceCard",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.replaceCard"),
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
            flxReplaceCard.add(lblReplaceCard);
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            var flxReportStolenOrLost = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "49dp",
                "id": "flxReportStolenOrLost",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxReportStolenOrLost.setDefaultUnit(kony.flex.DP);
            var lblReport = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReport",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.report"),
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
            flxReportStolenOrLost.add(lblReport);
            var flxSeperator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator5.setDefaultUnit(kony.flex.DP);
            flxSeperator5.add();
            var flxCancelCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "54dp",
                "id": "flxCancelCard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxCancelCard.setDefaultUnit(kony.flex.DP);
            var lblCancelCard = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCancelCard",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.cancelCard"),
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
            var flxSeperator6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator6",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator6.setDefaultUnit(kony.flex.DP);
            flxSeperator6.add();
            flxCancelCard.add(lblCancelCard, flxSeperator6);
            var flxCancelCardSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxCancelCardSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxCancelCardSeparator.setDefaultUnit(kony.flex.DP);
            flxCancelCardSeparator.add();
            var flxApplePay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "49dp",
                "id": "flxApplePay",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxApplePay.setDefaultUnit(kony.flex.DP);
            var imgApplePay = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgApplePay",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "apple_pay.png",
                "top": "1dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblApplePay = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblApplePay",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Apple Pay",
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
            flxApplePay.add(imgApplePay, lblApplePay);
            var flxSeperatorPay4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorPay4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperatorPay4.setDefaultUnit(kony.flex.DP);
            flxSeperatorPay4.add();
            var flxSamsungPay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "49dp",
                "id": "flxSamsungPay",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSamsungPay.setDefaultUnit(kony.flex.DP);
            var imgSamsungPay = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgSamsungPay",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "samsung_pay.png",
                "top": "1dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSamsungPay = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSamsungPay",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Samsung Pay",
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
            flxSamsungPay.add(imgSamsungPay, lblSamsungPay);
            var flxSeperatorPay5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorPay5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperatorPay5.setDefaultUnit(kony.flex.DP);
            flxSeperatorPay5.add();
            var flxGooglePay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "49dp",
                "id": "flxGooglePay",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxGooglePay.setDefaultUnit(kony.flex.DP);
            var imgGooglePay = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgGooglePay",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "google_pay.png",
                "top": "1dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblGooglePay = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblGooglePay",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Google Pay",
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
            flxGooglePay.add(imgGooglePay, lblGooglePay);
            var flxSeperatorPay6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorPay6",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperatorPay6.setDefaultUnit(kony.flex.DP);
            flxSeperatorPay6.add();
            var flxViewStatements = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "54dp",
                "id": "flxViewStatements",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxViewStatements.setDefaultUnit(kony.flex.DP);
            var lblViewStatements = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblViewStatements",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.i18n.cards.viewStatements"),
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
            var CopyflxSeperator0id1636bf70744d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperator0id1636bf70744d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            CopyflxSeperator0id1636bf70744d.setDefaultUnit(kony.flex.DP);
            CopyflxSeperator0id1636bf70744d.add();
            flxViewStatements.add(lblViewStatements, CopyflxSeperator0id1636bf70744d);
            var flxViewStatementsSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxViewStatementsSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxViewStatementsSeperator.setDefaultUnit(kony.flex.DP);
            flxViewStatementsSeperator.add();
            var flxCardDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "54dp",
                "id": "flxCardDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxCardDetails.setDefaultUnit(kony.flex.DP);
            var CopylblViewStatements0f7dc9561317e41 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblViewStatements0f7dc9561317e41",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Card Details",
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
            var CopyflxSeperator0idea46036ead49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperator0idea46036ead49",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            CopyflxSeperator0idea46036ead49.setDefaultUnit(kony.flex.DP);
            CopyflxSeperator0idea46036ead49.add();
            flxCardDetails.add(CopylblViewStatements0f7dc9561317e41, CopyflxSeperator0idea46036ead49);
            flxscrmain.add(flxActiveOrInactive, flxSeperator2, flxSetPurchaseLimit, flxSetPurchaseLimitSeparator, flxSetATMWithdrawalLimit, flxSetATMWithdrawalLimitSeparator, flxChangePin, flxSeperator3, flxReplaceCard, flxSeperator4, flxReportStolenOrLost, flxSeperator5, flxCancelCard, flxCancelCardSeparator, flxApplePay, flxSeperatorPay4, flxSamsungPay, flxSeperatorPay5, flxGooglePay, flxSeperatorPay6, flxViewStatements, flxViewStatementsSeperator, flxCardDetails);
            flxOptionsContainer.add(flxTabs, flxscrmain);
            var flxCustomerCare = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCustomerCare",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxCustomerCare.setDefaultUnit(kony.flex.DP);
            var lblMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblMsg",
                "isVisible": true,
                "left": "116dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.cancelMessage"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxCallCusCare = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxCallCusCare",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxCallCusCare.setDefaultUnit(kony.flex.DP);
            var btnCallCustomerCare = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknBtn0095e428px",
                "height": "100%",
                "id": "btnCallCustomerCare",
                "isVisible": true,
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.callCustomerCare"),
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCallCusCare.add(btnCallCustomerCare);
            flxCustomerCare.add(lblMsg, flxCallCusCare);
            var flxActivateCardMsg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxActivateCardMsg",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActivateCardMsg.setDefaultUnit(kony.flex.DP);
            var flxActivateCardText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxActivateCardText",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "100dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxActivateCardText.setDefaultUnit(kony.flex.DP);
            var imgCardActivate = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgCardActivate",
                "isVisible": true,
                "skin": "slImage",
                "src": "message.png",
                "top": "3dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCardActivateText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCardActivateText",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP22px26",
                "text": "You have been issued a New Card. If you have already received you card in mail. You may activate it through the app.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "62dp",
                "width": "70%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxActivateCardText.add(imgCardActivate, lblCardActivateText);
            var flxActivateBtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxActivateBtn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": 310,
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxActivateBtn.setDefaultUnit(kony.flex.DP);
            var btnActivateCard = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnActivateCard",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Activate Card",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxActivateBtn.add(btnActivateCard);
            flxActivateCardMsg.add(flxActivateCardText, flxActivateBtn);
            var flxTransactionsList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransactionsList",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxTransactionsList.setDefaultUnit(kony.flex.DP);
            var segTransactionsScreen = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "imgUpArrow": "arrowup.png",
                            "lblHeader": "Pending Transactions"
                        },
                        [{
                            "lblDate": "",
                            "lblTitle": "",
                            "lblTransactionAmount": ""
                        }]
                    ],
                    [{
                            "imgUpArrow": "arrowup.png",
                            "lblHeader": "Recent Transactions"
                        },
                        [{
                            "lblDate": "",
                            "lblTitle": "",
                            "lblTransactionAmount": ""
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segTransactionsScreen",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTransactionsList",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransactionListHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxMain": "flxMain",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransactionListHeader": "flxTransactionListHeader",
                    "flxTransactionsList": "flxTransactionsList",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgUpArrow": "imgUpArrow",
                    "lblDate": "lblDate",
                    "lblHeader": "lblHeader",
                    "lblTitle": "lblTitle",
                    "lblTransactionAmount": "lblTransactionAmount"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTransactionsList.add(segTransactionsScreen);
            var flxNoTransactionsList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47%",
                "id": "flxNoTransactionsList",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxNoTransactionsList.setDefaultUnit(kony.flex.DP);
            var lblNoTransactions = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblNoTransactions",
                "isVisible": true,
                "skin": "sknlbla8a8a8aSSPR15px",
                "text": "You don’t have any transactions yet",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperatorNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperatorNo.setDefaultUnit(kony.flex.DP);
            flxSeperatorNo.add();
            flxNoTransactionsList.add(lblNoTransactions, flxSeperatorNo);
            flxMainContainer.add(flxCardsContainer, flxSeperator, flxAvailableBal, flxSeperator1, flxCardsHomeTabs, flxOptionsContainer, flxCustomerCare, flxActivateCardMsg, flxTransactionsList, flxNoTransactionsList);
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
                "overrides": {}
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
                "zIndex": 202
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
            var flxSeperatorFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperatorFooter.setDefaultUnit(kony.flex.DP);
            flxSeperatorFooter.add();
            flxFooter.add(customFooter, flxSeperatorFooter);
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
                "zIndex": 103
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
            var flxNoCards = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxNoCards",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0jc0279d6cf9b46",
                "top": "56dp",
                "width": "100%",
                "zIndex": 15
            }, {}, {});
            flxNoCards.setDefaultUnit(kony.flex.DP);
            var lblNoCards = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoCards",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cards.noCardsApply"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "100dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgCardError = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "imgCardError",
                "isVisible": true,
                "left": "174dp",
                "skin": "slImage",
                "src": "warninground.png",
                "top": "36dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnApplyCard = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknbtnBf003E75Border1pxFontFFFFFF",
                "height": "50dp",
                "id": "btnApplyCard",
                "isVisible": true,
                "left": "75dp",
                "skin": "sknbtnBf003E75Border1pxFontFFFFFF",
                "text": kony.i18n.getLocalizedString("kony.mb.cards.applyNow"),
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNoCards.add(lblNoCards, imgCardError, btnApplyCard);
            var flxManageTravelPlanButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxManageTravelPlanButton",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 102
            }, {}, {});
            flxManageTravelPlanButton.setDefaultUnit(kony.flex.DP);
            var btnManageTravelPlans = new kony.ui.Button({
                "bottom": "10dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnManageTravelPlans",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.ManageTravelPlans"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeperator8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator8",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSeperator8.setDefaultUnit(kony.flex.DP);
            flxSeperator8.add();
            flxManageTravelPlanButton.add(btnManageTravelPlans, flxSeperator8);
            var flxPopupApplyForCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupApplyForCard",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxPopupApplyForCard.setDefaultUnit(kony.flex.DP);
            var flxPopupContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "40dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxPopupContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "CopysknFlxPopupDocuments0ed331d51146444",
                "top": "70%",
                "width": "88%",
                "zIndex": 5
            }, {}, {});
            flxPopupContainer.setDefaultUnit(kony.flex.DP);
            var btnFilterCards = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnFilterCards",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "Filter Cards",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeperatorone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorone.setDefaultUnit(kony.flex.DP);
            flxSeperatorone.add();
            var btnApplyForCard = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnApplyForCard",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "Apply  for  a Card",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeperatortwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatortwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatortwo.setDefaultUnit(kony.flex.DP);
            flxSeperatortwo.add();
            flxPopupContainer.add(btnFilterCards, flxSeperatorone, btnApplyForCard, flxSeperatortwo);
            var CopyflxPopupContainer0a7fc4bb40a904d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "40dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "CopyflxPopupContainer0a7fc4bb40a904d",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "CopysknFlxPopupDocuments0ed331d51146444",
                "top": "85%",
                "width": "88%",
                "zIndex": 5
            }, {}, {});
            CopyflxPopupContainer0a7fc4bb40a904d.setDefaultUnit(kony.flex.DP);
            var btnCancelMngCards = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnCancelMngCards",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyflxSeperatorone0h0c0cb589ca442 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorone0h0c0cb589ca442",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorone0h0c0cb589ca442.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorone0h0c0cb589ca442.add();
            var CopyflxSeperatortwo0fa4e0e48082c4e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatortwo0fa4e0e48082c4e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatortwo0fa4e0e48082c4e.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatortwo0fa4e0e48082c4e.add();
            CopyflxPopupContainer0a7fc4bb40a904d.add(btnCancelMngCards, CopyflxSeperatorone0h0c0cb589ca442, CopyflxSeperatortwo0fa4e0e48082c4e);
            var flxDismiss = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "140dp",
                "clipBounds": true,
                "id": "flxDismiss",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDismiss.setDefaultUnit(kony.flex.DP);
            flxDismiss.add();
            flxPopupApplyForCard.add(flxPopupContainer, CopyflxPopupContainer0a7fc4bb40a904d, flxDismiss);
            this.add(flxHeader, flxHeaderUsers, flxMainContainer, flxPopup, flxFooter, flxHamburger, flxNoCards, flxManageTravelPlanButton, flxPopupApplyForCard);
        };
        return [{
            "addWidgets": addWidgetsfrmCardManageHome,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmCardManageHome",
            "init": controller.AS_Form_jb0467d0e2a4488cb39e5934f477fc9a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_i39294aa1ad845a8bcbf2b6b968932fa,
            "preShow": function(eventobject) {
                controller.AS_Form_b14bc3b2043c4291b012d3026854b60e(eventobject);
            },
            "skin": "sknFrmTopBlue",
            "title": "Axis Bank Visa"
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