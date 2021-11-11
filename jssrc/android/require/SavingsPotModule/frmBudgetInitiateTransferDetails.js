define("SavingsPotModule/frmBudgetInitiateTransferDetails", function() {
    return function(controller) {
        function addWidgetsfrmBudgetInitiateTransferDetails() {
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
                "zIndex": 8
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "centerY": "50%",
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.verifyDetails"),
                        "left": "15%",
                        "top": "viz.val_cleared",
                        "width": "65%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "70dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var lblError = new kony.ui.Label({
                "id": "lblError",
                "isVisible": true,
                "left": "19dp",
                "skin": "sknlblee0005SSPReg15px",
                "text": "You have insufficient Balance in your You have insufficient Balance in your",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxError.add(lblError);
            var flxFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "50dp",
                "id": "flxFrom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFrom.setDefaultUnit(kony.flex.DP);
            var lblFrom = new kony.ui.Label({
                "id": "lblFrom",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.from"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFromValue = new kony.ui.Label({
                "id": "lblFromValue",
                "isVisible": true,
                "right": "25dp",
                "skin": "sknlbl424242ssp40px",
                "text": "My Principal…2343",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFrom.add(lblFrom, lblFromValue);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "50dp",
                "id": "flxFromAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFromAccount.setDefaultUnit(kony.flex.DP);
            var lblBudgetName = new kony.ui.Label({
                "id": "lblBudgetName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBudgetNameValue = new kony.ui.Label({
                "id": "lblBudgetNameValue",
                "isVisible": true,
                "right": "25dp",
                "skin": "sknlbl424242ssp40px",
                "text": "Family Vacation",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFromAccount.add(lblBudgetName, lblBudgetNameValue);
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "50dp",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblAmount = new kony.ui.Label({
                "id": "lblAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.BudgetAmount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAmountValue = new kony.ui.Label({
                "id": "lblAmountValue",
                "isVisible": true,
                "right": "25dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$100000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAmount.add(lblAmount, lblAmountValue);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxTransferAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "50dp",
                "id": "flxTransferAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferAmount.setDefaultUnit(kony.flex.DP);
            var lblTransferAmount = new kony.ui.Label({
                "id": "lblTransferAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.SavingsPot.FundAmountLabel"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransferAmountValue = new kony.ui.Label({
                "id": "lblTransferAmountValue",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "$100000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTransferAmountImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTransferAmountImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxTransferAmountImage.setDefaultUnit(kony.flex.DP);
            var imgArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgArrow",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTransferAmountImage.add(imgArrow);
            flxTransferAmount.add(lblTransferAmount, lblTransferAmountValue, flxTransferAmountImage);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            flxDetails.add(flxError, flxFrom, flxSeperator, flxFromAccount, flxSeperator1, flxAmount, flxSeperator2, flxTransferAmount, flxSeperator3);
            flxMain.add(flxDetails);
            var flxbtnTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxbtnTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxbtnTransfer.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CardLessOverdraft.Title"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxbtnTransfer.add(btnContinue);
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
            this.add(flxHeader, flxMain, flxbtnTransfer, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmBudgetInitiateTransferDetails,
            "enabledForIdleTimeout": true,
            "id": "frmBudgetInitiateTransferDetails",
            "init": controller.AS_Form_c1661cf1f6b549de86057e25378d9b05,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c4980ea78ccd400dbcbb967d4634984d,
            "preShow": function(eventobject) {
                controller.AS_Form_e3e86d20897847a890c56b133238b9b5(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.CM.verifyDetails")
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
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});