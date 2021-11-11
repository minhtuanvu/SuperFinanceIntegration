define("AuthModule/frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var imgKonyLogo = new kony.ui.Image2({
                "centerX": "50%",
                "height": "14%",
                "id": "imgKonyLogo",
                "isVisible": true,
                "src": "infinity_digi_bank.png",
                "top": "3%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxWelcome = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxWelcome",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxfafafa",
                "top": "20%",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxWelcome.setDefaultUnit(kony.flex.DP);
            var flxBorderTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderTop.setDefaultUnit(kony.flex.DP);
            flxBorderTop.add();
            var flxBorderBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderBottom.setDefaultUnit(kony.flex.DP);
            flxBorderBottom.add();
            var lblWelcomeMessage = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWelcomeMessage",
                "isVisible": true,
                "left": "60dp",
                "maxNumberOfLines": 1,
                "right": "120dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Welcome Please Login",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "1dp",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxDashboard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxDashboard",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "28dp",
                "skin": "slFbox",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxDashboard.setDefaultUnit(kony.flex.DP);
            var imgDashboard = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgDashboard",
                "isVisible": true,
                "skin": "slImage",
                "src": "dashboardicon.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDashboard.add(imgDashboard);
            var lblAccountPreview = new kony.ui.Label({
                "id": "lblAccountPreview",
                "isVisible": false,
                "left": "60dp",
                "skin": "sknLbl0a78d1sspreg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.accountPreview"),
                "textStyle": {},
                "top": "18%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAccountPreviewTime = new kony.ui.Label({
                "id": "lblAccountPreviewTime",
                "isVisible": false,
                "left": "60dp",
                "skin": "sknLbla0a0a0SSRegular18px",
                "text": "As of today-04:31 PM",
                "textStyle": {},
                "top": "54%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxLanguageSelection = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLanguageSelection",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "120dp",
                "zIndex": 6
            }, {}, {});
            flxLanguageSelection.setDefaultUnit(kony.flex.DP);
            var lblLanguageValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "20dp",
                "id": "lblLanguageValue",
                "isVisible": true,
                "left": "0dp",
                "maxNumberOfLines": 1,
                "right": "40dp",
                "skin": "sknLbl424242SSP22px",
                "text": "UK English ",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgDropdown = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgDropdown",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLanguageSelection.add(lblLanguageValue, imgDropdown);
            flxWelcome.add(flxBorderTop, flxBorderBottom, lblWelcomeMessage, flxDashboard, lblAccountPreview, lblAccountPreviewTime, flxLanguageSelection);
            var flxAccountPreview = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "43%",
                "id": "flxAccountPreview",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxfafafa",
                "top": "27%",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxAccountPreview.setDefaultUnit(kony.flex.DP);
            var flxBottomGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "3dp",
                "id": "flxBottomGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradient",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBottomGradient.setDefaultUnit(kony.flex.DP);
            flxBottomGradient.add();
            var lblNetWorthSummary = new kony.ui.Label({
                "id": "lblNetWorthSummary",
                "isVisible": false,
                "left": "9.40%",
                "skin": "sknLbl424242SSReg20px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.netWorthSummary"),
                "textStyle": {},
                "top": "9%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNetWorthValue = new kony.ui.Label({
                "id": "lblNetWorthValue",
                "isVisible": false,
                "left": "9.40%",
                "skin": "sknLbl424242SSReg30px",
                "text": "+$  5,212,783.54",
                "textStyle": {},
                "top": "21%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxAssets = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxAssets",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxfafafa",
                "top": "48%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxAssets.setDefaultUnit(kony.flex.DP);
            var lblAssets = new kony.ui.Label({
                "id": "lblAssets",
                "isVisible": true,
                "left": "18.80%",
                "skin": "sknLbl424242SSReg20px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.Assets"),
                "textStyle": {},
                "top": "15%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAssetsValue = new kony.ui.Label({
                "id": "lblAssetsValue",
                "isVisible": true,
                "left": "18.80%",
                "skin": "sknLbl424242SSReg30px",
                "text": "+$ 783.44",
                "textStyle": {},
                "top": "42%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAssets.add(lblAssets, lblAssetsValue);
            var flxDebt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxDebt",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "sknFlxfafafa",
                "top": "48%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxDebt.setDefaultUnit(kony.flex.DP);
            var lblDebt = new kony.ui.Label({
                "id": "lblDebt",
                "isVisible": true,
                "left": "18.80%",
                "skin": "sknLbl424242SSReg20px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.debt"),
                "textStyle": {},
                "top": "15%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDebtValue = new kony.ui.Label({
                "id": "lblDebtValue",
                "isVisible": true,
                "left": "18.80%",
                "skin": "sknLbl424242SSReg30px",
                "text": "-$ 7,983.44",
                "textStyle": {},
                "top": "42%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDebt.add(lblDebt, lblDebtValue);
            var flxHorizontalLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxHorizontalLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxHorizontalLine.setDefaultUnit(kony.flex.DP);
            flxHorizontalLine.add();
            var flxVerticalLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxVerticalLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "50%",
                "width": "1dp",
                "zIndex": 5
            }, {}, {});
            flxVerticalLine.setDefaultUnit(kony.flex.DP);
            flxVerticalLine.add();
            var segAccountPreview = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "imgBank": "bankofamerica.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "My Checking...4243",
                    "lblBankName": "Bank of America"
                }, {
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "Little John...2122",
                    "lblBankName": "Citi Bank"
                }, {
                    "imgBank": "chasebank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "Honey Home...2134",
                    "lblBankName": "Chase Bank"
                }, {
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "Little John...2122",
                    "lblBankName": "Citi Bank"
                }, {
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "Little John...2122",
                    "lblBankName": "Citi Bank"
                }],
                "groupCells": false,
                "height": "99%",
                "id": "segAccountPreview",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountPreview",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "fafafa00",
                "separatorRequired": true,
                "separatorThickness": 2,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountPreview": "flxAccountPreview",
                    "imgBank": "imgBank",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblBankName": "lblBankName"
                },
                "width": "100%",
                "zIndex": 200
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxAccountPreview.add(flxBottomGradient, lblNetWorthSummary, lblNetWorthValue, flxAssets, flxDebt, flxHorizontalLine, flxVerticalLine, segAccountPreview);
            var flxSelectLanguage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSelectLanguage",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "27%",
                "width": "100%",
                "zIndex": 202
            }, {}, {});
            flxSelectLanguage.setDefaultUnit(kony.flex.DP);
            var segSelectLanguage = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "120dp",
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }],
                "groupCells": false,
                "id": "segSelectLanguage",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxLanguage",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxLanguage": "flxLanguage",
                    "imgCheckbox": "imgCheckbox",
                    "imgFlag": "imgFlag",
                    "lblLanguage": "lblLanguage",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var btnCancel = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnupdateLanguage = new kony.ui.Button({
                "bottom": "70dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnupdateLanguage",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.updateLanguage"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxSelectLanguage.add(segSelectLanguage, btnCancel, btnupdateLanguage);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "72.90%",
                "id": "flxContent",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "26.80%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var flxOpenNewAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4%",
                "id": "flxOpenNewAccount",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_g4eafa9b97c74a1c81c2eed992281565,
                "skin": "slFbox",
                "top": "54%",
                "width": "50%",
                "zIndex": 3
            }, {}, {});
            flxOpenNewAccount.setDefaultUnit(kony.flex.DP);
            var lblOpenNewAccount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOpenNewAccount",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl004B95SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.openNewAccount"),
                "textStyle": {},
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
            flxOpenNewAccount.add(lblOpenNewAccount);
            flxContent.add(flxOpenNewAccount);
            var login = new com.temenos.infinity.login({
                "bottom": "0%",
                "height": "37%",
                "id": "login",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "27%",
                "width": "100%",
                "zIndex": 5,
                "overrides": {
                    "login": {
                        "right": "viz.val_cleared",
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
            login.identityServiceName = "DbxUserLogin";
            login.textBoxNormalSkin = "sknTbx424242SSPRegular28px";
            login.textVisiblityOffIcon = "view.png";
            login.tbx1PlaceholderText = "kony.mb.login.username";
            login.rememberMeLabelSkin = "sknLbl424242SSPRegular26px";
            login.textVisiblityOnIcon = "viewactive.png";
            login.tbx2PlaceholderText = "kony.mb.login.password";
            login.rememberMeSwitchSkin = "sknSwitch0095e4Op100pr000000Op10pr";
            login.lblRememberMeText = "kony.mb.login.rememberMe";
            login.btnLoginSkin = "sknBtn0095e426pxEnabled";
            login.lblForgotPasswordText = "kony.mb.login.cannotLogin";
            login.submitButtonText = "kony.mb.login.logIn";
            login.btnLoginDisabledSkin = "sknBtna0a0a0SSPReg26px";
            login.onFocusStart = controller.AS_UWI_c84d1f445dcc400980f1e7b38e3ae368;
            login.onFocusEnd = controller.AS_UWI_j4838f66c9b04c4fa5401fe4b285bc15;
            login.hideDashboardIcon = controller.AS_UWI_c92847fddf334e4ea77acad963cfb155;
            login.onLoginSuccess = controller.AS_UWI_a5e6e86715694f53980d99d1d774cc76;
            login.setErrorStatus = controller.AS_UWI_h1921d30f65c4565b0725ffda75ecd92;
            login.forgotNavigation = controller.AS_UWI_c879a677a36e49a5bb4e677f7b9de35b;
            var loginPopups = new com.temenos.infinity.loginPopups({
                "height": "100%",
                "id": "loginPopups",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2,
                "overrides": {
                    "loginPopups": {
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
            loginPopups.identityServiceName = "DbxUserLogin";
            loginPopups.btnTouchPinFaceIdSkin = "sknBtnffffff004b95SSPReg107pr";
            loginPopups.faceIDPopupImage = "faceid.png";
            loginPopups.touchIDBtnText = "kony.mb.devReg.TouchId";
            loginPopups.pinPopupTitleSkin = "sknLbl3e4f56SSPReg32px";
            loginPopups.pinIDBtnText = "kony.mb.login.pinId";
            loginPopups.pinPopupNumbersSkin = "btnNumbere3e3e3B";
            loginPopups.faceIDBtnText = "kony.mb.common.FaceCaps";
            loginPopups.pinPopupClearButtonSkin = "sknFlxImgCancel";
            loginPopups.pinPopupTitleText = "kony.mb.login.enterLoginPin";
            loginPopups.popupCancelButtonSkin = "sknLbl0095e4SSPReg30px";
            loginPopups.popupCancelBtnText = "kony.mb.common.Cancel";
            loginPopups.faceIDPopupTitleSkin = "sknLbl3e4f56SSPReg30px";
            loginPopups.faceIDPopupTitleText = "kony.mb.login.faceIdTitle";
            loginPopups.faceIDPopupDescSkin = "sknLbl3e4f56op50SSPReg30px";
            loginPopups.faceIDPopupDescText = "kony.mb.login.authenticationMsg";
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var btnLocate = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "sknbtnf6f6f6Focus",
                "height": "100%",
                "id": "btnLocate",
                "isVisible": true,
                "left": "5dp",
                "onClick": controller.AS_Button_e871bfd24cd74f03b0880c9f934f9980,
                "skin": "sknBtnFooterffffff004b95SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Hamburger.Locateus"),
                "top": "0dp",
                "width": "33.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnEnroll = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "sknbtnf6f6f6Focus",
                "height": "100%",
                "id": "btnEnroll",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_f7fa01f6196a476bab10b8b1a1f46fd6,
                "skin": "sknBtnFooterffffff004b95SSPReg26px",
                "text": "Enroll / Activate",
                "top": "0dp",
                "width": "33.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnSupport = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "sknbtnf6f6f6Focus",
                "height": "100%",
                "id": "btnSupport",
                "isVisible": true,
                "left": "1%",
                "onClick": controller.AS_Button_ddca20b68415486faf31bad9fd1fa798,
                "skin": "sknBtnFooterffffff004b95SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.support"),
                "top": "0dp",
                "width": "33.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxVerticalSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxVerticalSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-33.50%",
                "isModalContainer": false,
                "skin": "sknFlxf6f6f6B",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 10
            }, {}, {});
            flxVerticalSeperator.setDefaultUnit(kony.flex.DP);
            flxVerticalSeperator.add();
            var flxVerticalSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxVerticalSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-33.50%",
                "isModalContainer": false,
                "skin": "sknFlxf6f6f6B",
                "top": "3dp",
                "width": "1dp",
                "zIndex": 10
            }, {}, {});
            flxVerticalSeperator2.setDefaultUnit(kony.flex.DP);
            flxVerticalSeperator2.add();
            var flxBorderTopFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderTopFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-35%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderTopFooter.setDefaultUnit(kony.flex.DP);
            flxBorderTopFooter.add();
            flxFooter.add(btnLocate, btnEnroll, btnSupport, flxVerticalSeperator, flxVerticalSeperator2, flxBorderTopFooter);
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
                "zIndex": 900
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            var customAlertPopUp = new com.kmb.common.customAlertPopUp({
                "height": "100%",
                "id": "customAlertPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlx000000op60",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200,
                "overrides": {
                    "customAlertPopUp": {
                        "isVisible": false
                    },
                    "flxCancel": {
                        "width": "100%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customAlertPopUp.flxCancel.onClick = controller.AS_FlexContainer_e8059ee060174b45b4f31a06f675663c;
            var flxBackground = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxBackground",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBackground.setDefaultUnit(kony.flex.DP);
            flxBackground.add();
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "20%",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "72%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var imgBg = new kony.ui.Image2({
                "centerX": "50%",
                "id": "imgBg",
                "isVisible": false,
                "skin": "slImage",
                "src": "swipeup.png",
                "top": "-4%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxScrollContainerAds = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": false,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "75%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollContainerAds",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "8dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollContainerAds.setDefaultUnit(kony.flex.DP);
            var flxLoadingIndicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoadingIndicator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoadingIndicator.setDefaultUnit(kony.flex.DP);
            var imgLoadingIndicator = new kony.ui.Image2({
                "height": "100%",
                "id": "imgLoadingIndicator",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "loadersmall.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoadingIndicator.add(imgLoadingIndicator);
            var flxAd1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd1.setDefaultUnit(kony.flex.DP);
            var imgAd1 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd1",
                "imageWhileDownloading": "adimage.png",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_jd291611a9c34167af6f8b4970001df9,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd1.add(imgAd1);
            var flxAd2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd2.setDefaultUnit(kony.flex.DP);
            var imgAd2 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd2",
                "imageWhileDownloading": "adimage.png",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_c3d9c988cf0d49bd8945b5190c359853,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd2.add(imgAd2);
            var flxAd3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd3.setDefaultUnit(kony.flex.DP);
            var imgAd3 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd3",
                "imageWhileDownloading": "adimage.png",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_caf642f394ec4dc6ac32e850b6890c91,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd3.add(imgAd3);
            var flxAd4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd4.setDefaultUnit(kony.flex.DP);
            var imgAd4 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd4",
                "imageWhileDownloading": "adimage.png",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_h2eb335453f64e20b873e1581f6ca411,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd4.add(imgAd4);
            var flxAd5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd5.setDefaultUnit(kony.flex.DP);
            var imgAd5 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd5",
                "imageWhileDownloading": "adimage.png",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_b6447e350f804c3198447f6ef626956c,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd5.add(imgAd5);
            flxScrollContainerAds.add(flxLoadingIndicator, flxAd1, flxAd2, flxAd3, flxAd4, flxAd5);
            var flxProgressBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxProgressBar",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "7dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressBar.setDefaultUnit(kony.flex.DP);
            var flxProgressBarButton1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "38%",
                "isModalContainer": false,
                "skin": "sknflxADADADRadius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton1.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton1.add();
            var flxProgressBarButton2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton2.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton2.add();
            var flxProgressBarButton3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton3.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton3.add();
            var flxProgressBarButton4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton4.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton4.add();
            var flxProgressBarButton5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton5.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton5.add();
            flxProgressBar.add(flxProgressBarButton1, flxProgressBarButton2, flxProgressBarButton3, flxProgressBarButton4, flxProgressBarButton5);
            var flxAdInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "78dp",
                "id": "flxAdInfo",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9Shadow",
                "top": "3dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxAdInfo.setDefaultUnit(kony.flex.DP);
            var lblHeading = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblHeading",
                "isVisible": true,
                "skin": "sknLbl424242SSP22px",
                "text": "Get Home Loans from ANZ Bank with 4.95 per annum interest rate",
                "textStyle": {},
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var rtxDetails = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxDetails",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "sknRtx0095e4SSPReg26px",
                "skin": "sknRtx727272SSP22px",
                "text": "Get Home Loans from ANZ Bank with 4.95 per <br/> annum  interest rates and get free... <a href=\"\"> <b>Learn More </b></a>",
                "top": "3dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAdInfo.add(lblHeading, rtxDetails);
            flxBottom.add(imgBg, flxScrollContainerAds, flxProgressBar, flxAdInfo);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxshadowLogin",
                "top": "18.50%",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var SecurityQuestionsComponent = new com.temenos.infinity.mfa.SecurityQuestions({
                "height": "100%",
                "id": "SecurityQuestionsComponent",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1001,
                "overrides": {
                    "SecurityQuestions": {
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
            SecurityQuestionsComponent.objectServiceName1 = "RBObjects";
            SecurityQuestionsComponent.titleBgSkin = "sknFlxf9f9f9";
            SecurityQuestionsComponent.checkboxSelectedImg = "a.png";
            SecurityQuestionsComponent.titleMsgText = "kony.mb.MFA.SecurityQuestions";
            SecurityQuestionsComponent.isPostLogin = true;
            SecurityQuestionsComponent.objectName1 = "DbxUser";
            SecurityQuestionsComponent.titleMsgSkin = "sknLbl424242SSP26px";
            SecurityQuestionsComponent.checkboxEmptyImg = "tickmarkbox.png";
            SecurityQuestionsComponent.errorMsgText = "kony.mb.MFA.ErrorQnA";
            SecurityQuestionsComponent.action = "";
            SecurityQuestionsComponent.operationName1 = "verifyLoginMFASecurityQuestions";
            SecurityQuestionsComponent.errorMsgSkin = "sknLblF54B5E26px";
            SecurityQuestionsComponent.submitBtnText = "kony.mb.Forgot.Verify";
            SecurityQuestionsComponent.enableBtnSkin = "sknBtn0095e426pxEnabled";
            SecurityQuestionsComponent.registerDeviceText = "kony.mb.devReg.remMyDevice";
            SecurityQuestionsComponent.disableBtnSkin = "sknBtna0a0a0SSPReg26px";
            SecurityQuestionsComponent.registerDeviceSkin = "sknLbl424242SSPReg30px";
            var SecurityCodeComponent = new com.temenos.infinity.mfa.SecurityCode({
                "height": "100%",
                "id": "SecurityCodeComponent",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1001,
                "overrides": {
                    "SecurityCode": {
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
            SecurityCodeComponent.objectServiceName1 = "RBObjects";
            SecurityCodeComponent.objectServiceName2 = "RBObjects";
            SecurityCodeComponent.screen1SubmitBtnEnabledSkin = "sknBtn0095e426pxEnabled";
            SecurityCodeComponent.screen2TitleBgSkin = "sknFlxf9f9f9";
            SecurityCodeComponent.screen1SubmitBtnText = "kony.mb.Messages.send";
            SecurityCodeComponent.screen2TitleText = "kony.mb.Forgot.EnterSecurityCodeTitle";
            SecurityCodeComponent.checkboxSelectedImg = "a.png";
            SecurityCodeComponent.action = "";
            SecurityCodeComponent.objectName1 = "DbxUser";
            SecurityCodeComponent.objectName2 = "DbxUser";
            SecurityCodeComponent.screen1SubmitBtnDisabledSkin = "sknBtna0a0a0SSPReg26px";
            SecurityCodeComponent.screen2TitleSkin = "sknLbl424242SSP26px";
            SecurityCodeComponent.screen2SubtitleText = "Enter Security Code";
            SecurityCodeComponent.checkboxUnselectedImg = "tickmarkbox.png";
            SecurityCodeComponent.isPostLogin = false;
            SecurityCodeComponent.operationName1 = "requestLoginMFAOTP";
            SecurityCodeComponent.operationName2 = "verifyLoginMFAOTP";
            SecurityCodeComponent.screen2SubtitleSkin = "sknLbl3e4f56SSPReg30px";
            SecurityCodeComponent.screen2DescriptionText = "Enter Secure Access sent on your 9*****8865 & p*******************@Kony.com...........................";
            SecurityCodeComponent.screen2DescriptionSkin = "sknLbl424242SSP22px26";
            SecurityCodeComponent.screen2ErrorMsgText = "Code Expired. Try again";
            SecurityCodeComponent.screen2ErrorMsgSkin = "sknLblF54B5E26px";
            SecurityCodeComponent.screen2ResendBtnText = "kony.mb.Forgot.ReSend";
            SecurityCodeComponent.screen2ResendBtnSkin = "sknBtn0095e428px";
            SecurityCodeComponent.screen2RegisterDevLblText = "kony.mb.devReg.remMyDevice";
            SecurityCodeComponent.screen2RegisterDevLblSkin = "sknLbl424242SSPReg30px";
            SecurityCodeComponent.screen2SubmitBtnText = "kony.mb.Forgot.Verify";
            SecurityCodeComponent.screen2SubmitBtnEnabledSkin = "sknBtn0095e4RoundedffffffSSP26px";
            SecurityCodeComponent.screen2SubmitBtnDisabledSkin = "sknBtna0a0a0SSPReg26px";
            this.add(imgKonyLogo, flxWelcome, flxAccountPreview, flxSelectLanguage, flxContent, login, loginPopups, flxFooter, flxPopup, customAlertPopUp, flxBackground, flxGradient, flxBottom, flxShadow, SecurityQuestionsComponent, SecurityCodeComponent);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "init": controller.AS_Form_i93d45a3a71a4e18b4c0123ddd1ff557,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_eb9b89592ac242958770cc625d8d058b(eventobject);
            },
            "skin": "sknfrmBg"
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
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NONE,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});