define("WealthModule/frmReport", function() {
    return function(controller) {
        function addWidgetsfrmReport() {
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
                "zIndex": 1
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
                    "customHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "isVisible": true,
                        "text": "Report"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxToggle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "56dp",
                "width": "100%"
            }, {}, {});
            flxToggle.setDefaultUnit(kony.flex.DP);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxTabBg767680",
                "top": "10dp",
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var flxReport = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxReport",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "50%"
            }, {}, {});
            flxReport.setDefaultUnit(kony.flex.DP);
            var btnTglReport = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknBtnFFFFFFSSPSB15px",
                "height": "25dp",
                "id": "btnTglReport",
                "isVisible": true,
                "left": 0,
                "skin": "sknBtnFFFFFFSSPSB15px",
                "text": "Generate Report",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReport.add(btnTglReport);
            var lblCommon = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCommon",
                "isVisible": false,
                "left": "35%",
                "skin": "sknlblFFFFFFSSPSB15px1",
                "text": "Generate Report",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxStatement = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxStatement",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": "2dp",
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "50%"
            }, {}, {});
            flxStatement.setDefaultUnit(kony.flex.DP);
            var btnTglStatement = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknBtnFFFFFFSSPSB15px",
                "height": "25dp",
                "id": "btnTglStatement",
                "isVisible": true,
                "left": 0,
                "skin": "sknbtn000000SSPSB15px",
                "text": "Download Statement",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStatement.add(btnTglStatement);
            flxButtons.add(flxReport, lblCommon, flxStatement);
            var flxTopSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "3%",
                "id": "flxTopSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTopSeperator.setDefaultUnit(kony.flex.DP);
            flxTopSeperator.add();
            flxToggle.add(flxButtons, flxTopSeperator);
            var flxReportOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxReportOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "106dp",
                "width": "100%"
            }, {}, {});
            flxReportOptions.setDefaultUnit(kony.flex.DP);
            var flxTimePeriod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
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
                "text": "By Time Period",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "right": "45dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.previous30Days"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgPreviousDay = new kony.ui.Image2({
                "centerY": "50%",
                "height": "19dp",
                "id": "imgPreviousDay",
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
            flxPreviousDays.add(lblPreviousDays, imgPreviousDay);
            flxTime.add(flxByTimePeriod, flxPreviousDays);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "3%",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxTimePeriod.add(flxTime, flxSeperator);
            var flxReportType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxReportType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxReportType.setDefaultUnit(kony.flex.DP);
            var flxType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxType.setDefaultUnit(kony.flex.DP);
            var flxRepType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRepType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "40%"
            }, {}, {});
            flxRepType.setDefaultUnit(kony.flex.DP);
            var lblReportType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReportType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": "Report Type:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRepType.add(lblReportType);
            var flxAccountSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxAccountSummary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "60%"
            }, {}, {});
            flxAccountSummary.setDefaultUnit(kony.flex.DP);
            var lblAccSummary = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccSummary",
                "isVisible": true,
                "right": "45dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "Account Summary",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgAccSummary = new kony.ui.Image2({
                "centerY": "50%",
                "height": "19dp",
                "id": "imgAccSummary",
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
            flxAccountSummary.add(lblAccSummary, imgAccSummary);
            flxType.add(flxRepType, flxAccountSummary);
            var flxSeperatorTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "3%",
                "id": "flxSeperatorTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperatorTwo.setDefaultUnit(kony.flex.DP);
            flxSeperatorTwo.add();
            flxReportType.add(flxType, flxSeperatorTwo);
            var segDownload = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgDownload": "download.png",
                    "imgPdfIcon": "pdf_image.png",
                    "lblType": "Label"
                }, {
                    "imgDownload": "download.png",
                    "imgPdfIcon": "pdf_image.png",
                    "lblType": "Label"
                }, {
                    "imgDownload": "download.png",
                    "imgPdfIcon": "pdf_image.png",
                    "lblType": "Label"
                }, {
                    "imgDownload": "download.png",
                    "imgPdfIcon": "pdf_image.png",
                    "lblType": "Label"
                }],
                "groupCells": false,
                "id": "segDownload",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxDownloadOptions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxContent": "flxContent",
                    "flxDownloadOptions": "flxDownloadOptions",
                    "imgDownload": "imgDownload",
                    "imgPdfIcon": "imgPdfIcon",
                    "lblType": "lblType"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReportOptions.add(flxTimePeriod, flxReportType, segDownload);
            var flxBtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "80dp",
                "id": "flxBtn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%"
            }, {}, {});
            flxBtn.setDefaultUnit(kony.flex.DP);
            var btnGetReport = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnGetReport",
                "isVisible": true,
                "left": "5%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Get Report",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBtn.add(btnGetReport);
            var socialshare = new com.konymp.socialshare({
                "height": "0%",
                "id": "socialshare",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "0%",
                "overrides": {
                    "socialshare": {
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
            socialshare.title = "Kony";
            this.add(flxHeader, flxToggle, flxReportOptions, flxBtn, socialshare);
        };
        return [{
            "addWidgets": addWidgetsfrmReport,
            "enabledForIdleTimeout": true,
            "id": "frmReport",
            "init": controller.AS_Form_j5521ac18b434bc5be6411d6589c502a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": "Report"
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