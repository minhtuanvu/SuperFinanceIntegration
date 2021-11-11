define(function() {
    return function(controller) {
        var cantSignIn = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "cantSignIn",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_b45fa1ae42f04d81ac2e05f92ea46cc8(eventobject);
            },
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "cantSignIn"), extendConfig({}, controller.args[1], "cantSignIn"), extendConfig({}, controller.args[2], "cantSignIn"));
        cantSignIn.setDefaultUnit(kony.flex.DP);
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
            "skin": "sknFlx1a98ff",
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
            "isVisible": false,
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
            "text": "Profile Activation",
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
            "focusSkin": "sknBtnffffffSSP28px",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknBtnffffffSSP28px",
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
            "bottom": "32.00%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainContainer",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxWelcome = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33%",
            "id": "flxWelcome",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxWelcome"), extendConfig({}, controller.args[1], "flxWelcome"), extendConfig({}, controller.args[2], "flxWelcome"));
        flxWelcome.setDefaultUnit(kony.flex.DP);
        var flxUserImage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "47dp",
            "id": "flxUserImage",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxProfileImage",
            "top": "24dp",
            "width": "47dp",
            "zIndex": 1
        }, controller.args[0], "flxUserImage"), extendConfig({}, controller.args[1], "flxUserImage"), extendConfig({}, controller.args[2], "flxUserImage"));
        flxUserImage.setDefaultUnit(kony.flex.DP);
        var imgUser = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgUser",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "userimg.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgUser"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgUser"), extendConfig({}, controller.args[2], "imgUser"));
        flxUserImage.add(imgUser);
        var lblWelcomeBack = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblWelcomeBack",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg36pxop100",
            "text": kony.i18n.getLocalizedString("kony.mb.resetPassword.WelcomeBack"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblWelcomeBack"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcomeBack"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblWelcomeBack"));
        var lblUsername = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblUsername",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg36pxop100",
            "text": "john.suresh",
            "textStyle": {},
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUsername"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUsername"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblUsername"));
        flxWelcome.add(flxUserImage, lblWelcomeBack, lblUsername);
        var flxUsersContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "67%",
            "id": "flxUsersContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%"
        }, controller.args[0], "flxUsersContainer"), extendConfig({}, controller.args[1], "flxUsersContainer"), extendConfig({}, controller.args[2], "flxUsersContainer"));
        flxUsersContainer.setDefaultUnit(kony.flex.DP);
        var flxUsers = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "70%",
            "horizontalScrollIndicator": true,
            "id": "flxUsers",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxUsers"), extendConfig({}, controller.args[1], "flxUsers"), extendConfig({}, controller.args[2], "flxUsers"));
        flxUsers.setDefaultUnit(kony.flex.DP);
        var segUsersList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgIsUserSelected": "radiobtn.png",
                "lblUserId": "john.baiely"
            }, {
                "imgIsUserSelected": "radiobuttoninactive.png",
                "lblUserId": "lucille.morris"
            }, {
                "imgIsUserSelected": "radiobuttoninactive.png",
                "lblUserId": "helena.owen"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segUsersList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxSelectUserId",
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
                "flxSelectUserId": "flxSelectUserId",
                "imgIsUserSelected": "imgIsUserSelected",
                "lblUserId": "lblUserId"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segUsersList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segUsersList"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segUsersList"));
        flxUsers.add(segUsersList);
        var flxDone = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxDone",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDone"), extendConfig({}, controller.args[1], "flxDone"), extendConfig({}, controller.args[2], "flxDone"));
        flxDone.setDefaultUnit(kony.flex.DP);
        var btnDone = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnDone",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBg003E75Border1pxFont15pxFFFFFF",
            "text": "Done",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "btnDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDone"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnDone"));
        flxDone.add(btnDone);
        flxUsersContainer.add(flxUsers, flxDone);
        var flxLostDeviceContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "67%",
            "id": "flxLostDeviceContainer",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%"
        }, controller.args[0], "flxLostDeviceContainer"), extendConfig({}, controller.args[1], "flxLostDeviceContainer"), extendConfig({}, controller.args[2], "flxLostDeviceContainer"));
        flxLostDeviceContainer.setDefaultUnit(kony.flex.DP);
        var flxOption = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxOption",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOption"), extendConfig({}, controller.args[1], "flxOption"), extendConfig({}, controller.args[2], "flxOption"));
        flxOption.setDefaultUnit(kony.flex.DP);
        var lbHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lbHeader",
            "isVisible": true,
            "skin": "sknLbl424242SSP26px",
            "text": kony.i18n.getLocalizedString("kony.resetInformation.selectOption"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lbHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lbHeader"));
        flxOption.add(lbHeader);
        var flxLostDevice = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "120dp",
            "id": "flxLostDevice",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "flxLostDevice"), extendConfig({}, controller.args[1], "flxLostDevice"), extendConfig({}, controller.args[2], "flxLostDevice"));
        flxLostDevice.setDefaultUnit(kony.flex.DP);
        var flxLostDeviceOption = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxLostDeviceOption",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxFFFFFFBorderE9E9E9Radius4px",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLostDeviceOption"), extendConfig({}, controller.args[1], "flxLostDeviceOption"), extendConfig({}, controller.args[2], "flxLostDeviceOption"));
        flxLostDeviceOption.setDefaultUnit(kony.flex.DP);
        var imgLostDeviceIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgLostDeviceIcon",
            "isVisible": true,
            "left": "11dp",
            "skin": "slImage",
            "src": "resetpassword.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgLostDeviceIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLostDeviceIcon"), extendConfig({}, controller.args[2], "imgLostDeviceIcon"));
        var flxVerticalSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerticalSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "50dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9Rounded",
            "top": "0%",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "flxVerticalSeparator2"), extendConfig({}, controller.args[1], "flxVerticalSeparator2"), extendConfig({}, controller.args[2], "flxVerticalSeparator2"));
        flxVerticalSeparator2.setDefaultUnit(kony.flex.DP);
        flxVerticalSeparator2.add();
        var lblLostDevice = new kony.ui.Label(extendConfig({
            "centerY": "50.00%",
            "id": "lblLostDevice",
            "isVisible": true,
            "left": "62dp",
            "skin": "sknLbl424242SSP26px",
            "text": kony.i18n.getLocalizedString("kony.resetInformation.lostDevice"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLostDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLostDevice"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLostDevice"));
        var imgRightArrow2 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgRightArrow2",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "calenderarrowright_2.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgRightArrow2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgRightArrow2"), extendConfig({}, controller.args[2], "imgRightArrow2"));
        flxLostDeviceOption.add(imgLostDeviceIcon, flxVerticalSeparator2, lblLostDevice, imgRightArrow2);
        var flxLostDeviceDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxLostDeviceDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLostDeviceDescription"), extendConfig({}, controller.args[1], "flxLostDeviceDescription"), extendConfig({}, controller.args[2], "flxLostDeviceDescription"));
        flxLostDeviceDescription.setDefaultUnit(kony.flex.DP);
        var imgInformationIcon2 = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgInformationIcon2",
            "isVisible": true,
            "left": "5dp",
            "skin": "slImage",
            "src": "infoappbar.png",
            "top": "7dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgInformationIcon2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgInformationIcon2"), extendConfig({}, controller.args[2], "imgInformationIcon2"));
        var lblLostDeviceDescription = new kony.ui.Label(extendConfig({
            "id": "lblLostDeviceDescription",
            "isVisible": true,
            "left": "33dp",
            "right": "5dp",
            "skin": "sknLbl424242SSP22px",
            "text": kony.i18n.getLocalizedString("kony.resetInformation.lostDeviceMsg"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLostDeviceDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLostDeviceDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLostDeviceDescription"));
        flxLostDeviceDescription.add(imgInformationIcon2, lblLostDeviceDescription);
        flxLostDevice.add(flxLostDeviceOption, flxLostDeviceDescription);
        flxLostDeviceContainer.add(flxOption, flxLostDevice);
        flxMainContainer.add(flxWelcome, flxUsersContainer, flxLostDeviceContainer);
        var flxPasswordContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "93%",
            "id": "flxPasswordContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "56dp",
            "width": "100%"
        }, controller.args[0], "flxPasswordContainer"), extendConfig({}, controller.args[1], "flxPasswordContainer"), extendConfig({}, controller.args[2], "flxPasswordContainer"));
        flxPasswordContainer.setDefaultUnit(kony.flex.DP);
        var flxPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPassword"), extendConfig({}, controller.args[1], "flxPassword"), extendConfig({}, controller.args[2], "flxPassword"));
        flxPassword.setDefaultUnit(kony.flex.DP);
        var flxTitleMsg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxTitleMsg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTitleMsg"), extendConfig({}, controller.args[1], "flxTitleMsg"), extendConfig({}, controller.args[2], "flxTitleMsg"));
        flxTitleMsg.setDefaultUnit(kony.flex.DP);
        var lblTitleMsg = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblTitleMsg",
            "isVisible": true,
            "skin": "sknLbl424242SSP26px",
            "text": kony.i18n.getLocalizedString("kony.resetInformation.enterPasswordMsg"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTitleMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitleMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTitleMsg"));
        flxTitleMsg.add(lblTitleMsg);
        var tbxPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "tbxPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.resetInformation.enterPassword"),
            "right": "20dp",
            "secureTextEntry": true,
            "skin": "sknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "95dp",
            "zIndex": 1
        }, controller.args[0], "tbxPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "tbxPassword"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxPassword"));
        var flxMaskIcon = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxMaskIcon",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "26dp",
            "skin": "slFbox",
            "top": "100dp",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxMaskIcon"), extendConfig({}, controller.args[1], "flxMaskIcon"), extendConfig({}, controller.args[2], "flxMaskIcon"));
        flxMaskIcon.setDefaultUnit(kony.flex.DP);
        var imgMaskIcon = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgMaskIcon",
            "isVisible": true,
            "skin": "slImage",
            "src": "viewicon.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgMaskIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMaskIcon"), extendConfig({}, controller.args[2], "imgMaskIcon"));
        flxMaskIcon.add(imgMaskIcon);
        var flxContinue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "48dp",
            "id": "flxContinue",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContinue"), extendConfig({}, controller.args[1], "flxContinue"), extendConfig({}, controller.args[2], "flxContinue"));
        flxContinue.setDefaultUnit(kony.flex.DP);
        var btnContinue = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBg003E75Border1pxFont15pxFFFFFF",
            "text": kony.i18n.getLocalizedString("kony.mb.CM.continue"),
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "btnContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinue"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContinue"));
        flxContinue.add(btnContinue);
        flxPassword.add(flxTitleMsg, tbxPassword, flxMaskIcon, flxContinue);
        var flxSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSuccess",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxSuccess"), extendConfig({}, controller.args[1], "flxSuccess"), extendConfig({}, controller.args[2], "flxSuccess"));
        flxSuccess.setDefaultUnit(kony.flex.DP);
        var imgGreenTick = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgGreenTick",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "100dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgGreenTick"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGreenTick"), extendConfig({}, controller.args[2], "imgGreenTick"));
        var flxStatus = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "190dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxStatus"), extendConfig({}, controller.args[1], "flxStatus"), extendConfig({}, controller.args[2], "flxStatus"));
        flxStatus.setDefaultUnit(kony.flex.DP);
        var lblPasswordSuccess = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblPasswordSuccess",
            "isVisible": true,
            "skin": "CopyCopysknlbl1",
            "text": kony.i18n.getLocalizedString("kony.mb.success"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPasswordSuccess"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPasswordSuccess"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPasswordSuccess"));
        var lblDescription = new kony.ui.Label(extendConfig({
            "id": "lblDescription",
            "isVisible": true,
            "left": "30dp",
            "right": "30dp",
            "skin": "CopyCopysknLbl2",
            "text": kony.i18n.getLocalizedString("kony.resetInformation.PasswordConfirmationSuccessMsg"),
            "textStyle": {},
            "top": "50dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDescription"));
        flxStatus.add(lblPasswordSuccess, lblDescription);
        var btnActivateProfile = new kony.ui.Button(extendConfig({
            "bottom": "10dp",
            "focusSkin": "CopyCopysknBtn1",
            "height": "40dp",
            "id": "btnActivateProfile",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopyCopysknBtn",
            "text": "Activate Your Account",
            "zIndex": 1
        }, controller.args[0], "btnActivateProfile"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnActivateProfile"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnActivateProfile"));
        flxSuccess.add(imgGreenTick, flxStatus, btnActivateProfile);
        flxPasswordContainer.add(flxPassword, flxSuccess);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
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
            "zIndex": 1001
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var customPopup = new com.kmb.common.customPopup(extendConfig({
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
                "imgPopup": {
                    "src": "imagedrag.png"
                }
            }
        }, controller.args[0], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customPopup"));
        flxPopup.add(customPopup);
        cantSignIn.add(flxHeader, flxMainContainer, flxPasswordContainer, flxPopup);
        return cantSignIn;
    }
})