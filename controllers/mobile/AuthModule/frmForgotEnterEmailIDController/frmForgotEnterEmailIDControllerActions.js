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
    AS_Form_a7f2470061684ca28444637caace9531: function AS_Form_a7f2470061684ca28444637caace9531(eventobject) {
        var self = this;
        return self.emailIDPreShow.call(this);
    },
    AS_BarButtonItem_fcbfabcdc4d4479ca2544b349581e5bf: function AS_BarButtonItem_fcbfabcdc4d4479ca2544b349581e5bf(eventobject) {
        var self = this;
        return self.navigateToPreviousForm.call(this);
    },
    AS_BarButtonItem_f20d3d9759b54436bb5566a0d8cd40d3: function AS_BarButtonItem_f20d3d9759b54436bb5566a0d8cd40d3(eventobject) {
        var self = this;
        return self.navigateToPreviousForm.call(this);
    }
});