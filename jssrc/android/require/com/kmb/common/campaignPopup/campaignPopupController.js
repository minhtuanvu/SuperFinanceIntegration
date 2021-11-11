define("com/kmb/common/campaignPopup/usercampaignPopupController", function() {
    return {
        closePopup: function() {
            var scopeObj = this;
            scopeObj.view.setVisibility(false);
        },
        onClickofCampaign: function(url) {
            var scopeObj = this;
            let actionType = scopeObj.getQueryString("actionType", url);
            let moduleName = scopeObj.getQueryString("moduleName", url);
            if (actionType === "internal" && moduleName) {
                applicationManager.getNavigationManager().navigateTo(moduleName);
            } else {
                kony.application.openURL(url);
            }
        },
        getQueryString: function(field, url) {
            var href = url;
            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            var string = reg.exec(href);
            return string ? string[1] : null;
        },
    };
});
define("com/kmb/common/campaignPopup/campaignPopupControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/kmb/common/campaignPopup/campaignPopupController", ["com/kmb/common/campaignPopup/usercampaignPopupController", "com/kmb/common/campaignPopup/campaignPopupControllerActions"], function() {
    var controller = require("com/kmb/common/campaignPopup/usercampaignPopupController");
    var actions = require("com/kmb/common/campaignPopup/campaignPopupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
