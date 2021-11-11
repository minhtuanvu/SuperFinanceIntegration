define("AuthModule/userfrmLanguageSelectionLoadingController", {
    //Type your controller code here
    init: function() {},
    preShow: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    postShow: function() {
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var sm = applicationManager.getStorageManager();
        var config = applicationManager.getConfigurationManager();
        var langObjFromStorage = sm.getStoredItem("langObj");
        if (langObjFromStorage.flow === config.constants.LANG_CHANGE_FROM_LOGIN) authMod.presentationController.onLanguageChange();
        else authMod.presentationController.onLanguageChangeFromSettings();
    }
});
define("AuthModule/frmLanguageSelectionLoadingControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i21e8f31a03d4e5e99501182769c41a7: function AS_Form_i21e8f31a03d4e5e99501182769c41a7(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_j494345be9644feab4186c97ea6a7d53: function AS_Form_j494345be9644feab4186c97ea6a7d53(eventobject) {
        var self = this;
        return self.postShow.call(this);
    },
    AS_Form_c876415c32634851b41ad00aabb91bd4: function AS_Form_c876415c32634851b41ad00aabb91bd4(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("AuthModule/frmLanguageSelectionLoadingController", ["AuthModule/userfrmLanguageSelectionLoadingController", "AuthModule/frmLanguageSelectionLoadingControllerActions"], function() {
    var controller = require("AuthModule/userfrmLanguageSelectionLoadingController");
    var controllerActions = ["AuthModule/frmLanguageSelectionLoadingControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
