define("SavingsPotModule/frmEditGoalsAcknowledgement", function() {
    return function(controller) {
        function addWidgetsfrmEditGoalsAcknowledgement() {
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
                        "isVisible": false
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "text": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement"),
                        "left": "31%",
                        "right": "23%",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxFullScroll = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxFullScroll",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxFullScroll.setDefaultUnit(kony.flex.DP);
            var imgOnDone = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgOnDone",
                "isVisible": true,
                "skin": "slImage",
                "src": "confirmation_tick.png",
                "top": "20dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDescription = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl000000SSPSemiBold26px",
                "text": "Savings Goal has Updated successfully",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxAccount.setDefaultUnit(kony.flex.DP);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var lblAccQn = new kony.ui.Label({
                "height": "20dp",
                "id": "lblAccQn",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.account"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccAn = new kony.ui.Label({
                "id": "lblAccAn",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "My Principal…2343",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
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
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxAccount.add(flxSep1, lblAccQn, lblAccAn, flxSeparator);
            var flxCurrentbalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxCurrentbalance",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxCurrentbalance.setDefaultUnit(kony.flex.DP);
            var lblCurrentbalance = new kony.ui.Label({
                "height": "20dp",
                "id": "lblCurrentbalance",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Current Balance:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "130dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCurrentbalanceValue = new kony.ui.Label({
                "id": "lblCurrentbalanceValue",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$100,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxsep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxsep",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxsep.setDefaultUnit(kony.flex.DP);
            flxsep.add();
            flxCurrentbalance.add(lblCurrentbalance, lblCurrentbalanceValue, flxsep);
            var flxRemainingbalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRemainingbalance",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxRemainingbalance.setDefaultUnit(kony.flex.DP);
            var lblRemainingbalance = new kony.ui.Label({
                "height": "20dp",
                "id": "lblRemainingbalance",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Remaining Savings:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "130dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRemainingbalanceValue = new kony.ui.Label({
                "id": "lblRemainingbalanceValue",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$100,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxsep8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxsep8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxsep8.setDefaultUnit(kony.flex.DP);
            flxsep8.add();
            flxRemainingbalance.add(lblRemainingbalance, lblRemainingbalanceValue, flxsep8);
            var flxGoal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxGoal",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxGoal.setDefaultUnit(kony.flex.DP);
            var lblGoalQn = new kony.ui.Label({
                "height": "20dp",
                "id": "lblGoalQn",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.goalNameAck"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblGoalAn = new kony.ui.Label({
                "id": "lblGoalAn",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "Family Vacation",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            flxGoal.add(lblGoalQn, lblGoalAn, flxSep2);
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblAmountQn = new kony.ui.Label({
                "height": "20dp",
                "id": "lblAmountQn",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.goalAmountAck"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "130dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAmountAn = new kony.ui.Label({
                "id": "lblAmountAn",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$100,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSep3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep3.setDefaultUnit(kony.flex.DP);
            flxSep3.add();
            flxAmount.add(lblAmountQn, lblAmountAn, flxSep3);
            var flxContribution = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxContribution",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxContribution.setDefaultUnit(kony.flex.DP);
            var lblContributionQn = new kony.ui.Label({
                "height": "20dp",
                "id": "lblContributionQn",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.periodicContribution"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "180dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblContributionAn = new kony.ui.Label({
                "id": "lblContributionAn",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$1,000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSep5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep5.setDefaultUnit(kony.flex.DP);
            flxSep5.add();
            flxContribution.add(lblContributionQn, lblContributionAn, flxSep5);
            var flxPeriod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxPeriod",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxPeriod.setDefaultUnit(kony.flex.DP);
            var lblPeriodQn = new kony.ui.Label({
                "height": "20dp",
                "id": "lblPeriodQn",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.periodOfMonthsAck"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "160dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPeriodAn = new kony.ui.Label({
                "id": "lblPeriodAn",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "90",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSep4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep4.setDefaultUnit(kony.flex.DP);
            flxSep4.add();
            flxPeriod.add(lblPeriodQn, lblPeriodAn, flxSep4);
            var flxDay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxDay",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxDay.setDefaultUnit(kony.flex.DP);
            var lblDayQn = new kony.ui.Label({
                "height": "20dp",
                "id": "lblDayQn",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.frequencyDay"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "130dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDayAn = new kony.ui.Label({
                "id": "lblDayAn",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "06th of Every Month",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSep6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep6.setDefaultUnit(kony.flex.DP);
            flxSep6.add();
            flxDay.add(lblDayQn, lblDayAn, flxSep6);
            var flxDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxDate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxDate.setDefaultUnit(kony.flex.DP);
            var lblDateQn = new kony.ui.Label({
                "height": "20dp",
                "id": "lblDateQn",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Date:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDateAn = new kony.ui.Label({
                "id": "lblDateAn",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "07/16/ 2025",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSep7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep7.setDefaultUnit(kony.flex.DP);
            flxSep7.add();
            flxDate.add(lblDateQn, lblDateAn, flxSep7);
            var flxModified = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxModified",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxModified.setDefaultUnit(kony.flex.DP);
            var lblModified = new kony.ui.Label({
                "height": "20dp",
                "id": "lblModified",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Modified Date:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblModifiedvalue = new kony.ui.Label({
                "id": "lblModifiedvalue",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "07/16/ 2025",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSep9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep9.setDefaultUnit(kony.flex.DP);
            flxSep9.add();
            flxModified.add(lblModified, lblModifiedvalue, flxSep9);
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "80dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var btnFund = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "height": "40dp",
                "id": "btnFund",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn055BAF26px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.goToSavingsPot"),
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBottom.add(btnFund);
            flxFullScroll.add(imgOnDone, lblDescription, flxAccount, flxCurrentbalance, flxRemainingbalance, flxGoal, flxAmount, flxContribution, flxPeriod, flxDay, flxDate, flxModified, flxBottom);
            this.add(flxHeader, flxFullScroll);
        };
        return [{
            "addWidgets": addWidgetsfrmEditGoalsAcknowledgement,
            "enabledForIdleTimeout": true,
            "id": "frmEditGoalsAcknowledgement",
            "init": controller.AS_Form_cfc9a7c4d5a244ef96fc3de771f55c7f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_jffe3ff8048c4e1fa53b4f22eebe3ed3,
            "preShow": function(eventobject) {
                controller.AS_Form_i652cf248a1d4322987af14d41c1d290(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement")
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