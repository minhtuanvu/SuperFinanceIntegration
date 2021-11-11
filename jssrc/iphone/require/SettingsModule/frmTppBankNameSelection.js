define("SettingsModule/frmTppBankNameSelection", function() {
    return function(controller) {
        function addWidgetsfrmTppBankNameSelection() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "left": "15%",
                        "text": "TPP Bank Name",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxConsentAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75%",
                "id": "flxConsentAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%"
            }, {}, {});
            flxConsentAccounts.setDefaultUnit(kony.flex.DP);
            var flxBodyText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBodyText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "width": "100%"
            }, {}, {});
            flxBodyText.setDefaultUnit(kony.flex.DP);
            var flxExpiryDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxExpiryDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "75%"
            }, {}, {});
            flxExpiryDate.setDefaultUnit(kony.flex.DP);
            var imgCalendar = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgCalendar",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "calender.png",
                "top": "18dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblExpiryDate = new kony.ui.Label({
                "id": "lblExpiryDate",
                "isVisible": true,
                "left": "40dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Expires on 25 Nov 2020",
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDays = new kony.ui.Label({
                "id": "lblDays",
                "isVisible": true,
                "left": "200dp",
                "skin": "sknLbl04AA16SSP26px",
                "text": "(52 days left)",
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxExpiryDate.add(imgCalendar, lblExpiryDate, lblDays);
            var flxExpired = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxExpired",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "55%"
            }, {}, {});
            flxExpired.setDefaultUnit(kony.flex.DP);
            var imgCalendarExp = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgCalendarExp",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "calender.png",
                "top": "18dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblExpiredOn = new kony.ui.Label({
                "id": "lblExpiredOn",
                "isVisible": true,
                "left": "40dp",
                "skin": "sknLblEE0005SSP26px",
                "text": "Expires on 25 Nov 2020",
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxExpired.add(imgCalendarExp, lblExpiredOn);
            var flxBlockMessage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBlockMessage",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxBlockMessage.setDefaultUnit(kony.flex.DP);
            var flxImg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxImg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {}, {});
            flxImg.setDefaultUnit(kony.flex.DP);
            var imgError = new kony.ui.Image2({
                "centerX": "50%",
                "height": "33dp",
                "id": "imgError",
                "isVisible": true,
                "left": 0,
                "src": "erroricon.png",
                "top": "0dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImg.add(imgError);
            var flxError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxError",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknLblEE0005SSP26px",
                "text": "We are currently restricting Tpp Bank Name from accessing your account(s).",
                "textStyle": {},
                "top": "0dp",
                "width": "85%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxError.add(lblError);
            flxBlockMessage.add(flxImg, flxError);
            var flxAccountHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxAccountHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            flxAccountHeader.setDefaultUnit(kony.flex.DP);
            var lblSelectAccount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSelectAccount",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Tap an account below to see what is being shared.",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAccountHeader.add(lblSelectAccount);
            flxBodyText.add(flxExpiryDate, flxExpired, flxBlockMessage, flxAccountHeader);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%"
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxSegment = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "75%",
                "horizontalScrollIndicator": true,
                "id": "flxSegment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "verticalScrollIndicator": true,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSegment.setDefaultUnit(kony.flex.DP);
            var segAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgArrow": "chevron.png",
                    "lblDetails": "DE89 3704 0055 0632 0123 00",
                    "lblTitle": "Current Account"
                }, {
                    "imgArrow": "chevron.png",
                    "lblDetails": "DE89 3704 0055 0632 8760 00",
                    "lblTitle": "Savings Account"
                }],
                "groupCells": false,
                "id": "segAccounts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountTypes",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountTypes": "flxAccountTypes",
                    "flxArrow": "flxArrow",
                    "flxDetails": "flxDetails",
                    "flxSeparator1": "flxSeparator1",
                    "flxSeparator2": "flxSeparator2",
                    "imgArrow": "imgArrow",
                    "lblDetails": "lblDetails",
                    "lblTitle": "lblTitle"
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_ROW_SELECT,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxSegment.add(segAccounts);
            flxConsentAccounts.add(flxBodyText, flxSeparator, flxSegment);
            var flxRevokeButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "85dp",
                "id": "flxRevokeButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            flxRevokeButton.setDefaultUnit(kony.flex.DP);
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            var btnRevoke = new kony.ui.Button({
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "60dp",
                "id": "btnRevoke",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": "Revoke Access",
                "top": "15dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxRevokeButton.add(flxSeparator1, btnRevoke);
            var flxConfirmationPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxConfirmationPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxConfirmationPopUp.setDefaultUnit(kony.flex.DP);
            var flxMessage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "180dp",
                "id": "flxMessage",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "30dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffB",
                "top": "270dp",
                "width": "85%"
            }, {}, {});
            flxMessage.setDefaultUnit(kony.flex.DP);
            var lblMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblMsg",
                "isVisible": true,
                "left": 0,
                "skin": "sknLbl424242SSP26px",
                "text": "Are you sure want to revoke the access for the accounts you have shared with TPP Bank Name?",
                "textStyle": {},
                "top": "40dp",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxButton",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%"
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var flxNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxNo.setDefaultUnit(kony.flex.DP);
            var lblNo = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblNo",
                "isVisible": true,
                "left": "0",
                "skin": "sknlbl004B95SSPR15dp",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AlertNo"),
                "textStyle": {},
                "top": 0,
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNo.add(lblNo);
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "top": "0",
                "width": "1dp"
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            var flxYes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxYes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxYes.setDefaultUnit(kony.flex.DP);
            var lblYes = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblYes",
                "isVisible": true,
                "left": "0",
                "skin": "sknlbl004B95SSPR15dp",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AlertYes"),
                "textStyle": {},
                "top": 0,
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxYes.add(lblYes);
            flxBottom.add(flxNo, flxSep2, flxYes);
            flxButton.add(flxSep1, flxBottom);
            flxMessage.add(lblMsg, flxButton);
            flxConfirmationPopUp.add(flxMessage);
            this.add(flxHeader, flxConsentAccounts, flxRevokeButton, flxConfirmationPopUp);
        };
        return [{
            "addWidgets": addWidgetsfrmTppBankNameSelection,
            "enabledForIdleTimeout": false,
            "id": "frmTppBankNameSelection",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e3f4ed9ad31648b78e646cc700ed2339(eventobject);
            },
            "skin": "sknFrmffffff"
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
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});