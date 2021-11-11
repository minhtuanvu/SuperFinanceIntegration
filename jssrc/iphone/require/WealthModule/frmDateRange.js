define("WealthModule/frmDateRange", function() {
    return function(controller) {
        function addWidgetsfrmDateRange() {
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
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
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
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("i18n.wealth.byTimePeriod")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxPeriodSelection = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "75dp",
                "horizontalScrollIndicator": true,
                "id": "flxPeriodSelection",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPeriodSelection.setDefaultUnit(kony.flex.DP);
            var btnPeriodicDays = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "50dp",
                "id": "btnPeriodicDays",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWBtnBg003E75Border1pxFFFFFF40px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.previousDays"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [2, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnThreeMonths = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "50dp",
                "id": "btnThreeMonths",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWBtnBgFFFFFFBorder1px003E7540px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.threeMonths"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [2, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnSixMonths = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "50dp",
                "id": "btnSixMonths",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWBtnBgFFFFFFBorder1px003E7540px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.sixMonths"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [2, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnLastYear = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "50dp",
                "id": "btnLastYear",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknIWBtnBgFFFFFFBorder1px003E7540px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.lastYear"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [2, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxPeriodSelection.add(btnPeriodicDays, btnThreeMonths, btnSixMonths, btnLastYear);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "75dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75dp",
                "id": "flxDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "78dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDate.setDefaultUnit(kony.flex.DP);
            var flxFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFrom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "38%"
            }, {}, {});
            flxFrom.setDefaultUnit(kony.flex.DP);
            var lblFrom = new kony.ui.Label({
                "id": "lblFrom",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "From:",
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxFromDateValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxFromDateValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "125dp",
                "zIndex": 1
            }, {}, {});
            flxFromDateValue.setDefaultUnit(kony.flex.DP);
            var lblDayOneVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblDayOneVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "M",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDayTwoVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblDayTwoVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSPReg26px",
                "text": "M",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSlashDayVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblSlashDayVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSPReg26px",
                "text": "/",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMonthOneVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblMonthOneVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSPReg26px",
                "text": "D",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMonthTwoVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblMonthTwoVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "D",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSlashMonthVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblSlashMonthVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSPReg26px",
                "text": "/",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearOneVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearOneVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSPReg26px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearTwoVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearTwoVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearThreeVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearThreeVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearFourVal = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearFourVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxFromDateValue.add(lblDayOneVal, lblDayTwoVal, lblSlashDayVal, lblMonthOneVal, lblMonthTwoVal, lblSlashMonthVal, lblYearOneVal, lblYearTwoVal, lblYearThreeVal, lblYearFourVal);
            var flxFromSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "2dp",
                "clipBounds": true,
                "height": "3dp",
                "id": "flxFromSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxE2E2E2",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxFromSeparator.setDefaultUnit(kony.flex.DP);
            flxFromSeparator.add();
            flxFrom.add(lblFrom, flxFromDateValue, flxFromSeparator);
            var flxChevron = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxChevron",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "12%"
            }, {}, {});
            flxChevron.setDefaultUnit(kony.flex.DP);
            var imgChevron = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgChevron",
                "isVisible": true,
                "skin": "slImage",
                "src": "daterange.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxChevron.add(imgChevron);
            var flxTo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "38%"
            }, {}, {});
            flxTo.setDefaultUnit(kony.flex.DP);
            var lblTo = new kony.ui.Label({
                "id": "lblTo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "To:",
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxDateValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxDateValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "125dp",
                "zIndex": 1
            }, {}, {});
            flxDateValue.setDefaultUnit(kony.flex.DP);
            var lblDayOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblDayOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "M",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDayTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblDayTwo",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg26px",
                "text": "M",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSlashDay = new kony.ui.Label({
                "height": "100%",
                "id": "lblSlashDay",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg26px",
                "text": "/",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMonthOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblMonthOne",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg26px",
                "text": "D",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMonthTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblMonthTwo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "D",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSlashMonth = new kony.ui.Label({
                "height": "100%",
                "id": "lblSlashMonth",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg26px",
                "text": "/",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearOne",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg26px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearTwo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearThree",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblYearFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblYearFour",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "Y",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDateValue.add(lblDayOne, lblDayTwo, lblSlashDay, lblMonthOne, lblMonthTwo, lblSlashMonth, lblYearOne, lblYearTwo, lblYearThree, lblYearFour);
            var flxSeparatorDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "2dp",
                "clipBounds": true,
                "height": "3dp",
                "id": "flxSeparatorDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorDate.setDefaultUnit(kony.flex.DP);
            flxSeparatorDate.add();
            flxTo.add(lblTo, flxDateValue, flxSeparatorDate);
            var flxError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "25%",
                "id": "flxError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknlblee0005SSPReg15px",
                "text": "From date should be lesser than To date",
                "textStyle": {},
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxError.add(lblError);
            flxDate.add(flxFrom, flxChevron, flxTo, flxError);
            var wealthCalendar = new com.common.wealthCalendar({
                "height": "60%",
                "id": "wealthCalendar",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "180dp",
                "width": "100%",
                "overrides": {
                    "wealthCalendar": {
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
            flxMainContainer.add(flxPeriodSelection, flxSeparator, flxDate, wealthCalendar);
            var flxDoneWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "12%",
                "id": "flxDoneWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxDoneWrapper.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "skin": "sknBtnOnBoardingInactive",
                "text": "Done",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxDoneWrapper.add(btnContinue);
            this.add(flxHeader, flxMainContainer, flxDoneWrapper);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_gdacdd2ace7e4a1b9473603a38099501,
            "metaData": {
                "image": "backbutton_1.png"
            },
            "id": "LBarBtnItem0"
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
            "addWidgets": addWidgetsfrmDateRange,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmDateRange",
            "init": controller.AS_Form_da6bb50cd8a547368672ee4c66e3ec3f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_eb7df8d0fda841069efc102a069f0497(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("i18n.wealth.byTimePeriod")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
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
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});