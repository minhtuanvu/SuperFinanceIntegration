define(function() {
    return function(controller) {
        var AddNewAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "AddNewAccount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_g177081f5f6246ada9b37a27566eb517(eventobject);
            },
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "AddNewAccount"), extendConfig({}, controller.args[1], "AddNewAccount"), extendConfig({}, controller.args[2], "AddNewAccount"));
        AddNewAccount.setDefaultUnit(kony.flex.DP);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf54b5e",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
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
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "imgPopup": {
                    "src": "errormessage.png",
                    "top": "10dp"
                },
                "lblPopup": {
                    "top": "10dp"
                }
            }
        }, controller.args[0], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customPopup"));
        flxPopup.add(customPopup);
        var flxPayeeName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPayeeName",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPayeeName"), extendConfig({}, controller.args[1], "flxPayeeName"), extendConfig({}, controller.args[2], "flxPayeeName"));
        flxPayeeName.setDefaultUnit(kony.flex.DP);
        var flxPayeeNameMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPayeeNameMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNameMain"), extendConfig({}, controller.args[1], "flxPayeeNameMain"), extendConfig({}, controller.args[2], "flxPayeeNameMain"));
        flxPayeeNameMain.setDefaultUnit(kony.flex.DP);
        var flxPayeeNameHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPayeeNameHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNameHeader"), extendConfig({}, controller.args[1], "flxPayeeNameHeader"), extendConfig({}, controller.args[2], "flxPayeeNameHeader"));
        flxPayeeNameHeader.setDefaultUnit(kony.flex.DP);
        var flxPayeeNameTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPayeeNameTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNameTop"), extendConfig({}, controller.args[1], "flxPayeeNameTop"), extendConfig({}, controller.args[2], "flxPayeeNameTop"));
        flxPayeeNameTop.setDefaultUnit(kony.flex.DP);
        var flxPayeeNameBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxPayeeNameBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNameBack"), extendConfig({}, controller.args[1], "flxPayeeNameBack"), extendConfig({}, controller.args[2], "flxPayeeNameBack"));
        flxPayeeNameBack.setDefaultUnit(kony.flex.DP);
        var imgPayeesNameBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgPayeesNameBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgPayeesNameBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPayeesNameBack"), extendConfig({}, controller.args[2], "imgPayeesNameBack"));
        flxPayeeNameBack.add(imgPayeesNameBack);
        var btnPayeeNameCancel = new kony.ui.Button(extendConfig({
            "centerY": "15dp",
            "height": "20dp",
            "id": "btnPayeeNameCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnPayeeNameCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPayeeNameCancel"), extendConfig({}, controller.args[2], "btnPayeeNameCancel"));
        flxPayeeNameTop.add(flxPayeeNameBack, btnPayeeNameCancel);
        var lblPynsSectionHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblPynsSectionHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.payeesName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPynsSectionHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPynsSectionHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPynsSectionHeader"));
        flxPayeeNameHeader.add(flxPayeeNameTop, lblPynsSectionHeader);
        var flxPayeeNameSubHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxPayeeNameSubHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNameSubHeader"), extendConfig({}, controller.args[1], "flxPayeeNameSubHeader"), extendConfig({}, controller.args[2], "flxPayeeNameSubHeader"));
        flxPayeeNameSubHeader.setDefaultUnit(kony.flex.DP);
        var lblPynsSubHeader = new kony.ui.Label(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblPynsSubHeader",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.enterPayeeName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "14dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPynsSubHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPynsSubHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPynsSubHeader"));
        flxPayeeNameSubHeader.add(lblPynsSubHeader);
        var flxPayeenameSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxPayeenameSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeenameSeparator"), extendConfig({}, controller.args[1], "flxPayeenameSeparator"), extendConfig({}, controller.args[2], "flxPayeenameSeparator"));
        flxPayeenameSeparator.setDefaultUnit(kony.flex.DP);
        flxPayeenameSeparator.add();
        var flxPayeeNameMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75%",
            "id": "flxPayeeNameMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxPayeeNameMainContainer"), extendConfig({}, controller.args[1], "flxPayeeNameMainContainer"), extendConfig({}, controller.args[2], "flxPayeeNameMainContainer"));
        flxPayeeNameMainContainer.setDefaultUnit(kony.flex.DP);
        var lblPayeeNameErrMsg = new kony.ui.Label(extendConfig({
            "bottom": "11dp",
            "height": "35dp",
            "id": "lblPayeeNameErrMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.payeeNameErrorMsg"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPayeeNameErrMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPayeeNameErrMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPayeeNameErrMsg"));
        var flxPayeeNameWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxPayeeNameWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "top": "46dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNameWrapper"), extendConfig({}, controller.args[1], "flxPayeeNameWrapper"), extendConfig({}, controller.args[2], "flxPayeeNameWrapper"));
        flxPayeeNameWrapper.setDefaultUnit(kony.flex.DP);
        var txtPayeeName = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxb003E75Rds3PXFnt424242",
            "height": "45dp",
            "id": "txtPayeeName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.payeePlaceholder"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSP424242Rds3PX",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtPayeeName"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtPayeeName"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtPayeeName"));
        flxPayeeNameWrapper.add(txtPayeeName);
        var btnPayeeNameContinue = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnPayeeNameContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "top": "250dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnPayeeNameContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPayeeNameContinue"), extendConfig({}, controller.args[2], "btnPayeeNameContinue"));
        flxPayeeNameMainContainer.add(lblPayeeNameErrMsg, flxPayeeNameWrapper, btnPayeeNameContinue);
        flxPayeeNameMain.add(flxPayeeNameHeader, flxPayeeNameSubHeader, flxPayeenameSeparator, flxPayeeNameMainContainer);
        flxPayeeName.add(flxPayeeNameMain);
        var flxAccountNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccountNumber",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumber"), extendConfig({}, controller.args[1], "flxAccountNumber"), extendConfig({}, controller.args[2], "flxAccountNumber"));
        flxAccountNumber.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccountNumberMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAccountNumberMain"), extendConfig({}, controller.args[1], "flxAccountNumberMain"), extendConfig({}, controller.args[2], "flxAccountNumberMain"));
        flxAccountNumberMain.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAccountNumberHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberHeader"), extendConfig({}, controller.args[1], "flxAccountNumberHeader"), extendConfig({}, controller.args[2], "flxAccountNumberHeader"));
        flxAccountNumberHeader.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAccountNumberTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberTop"), extendConfig({}, controller.args[1], "flxAccountNumberTop"), extendConfig({}, controller.args[2], "flxAccountNumberTop"));
        flxAccountNumberTop.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxAccountNumberBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberBack"), extendConfig({}, controller.args[1], "flxAccountNumberBack"), extendConfig({}, controller.args[2], "flxAccountNumberBack"));
        flxAccountNumberBack.setDefaultUnit(kony.flex.DP);
        var imgAccountNumberBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgAccountNumberBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgAccountNumberBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAccountNumberBack"), extendConfig({}, controller.args[2], "imgAccountNumberBack"));
        flxAccountNumberBack.add(imgAccountNumberBack);
        var btnAccountNumberCancel = new kony.ui.Button(extendConfig({
            "centerY": "15dp",
            "height": "20dp",
            "id": "btnAccountNumberCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnAccountNumberCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAccountNumberCancel"), extendConfig({}, controller.args[2], "btnAccountNumberCancel"));
        flxAccountNumberTop.add(flxAccountNumberBack, btnAccountNumberCancel);
        var lblAccountNumberHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": kony.flex.USE_PREFFERED_SIZE,
            "id": "lblAccountNumberHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblAccountNumberHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountNumberHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAccountNumberHeader"));
        flxAccountNumberHeader.add(flxAccountNumberTop, lblAccountNumberHeader);
        var flxAccountNumberSubHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxAccountNumberSubHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberSubHeader"), extendConfig({}, controller.args[1], "flxAccountNumberSubHeader"), extendConfig({}, controller.args[2], "flxAccountNumberSubHeader"));
        flxAccountNumberSubHeader.setDefaultUnit(kony.flex.DP);
        var lblAccountNumberSubHeader = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAccountNumberSubHeader",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("kony.reqCode.EnterAccountNumber"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblAccountNumberSubHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountNumberSubHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAccountNumberSubHeader"));
        flxAccountNumberSubHeader.add(lblAccountNumberSubHeader);
        var flxAccountNumberSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxAccountNumberSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberSeparator"), extendConfig({}, controller.args[1], "flxAccountNumberSeparator"), extendConfig({}, controller.args[2], "flxAccountNumberSeparator"));
        flxAccountNumberSeparator.setDefaultUnit(kony.flex.DP);
        flxAccountNumberSeparator.add();
        var flxAccountNumberMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35%",
            "id": "flxAccountNumberMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxAccountNumberMainContainer"), extendConfig({}, controller.args[1], "flxAccountNumberMainContainer"), extendConfig({}, controller.args[2], "flxAccountNumberMainContainer"));
        flxAccountNumberMainContainer.setDefaultUnit(kony.flex.DP);
        var lblAccountNumberErrorMsg = new kony.ui.Label(extendConfig({
            "bottom": "-45dp",
            "centerX": "50%",
            "id": "lblAccountNumberErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblAccountNumberErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountNumberErrorMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAccountNumberErrorMsg"));
        var flxAccountNumberWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxAccountNumberWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "CopysknFlxffffff",
            "top": "75dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberWrapper"), extendConfig({}, controller.args[1], "flxAccountNumberWrapper"), extendConfig({}, controller.args[2], "flxAccountNumberWrapper"));
        flxAccountNumberWrapper.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberInput = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxAccountNumberInput",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberInput"), extendConfig({}, controller.args[1], "flxAccountNumberInput"), extendConfig({}, controller.args[2], "flxAccountNumberInput"));
        flxAccountNumberInput.setDefaultUnit(kony.flex.DP);
        var lblDigit1 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit1",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit1"));
        var lblDigit2 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit2",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit2"));
        var lblDigit3 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit3",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit3"));
        var lblDigit4 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit4",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit4"));
        var lblDigit5 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit5",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit5"));
        var lblDigit6 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit6",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit6"));
        var lblDigit7 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit7",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit7"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit7"));
        var lblDigit8 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit8",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit8"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit8"));
        var lblDigit9 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit9",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit9"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit9"));
        var lblDigit10 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit10",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit10"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit10"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit10"));
        var lblDigit11 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit11",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit11"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit11"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit11"));
        var lblDigit12 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit12",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl949494116px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit12"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit12"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit12"));
        flxAccountNumberInput.add(lblDigit1, lblDigit2, lblDigit3, lblDigit4, lblDigit5, lblDigit6, lblDigit7, lblDigit8, lblDigit9, lblDigit10, lblDigit11, lblDigit12);
        var flxAccountNumberInputLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxAccountNumberInputLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "13dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberInputLine"), extendConfig({}, controller.args[1], "flxAccountNumberInputLine"), extendConfig({}, controller.args[2], "flxAccountNumberInputLine"));
        flxAccountNumberInputLine.setDefaultUnit(kony.flex.DP);
        flxAccountNumberInputLine.add();
        flxAccountNumberWrapper.add(flxAccountNumberInput, flxAccountNumberInputLine);
        var flxAccountNumberorIBANWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxAccountNumberorIBANWrapper",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "25%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberorIBANWrapper"), extendConfig({}, controller.args[1], "flxAccountNumberorIBANWrapper"), extendConfig({}, controller.args[2], "flxAccountNumberorIBANWrapper"));
        flxAccountNumberorIBANWrapper.setDefaultUnit(kony.flex.DP);
        var txtAccountNumberorIBAN = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "45dp",
            "id": "txtAccountNumberorIBAN",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter Account Number or IBAN",
            "right": "20dp",
            "secureTextEntry": true,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtAccountNumberorIBAN"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtAccountNumberorIBAN"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAccountNumberorIBAN"));
        flxAccountNumberorIBANWrapper.add(txtAccountNumberorIBAN);
        flxAccountNumberMainContainer.add(lblAccountNumberErrorMsg, flxAccountNumberWrapper, flxAccountNumberorIBANWrapper);
        flxAccountNumberMain.add(flxAccountNumberHeader, flxAccountNumberSubHeader, flxAccountNumberSeparator, flxAccountNumberMainContainer);
        var btnAccountNumberContinue = new kony.ui.Button(extendConfig({
            "bottom": "37%",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "45dp",
            "id": "btnAccountNumberContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnE2E9F0t42424234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnAccountNumberContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAccountNumberContinue"), extendConfig({}, controller.args[2], "btnAccountNumberContinue"));
        var flxAccountNumberKeyboard = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "35%",
            "id": "flxAccountNumberKeyboard",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxAccountNumberKeyboard"), extendConfig({}, controller.args[1], "flxAccountNumberKeyboard"), extendConfig({}, controller.args[2], "flxAccountNumberKeyboard"));
        flxAccountNumberKeyboard.setDefaultUnit(kony.flex.DP);
        var flxKeyboardSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxKeyboardSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE9E9E91px",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxKeyboardSeparator"), extendConfig({}, controller.args[1], "flxKeyboardSeparator"), extendConfig({}, controller.args[2], "flxKeyboardSeparator"));
        flxKeyboardSeparator.setDefaultUnit(kony.flex.DP);
        flxKeyboardSeparator.add();
        var flxRowOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRowOne"), extendConfig({}, controller.args[1], "flxRowOne"), extendConfig({}, controller.args[2], "flxRowOne"));
        flxRowOne.setDefaultUnit(kony.flex.DP);
        var btnNumber1 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber1"), extendConfig({}, controller.args[2], "btnNumber1"));
        var btnNumber2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber2",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber2"), extendConfig({}, controller.args[2], "btnNumber2"));
        var btnNumber3 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber3",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber3"), extendConfig({}, controller.args[2], "btnNumber3"));
        flxRowOne.add(btnNumber1, btnNumber2, btnNumber3);
        var flxRowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRowTwo"), extendConfig({}, controller.args[1], "flxRowTwo"), extendConfig({}, controller.args[2], "flxRowTwo"));
        flxRowTwo.setDefaultUnit(kony.flex.DP);
        var btnNumber4 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber4",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber4"), extendConfig({}, controller.args[2], "btnNumber4"));
        var btnNumber5 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber5",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber5"), extendConfig({}, controller.args[2], "btnNumber5"));
        var btnNumber6 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber6",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber6"), extendConfig({}, controller.args[2], "btnNumber6"));
        flxRowTwo.add(btnNumber4, btnNumber5, btnNumber6);
        var flxRowThree = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRowThree"), extendConfig({}, controller.args[1], "flxRowThree"), extendConfig({}, controller.args[2], "flxRowThree"));
        flxRowThree.setDefaultUnit(kony.flex.DP);
        var btnNumber7 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber7",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber7"), extendConfig({}, controller.args[2], "btnNumber7"));
        var btnNumber8 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber8",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber8"), extendConfig({}, controller.args[2], "btnNumber8"));
        var btnNumber9 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber9",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber9"), extendConfig({}, controller.args[2], "btnNumber9"));
        flxRowThree.add(btnNumber7, btnNumber8, btnNumber9);
        var flxRowFour = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRowFour"), extendConfig({}, controller.args[1], "flxRowFour"), extendConfig({}, controller.args[2], "flxRowFour"));
        flxRowFour.setDefaultUnit(kony.flex.DP);
        var btnNumber0 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber0",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber0"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber0"), extendConfig({}, controller.args[2], "btnNumber0"));
        var imgKeypadClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgKeypadClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgKeypadClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgKeypadClear"), extendConfig({}, controller.args[2], "imgKeypadClear"));
        var imgClearOption = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClearOption",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgClearOption"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearOption"), extendConfig({}, controller.args[2], "imgClearOption"));
        var btnDecimalKeySeparator = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnDecimalKeySeparator",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnDecimalKeySeparator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecimalKeySeparator"), extendConfig({}, controller.args[2], "btnDecimalKeySeparator"));
        flxRowFour.add(btnNumber0, imgKeypadClear, imgClearOption, btnDecimalKeySeparator);
        flxAccountNumberKeyboard.add(flxKeyboardSeparator, flxRowOne, flxRowTwo, flxRowThree, flxRowFour);
        flxAccountNumber.add(flxAccountNumberMain, btnAccountNumberContinue, flxAccountNumberKeyboard);
        var flxReEnterAccountNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxReEnterAccountNumber",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxReEnterAccountNumber"), extendConfig({}, controller.args[1], "flxReEnterAccountNumber"), extendConfig({}, controller.args[2], "flxReEnterAccountNumber"));
        flxReEnterAccountNumber.setDefaultUnit(kony.flex.DP);
        var flxReEnterAccountNumberMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxReEnterAccountNumberMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberMain"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberMain"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberMain"));
        flxReEnterAccountNumberMain.setDefaultUnit(kony.flex.DP);
        var flxReEnterAccountNumberHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxReEnterAccountNumberHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberHeader"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberHeader"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberHeader"));
        flxReEnterAccountNumberHeader.setDefaultUnit(kony.flex.DP);
        var flxReEnterAccountNumberTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxReEnterAccountNumberTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberTop"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberTop"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberTop"));
        flxReEnterAccountNumberTop.setDefaultUnit(kony.flex.DP);
        var flxReEnterAccountNumberBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxReEnterAccountNumberBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberBack"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberBack"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberBack"));
        flxReEnterAccountNumberBack.setDefaultUnit(kony.flex.DP);
        var imgReEnterAccountNumberBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgReEnterAccountNumberBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgReEnterAccountNumberBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgReEnterAccountNumberBack"), extendConfig({}, controller.args[2], "imgReEnterAccountNumberBack"));
        flxReEnterAccountNumberBack.add(imgReEnterAccountNumberBack);
        var btnReEnterAccountNumberCancel = new kony.ui.Button(extendConfig({
            "centerY": "15dp",
            "height": "20dp",
            "id": "btnReEnterAccountNumberCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnReEnterAccountNumberCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnReEnterAccountNumberCancel"), extendConfig({}, controller.args[2], "btnReEnterAccountNumberCancel"));
        flxReEnterAccountNumberTop.add(flxReEnterAccountNumberBack, btnReEnterAccountNumberCancel);
        var lblReEnterAccountNumberHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblReEnterAccountNumberHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Account Number",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblReEnterAccountNumberHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReEnterAccountNumberHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblReEnterAccountNumberHeader"));
        flxReEnterAccountNumberHeader.add(flxReEnterAccountNumberTop, lblReEnterAccountNumberHeader);
        var flxReEnterAccountNumberSubHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxReEnterAccountNumberSubHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberSubHeader"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberSubHeader"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberSubHeader"));
        flxReEnterAccountNumberSubHeader.setDefaultUnit(kony.flex.DP);
        var lblReEnterAccountNumberSubHeader = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "height": "50%",
            "id": "lblReEnterAccountNumberSubHeader",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Re-enter the payee account number",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblReEnterAccountNumberSubHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReEnterAccountNumberSubHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblReEnterAccountNumberSubHeader"));
        flxReEnterAccountNumberSubHeader.add(lblReEnterAccountNumberSubHeader);
        var flxReEnterAccountNumberSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxReEnterAccountNumberSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberSeparator"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberSeparator"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberSeparator"));
        flxReEnterAccountNumberSeparator.setDefaultUnit(kony.flex.DP);
        flxReEnterAccountNumberSeparator.add();
        var flxReEnterAccountNumberMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35%",
            "id": "flxReEnterAccountNumberMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxReEnterAccountNumberMainContainer"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberMainContainer"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberMainContainer"));
        flxReEnterAccountNumberMainContainer.setDefaultUnit(kony.flex.DP);
        var lblReEnterAccountNumberErrorMsg = new kony.ui.Label(extendConfig({
            "bottom": "-45dp",
            "centerX": "50%",
            "id": "lblReEnterAccountNumberErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblReEnterAccountNumberErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReEnterAccountNumberErrorMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblReEnterAccountNumberErrorMsg"));
        var flxReEnterAccountNumberWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxReEnterAccountNumberWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "CopysknFlxffffff",
            "top": "75dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberWrapper"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberWrapper"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberWrapper"));
        flxReEnterAccountNumberWrapper.setDefaultUnit(kony.flex.DP);
        var flxReEnterAccountNumberInput = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxReEnterAccountNumberInput",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberInput"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberInput"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberInput"));
        flxReEnterAccountNumberInput.setDefaultUnit(kony.flex.DP);
        var lblDigit01 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit01",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit01"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit01"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit01"));
        var lblDigit02 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit02",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit02"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit02"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit02"));
        var lblDigit03 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit03",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit03"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit03"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit03"));
        var lblDigit04 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit04",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit04"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit04"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit04"));
        var lblDigit05 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit05",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit05"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit05"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit05"));
        var lblDigit06 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit06",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit06"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit06"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit06"));
        var lblDigit07 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit07",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit07"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit07"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit07"));
        var lblDigit08 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit08",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit08"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit08"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit08"));
        var lblDigit09 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit09",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit09"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit09"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit09"));
        var lblDigit010 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit010",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit010"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit010"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit010"));
        var lblDigit011 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit011",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit011"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit011"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit011"));
        var lblDigit012 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit012",
            "isVisible": true,
            "left": "15dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit012"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit012"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDigit012"));
        flxReEnterAccountNumberInput.add(lblDigit01, lblDigit02, lblDigit03, lblDigit04, lblDigit05, lblDigit06, lblDigit07, lblDigit08, lblDigit09, lblDigit010, lblDigit011, lblDigit012);
        var flxReEnterAccountNumberInputLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxReEnterAccountNumberInputLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "13dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberInputLine"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberInputLine"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberInputLine"));
        flxReEnterAccountNumberInputLine.setDefaultUnit(kony.flex.DP);
        flxReEnterAccountNumberInputLine.add();
        flxReEnterAccountNumberWrapper.add(flxReEnterAccountNumberInput, flxReEnterAccountNumberInputLine);
        var flxReAccountNumberorIBANWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxReAccountNumberorIBANWrapper",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "top": "25%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReAccountNumberorIBANWrapper"), extendConfig({}, controller.args[1], "flxReAccountNumberorIBANWrapper"), extendConfig({}, controller.args[2], "flxReAccountNumberorIBANWrapper"));
        flxReAccountNumberorIBANWrapper.setDefaultUnit(kony.flex.DP);
        var txtReEnterAccountNumberorIBAN = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "45dp",
            "id": "txtReEnterAccountNumberorIBAN",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter Re-Account Number or IBAN",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtReEnterAccountNumberorIBAN"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtReEnterAccountNumberorIBAN"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtReEnterAccountNumberorIBAN"));
        flxReAccountNumberorIBANWrapper.add(txtReEnterAccountNumberorIBAN);
        flxReEnterAccountNumberMainContainer.add(lblReEnterAccountNumberErrorMsg, flxReEnterAccountNumberWrapper, flxReAccountNumberorIBANWrapper);
        flxReEnterAccountNumberMain.add(flxReEnterAccountNumberHeader, flxReEnterAccountNumberSubHeader, flxReEnterAccountNumberSeparator, flxReEnterAccountNumberMainContainer);
        var btnReEnterAccountNumberContinue = new kony.ui.Button(extendConfig({
            "bottom": "37%",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "45dp",
            "id": "btnReEnterAccountNumberContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnE2E9F0t42424234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnReEnterAccountNumberContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnReEnterAccountNumberContinue"), extendConfig({}, controller.args[2], "btnReEnterAccountNumberContinue"));
        var flxReEnterAccountNumberKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "35%",
            "id": "flxReEnterAccountNumberKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxReEnterAccountNumberKeypad"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberKeypad"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberKeypad"));
        flxReEnterAccountNumberKeypad.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE9E9E91px",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxSeparator"), extendConfig({}, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxRow1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRow1"), extendConfig({}, controller.args[1], "flxRow1"), extendConfig({}, controller.args[2], "flxRow1"));
        flxRow1.setDefaultUnit(kony.flex.DP);
        var btnNumberOne = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberOne"), extendConfig({}, controller.args[2], "btnNumberOne"));
        var btnNumberTwo = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberTwo",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberTwo"), extendConfig({}, controller.args[2], "btnNumberTwo"));
        var btnNumberThree = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberThree",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberThree"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberThree"), extendConfig({}, controller.args[2], "btnNumberThree"));
        flxRow1.add(btnNumberOne, btnNumberTwo, btnNumberThree);
        var flxRow2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRow2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRow2"), extendConfig({}, controller.args[1], "flxRow2"), extendConfig({}, controller.args[2], "flxRow2"));
        flxRow2.setDefaultUnit(kony.flex.DP);
        var btnNumberFour = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberFour",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberFour"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberFour"), extendConfig({}, controller.args[2], "btnNumberFour"));
        var btnNumberFive = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberFive",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberFive"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberFive"), extendConfig({}, controller.args[2], "btnNumberFive"));
        var btnNumberSix = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberSix",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberSix"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberSix"), extendConfig({}, controller.args[2], "btnNumberSix"));
        flxRow2.add(btnNumberFour, btnNumberFive, btnNumberSix);
        var flxRow3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRow3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRow3"), extendConfig({}, controller.args[1], "flxRow3"), extendConfig({}, controller.args[2], "flxRow3"));
        flxRow3.setDefaultUnit(kony.flex.DP);
        var btnNumberSeven = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberSeven",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberSeven"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberSeven"), extendConfig({}, controller.args[2], "btnNumberSeven"));
        var btnNumberEight = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberEight",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberEight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberEight"), extendConfig({}, controller.args[2], "btnNumberEight"));
        var btnNumberNine = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberNine",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberNine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberNine"), extendConfig({}, controller.args[2], "btnNumberNine"));
        flxRow3.add(btnNumberSeven, btnNumberEight, btnNumberNine);
        var flxRow4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRow4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRow4"), extendConfig({}, controller.args[1], "flxRow4"), extendConfig({}, controller.args[2], "flxRow4"));
        flxRow4.setDefaultUnit(kony.flex.DP);
        var btnNumberZero = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberZero",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberZero"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberZero"), extendConfig({}, controller.args[2], "btnNumberZero"));
        var imgKeypadClearButton = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgKeypadClearButton",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgKeypadClearButton"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgKeypadClearButton"), extendConfig({}, controller.args[2], "imgKeypadClearButton"));
        var imgClearButton = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClearButton",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgClearButton"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearButton"), extendConfig({}, controller.args[2], "imgClearButton"));
        var btnDecimalSeparatorKey = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnDecimalSeparatorKey",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnDecimalSeparatorKey"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecimalSeparatorKey"), extendConfig({}, controller.args[2], "btnDecimalSeparatorKey"));
        flxRow4.add(btnNumberZero, imgKeypadClearButton, imgClearButton, btnDecimalSeparatorKey);
        flxReEnterAccountNumberKeypad.add(flxSeparator, flxRow1, flxRow2, flxRow3, flxRow4);
        flxReEnterAccountNumber.add(flxReEnterAccountNumberMain, btnReEnterAccountNumberContinue, flxReEnterAccountNumberKeypad);
        var flxNationalID = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNationalID",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxNationalID"), extendConfig({}, controller.args[1], "flxNationalID"), extendConfig({}, controller.args[2], "flxNationalID"));
        flxNationalID.setDefaultUnit(kony.flex.DP);
        var flxNationalIDMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNationalIDMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNationalIDMain"), extendConfig({}, controller.args[1], "flxNationalIDMain"), extendConfig({}, controller.args[2], "flxNationalIDMain"));
        flxNationalIDMain.setDefaultUnit(kony.flex.DP);
        var flxNationalIDHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNationalIDHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNationalIDHeader"), extendConfig({}, controller.args[1], "flxNationalIDHeader"), extendConfig({}, controller.args[2], "flxNationalIDHeader"));
        flxNationalIDHeader.setDefaultUnit(kony.flex.DP);
        var flxNationalIDTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNationalIDTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNationalIDTop"), extendConfig({}, controller.args[1], "flxNationalIDTop"), extendConfig({}, controller.args[2], "flxNationalIDTop"));
        flxNationalIDTop.setDefaultUnit(kony.flex.DP);
        var flxNationalIDBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxNationalIDBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxNationalIDBack"), extendConfig({}, controller.args[1], "flxNationalIDBack"), extendConfig({}, controller.args[2], "flxNationalIDBack"));
        flxNationalIDBack.setDefaultUnit(kony.flex.DP);
        var imgNationalIDBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgNationalIDBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgNationalIDBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgNationalIDBack"), extendConfig({}, controller.args[2], "imgNationalIDBack"));
        flxNationalIDBack.add(imgNationalIDBack);
        var btnNationalIDCancel = new kony.ui.Button(extendConfig({
            "centerY": "15dp",
            "height": "20dp",
            "id": "btnNationalIDCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnNationalIDCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNationalIDCancel"), extendConfig({}, controller.args[2], "btnNationalIDCancel"));
        flxNationalIDTop.add(flxNationalIDBack, btnNationalIDCancel);
        var lblNationalIDSectionHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblNationalIDSectionHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.nationalID"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblNationalIDSectionHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNationalIDSectionHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNationalIDSectionHeader"));
        flxNationalIDHeader.add(flxNationalIDTop, lblNationalIDSectionHeader);
        var flxNationalIDSubHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxNationalIDSubHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNationalIDSubHeader"), extendConfig({}, controller.args[1], "flxNationalIDSubHeader"), extendConfig({}, controller.args[2], "flxNationalIDSubHeader"));
        flxNationalIDSubHeader.setDefaultUnit(kony.flex.DP);
        var lblNationalIDSubHeader = new kony.ui.Label(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblNationalIDSubHeader",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.nationalIDSubHeader"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "14dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblNationalIDSubHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNationalIDSubHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNationalIDSubHeader"));
        flxNationalIDSubHeader.add(lblNationalIDSubHeader);
        var flxNationalIDSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxNationalIDSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNationalIDSeparator"), extendConfig({}, controller.args[1], "flxNationalIDSeparator"), extendConfig({}, controller.args[2], "flxNationalIDSeparator"));
        flxNationalIDSeparator.setDefaultUnit(kony.flex.DP);
        flxNationalIDSeparator.add();
        var flxNationalIDMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75%",
            "id": "flxNationalIDMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxNationalIDMainContainer"), extendConfig({}, controller.args[1], "flxNationalIDMainContainer"), extendConfig({}, controller.args[2], "flxNationalIDMainContainer"));
        flxNationalIDMainContainer.setDefaultUnit(kony.flex.DP);
        var lblNationalIDErrorMsg = new kony.ui.Label(extendConfig({
            "bottom": "11dp",
            "height": "35dp",
            "id": "lblNationalIDErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.payeeNameErrorMsg"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblNationalIDErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNationalIDErrorMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNationalIDErrorMsg"));
        var flxNationalIDWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxNationalIDWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "top": "46dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNationalIDWrapper"), extendConfig({}, controller.args[1], "flxNationalIDWrapper"), extendConfig({}, controller.args[2], "flxNationalIDWrapper"));
        flxNationalIDWrapper.setDefaultUnit(kony.flex.DP);
        var txtNationalID = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "45dp",
            "id": "txtNationalID",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.nationalIDSubHeader"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtNationalID"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtNationalID"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtNationalID"));
        flxNationalIDWrapper.add(txtNationalID);
        var btnNationalIDContinue = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnNationalIDContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "top": "250dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnNationalIDContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNationalIDContinue"), extendConfig({}, controller.args[2], "btnNationalIDContinue"));
        flxNationalIDMainContainer.add(lblNationalIDErrorMsg, flxNationalIDWrapper, btnNationalIDContinue);
        flxNationalIDMain.add(flxNationalIDHeader, flxNationalIDSubHeader, flxNationalIDSeparator, flxNationalIDMainContainer);
        flxNationalID.add(flxNationalIDMain);
        var flxContactType = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContactType",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxContactType"), extendConfig({}, controller.args[1], "flxContactType"), extendConfig({}, controller.args[2], "flxContactType"));
        flxContactType.setDefaultUnit(kony.flex.DP);
        var flxContactTypeMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContactTypeMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeMain"), extendConfig({}, controller.args[1], "flxContactTypeMain"), extendConfig({}, controller.args[2], "flxContactTypeMain"));
        flxContactTypeMain.setDefaultUnit(kony.flex.DP);
        var flxContactTypeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContactTypeHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeHeader"), extendConfig({}, controller.args[1], "flxContactTypeHeader"), extendConfig({}, controller.args[2], "flxContactTypeHeader"));
        flxContactTypeHeader.setDefaultUnit(kony.flex.DP);
        var flxContactTypeTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContactTypeTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeTop"), extendConfig({}, controller.args[1], "flxContactTypeTop"), extendConfig({}, controller.args[2], "flxContactTypeTop"));
        flxContactTypeTop.setDefaultUnit(kony.flex.DP);
        var flxContactTypeBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxContactTypeBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeBack"), extendConfig({}, controller.args[1], "flxContactTypeBack"), extendConfig({}, controller.args[2], "flxContactTypeBack"));
        flxContactTypeBack.setDefaultUnit(kony.flex.DP);
        var imgContactTypeBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgContactTypeBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgContactTypeBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgContactTypeBack"), extendConfig({}, controller.args[2], "imgContactTypeBack"));
        flxContactTypeBack.add(imgContactTypeBack);
        var btnContactTypeCancel = new kony.ui.Button(extendConfig({
            "centerY": "15dp",
            "height": "20dp",
            "id": "btnContactTypeCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnContactTypeCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactTypeCancel"), extendConfig({}, controller.args[2], "btnContactTypeCancel"));
        flxContactTypeTop.add(flxContactTypeBack, btnContactTypeCancel);
        var lblContactTypeSectionHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblContactTypeSectionHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("i18n.unified.contactType"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblContactTypeSectionHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactTypeSectionHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblContactTypeSectionHeader"));
        flxContactTypeHeader.add(flxContactTypeTop, lblContactTypeSectionHeader);
        var flxContactTypeMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75%",
            "id": "flxContactTypeMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxContactTypeMainContainer"), extendConfig({}, controller.args[1], "flxContactTypeMainContainer"), extendConfig({}, controller.args[2], "flxContactTypeMainContainer"));
        flxContactTypeMainContainer.setDefaultUnit(kony.flex.DP);
        var segContactType = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblContactType": "Phone Number"
            }, {
                "lblContactType": "Email Address"
            }, {
                "lblContactType": "National ID"
            }],
            "groupCells": false,
            "id": "segContactType",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxContactType",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": 0,
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxContactType": "flxContactType",
                "flxContactTypeMain": "flxContactTypeMain",
                "lblContactType": "lblContactType"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segContactType"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segContactType"), extendConfig({}, controller.args[2], "segContactType"));
        flxContactTypeMainContainer.add(segContactType);
        flxContactTypeMain.add(flxContactTypeHeader, flxContactTypeMainContainer);
        flxContactType.add(flxContactTypeMain);
        var flxRequiredCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRequiredCode",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCode"), extendConfig({}, controller.args[1], "flxRequiredCode"), extendConfig({}, controller.args[2], "flxRequiredCode"));
        flxRequiredCode.setDefaultUnit(kony.flex.DP);
        var flxRequiredCodeMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "86%",
            "id": "flxRequiredCodeMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeMain"), extendConfig({}, controller.args[1], "flxRequiredCodeMain"), extendConfig({}, controller.args[2], "flxRequiredCodeMain"));
        flxRequiredCodeMain.setDefaultUnit(kony.flex.DP);
        var flxRequiredCodeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRequiredCodeHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeHeader"), extendConfig({}, controller.args[1], "flxRequiredCodeHeader"), extendConfig({}, controller.args[2], "flxRequiredCodeHeader"));
        flxRequiredCodeHeader.setDefaultUnit(kony.flex.DP);
        var flxRequiredCodeTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRequiredCodeTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeTop"), extendConfig({}, controller.args[1], "flxRequiredCodeTop"), extendConfig({}, controller.args[2], "flxRequiredCodeTop"));
        flxRequiredCodeTop.setDefaultUnit(kony.flex.DP);
        var flxRequiredCodeBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRequiredCodeBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeBack"), extendConfig({}, controller.args[1], "flxRequiredCodeBack"), extendConfig({}, controller.args[2], "flxRequiredCodeBack"));
        flxRequiredCodeBack.setDefaultUnit(kony.flex.DP);
        var imgRequireCodeBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgRequireCodeBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgRequireCodeBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgRequireCodeBack"), extendConfig({}, controller.args[2], "imgRequireCodeBack"));
        flxRequiredCodeBack.add(imgRequireCodeBack);
        var btnRequireCodeCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnRequireCodeCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "10dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnRequireCodeCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRequireCodeCancel"), extendConfig({}, controller.args[2], "btnRequireCodeCancel"));
        flxRequiredCodeTop.add(flxRequiredCodeBack, btnRequireCodeCancel);
        var lblRequiredCodeHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblRequiredCodeHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Required Code",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblRequiredCodeHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredCodeHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRequiredCodeHeader"));
        flxRequiredCodeHeader.add(flxRequiredCodeTop, lblRequiredCodeHeader);
        var flxRequiredCodeDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFbox",
            "height": "50dp",
            "id": "flxRequiredCodeDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeDescription"), extendConfig({}, controller.args[1], "flxRequiredCodeDescription"), extendConfig({}, controller.args[2], "flxRequiredCodeDescription"));
        flxRequiredCodeDescription.setDefaultUnit(kony.flex.DP);
        var lblRequiredCodeDescription = new kony.ui.Label(extendConfig({
            "bottom": "5dp",
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblRequiredCodeDescription",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "You can fill any of the field provided below out of 3 (or) you can fill all the three fields as well",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblRequiredCodeDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredCodeDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRequiredCodeDescription"));
        flxRequiredCodeDescription.add(lblRequiredCodeDescription);
        var flxRequiredCodeSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxRequiredCodeSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeSeparator"), extendConfig({}, controller.args[1], "flxRequiredCodeSeparator"), extendConfig({}, controller.args[2], "flxRequiredCodeSeparator"));
        flxRequiredCodeSeparator.setDefaultUnit(kony.flex.DP);
        flxRequiredCodeSeparator.add();
        var flxRequiredCodeContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72%",
            "id": "flxRequiredCodeContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeContainer"), extendConfig({}, controller.args[1], "flxRequiredCodeContainer"), extendConfig({}, controller.args[2], "flxRequiredCodeContainer"));
        flxRequiredCodeContainer.setDefaultUnit(kony.flex.DP);
        var flxRequiredMainContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxRequiredMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredMainContainer"), extendConfig({}, controller.args[1], "flxRequiredMainContainer"), extendConfig({}, controller.args[2], "flxRequiredMainContainer"));
        flxRequiredMainContainer.setDefaultUnit(kony.flex.DP);
        var lblErrorMsgRequirecode = new kony.ui.Label(extendConfig({
            "bottom": "5dp",
            "id": "lblErrorMsgRequirecode",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblErrorMsgRequirecode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorMsgRequirecode"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblErrorMsgRequirecode"));
        var flcRequiredBicSwift = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flcRequiredBicSwift",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flcRequiredBicSwift"), extendConfig({}, controller.args[1], "flcRequiredBicSwift"), extendConfig({}, controller.args[2], "flcRequiredBicSwift"));
        flcRequiredBicSwift.setDefaultUnit(kony.flex.DP);
        var lblRequiredBICSwift = new kony.ui.Label(extendConfig({
            "id": "lblRequiredBICSwift",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "BIC/SWIFT :",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRequiredBICSwift"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredBICSwift"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRequiredBICSwift"));
        var flxRequiredBICwrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxRequiredBICwrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxRequiredBICwrapper"), extendConfig({}, controller.args[1], "flxRequiredBICwrapper"), extendConfig({}, controller.args[2], "flxRequiredBICwrapper"));
        flxRequiredBICwrapper.setDefaultUnit(kony.flex.DP);
        var txtRequiredBICSwift = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "ICSknTxt003E751px",
            "height": "45dp",
            "id": "txtRequiredBICSwift",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter Intermediary BIC",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "sknlbl949494SSPR18px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtRequiredBICSwift"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtRequiredBICSwift"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtRequiredBICSwift"));
        flxRequiredBICwrapper.add(txtRequiredBICSwift);
        var flxRequiredBICor = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRequiredBICor",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFFFFFFBrE3E3E3Round",
            "top": "25dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxRequiredBICor"), extendConfig({}, controller.args[1], "flxRequiredBICor"), extendConfig({}, controller.args[2], "flxRequiredBICor"));
        flxRequiredBICor.setDefaultUnit(kony.flex.DP);
        var lblRequiredOr = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "lblRequiredOr",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727234px",
            "text": "or",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblRequiredOr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredOr"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRequiredOr"));
        flxRequiredBICor.add(lblRequiredOr);
        var btnRequiredBICSwiftCodeLookUp = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn4176A434px",
            "id": "btnRequiredBICSwiftCodeLookUp",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknBtn4176A434px",
            "text": "Look Up",
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnRequiredBICSwiftCodeLookUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRequiredBICSwiftCodeLookUp"), extendConfig({}, controller.args[2], "btnRequiredBICSwiftCodeLookUp"));
        var flxRequiredBICSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxRequiredBICSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3Border",
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredBICSeparator"), extendConfig({}, controller.args[1], "flxRequiredBICSeparator"), extendConfig({}, controller.args[2], "flxRequiredBICSeparator"));
        flxRequiredBICSeparator.setDefaultUnit(kony.flex.DP);
        flxRequiredBICSeparator.add();
        flcRequiredBicSwift.add(lblRequiredBICSwift, flxRequiredBICwrapper, flxRequiredBICor, btnRequiredBICSwiftCodeLookUp, flxRequiredBICSeparator);
        var flxClearingCode1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxClearingCode1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxClearingCode1"), extendConfig({}, controller.args[1], "flxClearingCode1"), extendConfig({}, controller.args[2], "flxClearingCode1"));
        flxClearingCode1.setDefaultUnit(kony.flex.DP);
        var flxHeading1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxHeading1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "15dp",
            "width": "100%"
        }, controller.args[0], "flxHeading1"), extendConfig({}, controller.args[1], "flxHeading1"), extendConfig({}, controller.args[2], "flxHeading1"));
        flxHeading1.setDefaultUnit(kony.flex.DP);
        var lblRequiredClearingCode1 = new kony.ui.Label(extendConfig({
            "id": "lblRequiredClearingCode1",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "Clearing Code 1:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRequiredClearingCode1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredClearingCode1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRequiredClearingCode1"));
        flxHeading1.add(lblRequiredClearingCode1);
        var flxRequiredClearingCode1Wrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxRequiredClearingCode1Wrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 0,
            "isModalContainer": false,
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredClearingCode1Wrapper"), extendConfig({}, controller.args[1], "flxRequiredClearingCode1Wrapper"), extendConfig({}, controller.args[2], "flxRequiredClearingCode1Wrapper"));
        flxRequiredClearingCode1Wrapper.setDefaultUnit(kony.flex.DP);
        var txtRequiredClearingCode1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "ICSknTxt003E751px",
            "height": "45dp",
            "id": "txtRequiredClearingCode1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter clearing code 1",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbx949494SSPR34pxRds3px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtRequiredClearingCode1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtRequiredClearingCode1"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "sknlbl949494SSPR18px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtRequiredClearingCode1"));
        flxRequiredClearingCode1Wrapper.add(txtRequiredClearingCode1);
        var flxRequiredClearingCode1Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxRequiredClearingCode1Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3Border",
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredClearingCode1Separator"), extendConfig({}, controller.args[1], "flxRequiredClearingCode1Separator"), extendConfig({}, controller.args[2], "flxRequiredClearingCode1Separator"));
        flxRequiredClearingCode1Separator.setDefaultUnit(kony.flex.DP);
        flxRequiredClearingCode1Separator.add();
        flxClearingCode1.add(flxHeading1, flxRequiredClearingCode1Wrapper, flxRequiredClearingCode1Separator);
        var flxClearingCode2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxClearingCode2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxClearingCode2"), extendConfig({}, controller.args[1], "flxClearingCode2"), extendConfig({}, controller.args[2], "flxClearingCode2"));
        flxClearingCode2.setDefaultUnit(kony.flex.DP);
        var flxHeading2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxHeading2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxHeading2"), extendConfig({}, controller.args[1], "flxHeading2"), extendConfig({}, controller.args[2], "flxHeading2"));
        flxHeading2.setDefaultUnit(kony.flex.DP);
        var lblRequiredClearingCode2 = new kony.ui.Label(extendConfig({
            "id": "lblRequiredClearingCode2",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "Clearing Code 2:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRequiredClearingCode2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredClearingCode2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRequiredClearingCode2"));
        flxHeading2.add(lblRequiredClearingCode2);
        var flxRequiredClearingCode2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxRequiredClearingCode2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxRequiredClearingCode2"), extendConfig({}, controller.args[1], "flxRequiredClearingCode2"), extendConfig({}, controller.args[2], "flxRequiredClearingCode2"));
        flxRequiredClearingCode2.setDefaultUnit(kony.flex.DP);
        var txtRequiredClearingCode2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "45dp",
            "id": "txtRequiredClearingCode2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter clearing code 2",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPR42424215px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtRequiredClearingCode2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtRequiredClearingCode2"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtRequiredClearingCode2"));
        flxRequiredClearingCode2.add(txtRequiredClearingCode2);
        var flxRequiredClearingCode2Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxRequiredClearingCode2Separator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3Border",
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredClearingCode2Separator"), extendConfig({}, controller.args[1], "flxRequiredClearingCode2Separator"), extendConfig({}, controller.args[2], "flxRequiredClearingCode2Separator"));
        flxRequiredClearingCode2Separator.setDefaultUnit(kony.flex.DP);
        flxRequiredClearingCode2Separator.add();
        flxClearingCode2.add(flxHeading2, flxRequiredClearingCode2, flxRequiredClearingCode2Separator);
        flxRequiredMainContainer.add(lblErrorMsgRequirecode, flcRequiredBicSwift, flxClearingCode1, flxClearingCode2);
        flxRequiredCodeContainer.add(flxRequiredMainContainer);
        flxRequiredCodeMain.add(flxRequiredCodeHeader, flxRequiredCodeDescription, flxRequiredCodeSeparator, flxRequiredCodeContainer);
        var flxRequiredCodeBtncontinue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "90dp",
            "id": "flxRequiredCodeBtncontinue",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%"
        }, controller.args[0], "flxRequiredCodeBtncontinue"), extendConfig({}, controller.args[1], "flxRequiredCodeBtncontinue"), extendConfig({}, controller.args[2], "flxRequiredCodeBtncontinue"));
        flxRequiredCodeBtncontinue.setDefaultUnit(kony.flex.DP);
        var flxRequireCodeBtnSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxRequireCodeBtnSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxRequireCodeBtnSeparator"), extendConfig({}, controller.args[1], "flxRequireCodeBtnSeparator"), extendConfig({}, controller.args[2], "flxRequireCodeBtnSeparator"));
        flxRequireCodeBtnSeparator.setDefaultUnit(kony.flex.DP);
        flxRequireCodeBtnSeparator.add();
        var btnRequiredCodeContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "45dp",
            "id": "btnRequiredCodeContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "top": "20dp",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "btnRequiredCodeContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRequiredCodeContinue"), extendConfig({}, controller.args[2], "btnRequiredCodeContinue"));
        flxRequiredCodeBtncontinue.add(flxRequireCodeBtnSeparator, btnRequiredCodeContinue);
        flxRequiredCode.add(flxRequiredCodeMain, flxRequiredCodeBtncontinue);
        var flxSwiftBICSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSwiftBICSearch",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSwiftBICSearch"), extendConfig({}, controller.args[1], "flxSwiftBICSearch"), extendConfig({}, controller.args[2], "flxSwiftBICSearch"));
        flxSwiftBICSearch.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87%",
            "id": "flxSwiftBICSearchMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchMainContainer"), extendConfig({}, controller.args[1], "flxSwiftBICSearchMainContainer"), extendConfig({}, controller.args[2], "flxSwiftBICSearchMainContainer"));
        flxSwiftBICSearchMainContainer.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSwiftBICSearchHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchHeader"), extendConfig({}, controller.args[1], "flxSwiftBICSearchHeader"), extendConfig({}, controller.args[2], "flxSwiftBICSearchHeader"));
        flxSwiftBICSearchHeader.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSwiftBICSearchHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchHeaderTop"), extendConfig({}, controller.args[1], "flxSwiftBICSearchHeaderTop"), extendConfig({}, controller.args[2], "flxSwiftBICSearchHeaderTop"));
        flxSwiftBICSearchHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSwiftBICSearchBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchBack"), extendConfig({}, controller.args[1], "flxSwiftBICSearchBack"), extendConfig({}, controller.args[2], "flxSwiftBICSearchBack"));
        flxSwiftBICSearchBack.setDefaultUnit(kony.flex.DP);
        var imgSwiftBICSearchBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgSwiftBICSearchBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgSwiftBICSearchBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSwiftBICSearchBack"), extendConfig({}, controller.args[2], "imgSwiftBICSearchBack"));
        flxSwiftBICSearchBack.add(imgSwiftBICSearchBack);
        var btnSwiftBICSearchCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnSwiftBICSearchCancel",
            "isVisible": false,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "10dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSwiftBICSearchCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSwiftBICSearchCancel"), extendConfig({}, controller.args[2], "btnSwiftBICSearchCancel"));
        flxSwiftBICSearchHeaderTop.add(flxSwiftBICSearchBack, btnSwiftBICSearchCancel);
        var lblSwiftBICSearchHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "45dp",
            "id": "lblSwiftBICSearchHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "SWIFT BIC Search",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSwiftBICSearchHeader"));
        flxSwiftBICSearchHeader.add(flxSwiftBICSearchHeaderTop, lblSwiftBICSearchHeader);
        var flxSwiftBICSearchSubHearding = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSwiftBICSearchSubHearding",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchSubHearding"), extendConfig({}, controller.args[1], "flxSwiftBICSearchSubHearding"), extendConfig({}, controller.args[2], "flxSwiftBICSearchSubHearding"));
        flxSwiftBICSearchSubHearding.setDefaultUnit(kony.flex.DP);
        var lblSwiftBICSearchSubHeading = new kony.ui.Label(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblSwiftBICSearchSubHeading",
            "isVisible": true,
            "left": "15dp",
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "To find your SWIFT code please enter your bank details",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchSubHeading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchSubHeading"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSwiftBICSearchSubHeading"));
        flxSwiftBICSearchSubHearding.add(lblSwiftBICSearchSubHeading);
        var flxSwiftBICSearchSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxSwiftBICSearchSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchSeparator"), extendConfig({}, controller.args[1], "flxSwiftBICSearchSeparator"), extendConfig({}, controller.args[2], "flxSwiftBICSearchSeparator"));
        flxSwiftBICSearchSeparator.setDefaultUnit(kony.flex.DP);
        flxSwiftBICSearchSeparator.add();
        var flxSwiftBICSearchMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70%",
            "id": "flxSwiftBICSearchMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSwiftBICSearchMain"), extendConfig({}, controller.args[1], "flxSwiftBICSearchMain"), extendConfig({}, controller.args[2], "flxSwiftBICSearchMain"));
        flxSwiftBICSearchMain.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "height": "100%",
            "id": "flxSwiftBICSearchDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchDetails"), extendConfig({}, controller.args[1], "flxSwiftBICSearchDetails"), extendConfig({}, controller.args[2], "flxSwiftBICSearchDetails"));
        flxSwiftBICSearchDetails.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxSwiftBICSearchContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxSwiftBICSearchContainer"), extendConfig({}, controller.args[1], "flxSwiftBICSearchContainer"), extendConfig({}, controller.args[2], "flxSwiftBICSearchContainer"));
        flxSwiftBICSearchContainer.setDefaultUnit(kony.flex.DP);
        var lblSwiftBICInputError = new kony.ui.Label(extendConfig({
            "bottom": "5dp",
            "id": "lblSwiftBICInputError",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICInputError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICInputError"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSwiftBICInputError"));
        var flxSwiftBICSearchScrollContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxSwiftBICSearchScrollContainer",
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
        }, controller.args[0], "flxSwiftBICSearchScrollContainer"), extendConfig({}, controller.args[1], "flxSwiftBICSearchScrollContainer"), extendConfig({}, controller.args[2], "flxSwiftBICSearchScrollContainer"));
        flxSwiftBICSearchScrollContainer.setDefaultUnit(kony.flex.DP);
        var lblSwiftBICSearchField1 = new kony.ui.Label(extendConfig({
            "id": "lblSwiftBICSearchField1",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "Bank Name :",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchField1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSwiftBICSearchField1"));
        var flxSwiftBICSearchField1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "flxSwiftBICSearchField1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxSwiftBICSearchField1"), extendConfig({}, controller.args[1], "flxSwiftBICSearchField1"), extendConfig({}, controller.args[2], "flxSwiftBICSearchField1"));
        flxSwiftBICSearchField1.setDefaultUnit(kony.flex.DP);
        var txtSwiftBICSearchValue1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtSwiftBICSearchValue1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter Bank name",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtSwiftBICSearchValue1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtSwiftBICSearchValue1"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSwiftBICSearchValue1"));
        flxSwiftBICSearchField1.add(txtSwiftBICSearchValue1);
        var lblSwiftBICSearchField2 = new kony.ui.Label(extendConfig({
            "id": "lblSwiftBICSearchField2",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "Branch Name :",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchField2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSwiftBICSearchField2"));
        var flxSwiftBICSearchField2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "flxSwiftBICSearchField2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxSwiftBICSearchField2"), extendConfig({}, controller.args[1], "flxSwiftBICSearchField2"), extendConfig({}, controller.args[2], "flxSwiftBICSearchField2"));
        flxSwiftBICSearchField2.setDefaultUnit(kony.flex.DP);
        var txtSwiftBICSearchValue2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "49.96%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtSwiftBICSearchValue2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter Branch name",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtSwiftBICSearchValue2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtSwiftBICSearchValue2"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSwiftBICSearchValue2"));
        flxSwiftBICSearchField2.add(txtSwiftBICSearchValue2);
        var lblSwiftBICSearchField3 = new kony.ui.Label(extendConfig({
            "id": "lblSwiftBICSearchField3",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "City :",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchField3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchField3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSwiftBICSearchField3"));
        var flxSwiftBICSearchField3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "flxSwiftBICSearchField3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxSwiftBICSearchField3"), extendConfig({}, controller.args[1], "flxSwiftBICSearchField3"), extendConfig({}, controller.args[2], "flxSwiftBICSearchField3"));
        flxSwiftBICSearchField3.setDefaultUnit(kony.flex.DP);
        var txtSwiftBICSearchValue3 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtSwiftBICSearchValue3",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter city",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtSwiftBICSearchValue3"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtSwiftBICSearchValue3"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSwiftBICSearchValue3"));
        flxSwiftBICSearchField3.add(txtSwiftBICSearchValue3);
        var lblSwiftBICSearchField4 = new kony.ui.Label(extendConfig({
            "id": "lblSwiftBICSearchField4",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "Country :",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchField4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchField4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSwiftBICSearchField4"));
        var flxSwiftBICSearchField4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "flxSwiftBICSearchField4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxSwiftBICSearchField4"), extendConfig({}, controller.args[1], "flxSwiftBICSearchField4"), extendConfig({}, controller.args[2], "flxSwiftBICSearchField4"));
        flxSwiftBICSearchField4.setDefaultUnit(kony.flex.DP);
        var txtSwiftBICSearchValue4 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtSwiftBICSearchValue4",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter country",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtSwiftBICSearchValue4"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtSwiftBICSearchValue4"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSwiftBICSearchValue4"));
        flxSwiftBICSearchField4.add(txtSwiftBICSearchValue4);
        flxSwiftBICSearchScrollContainer.add(lblSwiftBICSearchField1, flxSwiftBICSearchField1, lblSwiftBICSearchField2, flxSwiftBICSearchField2, lblSwiftBICSearchField3, flxSwiftBICSearchField3, lblSwiftBICSearchField4, flxSwiftBICSearchField4);
        flxSwiftBICSearchContainer.add(lblSwiftBICInputError, flxSwiftBICSearchScrollContainer);
        flxSwiftBICSearchDetails.add(flxSwiftBICSearchContainer);
        flxSwiftBICSearchMain.add(flxSwiftBICSearchDetails);
        flxSwiftBICSearchMainContainer.add(flxSwiftBICSearchHeader, flxSwiftBICSearchSubHearding, flxSwiftBICSearchSeparator, flxSwiftBICSearchMain);
        var flxBtnGetDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "90dp",
            "id": "flxBtnGetDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%"
        }, controller.args[0], "flxBtnGetDetails"), extendConfig({}, controller.args[1], "flxBtnGetDetails"), extendConfig({}, controller.args[2], "flxBtnGetDetails"));
        flxBtnGetDetails.setDefaultUnit(kony.flex.DP);
        var flxGetDetailsSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxGetDetailsSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxGetDetailsSeparator"), extendConfig({}, controller.args[1], "flxGetDetailsSeparator"), extendConfig({}, controller.args[2], "flxGetDetailsSeparator"));
        flxGetDetailsSeparator.setDefaultUnit(kony.flex.DP);
        flxGetDetailsSeparator.add();
        var btnGetDetails = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "45dp",
            "id": "btnGetDetails",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnInactive",
            "text": "Get Details",
            "top": "20dp",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "btnGetDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnGetDetails"), extendConfig({}, controller.args[2], "btnGetDetails"));
        flxBtnGetDetails.add(flxGetDetailsSeparator, btnGetDetails);
        flxSwiftBICSearch.add(flxSwiftBICSearchMainContainer, flxBtnGetDetails);
        var flxSwiftBICSearchList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSwiftBICSearchList",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSwiftBICSearchList"), extendConfig({}, controller.args[1], "flxSwiftBICSearchList"), extendConfig({}, controller.args[2], "flxSwiftBICSearchList"));
        flxSwiftBICSearchList.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchMainList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80%",
            "id": "flxSwiftBICSearchMainList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchMainList"), extendConfig({}, controller.args[1], "flxSwiftBICSearchMainList"), extendConfig({}, controller.args[2], "flxSwiftBICSearchMainList"));
        flxSwiftBICSearchMainList.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchListHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSwiftBICSearchListHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListHeader"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListHeader"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListHeader"));
        flxSwiftBICSearchListHeader.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSwiftBICSearchTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchTop"), extendConfig({}, controller.args[1], "flxSwiftBICSearchTop"), extendConfig({}, controller.args[2], "flxSwiftBICSearchTop"));
        flxSwiftBICSearchTop.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchListBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSwiftBICSearchListBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListBack"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListBack"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListBack"));
        flxSwiftBICSearchListBack.setDefaultUnit(kony.flex.DP);
        var imgSwiftBICSearchListBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgSwiftBICSearchListBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgSwiftBICSearchListBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSwiftBICSearchListBack"), extendConfig({}, controller.args[2], "imgSwiftBICSearchListBack"));
        flxSwiftBICSearchListBack.add(imgSwiftBICSearchListBack);
        var btnSwiftBICSearchListCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnSwiftBICSearchListCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "10dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSwiftBICSearchListCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSwiftBICSearchListCancel"), extendConfig({}, controller.args[2], "btnSwiftBICSearchListCancel"));
        flxSwiftBICSearchTop.add(flxSwiftBICSearchListBack, btnSwiftBICSearchListCancel);
        var lblSwiftBICSearchListHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "45dp",
            "id": "lblSwiftBICSearchListHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "SWIFT BIC Search",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchListHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchListHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSwiftBICSearchListHeader"));
        flxSwiftBICSearchListHeader.add(flxSwiftBICSearchTop, lblSwiftBICSearchListHeader);
        var flxSwiftBICSearchListDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSwiftBICSearchListDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListDescription"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListDescription"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListDescription"));
        flxSwiftBICSearchListDescription.setDefaultUnit(kony.flex.DP);
        var lblSwiftBICSearchListDescription = new kony.ui.Label(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblSwiftBICSearchListDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Please select the preferred details",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchListDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchListDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSwiftBICSearchListDescription"));
        flxSwiftBICSearchListDescription.add(lblSwiftBICSearchListDescription);
        var flxSwiftBICSearchListSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxSwiftBICSearchListSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListSeparator"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListSeparator"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListSeparator"));
        flxSwiftBICSearchListSeparator.setDefaultUnit(kony.flex.DP);
        flxSwiftBICSearchListSeparator.add();
        var flxSwiftBICSearchListScroll = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "65%",
            "horizontalScrollIndicator": true,
            "id": "flxSwiftBICSearchListScroll",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "1dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListScroll"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListScroll"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListScroll"));
        flxSwiftBICSearchListScroll.setDefaultUnit(kony.flex.DP);
        var segSwiftBICSearchList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segSwiftBICSearchList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxSegSwiftBICSearchList",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "1dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxSegSwiftBICSearchList": "flxSegSwiftBICSearchList",
                "flxSeparator": "flxSeparator",
                "flxSwiftBICSearchListOptions": "flxSwiftBICSearchListOptions",
                "flxSwiftBICSearchOptions": "flxSwiftBICSearchOptions",
                "imgSwiftBICSearchListTick": "imgSwiftBICSearchListTick",
                "lblBICSwiftBICSearchListDescription": "lblBICSwiftBICSearchListDescription",
                "lblSwiftBICSearchListHeader": "lblSwiftBICSearchListHeader",
                "lblSwiftBICSearchListName": "lblSwiftBICSearchListName"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segSwiftBICSearchList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSwiftBICSearchList"), extendConfig({}, controller.args[2], "segSwiftBICSearchList"));
        flxSwiftBICSearchListScroll.add(segSwiftBICSearchList);
        var flxNoSearchResult = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "flxNoSearchResult",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNoSearchResult"), extendConfig({}, controller.args[1], "flxNoSearchResult"), extendConfig({}, controller.args[2], "flxNoSearchResult"));
        flxNoSearchResult.setDefaultUnit(kony.flex.DP);
        var lblNoResults = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "lblNoResults",
            "isVisible": true,
            "left": "30dp",
            "right": "30dp",
            "skin": "ICSknLbl72727236px",
            "text": "No search result. Please try again with another keyword",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20%",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "lblNoResults"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoResults"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNoResults"));
        flxNoSearchResult.add(lblNoResults);
        flxSwiftBICSearchMainList.add(flxSwiftBICSearchListHeader, flxSwiftBICSearchListDescription, flxSwiftBICSearchListSeparator, flxSwiftBICSearchListScroll, flxNoSearchResult);
        var flxSwiftBICSearchButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "140dp",
            "id": "flxSwiftBICSearchButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%"
        }, controller.args[0], "flxSwiftBICSearchButtons"), extendConfig({}, controller.args[1], "flxSwiftBICSearchButtons"), extendConfig({}, controller.args[2], "flxSwiftBICSearchButtons"));
        flxSwiftBICSearchButtons.setDefaultUnit(kony.flex.DP);
        var btnUseSwift = new kony.ui.Button(extendConfig({
            "bottom": "80dp",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "45dp",
            "id": "btnUseSwift",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICBtn003E7534px",
            "text": "Use Swift",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "btnUseSwift"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnUseSwift"), extendConfig({}, controller.args[2], "btnUseSwift"));
        var btnSearchAgain = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50.00%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "45dp",
            "id": "btnSearchAgain",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtn003E75Bffffff34px",
            "text": "Search Again",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "btnSearchAgain"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSearchAgain"), extendConfig({}, controller.args[2], "btnSearchAgain"));
        flxSwiftBICSearchButtons.add(btnUseSwift, btnSearchAgain);
        flxSwiftBICSearchList.add(flxSwiftBICSearchMainList, flxSwiftBICSearchButtons);
        var flxVerifyDetails = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyDetails",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxVerifyDetails"), extendConfig({}, controller.args[1], "flxVerifyDetails"), extendConfig({}, controller.args[2], "flxVerifyDetails"));
        flxVerifyDetails.setDefaultUnit(kony.flex.DP);
        var flxVfsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85%",
            "id": "flxVfsMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxVfsMain"), extendConfig({}, controller.args[1], "flxVfsMain"), extendConfig({}, controller.args[2], "flxVfsMain"));
        flxVfsMain.setDefaultUnit(kony.flex.DP);
        var flxVfsHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxVfsHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxVfsHeader"), extendConfig({}, controller.args[1], "flxVfsHeader"), extendConfig({}, controller.args[2], "flxVfsHeader"));
        flxVfsHeader.setDefaultUnit(kony.flex.DP);
        var flxVfsHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxVfsHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxVfsHeaderTop"), extendConfig({}, controller.args[1], "flxVfsHeaderTop"), extendConfig({}, controller.args[2], "flxVfsHeaderTop"));
        flxVfsHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxVfsBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxVfsBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxVfsBack"), extendConfig({}, controller.args[1], "flxVfsBack"), extendConfig({}, controller.args[2], "flxVfsBack"));
        flxVfsBack.setDefaultUnit(kony.flex.DP);
        var imgVfsBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgVfsBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgVfsBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVfsBack"), extendConfig({}, controller.args[2], "imgVfsBack"));
        flxVfsBack.add(imgVfsBack);
        var btnVfsCancel = new kony.ui.Button(extendConfig({
            "centerY": "15dp",
            "height": "20dp",
            "id": "btnVfsCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnVfsCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVfsCancel"), extendConfig({}, controller.args[2], "btnVfsCancel"));
        flxVfsHeaderTop.add(flxVfsBack, btnVfsCancel);
        var lblVfsHeader = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "id": "lblVfsHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("kony.mb.CM.verifyDetails"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblVfsHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVfsHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblVfsHeader"));
        flxVfsHeader.add(flxVfsHeaderTop, lblVfsHeader);
        var flxVfsDetails = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "73.43%",
            "horizontalScrollIndicator": true,
            "id": "flxVfsDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxVfsDetails"), extendConfig({}, controller.args[1], "flxVfsDetails"), extendConfig({}, controller.args[2], "flxVfsDetails"));
        flxVfsDetails.setDefaultUnit(kony.flex.DP);
        var flxField1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxField1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField1"), extendConfig({}, controller.args[1], "flxField1"), extendConfig({}, controller.args[2], "flxField1"));
        flxField1.setDefaultUnit(kony.flex.DP);
        var lblField1Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField1Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Payee Name:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField1Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1Label"));
        var lblField1Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField1Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "(Optional)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblField1Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1Optional"));
        var lblField1Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField1Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "John Bailey",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField1Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1Value"));
        var imgArrow1 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow1",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow1"), extendConfig({}, controller.args[2], "imgArrow1"));
        var flxCfmSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator1"), extendConfig({}, controller.args[1], "flxCfmSeparator1"), extendConfig({}, controller.args[2], "flxCfmSeparator1"));
        flxCfmSeparator1.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator1.add();
        flxField1.add(lblField1Label, lblField1Optional, lblField1Value, imgArrow1, flxCfmSeparator1);
        var flxField2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxField2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField2"), extendConfig({}, controller.args[1], "flxField2"), extendConfig({}, controller.args[2], "flxField2"));
        flxField2.setDefaultUnit(kony.flex.DP);
        var lblField2Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField2Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Account Number:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField2Label"));
        var lblField2Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField2Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "(Optional)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField2Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField2Optional"));
        var lblField2Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField2Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "9281 8900 8192 1211 2212 2222 1282 1919",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField2Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField2Value"));
        var imgArrow2 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow2",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow2"), extendConfig({}, controller.args[2], "imgArrow2"));
        var flxCfmSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator2"), extendConfig({}, controller.args[1], "flxCfmSeparator2"), extendConfig({}, controller.args[2], "flxCfmSeparator2"));
        flxCfmSeparator2.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator2.add();
        flxField2.add(lblField2Label, lblField2Optional, lblField2Value, imgArrow2, flxCfmSeparator2);
        var flxField3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField3"), extendConfig({}, controller.args[1], "flxField3"), extendConfig({}, controller.args[2], "flxField3"));
        flxField3.setDefaultUnit(kony.flex.DP);
        var lblField3Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField3Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Account Nickname: ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField3Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField3Label"));
        var lblField3Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField3Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "(Optional)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField3Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField3Optional"));
        var lblField3Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField3Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "John’s Checking Account Nickname",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField3Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField3Value"));
        var imgArrow3 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow3",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow3"), extendConfig({}, controller.args[2], "imgArrow3"));
        var flxCfmSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator3"), extendConfig({}, controller.args[1], "flxCfmSeparator3"), extendConfig({}, controller.args[2], "flxCfmSeparator3"));
        flxCfmSeparator3.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator3.add();
        flxField3.add(lblField3Label, lblField3Optional, lblField3Value, imgArrow3, flxCfmSeparator3);
        var flxField4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField4"), extendConfig({}, controller.args[1], "flxField4"), extendConfig({}, controller.args[2], "flxField4"));
        flxField4.setDefaultUnit(kony.flex.DP);
        var lblField4Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField4Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Phone Number:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField4Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField4Label"));
        var lblField4Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField4Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "(Optional)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField4Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField4Optional"));
        var lblField4Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField4Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "+1 (123) 456-7890",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField4Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField4Value"));
        var imgArrow4 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow4",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow4"), extendConfig({}, controller.args[2], "imgArrow4"));
        var flxCfmSeparator4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator4"), extendConfig({}, controller.args[1], "flxCfmSeparator4"), extendConfig({}, controller.args[2], "flxCfmSeparator4"));
        flxCfmSeparator4.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator4.add();
        flxField4.add(lblField4Label, lblField4Optional, lblField4Value, imgArrow4, flxCfmSeparator4);
        var flxField5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField5"), extendConfig({}, controller.args[1], "flxField5"), extendConfig({}, controller.args[2], "flxField5"));
        flxField5.setDefaultUnit(kony.flex.DP);
        var lblField5Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField5Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Email Address:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField5Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField5Label"));
        var lblField5Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField5Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "(Optional)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField5Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField5Optional"));
        var lblField5Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField5Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "john.bailey@gmail.com",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField5Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField5Value"));
        var imgArrow5 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow5",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow5"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow5"), extendConfig({}, controller.args[2], "imgArrow5"));
        var flxCfmSeparator5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator5"), extendConfig({}, controller.args[1], "flxCfmSeparator5"), extendConfig({}, controller.args[2], "flxCfmSeparator5"));
        flxCfmSeparator5.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator5.add();
        flxField5.add(lblField5Label, lblField5Optional, lblField5Value, imgArrow5, flxCfmSeparator5);
        var flxField6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField6"), extendConfig({}, controller.args[1], "flxField6"), extendConfig({}, controller.args[2], "flxField6"));
        flxField6.setDefaultUnit(kony.flex.DP);
        var lblField6Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField6Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Bank Name:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField6Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField6Label"));
        var lblField6Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField6Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": kony.i18n.getLocalizedString("kony.i18n.verifyDetails.optional"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField6Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField6Optional"));
        var lblField6Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField6Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "Bank of Moscow",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField6Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField6Value"));
        var imgArrow6 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow6",
            "isVisible": false,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow6"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow6"), extendConfig({}, controller.args[2], "imgArrow6"));
        var flxCfmSeparator6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator6"), extendConfig({}, controller.args[1], "flxCfmSeparator6"), extendConfig({}, controller.args[2], "flxCfmSeparator6"));
        flxCfmSeparator6.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator6.add();
        flxField6.add(lblField6Label, lblField6Optional, lblField6Value, imgArrow6, flxCfmSeparator6);
        var flxField7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField7"), extendConfig({}, controller.args[1], "flxField7"), extendConfig({}, controller.args[2], "flxField7"));
        flxField7.setDefaultUnit(kony.flex.DP);
        var lblField7Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField7Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "BIC/SWIFT:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField7Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField7Label"));
        var lblField7Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField7Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": kony.i18n.getLocalizedString("kony.i18n.verifyDetails.optional"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField7Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField7Optional"));
        var lblField7Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField7Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "MCRBRUMM123",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField7Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField7Value"));
        var imgArrow7 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow7",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow7"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow7"), extendConfig({}, controller.args[2], "imgArrow7"));
        var flxCfmSeparator7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator7"), extendConfig({}, controller.args[1], "flxCfmSeparator7"), extendConfig({}, controller.args[2], "flxCfmSeparator7"));
        flxCfmSeparator7.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator7.add();
        flxField7.add(lblField7Label, lblField7Optional, lblField7Value, imgArrow7, flxCfmSeparator7);
        var flxField8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxField8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField8"), extendConfig({}, controller.args[1], "flxField8"), extendConfig({}, controller.args[2], "flxField8"));
        flxField8.setDefaultUnit(kony.flex.DP);
        var lblField8Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField8Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Clearing Code 1:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField8Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField8Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField8Label"));
        var lblField8Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField8Optional",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": kony.i18n.getLocalizedString("kony.i18n.verifyDetails.optional"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField8Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField8Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField8Optional"));
        var lblField8Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField8Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "USBKUS44IMT",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField8Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField8Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField8Value"));
        var imgArrow8 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow8",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow8"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow8"), extendConfig({}, controller.args[2], "imgArrow8"));
        var flxCfmSeparator8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator8"), extendConfig({}, controller.args[1], "flxCfmSeparator8"), extendConfig({}, controller.args[2], "flxCfmSeparator8"));
        flxCfmSeparator8.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator8.add();
        flxField8.add(lblField8Label, lblField8Optional, lblField8Value, imgArrow8, flxCfmSeparator8);
        var flxField9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField9"), extendConfig({}, controller.args[1], "flxField9"), extendConfig({}, controller.args[2], "flxField9"));
        flxField9.setDefaultUnit(kony.flex.DP);
        var lblField9Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField9Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Clearing Code 2:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField9Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField9Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField9Label"));
        var lblField9Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField9Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "(Optional)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField9Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField9Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField9Optional"));
        var lblField9Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField9Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "USBKUS44IMT",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField9Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField9Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField9Value"));
        var imgArrow9 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow9",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow9"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow9"), extendConfig({}, controller.args[2], "imgArrow9"));
        var flxCfmSeparator9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator9"), extendConfig({}, controller.args[1], "flxCfmSeparator9"), extendConfig({}, controller.args[2], "flxCfmSeparator9"));
        flxCfmSeparator9.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator9.add();
        flxField9.add(lblField9Label, lblField9Optional, lblField9Value, imgArrow9, flxCfmSeparator9);
        var flxField10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField10"), extendConfig({}, controller.args[1], "flxField10"), extendConfig({}, controller.args[2], "flxField10"));
        flxField10.setDefaultUnit(kony.flex.DP);
        var lblField10Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField10Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField10Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField10Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField10Label"));
        var lblField10Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField10Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField10Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField10Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField10Optional"));
        var lblField10Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField10Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField10Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField10Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField10Value"));
        var imgArrow10 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow10",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow10"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow10"), extendConfig({}, controller.args[2], "imgArrow10"));
        var flxCfmSeparator10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator10"), extendConfig({}, controller.args[1], "flxCfmSeparator10"), extendConfig({}, controller.args[2], "flxCfmSeparator10"));
        flxCfmSeparator10.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator10.add();
        flxField10.add(lblField10Label, lblField10Optional, lblField10Value, imgArrow10, flxCfmSeparator10);
        var flxField11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField11",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField11"), extendConfig({}, controller.args[1], "flxField11"), extendConfig({}, controller.args[2], "flxField11"));
        flxField11.setDefaultUnit(kony.flex.DP);
        var lblField11Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField11Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField11Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField11Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField11Label"));
        var lblField11Optional = new kony.ui.Label(extendConfig({
            "centerY": "80%",
            "id": "lblField11Optional",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField11Optional"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField11Optional"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField11Optional"));
        var lblField11Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField11Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField11Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField11Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField11Value"));
        var imgArrow11 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow11",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow11"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow11"), extendConfig({}, controller.args[2], "imgArrow11"));
        var flxCfmSeparator11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator11",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator11"), extendConfig({}, controller.args[1], "flxCfmSeparator11"), extendConfig({}, controller.args[2], "flxCfmSeparator11"));
        flxCfmSeparator11.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator11.add();
        flxField11.add(lblField11Label, lblField11Optional, lblField11Value, imgArrow11, flxCfmSeparator11);
        var flxField12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField12",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField12"), extendConfig({}, controller.args[1], "flxField12"), extendConfig({}, controller.args[2], "flxField12"));
        flxField12.setDefaultUnit(kony.flex.DP);
        var lblField12Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField12Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField12Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField12Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField12Label"));
        var lblField12Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField12Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField12Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField12Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField12Value"));
        var imgArrow12 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow12",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow12"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow12"), extendConfig({}, controller.args[2], "imgArrow12"));
        var flxCfmSeparator12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator12",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator12"), extendConfig({}, controller.args[1], "flxCfmSeparator12"), extendConfig({}, controller.args[2], "flxCfmSeparator12"));
        flxCfmSeparator12.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator12.add();
        flxField12.add(lblField12Label, lblField12Value, imgArrow12, flxCfmSeparator12);
        var flxField13 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField13",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField13"), extendConfig({}, controller.args[1], "flxField13"), extendConfig({}, controller.args[2], "flxField13"));
        flxField13.setDefaultUnit(kony.flex.DP);
        var lblField13Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField13Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField13Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField13Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField13Label"));
        var lblField13Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField13Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField13Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField13Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField13Value"));
        var imgArrow13 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow13",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow13"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow13"), extendConfig({}, controller.args[2], "imgArrow13"));
        var flxCfmSeparator13 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator13",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator13"), extendConfig({}, controller.args[1], "flxCfmSeparator13"), extendConfig({}, controller.args[2], "flxCfmSeparator13"));
        flxCfmSeparator13.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator13.add();
        flxField13.add(lblField13Label, lblField13Value, imgArrow13, flxCfmSeparator13);
        var flxField14 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField14",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField14"), extendConfig({}, controller.args[1], "flxField14"), extendConfig({}, controller.args[2], "flxField14"));
        flxField14.setDefaultUnit(kony.flex.DP);
        var lblField14Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField14Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField14Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField14Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField14Label"));
        var lblField14Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField14Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField14Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField14Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField14Value"));
        var imgArrow14 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow14",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow14"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow14"), extendConfig({}, controller.args[2], "imgArrow14"));
        var flxCfmSeparator14 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator14",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator14"), extendConfig({}, controller.args[1], "flxCfmSeparator14"), extendConfig({}, controller.args[2], "flxCfmSeparator14"));
        flxCfmSeparator14.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator14.add();
        flxField14.add(lblField14Label, lblField14Value, imgArrow14, flxCfmSeparator14);
        var flxField15 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField15",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField15"), extendConfig({}, controller.args[1], "flxField15"), extendConfig({}, controller.args[2], "flxField15"));
        flxField15.setDefaultUnit(kony.flex.DP);
        var lblField15Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField15Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField15Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField15Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField15Label"));
        var lblField15Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField15Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField15Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField15Value"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField15Value"));
        var imgArrow15 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow15",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow15"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow15"), extendConfig({}, controller.args[2], "imgArrow15"));
        var flxCfmSeparator15 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator15",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator15"), extendConfig({}, controller.args[1], "flxCfmSeparator15"), extendConfig({}, controller.args[2], "flxCfmSeparator15"));
        flxCfmSeparator15.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator15.add();
        flxField15.add(lblField15Label, lblField15Value, imgArrow15, flxCfmSeparator15);
        var flxAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddress"), extendConfig({}, controller.args[1], "flxAddress"), extendConfig({}, controller.args[2], "flxAddress"));
        flxAddress.setDefaultUnit(kony.flex.DP);
        var lblAddressLabel = new kony.ui.Label(extendConfig({
            "id": "lblAddressLabel",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Payee Address: (Optional)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddressLabel"));
        var flxLeft = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLeft",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30dp",
            "width": "95%"
        }, controller.args[0], "flxLeft"), extendConfig({}, controller.args[1], "flxLeft"), extendConfig({}, controller.args[2], "flxLeft"));
        flxLeft.setDefaultUnit(kony.flex.DP);
        var lblAddress1 = new kony.ui.Label(extendConfig({
            "id": "lblAddress1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "1010, Easy st, hill view Oxford, Nova",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddress1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddress1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddress1"));
        var lblAddress2 = new kony.ui.Label(extendConfig({
            "id": "lblAddress2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "scota BOL 1E0",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddress2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddress2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddress2"));
        var flxCity = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCity",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxCity"), extendConfig({}, controller.args[1], "flxCity"), extendConfig({}, controller.args[2], "flxCity"));
        flxCity.setDefaultUnit(kony.flex.DP);
        var lblCityLabel = new kony.ui.Label(extendConfig({
            "id": "lblCityLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "City:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCityLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCityLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCityLabel"));
        var lblCityValue = new kony.ui.Label(extendConfig({
            "id": "lblCityValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "Chennai",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCityValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCityValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCityValue"));
        flxCity.add(lblCityLabel, lblCityValue);
        var flxState = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxState",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxState"), extendConfig({}, controller.args[1], "flxState"), extendConfig({}, controller.args[2], "flxState"));
        flxState.setDefaultUnit(kony.flex.DP);
        var lblStateLabel = new kony.ui.Label(extendConfig({
            "id": "lblStateLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "State:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStateLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStateLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblStateLabel"));
        var lblStateValue = new kony.ui.Label(extendConfig({
            "id": "lblStateValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "Tamilnadu",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStateValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStateValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblStateValue"));
        flxState.add(lblStateLabel, lblStateValue);
        var flxCountry = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCountry",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxCountry"), extendConfig({}, controller.args[1], "flxCountry"), extendConfig({}, controller.args[2], "flxCountry"));
        flxCountry.setDefaultUnit(kony.flex.DP);
        var lblCountryLabel = new kony.ui.Label(extendConfig({
            "id": "lblCountryLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "Country:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCountryLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCountryLabel"));
        var lblCountryValue = new kony.ui.Label(extendConfig({
            "id": "lblCountryValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "India",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCountryValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCountryValue"));
        flxCountry.add(lblCountryLabel, lblCountryValue);
        var flxPostalCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPostalCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPostalCode"), extendConfig({}, controller.args[1], "flxPostalCode"), extendConfig({}, controller.args[2], "flxPostalCode"));
        flxPostalCode.setDefaultUnit(kony.flex.DP);
        var lblPostalCodeLabel = new kony.ui.Label(extendConfig({
            "id": "lblPostalCodeLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "Postal Code:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPostalCodeLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPostalCodeLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPostalCodeLabel"));
        var lblPostalCodeValue = new kony.ui.Label(extendConfig({
            "id": "lblPostalCodeValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "626001",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPostalCodeValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPostalCodeValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPostalCodeValue"));
        flxPostalCode.add(lblPostalCodeLabel, lblPostalCodeValue);
        flxLeft.add(lblAddress1, lblAddress2, flxCity, flxState, flxCountry, flxPostalCode);
        var flxRight = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRight",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "11dp",
            "width": "20dp"
        }, controller.args[0], "flxRight"), extendConfig({}, controller.args[1], "flxRight"), extendConfig({}, controller.args[2], "flxRight"));
        flxRight.setDefaultUnit(kony.flex.DP);
        var imgBeneArrow = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgBeneArrow",
            "isVisible": true,
            "src": "chevron.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgBeneArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBeneArrow"), extendConfig({}, controller.args[2], "imgBeneArrow"));
        flxRight.add(imgBeneArrow);
        var lblAddressDetails = new kony.ui.Label(extendConfig({
            "id": "lblAddressDetails",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMBlueLabel",
            "text": "1010, Easy street, Hill view,  Waverley, Nova scotia,  Canada, BOL 1E0",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblAddressDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressDetails"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddressDetails"));
        flxAddress.add(lblAddressLabel, flxLeft, flxRight, lblAddressDetails);
        flxVfsDetails.add(flxField1, flxField2, flxField3, flxField4, flxField5, flxField6, flxField7, flxField8, flxField9, flxField10, flxField11, flxField12, flxField13, flxField14, flxField15, flxAddress);
        flxVfsMain.add(flxVfsHeader, flxVfsDetails);
        var flxVfsButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "25dp",
            "clipBounds": true,
            "id": "flxVfsButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": true,
            "left": "4dp",
            "isModalContainer": false,
            "width": "100%"
        }, controller.args[0], "flxVfsButtons"), extendConfig({}, controller.args[1], "flxVfsButtons"), extendConfig({}, controller.args[2], "flxVfsButtons"));
        flxVfsButtons.setDefaultUnit(kony.flex.DP);
        var flxCTASeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCTASeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxCTASeparator"), extendConfig({}, controller.args[1], "flxCTASeparator"), extendConfig({}, controller.args[2], "flxCTASeparator"));
        flxCTASeparator.setDefaultUnit(kony.flex.DP);
        flxCTASeparator.add();
        var btnCTAButton2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "50dp",
            "id": "btnCTAButton2",
            "isVisible": false,
            "left": "20dp",
            "skin": "ICBtn003E7534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "top": "20dp",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "btnCTAButton2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCTAButton2"), extendConfig({}, controller.args[2], "btnCTAButton2"));
        var btnCTAButton1 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "50dp",
            "id": "btnCTAButton1",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICBtn003E7534px",
            "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.addAccount"),
            "top": "20dp",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "btnCTAButton1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCTAButton1"), extendConfig({}, controller.args[2], "btnCTAButton1"));
        flxVfsButtons.add(flxCTASeparator, btnCTAButton2, btnCTAButton1);
        flxVerifyDetails.add(flxVfsMain, flxVfsButtons);
        var flxPayeeNickname = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPayeeNickname",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "top": "0%",
            "width": "100%"
        }, controller.args[0], "flxPayeeNickname"), extendConfig({}, controller.args[1], "flxPayeeNickname"), extendConfig({}, controller.args[2], "flxPayeeNickname"));
        flxPayeeNickname.setDefaultUnit(kony.flex.DP);
        var flxNicknameMaincontainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNicknameMaincontainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNicknameMaincontainer"), extendConfig({}, controller.args[1], "flxNicknameMaincontainer"), extendConfig({}, controller.args[2], "flxNicknameMaincontainer"));
        flxNicknameMaincontainer.setDefaultUnit(kony.flex.DP);
        var flxNicknameSectionHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNicknameSectionHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNicknameSectionHeader"), extendConfig({}, controller.args[1], "flxNicknameSectionHeader"), extendConfig({}, controller.args[2], "flxNicknameSectionHeader"));
        flxNicknameSectionHeader.setDefaultUnit(kony.flex.DP);
        var flxNicknameTopContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNicknameTopContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNicknameTopContainer"), extendConfig({}, controller.args[1], "flxNicknameTopContainer"), extendConfig({}, controller.args[2], "flxNicknameTopContainer"));
        flxNicknameTopContainer.setDefaultUnit(kony.flex.DP);
        var flxNicknameBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxNicknameBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "13dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxNicknameBack"), extendConfig({}, controller.args[1], "flxNicknameBack"), extendConfig({}, controller.args[2], "flxNicknameBack"));
        flxNicknameBack.setDefaultUnit(kony.flex.DP);
        var imgNicknameBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgNicknameBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgNicknameBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgNicknameBack"), extendConfig({}, controller.args[2], "imgNicknameBack"));
        flxNicknameBack.add(imgNicknameBack);
        var btnNicknameCancel = new kony.ui.Button(extendConfig({
            "centerY": "15dp",
            "height": "20dp",
            "id": "btnNicknameCancel",
            "isVisible": false,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "btnNicknameCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNicknameCancel"), extendConfig({}, controller.args[2], "btnNicknameCancel"));
        flxNicknameTopContainer.add(flxNicknameBack, btnNicknameCancel);
        var lblPnsSectionHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblPnsSectionHeader",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.PayeeNickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPnsSectionHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPnsSectionHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPnsSectionHeader"));
        flxNicknameSectionHeader.add(flxNicknameTopContainer, lblPnsSectionHeader);
        var flxNicknameSubheader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxNicknameSubheader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNicknameSubheader"), extendConfig({}, controller.args[1], "flxNicknameSubheader"), extendConfig({}, controller.args[2], "flxNicknameSubheader"));
        flxNicknameSubheader.setDefaultUnit(kony.flex.DP);
        var lblPnsSubHeader = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblPnsSubHeader",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.payeeNickname"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPnsSubHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPnsSubHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPnsSubHeader"));
        flxNicknameSubheader.add(lblPnsSubHeader);
        var flxSubHeaderSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxSubHeaderSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSubHeaderSeperator"), extendConfig({}, controller.args[1], "flxSubHeaderSeperator"), extendConfig({}, controller.args[2], "flxSubHeaderSeperator"));
        flxSubHeaderSeperator.setDefaultUnit(kony.flex.DP);
        flxSubHeaderSeperator.add();
        var flxNicknameContentContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "39.41%",
            "id": "flxNicknameContentContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxNicknameContentContainer"), extendConfig({}, controller.args[1], "flxNicknameContentContainer"), extendConfig({}, controller.args[2], "flxNicknameContentContainer"));
        flxNicknameContentContainer.setDefaultUnit(kony.flex.DP);
        var lblPayeeNicknameError = new kony.ui.Label(extendConfig({
            "bottom": "11dp",
            "height": "35dp",
            "id": "lblPayeeNicknameError",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.payeeNameErrorMsg"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPayeeNicknameError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPayeeNicknameError"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPayeeNicknameError"));
        var flxNicknameWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxNicknameWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "top": "48dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNicknameWrapper"), extendConfig({}, controller.args[1], "flxNicknameWrapper"), extendConfig({}, controller.args[2], "flxNicknameWrapper"));
        flxNicknameWrapper.setDefaultUnit(kony.flex.DP);
        var txtNickName = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "47dp",
            "id": "txtNickName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.firstandLastName"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtNickName"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtNickName"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtNickName"));
        flxNicknameWrapper.add(txtNickName);
        var btnNicknameContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnNicknameContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnNicknameContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNicknameContinue"), extendConfig({}, controller.args[2], "btnNicknameContinue"));
        flxNicknameContentContainer.add(lblPayeeNicknameError, flxNicknameWrapper, btnNicknameContinue);
        flxNicknameMaincontainer.add(flxNicknameSectionHeader, flxNicknameSubheader, flxSubHeaderSeperator, flxNicknameContentContainer);
        flxPayeeNickname.add(flxNicknameMaincontainer);
        var flxEmailAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEmailAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxEmailAddress"), extendConfig({}, controller.args[1], "flxEmailAddress"), extendConfig({}, controller.args[2], "flxEmailAddress"));
        flxEmailAddress.setDefaultUnit(kony.flex.DP);
        var flxEmailAddressHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEmailAddressHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEmailAddressHeader"), extendConfig({}, controller.args[1], "flxEmailAddressHeader"), extendConfig({}, controller.args[2], "flxEmailAddressHeader"));
        flxEmailAddressHeader.setDefaultUnit(kony.flex.DP);
        var flxEmailAddressHeaderContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEmailAddressHeaderContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEmailAddressHeaderContainer"), extendConfig({}, controller.args[1], "flxEmailAddressHeaderContainer"), extendConfig({}, controller.args[2], "flxEmailAddressHeaderContainer"));
        flxEmailAddressHeaderContainer.setDefaultUnit(kony.flex.DP);
        var flxEmailTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEmailTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEmailTop"), extendConfig({}, controller.args[1], "flxEmailTop"), extendConfig({}, controller.args[2], "flxEmailTop"));
        flxEmailTop.setDefaultUnit(kony.flex.DP);
        var flxEmailAddressTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxEmailAddressTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxEmailAddressTop"), extendConfig({}, controller.args[1], "flxEmailAddressTop"), extendConfig({}, controller.args[2], "flxEmailAddressTop"));
        flxEmailAddressTop.setDefaultUnit(kony.flex.DP);
        var flxEmailAddressBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEmailAddressBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxEmailAddressBack"), extendConfig({}, controller.args[1], "flxEmailAddressBack"), extendConfig({}, controller.args[2], "flxEmailAddressBack"));
        flxEmailAddressBack.setDefaultUnit(kony.flex.DP);
        var imgEmailAddressBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgEmailAddressBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgEmailAddressBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgEmailAddressBack"), extendConfig({}, controller.args[2], "imgEmailAddressBack"));
        flxEmailAddressBack.add(imgEmailAddressBack);
        var btnEmailAddressCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnEmailAddressCancel",
            "isVisible": false,
            "right": "5%",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnEmailAddressCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEmailAddressCancel"), extendConfig({}, controller.args[2], "btnEmailAddressCancel"));
        flxEmailAddressTop.add(flxEmailAddressBack, btnEmailAddressCancel);
        flxEmailTop.add(flxEmailAddressTop);
        var lblEmailAddressHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblEmailAddressHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("kony.i18n.verifyDetails.emailAddress"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblEmailAddressHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailAddressHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEmailAddressHeader"));
        flxEmailAddressHeaderContainer.add(flxEmailTop, lblEmailAddressHeader);
        var flxEmailAddressSubheader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxEmailAddressSubheader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEmailAddressSubheader"), extendConfig({}, controller.args[1], "flxEmailAddressSubheader"), extendConfig({}, controller.args[2], "flxEmailAddressSubheader"));
        flxEmailAddressSubheader.setDefaultUnit(kony.flex.DP);
        var lblEmailAddressDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblEmailAddressDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.payeeEmailAddressSubHeader"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblEmailAddressDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailAddressDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEmailAddressDescription"));
        flxEmailAddressSubheader.add(lblEmailAddressDescription);
        var flxEmailAddressSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxEmailAddressSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEmailAddressSeperator"), extendConfig({}, controller.args[1], "flxEmailAddressSeperator"), extendConfig({}, controller.args[2], "flxEmailAddressSeperator"));
        flxEmailAddressSeperator.setDefaultUnit(kony.flex.DP);
        flxEmailAddressSeperator.add();
        var flxEmailAddressMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80%",
            "id": "flxEmailAddressMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxEmailAddressMainContainer"), extendConfig({}, controller.args[1], "flxEmailAddressMainContainer"), extendConfig({}, controller.args[2], "flxEmailAddressMainContainer"));
        flxEmailAddressMainContainer.setDefaultUnit(kony.flex.DP);
        var lblEmailAddressErrorMsg = new kony.ui.Label(extendConfig({
            "id": "lblEmailAddressErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": "Please enter the valid Emaild",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblEmailAddressErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailAddressErrorMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEmailAddressErrorMsg"));
        var flxEmailAddressWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEmailAddressWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "top": "50dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxEmailAddressWrapper"), extendConfig({}, controller.args[1], "flxEmailAddressWrapper"), extendConfig({}, controller.args[2], "flxEmailAddressWrapper"));
        flxEmailAddressWrapper.setDefaultUnit(kony.flex.DP);
        var txtEmailAddress = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "ICSknTxb003E75Rds3PXFnt424242",
            "height": "50dp",
            "id": "txtEmailAddress",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "placeholder": kony.i18n.getLocalizedString("kony.address.EnterEmailAddress"),
            "secureTextEntry": false,
            "skin": "ICSknTbxSSP424242Rds3PX",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtEmailAddress"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtEmailAddress"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtEmailAddress"));
        flxEmailAddressWrapper.add(txtEmailAddress);
        var flxEmailLookup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxEmailLookup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "125dp",
            "width": "90%"
        }, controller.args[0], "flxEmailLookup"), extendConfig({}, controller.args[1], "flxEmailLookup"), extendConfig({}, controller.args[2], "flxEmailLookup"));
        flxEmailLookup.setDefaultUnit(kony.flex.DP);
        var flxEmailAddressLookup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxEmailAddressLookup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFFFFFFBrE3E3E3Round",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxEmailAddressLookup"), extendConfig({}, controller.args[1], "flxEmailAddressLookup"), extendConfig({}, controller.args[2], "flxEmailAddressLookup"));
        flxEmailAddressLookup.setDefaultUnit(kony.flex.DP);
        var lblEmailAddressLookup = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "lblEmailAddressLookup",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727234px",
            "text": "or",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblEmailAddressLookup"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailAddressLookup"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEmailAddressLookup"));
        flxEmailAddressLookup.add(lblEmailAddressLookup);
        var btnEmailLookup = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn4176A434px",
            "id": "btnEmailLookup",
            "isVisible": true,
            "skin": "ICSknBtn4176A434px",
            "text": "Choose from Contacts",
            "top": "50dp",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "btnEmailLookup"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEmailLookup"), extendConfig({}, controller.args[2], "btnEmailLookup"));
        flxEmailLookup.add(flxEmailAddressLookup, btnEmailLookup);
        var btnEmailAddressContinue = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "50dp",
            "id": "btnEmailAddressContinue",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "top": "250dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnEmailAddressContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEmailAddressContinue"), extendConfig({}, controller.args[2], "btnEmailAddressContinue"));
        flxEmailAddressMainContainer.add(lblEmailAddressErrorMsg, flxEmailAddressWrapper, flxEmailLookup, btnEmailAddressContinue);
        flxEmailAddressHeader.add(flxEmailAddressHeaderContainer, flxEmailAddressSubheader, flxEmailAddressSeperator, flxEmailAddressMainContainer);
        flxEmailAddress.add(flxEmailAddressHeader);
        var flxPhoneNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPhoneNumber",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumber"), extendConfig({}, controller.args[1], "flxPhoneNumber"), extendConfig({}, controller.args[2], "flxPhoneNumber"));
        flxPhoneNumber.setDefaultUnit(kony.flex.DP);
        var flxPhoneNumberMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65%",
            "id": "flxPhoneNumberMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberMain"), extendConfig({}, controller.args[1], "flxPhoneNumberMain"), extendConfig({}, controller.args[2], "flxPhoneNumberMain"));
        flxPhoneNumberMain.setDefaultUnit(kony.flex.DP);
        var flxPhoneNumberHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPhoneNumberHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberHeader"), extendConfig({}, controller.args[1], "flxPhoneNumberHeader"), extendConfig({}, controller.args[2], "flxPhoneNumberHeader"));
        flxPhoneNumberHeader.setDefaultUnit(kony.flex.DP);
        var flxPhoneNumberTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPhoneNumberTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberTop"), extendConfig({}, controller.args[1], "flxPhoneNumberTop"), extendConfig({}, controller.args[2], "flxPhoneNumberTop"));
        flxPhoneNumberTop.setDefaultUnit(kony.flex.DP);
        var flxPhoneNumberBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxPhoneNumberBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberBack"), extendConfig({}, controller.args[1], "flxPhoneNumberBack"), extendConfig({}, controller.args[2], "flxPhoneNumberBack"));
        flxPhoneNumberBack.setDefaultUnit(kony.flex.DP);
        var imgPhoneNumberBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgPhoneNumberBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgPhoneNumberBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPhoneNumberBack"), extendConfig({}, controller.args[2], "imgPhoneNumberBack"));
        flxPhoneNumberBack.add(imgPhoneNumberBack);
        var btnPhoneNumberCancel = new kony.ui.Button(extendConfig({
            "centerY": "15dp",
            "id": "btnPhoneNumberCancel",
            "isVisible": false,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "btnPhoneNumberCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPhoneNumberCancel"), extendConfig({}, controller.args[2], "btnPhoneNumberCancel"));
        flxPhoneNumberTop.add(flxPhoneNumberBack, btnPhoneNumberCancel);
        var lblPhoneNumberHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblPhoneNumberHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("Kony.mb.userdetail.PhoneNumber"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPhoneNumberHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPhoneNumberHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPhoneNumberHeader"));
        flxPhoneNumberHeader.add(flxPhoneNumberTop, lblPhoneNumberHeader);
        var flxPhoneNumberSubHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxPhoneNumberSubHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberSubHeader"), extendConfig({}, controller.args[1], "flxPhoneNumberSubHeader"), extendConfig({}, controller.args[2], "flxPhoneNumberSubHeader"));
        flxPhoneNumberSubHeader.setDefaultUnit(kony.flex.DP);
        var lblPhnoSubHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "lblPhnoSubHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.phoneNumberDescription"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPhnoSubHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPhnoSubHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPhnoSubHeader"));
        flxPhoneNumberSubHeader.add(lblPhnoSubHeader);
        var flxPhoneNumberSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxPhoneNumberSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberSeparator"), extendConfig({}, controller.args[1], "flxPhoneNumberSeparator"), extendConfig({}, controller.args[2], "flxPhoneNumberSeparator"));
        flxPhoneNumberSeparator.setDefaultUnit(kony.flex.DP);
        flxPhoneNumberSeparator.add();
        var flxPhoneNumberOrContacts = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "36.69%",
            "horizontalScrollIndicator": true,
            "id": "flxPhoneNumberOrContacts",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberOrContacts"), extendConfig({}, controller.args[1], "flxPhoneNumberOrContacts"), extendConfig({}, controller.args[2], "flxPhoneNumberOrContacts"));
        flxPhoneNumberOrContacts.setDefaultUnit(kony.flex.DP);
        var lblFieldErrorMsg = new kony.ui.Label(extendConfig({
            "id": "lblFieldErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": "Incorrect phone number format.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblFieldErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFieldErrorMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFieldErrorMsg"));
        var flxTypePhoneNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "110dp",
            "id": "flxTypePhoneNumber",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxTypePhoneNumber"), extendConfig({}, controller.args[1], "flxTypePhoneNumber"), extendConfig({}, controller.args[2], "flxTypePhoneNumber"));
        flxTypePhoneNumber.setDefaultUnit(kony.flex.DP);
        var flxFieldLabel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFieldLabel",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFieldLabel"), extendConfig({}, controller.args[1], "flxFieldLabel"), extendConfig({}, controller.args[2], "flxFieldLabel"));
        flxFieldLabel.setDefaultUnit(kony.flex.DP);
        var lblField2 = new kony.ui.Label(extendConfig({
            "id": "lblField2",
            "isVisible": true,
            "left": "10dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.code"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "lblField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField2"));
        var lblField1 = new kony.ui.Label(extendConfig({
            "id": "lblField1",
            "isVisible": true,
            "left": "10dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("i18n.ProfileManagement.PhoneNumber"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1"));
        flxFieldLabel.add(lblField2, lblField1);
        var flxPhoneNumberwrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "58dp",
            "id": "flxPhoneNumberwrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberwrapper"), extendConfig({}, controller.args[1], "flxPhoneNumberwrapper"), extendConfig({}, controller.args[2], "flxPhoneNumberwrapper"));
        flxPhoneNumberwrapper.setDefaultUnit(kony.flex.DP);
        var flxCountryCodeContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxCountryCodeContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "5dp",
            "width": "24%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeContainer"), extendConfig({}, controller.args[1], "flxCountryCodeContainer"), extendConfig({}, controller.args[2], "flxCountryCodeContainer"));
        flxCountryCodeContainer.setDefaultUnit(kony.flex.DP);
        var tbxContactCode = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "ICSknTbxSSPR42424215px",
            "height": "100%",
            "id": "tbxContactCode",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPR42424215px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "tbxContactCode"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [9, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxContactCode"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxContactCode"));
        flxCountryCodeContainer.add(tbxContactCode);
        var flxMobileNumberContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxMobileNumberContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3Border",
            "top": "5dp",
            "width": "64%",
            "zIndex": 1
        }, controller.args[0], "flxMobileNumberContainer"), extendConfig({}, controller.args[1], "flxMobileNumberContainer"), extendConfig({}, controller.args[2], "flxMobileNumberContainer"));
        flxMobileNumberContainer.setDefaultUnit(kony.flex.DP);
        var lblMobileNumber = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblMobileNumber",
            "isVisible": true,
            "left": "12dp",
            "skin": "ICSknLbl42424234px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "95.51%",
            "zIndex": 1
        }, controller.args[0], "lblMobileNumber"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMobileNumber"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMobileNumber"));
        flxMobileNumberContainer.add(lblMobileNumber);
        flxPhoneNumberwrapper.add(flxCountryCodeContainer, flxMobileNumberContainer);
        var flxPhoneNumberLookup = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn4176A434px",
            "id": "flxPhoneNumberLookup",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknBtn4176A434px",
            "text": "Look Up",
            "top": "5dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberLookup"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "flxPhoneNumberLookup"), extendConfig({}, controller.args[2], "flxPhoneNumberLookup"));
        flxTypePhoneNumber.add(flxFieldLabel, flxPhoneNumberwrapper, flxPhoneNumberLookup);
        var flxContactsLookup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "75dp",
            "id": "flxContactsLookup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "90%"
        }, controller.args[0], "flxContactsLookup"), extendConfig({}, controller.args[1], "flxContactsLookup"), extendConfig({}, controller.args[2], "flxContactsLookup"));
        flxContactsLookup.setDefaultUnit(kony.flex.DP);
        var flxPhoneNumberOrLabel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxPhoneNumberOrLabel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFFFFFFBrE3E3E3Round",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxPhoneNumberOrLabel"), extendConfig({}, controller.args[1], "flxPhoneNumberOrLabel"), extendConfig({}, controller.args[2], "flxPhoneNumberOrLabel"));
        flxPhoneNumberOrLabel.setDefaultUnit(kony.flex.DP);
        var lblPhoneNumberOrLabel = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "lblPhoneNumberOrLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727234px",
            "text": "or",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblPhoneNumberOrLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPhoneNumberOrLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPhoneNumberOrLabel"));
        flxPhoneNumberOrLabel.add(lblPhoneNumberOrLabel);
        var btnPhoneNumberlookupContacts = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn4176A434px",
            "id": "btnPhoneNumberlookupContacts",
            "isVisible": true,
            "skin": "ICSknBtn4176A434px",
            "text": "Choose from Contacts List",
            "top": "40dp",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "btnPhoneNumberlookupContacts"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPhoneNumberlookupContacts"), extendConfig({}, controller.args[2], "btnPhoneNumberlookupContacts"));
        flxContactsLookup.add(flxPhoneNumberOrLabel, btnPhoneNumberlookupContacts);
        flxPhoneNumberOrContacts.add(lblFieldErrorMsg, flxTypePhoneNumber, flxContactsLookup);
        flxPhoneNumberMain.add(flxPhoneNumberHeader, flxPhoneNumberSubHeader, flxPhoneNumberSeparator, flxPhoneNumberOrContacts);
        var flxPhoneNumberKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "35%",
            "id": "flxPhoneNumberKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxPhoneNumberKeypad"), extendConfig({}, controller.args[1], "flxPhoneNumberKeypad"), extendConfig({}, controller.args[2], "flxPhoneNumberKeypad"));
        flxPhoneNumberKeypad.setDefaultUnit(kony.flex.DP);
        var flxArrowKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxArrowKeypad",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxArrowKeypad"), extendConfig({}, controller.args[1], "flxArrowKeypad"), extendConfig({}, controller.args[2], "flxArrowKeypad"));
        flxArrowKeypad.setDefaultUnit(kony.flex.DP);
        var btnContactTypeDone = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSkn007AFFSFReg34px",
            "height": "100%",
            "id": "btnContactTypeDone",
            "isVisible": true,
            "right": "2dp",
            "skin": "ICSkn007AFFSFReg34px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.done"),
            "top": "0",
            "width": "30%"
        }, controller.args[0], "btnContactTypeDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactTypeDone"), extendConfig({}, controller.args[2], "btnContactTypeDone"));
        flxArrowKeypad.add(btnContactTypeDone);
        var flxKeypadRow1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxKeypadRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRow1"), extendConfig({}, controller.args[1], "flxKeypadRow1"), extendConfig({}, controller.args[2], "flxKeypadRow1"));
        flxKeypadRow1.setDefaultUnit(kony.flex.DP);
        var btnContactType1 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType1"), extendConfig({}, controller.args[2], "btnContactType1"));
        var btnContactType2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType2",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType2"), extendConfig({}, controller.args[2], "btnContactType2"));
        var btnContactType3 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType3",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType3"), extendConfig({}, controller.args[2], "btnContactType3"));
        flxKeypadRow1.add(btnContactType1, btnContactType2, btnContactType3);
        var flxKeypadRow2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxKeypadRow2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRow2"), extendConfig({}, controller.args[1], "flxKeypadRow2"), extendConfig({}, controller.args[2], "flxKeypadRow2"));
        flxKeypadRow2.setDefaultUnit(kony.flex.DP);
        var btnContactType4 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType4",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType4"), extendConfig({}, controller.args[2], "btnContactType4"));
        var btnContactType5 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType5",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType5"), extendConfig({}, controller.args[2], "btnContactType5"));
        var btnContactType6 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType6",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType6"), extendConfig({}, controller.args[2], "btnContactType6"));
        flxKeypadRow2.add(btnContactType4, btnContactType5, btnContactType6);
        var flxKeypadRow3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxKeypadRow3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRow3"), extendConfig({}, controller.args[1], "flxKeypadRow3"), extendConfig({}, controller.args[2], "flxKeypadRow3"));
        flxKeypadRow3.setDefaultUnit(kony.flex.DP);
        var btnContactType7 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType7",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType7"), extendConfig({}, controller.args[2], "btnContactType7"));
        var btnContactType8 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType8",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType8"), extendConfig({}, controller.args[2], "btnContactType8"));
        var btnContactType9 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType9",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType9"), extendConfig({}, controller.args[2], "btnContactType9"));
        flxKeypadRow3.add(btnContactType7, btnContactType8, btnContactType9);
        var flxKeypadRow4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxKeypadRow4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRow4"), extendConfig({}, controller.args[1], "flxKeypadRow4"), extendConfig({}, controller.args[2], "flxKeypadRow4"));
        flxKeypadRow4.setDefaultUnit(kony.flex.DP);
        var btnContactType0 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType0",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType0"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType0"), extendConfig({}, controller.args[2], "btnContactType0"));
        var imgContactTypeKeypadClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgContactTypeKeypadClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgContactTypeKeypadClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgContactTypeKeypadClear"), extendConfig({}, controller.args[2], "imgContactTypeKeypadClear"));
        var imgClearicon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClearicon",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgClearicon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearicon"), extendConfig({}, controller.args[2], "imgClearicon"));
        var btnContactTypeDecimal = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnContactTypeDecimal",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactTypeDecimal"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactTypeDecimal"), extendConfig({}, controller.args[2], "btnContactTypeDecimal"));
        flxKeypadRow4.add(btnContactType0, imgContactTypeKeypadClear, imgClearicon, btnContactTypeDecimal);
        flxPhoneNumberKeypad.add(flxArrowKeypad, flxKeypadRow1, flxKeypadRow2, flxKeypadRow3, flxKeypadRow4);
        var btnPhonerNumberContinue = new kony.ui.Button(extendConfig({
            "bottom": "35%",
            "centerX": "50.00%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "50dp",
            "id": "btnPhonerNumberContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "btnPhonerNumberContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPhonerNumberContinue"), extendConfig({}, controller.args[2], "btnPhonerNumberContinue"));
        flxPhoneNumber.add(flxPhoneNumberMain, flxPhoneNumberKeypad, btnPhonerNumberContinue);
        var flxChooseFromContacts = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxChooseFromContacts",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxChooseFromContacts"), extendConfig({}, controller.args[1], "flxChooseFromContacts"), extendConfig({}, controller.args[2], "flxChooseFromContacts"));
        flxChooseFromContacts.setDefaultUnit(kony.flex.DP);
        var flxcfcHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxcfcHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxcfcHeader"), extendConfig({}, controller.args[1], "flxcfcHeader"), extendConfig({}, controller.args[2], "flxcfcHeader"));
        flxcfcHeader.setDefaultUnit(kony.flex.DP);
        var flxCfcTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCfcTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfcTop"), extendConfig({}, controller.args[1], "flxCfcTop"), extendConfig({}, controller.args[2], "flxCfcTop"));
        flxCfcTop.setDefaultUnit(kony.flex.DP);
        var flxCfcBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCfcBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxCfcBack"), extendConfig({}, controller.args[1], "flxCfcBack"), extendConfig({}, controller.args[2], "flxCfcBack"));
        flxCfcBack.setDefaultUnit(kony.flex.DP);
        var imgCfcBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgCfcBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgCfcBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCfcBack"), extendConfig({}, controller.args[2], "imgCfcBack"));
        flxCfcBack.add(imgCfcBack);
        var btnCfcCancel = new kony.ui.Button(extendConfig({
            "centerY": "18dp",
            "id": "btnCfcCancel",
            "isVisible": false,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "btnCfcCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCfcCancel"), extendConfig({}, controller.args[2], "btnCfcCancel"));
        flxCfcTop.add(flxCfcBack, btnCfcCancel);
        var lblCfcHeaderLabel = new kony.ui.Label(extendConfig({
            "id": "lblCfcHeaderLabel",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Choose From Contacts",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "lblCfcHeaderLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCfcHeaderLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCfcHeaderLabel"));
        var flxCfcSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxCfcSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknFlx004E75BlueMB",
            "top": "13dp",
            "width": "90%"
        }, controller.args[0], "flxCfcSearch"), extendConfig({}, controller.args[1], "flxCfcSearch"), extendConfig({}, controller.args[2], "flxCfcSearch"));
        flxCfcSearch.setDefaultUnit(kony.flex.DP);
        var flxCfcSearchContents = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "95.14%",
            "id": "flxCfcSearchContents",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxCfcSearchContents"), extendConfig({}, controller.args[1], "flxCfcSearchContents"), extendConfig({}, controller.args[2], "flxCfcSearchContents"));
        flxCfcSearchContents.setDefaultUnit(kony.flex.DP);
        var imgCfcSearch = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgCfcSearch",
            "isVisible": true,
            "left": "10dp",
            "src": "search_image.png",
            "width": "15dp",
            "zIndex": 10
        }, controller.args[0], "imgCfcSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCfcSearch"), extendConfig({}, controller.args[2], "imgCfcSearch"));
        var tbxPickContactsSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50.00%",
            "height": "40dp",
            "id": "tbxPickContactsSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": "Search by keywords",
            "secureTextEntry": false,
            "skin": "sknTbx424242SSPRegular22pxNoBorder",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "tbxPickContactsSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [9, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxPickContactsSearch"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxPickContactsSearch"));
        var imgCfcSearchBoxClose = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgCfcSearchBoxClose",
            "isVisible": false,
            "right": "10dp",
            "src": "closecircle.png",
            "width": "16dp",
            "zIndex": 10
        }, controller.args[0], "imgCfcSearchBoxClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCfcSearchBoxClose"), extendConfig({}, controller.args[2], "imgCfcSearchBoxClose"));
        flxCfcSearchContents.add(imgCfcSearch, tbxPickContactsSearch, imgCfcSearchBoxClose);
        var flxCfcSeachShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxCfcSeachShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxShadow000fff",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfcSeachShadow"), extendConfig({}, controller.args[1], "flxCfcSeachShadow"), extendConfig({}, controller.args[2], "flxCfcSeachShadow"));
        flxCfcSeachShadow.setDefaultUnit(kony.flex.DP);
        flxCfcSeachShadow.add();
        flxCfcSearch.add(flxCfcSearchContents, flxCfcSeachShadow);
        flxcfcHeader.add(flxCfcTop, lblCfcHeaderLabel, flxCfcSearch);
        var flxCfcHeaderSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0dp",
            "id": "flxCfcHeaderSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfcHeaderSeparator"), extendConfig({}, controller.args[1], "flxCfcHeaderSeparator"), extendConfig({}, controller.args[2], "flxCfcHeaderSeparator"));
        flxCfcHeaderSeparator.setDefaultUnit(kony.flex.DP);
        flxCfcHeaderSeparator.add();
        var flxCfcContactsSegList = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "flxCfcContactsSegList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxCfcContactsSegList"), extendConfig({}, controller.args[1], "flxCfcContactsSegList"), extendConfig({}, controller.args[2], "flxCfcContactsSegList"));
        flxCfcContactsSegList.setDefaultUnit(kony.flex.DP);
        var flxCfcContactsList = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxCfcContactsList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "90%"
        }, controller.args[0], "flxCfcContactsList"), extendConfig({}, controller.args[1], "flxCfcContactsList"), extendConfig({}, controller.args[2], "flxCfcContactsList"));
        flxCfcContactsList.setDefaultUnit(kony.flex.DP);
        var segCfcContactsList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }],
            "groupCells": false,
            "id": "segCfcContactsList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxCountryCodeListIC",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxCountryCodeListIC": "flxCountryCodeListIC",
                "lblCountryCode": "lblCountryCode"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segCfcContactsList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCfcContactsList"), extendConfig({}, controller.args[2], "segCfcContactsList"));
        flxCfcContactsList.add(segCfcContactsList);
        var flxCfcAlphbetsList = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxCfcAlphbetsList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "pagingEnabled": false,
            "right": "2%",
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "10dp",
            "verticalScrollIndicator": true,
            "width": "5%"
        }, controller.args[0], "flxCfcAlphbetsList"), extendConfig({}, controller.args[1], "flxCfcAlphbetsList"), extendConfig({}, controller.args[2], "flxCfcAlphbetsList"));
        flxCfcAlphbetsList.setDefaultUnit(kony.flex.DP);
        var segCfcAlphabetsList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "data": [{
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "B"
            }, {
                "lblCountryCodeNo": "C"
            }, {
                "lblCountryCodeNo": "D"
            }, {
                "lblCountryCodeNo": "E"
            }, {
                "lblCountryCodeNo": "F"
            }, {
                "lblCountryCodeNo": "G"
            }, {
                "lblCountryCodeNo": "H"
            }, {
                "lblCountryCodeNo": "I"
            }, {
                "lblCountryCodeNo": "J"
            }, {
                "lblCountryCodeNo": "K"
            }, {
                "lblCountryCodeNo": "L"
            }, {
                "lblCountryCodeNo": "M"
            }, {
                "lblCountryCodeNo": "N"
            }, {
                "lblCountryCodeNo": "O"
            }, {
                "lblCountryCodeNo": "P"
            }, {
                "lblCountryCodeNo": "Q"
            }, {
                "lblCountryCodeNo": "R"
            }, {
                "lblCountryCodeNo": "S"
            }, {
                "lblCountryCodeNo": "T"
            }, {
                "lblCountryCodeNo": "U"
            }, {
                "lblCountryCodeNo": "V"
            }, {
                "lblCountryCodeNo": "W"
            }, {
                "lblCountryCodeNo": "X"
            }, {
                "lblCountryCodeNo": "Y"
            }, {
                "lblCountryCodeNo": "Z"
            }],
            "groupCells": false,
            "id": "segCfcAlphabetsList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxCountryCodeNoListIC",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "8dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxCountryCodeNoListIC": "flxCountryCodeNoListIC",
                "lblCountryCodeNo": "lblCountryCodeNo"
            }
        }, controller.args[0], "segCfcAlphabetsList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCfcAlphabetsList"), extendConfig({}, controller.args[2], "segCfcAlphabetsList"));
        flxCfcAlphbetsList.add(segCfcAlphabetsList);
        flxCfcContactsSegList.add(flxCfcContactsList, flxCfcAlphbetsList);
        var flxCfcNoResults = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75%",
            "id": "flxCfcNoResults",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfcNoResults"), extendConfig({}, controller.args[1], "flxCfcNoResults"), extendConfig({}, controller.args[2], "flxCfcNoResults"));
        flxCfcNoResults.setDefaultUnit(kony.flex.DP);
        var lblCfcNoResults = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblCfcNoResults",
            "isVisible": true,
            "right": "35%",
            "skin": "ICSknLbl72727234px",
            "text": "No results found",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 74,
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblCfcNoResults"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCfcNoResults"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCfcNoResults"));
        flxCfcNoResults.add(lblCfcNoResults);
        flxChooseFromContacts.add(flxcfcHeader, flxCfcHeaderSeparator, flxCfcContactsSegList, flxCfcNoResults);
        var flxCountryCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCountryCode",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCode"), extendConfig({}, controller.args[1], "flxCountryCode"), extendConfig({}, controller.args[2], "flxCountryCode"));
        flxCountryCode.setDefaultUnit(kony.flex.DP);
        var flxCountryCodeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCountryCodeHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeHeader"), extendConfig({}, controller.args[1], "flxCountryCodeHeader"), extendConfig({}, controller.args[2], "flxCountryCodeHeader"));
        flxCountryCodeHeader.setDefaultUnit(kony.flex.DP);
        var flxCountryCodeTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCountryCodeTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeTop"), extendConfig({}, controller.args[1], "flxCountryCodeTop"), extendConfig({}, controller.args[2], "flxCountryCodeTop"));
        flxCountryCodeTop.setDefaultUnit(kony.flex.DP);
        var flxCountryCodeBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCountryCodeBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeBack"), extendConfig({}, controller.args[1], "flxCountryCodeBack"), extendConfig({}, controller.args[2], "flxCountryCodeBack"));
        flxCountryCodeBack.setDefaultUnit(kony.flex.DP);
        var imgCountryCodeBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgCountryCodeBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgCountryCodeBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCountryCodeBack"), extendConfig({}, controller.args[2], "imgCountryCodeBack"));
        flxCountryCodeBack.add(imgCountryCodeBack);
        var btnCountryCodeCancel = new kony.ui.Button(extendConfig({
            "centerY": "18dp",
            "id": "btnCountryCodeCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "btnCountryCodeCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCountryCodeCancel"), extendConfig({}, controller.args[2], "btnCountryCodeCancel"));
        flxCountryCodeTop.add(flxCountryCodeBack, btnCountryCodeCancel);
        var lblCountryCodeHeader = new kony.ui.Label(extendConfig({
            "id": "lblCountryCodeHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("i18n.unifiedBeneficiary.selectCountryCode"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblCountryCodeHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryCodeHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCountryCodeHeader"));
        var flxCountryCodeSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxCountryCodeSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknFlx004E75BlueMB",
            "top": "13dp",
            "width": "90%"
        }, controller.args[0], "flxCountryCodeSearch"), extendConfig({}, controller.args[1], "flxCountryCodeSearch"), extendConfig({}, controller.args[2], "flxCountryCodeSearch"));
        flxCountryCodeSearch.setDefaultUnit(kony.flex.DP);
        var flxCountryCodeContents = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "95.14%",
            "id": "flxCountryCodeContents",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxCountryCodeContents"), extendConfig({}, controller.args[1], "flxCountryCodeContents"), extendConfig({}, controller.args[2], "flxCountryCodeContents"));
        flxCountryCodeContents.setDefaultUnit(kony.flex.DP);
        var imgCountryCodeSearch = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgCountryCodeSearch",
            "isVisible": true,
            "left": "10dp",
            "src": "search_image.png",
            "width": "15dp",
            "zIndex": 10
        }, controller.args[0], "imgCountryCodeSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCountryCodeSearch"), extendConfig({}, controller.args[2], "imgCountryCodeSearch"));
        var tbxCountrySearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50.00%",
            "focusSkin": "defTextBoxFocus",
            "height": "40dp",
            "id": "tbxCountrySearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": "Search by keywords",
            "secureTextEntry": false,
            "skin": "sknTbx424242SSPRegular22pxNoBorder",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0",
            "width": "100%"
        }, controller.args[0], "tbxCountrySearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [9, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxCountrySearch"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxCountrySearch"));
        var imgCountryCodeCloseIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgCountryCodeCloseIcon",
            "isVisible": false,
            "right": "10dp",
            "src": "closeimg.png",
            "width": "16dp",
            "zIndex": 10
        }, controller.args[0], "imgCountryCodeCloseIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCountryCodeCloseIcon"), extendConfig({}, controller.args[2], "imgCountryCodeCloseIcon"));
        flxCountryCodeContents.add(imgCountryCodeSearch, tbxCountrySearch, imgCountryCodeCloseIcon);
        var flxCountryCodeShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxCountryCodeShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxShadow000fff",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeShadow"), extendConfig({}, controller.args[1], "flxCountryCodeShadow"), extendConfig({}, controller.args[2], "flxCountryCodeShadow"));
        flxCountryCodeShadow.setDefaultUnit(kony.flex.DP);
        flxCountryCodeShadow.add();
        flxCountryCodeSearch.add(flxCountryCodeContents, flxCountryCodeShadow);
        flxCountryCodeHeader.add(flxCountryCodeTop, lblCountryCodeHeader, flxCountryCodeSearch);
        var flxCountryCodeSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0dp",
            "id": "flxCountryCodeSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeSeparator"), extendConfig({}, controller.args[1], "flxCountryCodeSeparator"), extendConfig({}, controller.args[2], "flxCountryCodeSeparator"));
        flxCountryCodeSeparator.setDefaultUnit(kony.flex.DP);
        flxCountryCodeSeparator.add();
        var flxCountryListContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxCountryListContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxCountryListContainer"), extendConfig({}, controller.args[1], "flxCountryListContainer"), extendConfig({}, controller.args[2], "flxCountryListContainer"));
        flxCountryListContainer.setDefaultUnit(kony.flex.DP);
        var flxCountryList = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxCountryList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "95%"
        }, controller.args[0], "flxCountryList"), extendConfig({}, controller.args[1], "flxCountryList"), extendConfig({}, controller.args[2], "flxCountryList"));
        flxCountryList.setDefaultUnit(kony.flex.DP);
        var segCountryList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }],
            "groupCells": false,
            "id": "segCountryList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxCountryCodeListIC",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxCountryCodeListIC": "flxCountryCodeListIC",
                "lblCountryCode": "lblCountryCode"
            },
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "segCountryList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCountryList"), extendConfig({}, controller.args[2], "segCountryList"));
        flxCountryList.add(segCountryList);
        var flxAlphabetsList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAlphabetsList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "2%",
            "skin": "ICSknFlxF6F6F6Radius26px",
            "top": "10dp",
            "width": "5%"
        }, controller.args[0], "flxAlphabetsList"), extendConfig({}, controller.args[1], "flxAlphabetsList"), extendConfig({}, controller.args[2], "flxAlphabetsList"));
        flxAlphabetsList.setDefaultUnit(kony.flex.DP);
        var segCountryAlphabet = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "data": [{
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "B"
            }, {
                "lblCountryCodeNo": "C"
            }, {
                "lblCountryCodeNo": "D"
            }, {
                "lblCountryCodeNo": "E"
            }, {
                "lblCountryCodeNo": "F"
            }, {
                "lblCountryCodeNo": "G"
            }, {
                "lblCountryCodeNo": "H"
            }, {
                "lblCountryCodeNo": "I"
            }, {
                "lblCountryCodeNo": "J"
            }, {
                "lblCountryCodeNo": "K"
            }, {
                "lblCountryCodeNo": "L"
            }, {
                "lblCountryCodeNo": "M"
            }, {
                "lblCountryCodeNo": "N"
            }, {
                "lblCountryCodeNo": "O"
            }, {
                "lblCountryCodeNo": "P"
            }, {
                "lblCountryCodeNo": "Q"
            }, {
                "lblCountryCodeNo": "R"
            }, {
                "lblCountryCodeNo": "S"
            }, {
                "lblCountryCodeNo": "T"
            }, {
                "lblCountryCodeNo": "U"
            }, {
                "lblCountryCodeNo": "V"
            }, {
                "lblCountryCodeNo": "W"
            }, {
                "lblCountryCodeNo": "X"
            }, {
                "lblCountryCodeNo": "Y"
            }, {
                "lblCountryCodeNo": "Z"
            }],
            "groupCells": false,
            "id": "segCountryAlphabet",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxCountryCodeNoListIC",
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
                "flxCountryCodeNoListIC": "flxCountryCodeNoListIC",
                "lblCountryCodeNo": "lblCountryCodeNo"
            }
        }, controller.args[0], "segCountryAlphabet"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCountryAlphabet"), extendConfig({}, controller.args[2], "segCountryAlphabet"));
        flxAlphabetsList.add(segCountryAlphabet);
        flxCountryListContainer.add(flxCountryList, flxAlphabetsList);
        var flxCountryCodeNoResults = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75%",
            "id": "flxCountryCodeNoResults",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeNoResults"), extendConfig({}, controller.args[1], "flxCountryCodeNoResults"), extendConfig({}, controller.args[2], "flxCountryCodeNoResults"));
        flxCountryCodeNoResults.setDefaultUnit(kony.flex.DP);
        var lblCountryCodeNoResults = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblCountryCodeNoResults",
            "isVisible": true,
            "right": "35%",
            "skin": "ICSknLbl72727234px",
            "text": "No results found",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 74,
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblCountryCodeNoResults"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryCodeNoResults"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCountryCodeNoResults"));
        flxCountryCodeNoResults.add(lblCountryCodeNoResults);
        flxCountryCode.add(flxCountryCodeHeader, flxCountryCodeSeparator, flxCountryListContainer, flxCountryCodeNoResults);
        var flxAddAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAddAddress",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddress"), extendConfig({}, controller.args[1], "flxAddAddress"), extendConfig({}, controller.args[2], "flxAddAddress"));
        flxAddAddress.setDefaultUnit(kony.flex.DP);
        var flxAddAddressMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "88%",
            "id": "flxAddAddressMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressMainContainer"), extendConfig({}, controller.args[1], "flxAddAddressMainContainer"), extendConfig({}, controller.args[2], "flxAddAddressMainContainer"));
        flxAddAddressMainContainer.setDefaultUnit(kony.flex.DP);
        var flxAddAddressHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddAddressHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressHeader"), extendConfig({}, controller.args[1], "flxAddAddressHeader"), extendConfig({}, controller.args[2], "flxAddAddressHeader"));
        flxAddAddressHeader.setDefaultUnit(kony.flex.DP);
        var flxAddAddressHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddAddressHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressHeaderTop"), extendConfig({}, controller.args[1], "flxAddAddressHeaderTop"), extendConfig({}, controller.args[2], "flxAddAddressHeaderTop"));
        flxAddAddressHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxAddAddressBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxAddAddressBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressBack"), extendConfig({}, controller.args[1], "flxAddAddressBack"), extendConfig({}, controller.args[2], "flxAddAddressBack"));
        flxAddAddressBack.setDefaultUnit(kony.flex.DP);
        var imgAddAddressBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgAddAddressBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgAddAddressBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAddAddressBack"), extendConfig({}, controller.args[2], "imgAddAddressBack"));
        flxAddAddressBack.add(imgAddAddressBack);
        var btnAddAddressCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnAddAddressCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnAddAddressCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAddAddressCancel"), extendConfig({}, controller.args[2], "btnAddAddressCancel"));
        flxAddAddressHeaderTop.add(flxAddAddressBack, btnAddAddressCancel);
        var lblAddAddressHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblAddAddressHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Add Address",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblAddAddressHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddAddressHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddAddressHeader"));
        flxAddAddressHeader.add(flxAddAddressHeaderTop, lblAddAddressHeader);
        var flxAddAddressSubHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxAddAddressSubHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressSubHeader"), extendConfig({}, controller.args[1], "flxAddAddressSubHeader"), extendConfig({}, controller.args[2], "flxAddAddressSubHeader"));
        flxAddAddressSubHeader.setDefaultUnit(kony.flex.DP);
        var lblAddAddressSubHeader = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "height": "40%",
            "id": "lblAddAddressSubHeader",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Enter Beneficiary Address details (optional)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblAddAddressSubHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddAddressSubHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddAddressSubHeader"));
        flxAddAddressSubHeader.add(lblAddAddressSubHeader);
        var flxAddAddressSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxAddAddressSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressSeparator"), extendConfig({}, controller.args[1], "flxAddAddressSeparator"), extendConfig({}, controller.args[2], "flxAddAddressSeparator"));
        flxAddAddressSeparator.setDefaultUnit(kony.flex.DP);
        flxAddAddressSeparator.add();
        var flxAddAddressWrapper = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "70%",
            "horizontalScrollIndicator": true,
            "id": "flxAddAddressWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressWrapper"), extendConfig({}, controller.args[1], "flxAddAddressWrapper"), extendConfig({}, controller.args[2], "flxAddAddressWrapper"));
        flxAddAddressWrapper.setDefaultUnit(kony.flex.DP);
        var lblAddAddressErrorMsg = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "38dp",
            "id": "lblAddAddressErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("kony.address.addressErrorMsg"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAddAddressErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddAddressErrorMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddAddressErrorMsg"));
        var lblAddressField1 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblAddressField1",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "Address Line 01:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddressField1"));
        var flxAddressFieldValue1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAddressFieldValue1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue1"), extendConfig({}, controller.args[1], "flxAddressFieldValue1"), extendConfig({}, controller.args[2], "flxAddressFieldValue1"));
        flxAddressFieldValue1.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtAddressFieldValue1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.address.AddressLine01"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": 0,
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue1"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue1"));
        flxAddressFieldValue1.add(txtAddressFieldValue1);
        var lblAddressField2 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblAddressField2",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "Address Line 02:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddressField2"));
        var flxAddressFieldValue2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAddressFieldValue2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue2"), extendConfig({}, controller.args[1], "flxAddressFieldValue2"), extendConfig({}, controller.args[2], "flxAddressFieldValue2"));
        flxAddressFieldValue2.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtAddressFieldValue2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.address.AddressLine02"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": 0,
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue2"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue2"));
        flxAddressFieldValue2.add(txtAddressFieldValue2);
        var lblAddressField3 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblAddressField3",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "Country:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddressField3"));
        var flxAddressFieldValue3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAddressFieldValue3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue3"), extendConfig({}, controller.args[1], "flxAddressFieldValue3"), extendConfig({}, controller.args[2], "flxAddressFieldValue3"));
        flxAddressFieldValue3.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue3 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtAddressFieldValue3",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.address.EnterCountryName"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": 0,
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue3"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue3"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue3"));
        flxAddressFieldValue3.add(txtAddressFieldValue3);
        var lblAddressField4 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblAddressField4",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "State:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddressField4"));
        var flxAddressFieldValue4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAddressFieldValue4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue4"), extendConfig({}, controller.args[1], "flxAddressFieldValue4"), extendConfig({}, controller.args[2], "flxAddressFieldValue4"));
        flxAddressFieldValue4.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue4 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtAddressFieldValue4",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.address.EnterStateName"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": 0,
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue4"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue4"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue4"));
        flxAddressFieldValue4.add(txtAddressFieldValue4);
        var lblAddressField5 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblAddressField5",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "City:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddressField5"));
        var flxAddressFieldValue5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAddressFieldValue5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue5"), extendConfig({}, controller.args[1], "flxAddressFieldValue5"), extendConfig({}, controller.args[2], "flxAddressFieldValue5"));
        flxAddressFieldValue5.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue5 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtAddressFieldValue5",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.address.EnterCity"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": 0,
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue5"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue5"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue5"));
        flxAddressFieldValue5.add(txtAddressFieldValue5);
        var lblAddressField6 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblAddressField6",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": "Postal Code:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddressField6"));
        var flxAddressFieldValue6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAddressFieldValue6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue6"), extendConfig({}, controller.args[1], "flxAddressFieldValue6"), extendConfig({}, controller.args[2], "flxAddressFieldValue6"));
        flxAddressFieldValue6.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue6 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "49.96%",
            "focusSkin": "tbxBlueFocus",
            "height": "45dp",
            "id": "txtAddressFieldValue6",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.address.EnterPostalCode"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": 0,
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue6"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue6"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx949494SSPR34pxRds3px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue6"));
        flxAddressFieldValue6.add(txtAddressFieldValue6);
        var flxSpaceResidentialAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15dp",
            "id": "flxSpaceResidentialAddress",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSpaceResidentialAddress"), extendConfig({}, controller.args[1], "flxSpaceResidentialAddress"), extendConfig({}, controller.args[2], "flxSpaceResidentialAddress"));
        flxSpaceResidentialAddress.setDefaultUnit(kony.flex.DP);
        flxSpaceResidentialAddress.add();
        flxAddAddressWrapper.add(lblAddAddressErrorMsg, lblAddressField1, flxAddressFieldValue1, lblAddressField2, flxAddressFieldValue2, lblAddressField3, flxAddressFieldValue3, lblAddressField4, flxAddressFieldValue4, lblAddressField5, flxAddressFieldValue5, lblAddressField6, flxAddressFieldValue6, flxSpaceResidentialAddress);
        flxAddAddressMainContainer.add(flxAddAddressHeader, flxAddAddressSubHeader, flxAddAddressSeparator, flxAddAddressWrapper);
        var flxBtnSave = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "10%",
            "id": "flxBtnSave",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "width": "100%"
        }, controller.args[0], "flxBtnSave"), extendConfig({}, controller.args[1], "flxBtnSave"), extendConfig({}, controller.args[2], "flxBtnSave"));
        flxBtnSave.setDefaultUnit(kony.flex.DP);
        var flxbtnSaveseparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxbtnSaveseparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxbtnSaveseparator"), extendConfig({}, controller.args[1], "flxbtnSaveseparator"), extendConfig({}, controller.args[2], "flxbtnSaveseparator"));
        flxbtnSaveseparator.setDefaultUnit(kony.flex.DP);
        flxbtnSaveseparator.add();
        var btnSave = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "height": "45dp",
            "id": "btnSave",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICBtn003E7534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.save"),
            "top": "20dp",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "btnSave"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSave"), extendConfig({}, controller.args[2], "btnSave"));
        flxBtnSave.add(flxbtnSaveseparator, btnSave);
        flxAddAddress.add(flxAddAddressMainContainer, flxBtnSave);
        var flxLinkPayee = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLinkPayee",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-1dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkPayee"), extendConfig({}, controller.args[1], "flxLinkPayee"), extendConfig({}, controller.args[2], "flxLinkPayee"));
        flxLinkPayee.setDefaultUnit(kony.flex.DP);
        var flxLinkPayeeMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLinkPayeeMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkPayeeMain"), extendConfig({}, controller.args[1], "flxLinkPayeeMain"), extendConfig({}, controller.args[2], "flxLinkPayeeMain"));
        flxLinkPayeeMain.setDefaultUnit(kony.flex.DP);
        var flxLinkPayeeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLinkPayeeHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkPayeeHeader"), extendConfig({}, controller.args[1], "flxLinkPayeeHeader"), extendConfig({}, controller.args[2], "flxLinkPayeeHeader"));
        flxLinkPayeeHeader.setDefaultUnit(kony.flex.DP);
        var flxLinkPayeeTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLinkPayeeTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkPayeeTop"), extendConfig({}, controller.args[1], "flxLinkPayeeTop"), extendConfig({}, controller.args[2], "flxLinkPayeeTop"));
        flxLinkPayeeTop.setDefaultUnit(kony.flex.DP);
        var flxLinkPayeeBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxLinkPayeeBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "13dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxLinkPayeeBack"), extendConfig({}, controller.args[1], "flxLinkPayeeBack"), extendConfig({}, controller.args[2], "flxLinkPayeeBack"));
        flxLinkPayeeBack.setDefaultUnit(kony.flex.DP);
        var imgLinkPayeeBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgLinkPayeeBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgLinkPayeeBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLinkPayeeBack"), extendConfig({}, controller.args[2], "imgLinkPayeeBack"));
        flxLinkPayeeBack.add(imgLinkPayeeBack);
        var btnLinkPayeeCancel = new kony.ui.Button(extendConfig({
            "id": "btnLinkPayeeCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "btnLinkPayeeCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLinkPayeeCancel"), extendConfig({}, controller.args[2], "btnLinkPayeeCancel"));
        flxLinkPayeeTop.add(flxLinkPayeeBack, btnLinkPayeeCancel);
        var lblLinkPayeeHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblLinkPayeeHeader",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Link Payee",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblLinkPayeeHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLinkPayeeHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLinkPayeeHeader"));
        var flxLinkPayeeSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5dp",
            "clipBounds": true,
            "height": "36dp",
            "id": "flxLinkPayeeSearch",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxLinkPayeeSearch"), extendConfig({}, controller.args[1], "flxLinkPayeeSearch"), extendConfig({}, controller.args[2], "flxLinkPayeeSearch"));
        flxLinkPayeeSearch.setDefaultUnit(kony.flex.DP);
        var flxLinkPayeeContents = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLinkPayeeContents",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxBg003e7515px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxLinkPayeeContents"), extendConfig({}, controller.args[1], "flxLinkPayeeContents"), extendConfig({}, controller.args[2], "flxLinkPayeeContents"));
        flxLinkPayeeContents.setDefaultUnit(kony.flex.DP);
        var imgLinkPayeeSearch = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgLinkPayeeSearch",
            "isVisible": true,
            "left": "30dp",
            "src": "search_1.png",
            "width": "15dp",
            "zIndex": 10
        }, controller.args[0], "imgLinkPayeeSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLinkPayeeSearch"), extendConfig({}, controller.args[2], "imgLinkPayeeSearch"));
        var tbxLinkPayeeSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTbxSSPR42424215px",
            "height": "87%",
            "id": "tbxLinkPayeeSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Search ",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPR42424215px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "tbxLinkPayeeSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [9, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxLinkPayeeSearch"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbxPlaceholderSSPR42424215px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxLinkPayeeSearch"));
        var imgLinkPayeeCloseIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgLinkPayeeCloseIcon",
            "isVisible": false,
            "right": "31dp",
            "src": "closeicon.PNG",
            "width": "16dp",
            "zIndex": 10
        }, controller.args[0], "imgLinkPayeeCloseIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLinkPayeeCloseIcon"), extendConfig({}, controller.args[2], "imgLinkPayeeCloseIcon"));
        flxLinkPayeeContents.add(imgLinkPayeeSearch, tbxLinkPayeeSearch, imgLinkPayeeCloseIcon);
        var flxLinkPayeeShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxLinkPayeeShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkPayeeShadow"), extendConfig({}, controller.args[1], "flxLinkPayeeShadow"), extendConfig({}, controller.args[2], "flxLinkPayeeShadow"));
        flxLinkPayeeShadow.setDefaultUnit(kony.flex.DP);
        flxLinkPayeeShadow.add();
        flxLinkPayeeSearch.add(flxLinkPayeeContents, flxLinkPayeeShadow);
        flxLinkPayeeHeader.add(flxLinkPayeeTop, lblLinkPayeeHeader, flxLinkPayeeSearch);
        var LinkPayeeCustomer = new com.temenos.infinityComponent.LinkPayeeCustomer(extendConfig({
            "height": "80%",
            "id": "LinkPayeeCustomer",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "overrides": {
                "LinkPayeeCustomer": {
                    "right": "viz.val_cleared",
                    "top": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "LinkPayeeCustomer"), extendConfig({
            "overrides": {}
        }, controller.args[1], "LinkPayeeCustomer"), extendConfig({
            "overrides": {}
        }, controller.args[2], "LinkPayeeCustomer"));
        LinkPayeeCustomer.cifObjectService = "RBObjects";
        LinkPayeeCustomer.contractSubHeader = "{i.i18n.unifiedBeneficiary.contractSubHeader}";
        LinkPayeeCustomer.subHeaderLabel1 = "{$.inputPool.contractName}";
        LinkPayeeCustomer.button1 = {
            "id": "continueBtn",
            "text": "{i.i18n.unifiedBeneficiary.Continue}"
        };
        LinkPayeeCustomer.sknContentFlex = "f9f9";
        LinkPayeeCustomer.cifObject = "InfinityUser";
        LinkPayeeCustomer.contractListTitle = "{i.i18n.unifiedBeneficiary.SelectContracts}";
        LinkPayeeCustomer.subHeaderLabel2 = "{{i.i18n.unifiedBeneficiary.ID}: {$.inputPool.contractId}}";
        LinkPayeeCustomer.selectAllBtn = {
            "id": "selectAllBtn",
            "text": "{i.i18n.unifiedBeneficiary.SelectAll}"
        };
        LinkPayeeCustomer.sknHeadingBg = "sknHeaderBackgoround";
        LinkPayeeCustomer.cifOperation = "getInfinityUserContractCustomers";
        LinkPayeeCustomer.contractListArrayKey = "{$.ContractCustomers.contracts}";
        LinkPayeeCustomer.deselectAllBtn = {
            "id": "deselectAllBtn",
            "text": "{i.i18n.unifiedBeneficiary.DeselectAll}"
        };
        LinkPayeeCustomer.sknDatagridHeadingLabel = "ICSknLblfffffSSPSemiBold76px";
        LinkPayeeCustomer.iconCheckboxSelected = "checkbox.png";
        LinkPayeeCustomer.subHeaderContractId = "{$.ContractCustomers.contractId}";
        LinkPayeeCustomer.customerListTitle = "{i.i18n.unifiedBeneficiary.SelectCustomers}";
        LinkPayeeCustomer.cifCriteria = "{}";
        LinkPayeeCustomer.selectedTextContract = "{i.i18n.unifiedBeneficiary.Selected}";
        LinkPayeeCustomer.btnDone = {
            "id": "doneBtn",
            "text": "{i.i18n.unifiedBeneficiary.Done}"
        };
        LinkPayeeCustomer.sknCancelBtn = "ICSKnBtnffffff15px";
        LinkPayeeCustomer.iconCheckboxUnSelected = "inactive_checkbox.png";
        LinkPayeeCustomer.selectedTextCustomer = "{i.i18n.unifiedBeneficiary.Selected}";
        LinkPayeeCustomer.cifIdentifier = "ContractCustomers";
        LinkPayeeCustomer.contractDataGridLabel1 = "{$.ContractCustomers.contractName}";
        LinkPayeeCustomer.sknSubhdrBg = "f9f9";
        LinkPayeeCustomer.iconBusinessPayeeIcon = "businessaccount.png";
        LinkPayeeCustomer.selectedCustomerCount = "{$.inputPool.selectedCustomerCount}";
        LinkPayeeCustomer.contractDataGridLabel2 = "{\"{{selectedCIFCount}}\"+\"of \"+ \"{{totalCIFCount}}\" +\"{i.i18n.unifiedBeneficiary.SelectedCIF}\"}";
        LinkPayeeCustomer.sknSubhdrTxt = "ICSknLbl42424234px";
        LinkPayeeCustomer.iconpersonalPayee = "personalaccount.png";
        LinkPayeeCustomer.customerListArrayKey = "{$.ContractCustomers.contractCustomers}";
        LinkPayeeCustomer.sknSelectedSubhdrVal1 = "ICSknLbl42424234px";
        LinkPayeeCustomer.iconRightArrow = "chevron.png";
        LinkPayeeCustomer.customerDataGridLabel1 = "{$.ContractCustomers.coreCustomerName}";
        LinkPayeeCustomer.sknSelectedSubhdrVal2 = "ICSknLbl72727234px";
        LinkPayeeCustomer.iconBack = "backbutton.png";
        LinkPayeeCustomer.customerDataGridLabel2 = "{{i.i18n.unifiedBeneficiary.dataGridCustomerLayerLabel2}:{$.ContractCustomers.coreCustomerId}}";
        LinkPayeeCustomer.sknSubhdrSeparator = "ICSknFlxA6A6A6Gradient";
        LinkPayeeCustomer.businessIconCondition = {
            "key": "contractCustomers.isBusines",
            "Value": true
        };
        LinkPayeeCustomer.sknSelectedCountSkn = "ICSknLbl424242B41px";
        LinkPayeeCustomer.retailIconCondition = {
            "key": "contractCustomers.isPrimary",
            "Value": true
        };
        LinkPayeeCustomer.sknSelectDeselectAll = "ICSknBtn4176A434pxRadius17px";
        LinkPayeeCustomer.sknSelectHeaderRowSeparator = "ICSknE3E3E31px";
        LinkPayeeCustomer.sknParentRow = "f9f9";
        LinkPayeeCustomer.sknChildRow = "f9f9";
        LinkPayeeCustomer.sknParentLayerValue1 = "ICSknLbl42424234px";
        LinkPayeeCustomer.sknParentLayerValue2 = "ICSknLbl72727230px";
        LinkPayeeCustomer.sknChildLayerValue1 = "ICSknLbl42424234px";
        LinkPayeeCustomer.sknChildLayerValue2 = "ICSknLbl949494SSP30PX";
        LinkPayeeCustomer.sknActionBtn = "ICSknBtn003E7515PXBrd3PX";
        LinkPayeeCustomer.sknActionBtnDisabled = "ICSknBtnE2E9F0t42424234px";
        LinkPayeeCustomer.sknActionBtnFocus = "ICSknBtn003E7515PXBrd3PX";
        flxLinkPayeeMain.add(flxLinkPayeeHeader, LinkPayeeCustomer);
        flxLinkPayee.add(flxLinkPayeeMain);
        AddNewAccount.add(flxPopup, flxPayeeName, flxAccountNumber, flxReEnterAccountNumber, flxNationalID, flxContactType, flxRequiredCode, flxSwiftBICSearch, flxSwiftBICSearchList, flxVerifyDetails, flxPayeeNickname, flxEmailAddress, flxPhoneNumber, flxChooseFromContacts, flxCountryCode, flxAddAddress, flxLinkPayee);
        return AddNewAccount;
    }
})