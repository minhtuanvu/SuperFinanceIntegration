define(function() {
    return function(controller) {
        var securityNotification = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "securityNotification",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_b5cc6c5eb5c14a90a737e4f1435c7e80(eventobject);
            },
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "securityNotification"), extendConfig({}, controller.args[1], "securityNotification"), extendConfig({}, controller.args[2], "securityNotification"));
        securityNotification.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "56dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx003e75Bg",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBack",
            "isVisible": true,
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
        var lblScreenName = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblScreenName",
            "isVisible": true,
            "left": "15%",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP30px",
            "text": "Security Notifications",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblScreenName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblScreenName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblScreenName"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "CopyCopysknBtnffffffSSP",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": false,
            "right": "20dp",
            "skin": "CopyCopysknBtnffffffSSP",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnCancel"));
        flxHeader.add(flxBack, lblScreenName, btnCancel);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "56dp",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxTopMsg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxTopMsg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffffShadowdcdde1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTopMsg"), extendConfig({}, controller.args[1], "flxTopMsg"), extendConfig({}, controller.args[2], "flxTopMsg"));
        flxTopMsg.setDefaultUnit(kony.flex.DP);
        var lblTopMsg = new kony.ui.Label(extendConfig({
            "id": "lblTopMsg",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424215pxSSPR",
            "text": "You’ll receive all security noifications here. Please authunticate a notification to access Infinity.",
            "textStyle": {},
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTopMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTopMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTopMsg"));
        var flxGradient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxGradient",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxGradientEEEEEEToFFFFFF",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxGradient"), extendConfig({}, controller.args[1], "flxGradient"), extendConfig({}, controller.args[2], "flxGradient"));
        flxGradient.setDefaultUnit(kony.flex.DP);
        flxGradient.add();
        flxTopMsg.add(lblTopMsg, flxGradient);
        var flxNotificationForUser = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxNotificationForUser",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6Bg",
            "top": "86dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxNotificationForUser"), extendConfig({}, controller.args[1], "flxNotificationForUser"), extendConfig({}, controller.args[2], "flxNotificationForUser"));
        flxNotificationForUser.setDefaultUnit(kony.flex.DP);
        var flxNotificationForUserInner = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotificationForUserInner",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxNotificationForUserInner"), extendConfig({}, controller.args[1], "flxNotificationForUserInner"), extendConfig({}, controller.args[2], "flxNotificationForUserInner"));
        flxNotificationForUserInner.setDefaultUnit(kony.flex.DP);
        var lblNotificationFor = new kony.ui.Label(extendConfig({
            "id": "lblNotificationFor",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl424242SSPR18px",
            "text": "Notifications For:",
            "textStyle": {},
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNotificationFor"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotificationFor"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNotificationFor"));
        var lblUserName = new kony.ui.Label(extendConfig({
            "id": "lblUserName",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLblSSPSemiBold18px424242",
            "text": " john.baiely",
            "textStyle": {},
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUserName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblUserName"));
        flxNotificationForUserInner.add(lblNotificationFor, lblUserName);
        var lblSeparatorNotificationFor = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "centerX": "50%",
            "height": "1dp",
            "id": "lblSeparatorNotificationFor",
            "isVisible": true,
            "skin": "lblSeparator",
            "text": "-",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparatorNotificationFor"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparatorNotificationFor"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSeparatorNotificationFor"));
        flxNotificationForUser.add(flxNotificationForUserInner, lblSeparatorNotificationFor);
        var flxNotifications = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "90dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxNotifications",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "90dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxNotifications"), extendConfig({}, controller.args[1], "flxNotifications"), extendConfig({}, controller.args[2], "flxNotifications"));
        flxNotifications.setDefaultUnit(kony.flex.DP);
        var segNotifications = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblDateTime": "02/12/2021, 10:30am",
                "lblNotification": "Sign in Notification"
            }, {
                "lblDateTime": "02/12/2021, 10:30am",
                "lblNotification": "Sign in Notification"
            }, {
                "lblDateTime": "02/12/2021, 10:30am",
                "lblNotification": "Sign in Notification"
            }],
            "groupCells": false,
            "id": "segNotifications",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegf9f9f9",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxNotification",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "e3e3e300",
            "separatorRequired": true,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxNotification": "flxNotification",
                "flxNotificationInner": "flxNotificationInner",
                "lblDateTime": "lblDateTime",
                "lblNotification": "lblNotification"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segNotifications"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segNotifications"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segNotifications"));
        var flxNoNotificationFound = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNoNotificationFound",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNoNotificationFound"), extendConfig({}, controller.args[1], "flxNoNotificationFound"), extendConfig({}, controller.args[2], "flxNoNotificationFound"));
        flxNoNotificationFound.setDefaultUnit(kony.flex.DP);
        var lblNoNotifications = new kony.ui.Label(extendConfig({
            "id": "lblNoNotifications",
            "isVisible": true,
            "left": "50dp",
            "skin": "ICSknLbl42424215pxSSPR",
            "text": "No new notifications found",
            "textStyle": {},
            "top": "30dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNoNotifications"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoNotifications"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoNotifications"));
        var imgInfo = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgInfo",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "infogrey.png",
            "top": "30dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgInfo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgInfo"), extendConfig({}, controller.args[2], "imgInfo"));
        flxNoNotificationFound.add(lblNoNotifications, imgInfo);
        flxNotifications.add(segNotifications, flxNoNotificationFound);
        var btnCheckNewNotification = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "height": "50dp",
            "id": "btnCheckNewNotification",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBg003E75Border1pxRad4pxFont15pxFFFFFF",
            "text": "Check for New Notifications",
            "zIndex": 1
        }, controller.args[0], "btnCheckNewNotification"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCheckNewNotification"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnCheckNewNotification"));
        flxMainContainer.add(flxTopMsg, flxNotificationForUser, flxNotifications, btnCheckNewNotification);
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
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var flxNoNotificationPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "18%",
            "id": "flxNoNotificationPopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "11%",
            "isModalContainer": false,
            "right": "11%",
            "skin": "CopysknFlxffffffB2",
            "zIndex": 1
        }, controller.args[0], "flxNoNotificationPopup"), extendConfig({}, controller.args[1], "flxNoNotificationPopup"), extendConfig({}, controller.args[2], "flxNoNotificationPopup"));
        flxNoNotificationPopup.setDefaultUnit(kony.flex.DP);
        var flxNoRecords = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "30%",
            "clipBounds": true,
            "id": "flxNoRecords",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxNoRecords"), extendConfig({}, controller.args[1], "flxNoRecords"), extendConfig({}, controller.args[2], "flxNoRecords"));
        flxNoRecords.setDefaultUnit(kony.flex.DP);
        var lblNoRecords = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblNoRecords",
            "isVisible": true,
            "skin": "sknLblSSPSemiBold18px424242",
            "text": "No new notifications found",
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblNoRecords"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoRecords"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoRecords"));
        flxNoRecords.add(lblNoRecords);
        var lblSeparator = new kony.ui.Label(extendConfig({
            "bottom": "35%",
            "centerX": "50%",
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "skin": "lblSeparator",
            "text": "-",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSeparator"));
        var btnOK = new kony.ui.Button(extendConfig({
            "bottom": "0dp",
            "centerX": "50%",
            "height": "34%",
            "id": "btnOK",
            "isVisible": true,
            "skin": "sknBtnBgFFFFFFFont4176A4",
            "text": "OK",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnOK"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOK"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnOK"));
        flxNoNotificationPopup.add(flxNoRecords, lblSeparator, btnOK);
        flxPopup.add(flxNoNotificationPopup);
        securityNotification.add(flxHeader, flxMainContainer, sdk, flxPopup);
        return securityNotification;
    }
})