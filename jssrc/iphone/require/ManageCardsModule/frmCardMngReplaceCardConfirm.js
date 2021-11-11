define("ManageCardsModule/frmCardMngReplaceCardConfirm", function() {
    return function(controller) {
        function addWidgetsfrmCardMngReplaceCardConfirm() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "80dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var lblSelectAddress = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblSelectAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.SelectAddressColon"),
                "textStyle": {},
                "top": "20dp",
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
            var flxSeperatorWrapper1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorWrapper1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperatorWrapper1.setDefaultUnit(kony.flex.DP);
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxSeperatorWrapper1.add(flxSeperator1);
            var flxAddress1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAddress1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddress1.setDefaultUnit(kony.flex.DP);
            var flxRadioAddress1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxRadioAddress1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "13dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxRadioAddress1.setDefaultUnit(kony.flex.DP);
            var imgRadioAddress1 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgRadioAddress1",
                "isVisible": true,
                "skin": "slImage",
                "src": "radiobtn.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRadioAddress1.add(imgRadioAddress1);
            var lblAddress1 = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblAddress1",
                "isVisible": true,
                "left": "20dp",
                "right": "80dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAddress1.add(flxRadioAddress1, lblAddress1);
            var flxSeperatorWrapper2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorWrapper2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperatorWrapper2.setDefaultUnit(kony.flex.DP);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            flxSeperatorWrapper2.add(flxSeperator2);
            var flxAddress2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAddress2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddress2.setDefaultUnit(kony.flex.DP);
            var flxRadioAddress2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxRadioAddress2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "13dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxRadioAddress2.setDefaultUnit(kony.flex.DP);
            var imgRadioAddress2 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgRadioAddress2",
                "isVisible": true,
                "skin": "slImage",
                "src": "radiobuttoninactive.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRadioAddress2.add(imgRadioAddress2);
            var lblAddress2 = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblAddress2",
                "isVisible": true,
                "left": "20dp",
                "right": "80dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAddress2.add(flxRadioAddress2, lblAddress2);
            var flxSeperatorWrapper3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorWrapper3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperatorWrapper3.setDefaultUnit(kony.flex.DP);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            flxSeperatorWrapper3.add(flxSeperator3);
            var flxAddress3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAddress3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddress3.setDefaultUnit(kony.flex.DP);
            var flxRadioAddress3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxRadioAddress3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "13dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxRadioAddress3.setDefaultUnit(kony.flex.DP);
            var imgRadioAddress3 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgRadioAddress3",
                "isVisible": true,
                "skin": "slImage",
                "src": "radiobuttoninactive.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRadioAddress3.add(imgRadioAddress3);
            var lblAddress3 = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblAddress3",
                "isVisible": true,
                "left": "20dp",
                "right": "80dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAddress3.add(flxRadioAddress3, lblAddress3);
            var flxSeperatorWrapper4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorWrapper4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperatorWrapper4.setDefaultUnit(kony.flex.DP);
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            flxSeperatorWrapper4.add(flxSeperator4);
            var segAddresses = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgRadioAddress": "radiobtn.png",
                    "lblAddress": ""
                }, {
                    "imgRadioAddress": "radiobtn.png",
                    "lblAddress": ""
                }, {
                    "imgRadioAddress": "radiobtn.png",
                    "lblAddress": ""
                }, {
                    "imgRadioAddress": "radiobtn.png",
                    "lblAddress": ""
                }, {
                    "imgRadioAddress": "radiobtn.png",
                    "lblAddress": ""
                }],
                "groupCells": false,
                "id": "segAddresses",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": true,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxCardAddress",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgRadioAddress",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAddress": "flxAddress",
                    "flxCardAddress": "flxCardAddress",
                    "flxRadioAddress": "flxRadioAddress",
                    "flxSeperator": "flxSeperator",
                    "flxSeperatorWrapper": "flxSeperatorWrapper",
                    "imgRadioAddress": "imgRadioAddress",
                    "lblAddress": "lblAddress"
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
            var lblNote = new kony.ui.Label({
                "id": "lblNote",
                "isVisible": true,
                "left": "28dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.noteOptional"),
                "textStyle": {},
                "top": "35dp",
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
            var txtNote = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtNote",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": null,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "5dp",
                "width": "89%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxBordere3e3e3A0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxMainContainer.add(lblSelectAddress, flxSeperatorWrapper1, flxAddress1, flxSeperatorWrapper2, flxAddress2, flxSeperatorWrapper3, flxAddress3, flxSeperatorWrapper4, segAddresses, lblNote, txtNote);
            var btnSubmit = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnSubmit",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
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
            this.add(flxHeader, flxMainContainer, btnSubmit, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_bc730c7e59824dd58884182d3dbce79e,
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
            "action": controller.AS_BarButtonItem_bf2d73c6d3384a55a02b488b014ad648,
            "metaData": {
                "title": "         "
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmCardMngReplaceCardConfirm,
            "enabledForIdleTimeout": true,
            "id": "frmCardMngReplaceCardConfirm",
            "init": controller.AS_Form_g982769a1a044336be718cad49016920,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_eff24c9d8c094f3680dbbc8874c6177f(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard")
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