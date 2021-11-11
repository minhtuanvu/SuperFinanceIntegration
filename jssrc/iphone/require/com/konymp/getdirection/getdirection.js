define(function() {
    return function(controller) {
        var getdirection = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "80dp",
            "id": "getdirection",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_f0289a0af5934ba19ce97209a97b77eb(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "80dp"
        }, controller.args[0], "getdirection"), extendConfig({}, controller.args[1], "getdirection"), extendConfig({}, controller.args[2], "getdirection"));
        getdirection.setDefaultUnit(kony.flex.DP);
        var btnGetDirection = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "btnGetDirection",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_dc170d5c68634eaab12bce154dd46ea2,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnGetDirection"), extendConfig({}, controller.args[1], "btnGetDirection"), extendConfig({}, controller.args[2], "btnGetDirection"));
        btnGetDirection.setDefaultUnit(kony.flex.DP);
        var imgGetDirections = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgGetDirections",
            "isVisible": true,
            "skin": "slImage",
            "src": "konympgetdirectionsicon.png",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "imgGetDirections"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGetDirections"), extendConfig({}, controller.args[2], "imgGetDirections"));
        btnGetDirection.add(imgGetDirections);
        var actionsheet = new com.konymp.actionsheet(extendConfig({
            "height": "100%",
            "id": "actionsheet",
            "isVisible": false,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "CopykonympassknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2,
            "overrides": {
                "lblTitleText": {
                    "text": "Get Directions"
                },
                "lblDescriptionText": {
                    "text": "Which map would you like to use?"
                },
                "btnOption1": {
                    "text": "Google Maps"
                },
                "btnOption2": {
                    "text": "Apple Maps"
                },
                "actionsheet": {
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
        }, controller.args[0], "actionsheet"), extendConfig({
            "overrides": {}
        }, controller.args[1], "actionsheet"), extendConfig({
            "overrides": {}
        }, controller.args[2], "actionsheet"));
        actionsheet.onClose = controller.AS_UWI_e243e89d596a416ca3594fb9b15c8a22;
        getdirection.add(btnGetDirection, actionsheet);
        return getdirection;
    }
})