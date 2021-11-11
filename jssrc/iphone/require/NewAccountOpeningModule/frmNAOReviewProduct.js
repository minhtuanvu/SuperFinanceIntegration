define("NewAccountOpeningModule/frmNAOReviewProduct", function() {
    return function(controller) {
        function addWidgetsfrmNAOReviewProduct() {
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
                "zIndex": 9
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
                "zIndex": 8,
                "overrides": {
                    "btnRight": {
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.close")
                    },
                    "customHeader": {
                        "zIndex": 8
                    },
                    "flxHeaderShadow": {
                        "isVisible": true,
                        "zIndex": 8
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.NAOReviewProduct.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxProductSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxProductSelected",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProductSelected.setDefaultUnit(kony.flex.DP);
            var lblProductsSelected = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblProductsSelected",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAOAck.ProductsSelected"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnEdit = new kony.ui.Button({
                "centerY": "50%",
                "id": "btnEdit",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknBtn00aef3SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.editNickName"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxProductSelected.add(lblProductsSelected, btnEdit);
            var segReviewProduct = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnViewDetails": "Button",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "Label",
                    "lblProductSubTitle": "Label",
                    "lblProductTitle": "Label"
                }, {
                    "btnViewDetails": "Button",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "Label",
                    "lblProductSubTitle": "Label",
                    "lblProductTitle": "Label"
                }, {
                    "btnViewDetails": "Button",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "Label",
                    "lblProductSubTitle": "Label",
                    "lblProductTitle": "Label"
                }],
                "groupCells": false,
                "id": "segReviewProduct",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSelectProduct",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnViewDetails": "btnViewDetails",
                    "flxSelectProduct": "flxSelectProduct",
                    "flxShadowUser": "flxShadowUser",
                    "imgCheckbox": "imgCheckbox",
                    "lblProductInfo": "lblProductInfo",
                    "lblProductSubTitle": "lblProductSubTitle",
                    "lblProductTitle": "lblProductTitle"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 2
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
            var flxPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "10dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxPersonalInfo.setDefaultUnit(kony.flex.DP);
            var lblPersonalInfo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPersonalInfo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAOReviewProduct.PersonalInfo"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnPersonalInfoEdit = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "slButtonGlossRed",
                "id": "btnPersonalInfoEdit",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknBtn00aef3SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.editNickName"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxPersonalInfo.add(lblPersonalInfo, btnPersonalInfoEdit);
            var segPersonalInfo = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblDetail": "Date of Birth (DOB)",
                    "lblDetailValue": "05 / 23 / 1995"
                }, {
                    "lblDetail": "Date of Birth (DOB)",
                    "lblDetailValue": "05 / 23 / 1995"
                }, {
                    "lblDetail": "Date of Birth (DOB)",
                    "lblDetailValue": "05 / 23 / 1995"
                }, {
                    "lblDetail": "Date of Birth (DOB)",
                    "lblDetailValue": "05 / 23 / 1995"
                }, {
                    "lblDetail": "Date of Birth (DOB)",
                    "lblDetailValue": "05 / 23 / 1995"
                }, {
                    "lblDetail": "Date of Birth (DOB)",
                    "lblDetailValue": "05 / 23 / 1995"
                }, {
                    "lblDetail": "Date of Birth (DOB)",
                    "lblDetailValue": "05 / 23 / 1995"
                }, {
                    "lblDetail": "Date of Birth (DOB)",
                    "lblDetailValue": "05 / 23 / 1995"
                }],
                "groupCells": false,
                "id": "segPersonalInfo",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxNAOPersonalDetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxMain": "flxMain",
                    "flxNAOPersonalDetails": "flxNAOPersonalDetails",
                    "flxSeparator": "flxSeparator",
                    "lblDetail": "lblDetail",
                    "lblDetailValue": "lblDetailValue"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 2
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
            var flxSSN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxSSN",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "10dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSSN.setDefaultUnit(kony.flex.DP);
            var lblSSN = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSSN",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAOReviewProduct.SSN"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnSSNEdit = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "slButtonGlossRed",
                "id": "btnSSNEdit",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknBtn00aef3SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.editNickName"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxSSN.add(lblSSN, btnSSNEdit);
            var segSSN = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblDetail": "Identification Number",
                    "lblDetailValue": "XX-XXX-9856 "
                }],
                "groupCells": false,
                "id": "segSSN",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxNAOPersonalDetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxMain": "flxMain",
                    "flxNAOPersonalDetails": "flxNAOPersonalDetails",
                    "flxSeparator": "flxSeparator",
                    "lblDetail": "lblDetail",
                    "lblDetailValue": "lblDetailValue"
                },
                "width": "100%",
                "zIndex": 2
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
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "210dp",
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var imgInfo = new kony.ui.Image2({
                "centerX": "50%",
                "height": "28dp",
                "id": "imgInfo",
                "isVisible": true,
                "skin": "slImage",
                "src": "info_icon.png",
                "top": "15dp",
                "width": "28dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxDescription = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxDescription",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Description"),
                "top": "50dp",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnSubmit = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnSubmit",
                "isVisible": true,
                "left": "20dp",
                "right": 20,
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.common.submit"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxDescription.add(imgInfo, rtxDescription, btnSubmit);
            flxMain.add(flxProductSelected, segReviewProduct, flxPersonalInfo, segPersonalInfo, flxSSN, segSSN, flxDescription);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "58%",
                "id": "flxGradient",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
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
                "zIndex": 201
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
                    "customPopup": {
                        "height": "100%"
                    },
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
            this.add(flxHeader, flxMain, flxGradient, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_d7a0036318614bdc8f32fcfef76d5e51,
            "metaData": {
                "title": "Close"
            },
            "id": "RBarBtnItem0"
        });
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
            "addWidgets": addWidgetsfrmNAOReviewProduct,
            "enabledForIdleTimeout": true,
            "id": "frmNAOReviewProduct",
            "init": controller.AS_Form_fb37c082f8664b52a4c0fcbccd50fbf7,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e584b821c4f8447a8a4042121ec59794(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.NAOReviewProduct.Title")
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