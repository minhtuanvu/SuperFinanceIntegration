define("SavingsPotModule/frmGoalsType", function() {
    return function(controller) {
        function addWidgetsfrmGoalsType() {
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("i18n.savingspot.yourGoal")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTitle.setDefaultUnit(kony.flex.DP);
            var lblHead = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHead",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP28px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.whySavings"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTitle.add(lblHead);
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6dp",
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
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var segGoalsType = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgArrow": "segmentarrow.png",
                    "imgTitle": "house.png",
                    "lblName": "Label",
                    "lblSeparator": "",
                    "lblTitle": "Housing"
                }, {
                    "imgArrow": "segmentarrow.png",
                    "imgTitle": "vehicle.png",
                    "lblName": "Label",
                    "lblSeparator": "",
                    "lblTitle": "Vehicle"
                }, {
                    "imgArrow": "segmentarrow.png",
                    "imgTitle": "travelgoal.png",
                    "lblName": "Label",
                    "lblSeparator": "",
                    "lblTitle": "Travel"
                }, {
                    "imgArrow": "segmentarrow.png",
                    "imgTitle": "educationgoal.png",
                    "lblName": "Label",
                    "lblSeparator": "",
                    "lblTitle": "Education"
                }, {
                    "imgArrow": "segmentarrow.png",
                    "imgTitle": "other.png",
                    "lblName": "Label",
                    "lblSeparator": "",
                    "lblTitle": "Others"
                }],
                "groupCells": false,
                "id": "segGoalsType",
                "isVisible": true,
                "left": "1dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxGoalsType",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxArrow": "flxArrow",
                    "flxCategory": "flxCategory",
                    "flxGoalsType": "flxGoalsType",
                    "flxcontent": "flxcontent",
                    "flxsep": "flxsep",
                    "imgArrow": "imgArrow",
                    "imgTitle": "imgTitle",
                    "lblName": "lblName",
                    "lblSeparator": "lblSeparator",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 8
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(segGoalsType);
            flxMainContainer.add(flxTitle, flxTypeOneShadow, flxBody);
            this.add(flxHeader, flxMainContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmGoalsType,
            "enabledForIdleTimeout": true,
            "id": "frmGoalsType",
            "init": controller.AS_Form_f399ae6093714314872e39c18cacd208,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a2334c1cbcd84a4f960e5ebdee6f04f0,
            "preShow": function(eventobject) {
                controller.AS_Form_a9e1c7d06c694b03a7c24ba7d855fa1a(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("i18n.savingspot.yourGoal")
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