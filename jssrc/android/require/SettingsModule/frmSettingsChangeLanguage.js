define("SettingsModule/frmSettingsChangeLanguage", function() {
    return function(controller) {
        function addWidgetsfrmSettingsChangeLanguage() {
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
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
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
                    "flxBack": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": "Language"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_h2c1ef5077ee4a0f960236cc1e4b0499;
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var segLanguages = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "60dp",
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgFlag": "imagedrag.png",
                    "lblLanguage": "Label",
                    "lblSeparator": "Label"
                }],
                "groupCells": false,
                "id": "segLanguages",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_g226bea62205492ca74dc32281bda0dd,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxLanguage",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxLanguage": "flxLanguage",
                    "imgCheckbox": "imgCheckbox",
                    "imgFlag": "imgFlag",
                    "lblLanguage": "lblLanguage",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnUpdateLanguage = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnUpdateLanguage",
                "isVisible": true,
                "onClick": controller.AS_Button_f6ee593c57ea4f078c6a5f8b34b78fd6,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.updateLanguage"),
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMain.add(segLanguages, btnUpdateLanguage);
            this.add(flxHeader, flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSettingsChangeLanguage,
            "enabledForIdleTimeout": true,
            "id": "frmSettingsChangeLanguage",
            "init": controller.AS_Form_b187292595fd4e1b97140267cb33281e,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_bf3674be2ce34dc389ff795702bceb2b(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Language"
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