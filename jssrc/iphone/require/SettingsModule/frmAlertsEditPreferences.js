define("SettingsModule/frmAlertsEditPreferences", function() {
    return function(controller) {
        function addWidgetsfrmAlertsEditPreferences() {
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
                "zIndex": 2
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.Alerts.SecurityAlerts")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexContainer({
                "bottom": 0,
                "clipBounds": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxSubHeaderText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSubHeaderText",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSubHeaderText.setDefaultUnit(kony.flex.DP);
            var lblBodyTxt = new kony.ui.Label({
                "centerX": "50%",
                "height": "20dp",
                "id": "lblBodyTxt",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Edit alert preferences for selected account",
                "textStyle": {},
                "top": "15dp",
                "width": "320dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxHeaderSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxHeaderSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderSeperator.setDefaultUnit(kony.flex.DP);
            flxHeaderSeperator.add();
            flxSubHeaderText.add(lblBodyTxt, flxHeaderSeperator);
            var flxBodyTxt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90dp",
                "id": "flxBodyTxt",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyTxt.setDefaultUnit(kony.flex.DP);
            var flxEnableAlertsMainSwitch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxEnableAlertsMainSwitch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlxF6F6F6BgRadius29px",
                "top": "10dp",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxEnableAlertsMainSwitch.setDefaultUnit(kony.flex.DP);
            var switchReceiveAlerts = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchReceiveAlerts",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "top": "15dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "nativeThumbLook": true
            });
            var lblEnableAlertsMain = new kony.ui.Label({
                "centerY": "50%",
                "height": "40dp",
                "id": "lblEnableAlertsMain",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSPBold30px",
                "text": kony.i18n.getLocalizedString("kony.mb.alerts.enableDisableAllAlerts"),
                "textStyle": {},
                "top": "19dp",
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
            flxEnableAlertsMainSwitch.add(switchReceiveAlerts, lblEnableAlertsMain);
            var flxInlineMessage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxInlineMessage",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInlineMessage.setDefaultUnit(kony.flex.DP);
            var lblInlineMessage = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblInlineMessage",
                "isVisible": true,
                "skin": "sknLblF54B5E22px",
                "text": kony.i18n.getLocalizedString("kony.mb.alerts.pleaseEnableAllAlertsMessage"),
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
            flxInlineMessage.add(lblInlineMessage);
            flxBodyTxt.add(flxEnableAlertsMainSwitch, flxInlineMessage);
            var flxInlineError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxInlineError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInlineError.setDefaultUnit(kony.flex.DP);
            flxInlineError.add();
            var flxsegments = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "75%",
                "horizontalScrollIndicator": true,
                "id": "flxsegments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "2dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxsegments.setDefaultUnit(kony.flex.DP);
            var flxEnable = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxEnable",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Radius0px",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnable.setDefaultUnit(kony.flex.DP);
            var flxPreferencesShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxPreferencesShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPreferencesShadow.setDefaultUnit(kony.flex.DP);
            flxPreferencesShadow.add();
            var lblReceiveAlerts = new kony.ui.Label({
                "centerY": "51%",
                "height": "40dp",
                "id": "lblReceiveAlerts",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg33px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.EditAlertChannelFrequencyPreferences"),
                "textStyle": {},
                "top": "19dp",
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
            flxEnable.add(flxPreferencesShadow, lblReceiveAlerts);
            var flxAlertChannelSwitches = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAlertChannelSwitches",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAlertChannelSwitches.setDefaultUnit(kony.flex.DP);
            flxAlertChannelSwitches.add();
            var flxChannelRowDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxChannelRowDummy",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChannelRowDummy.setDefaultUnit(kony.flex.DP);
            var flxAlertSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxAlertSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAlertSeperator.setDefaultUnit(kony.flex.DP);
            flxAlertSeperator.add();
            var switchRow = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchRow",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "top": "28dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "nativeThumbLook": true
            });
            var switchDisabled = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchDisabled",
                "isVisible": false,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 1,
                "skin": "sknSwitchDisabled",
                "top": "28dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblData = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblData",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Label",
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
            flxChannelRowDummy.add(flxAlertSeperator, switchRow, switchDisabled, lblData);
            var flxAlertFrequencyHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAlertFrequencyHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAlertFrequencyHeader.setDefaultUnit(kony.flex.DP);
            var flxFrequencyShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxFrequencyShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFrequencyShadow.setDefaultUnit(kony.flex.DP);
            flxFrequencyShadow.add();
            var lblEditFrequencyHeader = new kony.ui.Label({
                "centerY": "51%",
                "id": "lblEditFrequencyHeader",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg33px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.EditFrequencyPreferences"),
                "textStyle": {},
                "width": "320dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxFrequencySeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxFrequencySeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxFrequencySeperator.setDefaultUnit(kony.flex.DP);
            flxFrequencySeperator.add();
            flxAlertFrequencyHeader.add(flxFrequencyShadow, lblEditFrequencyHeader, flxFrequencySeperator);
            var flxAlertFrequency = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAlertFrequency",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxAlertFrequency.setDefaultUnit(kony.flex.DP);
            var flxAlertFrequencySeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxAlertFrequencySeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAlertFrequencySeperator.setDefaultUnit(kony.flex.DP);
            flxAlertFrequencySeperator.add();
            var lblFrequencyName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFrequencyName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Frequency",
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
            var lblAlertFrequencyValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAlertFrequencyValue",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Weekly",
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
            var flxFreqImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxFreqImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "28dp",
                "width": 50,
                "zIndex": 1
            }, {}, {});
            flxFreqImage.setDefaultUnit(kony.flex.DP);
            var imgFreqArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "23dp",
                "id": "imgFreqArrow",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "chevron_1.png",
                "top": "28dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFreqImage.add(imgFreqArrow);
            var flxAlertFreqSeperatorBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxAlertFreqSeperatorBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAlertFreqSeperatorBottom.setDefaultUnit(kony.flex.DP);
            flxAlertFreqSeperatorBottom.add();
            flxAlertFrequency.add(flxAlertFrequencySeperator, lblFrequencyName, lblAlertFrequencyValue, flxFreqImage, flxAlertFreqSeperatorBottom);
            var flxGroupsAlertsSegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxGroupsAlertsSegment",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGroupsAlertsSegment.setDefaultUnit(kony.flex.DP);
            var segGroupsAlerts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "20dp",
                "data": [
                    [{
                            "imgUpArrow": "arrowup.png",
                            "lblHeader": "Pending Transactions"
                        },
                        [{
                            "imgArrow": "chevron_1.png",
                            "lblName": "Label",
                            "lblValue": "500.00"
                        }, {
                            "imgArrow": "chevron_1.png",
                            "lblName": "Label",
                            "lblValue": "500.00"
                        }, {
                            "imgArrow": "chevron_1.png",
                            "lblName": "Label",
                            "lblValue": "500.00"
                        }]
                    ],
                    [{
                            "imgUpArrow": "arrowup.png",
                            "lblHeader": "Pending Transactions"
                        },
                        [{
                            "imgArrow": "chevron_1.png",
                            "lblName": "Label",
                            "lblValue": "500.00"
                        }, {
                            "imgArrow": "chevron_1.png",
                            "lblName": "Label",
                            "lblValue": "500.00"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segGroupsAlerts",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAlertsListingRow",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransactionListHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAlertsContainer": "flxAlertsContainer",
                    "flxAlertsListingRow": "flxAlertsListingRow",
                    "flxImage": "flxImage",
                    "flxSeperator": "flxSeperator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransactionListHeader": "flxTransactionListHeader",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgArrow": "imgArrow",
                    "imgUpArrow": "imgUpArrow",
                    "lblHeader": "lblHeader",
                    "lblName": "lblName",
                    "lblValue": "lblValue"
                },
                "width": "100%"
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
            flxGroupsAlertsSegment.add(segGroupsAlerts);
            var flxSetAlertAttributeValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSetAlertAttributeValue",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSetAlertAttributeValue.setDefaultUnit(kony.flex.DP);
            var lblAlertMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAlertMessage",
                "isVisible": true,
                "skin": "sknLbl424242SSPLight18px",
                "text": "You will get an alert if your balance is less than this amount",
                "textStyle": {},
                "top": "20dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "15dp",
                "clipBounds": true,
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblAmountTitle = new kony.ui.Label({
                "id": "lblAmountTitle",
                "isVisible": true,
                "left": "19dp",
                "skin": "sknLbl727272SSPR15px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
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
            var flxAmountWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAmountWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "25dp",
                "zIndex": 1
            }, {}, {});
            flxAmountWrapper.setDefaultUnit(kony.flex.DP);
            var lblDollar = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollar",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
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
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": "0.00",
                "textStyle": {},
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
            flxAmountWrapper.add(lblDollar, lblAmount);
            flxAmount.add(lblAmountTitle, flxAmountWrapper);
            var flxDaysValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "15dp",
                "clipBounds": true,
                "id": "flxDaysValue",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDaysValue.setDefaultUnit(kony.flex.DP);
            var lblDaysHeading = new kony.ui.Label({
                "id": "lblDaysHeading",
                "isVisible": true,
                "left": "19dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Duration",
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
            var flxDaysWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxDaysWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "25dp",
                "zIndex": 1
            }, {}, {});
            flxDaysWrapper.setDefaultUnit(kony.flex.DP);
            var lblDaysValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDaysValue",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": "0",
                "textStyle": {},
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
            flxDaysWrapper.add(lblDaysValue);
            flxDaysValue.add(lblDaysHeading, flxDaysWrapper);
            var flxToValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 20,
                "clipBounds": true,
                "id": "flxToValue",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToValue.setDefaultUnit(kony.flex.DP);
            var lblToValue = new kony.ui.Label({
                "id": "lblToValue",
                "isVisible": true,
                "left": "19dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "To",
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
            var flxToValueWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxToValueWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "25dp",
                "zIndex": 1
            }, {}, {});
            flxToValueWrapper.setDefaultUnit(kony.flex.DP);
            var lblDollarToValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollarToValue",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
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
            var lblToValue1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblToValue1",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": "0.00",
                "textStyle": {},
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
            flxToValueWrapper.add(lblDollarToValue, lblToValue1);
            flxToValue.add(lblToValue, flxToValueWrapper);
            flxSetAlertAttributeValue.add(lblAlertMessage, flxAmount, flxDaysValue, flxToValue);
            flxsegments.add(flxEnable, flxAlertChannelSwitches, flxChannelRowDummy, flxAlertFrequencyHeader, flxAlertFrequency, flxGroupsAlertsSegment, flxSetAlertAttributeValue);
            var flxDisableAlertsGreyOut = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "82%",
                "id": "flxDisableAlertsGreyOut",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFF80op",
                "top": "-75%",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxDisableAlertsGreyOut.setDefaultUnit(kony.flex.DP);
            flxDisableAlertsGreyOut.add();
            var flxDisableAlerts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDisableAlerts",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "150dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxDisableAlerts.setDefaultUnit(kony.flex.DP);
            flxDisableAlerts.add();
            flxBody.add(flxSubHeaderText, flxBodyTxt, flxInlineError, flxsegments, flxDisableAlertsGreyOut, flxDisableAlerts);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "34%",
                "id": "flxKeypad",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxF5F6FB",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxKeypad.setDefaultUnit(kony.flex.DP);
            var flxKeyPadSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxKeyPadSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxKeyPadSeperator.setDefaultUnit(kony.flex.DP);
            flxKeyPadSeperator.add();
            var flxDone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxDone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDone.setDefaultUnit(kony.flex.DP);
            var lblDone = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDone",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknlblDone",
                "text": "DONE",
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
            flxDone.add(lblDone);
            var btnDot = new kony.ui.Button({
                "bottom": "0dp",
                "height": "24%",
                "id": "btnDot",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknBtnKeybad",
                "text": ".",
                "width": "33%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var keypad = new com.kmb.common.keypad({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "height": "80%",
                "id": "keypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "overrides": {
                    "btnDecimalSeperator": {
                        "isVisible": false
                    },
                    "imgClear": {
                        "src": "cancelkeypad.png"
                    },
                    "imgClearKeypad": {
                        "src": "transparentbox.png"
                    },
                    "keypad": {
                        "bottom": "0%",
                        "height": "80%",
                        "top": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxKeypad.add(flxKeyPadSeperator, flxDone, btnDot, keypad);
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
                "overrides": {
                    "imgPopup": {
                        "src": "imagedrag.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxBody, flxKeypad, flxPopup);
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
            "addWidgets": addWidgetsfrmAlertsEditPreferences,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsEditPreferences",
            "init": controller.AS_Form_b63268adb8e74bc79ebee9f263a6d1cb,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_ie4ed10e16f94263b08484b853404151(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Alerts.SecurityAlerts")
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
            "headerOverlap": true,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "inTransitionConfig": {
                "transitionDirection": "none",
                "transitionDuration": 0.3,
                "transitionEffect": "none"
            },
            "needsIndicatorDuringPostShow": false,
            "outTransitionConfig": {
                "transitionDirection": "none",
                "transitionDuration": 0.3,
                "transitionEffect": "none"
            },
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