define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_bca535d933294115b6f52552a731b32a: function AS_Button_bca535d933294115b6f52552a731b32a(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000: function AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_cab1b95d28444aadb26b01451a79e03b: function AS_Form_cab1b95d28444aadb26b01451a79e03b(eventobject) {
        var self = this;
        return self.preShowSelectUsername.call(this);
    },
    AS_BarButtonItem_f78a4917e7d6404f8453a9307c184f7b: function AS_BarButtonItem_f78a4917e7d6404f8453a9307c184f7b(eventobject) {
        var self = this;
        return self.navigateToLoginScreen.call(this);
    }
});