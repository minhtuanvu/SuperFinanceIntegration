define("WealthModule/frmReportType", function() {
    return function(controller) {
        function addWidgetsfrmReportType() {
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
                        "text": "Report Type"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxReportOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxReportOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%"
            }, {}, {});
            flxReportOptions.setDefaultUnit(kony.flex.DP);
            var segReportType = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }, {
                    "imgCheck": "radiobtn.png",
                    "lblTypeName": "PDF"
                }],
                "groupCells": false,
                "id": "segReportType",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxReportType",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRadio": "flxRadio",
                    "flxReportType": "flxReportType",
                    "flxSeparator": "flxSeparator",
                    "imgCheck": "imgCheck",
                    "lblTypeName": "lblTypeName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReportOptions.add(segReportType);
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
            var btnDone = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnDone",
                "isVisible": true,
                "left": "5%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Done",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBtn.add(btnDone);
            this.add(flxHeader, flxReportOptions, flxBtn);
        };
        return [{
            "addWidgets": addWidgetsfrmReportType,
            "enabledForIdleTimeout": true,
            "id": "frmReportType",
            "init": controller.AS_Form_b6ade7cbd0494a92b5b2af6be4823885,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": "Report Type"
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