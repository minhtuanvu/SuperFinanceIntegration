define("WealthModule/frmPerformance", function() {
    return function(controller) {
        function addWidgetsfrmPerformance() {
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
                    "btnRight": {
                        "isVisible": false,
                        "text": "..."
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": true,
                        "right": "20dp"
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "centerY": "50%",
                        "height": "25dp",
                        "isVisible": false,
                        "right": "0%",
                        "src": "more_header.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "centerY": "49%",
                        "text": kony.i18n.getLocalizedString("i18n.wealth.performance")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxTimePeriod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxTimePeriod",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxTimePeriod.setDefaultUnit(kony.flex.DP);
            var flxTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxTime",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTime.setDefaultUnit(kony.flex.DP);
            var flxByTimePeriod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxByTimePeriod",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "40%"
            }, {}, {});
            flxByTimePeriod.setDefaultUnit(kony.flex.DP);
            var lblTimePeriod = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTimePeriod",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.byTimePeriod"),
                "textStyle": {},
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxByTimePeriod.add(lblTimePeriod);
            var flxPreviousDays = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxPreviousDays",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "60%"
            }, {}, {});
            flxPreviousDays.setDefaultUnit(kony.flex.DP);
            var lblPreviousDays = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPreviousDays",
                "isVisible": true,
                "right": "40dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "1 Year",
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
            var imgPreviousDay = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPreviousDay",
                "isVisible": true,
                "right": "15dp",
                "skin": "slImage",
                "src": "chevron.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPreviousDays.add(lblPreviousDays, imgPreviousDay);
            flxTime.add(flxByTimePeriod, flxPreviousDays);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "4dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxTimePeriod.add(flxTime, flxSeperator);
            var flxIntialValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxIntialValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIntialValue.setDefaultUnit(kony.flex.DP);
            var lblName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.initialValue"),
                "textStyle": {},
                "top": 0,
                "width": "43%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP93pr",
                "text": "$1,500.00",
                "textStyle": {},
                "top": 0,
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxIntialValue.add(lblName, lblValue);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxNetDeposit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxNetDeposit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNetDeposit.setDefaultUnit(kony.flex.DP);
            var lblNetDeposit = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNetDeposit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.netDeposit"),
                "textStyle": {},
                "top": 0,
                "width": "43%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNetDepositVal = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNetDepositVal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP93pr",
                "text": "+$37,024.40",
                "textStyle": {},
                "top": 0,
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNetDeposit.add(lblNetDeposit, lblNetDepositVal);
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            var flxPL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxPL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPL.setDefaultUnit(kony.flex.DP);
            var lblPL = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.pl"),
                "textStyle": {},
                "top": 0,
                "width": "43%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblPLValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPLValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP93pr",
                "text": "+$1,220.74 ",
                "textStyle": {},
                "top": 0,
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxPL.add(lblPL, lblPLValue);
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            var flxFees = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxFees",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFees.setDefaultUnit(kony.flex.DP);
            var lblFees = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFees",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.feesandtax"),
                "textStyle": {},
                "top": 0,
                "width": "43%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblFeesVal = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFeesVal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP93pr",
                "text": "-$54.86",
                "textStyle": {},
                "top": 0,
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxFees.add(lblFees, lblFeesVal);
            var flxSeparator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator3.setDefaultUnit(kony.flex.DP);
            flxSeparator3.add();
            var flxCurrentValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxCurrentValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrentValue.setDefaultUnit(kony.flex.DP);
            var lblCurrentValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCurrentValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.currentValue"),
                "textStyle": {},
                "top": 0,
                "width": "43%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCurValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCurValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP93pr",
                "text": "$38,300.00",
                "textStyle": {},
                "top": 0,
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCurrentValue.add(lblCurrentValue, lblCurValue);
            var flxSeparator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "4dp",
                "id": "flxSeparator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSeparator4.setDefaultUnit(kony.flex.DP);
            flxSeparator4.add();
            var flxTimeReturn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTimeReturn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTimeReturn.setDefaultUnit(kony.flex.DP);
            var flxTimeWeightReturn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxTimeWeightReturn",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "65%"
            }, {}, {});
            flxTimeWeightReturn.setDefaultUnit(kony.flex.DP);
            var lblTimeReturn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTimeReturn",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.timeWeightedReturn"),
                "textStyle": {},
                "top": 0,
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
            var imgInfo = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgInfo",
                "isVisible": true,
                "left": "5dp",
                "skin": "slImage",
                "src": "infogrey.png",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTimeWeightReturn.add(lblTimeReturn, imgInfo);
            var lblTimeReturnVal = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTimeReturnVal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknIWlbl2F8523SemiBold15px",
                "text": "+12.24%",
                "textStyle": {},
                "top": 0,
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxTimeReturn.add(flxTimeWeightReturn, lblTimeReturnVal);
            var flxSeparator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator5.setDefaultUnit(kony.flex.DP);
            flxSeparator5.add();
            var flxMoneyReturn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxMoneyReturn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMoneyReturn.setDefaultUnit(kony.flex.DP);
            var flxMoneyWeightReturn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMoneyWeightReturn",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "65%"
            }, {}, {});
            flxMoneyWeightReturn.setDefaultUnit(kony.flex.DP);
            var lblMoneyReturn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMoneyReturn",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.moneyWeightedReturn"),
                "textStyle": {},
                "top": 0,
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
            var imgMoneyInfo = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgMoneyInfo",
                "isVisible": true,
                "left": "5dp",
                "skin": "slImage",
                "src": "infogrey.png",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMoneyWeightReturn.add(lblMoneyReturn, imgMoneyInfo);
            var lblMoneyReturnVal = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMoneyReturnVal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknIWlbl2F8523SemiBold15px",
                "text": "+11.12%",
                "textStyle": {},
                "top": 0,
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxMoneyReturn.add(flxMoneyWeightReturn, lblMoneyReturnVal);
            var flxSeparator6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "4dp",
                "id": "flxSeparator6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSeparator6.setDefaultUnit(kony.flex.DP);
            flxSeparator6.add();
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "15dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxTabBg767680",
                "top": "25dp",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var flxChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxChart",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "52%"
            }, {}, {});
            flxChart.setDefaultUnit(kony.flex.DP);
            var btnChart = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknBtnFFFFFFBdr10px",
                "height": "25dp",
                "id": "btnChart",
                "isVisible": true,
                "left": 0,
                "skin": "sknBtnFFFFFFBdr10px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.chart"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxChart.add(btnChart);
            var flxMonthlyOverview = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxMonthlyOverview",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": "2dp",
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "52%"
            }, {}, {});
            flxMonthlyOverview.setDefaultUnit(kony.flex.DP);
            var btnMonthlyOverview = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknBtnFFFFFFBdr10px",
                "height": "25dp",
                "id": "btnMonthlyOverview",
                "isVisible": true,
                "left": 0,
                "skin": "sknbtn000000SSPSemiBold15px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.monthlyOverview"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxMonthlyOverview.add(btnMonthlyOverview);
            flxButton.add(flxChart, flxMonthlyOverview);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "440dp",
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxChartDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "92%",
                "horizontalScrollIndicator": true,
                "id": "flxChartDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "25dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxChartDetails.setDefaultUnit(kony.flex.DP);
            var brwPerformanceChart = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "280dp",
                "id": "brwPerformanceChart",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "wealthPerformanceChart/wealthPerformanceChart.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var flxPortfolio = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxPortfolio",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPortfolio.setDefaultUnit(kony.flex.DP);
            var imgPortfolio = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgPortfolio",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "portfolio.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblPortfolio = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPortfolio",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.portfolio"),
                "textStyle": {},
                "top": 0,
                "width": "43%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxPortfolio.add(imgPortfolio, lblPortfolio);
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            var flxBenchmark = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxBenchmark",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenchmark.setDefaultUnit(kony.flex.DP);
            var imgBenchmark = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgBenchmark",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "benchmark.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBenchmark = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBenchmark",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.benchmark\:"),
                "textStyle": {},
                "top": 0,
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxBenchmarkVal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBenchmarkVal",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%"
            }, {}, {});
            flxBenchmarkVal.setDefaultUnit(kony.flex.DP);
            var lblBenchmarkValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBenchmarkValue",
                "isVisible": true,
                "right": "45dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "S&P 500",
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
            var imgChevron = new kony.ui.Image2({
                "centerY": "50%",
                "height": "19dp",
                "id": "imgChevron",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "width": "19dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBenchmarkVal.add(lblBenchmarkValue, imgChevron);
            flxBenchmark.add(imgBenchmark, lblBenchmark, flxBenchmarkVal);
            var flxSep3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep3.setDefaultUnit(kony.flex.DP);
            flxSep3.add();
            flxChartDetails.add(brwPerformanceChart, flxSep1, flxPortfolio, flxSep2, flxBenchmark, flxSep3);
            var flxMonthlyOverviewDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "92%",
                "horizontalScrollIndicator": true,
                "id": "flxMonthlyOverviewDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "25dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxMonthlyOverviewDetails.setDefaultUnit(kony.flex.DP);
            var flxTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "5dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxTitle.setDefaultUnit(kony.flex.DP);
            var flxSep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "3dp",
                "id": "flxSep",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep.setDefaultUnit(kony.flex.DP);
            flxSep.add();
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "94%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var lblDate = new kony.ui.Label({
                "centerY": "50.00%",
                "id": "lblDate",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 2,
                "maxWidth": "30%",
                "skin": "sknlbl424242SectionHeader",
                "text": kony.i18n.getLocalizedString("kony.mb.transfers.Date"),
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblPortfolioReturn = new kony.ui.Label({
                "centerY": "50.00%",
                "id": "lblPortfolioReturn",
                "isVisible": true,
                "left": "0",
                "maxWidth": "30%",
                "skin": "sknlbl424242SectionHeader",
                "text": kony.i18n.getLocalizedString("i18n.wealth.portfolioReturn"),
                "textStyle": {},
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblBenchmarkReturn = new kony.ui.Label({
                "centerY": "50.00%",
                "id": "lblBenchmarkReturn",
                "isVisible": true,
                "left": "0",
                "maxWidth": "20%",
                "skin": "sknlbl424242SectionHeader",
                "text": kony.i18n.getLocalizedString("i18n.wealth.benchmarkReturn"),
                "textStyle": {},
                "width": "37%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxContent.add(lblDate, lblPortfolioReturn, lblBenchmarkReturn);
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxTitle.add(flxSep, flxContent, flxSeperator1);
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAmount": "+14.25%",
                    "lblDate": "10/31/2020",
                    "lblPercentage": "+14.25%",
                    "lblProfitLoss": "+15.45 (+14.8%)"
                }, {
                    "lblAmount": "+14.25%",
                    "lblDate": "10/31/2020",
                    "lblPercentage": "+14.25%",
                    "lblProfitLoss": "+15.45 (+14.8%)"
                }, {
                    "lblAmount": "+14.25%",
                    "lblDate": "10/31/2020",
                    "lblPercentage": "+14.25%",
                    "lblProfitLoss": "+15.45 (+14.8%)"
                }, {
                    "lblAmount": "+14.25%",
                    "lblDate": "10/31/2020",
                    "lblPercentage": "+14.25%",
                    "lblProfitLoss": "+15.45 (+14.8%)"
                }, {
                    "lblAmount": "+14.25%",
                    "lblDate": "10/31/2020",
                    "lblPercentage": "+14.25%",
                    "lblProfitLoss": "+15.45 (+14.8%)"
                }],
                "groupCells": false,
                "id": "segDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxWealthOverview",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": 0,
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxContent": "flxContent",
                    "flxPortfolio": "flxPortfolio",
                    "flxShortSeperator": "flxShortSeperator",
                    "flxWealthOverview": "flxWealthOverview",
                    "lblAmount": "lblAmount",
                    "lblDate": "lblDate",
                    "lblPercentage": "lblPercentage",
                    "lblProfitLoss": "lblProfitLoss"
                },
                "width": "100%",
                "zIndex": 100
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
            var btnLoadMore = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "50dp",
                "id": "btnLoadMore",
                "isVisible": true,
                "skin": "sknIWBtnBgFFFFFFBorder1px003E7540px",
                "text": "Load More",
                "top": "5dp",
                "width": "90%",
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxMonthlyOverviewDetails.add(flxTitle, segDetails, btnLoadMore);
            flxDetails.add(flxChartDetails, flxMonthlyOverviewDetails);
            flxMainContainer.add(flxTimePeriod, flxIntialValue, flxSeparator, flxNetDeposit, flxSeparator1, flxPL, flxSeparator2, flxFees, flxSeparator3, flxCurrentValue, flxSeparator4, flxTimeReturn, flxSeparator5, flxMoneyReturn, flxSeparator6, flxButton, flxDetails);
            var flxAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "100%",
                "id": "flxAdditionalOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxPerformAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
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
            var flxPerformance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "id": "flxPerformance",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPerformance.setDefaultUnit(kony.flex.DP);
            var lblPerformance = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPerformance",
                "isVisible": true,
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "Time-Weighted Return",
                "textStyle": {},
                "top": "10dp",
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
            var lblDetails = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDetails",
                "isVisible": true,
                "skin": "sknlbl424242SSPR15px",
                "text": "Return calculation that eliminates the effects on growth rates created by any inflows or outflows of cash. The time-weighted return breaks up the return into separate intervals based on whether cash was added or withdrawn.",
                "textStyle": {},
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            lblSeparator.setDefaultUnit(kony.flex.DP);
            lblSeparator.add();
            flxPerformance.add(lblPerformance, lblDetails, lblSeparator);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "40dp",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxClose.setDefaultUnit(kony.flex.DP);
            var lblClose = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50.00%",
                "id": "lblClose",
                "isVisible": true,
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "Close",
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
            flxClose.add(lblClose);
            flxPerformAdditionalOptions.add(flxPerformance, flxClose);
            flxAdditionalOptions.add(flxPerformAdditionalOptions);
            this.add(flxHeader, flxMainContainer, flxAdditionalOptions);
        };
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
            "addWidgets": addWidgetsfrmPerformance,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmPerformance",
            "init": controller.AS_Form_d62bf75fa41747a8a0401bc053c8f1fe,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_acc61c362bb64b5689dd87de65f50b9f(eventobject);
            },
            "skin": "sknFrmTransparent",
            "title": kony.i18n.getLocalizedString("i18n.wealth.performance")
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
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});