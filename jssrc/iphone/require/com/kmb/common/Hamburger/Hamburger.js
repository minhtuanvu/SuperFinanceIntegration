define(function() {
    return function(controller) {
        var Hamburger = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Hamburger",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "Hamburger"), extendConfig({}, controller.args[1], "Hamburger"), extendConfig({}, controller.args[2], "Hamburger"));
        Hamburger.setDefaultUnit(kony.flex.DP);
        var flxHamburger = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHamburger",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 4
        }, controller.args[0], "flxHamburger"), extendConfig({}, controller.args[1], "flxHamburger"), extendConfig({}, controller.args[2], "flxHamburger"));
        flxHamburger.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxHeaderMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "57dp",
            "id": "flxHeaderMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderMain"), extendConfig({}, controller.args[1], "flxHeaderMain"), extendConfig({}, controller.args[2], "flxHeaderMain"));
        flxHeaderMain.setDefaultUnit(kony.flex.DP);
        var flxUserImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "35dp",
            "id": "flxUserImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "CopyslFboxprofilePic",
            "top": "20dp",
            "width": "35dp",
            "zIndex": 8
        }, controller.args[0], "flxUserImg"), extendConfig({}, controller.args[1], "flxUserImg"), extendConfig({}, controller.args[2], "flxUserImg"));
        flxUserImg.setDefaultUnit(kony.flex.DP);
        var imgUser = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgUser",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "userimg.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "imgUser"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgUser"), extendConfig({}, controller.args[2], "imgUser"));
        flxUserImg.add(imgUser);
        var flxUser = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxUser",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "65dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "75%",
            "zIndex": 8
        }, controller.args[0], "flxUser"), extendConfig({}, controller.args[1], "flxUser"), extendConfig({}, controller.args[2], "flxUser"));
        flxUser.setDefaultUnit(kony.flex.DP);
        var lblUsername = new kony.ui.Label(extendConfig({
            "id": "lblUsername",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLblffffffSSP26pxSemiBold",
            "text": "John…",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblUsername"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUsername"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblUsername"));
        var lblLastLogin = new kony.ui.Label(extendConfig({
            "bottom": "3dp",
            "id": "lblLastLogin",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLblffffff20px",
            "text": "Last Login 12 Dec 17",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblLastLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLastLogin"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLastLogin"));
        flxUser.add(lblUsername, lblLastLogin);
        flxHeaderMain.add(flxUserImg, flxUser);
        var flxHeaderShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-10dp",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxHeaderShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 80
        }, controller.args[0], "flxHeaderShadow"), extendConfig({}, controller.args[1], "flxHeaderShadow"), extendConfig({}, controller.args[2], "flxHeaderShadow"));
        flxHeaderShadow.setDefaultUnit(kony.flex.DP);
        flxHeaderShadow.add();
        var flxLogout = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLogout",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "10dp",
            "width": "20%",
            "zIndex": 8
        }, controller.args[0], "flxLogout"), extendConfig({}, controller.args[1], "flxLogout"), extendConfig({}, controller.args[2], "flxLogout"));
        flxLogout.setDefaultUnit(kony.flex.DP);
        var imgLogout = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "25dp",
            "id": "imgLogout",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "logout.png",
            "width": "25dp",
            "zIndex": 1
        }, controller.args[0], "imgLogout"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogout"), extendConfig({}, controller.args[2], "imgLogout"));
        flxLogout.add(imgLogout);
        flxHeader.add(flxHeaderMain, flxHeaderShadow, flxLogout);
        var flxMenu = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "0dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknFlxScrlfafafa",
            "top": "60dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMenu"), extendConfig({}, controller.args[1], "flxMenu"), extendConfig({}, controller.args[2], "flxMenu"));
        flxMenu.setDefaultUnit(kony.flex.DP);
        var segHamburger = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgHamburger": "accounts.png",
                "lblHamburger": "Accounts",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "transfer.png",
                "lblHamburger": "Transfers",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "billpay.png",
                "lblHamburger": "Bill pay",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "transfer.png",
                "lblHamburger": "Unified Transfers flow",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "opennew.png",
                "lblHamburger": "Open New Account",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "message.png",
                "lblHamburger": "Messages",
                "lblMessagesNumber": "03"
            }, {
                "imgHamburger": "settings.png",
                "lblHamburger": "Settings",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "chatbot.png",
                "lblHamburger": "Chatbot",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "locateus.png",
                "lblHamburger": "Locate Us",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "contactus.png",
                "lblHamburger": "Contact Us",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "",
                "lblHamburger": "Contact Us",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "",
                "lblHamburger": "Contact Us",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "",
                "lblHamburger": "My Wallet",
                "lblMessagesNumber": ""
            }],
            "groupCells": false,
            "id": "segHamburger",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Normal",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxHamburger",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxHamburger": "flxHamburger",
                "flxIdentifier": "flxIdentifier",
                "flxImage": "flxImage",
                "flxSeparator": "flxSeparator",
                "flxhambuergermenu": "flxhambuergermenu",
                "imgHamburger": "imgHamburger",
                "lblHamburger": "lblHamburger",
                "lblMessagesNumber": "lblMessagesNumber"
            },
            "widgetSkin": "sknSegffffff",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segHamburger"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segHamburger"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segHamburger"));
        flxMenu.add(segHamburger);
        flxHamburger.add(flxHeader, flxMenu);
        var flxShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-10dp",
            "isModalContainer": false,
            "skin": "sknflxShadowHamburgerMenu",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxShadow"), extendConfig({}, controller.args[1], "flxShadow"), extendConfig({}, controller.args[2], "flxShadow"));
        flxShadow.setDefaultUnit(kony.flex.DP);
        flxShadow.add();
        Hamburger.add(flxHamburger, flxShadow);
        return Hamburger;
    }
})