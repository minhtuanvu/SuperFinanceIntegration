define("SettingsModule/frmAlertsDealsAndSecurity", function() {
    return function(controller) {
        function addWidgetsfrmAlertsDealsAndSecurity() {
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
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.AlertsDealsAndSecurity.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlf9f9f9",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxBodyTxt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxBodyTxt",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyTxt.setDefaultUnit(kony.flex.DP);
            var lblBodyTxt = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblBodyTxt",
                "isVisible": true,
                "skin": "sknLblalertA0A0A0",
                "text": kony.i18n.getLocalizedString("kony.mb.AlertsDealsAndSecurity.BodyTxt"),
                "textStyle": {},
                "width": "320dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxBodyTxt.add(lblBodyTxt);
            var flxBankIDChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxBankIDChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "100dp",
                "width": "100%"
            }, {}, {});
            flxBankIDChange.setDefaultUnit(kony.flex.DP);
            var lblBankIDChange = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBankIDChange",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
                "textStyle": {},
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
            var flxShadowOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowOne.setDefaultUnit(kony.flex.DP);
            flxShadowOne.add();
            var flxToggleBankIDChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleBankIDChange",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleBankIDChange.setDefaultUnit(kony.flex.DP);
            var imgSwitchBankIDChange = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchBankIDChange",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleBankIDChange.add(imgSwitchBankIDChange);
            var switchBankIDChange = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchBankIDChange",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBankIDChange.add(lblBankIDChange, flxShadowOne, flxToggleBankIDChange, switchBankIDChange);
            var flxPasswordChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxPasswordChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "145dp",
                "width": "100%"
            }, {}, {});
            flxPasswordChange.setDefaultUnit(kony.flex.DP);
            var lblPasswordChange = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPasswordChange",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
                "textStyle": {},
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
            var flxShadowTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowTwo.setDefaultUnit(kony.flex.DP);
            flxShadowTwo.add();
            var flxTogglePasswordChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTogglePasswordChange",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxTogglePasswordChange.setDefaultUnit(kony.flex.DP);
            var imgSwitchPasswordChange = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchPasswordChange",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTogglePasswordChange.add(imgSwitchPasswordChange);
            var switchPasswordChange = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchPasswordChange",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPasswordChange.add(lblPasswordChange, flxShadowTwo, flxTogglePasswordChange, switchPasswordChange);
            var flxPasswordExpired = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxPasswordExpired",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "190dp",
                "width": "100%"
            }, {}, {});
            flxPasswordExpired.setDefaultUnit(kony.flex.DP);
            var lblPasswordExpired = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPasswordExpired",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
                "textStyle": {},
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
            var flxShadowthree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowthree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowthree.setDefaultUnit(kony.flex.DP);
            flxShadowthree.add();
            var flxTogglePasswordExpired = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTogglePasswordExpired",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxTogglePasswordExpired.setDefaultUnit(kony.flex.DP);
            var imgSwitchPasswordExpired = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchPasswordExpired",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTogglePasswordExpired.add(imgSwitchPasswordExpired);
            var switchPasswordExpired = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchPasswordExpired",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPasswordExpired.add(lblPasswordExpired, flxShadowthree, flxTogglePasswordExpired, switchPasswordExpired);
            var flxAddressOrPhoneChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxAddressOrPhoneChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "235dp",
                "width": "100%"
            }, {}, {});
            flxAddressOrPhoneChange.setDefaultUnit(kony.flex.DP);
            var lblAddressOrPhoneChange = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAddressOrPhoneChange",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
                "textStyle": {},
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
            var flxShadowFour = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowFour",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowFour.setDefaultUnit(kony.flex.DP);
            flxShadowFour.add();
            var flxToggleAddressOrPhoneChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleAddressOrPhoneChange",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleAddressOrPhoneChange.setDefaultUnit(kony.flex.DP);
            var imgSwitchAddressOrPhoneChange = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchAddressOrPhoneChange",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleAddressOrPhoneChange.add(imgSwitchAddressOrPhoneChange);
            var switchAddressOrPhoneChange = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchAddressOrPhoneChange",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAddressOrPhoneChange.add(lblAddressOrPhoneChange, flxShadowFour, flxToggleAddressOrPhoneChange, switchAddressOrPhoneChange);
            var flxNewPayeeAdded = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxNewPayeeAdded",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "280dp",
                "width": "100%"
            }, {}, {});
            flxNewPayeeAdded.setDefaultUnit(kony.flex.DP);
            var lblNewPayeeAdded = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNewPayeeAdded",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
                "textStyle": {},
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
            var flxShadowFive = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowFive",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowFive.setDefaultUnit(kony.flex.DP);
            flxShadowFive.add();
            var flxToggleNewPayeeAdded = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleNewPayeeAdded",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleNewPayeeAdded.setDefaultUnit(kony.flex.DP);
            var imgSwitchNewPayeeAdded = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchNewPayeeAdded",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleNewPayeeAdded.add(imgSwitchNewPayeeAdded);
            var switchNewPayeeAdded = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchNewPayeeAdded",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNewPayeeAdded.add(lblNewPayeeAdded, flxShadowFive, flxToggleNewPayeeAdded, switchNewPayeeAdded);
            var flxPayeeDetailsUpdated = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxPayeeDetailsUpdated",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "325dp",
                "width": "100%"
            }, {}, {});
            flxPayeeDetailsUpdated.setDefaultUnit(kony.flex.DP);
            var lblPayeeDetailsUpdated = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPayeeDetailsUpdated",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
                "textStyle": {},
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
            var flxShadowSix = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowSix",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowSix.setDefaultUnit(kony.flex.DP);
            flxShadowSix.add();
            var flxTogglePayeeDetailsUpdated = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTogglePayeeDetailsUpdated",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxTogglePayeeDetailsUpdated.setDefaultUnit(kony.flex.DP);
            var imgSwitchPayeeDetailsUpdated = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchPayeeDetailsUpdated",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTogglePayeeDetailsUpdated.add(imgSwitchPayeeDetailsUpdated);
            var switchPayeeDetailsUpdated = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchPayeeDetailsUpdated",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPayeeDetailsUpdated.add(lblPayeeDetailsUpdated, flxShadowSix, flxTogglePayeeDetailsUpdated, switchPayeeDetailsUpdated);
            var flxNewDealsAvailable = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxNewDealsAvailable",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "100dp",
                "width": "100%"
            }, {}, {});
            flxNewDealsAvailable.setDefaultUnit(kony.flex.DP);
            var lblNewDealsAvailable = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNewDealsAvailable",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
                "textStyle": {},
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
            var flxShadowSeven = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowSeven",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowSeven.setDefaultUnit(kony.flex.DP);
            flxShadowSeven.add();
            var flxToggleNewDealsAvailable = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleNewDealsAvailable",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleNewDealsAvailable.setDefaultUnit(kony.flex.DP);
            var imgSwitchNewDealsAvailable = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchNewDealsAvailable",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleNewDealsAvailable.add(imgSwitchNewDealsAvailable);
            var switchNewDealsAvailable = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchNewDealsAvailable",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNewDealsAvailable.add(lblNewDealsAvailable, flxShadowSeven, flxToggleNewDealsAvailable, switchNewDealsAvailable);
            var flxDealsExpiringInOneday = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxDealsExpiringInOneday",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "145dp",
                "width": "100%"
            }, {}, {});
            flxDealsExpiringInOneday.setDefaultUnit(kony.flex.DP);
            var lblDealsExpiringInOneDay = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDealsExpiringInOneDay",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
                "textStyle": {},
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
            var flxShadowEight = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowEight",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowEight.setDefaultUnit(kony.flex.DP);
            flxShadowEight.add();
            var flxToggleDealsExpiringInOneday = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleDealsExpiringInOneday",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleDealsExpiringInOneday.setDefaultUnit(kony.flex.DP);
            var imgSwitchDealsExpiringInOneday = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchDealsExpiringInOneday",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleDealsExpiringInOneday.add(imgSwitchDealsExpiringInOneday);
            var switchDealsExpiringInOneday = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchDealsExpiringInOneday",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDealsExpiringInOneday.add(lblDealsExpiringInOneDay, flxShadowEight, flxToggleDealsExpiringInOneday, switchDealsExpiringInOneday);
            flxBody.add(flxBodyTxt, flxBankIDChange, flxPasswordChange, flxPasswordExpired, flxAddressOrPhoneChange, flxNewPayeeAdded, flxPayeeDetailsUpdated, flxNewDealsAvailable, flxDealsExpiringInOneday);
            this.add(flxHeader, flxBody);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "4b88f100",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "4b88f100",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "image": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmAlertsDealsAndSecurity,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsDealsAndSecurity",
            "init": controller.AS_Form_d3a049044039423e9bf8ea17164d319a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_iedb57cabd7345ecb47b6b980ead5b13(eventobject);
            },
            "title": kony.i18n.getLocalizedString("kony.mb.AlertsDealsAndSecurity.Title")
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
            "inTransitionConfig": {
                "transitionDirection": "none",
                "transitionDuration": 0.3,
                "transitionEffect": "none"
            },
            "needsIndicatorDuringPostShow": false,
            "outTransitionConfig": {
                "transitionDirection": "none",
                "transitionDuration": 0.3,
                "transitionEffect": "none"
            },
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "4b88f100",
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