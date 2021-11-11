define("AlertsModule/frmAlertsLanding", function() {
    return function(controller) {
        function addWidgetsfrmAlertsLanding() {
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
                    "btnRight": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": "Notifications"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxHeaderSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "54dp",
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "btnCancel": {
                        "isVisible": false
                    },
                    "customSearchbox": {
                        "height": "45dp"
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "centerY": "50%",
                        "isVisible": true,
                        "left": "viz.val_cleared",
                        "right": "10dp"
                    },
                    "flxSearchMain": {
                        "bottom": "viz.val_cleared",
                        "top": "0%"
                    },
                    "imgSearch": {
                        "left": "0%",
                        "src": "filter.png"
                    },
                    "imgSearchIcon": {
                        "centerY": "49%",
                        "height": "19dp",
                        "left": "30dp",
                        "src": "search.png",
                        "width": "20dp"
                    },
                    "tbxSearch": {
                        "bottom": "10dp",
                        "placeholder": "Search",
                        "width": "80%"
                    }
                }
            }, {
                "overrides": {
                    "imgSearchIcon": {
                        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS
                    }
                }
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxFilterdOptions = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "60dp",
                "horizontalScrollIndicator": true,
                "id": "flxFilterdOptions",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "1dp",
                "maxHeight": "60%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 13
            }, {}, {});
            flxFilterdOptions.setDefaultUnit(kony.flex.DP);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxOptions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "minWidth": "35%",
                "isModalContainer": false,
                "skin": "sknRoundBdr20BGFFFFFF",
                "top": "0dp",
                "width": "28%",
                "zIndex": 1
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var lblOption = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "49%",
                "id": "lblOption",
                "isVisible": true,
                "skin": "sknLbl424242SSPRegular26px",
                "text": "Account",
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
            var imgClose = new kony.ui.Image2({
                "centerX": "85%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgClose",
                "isVisible": true,
                "skin": "slImage",
                "src": "closeicon.png",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOptions.add(lblOption, imgClose);
            var flxOptions2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxOptions2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "minWidth": "35%",
                "isModalContainer": false,
                "skin": "sknRoundBdr20BGFFFFFF",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxOptions2.setDefaultUnit(kony.flex.DP);
            var lblOption2 = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "49%",
                "id": "lblOption2",
                "isVisible": true,
                "skin": "sknLbl424242SSPRegular26px",
                "text": "Security",
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
            var imgClose2 = new kony.ui.Image2({
                "centerX": "85%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgClose2",
                "isVisible": true,
                "skin": "slImage",
                "src": "closeicon.png",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOptions2.add(lblOption2, imgClose2);
            var flxOptions3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxOptions3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "minWidth": "35%",
                "isModalContainer": false,
                "skin": "sknRoundBdr20BGFFFFFF",
                "top": "0dp",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            flxOptions3.setDefaultUnit(kony.flex.DP);
            var lblOption3 = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "49%",
                "id": "lblOption3",
                "isVisible": true,
                "skin": "sknLbl424242SSPRegular26px",
                "text": "Transaction",
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
            var imgClose3 = new kony.ui.Image2({
                "centerX": "85%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgClose3",
                "isVisible": true,
                "skin": "slImage",
                "src": "closeicon.png",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOptions3.add(lblOption3, imgClose3);
            flxFilterdOptions.add(flxOptions, flxOptions2, flxOptions3);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "100dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var segAlertsScreen = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblAlertsHeader": "Promotional Alerts will get auto dismiss after 30 days"
                        },
                        [{
                            "imgCategory": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "lblAlertDesc": "Label",
                            "lblRemove": "Delete",
                            "lblTime": "Label",
                            "lblTitle": "Last Few Hours Left!"
                        }, {
                            "imgCategory": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "lblAlertDesc": "",
                            "lblRemove": "Delete",
                            "lblTime": "",
                            "lblTitle": ""
                        }, {
                            "imgCategory": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "lblAlertDesc": "",
                            "lblRemove": "Delete",
                            "lblTime": "",
                            "lblTitle": ""
                        }, {
                            "imgCategory": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "lblAlertDesc": "",
                            "lblRemove": "Delete",
                            "lblTime": "",
                            "lblTitle": ""
                        }, {
                            "imgCategory": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "lblAlertDesc": "",
                            "lblRemove": "Delete",
                            "lblTime": "",
                            "lblTitle": ""
                        }, {
                            "imgCategory": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "lblAlertDesc": "",
                            "lblRemove": "Delete",
                            "lblTime": "",
                            "lblTitle": ""
                        }, {
                            "imgCategory": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "lblAlertDesc": "",
                            "lblRemove": "Delete",
                            "lblTime": "",
                            "lblTitle": ""
                        }, {
                            "imgCategory": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "lblAlertDesc": "",
                            "lblRemove": "Delete",
                            "lblTime": "",
                            "lblTitle": ""
                        }, {
                            "imgCategory": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "lblAlertDesc": "",
                            "lblRemove": "Delete",
                            "lblTime": "",
                            "lblTitle": ""
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segAlertsScreen",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAlertsList",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxAlertsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": true,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAlertsHeader": "flxAlertsHeader",
                    "flxAlertsList": "flxAlertsList",
                    "flxDelete": "flxDelete",
                    "flxMain": "flxMain",
                    "imgCategory": "imgCategory",
                    "imgDelete": "imgDelete",
                    "lblAlertDesc": "lblAlertDesc",
                    "lblAlertsHeader": "lblAlertsHeader",
                    "lblRemove": "lblRemove",
                    "lblTime": "lblTime",
                    "lblTitle": "lblTitle"
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
            var flxNoAlerts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNoAlerts",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNoAlerts.setDefaultUnit(kony.flex.DP);
            var flxNoAlertText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxNoAlertText",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxNoAlertText.setDefaultUnit(kony.flex.DP);
            var imgNoAlerts = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgNoAlerts",
                "isVisible": true,
                "skin": "slImage",
                "src": "no_notifications.png",
                "top": "3dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNoAlertsText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoAlertsText",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP22px26",
                "text": "There is no alert/notification to display at this time",
                "textStyle": {},
                "top": "82dp",
                "width": "62%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoAlertText.add(imgNoAlerts, lblNoAlertsText);
            flxNoAlerts.add(flxNoAlertText);
            flxMainContainer.add(segAlertsScreen, flxNoAlerts);
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
            var flxPopup1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopup1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 201
            }, {}, {});
            flxPopup1.setDefaultUnit(kony.flex.DP);
            var flx = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flx",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffffop100BRadius10px",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flx.setDefaultUnit(kony.flex.DP);
            var lblText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblText",
                "isVisible": true,
                "skin": "sknlabel424242Regular42px",
                "text": "Are you sure you want to remove this alert.",
                "textStyle": {},
                "top": "39dp",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "50dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxButtons = new kony.ui.FlexContainer({
                "bottom": "1dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnCancel = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnSSPR4176A415px",
                "height": "40dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "6dp",
                "skin": "sknBtnSSPR4176A415px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 110
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var btnRemove = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnSSPR4176A415px",
                "height": "40dp",
                "id": "btnRemove",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknBtnSSPR4176A415px",
                "text": "Remove",
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxButtons.add(btnCancel, flxSeperator1, btnRemove);
            flx.add(lblText, flxSeperator, flxButtons);
            flxPopup1.add(flx);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxaaaaaa",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            this.add(flxHeader, flxHeaderSearchbox, flxFilterdOptions, flxMainContainer, flxPopup, flxPopup1, flxSeparator);
        };
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": false,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmAlertsLanding,
            "bounces": false,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsLanding",
            "init": controller.AS_Form_fe8adc2784bd40ca926fbefd7ad3cecf,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_gbd8438f20e4444c8afe22658b4a4a96(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Notifications"
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