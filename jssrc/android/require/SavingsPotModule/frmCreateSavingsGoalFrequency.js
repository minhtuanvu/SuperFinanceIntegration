define("SavingsPotModule/frmCreateSavingsGoalFrequency", function() {
    return function(controller) {
        function addWidgetsfrmCreateSavingsGoalFrequency() {
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
                    "lblLocateUs": {
                        "text": "Frequency"
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
                "clipBounds": false,
                "enableScrolling": true,
                "height": "60%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknTransparentBs",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNote.setDefaultUnit(kony.flex.DP);
            var lblNote = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblNote",
                "isVisible": true,
                "left": "30dp",
                "right": "30dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "How often would you like to make transfer ?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNote.add(lblNote);
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var flxMonthly = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "73dp",
                "id": "flxMonthly",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflx04A615f",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxMonthly.setDefaultUnit(kony.flex.DP);
            var lblSelectedValueMonthly = new kony.ui.Label({
                "bottom": "3dp",
                "height": "17dp",
                "id": "lblSelectedValueMonthly",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Monthly",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSelectedAmountValueMonthly = new kony.ui.Label({
                "bottom": "15dp",
                "height": "30dp",
                "id": "lblSelectedAmountValueMonthly",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242sspsemibold18px",
                "text": "$1,000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgSelectMonthly = new kony.ui.Image2({
                "height": "25dp",
                "id": "imgSelectMonthly",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "selectgoal.png",
                "top": "25dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMonthly.add(lblSelectedValueMonthly, lblSelectedAmountValueMonthly, imgSelectMonthly);
            var flxBiweekly = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "73dp",
                "id": "flxBiweekly",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxE2E9F0ffffffr8px",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxBiweekly.setDefaultUnit(kony.flex.DP);
            var lblSelectedValueBiweekly = new kony.ui.Label({
                "bottom": "3dp",
                "height": "17dp",
                "id": "lblSelectedValueBiweekly",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Biweekly",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSelectedAmoutValueBiweekly = new kony.ui.Label({
                "bottom": "15dp",
                "height": "30dp",
                "id": "lblSelectedAmoutValueBiweekly",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242sspsemibold18px",
                "text": "$500",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgSelectBiweekly = new kony.ui.Image2({
                "height": "25dp",
                "id": "imgSelectBiweekly",
                "isVisible": false,
                "right": "20dp",
                "skin": "slImage",
                "src": "selectgoal.png",
                "top": "25dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBiweekly.add(lblSelectedValueBiweekly, lblSelectedAmoutValueBiweekly, imgSelectBiweekly);
            var lblRecipientNameTitle = new kony.ui.Label({
                "id": "lblRecipientNameTitle",
                "isVisible": false,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtRecipientName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtRecipientName",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.updateNickname.sampleNickName"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxBordere3e3e3Radius4px",
                "text": "Vincent Malone",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "50dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxBordere3e3e3Radius4px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxMainContainer.add(flxNote, flxTypeOneShadow, flxMonthly, flxBiweekly, lblRecipientNameTitle, txtRecipientName);
            var btnSave = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnSave",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(flxHeader, flxMainContainer, btnSave);
        };
        return [{
            "addWidgets": addWidgetsfrmCreateSavingsGoalFrequency,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmCreateSavingsGoalFrequency",
            "init": controller.AS_Form_j457fe50e13f455aa2f85f344ac92afb,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_c4e2ee9a30f44c21bd5292d763b1873d(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Frequency"
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