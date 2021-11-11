define(function() {
    return function(controller) {
        var tabs = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "tabs",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_b2e798f9491e4855930ffc57532ff203(eventobject);
            },
            "skin": "ICSknFlx003E75BlueMb",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "tabs"), extendConfig({}, controller.args[1], "tabs"), extendConfig({}, controller.args[2], "tabs"));
        tabs.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50%",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "17dp",
            "isModalContainer": false,
            "right": 20,
            "skin": "ICSknFlx004E75BlueMB",
            "width": "92%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var btnTab1 = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtnFFFFFFRounded003E7528PxMb",
            "height": "100%",
            "id": "btnTab1",
            "isVisible": true,
            "skin": "ICSknBtnFFFFFFRounded003E7528PxMb",
            "text": "Transfers",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "btnTab1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTab1"), extendConfig({}, controller.args[2], "btnTab1"));
        var flxSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlxE0E0E0ShadowMb",
            "width": "0.18%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator"), extendConfig({}, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var btnTab2 = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn003E75RoundedFFFFFF28PX",
            "height": "100%",
            "id": "btnTab2",
            "isVisible": true,
            "skin": "ICSknBtn003E75RoundedFFFFFF28PX",
            "text": "Recurring",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "btnTab2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTab2"), extendConfig({}, controller.args[2], "btnTab2"));
        var flxSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlxE0E0E0ShadowMb",
            "width": "0.18%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator2"), extendConfig({}, controller.args[1], "flxSeparator2"), extendConfig({}, controller.args[2], "flxSeparator2"));
        flxSeparator2.setDefaultUnit(kony.flex.DP);
        flxSeparator2.add();
        var btnTab3 = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn003E75RoundedFFFFFF28PX",
            "height": "100%",
            "id": "btnTab3",
            "isVisible": true,
            "skin": "ICSknBtn003E75RoundedFFFFFF28PX",
            "text": "Direct Debits",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "btnTab3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTab3"), extendConfig({}, controller.args[2], "btnTab3"));
        var flxSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlxE0E0E0ShadowMb",
            "width": "0.18%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator3"), extendConfig({}, controller.args[1], "flxSeparator3"), extendConfig({}, controller.args[2], "flxSeparator3"));
        flxSeparator3.setDefaultUnit(kony.flex.DP);
        flxSeparator3.add();
        var btnTab4 = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn003E75RoundedFFFFFF28PX",
            "height": "100%",
            "id": "btnTab4",
            "isVisible": true,
            "skin": "ICSknBtn003E75RoundedFFFFFF28PX",
            "text": "Sweep",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "btnTab4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTab4"), extendConfig({}, controller.args[2], "btnTab4"));
        flxMainContainer.add(btnTab1, flxSeparator, btnTab2, flxSeparator2, btnTab3, flxSeparator3, btnTab4);
        tabs.add(flxMainContainer);
        return tabs;
    }
})