define("AlertsModule/frmAlertFilter", function() {
    return function(controller) {
        function addWidgetsfrmAlertFilter() {
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
                        "isVisible": true,
                        "text": "Clear"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": "Notifications Filter"
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
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxCategorySection = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCategorySection",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCategorySection.setDefaultUnit(kony.flex.DP);
            var flxAllAlerts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAllAlerts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAllAlerts.setDefaultUnit(kony.flex.DP);
            var flxCheckBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "32dp",
                "id": "flxCheckBox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "32dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox.setDefaultUnit(kony.flex.DP);
            var imgAllAlerts = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "24dp",
                "id": "imgAllAlerts",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tickmarkbox.png",
                "width": "24dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox.add(imgAllAlerts);
            var lblAllAlerts = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAllAlerts",
                "isVisible": true,
                "left": "65dp",
                "skin": "sknLbl424242SourceSansPro32pxTab",
                "text": "All Alerts",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAllAlerts.add(flxCheckBox, lblAllAlerts);
            var flxSecurityAlerts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSecurityAlerts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "118dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSecurityAlerts.setDefaultUnit(kony.flex.DP);
            var flxCheckBox2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "32dp",
                "id": "flxCheckBox2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "32dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox2.setDefaultUnit(kony.flex.DP);
            var imgSecurityAlerts = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "24dp",
                "id": "imgSecurityAlerts",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tickmarkbox.png",
                "width": "24dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox2.add(imgSecurityAlerts);
            var lblSecurityAlerts = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSecurityAlerts",
                "isVisible": true,
                "left": "65dp",
                "skin": "sknLbl424242SourceSansPro32pxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.SecurityAlerts"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSecurityAlerts.add(flxCheckBox2, lblSecurityAlerts);
            var flxAccountsAlerts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAccountsAlerts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "59dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountsAlerts.setDefaultUnit(kony.flex.DP);
            var flxCheckBox1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "32dp",
                "id": "flxCheckBox1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "32dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox1.setDefaultUnit(kony.flex.DP);
            var imgAccountAlerts = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "24dp",
                "id": "imgAccountAlerts",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tickmarkbox.png",
                "width": "24dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox1.add(imgAccountAlerts);
            var lblAccountsAlerts = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountsAlerts",
                "isVisible": true,
                "left": "65dp",
                "skin": "sknLbl424242SourceSansPro32pxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.AlertsAccountList.Title"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAccountsAlerts.add(flxCheckBox1, lblAccountsAlerts);
            var flxPromoAlerts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxPromoAlerts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "177dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPromoAlerts.setDefaultUnit(kony.flex.DP);
            var flxCheckBox3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "32dp",
                "id": "flxCheckBox3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "32dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox3.setDefaultUnit(kony.flex.DP);
            var imgPromoAlerts = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "24dp",
                "id": "imgPromoAlerts",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tickmarkbox.png",
                "width": "24dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox3.add(imgPromoAlerts);
            var lblPromoAlerts = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPromoAlerts",
                "isVisible": true,
                "left": "65dp",
                "skin": "sknLbl424242SourceSansPro32pxTab",
                "text": "Transactional Alerts",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxPromoAlerts.add(flxCheckBox3, lblPromoAlerts);
            var flxGeneralAlerts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxGeneralAlerts",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "236dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGeneralAlerts.setDefaultUnit(kony.flex.DP);
            var flxCheckBox4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "32dp",
                "id": "flxCheckBox4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "32dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox4.setDefaultUnit(kony.flex.DP);
            var imgGeneralAerts = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "24dp",
                "id": "imgGeneralAerts",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tickmarkbox.png",
                "width": "24dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox4.add(imgGeneralAerts);
            var lblGeneralAlerts = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblGeneralAlerts",
                "isVisible": true,
                "left": "65dp",
                "skin": "sknLbl424242SourceSansPro32pxTab",
                "text": "General Alerts",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxGeneralAlerts.add(flxCheckBox4, lblGeneralAlerts);
            flxCategorySection.add(flxAllAlerts, flxSecurityAlerts, flxAccountsAlerts, flxPromoAlerts, flxGeneralAlerts);
            var btnApply = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnApply",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_f6e2b8e301744782a8fb557ad223e123,
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": "Apply",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxMainContainer.add(flxSeparator, flxCategorySection, btnApply);
            this.add(flxHeader, flxMainContainer);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_be48641ef44748729bb313c082127c49,
            "metaData": {
                "image": "iphoneback.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_c4efca8d899b45ebbaf92700aad0f9c0,
            "metaData": {
                "title": "Clear"
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
            "addWidgets": addWidgetsfrmAlertFilter,
            "bounces": false,
            "enabledForIdleTimeout": true,
            "id": "frmAlertFilter",
            "init": controller.AS_Form_fa4b13e27d8843b3b6ace5086d7e1fd4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_a79746a535594484b4047bb135989eed(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Notifications Filter"
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
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});