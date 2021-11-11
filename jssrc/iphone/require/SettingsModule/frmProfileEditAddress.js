define("SettingsModule/frmProfileEditAddress", function() {
    return function(controller) {
        function addWidgetsfrmProfileEditAddress() {
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
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.BillPayEditAddress.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxMainWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxMainWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainWrapper.setDefaultUnit(kony.flex.DP);
            var flxPayeeAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "100.45%",
                "id": "flxPayeeAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxPayeeAddress.setDefaultUnit(kony.flex.DP);
            var flxResidentialAddressWrapper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "120dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxResidentialAddressWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxResidentialAddressWrapper.setDefaultUnit(kony.flex.DP);
            var imgResidentialAddressIcon = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgResidentialAddressIcon",
                "isVisible": true,
                "right": "10%",
                "skin": "slImage",
                "src": "searchicon.png",
                "top": "-28dp",
                "width": "20dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblResidentialAddressLineOne = new kony.ui.Label({
                "id": "lblResidentialAddressLineOne",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AddressLineOne"),
                "textStyle": {},
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxResidentialAddressLineOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxResidentialAddressLineOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResidentialAddressLineOne.setDefaultUnit(kony.flex.DP);
            var txtResidentialAddressLineOne = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "txtResidentialAddressLineOne",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": false,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxResidentialAddressLineOne.add(txtResidentialAddressLineOne);
            var lblResidentialAddressLineTwo = new kony.ui.Label({
                "id": "lblResidentialAddressLineTwo",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AddressLineTwo"),
                "textStyle": {},
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxResidentialAddressLineTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxResidentialAddressLineTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResidentialAddressLineTwo.setDefaultUnit(kony.flex.DP);
            var txtResidentialAddressLineTwo = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "txtResidentialAddressLineTwo",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.common.optional"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": false,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxResidentialAddressLineTwo.add(txtResidentialAddressLineTwo);
            var lblCountry = new kony.ui.Label({
                "id": "lblCountry",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Country"),
                "textStyle": {},
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxListBoxCountry = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxListBoxCountry",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "6dp",
                "width": "90%",
                "zIndex": 8
            }, {}, {});
            flxListBoxCountry.setDefaultUnit(kony.flex.DP);
            var lstbxCountry = new kony.ui.ListBox({
                "focusSkin": "sknlst424242SSPReg28px",
                "height": "40dp",
                "id": "lstbxCountry",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["lb1", "Country"]
                ],
                "selectedKey": "lb1",
                "selectedKeyValue": ["lb1", "Country"],
                "skin": "sknlst424242SSPReg28px",
                "top": "0dp",
                "width": "98%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dropDownImage": "transparentbox.png",
                "groupCells": false,
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
                "width": "5%",
                "zIndex": 8
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxListBoxCountry.add(lstbxCountry, imgArrow);
            var flxCountry = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxCountry",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxCountry.setDefaultUnit(kony.flex.DP);
            var txtCountry = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "txtCountry",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxCountry.add(txtCountry);
            var lblResidentialAddressState = new kony.ui.Label({
                "id": "lblResidentialAddressState",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.State"),
                "textStyle": {},
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxListBoxState = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxListBoxState",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "6dp",
                "width": "90%",
                "zIndex": 8
            }, {}, {});
            flxListBoxState.setDefaultUnit(kony.flex.DP);
            var lstbxState = new kony.ui.ListBox({
                "focusSkin": "sknlst424242SSPReg28px",
                "height": "40dp",
                "id": "lstbxState",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["lb1", "State"]
                ],
                "selectedKey": "lb1",
                "selectedKeyValue": ["lb1", "State"],
                "skin": "sknlst424242SSPReg28px",
                "top": "0dp",
                "width": "98%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dropDownImage": "transparentbox.png",
                "groupCells": false,
                "tickedImage": "transparentbox.png",
                "untickedImage": "transparentbox.png",
                "viewConfig": {
                    "toggleViewConfig": {
                        "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
                    }
                },
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            var imgArrow2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25%",
                "id": "imgArrow2",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "lstbxdropdown.png",
                "width": "5%",
                "zIndex": 8
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxListBoxState.add(lstbxState, imgArrow2);
            var flxResidentialAddressState = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxResidentialAddressState",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResidentialAddressState.setDefaultUnit(kony.flex.DP);
            var txtResidentialAddressState = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "txtResidentialAddressState",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxResidentialAddressState.add(txtResidentialAddressState);
            var lblResidentialAddressCity = new kony.ui.Label({
                "id": "lblResidentialAddressCity",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.City"),
                "textStyle": {},
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxListBoxCity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxListBoxCity",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "6dp",
                "width": "90%",
                "zIndex": 8
            }, {}, {});
            flxListBoxCity.setDefaultUnit(kony.flex.DP);
            var lstbxCity = new kony.ui.ListBox({
                "focusSkin": "sknlst424242SSPReg28px",
                "height": "40dp",
                "id": "lstbxCity",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["lb1", "City"]
                ],
                "selectedKey": "lb1",
                "selectedKeyValue": ["lb1", "City"],
                "skin": "sknlst424242SSPReg28px",
                "top": "0dp",
                "width": "98%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dropDownImage": "transparentbox.png",
                "groupCells": false,
                "tickedImage": "transparentbox.png",
                "untickedImage": "transparentbox.png",
                "viewConfig": {
                    "toggleViewConfig": {
                        "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
                    }
                },
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            var imgArrow3 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25%",
                "id": "imgArrow3",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "lstbxdropdown.png",
                "width": "5%",
                "zIndex": 8
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxListBoxCity.add(lstbxCity, imgArrow3);
            var flxResidentialAddressCity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxResidentialAddressCity",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 6,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResidentialAddressCity.setDefaultUnit(kony.flex.DP);
            var txtResidentialAddressCity = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "txtResidentialAddressCity",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": false,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxResidentialAddressCity.add(txtResidentialAddressCity);
            var lblResidentialAddressZipCode = new kony.ui.Label({
                "id": "lblResidentialAddressZipCode",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.ZipCode"),
                "textStyle": {},
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxResidentialAddressZipCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxResidentialAddressZipCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResidentialAddressZipCode.setDefaultUnit(kony.flex.DP);
            var txtResidentialAddressZipCode = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtResidentialAddressZipCode",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": false,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxResidentialAddressZipCode.add(txtResidentialAddressZipCode);
            var flxResidentialAddressDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxResidentialAddressDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResidentialAddressDummy.setDefaultUnit(kony.flex.DP);
            flxResidentialAddressDummy.add();
            var flxSpaceResidentialAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxSpaceResidentialAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSpaceResidentialAddress.setDefaultUnit(kony.flex.DP);
            flxSpaceResidentialAddress.add();
            flxResidentialAddressWrapper.add(imgResidentialAddressIcon, lblResidentialAddressLineOne, flxResidentialAddressLineOne, lblResidentialAddressLineTwo, flxResidentialAddressLineTwo, lblCountry, flxListBoxCountry, flxCountry, lblResidentialAddressState, flxListBoxState, flxResidentialAddressState, lblResidentialAddressCity, flxListBoxCity, flxResidentialAddressCity, lblResidentialAddressZipCode, flxResidentialAddressZipCode, flxResidentialAddressDummy, flxSpaceResidentialAddress);
            var btnContinueResidentialAddress = new kony.ui.Button({
                "bottom": "60dp",
                "centerX": "50.00%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinueResidentialAddress",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnDeleteAddress = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50.00%",
                "focusSkin": "sknbtnf6f6f6Focus98pr",
                "height": "40dp",
                "id": "btnDeleteAddress",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426px",
                "text": kony.i18n.getLocalizedString("kony.mb.Profile.DeleteAddress"),
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxPayeeAddress.add(flxResidentialAddressWrapper, btnContinueResidentialAddress, btnDeleteAddress);
            flxMainWrapper.add(flxPayeeAddress);
            flxMainContainer.add(flxMainWrapper);
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
                    "customPopup": {
                        "height": "100%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_fe18bb8f13294987bad3cea54cc39f0b,
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
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmProfileEditAddress,
            "enabledForIdleTimeout": true,
            "id": "frmProfileEditAddress",
            "init": controller.AS_Form_hb1604efb4534d27bdc9e0a6272f0e53,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_jb80b603edd643b68d724d7879b10f7e(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.BillPayEditAddress.Title")
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
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
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