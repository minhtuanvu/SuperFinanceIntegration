define("ManageCardsModule/frmManageTravelConfirmation", function() {
    return function(controller) {
        function addWidgetsfrmManageTravelConfirmation() {
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
                "zIndex": 4
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
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.cardManage.VerifyAndConfirm")
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
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxTravelDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTravelDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxTravelDetails.setDefaultUnit(kony.flex.DP);
            var flxAccountHolder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccountHolder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountHolder.setDefaultUnit(kony.flex.DP);
            var lblTravelDuration = new kony.ui.Label({
                "id": "lblTravelDuration",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.TravelDuration"),
                "textStyle": {},
                "top": "6dp",
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
            var flxToFromDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxToFromDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToFromDate.setDefaultUnit(kony.flex.DP);
            var lblFromDate = new kony.ui.Label({
                "bottom": "2dp",
                "id": "lblFromDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "05/15/2018",
                "textStyle": {},
                "top": "2dp",
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
            var lblTo = new kony.ui.Label({
                "bottom": "2dp",
                "id": "lblTo",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
                "textStyle": {},
                "top": "2dp",
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
            var lblToDate = new kony.ui.Label({
                "bottom": "2dp",
                "id": "lblToDate",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSP26px",
                "text": "06/15/2018",
                "textStyle": {},
                "top": "2dp",
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
            flxToFromDate.add(lblFromDate, lblTo, lblToDate);
            flxAccountHolder.add(lblTravelDuration, flxToFromDate);
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            var flxTravelDestination = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTravelDestination",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTravelDestination.setDefaultUnit(kony.flex.DP);
            var lblTravelDestination = new kony.ui.Label({
                "id": "lblTravelDestination",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.TravelDestinations"),
                "textStyle": {},
                "top": "6dp",
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
            var segTravelDestination = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "8dp",
                "data": [{
                    "lblDestinationValue": "Austin, United Sates of America",
                    "lblNumber": "1."
                }, {
                    "lblDestinationValue": "Austin, United Sates of America",
                    "lblNumber": "1."
                }, {
                    "lblDestinationValue": "Austin, United Sates of America",
                    "lblNumber": "1."
                }],
                "groupCells": false,
                "id": "segTravelDestination",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "20dp",
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxTravelDestination",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "25dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxTravelDestination": "flxTravelDestination",
                    "flxTravelDestinationMAin": "flxTravelDestinationMAin",
                    "lblDestinationValue": "lblDestinationValue",
                    "lblNumber": "lblNumber"
                },
                "widgetSkin": "segTransparant",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": false,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxTravelDestination.add(lblTravelDestination, segTravelDestination);
            var flxSeparator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator4.setDefaultUnit(kony.flex.DP);
            flxSeparator4.add();
            var flxSelectedCards = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSelectedCards",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectedCards.setDefaultUnit(kony.flex.DP);
            var lblSelectedCards = new kony.ui.Label({
                "id": "lblSelectedCards",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.SelectedCards"),
                "textStyle": {},
                "top": "6dp",
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
            var segSelectedCards = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "8dp",
                "data": [{
                    "lblDestinationValue": "My Credit Card - X8932",
                    "lblNumber": "1."
                }, {
                    "lblDestinationValue": "My Checkings Card - X8787",
                    "lblNumber": "2."
                }],
                "groupCells": false,
                "id": "segSelectedCards",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "20dp",
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxTravelDestination",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "25dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxTravelDestination": "flxTravelDestination",
                    "flxTravelDestinationMAin": "flxTravelDestinationMAin",
                    "lblDestinationValue": "lblDestinationValue",
                    "lblNumber": "lblNumber"
                },
                "widgetSkin": "segTransparant",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": false,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxSelectedCards.add(lblSelectedCards, segSelectedCards);
            var flxSeparator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator3.setDefaultUnit(kony.flex.DP);
            flxSeparator3.add();
            var flxContactPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxContactPhoneNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContactPhoneNumber.setDefaultUnit(kony.flex.DP);
            var lblContactPhoneNumber = new kony.ui.Label({
                "id": "lblContactPhoneNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.ContactPhoneNumber"),
                "textStyle": {},
                "top": "6dp",
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
            var lblContactPhoneNumberValue = new kony.ui.Label({
                "bottom": "6dp",
                "id": "lblContactPhoneNumberValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "129-345-452",
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
            flxContactPhoneNumber.add(lblContactPhoneNumber, lblContactPhoneNumberValue);
            var flxSeparator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator5.setDefaultUnit(kony.flex.DP);
            flxSeparator5.add();
            flxTravelDetails.add(flxAccountHolder, flxSeparator2, flxTravelDestination, flxSeparator4, flxSelectedCards, flxSeparator3, flxContactPhoneNumber, flxSeparator5);
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNote.setDefaultUnit(kony.flex.DP);
            var lblNote = new kony.ui.Label({
                "id": "lblNote",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.AdditionalNote"),
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
            var txtAreaReply = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "txtAreaBlueFocus100pr",
                "height": "50dp",
                "id": "txtAreaReply",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "numberOfVisibleLines": 3,
                "placeholder": "Enter here",
                "right": "20dp",
                "skin": "skntxtarea424242SSP100",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "18dp",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [10, 5, 0, 5],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "closeButtonText": "Done",
                "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "placeholderSkin": "skntxtAreaPlaceholdera0a0a0SSPreg26"
            });
            flxNote.add(lblNote, txtAreaReply);
            flxMain.add(flxTravelDetails, flxNote);
            var flxbtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "80dp",
                "id": "flxbtn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxbtn.setDefaultUnit(kony.flex.DP);
            var btnConfirm = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnConfirm",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.Confirm"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxbtn.add(btnConfirm);
            flxMainContainer.add(flxMain, flxbtn);
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_iae53622d8d949b49dbd20c050a10075,
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
            "action": controller.AS_BarButtonItem_e4f7ac74183e4002ba0b226a5fc907c6,
            "metaData": {
                "title": "         "
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmManageTravelConfirmation,
            "enabledForIdleTimeout": true,
            "id": "frmManageTravelConfirmation",
            "init": controller.AS_Form_bd207ecd783d45b7bedc35dbd2e2fe04,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e273d79a779748ddaead606f4a9b520e(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.cardManage.VerifyAndConfirm")
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