define(function() {
    return function(controller) {
        var pickContact = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "256dp",
            "id": "pickContact",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_ib7edce864d949cd8b9d717a6a04590b(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "pickContact"), extendConfig({}, controller.args[1], "pickContact"), extendConfig({}, controller.args[2], "pickContact"));
        pickContact.setDefaultUnit(kony.flex.DP);
        var flxLeftBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLeftBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "3%",
            "zIndex": 1
        }, controller.args[0], "flxLeftBar"), extendConfig({}, controller.args[1], "flxLeftBar"), extendConfig({}, controller.args[2], "flxLeftBar"));
        flxLeftBar.setDefaultUnit(kony.flex.DP);
        var flxArrow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxArrow"), extendConfig({}, controller.args[1], "flxArrow"), extendConfig({}, controller.args[2], "flxArrow"));
        flxArrow.setDefaultUnit(kony.flex.DP);
        var imgArrow = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgArrow",
            "isVisible": true,
            "skin": "slImage",
            "src": "popuparrow.png",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow"), extendConfig({}, controller.args[2], "imgArrow"));
        flxArrow.add(imgArrow);
        flxLeftBar.add(flxArrow);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFRound13PxTab",
            "top": "0dp",
            "width": "97%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var lblPickContact = new kony.ui.Label(extendConfig({
            "id": "lblPickContact",
            "isVisible": true,
            "left": "17dp",
            "skin": "sknLbl000000SSP34PxTab",
            "text": "Pick Contact",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPickContact"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPickContact"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPickContact"));
        var lblSelectId = new kony.ui.Label(extendConfig({
            "id": "lblSelectId",
            "isVisible": true,
            "left": "17dp",
            "skin": "sknLbl8C8C8CSSP28PxTab",
            "text": "Select any one email ID",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSelectId"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectId"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSelectId"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnBgFFFFFFSSP34PxFF3B30Tab",
            "height": "20dp",
            "id": "btnCancel",
            "isVisible": true,
            "right": "19dp",
            "skin": "sknBtnBgFFFFFFSSP34PxFF3B30Tab",
            "text": kony.i18n.getLocalizedString("kony.tab.common.Cancel"),
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        flxHeader.add(lblPickContact, lblSelectId, btnCancel);
        var segContacts = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "47dp",
            "groupCells": false,
            "id": "segContacts",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "75dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "ImgRadio": "ImgRadio",
                "flxRadio": "flxRadio",
                "flxRowData": "flxRowData",
                "flxSeparator": "flxSeparator",
                "imgRadioActive": "imgRadioActive",
                "lblContactData": "lblContactData"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segContacts"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segContacts"), extendConfig({}, controller.args[2], "segContacts"));
        var flxContinue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "47dp",
            "id": "flxContinue",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgF9F9F9Op85Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContinue"), extendConfig({}, controller.args[1], "flxContinue"), extendConfig({}, controller.args[2], "flxContinue"));
        flxContinue.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "2dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknBtnBg000000Op10Tab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator"), extendConfig({}, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var btnContinue = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnBgOp0SSP34Px0A78D1Tab",
            "height": "22dp",
            "id": "btnContinue",
            "isVisible": true,
            "skin": "sknBtnBgOp0SSP34Px0A78D1Tab",
            "text": kony.i18n.getLocalizedString("kony.tab.common.Continue"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinue"), extendConfig({}, controller.args[2], "btnContinue"));
        flxContinue.add(flxSeparator, btnContinue);
        flxMain.add(flxHeader, segContacts, flxContinue);
        pickContact.add(flxLeftBar, flxMain);
        return pickContact;
    }
})