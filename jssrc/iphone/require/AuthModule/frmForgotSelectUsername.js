define("AuthModule/frmForgotSelectUsername", function() {
    return function(controller) {
        function addWidgetsfrmForgotSelectUsername() {
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
                        "isVisible": false,
                        "width": "10%"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": "Username"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.btnRight.onClick = controller.AS_Button_bca535d933294115b6f52552a731b32a;
            customHeader.flxBack.onClick = controller.AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000;
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxSelectUsernameTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSelectUsernameTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectUsernameTitle.setDefaultUnit(kony.flex.DP);
            var lblSelectUsernameTitle = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblSelectUsernameTitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Select Username",
                "textStyle": {},
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSelectUsernameTitle.add(lblSelectUsernameTitle);
            var flxSelectUsername = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "350dp",
                "id": "flxSelectUsername",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "80dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectUsername.setDefaultUnit(kony.flex.DP);
            var lblSelectUsernameDescription = new kony.ui.Label({
                "id": "lblSelectUsernameDescription",
                "isVisible": true,
                "left": "80dp",
                "right": "80dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Please select username that is connected to your products",
                "textStyle": {},
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxUsernameListBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": true,
                "height": "46dp",
                "id": "flxUsernameListBox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "80dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {}, {});
            flxUsernameListBox.setDefaultUnit(kony.flex.DP);
            var lblUsernameListBox = new kony.ui.ListBox({
                "focusSkin": "sknlstboxNoBorderSSP42424226px",
                "height": "46dp",
                "id": "lblUsernameListBox",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlstboxNoBorderSSP42424226px",
                "top": "0dp",
                "width": "98.00%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dropDownImage": "transparentbox.png",
                "groupCells": false,
                "placeholder": "Select username",
                "tickedImage": "transparentbox.png",
                "untickedImage": "transparentbox.png",
                "viewConfig": {
                    "toggleViewConfig": {
                        "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
                    }
                },
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            var imgArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25%",
                "id": "imgArrow",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "lstbxdropdown.png",
                "width": "6%",
                "zIndex": 8
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUsernameListBox.add(lblUsernameListBox, imgArrow);
            flxSelectUsername.add(lblSelectUsernameDescription, flxUsernameListBox);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxMainContainer.add(flxSelectUsernameTitle, flxSelectUsername, btnContinue);
            this.add(flxHeader, flxMainContainer);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_f78a4917e7d6404f8453a9307c184f7b,
            "metaData": {
                "title": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
            },
            "id": "RBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmForgotSelectUsername,
            "enabledForIdleTimeout": true,
            "id": "frmForgotSelectUsername",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_cab1b95d28444aadb26b01451a79e03b(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.tab.Login.Username")
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
                "translucent": true,
                "tintColor": "4b88f100",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0]
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});