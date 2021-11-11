define("flxEligibilityCriteria", function() {
    return function(controller) {
        var flxEligibilityCriteria = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEligibilityCriteria",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxEligibilityCriteria.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblCriteriaType = new kony.ui.Label({
            "id": "lblCriteriaType",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "I am an employee,retiree or family member of an employee of a company",
            "textStyle": {},
            "top": "10dp",
            "width": "78%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lbldescription = new kony.ui.Label({
            "id": "lbldescription",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPLight22px",
            "text": "Eligible relationships include spouse, domestic  partner, parent, grandparent, child, sibling, grandchild, step sibling or adopted children.",
            "textStyle": {},
            "top": "10dp",
            "width": "78%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var btnViewList = new kony.ui.Button({
            "focusSkin": "sknBtn00aef3SSPReg22px",
            "id": "btnViewList",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn00aef3SSPReg22px",
            "text": "View list of membership organization we serve ",
            "top": "10dp",
            "width": "260dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": false
        });
        var tbxCriteria = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "tbxCriteria",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "maxTextLength": null,
            "placeholder": "Enter the company",
            "right": "50dp",
            "secureTextEntry": false,
            "skin": "sknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "10dp",
            "width": "275dp",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, {
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxPlaceholdera0a0a0",
            "showClearButton": false,
            "showCloseButton": false,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": 13,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxMain.add(lblCriteriaType, lbldescription, btnViewList, tbxCriteria, flxSeparator);
        var flxCheckboxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCheckboxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 10
        }, {}, {});
        flxCheckboxMain.setDefaultUnit(kony.flex.DP);
        var flxCheckbox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCheckbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flxCheckbox.setDefaultUnit(kony.flex.DP);
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "radiobtn_big.png",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCheckbox.add(imgCheckbox);
        flxCheckboxMain.add(flxCheckbox);
        flxEligibilityCriteria.add(flxMain, flxCheckboxMain);
        return flxEligibilityCriteria;
    }
})