define("AccountModule/frmAccountDetails", function() {
    return function(controller) {
        function addWidgetsfrmAccountDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
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
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "height": "25dp",
                        "src": "info.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "isVisible": true,
                        "text": "Family Checking Account"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "40dp",
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
                    "customSearchbox": {
                        "top": "0dp"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "93%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "275dp",
                "id": "flxContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxSearchMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSearchMain.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "18dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.accdetails.searchTransactions"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgAdvSearch = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgAdvSearch",
                "isVisible": true,
                "onTouchEnd": controller.AS_Image_id80c8d6a82c4875a56a150aed47720a,
                "right": "30dp",
                "skin": "slImage",
                "src": "advansecsearch.png",
                "top": "13dp",
                "width": "20dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAdvSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAdvSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a33bd484b8db4bdd9298c1fc0b1515f6,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 1000
            }, {}, {});
            flxAdvSearch.setDefaultUnit(kony.flex.DP);
            flxAdvSearch.add();
            flxSearchMain.add(imgSearchIcon, tbxSearch, imgAdvSearch, flxAdvSearch);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxSearch.add(flxSearchMain, flxSeperator);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "220dp",
                "id": "flxBalance",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalance.setDefaultUnit(kony.flex.DP);
            var lblAvailableBalance = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAvailableBalance",
                "isVisible": true,
                "skin": "sknLblb8dcffSSP32px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBalanceValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBalanceValue",
                "isVisible": true,
                "skin": "sknLblffffffSSP56px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "37dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxCurrentBal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrentBal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "85dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrentBal.setDefaultUnit(kony.flex.DP);
            var lblCurrentBalance = new kony.ui.Label({
                "centerX": "45%",
                "id": "lblCurrentBalance",
                "isVisible": true,
                "left": "28.00%",
                "skin": "sknLblb8dcffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.currBal"),
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
            var lblCurrBalValue = new kony.ui.Label({
                "id": "lblCurrBalValue",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblffffff22px",
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
            flxCurrentBal.add(lblCurrentBalance, lblCurrBalValue);
            var flxPendingDeposit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPendingDeposit",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "85dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPendingDeposit.setDefaultUnit(kony.flex.DP);
            var lblPendingDeposits = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPendingDeposits",
                "isVisible": true,
                "left": "28.00%",
                "skin": "sknLblb8dcffSSP26px",
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
            flxPendingDeposit.add(lblPendingDeposits);
            var flxPendingWithdrawals = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPendingWithdrawals",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "105dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPendingWithdrawals.setDefaultUnit(kony.flex.DP);
            var lblPendingWithdrawals = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPendingWithdrawals",
                "isVisible": true,
                "left": "28.00%",
                "skin": "sknLblb8dcffSSP26px",
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
            flxPendingWithdrawals.add(lblPendingWithdrawals);
            var lblTotalOverdue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalOverdue",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "text": "(Due on )",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "125dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDueDate = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDueDate",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "text": "(Due on )",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "105dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBank = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBank",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "125dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBank.setDefaultUnit(kony.flex.DP);
            var flxBankName = new kony.ui.Label({
                "id": "flxBankName",
                "isVisible": true,
                "left": "26%",
                "skin": "sknLblb8dcffSSP26px",
                "text": "Bank Name",
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
            var flxBankValue = new kony.ui.Label({
                "id": "flxBankValue",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblb8dcffSSP26px",
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
            flxBank.add(flxBankName, flxBankValue);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var btnWithdrawCash = new kony.ui.Button({
                "focusSkin": "sknbtn0a78d1SSPffffff100pr",
                "height": "100%",
                "id": "btnWithdrawCash",
                "isVisible": true,
                "left": "4%",
                "skin": "sknBtnffffffBorderffffffSSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.withdrawCash"),
                "top": "0dp",
                "width": "34%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnStatements = new kony.ui.Button({
                "focusSkin": "sknbtn0a78d1SSPffffff100pr",
                "height": "100%",
                "id": "btnStatements",
                "isVisible": true,
                "left": "4%",
                "onClick": controller.AS_Button_a31ed350c6104381981c3c5b53be3c48,
                "skin": "sknBtnffffffBorderffffffSSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.statements"),
                "top": "0dp",
                "width": "34%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnThreeDots = new kony.ui.Button({
                "focusSkin": "sknbtn0a78d1SSPffffff100pr",
                "height": "100%",
                "id": "btnThreeDots",
                "isVisible": true,
                "left": "4.00%",
                "skin": "sknBtnffffffBorderffffffSSP28px",
                "text": "• • •",
                "top": 0,
                "width": "13.80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOptions.add(btnWithdrawCash, btnStatements, btnThreeDots);
            flxBalance.add(lblAvailableBalance, lblBalanceValue, flxCurrentBal, flxPendingDeposit, flxPendingWithdrawals, lblTotalOverdue, lblDueDate, flxBank, flxOptions);
            flxContainer.add(flxSearch, flxShadow, flxBalance);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxSeperator2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueHeaderShadow",
                "top": "-20dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxAccountSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "388dp",
                "id": "flxAccountSummary",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxAccountSummary.setDefaultUnit(kony.flex.DP);
            var accountSummaryNative = new com.temenos.infinity.accountSummaryNative({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "accountSummaryNative",
                "isVisible": true,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "overrides": {
                    "accountSummaryNative": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
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
            accountSummaryNative.objectServiceName = "RBObjects";
            accountSummaryNative.accountTypeContextPath = "{$.c.accountType}";
            accountSummaryNative.backgroundSkin = "{\"skin\":\"slFbox\"}";
            accountSummaryNative.field1Label = "{\"default\":{\"default\":\"{i.kony.mb.accdetails.availBal}\",\"retail\":\"{i.kony.mb.accdetails.currBal}\"},\"Loan\":{\"default\":\"{i.kony.mb.accdetails.outstandingBal}\"},\"Mortgage\":{\"default\":\"{i.kony.mb.accdetails.outstandingBal}\"},\"Deposit\":{\"default\":\"{i.kony.mb.accdetails.currBal}\"},\"CreditCard\":{\"default\":\"{i.kony.mb.accdetails.currBal}\"}}";
            accountSummaryNative.amountFormat = "{\"locale\":\"\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-({CS}{D})\",\"fractionDigits\":\"2\"}";
            accountSummaryNative.nickName = "{$.S1.Accounts[0].nickName}";
            accountSummaryNative.dateFormat = "{\"format\" : \"m/d/Y\"}";
            accountSummaryNative.labelSkin = "{\"skin\": \"ICSknRichTextFFFFFFSSPL14px\" }";
            accountSummaryNative.objectName = "Accounts";
            accountSummaryNative.userTypeContextPath = "{$.c.userType}";
            accountSummaryNative.field1Value = "{\"default\":{\"default\":\"{$.S1.Accounts[0].availableBalance}\",\"retail\":\"{$.S1.Accounts[0].currentBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"},\"Loan\":{\"default\":\"{$.S1.Accounts[0].outstandingBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"},\"Mortgage\":{\"default\":\"{$.S1.Accounts[0].outstandingBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"},\"Deposit\":{\"default\":\"{$.S1.Accounts[0].currentBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"},\"CreditCard\":{\"default\":\"{$.S1.Accounts[0].currentBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"}}";
            accountSummaryNative.accountName = "{$.S1.Accounts[0].accountName}";
            accountSummaryNative.backendDateFormat = "{\"format\" : \"Y-m-d\"}";
            accountSummaryNative.highlightedLabelSkin = "{ \"skin\": \"sknLblb8dcffSSP32px\" }";
            accountSummaryNative.operationName = "getAccountDetails";
            accountSummaryNative.currencyCodeContextPath = "{$.c.currencyCode}";
            accountSummaryNative.field1Type = "{\"default\":\"BalanceAmount\"}";
            accountSummaryNative.noOfEllipsis = 3;
            accountSummaryNative.textSkin = "{\"skin\":\"ICSknLabelFFFFFFSSPSB14px\"}";
            accountSummaryNative.criteria = "{\"accountID\":\"{$.c.accountID}\"}";
            accountSummaryNative.field2Label = "{\"default\":{\"default\":\"{i.kony.mb.accdetails.pendingDeposits}:\"},\"Loan\":{\"default\":\"{i.kony.mb.Loans.TotalOverdue}:\"},\"Mortgage\":{\"default\":\"{i.kony.mb.Loans.TotalOverdue}:\"},\"CreditCard\":{\"default\":\"{i.kony.mb.accdetails.availCred}:\"}}";
            accountSummaryNative.noOfCharacters = 15;
            accountSummaryNative.highlightedValueSkin = "{\"skin\":\"sknLblffffffSSP56px\"}";
            accountSummaryNative.identifier = "S1";
            accountSummaryNative.field2Value = "{\"default\":{\"default\":\"{$.S1.Accounts[0].pendingDeposit}\"},\"Loan\":{\"default\":\"{$.S1.Accounts[0].paymentDue}\"},\"Mortgage\":{\"default\":\"{$.S1.Accounts[0].paymentDue}\"},\"CreditCard\":{\"default\":\"{$.S1.Accounts[0].availableCredit}\"}}";
            accountSummaryNative.businessAccount = "{$.S1.Accounts[0].isBusinessAccount}";
            accountSummaryNative.positiveAmountSkin = "{\"skin\":\"ICSknLabelFFFFFFSSPSB14px\"}";
            accountSummaryNative.field2Type = "{\"default\":\"Amount\"}";
            accountSummaryNative.negativeAmountSkin = "{\"skin\":\"ICSknLabelFFFFFFSSPSB14px\"}";
            accountSummaryNative.field3Label = "{\"default\":{\"default\":\"{i.kony.mb.accdetails.pendingWithdrawals}:\"},\"Loan\":{\"default\":\"{i.kony.mb.accounts.CurrentDue}:\"},\"Mortgage\":{\"default\":\"{i.kony.mb.accounts.CurrentDue}:\"},\"Deposit\":{\"default\":\"{i.kony.mb.accdetails.maturityDate}:\"},\"CreditCard\":{\"default\":\"{i.kony.mb.accdetails.currDueAmt}:\"}}";
            accountSummaryNative.dateSkin = "{\"skin\":\"ICSknLabelSSPSB014px\"}";
            accountSummaryNative.field3Value = "{\"default\":{\"default\":\"{$.S1.Accounts[0].pendingWithdrawal}\"},\"Loan\":{\"default\":\"{$.S1.Accounts[0].nextPaymentAmount}\"},\"Mortgage\":{\"default\":\"{$.S1.Accounts[0].nextPaymentAmount}\"},\"Deposit\":{\"default\":\"{$.S1.Accounts[0].maturityDate}\"},\"CreditCard\":{\"default\":\"{$.S1.Accounts[0].currentAmountDue}\"}}";
            accountSummaryNative.field3Type = "{\"default\":\"Amount\",\"Deposit\":\"Date\"}";
            accountSummaryNative.field4Label = "{\"default\":{\"default\":\"{i.kony.mb.accdetails.blockedAmout}:\"},\"Loan\":{\"default\":\"{i.kony.mb.accdetails.dueDate}:\"},\"Mortgage\":{\"default\":\"{i.kony.mb.accdetails.dueDate}:\"},\"Deposit\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\"},\"CreditCard\":{\"default\":\"{i.kony.mb.accountdetails.dueon}:\"}}";
            accountSummaryNative.field4Value = "{\"default\":{\"default\":\"{$.S1.Accounts[0].blockedAmount}\"},\"Loan\":{\"default\":\"{$.S1.Accounts[0].nextPaymentDate}\"},\"Mortgage\":{\"default\":\"{$.S1.Accounts[0].nextPaymentDate}\"},\"Deposit\":{\"default\":\"{$.S1.Accounts[0].accountHolder.fullname}\"},\"CreditCard\":{\"default\":\"{$.S1.Accounts[0].dueDate}\"}}";
            accountSummaryNative.field4Type = "{\"default\":\"Amount\",\"Deposit\":\"Label\",\"CreditCard\":\"Date\",\"Loan\":\"Date\",\"Mortgage\":\"Date\"}";
            var quicklinksNative = new com.temenos.infinity.quicklinksNative({
                "bottom": "0dp",
                "height": "78dp",
                "id": "quicklinksNative",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "width": "100%",
                "overrides": {
                    "quicklinksNative": {
                        "right": "viz.val_cleared",
                        "top": "viz.val_cleared",
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
            quicklinksNative.sknLink = "ICSkn000000Op0";
            quicklinksNative.accountType = "Savings";
            quicklinksNative.sknLinkValue = "ICSknLblFFFFFF15PxSSP";
            quicklinksNative.link1CTA = "{\"Savings\":{\"text\":\"Savings Pot\",\"image\":\"savings_pot.png\",\"action\":\"navigateToSavingsPot\",\"context\":\"\",\"entitlement\":[\"GOAL_POT_VIEW\",\"BUDGET_POT_VIEW\"],\"entitlement_action\":true},\"Checking\":{\"text\":\"Savings Pot\",\"image\":\"savings_pot.png\",\"action\":\"navigateToSavingsPot\",\"context\":\"\",\"entitlement\":[\"GOAL_POT_VIEW\",\"BUDGET_POT_VIEW\"],\"entitlement_action\":true},\"Loan\":{\"text\":\"Pay Due Amount\",\"image\":\"pay_due.png\",\"action\":\"navigateToPayDueAmount\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Mortgage\":{\"text\":\"Pay Due Amount\",\"image\":\"pay_due.png\",\"action\":\"navigateToPayDueAmount\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Deposit\":{\"text\":\"View Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"VIEW_ESTATEMENTS\",\"VIEW_COMBINED_STATEMENTS\"],\"entitlement_action\":false},\"CreditCard\":{\"text\":\"Pay Bill\",\"image\":\"pay_bill.png\",\"action\":\"navigateToPayBill\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.sknAddLink = "ICSkn000000Op0";
            quicklinksNative.link2CTA = "{\"Savings\":{\"text\":\"Transfer money\",\"image\":\"transfer_money.png\",\"action\":\"navigateToMakeTransfer\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Checking\":{\"text\":\"Transfer money\",\"image\":\"transfer_money.png\",\"action\":\"navigateToMakeTransfer\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Loan\":{\"text\":\"View Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"VIEW_ESTATEMENTS\",\"VIEW_COMBINED_STATEMENTS\"],\"entitlement_action\":false},\"Mortgage\":{\"text\":\"View Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"VIEW_ESTATEMENTS\",\"VIEW_COMBINED_STATEMENTS\"],\"entitlement_action\":false},\"Deposit\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"CreditCard\":{\"text\":\"Scheduled Transactions\",\"image\":\"loan_schedule.png\",\"action\":\"navigateToLoanSchedule\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.sknAddLinkValue = "ICSknLbl007AFF100PSSP";
            quicklinksNative.link3CTA = "{\"Savings\":{\"text\":\"Pay money\",\"image\":\"pay_bill.png\",\"action\":\"navigateToMakePayment\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Checking\":{\"text\":\"Pay money\",\"image\":\"pay_bill.png\",\"action\":\"navigateToMakePayment\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Loan\":{\"text\":\"Payoff Loan\",\"image\":\"pay_bill.png\",\"action\":\"navigateToLoanPayoff\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Mortgage\":{\"text\":\"Payoff Loan\",\"image\":\"pay_bill.png\",\"action\":\"navigateToLoanPayoff\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Deposit\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"CreditCard\":{\"text\":\"View Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"VIEW_ESTATEMENTS\",\"VIEW_COMBINED_STATEMENTS\"],\"entitlement_action\":false},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.sknAddLinkSeperator = "ICSknFlx000000BGP";
            quicklinksNative.link4CTA = "{\"Savings\":{\"text\":\"Pay Bill\",\"image\":\"pay_bill.png\",\"action\":\"navigateToPayBill\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Checking\":{\"text\":\"Pay Bill\",\"image\":\"pay_bill.png\",\"action\":\"navigateToPayBill\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Loan\":{\"text\":\"Loan Schedule\",\"image\":\"loan_schedule.png\",\"action\":\"navigateToLoanSchedule\",\"context\":\"\",\"entitlement\":[\"VIEW_LOAN_SCHEDULE\"],\"entitlement_action\":false},\"Mortgage\":{\"text\":\"Loan Schedule\",\"image\":\"loan_schedule.png\",\"action\":\"navigateToLoanSchedule\",\"context\":\"\",\"entitlement\":[\"VIEW_LOAN_SCHEDULE\"],\"entitlement_action\":false},\"Deposit\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"CreditCard\":{\"text\":\"Disputed Transactions\",\"image\":\"statements.png\",\"action\":\"navigateToDisputedTransactions\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.sknContainer = "ICSknFlxFFFFFF10PFFFFFFR";
            quicklinksNative.link5CTA = "{\"Savings\":{\"text\":\"Scheduled Transactions\",\"image\":\"loan_schedule.png\",\"action\":\"navigateToLoanSchedule\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Checking\":{\"text\":\"Scheduled Transactions\",\"image\":\"loan_schedule.png\",\"action\":\"navigateToLoanSchedule\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Loan\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Mortgage\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Deposit\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"CreditCard\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.sknBackground = "ICSkn000000BG50P";
            quicklinksNative.link6CTA = "{\"Checking\":{\"text\":\"View Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"VIEW_ESTATEMENTS\",\"VIEW_COMBINED_STATEMENTS\"],\"entitlement_action\":false},\"CreditCard\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Deposit\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Loan\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Mortgage\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Savings\":{\"text\":\"View Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"VIEW_ESTATEMENTS\",\"VIEW_COMBINED_STATEMENTS\"],\"entitlement_action\":false}}";
            quicklinksNative.sknCancelLink = "ICSknLbl007AFF100PSSPBold";
            quicklinksNative.link7CTA = "{\"Savings\":{\"text\":\"Disputed Transactions\",\"image\":\"statements.png\",\"action\":\"navigateToDisputedTransactions\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Checking\":{\"text\":\"Disputed Transactions\",\"image\":\"statements.png\",\"action\":\"navigateToDisputedTransactions\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Loan\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Mortgage\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Deposit\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"CreditCard\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.link8CTA = "{\"Savings\":{\"text\":\"Manage Cards\",\"image\":\"cardmange.png\",\"action\":\"navigateToManageCards\",\"context\":\"\",\"entitlement\":[\"CARD_MANAGEMENT\"],\"entitlement_action\":false},\"Checking\":{\"text\":\"Manage Cards\",\"image\":\"cardmange.png\",\"action\":\"navigateToManageCards\",\"context\":\"\",\"entitlement\":[\"CARD_MANAGEMENT\"],\"entitlement_action\":false},\"Loan\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Mortgage\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Deposit\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"CreditCard\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.link9CTA = "{\"Savings\":{\"text\":\"Cheque Book Request\",\"image\":\"statements.png\",\"action\":\"navigateToRequestChequeBook\",\"context\":\"\",\"entitlement\":[\"CHEQUE_BOOK_REQUEST_CREATE\"],\"entitlement_action\":false},\"Checking\":{\"text\":\"Cheque Book Request\",\"image\":\"statements.png\",\"action\":\"navigateToRequestChequeBook\",\"context\":\"\",\"entitlement\":[\"CHEQUE_BOOK_REQUEST_CREATE\"],\"entitlement_action\":false},\"Loan\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Mortgage\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Deposit\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"CreditCard\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.link10CTA = "{\"Savings\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Checking\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Loan\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Mortgage\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Deposit\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"CreditCard\":{\"text\":\"\",\"image\":\"\",\"action\":\"\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":true},\"Default\":{\"text\":\"Update Account Settings\",\"image\":\"account_settings.png\",\"action\":\"navigateToUpdateAccountSettings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.isPrimaryVisible = true;
            quicklinksNative.linkCancel = "";
            flxAccountSummary.add(accountSummaryNative, quicklinksNative);
            var flxConsent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxConsent",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "konympassknFlxFFFFFFBGRounded10",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxConsent.setDefaultUnit(kony.flex.DP);
            var imgSym = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSym",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblWarning = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWarning",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknlblFF5D6E",
                "text": "Your connection has expired. \n Tap here to renew it.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxConsent.add(imgSym, lblWarning);
            var flxAccountTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42.50%",
                "id": "flxAccountTransactions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxAccountTransactions.setDefaultUnit(kony.flex.DP);
            var accountsTransactionListNative = new com.temenos.infinityComponent.accountsTransactionListNative({
                "height": "100%",
                "id": "accountsTransactionListNative",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "accountsTransactionListNative": {
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
            accountsTransactionListNative.objectServiceName = "RBObjects";
            accountsTransactionListNative.sknGroupHeaderLabel = "sknLbl424242SSPRegular26px";
            accountsTransactionListNative.ListArray = "{$.S1.Transactions}";
            accountsTransactionListNative.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-{CS}{D}\", \"fractionDigits\":\"2\"}";
            accountsTransactionListNative.field1Value = "{\"Savings\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST1\":{\"text\":\"{$.L1.lockReason}\",\"fieldType\":\"label\"}},\"Checking\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST1\":{\"text\":\"{$.L1.lockReason}\",\"fieldType\":\"label\"}},\"CreditCard\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"}},\"Loan\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST3\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"},\"ST4\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"}},\"Mortgage\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST3\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"},\"ST4\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"}},\"Deposit\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"}}}";
            accountsTransactionListNative.displayDisputeIcon = true;
            accountsTransactionListNative.iconDisputedTransaction = "disputedtransactionicon1.png";
            accountsTransactionListNative.btnSwipeableAction1 = "{\"Savings\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":true,\"ST2\":true}},\"Checking\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"CreditCard\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Loan\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Deposit\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}}}";
            accountsTransactionListNative.blockedObjServiceName = "RBObjects";
            accountsTransactionListNative.btnSwipeableAction2 = "{\"Savings\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":true,\"ST2\":true}},\"Checking\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"CreditCard\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Loan\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Deposit\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}}}";
            accountsTransactionListNative.objectName = "Transactions";
            accountsTransactionListNative.ListIdentifier = "L1";
            accountsTransactionListNative.dateFormat = "d/m/Y";
            accountsTransactionListNative.field2Value = "{\"Savings\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST1\":{\"text\":\"{$.L1.lockedAmount}\",\"fieldType\":\"amount\"}},\"Checking\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST1\":{\"text\":\"{$.L1.lockedAmount}\",\"fieldType\":\"amount\"}},\"CreditCard\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"}},\"Loan\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST3\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"},\"ST4\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"}},\"Mortgage\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST3\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"},\"ST4\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"}},\"Deposit\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"}}}";
            accountsTransactionListNative.disputeProperty = "isDisputed";
            accountsTransactionListNative.iconNoRecordsAvailable = "norecordsavailableicon.png";
            accountsTransactionListNative.sknGroupHeaderBackground = "ICSknFlxF6F6F6";
            accountsTransactionListNative.blockedObjName = "Transactions";
            accountsTransactionListNative.sknPrimaryField1 = "sknLbl424242SSPRegular26px";
            accountsTransactionListNative.operationName = "getAccountTransactionByType";
            accountsTransactionListNative.segregationDecider = "{\"All\":\"statusDescription\",\"LoanSchedule\":\"installmentType\"}";
            accountsTransactionListNative.backendDateFormat = "Y-m-d";
            accountsTransactionListNative.field3Value = "{\"Savings\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"},\"ST1\":{\"text\":\"{$.L1.transactionReference}\",\"fieldType\":\"label\"}},\"Checking\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"},\"ST1\":{\"text\":\"{$.L1.transactionReference}\",\"fieldType\":\"label\"}},\"CreditCard\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}},\"Loan\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}},\"Mortgage\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}},\"Deposit\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}}}";
            accountsTransactionListNative.iconGroupExpand = "arrowup_1.png";
            accountsTransactionListNative.btnSwipeableAction3 = "{\"Savings\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":true,\"ST2\":true}},\"Checking\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"CreditCard\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Loan\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Deposit\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}}}";
            accountsTransactionListNative.blockedOperationName = "getBlockedFunds";
            accountsTransactionListNative.sknPrimaryField2 = "sknLbl424242SSPRegular26px";
            accountsTransactionListNative.criteria = "{\"accountID\":\"{$.c.accountID}\",\"transactionType\":\"{$.c.transactionType}\",\"offset\":0,\"limit\":300,\"isScheduled\":\"false\",\"order\":\"desc\"}";
            accountsTransactionListNative.segregationTypes = "{\"ST1\":{\"value\":\"Blocked\",\"displayText\":\"Blocked Funds\",\"weight\":\"1\"},\"ST2\":{\"value\":\"Pending\",\"displayText\":\"Pending Transaction\",\"weight\":\"2\"},\"ST3\":{\"value\":\"DUE\",\"displayText\":\"Overdue Installments\",\"weight\":\"1\"},\"ST4\":{\"value\":\"PAID\",\"displayText\":\"Paid Installments\",\"weight\":\"2\"},\"ST5\":{\"value\":\"Successful\",\"displayText\":\"Posted Transaction\",\"weight\":\"3\"}}";
            accountsTransactionListNative.currencyCode = "{$.c.currencyCode}";
            accountsTransactionListNative.field4Value = "";
            accountsTransactionListNative.iconGroupCollapse = "arrowdown.png";
            accountsTransactionListNative.blockedCriteria = "{\"accountID\":\"{$.c.accountID}\",\"transactionType\":\"{$.c.transactionType}\",\"offset\":0,\"limit\":300,\"isScheduled\":\"false\",\"order\":\"desc\"}";
            accountsTransactionListNative.serviceResponseIdentifier = "S1";
            accountsTransactionListNative.noRecordsAvailable = "kony.mb.OB.NoRecordsAvailable";
            accountsTransactionListNative.sknSecondaryFields = "sknLbl727272SSP26pxTab";
            accountsTransactionListNative.recordsPerPage = 20;
            accountsTransactionListNative.blockedServiceIdentifier = "S2";
            accountsTransactionListNative.sknRowSeparator = "sknFlxe3e3e3";
            accountsTransactionListNative.dataAvailability = "Service calls by component";
            accountsTransactionListNative.blockedDataAvailability = "Service calls by component";
            accountsTransactionListNative.sknRow = "f9f9";
            accountsTransactionListNative.sknSegmentShadow = "ICSknFlxShadow000fff";
            accountsTransactionListNative.sknAmount = "{\"amountField\":\"\",\"skin\":[{\"max\":0,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":0,\"max\":10,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":11,\"max\":999,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":1000,\"skin\":\"sknLbl424242SSPRegular26px\"}]}";
            flxAccountTransactions.add(accountsTransactionListNative);
            var segTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "imgUpArrow": "",
                            "lblHeader": kony.i18n.getLocalizedString("kony.mb.accdetails.pendingTransactions")
                        },
                        [{
                            "imgIndicator": "",
                            "lblDate": "",
                            "lblTransaction": "",
                            "lblTransactionAmount": ""
                        }]
                    ],
                    [{
                            "imgUpArrow": "",
                            "lblHeader": kony.i18n.getLocalizedString("kony.mb.accdetails.postedTransactions")
                        },
                        [{
                            "imgIndicator": "",
                            "lblDate": "",
                            "lblTransaction": "",
                            "lblTransactionAmount": ""
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segTransactions",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Focus",
                "rowTemplate": "flxTransactions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTransactions": "flxTransactions",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "flxWrapper": "flxWrapper",
                    "imgIndicator": "imgIndicator",
                    "imgUpArrow": "imgUpArrow",
                    "lblDate": "lblDate",
                    "lblHeader": "lblHeader",
                    "lblTransaction": "lblTransaction",
                    "lblTransactionAmount": "lblTransactionAmount"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": true
            });
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": 400,
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "200dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNoTransactions.add(lblNoTransaction);
            flxMainContainer.add(flxContainer, flxSeperator2, flxAccountSummary, flxConsent, flxAccountTransactions, segTransactions, flxNoTransactions);
            var btnChatbot = new kony.ui.Button({
                "bottom": "70dp",
                "focusSkin": "sknbtnChatbotFocus",
                "height": "60dp",
                "id": "btnChatbot",
                "isVisible": false,
                "right": "10dp",
                "skin": "sknbtnImage",
                "width": "60dp",
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "pressedSkin": "sknbtnImage"
            });
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "300dp",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
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
                "zIndex": 106
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
            flxFooter.add(customFooter);
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
                "zIndex": 200
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
            var flxAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAdditionalOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxPerformAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 80,
                "clipBounds": true,
                "id": "flxPerformAdditionalOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 2
            }, {}, {});
            flxPerformAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxLoanSchedule = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxLoanSchedule",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoanSchedule.setDefaultUnit(kony.flex.DP);
            var lblLoanSchedule = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblLoanSchedule",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": "Loan Schedule",
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
            var flxLoanScheduleBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLoanScheduleBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoanScheduleBg.setDefaultUnit(kony.flex.DP);
            flxLoanScheduleBg.add();
            flxLoanSchedule.add(lblLoanSchedule, flxLoanScheduleBg);
            var flxRequestChequeBook = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxRequestChequeBook",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRequestChequeBook.setDefaultUnit(kony.flex.DP);
            var lblRequestChequeBook = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblRequestChequeBook",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.chequemanagement.requestchequebook"),
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
            var Copyflxs0bf033e3c27c941 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0bf033e3c27c941",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0bf033e3c27c941.setDefaultUnit(kony.flex.DP);
            Copyflxs0bf033e3c27c941.add();
            flxRequestChequeBook.add(lblRequestChequeBook, Copyflxs0bf033e3c27c941);
            var flxNewStopChequeRequest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxNewStopChequeRequest",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNewStopChequeRequest.setDefaultUnit(kony.flex.DP);
            var lblStopChequeRequest = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblStopChequeRequest",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.newStopChequeRequest"),
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
            var Copyflxs0jc90c28e9caa44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0jc90c28e9caa44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0jc90c28e9caa44.setDefaultUnit(kony.flex.DP);
            Copyflxs0jc90c28e9caa44.add();
            flxNewStopChequeRequest.add(lblStopChequeRequest, Copyflxs0jc90c28e9caa44);
            var flxViewMyCheques = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxViewMyCheques",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewMyCheques.setDefaultUnit(kony.flex.DP);
            var lblViewMyCheques = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblViewMyCheques",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.myCheques"),
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
            var flxViewMyChequesBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxViewMyChequesBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewMyChequesBg.setDefaultUnit(kony.flex.DP);
            flxViewMyChequesBg.add();
            flxViewMyCheques.add(lblViewMyCheques, flxViewMyChequesBg);
            var flxLoanPayOff = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxLoanPayOff",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoanPayOff.setDefaultUnit(kony.flex.DP);
            var lbluploadProfilePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lbluploadProfilePicture",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.PayOffLoan"),
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
            var Copyflxs0i8fb78088bf442 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0i8fb78088bf442",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0i8fb78088bf442.setDefaultUnit(kony.flex.DP);
            Copyflxs0i8fb78088bf442.add();
            flxLoanPayOff.add(lbluploadProfilePicture, Copyflxs0i8fb78088bf442);
            var flxManageCards = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxManageCards",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxManageCards.setDefaultUnit(kony.flex.DP);
            var lblManageCards = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblManageCards",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.cards.manageCards"),
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
            var Copyflxs0edc8877e250947 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0edc8877e250947",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0edc8877e250947.setDefaultUnit(kony.flex.DP);
            Copyflxs0edc8877e250947.add();
            flxManageCards.add(lblManageCards, Copyflxs0edc8877e250947);
            var flxRemoveProfilePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxRemoveProfilePicture",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRemoveProfilePicture.setDefaultUnit(kony.flex.DP);
            var lblRemoveProfilePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblRemoveProfilePicture",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.profilePersonalDetails.RemoveProfilePicture"),
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
            var Copyflxs0a346519724b140 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0a346519724b140",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0a346519724b140.setDefaultUnit(kony.flex.DP);
            Copyflxs0a346519724b140.add();
            flxRemoveProfilePicture.add(lblRemoveProfilePicture, Copyflxs0a346519724b140);
            var flxEditPhoneNumbers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxEditPhoneNumbers",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEditPhoneNumbers.setDefaultUnit(kony.flex.DP);
            var lblEditPhoneNumbers = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEditPhoneNumbers",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.EditPhoneNumbers"),
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
            var flxse = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxse",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxse.setDefaultUnit(kony.flex.DP);
            flxse.add();
            flxEditPhoneNumbers.add(lblEditPhoneNumbers, flxse);
            var flxDisputeTranactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxDisputeTranactions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDisputeTranactions.setDefaultUnit(kony.flex.DP);
            var lblViewDisputedTransactions = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblViewDisputedTransactions",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.ViewDisputedTransactions"),
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
            flxDisputeTranactions.add(lblViewDisputedTransactions);
            var flxEditEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxEditEmail",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEditEmail.setDefaultUnit(kony.flex.DP);
            var lblEditEmail = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEditEmail",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.EditEmail"),
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
            var FLXSEP = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "FLXSEP",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FLXSEP.setDefaultUnit(kony.flex.DP);
            FLXSEP.add();
            flxEditEmail.add(lblEditEmail, FLXSEP);
            flxPerformAdditionalOptions.add(flxLoanSchedule, flxRequestChequeBook, flxNewStopChequeRequest, flxViewMyCheques, flxLoanPayOff, flxManageCards, flxRemoveProfilePicture, flxEditPhoneNumbers, flxDisputeTranactions, flxEditEmail);
            var flxCancelOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCancelOption",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 1070
            }, {}, {});
            flxCancelOption.setDefaultUnit(kony.flex.DP);
            var flxCancel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxCancel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxCancel.setDefaultUnit(kony.flex.DP);
            var lblCancel = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblCancel",
                "isVisible": true,
                "skin": "sknLbl007aFFSSPBold",
                "text": kony.i18n.getLocalizedString("kony.tab.common.CANCEL"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1070
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCancel.add(lblCancel);
            flxCancelOption.add(flxCancel);
            var flxTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "230dp",
                "clipBounds": true,
                "id": "flxTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTop.setDefaultUnit(kony.flex.DP);
            flxTop.add();
            flxAdditionalOptions.add(flxPerformAdditionalOptions, flxCancelOption, flxTop);
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, btnChatbot, flxGradient, flxFooter, flxHamburger, flxPopup, flxAdditionalOptions);
        };
        return [{
            "addWidgets": addWidgetsfrmAccountDetails,
            "bounces": true,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmAccountDetails",
            "init": controller.AS_Form_e320ad1f929e4a3dad4efe079f2102b1,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_ab38005fe48c468c8516b24ac28c0519(eventobject);
            },
            "skin": "sknFrmTitleBar",
            "title": "Family Checking Account"
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