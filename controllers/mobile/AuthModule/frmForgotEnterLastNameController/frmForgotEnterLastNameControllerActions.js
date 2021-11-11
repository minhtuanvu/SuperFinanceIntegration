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
    AS_Form_da8197074f2e43f1a1d0e20dfde5dd69: function AS_Form_da8197074f2e43f1a1d0e20dfde5dd69(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ca1ba59b895d46689d370aeec4845dd6: function AS_Form_ca1ba59b895d46689d370aeec4845dd6(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a7abc4c2e9834f4a8f05b73576ec5cfa: function AS_BarButtonItem_a7abc4c2e9834f4a8f05b73576ec5cfa(eventobject) {
        var self = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    },
    AS_BarButtonItem_bb01710ab2274df68dff399556ff4159: function AS_BarButtonItem_bb01710ab2274df68dff399556ff4159(eventobject) {
        var self = this;
        this.onCancel();
    }
});