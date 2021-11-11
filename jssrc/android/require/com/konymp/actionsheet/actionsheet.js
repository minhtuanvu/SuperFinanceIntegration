define(function() {
    return function(controller) {
        var actionsheet = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "actionsheet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_e5072739479b4bbcad78cfa9a2bea31d(eventobject);
            },
            "skin": "CopykonympassknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "actionsheet"), extendConfig({}, controller.args[1], "actionsheet"), extendConfig({}, controller.args[2], "actionsheet"));
        actionsheet.setDefaultUnit(kony.flex.DP);
        var flxActionSheetContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0%",
            "clipBounds": true,
            "id": "flxActionSheetContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "5%",
            "maxHeight": "100%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxActionSheetContent"), extendConfig({}, controller.args[1], "flxActionSheetContent"), extendConfig({}, controller.args[2], "flxActionSheetContent"));
        flxActionSheetContent.setDefaultUnit(kony.flex.DP);
        var flxActionSheetOptions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxActionSheetOptions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxFFFFFFBGRounded10",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxActionSheetOptions"), extendConfig({}, controller.args[1], "flxActionSheetOptions"), extendConfig({}, controller.args[2], "flxActionSheetOptions"));
        flxActionSheetOptions.setDefaultUnit(kony.flex.DP);
        var lblTitleText = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblTitleText",
            "isVisible": true,
            "left": "5%",
            "skin": "konympassknLbl2C3E50Bold28",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblTitleText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitleText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTitleText"));
        var lblDescriptionText = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblDescriptionText",
            "isVisible": true,
            "left": "5%",
            "skin": "konympassknLbl7F8C8DBGLight24",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblDescriptionText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescriptionText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDescriptionText"));
        var flxHeaderUnderline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxHeaderUnderline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxCCCCCCBGOp100",
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderUnderline"), extendConfig({}, controller.args[1], "flxHeaderUnderline"), extendConfig({}, controller.args[2], "flxHeaderUnderline"));
        flxHeaderUnderline.setDefaultUnit(kony.flex.DP);
        flxHeaderUnderline.add();
        var btnOption1 = new kony.ui.Button(extendConfig({
            "focusSkin": "konympassknBtnFAFAFABG018AD1Regular34",
            "height": "48dp",
            "id": "btnOption1",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_dfb1c3d35811494cb20580696b7a6cab,
            "skin": "konympassknBtn018AD1Regular34",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnOption1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOption1"), extendConfig({}, controller.args[2], "btnOption1"));
        var flxOption1Underline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxOption1Underline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxCCCCCCBGOp100",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOption1Underline"), extendConfig({}, controller.args[1], "flxOption1Underline"), extendConfig({}, controller.args[2], "flxOption1Underline"));
        flxOption1Underline.setDefaultUnit(kony.flex.DP);
        flxOption1Underline.add();
        var btnOption2 = new kony.ui.Button(extendConfig({
            "focusSkin": "konympassknBtnFAFAFABG018AD1Regular34",
            "height": "48dp",
            "id": "btnOption2",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_i13ae042409c41a89117498086889be5,
            "skin": "konympassknBtn018AD1Regular34",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnOption2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOption2"), extendConfig({}, controller.args[2], "btnOption2"));
        var flxOption2Underline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxOption2Underline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxCCCCCCBGOp100",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOption2Underline"), extendConfig({}, controller.args[1], "flxOption2Underline"), extendConfig({}, controller.args[2], "flxOption2Underline"));
        flxOption2Underline.setDefaultUnit(kony.flex.DP);
        flxOption2Underline.add();
        var btnOption3 = new kony.ui.Button(extendConfig({
            "focusSkin": "konympassknBtnFAFAFABG018AD1Regular34",
            "height": "48dp",
            "id": "btnOption3",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_gbd3b25fdd3343ffb324c0f3675bb6f2,
            "skin": "konympassknBtn018AD1Regular34",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnOption3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOption3"), extendConfig({}, controller.args[2], "btnOption3"));
        var flxOption3Underline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxOption3Underline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxCCCCCCBGOp100",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOption3Underline"), extendConfig({}, controller.args[1], "flxOption3Underline"), extendConfig({}, controller.args[2], "flxOption3Underline"));
        flxOption3Underline.setDefaultUnit(kony.flex.DP);
        flxOption3Underline.add();
        var btnOption4 = new kony.ui.Button(extendConfig({
            "focusSkin": "konympassknBtnFAFAFABG018AD1Regular34",
            "height": "48dp",
            "id": "btnOption4",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_ed3095ed534f4390b0835711f8bd9770,
            "skin": "konympassknBtn018AD1Regular34",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnOption4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOption4"), extendConfig({}, controller.args[2], "btnOption4"));
        var flxOption4Underline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxOption4Underline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxCCCCCCBGOp100",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOption4Underline"), extendConfig({}, controller.args[1], "flxOption4Underline"), extendConfig({}, controller.args[2], "flxOption4Underline"));
        flxOption4Underline.setDefaultUnit(kony.flex.DP);
        flxOption4Underline.add();
        var btnOption5 = new kony.ui.Button(extendConfig({
            "focusSkin": "konympassknBtnFAFAFABG018AD1Regular34",
            "height": "48dp",
            "id": "btnOption5",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_f7569628024d4b2490aa7ae4aa603162,
            "skin": "konympassknBtn018AD1Regular34",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnOption5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOption5"), extendConfig({}, controller.args[2], "btnOption5"));
        var flxOption5Underline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxOption5Underline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxCCCCCCBGOp100",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOption5Underline"), extendConfig({}, controller.args[1], "flxOption5Underline"), extendConfig({}, controller.args[2], "flxOption5Underline"));
        flxOption5Underline.setDefaultUnit(kony.flex.DP);
        flxOption5Underline.add();
        var btnOption6 = new kony.ui.Button(extendConfig({
            "focusSkin": "konympassknBtnFAFAFABG018AD1Regular34",
            "height": "48dp",
            "id": "btnOption6",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_fdcd16704c374b5aa8f6e034a737b9cf,
            "skin": "konympassknBtn018AD1Regular34",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnOption6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOption6"), extendConfig({}, controller.args[2], "btnOption6"));
        var flxOption6Underline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxOption6Underline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxCCCCCCBGOp100",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOption6Underline"), extendConfig({}, controller.args[1], "flxOption6Underline"), extendConfig({}, controller.args[2], "flxOption6Underline"));
        flxOption6Underline.setDefaultUnit(kony.flex.DP);
        flxOption6Underline.add();
        var btnOption7 = new kony.ui.Button(extendConfig({
            "focusSkin": "konympassknBtnFAFAFABG018AD1Regular34",
            "height": "48dp",
            "id": "btnOption7",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_ccbeb491bfb447b892b8573f2bf65a46,
            "skin": "konympassknBtn018AD1Regular34",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnOption7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOption7"), extendConfig({}, controller.args[2], "btnOption7"));
        var flxOption7Underline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxOption7Underline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxCCCCCCBGOp100",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOption7Underline"), extendConfig({}, controller.args[1], "flxOption7Underline"), extendConfig({}, controller.args[2], "flxOption7Underline"));
        flxOption7Underline.setDefaultUnit(kony.flex.DP);
        flxOption7Underline.add();
        var btnOption8 = new kony.ui.Button(extendConfig({
            "focusSkin": "konympassknBtnFAFAFABG018AD1Regular34",
            "height": "48dp",
            "id": "btnOption8",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_hb0eca27b1e34e998ca984b8bfa86f6c,
            "skin": "konympassknBtn018AD1Regular34",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnOption8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOption8"), extendConfig({}, controller.args[2], "btnOption8"));
        flxActionSheetOptions.add(lblTitleText, lblDescriptionText, flxHeaderUnderline, btnOption1, flxOption1Underline, btnOption2, flxOption2Underline, btnOption3, flxOption3Underline, btnOption4, flxOption4Underline, btnOption5, flxOption5Underline, btnOption6, flxOption6Underline, btnOption7, flxOption7Underline, btnOption8);
        var flxCancel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympassknFlxFFFFFFBGRounded10",
            "top": "7dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCancel"), extendConfig({}, controller.args[1], "flxCancel"), extendConfig({}, controller.args[2], "flxCancel"));
        flxCancel.setDefaultUnit(kony.flex.DP);
        var btnClose = new kony.ui.Button(extendConfig({
            "focusSkin": "konympassknBtnFAFAFABG018AD1SemiBold34",
            "height": "48dp",
            "id": "btnClose",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_j7cda652f86e4590bc37a45485396007,
            "skin": "konympassknBtn018AD1SemiBold34",
            "text": "Cancel",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnClose"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnClose"), extendConfig({}, controller.args[2], "btnClose"));
        flxCancel.add(btnClose);
        flxActionSheetContent.add(flxActionSheetOptions, flxCancel);
        actionsheet.add(flxActionSheetContent);
        return actionsheet;
    }
})