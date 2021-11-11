define("SavingsPotModule/frmCreateSavingsGoalFrequencyDate", function() {
    return function(controller) {
        function addWidgetsfrmCreateSavingsGoalFrequencyDate() {
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
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": "Start Date"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxScrollMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 0,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxScrollMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxScrollMain.setDefaultUnit(kony.flex.DP);
            var flxDateValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDateValue",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "18%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDateValue.setDefaultUnit(kony.flex.DP);
            flxDateValue.add();
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNote.setDefaultUnit(kony.flex.DP);
            var lblNote = new kony.ui.Label({
                "bottom": "10%",
                "id": "lblNote",
                "isVisible": false,
                "left": "6%",
                "right": "6%",
                "skin": "sknlbl424242SSPR15px",
                "text": "Set a start date in which you want to transfer. This date will be taken for every month.",
                "textStyle": {},
                "top": "25%",
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
            var lblNotes = new kony.ui.Label({
                "bottom": "10%",
                "id": "lblNotes",
                "isVisible": true,
                "left": "6%",
                "right": "6%",
                "skin": "sknlbl424242SSPR15px",
                "text": "Set a start date in which you want to transfer. This day will be taken for every 2 weeks.",
                "textStyle": {},
                "top": "25%",
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
            flxNote.add(lblNote, lblNotes);
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "8%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var customCalendar = new com.common.customCalendar({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "height": "40%",
                "id": "customCalendar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "f9f9",
                "top": "12%",
                "width": "100%",
                "overrides": {
                    "customCalendar": {
                        "bottom": 0,
                        "centerY": "viz.val_cleared",
                        "height": "40%",
                        "isVisible": true,
                        "left": "viz.val_cleared",
                        "right": 0,
                        "top": "12%",
                        "width": "100%"
                    },
                    "imgNextMonth": {
                        "src": "calenderarrowright.png"
                    },
                    "imgPreviousMonth": {
                        "src": "calenderarrowleft.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var lblSeparator = new kony.ui.Label({
                "bottom": "35%",
                "height": "1dp",
                "id": "lblSeparator",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {},
                "top": "55%",
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
            var flxSelectedValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "20%",
                "id": "flxSelectedValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "65%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectedValue.setDefaultUnit(kony.flex.DP);
            var lblEvery2Weeks = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "height": "17dp",
                "id": "lblEvery2Weeks",
                "isVisible": true,
                "left": "70dp",
                "right": "60dp",
                "skin": "sknlbl949494SSPR13px",
                "text": "Every 2 weeks on",
                "textStyle": {},
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSelectedDateValue = new kony.ui.Label({
                "bottom": "2dp",
                "centerX": "50%",
                "id": "lblSelectedDateValue",
                "isVisible": true,
                "left": "70dp",
                "right": "50dp",
                "skin": "sknLbl000000SSPSemiBold48px",
                "textStyle": {},
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblOfEveryMonth = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "height": "17dp",
                "id": "lblOfEveryMonth",
                "isVisible": false,
                "left": "70dp",
                "right": "60dp",
                "skin": "sknlbl949494SSPR13px",
                "text": "of Every Month",
                "textStyle": {},
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSelectedValue.add(lblEvery2Weeks, lblSelectedDateValue, lblOfEveryMonth);
            var btnContinue = new kony.ui.Button({
                "bottom": "2%",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "90%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxScrollMain.add(flxDateValue, flxNote, flxTypeOneShadow, customCalendar, lblSeparator, flxSelectedValue, btnContinue);
            this.add(flxHeader, flxScrollMain);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_b3ccdd45f51c444197ddc07b70d439c2,
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
            "addWidgets": addWidgetsfrmCreateSavingsGoalFrequencyDate,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmCreateSavingsGoalFrequencyDate",
            "init": controller.AS_Form_df70c4056d464c0da9469750c0e1de77,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_g3e014e2d09c48ea874e39f26f53fb0b(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.tab.transfers.startDate")
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
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});