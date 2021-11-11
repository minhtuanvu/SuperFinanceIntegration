define(function() {
    return function(controller) {
        var loginMethod = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "loginMethod",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "loginMethod"), extendConfig({}, controller.args[1], "loginMethod"), extendConfig({}, controller.args[2], "loginMethod"));
        loginMethod.setDefaultUnit(kony.flex.DP);
        var lblSelLogin = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSelLogin",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("kony.tab.DeviceReg.SelLoginMsg"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "23dp",
            "width": "91%",
            "zIndex": 1
        }, controller.args[0], "lblSelLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelLogin"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSelLogin"));
        var segLogin = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "groupCells": false,
            "id": "segLogin",
            "isVisible": true,
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
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "146dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxChevronLogo": "flxChevronLogo",
                "flxDefaultLogin": "flxDefaultLogin",
                "flxImgIcon": "flxImgIcon",
                "imgChevronIcon": "imgChevronIcon",
                "imgLogo": "imgLogo",
                "lblLoginStatus": "lblLoginStatus",
                "lblLoginType": "lblLoginType"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segLogin"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segLogin"), extendConfig({}, controller.args[2], "segLogin"));
        var btnContinue = new kony.ui.Button(extendConfig({
            "bottom": "30dp",
            "centerX": "50%",
            "focusSkin": "sknBtnBg0A78D1FontFFSSPR36pxTab",
            "height": "50dp",
            "id": "btnContinue",
            "isVisible": true,
            "left": "30dp",
            "onClick": controller.AS_Button_a6e2230cac254d3da9ad923fcb37dda5,
            "right": "30dp",
            "skin": "sknBtnBg0A78D1FontFFSSPR36pxTab",
            "text": kony.i18n.getLocalizedString("kony.tab.common.Continue"),
            "zIndex": 1
        }, controller.args[0], "btnContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinue"), extendConfig({}, controller.args[2], "btnContinue"));
        loginMethod.add(lblSelLogin, segLogin, btnContinue);
        return loginMethod;
    }
})