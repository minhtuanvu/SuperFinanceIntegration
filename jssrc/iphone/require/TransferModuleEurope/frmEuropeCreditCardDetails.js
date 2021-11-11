define("TransferModuleEurope/frmEuropeCreditCardDetails", function() {
    return function(controller) {
        function addWidgetsfrmEuropeCreditCardDetails() {
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
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.TransferAmount")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "40%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxMinimumDue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "108dp",
                "id": "flxMinimumDue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMinimumDue.setDefaultUnit(kony.flex.DP);
            var lblMinimumDue = new kony.ui.Label({
                "id": "lblMinimumDue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMBlueLabel",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.MinimumDue"),
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblContractualMinAmt = new kony.ui.Label({
                "id": "lblContractualMinAmt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.ContractualAmount"),
                "textStyle": {},
                "top": "71dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxMinDue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMinDue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "43dp",
                "width": "90%"
            }, {}, {});
            flxMinDue.setDefaultUnit(kony.flex.DP);
            var lblMinDue = new kony.ui.Label({
                "id": "lblMinDue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "Minimum Due:",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAmountOne = new kony.ui.Label({
                "id": "lblAmountOne",
                "isVisible": true,
                "left": "4dp",
                "skin": "sknLb665e66SSPBold26px",
                "text": "$1500,00",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblByOne = new kony.ui.Label({
                "id": "lblByOne",
                "isVisible": true,
                "left": "4dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.By"),
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDateOne = new kony.ui.Label({
                "id": "lblDateOne",
                "isVisible": true,
                "left": "4dp",
                "right": 0,
                "skin": "sknLb665e66SSPBold26px",
                "text": "04/05/1920",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxMinDue.add(lblMinDue, lblAmountOne, lblByOne, lblDateOne);
            var flxChevronOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "108dp",
                "id": "flxChevronOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxChevronOne.setDefaultUnit(kony.flex.DP);
            var imgChevronOne = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgChevronOne",
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
            flxChevronOne.add(imgChevronOne);
            var flxSeperatorOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "107dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperatorOne.setDefaultUnit(kony.flex.DP);
            flxSeperatorOne.add();
            flxMinimumDue.add(lblMinimumDue, lblContractualMinAmt, flxMinDue, flxChevronOne, flxSeperatorOne);
            var flxStatementDue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "108dp",
                "id": "flxStatementDue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "109dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatementDue.setDefaultUnit(kony.flex.DP);
            var lblStatementDue = new kony.ui.Label({
                "id": "lblStatementDue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMBlueLabel",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.StatementDue"),
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblStDueAmt = new kony.ui.Label({
                "id": "lblStDueAmt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.StmtDueAmnt"),
                "textStyle": {},
                "top": "71dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxStDue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxStDue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "44dp",
                "width": "90%"
            }, {}, {});
            flxStDue.setDefaultUnit(kony.flex.DP);
            var lblPaymentDue = new kony.ui.Label({
                "id": "lblPaymentDue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "Payment Due:",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAmountTwo = new kony.ui.Label({
                "id": "lblAmountTwo",
                "isVisible": true,
                "left": "4dp",
                "skin": "sknLb665e66SSPBold26px",
                "text": "$1500,00",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblByTwo = new kony.ui.Label({
                "id": "lblByTwo",
                "isVisible": true,
                "left": "4dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.By"),
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDateTwo = new kony.ui.Label({
                "id": "lblDateTwo",
                "isVisible": true,
                "left": "4dp",
                "right": 0,
                "skin": "sknLb665e66SSPBold26px",
                "text": "04/05/1920",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxStDue.add(lblPaymentDue, lblAmountTwo, lblByTwo, lblDateTwo);
            var flxChevronTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "108dp",
                "id": "flxChevronTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxChevronTwo.setDefaultUnit(kony.flex.DP);
            var CopyimgChevronOne0j293bcde2efa40 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "CopyimgChevronOne0j293bcde2efa40",
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
            flxChevronTwo.add(CopyimgChevronOne0j293bcde2efa40);
            var flxSeperatorTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "107dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperatorTwo.setDefaultUnit(kony.flex.DP);
            flxSeperatorTwo.add();
            flxStatementDue.add(lblStatementDue, lblStDueAmt, flxStDue, flxChevronTwo, flxSeperatorTwo);
            var flxOutstandingBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "108dp",
                "id": "flxOutstandingBalance",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "218dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOutstandingBalance.setDefaultUnit(kony.flex.DP);
            var lblOutstandingBalance = new kony.ui.Label({
                "id": "lblOutstandingBalance",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMBlueLabel",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.OutstandingBalance"),
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxOutBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxOutBalance",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "44dp",
                "width": "90%"
            }, {}, {});
            flxOutBalance.setDefaultUnit(kony.flex.DP);
            var lblYourOutBalance = new kony.ui.Label({
                "id": "lblYourOutBalance",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "Your outstanding balance is:",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAmountThree = new kony.ui.Label({
                "id": "lblAmountThree",
                "isVisible": true,
                "left": "4dp",
                "skin": "sknLb665e66SSPBold26px",
                "text": "$1500,00",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxOutBalance.add(lblYourOutBalance, lblAmountThree);
            var flxChevronThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "108dp",
                "id": "flxChevronThree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxChevronThree.setDefaultUnit(kony.flex.DP);
            var CopyimgChevronOne0df2fe7b864ed4a = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "CopyimgChevronOne0df2fe7b864ed4a",
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
            flxChevronThree.add(CopyimgChevronOne0df2fe7b864ed4a);
            var flxSeperatorThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorThree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "107dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperatorThree.setDefaultUnit(kony.flex.DP);
            flxSeperatorThree.add();
            flxOutstandingBalance.add(lblOutstandingBalance, flxOutBalance, flxChevronThree, flxSeperatorThree);
            var flxHowMuch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "108dp",
                "id": "flxHowMuch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "327dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHowMuch.setDefaultUnit(kony.flex.DP);
            var lblHowMuch = new kony.ui.Label({
                "id": "lblHowMuch",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMBlueLabel",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.ChooseHowMuch"),
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxChevronFour = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "108dp",
                "id": "flxChevronFour",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxChevronFour.setDefaultUnit(kony.flex.DP);
            var CopyimgChevronOne0f152ce145b5241 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "CopyimgChevronOne0f152ce145b5241",
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
            flxChevronFour.add(CopyimgChevronOne0f152ce145b5241);
            var flxSeperatorFour = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorFour",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "107dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperatorFour.setDefaultUnit(kony.flex.DP);
            flxSeperatorFour.add();
            var lblNote = new kony.ui.Label({
                "id": "lblNote",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "You must transfer atleast your contractual minimum amount.",
                "textStyle": {},
                "top": "45dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var rtxtNote = new kony.ui.RichText({
                "id": "rtxtNote",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "defRichTextLink",
                "skin": "sknRtxta0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfer.AtLeastMinimum"),
                "top": "45dp",
                "width": "82.87%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxHowMuch.add(lblHowMuch, flxChevronFour, flxSeperatorFour, lblNote, rtxtNote);
            flxMainContainer.add(flxMinimumDue, flxStatementDue, flxOutstandingBalance, flxHowMuch);
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
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_e75c4816156146de805238458baf8571,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_bb53b1432cd740db85bb55e9c39cff2e,
            "metaData": {
                "title": "Cancel"
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmEuropeCreditCardDetails,
            "allowHorizontalBounce": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmEuropeCreditCardDetails",
            "init": controller.AS_Form_ia705a6e10314ae19d4ea307cbffa874,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_e8e861b4f23a4041a00e2cbda538a1ae,
            "preShow": function(eventobject) {
                controller.AS_Form_fbce55476735441e88f315973deb0fd9(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.TransferAmount")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});