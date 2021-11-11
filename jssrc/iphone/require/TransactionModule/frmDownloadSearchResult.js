define("TransactionModule/frmDownloadSearchResult", function() {
    return function(controller) {
        function addWidgetsfrmDownloadSearchResult() {
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
                        "isVisible": true
                    },
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "right": "viz.val_cleared",
                        "text": "Download"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.btnRight.onClick = controller.AS_Button_hdd788db2e5c4de182844e3b4417ba6f;
            customHeader.flxBack.onClick = controller.AS_FlexContainer_c6f3a830cc4745b99c55ede67d2c9bfd;
            flxHeader.add(customHeader);
            var flxDownloadMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxDownloadMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDownloadMain.setDefaultUnit(kony.flex.DP);
            var flxDisplaySearchResults = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "495dp",
                "id": "flxDisplaySearchResults",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxDisplaySearchResults.setDefaultUnit(kony.flex.DP);
            var flxTransactionType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxTransactionType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionType.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTopType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTopType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeperatorTopType.setDefaultUnit(kony.flex.DP);
            flxSeperatorTopType.add();
            var lblTransactionTypeTitle = new kony.ui.Label({
                "id": "lblTransactionTypeTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "Transaction Type:",
                "textStyle": {},
                "top": "11dp",
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
            var lblTransactionTypeValue = new kony.ui.Label({
                "id": "lblTransactionTypeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Withdraw Cash",
                "textStyle": {},
                "top": "29dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeperatorBottomType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorBottomType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeperatorBottomType.setDefaultUnit(kony.flex.DP);
            flxSeperatorBottomType.add();
            flxTransactionType.add(flxSeperatorTopType, lblTransactionTypeTitle, lblTransactionTypeValue, flxSeperatorBottomType);
            var flxTimeRange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxTimeRange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTimeRange.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTopTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTopTime",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeperatorTopTime.setDefaultUnit(kony.flex.DP);
            flxSeperatorTopTime.add();
            var lblTimeRangeTitle = new kony.ui.Label({
                "id": "lblTimeRangeTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "Time Range:",
                "textStyle": {},
                "top": "11dp",
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
            var lblTimeRangeValue = new kony.ui.Label({
                "id": "lblTimeRangeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "01/04/2020 - 04/04/2020",
                "textStyle": {},
                "top": "29dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopyflxSeperatorBottom0a57f8c4a1b1e46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorBottom0a57f8c4a1b1e46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            CopyflxSeperatorBottom0a57f8c4a1b1e46.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorBottom0a57f8c4a1b1e46.add();
            flxTimeRange.add(flxSeperatorTopTime, lblTimeRangeTitle, lblTimeRangeValue, CopyflxSeperatorBottom0a57f8c4a1b1e46);
            var flxAmountRange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxAmountRange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmountRange.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTopAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTopAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeperatorTopAmount.setDefaultUnit(kony.flex.DP);
            flxSeperatorTopAmount.add();
            var lblAmountRangeTitle = new kony.ui.Label({
                "id": "lblAmountRangeTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "Amount Range:",
                "textStyle": {},
                "top": "11dp",
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
            var lblAmountRangeValue = new kony.ui.Label({
                "id": "lblAmountRangeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$1,500.00 - $15,000.00",
                "textStyle": {},
                "top": "29dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeperatorBottomAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorBottomAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeperatorBottomAmount.setDefaultUnit(kony.flex.DP);
            flxSeperatorBottomAmount.add();
            flxAmountRange.add(flxSeperatorTopAmount, lblAmountRangeTitle, lblAmountRangeValue, flxSeperatorBottomAmount);
            var flxCheckNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxCheckNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCheckNumber.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTopCheck = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTopCheck",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeperatorTopCheck.setDefaultUnit(kony.flex.DP);
            flxSeperatorTopCheck.add();
            var lblCheckNumberTitle = new kony.ui.Label({
                "id": "lblCheckNumberTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "Check Numbers Range:",
                "textStyle": {},
                "top": "11dp",
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
            var lblCheckNumberValue = new kony.ui.Label({
                "id": "lblCheckNumberValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "1001 - 1010",
                "textStyle": {},
                "top": "29dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeperatorBottomCheck = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorBottomCheck",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeperatorBottomCheck.setDefaultUnit(kony.flex.DP);
            flxSeperatorBottomCheck.add();
            flxCheckNumber.add(flxSeperatorTopCheck, lblCheckNumberTitle, lblCheckNumberValue, flxSeperatorBottomCheck);
            var flxSelectFormat = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSelectFormat",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectFormat.setDefaultUnit(kony.flex.DP);
            var lblSelectFormat = new kony.ui.Label({
                "centerY": "50%",
                "height": "18dp",
                "id": "lblSelectFormat",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Select Fomat",
                "textStyle": {},
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeperatorFormat = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorFormat",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            flxSeperatorFormat.setDefaultUnit(kony.flex.DP);
            flxSeperatorFormat.add();
            var imgFormat = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgFormat",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectFormat.add(lblSelectFormat, flxSeperatorFormat, imgFormat);
            var flxSegSelectFormatDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": 285,
                "id": "flxSegSelectFormatDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSegSelectFormatDetails.setDefaultUnit(kony.flex.DP);
            var segFormatDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF",
                    "lblTypeValue": "$127,912.00"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "CSV",
                    "lblTypeValue": "$127,912.00"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "Excel",
                    "lblTypeValue": "$127,912.00"
                }],
                "groupCells": false,
                "id": "segFormatDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_f4e7bcebb64047faa2b1cad45b310cfb,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxFiletype",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheck",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxFiletype": "flxFiletype",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgCheck": "imgCheck",
                    "lblTypeName": "lblTypeName",
                    "lblTypeValue": "lblTypeValue"
                },
                "width": "100%",
                "zIndex": 4
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
            flxSegSelectFormatDetails.add(segFormatDetails);
            flxDisplaySearchResults.add(flxTransactionType, flxTimeRange, flxAmountRange, flxCheckNumber, flxSelectFormat, flxSegSelectFormatDetails);
            var flxbtnDownload = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxbtnDownload",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxbtnDownload.setDefaultUnit(kony.flex.DP);
            var btnDownload = new kony.ui.Button({
                "bottom": "30dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnDownload",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": "Download Transaction",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxbtnDownload.add(btnDownload);
            flxDownloadMain.add(flxDisplaySearchResults, flxbtnDownload);
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
            this.add(flxHeader, flxDownloadMain, flxPopup);
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
            "addWidgets": addWidgetsfrmDownloadSearchResult,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmDownloadSearchResult",
            "init": controller.AS_Form_f1b3b4074e4f4fe1ae562491d4b92d56,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_cdf8b0471c434f16b29a20ba0acc20a7(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Download"
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
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NEXTPREV,
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