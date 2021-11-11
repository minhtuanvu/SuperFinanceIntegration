define(function() {
    return function(controller) {
        var Hamburger = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "isMaster": true,
            "id": "Hamburger",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "Hamburger"), extendConfig({}, controller.args[1], "Hamburger"), extendConfig({}, controller.args[2], "Hamburger"));
        Hamburger.setDefaultUnit(kony.flex.DP);
        var flxHamburger = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxHamburger",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 10
        }, controller.args[0], "flxHamburger"), extendConfig({}, controller.args[1], "flxHamburger"), extendConfig({}, controller.args[2], "flxHamburger"));
        flxHamburger.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "56dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffffTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxHeaderMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "56dp",
            "id": "flxHeaderMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ffTab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderMain"), extendConfig({}, controller.args[1], "flxHeaderMain"), extendConfig({}, controller.args[2], "flxHeaderMain"));
        flxHeaderMain.setDefaultUnit(kony.flex.DP);
        var lblLastLogin = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblLastLogin",
            "isVisible": true,
            "left": "57dp",
            "skin": "sknLblffffff20px",
            "text": "Last Login 12 Dec 17",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblLastLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLastLogin"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLastLogin"));
        var lblUsername = new kony.ui.Label(extendConfig({
            "id": "lblUsername",
            "isVisible": true,
            "left": "57dp",
            "skin": "sknLblffffffSSPReg26px",
            "text": "John…",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, controller.args[0], "lblUsername"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUsername"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUsername"));
        var imgUser = new kony.ui.Image2(extendConfig({
            "height": "24dp",
            "id": "imgUser",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "userimg.png",
            "top": "12dp",
            "width": "24dp",
            "zIndex": 8
        }, controller.args[0], "imgUser"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgUser"), extendConfig({}, controller.args[2], "imgUser"));
        var imgLogout = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "imgLogout",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "slFbox",
            "width": "8%",
            "zIndex": 15
        }, controller.args[0], "imgLogout"), extendConfig({}, controller.args[1], "imgLogout"), extendConfig({}, controller.args[2], "imgLogout"));
        imgLogout.setDefaultUnit(kony.flex.DP);
        imgLogout.add();
        var flxLogout = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "flxLogout",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "logout.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "flxLogout"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "flxLogout"), extendConfig({}, controller.args[2], "flxLogout"));
        flxHeaderMain.add(lblLastLogin, lblUsername, imgUser, imgLogout, flxLogout);
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
            "skin": "sknFlxHeaderShadowTab",
            "width": "100%",
            "zIndex": 80
        }, controller.args[0], "flxHeaderShadow"), extendConfig({}, controller.args[1], "flxHeaderShadow"), extendConfig({}, controller.args[2], "flxHeaderShadow"));
        flxHeaderShadow.setDefaultUnit(kony.flex.DP);
        flxHeaderShadow.add();
        flxHeader.add(flxHeaderMain, flxHeaderShadow);
        var flxMenu = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "0dp",
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknFlxScrlfafafaTab",
            "top": "56dp",
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
                "imgHamburger": "",
                "lblHamburger": "My Wallet",
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
        }, controller.args[1], "segHamburger"), extendConfig({}, controller.args[2], "segHamburger"));
        flxMenu.add(segHamburger);
        flxHamburger.add(flxHeader, flxMenu);
        Hamburger.add(flxHamburger);
        return Hamburger;
    }
})