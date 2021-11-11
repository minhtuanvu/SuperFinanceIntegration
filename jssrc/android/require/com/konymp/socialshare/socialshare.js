define(function() {
    return function(controller) {
        var socialshare = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "0%",
            "id": "socialshare",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "0%"
        }, controller.args[0], "socialshare"), extendConfig({}, controller.args[1], "socialshare"), extendConfig({}, controller.args[2], "socialshare"));
        socialshare.setDefaultUnit(kony.flex.DP);
        socialshare.add();
        return socialshare;
    }
})