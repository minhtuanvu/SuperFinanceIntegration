define("ManageCardsModule/frmCardManagePay", function() {
    return function(controller) {
        function addWidgetsfrmCardManagePay() {
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
                    "btnRight": {
                        "isVisible": false,
                        "text": "Clear"
                    },
                    "flxSearch": {
                        "bottom": "viz.val_cleared",
                        "isVisible": false,
                        "right": "292dp",
                        "top": "0dp"
                    },
                    "imgBack": {
                        "centerY": "51%",
                        "height": "25dp",
                        "src": "chevronwhiteleft.png",
                        "width": "25dp"
                    },
                    "imgSearch": {
                        "centerX": "50%",
                        "centerY": "50%",
                        "height": "30dp",
                        "isVisible": true,
                        "minHeight": "viz.val_cleared",
                        "src": "personalaccount.png",
                        "width": "30dp"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "left": "30%",
                        "text": "Infinity Credit Card",
                        "width": kony.flex.USE_PREFFERED_SIZE
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
                "bottom": "0dp",
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
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
                "height": "30%",
                "id": "flxCardsContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "ICSknFlxffffff",
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
                "height": "78%",
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
                "src": "atmcardblack.png",
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
            var flxAvailableBal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "flxAvailableBal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxAvailableBal.setDefaultUnit(kony.flex.DP);
            var lblText = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblText",
                "isVisible": true,
                "left": "10%",
                "skin": "skn000000SSPSemiBold24PX",
                "text": "Add this card to Apple Pay",
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
            var imgTick = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgTick",
                "isVisible": false,
                "left": "10dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "19dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAvailableBal.add(lblText, imgTick);
            var flxCustomerCare = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25%",
                "id": "flxCustomerCare",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxBgf9f9f9Rounded15pxTab",
                "top": "0dp",
                "width": "90%",
                "zIndex": 100
            }, {}, {});
            flxCustomerCare.setDefaultUnit(kony.flex.DP);
            var lblMsg = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblMsg",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl424242SSP32pxBold",
                "text": "Using Apple Pay with your iPhone or Apple Watch is qick and secure. It's a safer way to pay that helps you avoid touching buttons or exchanging cash.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRichTxt = new kony.ui.RichText({
                "bottom": "20dp",
                "id": "lblRichTxt",
                "isVisible": false,
                "left": "5%",
                "onClick": controller.AS_RichText_gb4907507fea4d1f90ab1b6a6ac4489f,
                "right": 0,
                "skin": "sknRtx424242SSP26px",
                "text": "Using Apple Pay with your iPhone or Apple Watch is qick and secure. It's safer way to pay that helps ypu avoid touching buttons or exchanging cash.",
                "top": "20dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCardMsg = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblCardMsg",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP32pxBold",
                "text": "Using Apple Pay with your iPhone or Apple Watch is qick and secure. It's a safer way to pay that helps you avoid touching buttons or exchanging cash.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCustomerCare.add(lblMsg, lblRichTxt, lblCardMsg);
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var flxbtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxbtn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "ICSknFlxffffff",
                "top": "55%",
                "width": "90%",
                "zIndex": 10
            }, {}, {});
            flxbtn.setDefaultUnit(kony.flex.DP);
            var btnConfirm = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnConfirm",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn003e75",
                "text": "Add To Apple Wallet",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblWallet = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWallet",
                "isVisible": false,
                "left": "128dp",
                "skin": "ICSknLblFFFFFF13PX",
                "text": "Add to Apple Wallet",
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
            var imgWallet = new kony.ui.Image2({
                "height": "100%",
                "id": "imgWallet",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "add_to_wallet.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxbtn.add(btnConfirm, lblWallet, imgWallet);
            flxButton.add(flxbtn);
            flxMainContainer.add(flxCardsContainer, flxAvailableBal, flxCustomerCare, flxButton);
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
                "isVisible": false,
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
            "addWidgets": addWidgetsfrmCardManagePay,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmCardManagePay",
            "init": controller.AS_Form_f1748fffb9db4042a270d4f2128083a3,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmTopBlue",
            "title": "Infinity Credit Card"
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