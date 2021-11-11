define(function() {
    return function(controller) {
        var registeredDevices = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "registeredDevices",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_g7659685c0ed4656ac8168d06e807d5e(eventobject);
            },
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "registeredDevices"), extendConfig({}, controller.args[1], "registeredDevices"), extendConfig({}, controller.args[2], "registeredDevices"));
        registeredDevices.setDefaultUnit(kony.flex.DP);
        var flxRegisteredDevicesContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRegisteredDevicesContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxRegisteredDevicesContainer"), extendConfig({}, controller.args[1], "flxRegisteredDevicesContainer"), extendConfig({}, controller.args[2], "flxRegisteredDevicesContainer"));
        flxRegisteredDevicesContainer.setDefaultUnit(kony.flex.DP);
        var flxRegisteredDevicesHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxRegisteredDevicesHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx003e75Bg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRegisteredDevicesHeader"), extendConfig({}, controller.args[1], "flxRegisteredDevicesHeader"), extendConfig({}, controller.args[2], "flxRegisteredDevicesHeader"));
        flxRegisteredDevicesHeader.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgBack",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
        var lblRegisteredDevices = new kony.ui.Label(extendConfig({
            "id": "lblRegisteredDevices",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknHeaderFFF34px",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.RegisteredDevices"),
            "textStyle": {},
            "top": "50dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRegisteredDevices"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegisteredDevices"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRegisteredDevices"));
        flxRegisteredDevicesHeader.add(flxBack, lblRegisteredDevices);
        var flxRegisteredDevicesMain = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "75%",
            "horizontalScrollIndicator": true,
            "id": "flxRegisteredDevicesMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "100dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRegisteredDevicesMain"), extendConfig({}, controller.args[1], "flxRegisteredDevicesMain"), extendConfig({}, controller.args[2], "flxRegisteredDevicesMain"));
        flxRegisteredDevicesMain.setDefaultUnit(kony.flex.DP);
        var segRegisteredDevices = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgDevice": "device_3.png",
                "imgDeviceStatus": "confirmation_tick.png",
                "imgOptions": "more_detail.png",
                "lblDeviceName": "Bryan’s iPhone",
                "lblDeviceRegisteredDate": "02/18/2021",
                "lblDeviceStatus": "Current Device",
                "lblRegisteredOn": "Registered on:"
            }, {
                "imgDevice": "device_3.png",
                "imgDeviceStatus": "warninground.png",
                "imgOptions": "more_detail.png",
                "lblDeviceName": "Jane Conner’s iPhone",
                "lblDeviceRegisteredDate": "02/18/2021",
                "lblDeviceStatus": "Device Suspended",
                "lblRegisteredOn": "Registered on:"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segRegisteredDevices",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxRegisteredDevices",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxDeviceInfo": "flxDeviceInfo",
                "flxDeviceInfoLeft": "flxDeviceInfoLeft",
                "flxDeviceInfoMid": "flxDeviceInfoMid",
                "flxDeviceInfoMidInner": "flxDeviceInfoMidInner",
                "flxDeviceInfoRight": "flxDeviceInfoRight",
                "flxDeviceRegistrationDate": "flxDeviceRegistrationDate",
                "flxDeviceStatus": "flxDeviceStatus",
                "flxDeviceStatusInner": "flxDeviceStatusInner",
                "flxRegisteredDevices": "flxRegisteredDevices",
                "imgDevice": "imgDevice",
                "imgDeviceStatus": "imgDeviceStatus",
                "imgOptions": "imgOptions",
                "lblDeviceName": "lblDeviceName",
                "lblDeviceRegisteredDate": "lblDeviceRegisteredDate",
                "lblDeviceStatus": "lblDeviceStatus",
                "lblRegisteredOn": "lblRegisteredOn"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segRegisteredDevices"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segRegisteredDevices"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segRegisteredDevices"));
        flxRegisteredDevicesMain.add(segRegisteredDevices);
        var flxRegisteredDevicesFooter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "20dp",
            "clipBounds": true,
            "height": "48dp",
            "id": "flxRegisteredDevicesFooter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRegisteredDevicesFooter"), extendConfig({}, controller.args[1], "flxRegisteredDevicesFooter"), extendConfig({}, controller.args[2], "flxRegisteredDevicesFooter"));
        flxRegisteredDevicesFooter.setDefaultUnit(kony.flex.DP);
        var btnRegisterNewDevice = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnRegisterNewDevice",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtn003E75FFFFFF15px",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.RegisterANewDevice"),
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "btnRegisterNewDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRegisterNewDevice"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnRegisterNewDevice"));
        flxRegisteredDevicesFooter.add(btnRegisterNewDevice);
        flxRegisteredDevicesContainer.add(flxRegisteredDevicesHeader, flxRegisteredDevicesMain, flxRegisteredDevicesFooter);
        var flxPopups = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopups",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxPopups"), extendConfig({}, controller.args[1], "flxPopups"), extendConfig({}, controller.args[2], "flxPopups"));
        flxPopups.setDefaultUnit(kony.flex.DP);
        var flxCustomDevicePopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxCustomDevicePopup",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "11.70%",
            "isModalContainer": true,
            "right": "11.70%",
            "skin": "sknFlxBgFFFRadius6pxShadow2px",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxCustomDevicePopup"), extendConfig({}, controller.args[1], "flxCustomDevicePopup"), extendConfig({}, controller.args[2], "flxCustomDevicePopup"));
        flxCustomDevicePopup.setDefaultUnit(kony.flex.DP);
        var lblPopupTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblPopupTitle",
            "isVisible": true,
            "maxNumberOfLines": 3,
            "skin": "sknLblSSPSemiBold18px424242",
            "text": "Title",
            "textStyle": {},
            "top": "26dp",
            "width": "70%",
            "zIndex": 5
        }, controller.args[0], "lblPopupTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPopupTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPopupTitle"));
        var lblDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblDescription",
            "isVisible": true,
            "skin": "sknLblSSPR15px424242",
            "text": "Do you want to proceed further?",
            "textStyle": {},
            "top": "16dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDescription"));
        var flxLineBottomSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1px",
            "id": "flxLineBottomSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "24dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLineBottomSeparator"), extendConfig({}, controller.args[1], "flxLineBottomSeparator"), extendConfig({}, controller.args[2], "flxLineBottomSeparator"));
        flxLineBottomSeparator.setDefaultUnit(kony.flex.DP);
        flxLineBottomSeparator.add();
        var flxDecision = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxDecision",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDecision"), extendConfig({}, controller.args[1], "flxDecision"), extendConfig({}, controller.args[2], "flxDecision"));
        flxDecision.setDefaultUnit(kony.flex.DP);
        var btnDecisionNo = new kony.ui.Button(extendConfig({
            "centerY": "50.00%",
            "focusSkin": "CopyCopykonympip0e87af6c0e62442",
            "height": "100%",
            "id": "btnDecisionNo",
            "isVisible": true,
            "left": "0%",
            "skin": "sknSSPR15pxFnt4176A4BgFFFFFF",
            "text": kony.i18n.getLocalizedString("kony.tab.common.No"),
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "btnDecisionNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecisionNo"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnDecisionNo"));
        var flxMiddleFLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxMiddleFLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "1px",
            "zIndex": 1
        }, controller.args[0], "flxMiddleFLine"), extendConfig({}, controller.args[1], "flxMiddleFLine"), extendConfig({}, controller.args[2], "flxMiddleFLine"));
        flxMiddleFLine.setDefaultUnit(kony.flex.DP);
        flxMiddleFLine.add();
        var btnDecisionYes = new kony.ui.Button(extendConfig({
            "centerY": "50.00%",
            "focusSkin": "CopyCopykonympip0c376e4f5508644",
            "height": "100%",
            "id": "btnDecisionYes",
            "isVisible": true,
            "right": "0%",
            "skin": "sknSSPR15pxFnt4176A4BgFFFFFF",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Yes"),
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "btnDecisionYes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecisionYes"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnDecisionYes"));
        flxDecision.add(btnDecisionNo, flxMiddleFLine, btnDecisionYes);
        flxCustomDevicePopup.add(lblPopupTitle, lblDescription, flxLineBottomSeparator, flxDecision);
        var flxDeviceSettingsPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxDeviceSettingsPopup",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "10dp",
            "isModalContainer": true,
            "right": "10dp",
            "skin": "slFbox",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxDeviceSettingsPopup"), extendConfig({}, controller.args[1], "flxDeviceSettingsPopup"), extendConfig({}, controller.args[2], "flxDeviceSettingsPopup"));
        flxDeviceSettingsPopup.setDefaultUnit(kony.flex.DP);
        var flxDeviceSettings = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "117dp",
            "id": "flxDeviceSettings",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "CopysknFlxPopupDocuments0ed331d51146444",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxDeviceSettings"), extendConfig({}, controller.args[1], "flxDeviceSettings"), extendConfig({}, controller.args[2], "flxDeviceSettings"));
        flxDeviceSettings.setDefaultUnit(kony.flex.DP);
        var btnSuspendDevice = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "58dp",
            "id": "btnSuspendDevice",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnSSPR20pxFont007AFFBgfff",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.SuspendDevice"),
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnSuspendDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSuspendDevice"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSuspendDevice"));
        var btnUnsuspendDevice = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "58dp",
            "id": "btnUnsuspendDevice",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnSSPR20pxFont007AFFBgfff",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.UnsuspendDevice"),
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnUnsuspendDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnUnsuspendDevice"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnUnsuspendDevice"));
        var flxSeperatorone = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorone",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 110
        }, controller.args[0], "flxSeperatorone"), extendConfig({}, controller.args[1], "flxSeperatorone"), extendConfig({}, controller.args[2], "flxSeperatorone"));
        flxSeperatorone.setDefaultUnit(kony.flex.DP);
        flxSeperatorone.add();
        var btnRemoveDevice = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "58dp",
            "id": "btnRemoveDevice",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnSSPR20pxFontEE0005Bgfff",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.RemoveDevice"),
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnRemoveDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRemoveDevice"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnRemoveDevice"));
        flxDeviceSettings.add(btnSuspendDevice, btnUnsuspendDevice, flxSeperatorone, btnRemoveDevice);
        var flxCancel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "58dp",
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "CopysknFlxPopupDocuments0ed331d51146444",
            "top": "10dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxCancel"), extendConfig({}, controller.args[1], "flxCancel"), extendConfig({}, controller.args[2], "flxCancel"));
        flxCancel.setDefaultUnit(kony.flex.DP);
        var btnCancel = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "58dp",
            "id": "btnCancel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnSFProDisplayBold20pxFont007AFFBgfff",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnCancel"));
        flxCancel.add(btnCancel);
        flxDeviceSettingsPopup.add(flxDeviceSettings, flxCancel);
        flxPopups.add(flxCustomDevicePopup, flxDeviceSettingsPopup);
        var flxLogoutScreen = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLogoutScreen",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgImage",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxLogoutScreen"), extendConfig({}, controller.args[1], "flxLogoutScreen"), extendConfig({}, controller.args[2], "flxLogoutScreen"));
        flxLogoutScreen.setDefaultUnit(kony.flex.DP);
        var imgKonyLogo = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "20%",
            "id": "imgKonyLogo",
            "isVisible": true,
            "src": "infinity_digi_bank.png",
            "top": "0%",
            "width": "180dp",
            "zIndex": 13
        }, controller.args[0], "imgKonyLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgKonyLogo"), extendConfig({}, controller.args[2], "imgKonyLogo"));
        var flxContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "79%",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "21%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContent"), extendConfig({}, controller.args[1], "flxContent"), extendConfig({}, controller.args[2], "flxContent"));
        flxContent.setDefaultUnit(kony.flex.DP);
        var flxSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSuccess",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "11%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxSuccess"), extendConfig({}, controller.args[1], "flxSuccess"), extendConfig({}, controller.args[2], "flxSuccess"));
        flxSuccess.setDefaultUnit(kony.flex.DP);
        var imgGreenTick = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "60dp",
            "id": "imgGreenTick",
            "isVisible": true,
            "skin": "slImage",
            "src": "logouttick.png",
            "top": "13dp",
            "width": "60dp",
            "zIndex": 4
        }, controller.args[0], "imgGreenTick"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGreenTick"), extendConfig({}, controller.args[2], "imgGreenTick"));
        var lblCongrats = new kony.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "lblCongrats",
            "isVisible": true,
            "skin": "skn000000SSPSemiBold24PX",
            "text": "You've suspended the device successfully.",
            "textStyle": {},
            "top": "10dp",
            "width": "65%",
            "zIndex": 4
        }, controller.args[0], "lblCongrats"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCongrats"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCongrats"));
        flxSuccess.add(imgGreenTick, lblCongrats);
        var btnLogIn = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnLogIn",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e426pxEnabled",
            "text": kony.i18n.getLocalizedString("kony.mb.login.logIn"),
            "zIndex": 1
        }, controller.args[0], "btnLogIn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogIn"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnLogIn"));
        flxContent.add(flxSuccess, btnLogIn);
        flxLogoutScreen.add(imgKonyLogo, flxContent);
        var sdk = new com.temenos.hidapprove.sdk(extendConfig({
            "height": "100%",
            "id": "sdk",
            "isVisible": false,
            "left": "-5dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-4dp",
            "width": "100%",
            "zIndex": 210,
            "overrides": {
                "sdk": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "sdk"), extendConfig({
            "overrides": {}
        }, controller.args[1], "sdk"), extendConfig({
            "overrides": {}
        }, controller.args[2], "sdk"));
        sdk.pushId = "";
        registeredDevices.add(flxRegisteredDevicesContainer, flxPopups, flxLogoutScreen, sdk);
        return registeredDevices;
    }
})