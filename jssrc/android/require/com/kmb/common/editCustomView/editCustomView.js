define(function() {
    return function(controller) {
        var editCustomView = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "editCustomView",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "editCustomView"), extendConfig({}, controller.args[1], "editCustomView"), extendConfig({}, controller.args[2], "editCustomView"));
        editCustomView.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "70%",
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxffffffB",
            "width": "80%",
            "zIndex": 200
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxEdit = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "45dp",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEdit"), extendConfig({}, controller.args[1], "flxEdit"), extendConfig({}, controller.args[2], "flxEdit"));
        flxEdit.setDefaultUnit(kony.flex.DP);
        var flxEditCustomView = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "98%",
            "id": "flxEditCustomView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEditCustomView"), extendConfig({}, controller.args[1], "flxEditCustomView"), extendConfig({}, controller.args[2], "flxEditCustomView"));
        flxEditCustomView.setDefaultUnit(kony.flex.DP);
        var lblNo = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblNo",
            "isVisible": true,
            "skin": "skinLblSSPRegular4176A412px",
            "text": "Edit custom view name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNo"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNo"));
        flxEditCustomView.add(lblNo);
        var flxSep1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSep1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSep1"), extendConfig({}, controller.args[1], "flxSep1"), extendConfig({}, controller.args[2], "flxSep1"));
        flxSep1.setDefaultUnit(kony.flex.DP);
        flxSep1.add();
        flxEdit.add(flxEditCustomView, flxSep1);
        var flxRemove = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "45dp",
            "id": "flxRemove",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRemove"), extendConfig({}, controller.args[1], "flxRemove"), extendConfig({}, controller.args[2], "flxRemove"));
        flxRemove.setDefaultUnit(kony.flex.DP);
        var flxRemoveExist = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "98%",
            "id": "flxRemoveExist",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRemoveExist"), extendConfig({}, controller.args[1], "flxRemoveExist"), extendConfig({}, controller.args[2], "flxRemoveExist"));
        flxRemoveExist.setDefaultUnit(kony.flex.DP);
        var lblRemoveExist = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblRemoveExist",
            "isVisible": true,
            "skin": "skinLblSSPRegular4176A412px",
            "text": "Remove existing accounts",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblRemoveExist"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRemoveExist"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRemoveExist"));
        flxRemoveExist.add(lblRemoveExist);
        var flxSep2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSep2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSep2"), extendConfig({}, controller.args[1], "flxSep2"), extendConfig({}, controller.args[2], "flxSep2"));
        flxSep2.setDefaultUnit(kony.flex.DP);
        flxSep2.add();
        flxRemove.add(flxRemoveExist, flxSep2);
        var flxAdd = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "45dp",
            "id": "flxAdd",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAdd"), extendConfig({}, controller.args[1], "flxAdd"), extendConfig({}, controller.args[2], "flxAdd"));
        flxAdd.setDefaultUnit(kony.flex.DP);
        var flxAddMore = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "98%",
            "id": "flxAddMore",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddMore"), extendConfig({}, controller.args[1], "flxAddMore"), extendConfig({}, controller.args[2], "flxAddMore"));
        flxAddMore.setDefaultUnit(kony.flex.DP);
        var lblAdd = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAdd",
            "isVisible": true,
            "skin": "skinLblSSPRegular4176A412px",
            "text": "Add more accounts",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblAdd"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAdd"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAdd"));
        flxAddMore.add(lblAdd);
        var flxSep3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSep3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSep3"), extendConfig({}, controller.args[1], "flxSep3"), extendConfig({}, controller.args[2], "flxSep3"));
        flxSep3.setDefaultUnit(kony.flex.DP);
        flxSep3.add();
        flxAdd.add(flxAddMore, flxSep3);
        var flxDelete = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "45dp",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDelete"), extendConfig({}, controller.args[1], "flxDelete"), extendConfig({}, controller.args[2], "flxDelete"));
        flxDelete.setDefaultUnit(kony.flex.DP);
        var flxDeleteCustom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeleteCustom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDeleteCustom"), extendConfig({}, controller.args[1], "flxDeleteCustom"), extendConfig({}, controller.args[2], "flxDeleteCustom"));
        flxDeleteCustom.setDefaultUnit(kony.flex.DP);
        var lblDelete = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDelete",
            "isVisible": true,
            "skin": "skinLblSSPRegular4176A412px",
            "text": "Delete Custom View",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblDelete"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDelete"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDelete"));
        flxDeleteCustom.add(lblDelete);
        var flxSep4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSep4",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSep4"), extendConfig({}, controller.args[1], "flxSep4"), extendConfig({}, controller.args[2], "flxSep4"));
        flxSep4.setDefaultUnit(kony.flex.DP);
        flxSep4.add();
        flxDelete.add(flxDeleteCustom, flxSep4);
        flxContainer.add(flxEdit, flxRemove, flxAdd, flxDelete);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxffffffB",
            "top": "1%",
            "width": "80%",
            "zIndex": 200
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxCancelContant = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "45dp",
            "id": "flxCancelContant",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCancelContant"), extendConfig({}, controller.args[1], "flxCancelContant"), extendConfig({}, controller.args[2], "flxCancelContant"));
        flxCancelContant.setDefaultUnit(kony.flex.DP);
        var flxCancel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCancel"), extendConfig({}, controller.args[1], "flxCancel"), extendConfig({}, controller.args[2], "flxCancel"));
        flxCancel.setDefaultUnit(kony.flex.DP);
        var lblCancel = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblCancel",
            "isVisible": true,
            "skin": "skinLblSSPRegular4176A412px",
            "text": "Cancel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCancel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCancel"));
        flxCancel.add(lblCancel);
        flxCancelContant.add(flxCancel);
        flxMain.add(flxCancelContant);
        editCustomView.add(flxContainer, flxMain);
        return editCustomView;
    }
})