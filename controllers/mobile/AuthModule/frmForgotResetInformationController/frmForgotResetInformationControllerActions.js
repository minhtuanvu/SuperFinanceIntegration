define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_UWI_b35690c0e17e48c7aabb9dc8003d3250: function AS_UWI_b35690c0e17e48c7aabb9dc8003d3250() {
        var self = this;
        return self.closeComponentAndActivateAccount.call(this);
    },
    AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1: function AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_cdacc0ed5a5a4f80a80d980bf2d3cf61: function AS_Form_cdacc0ed5a5a4f80a80d980bf2d3cf61(eventobject) {
        var self = this;
        return self.preShowResetInformation.call(this);
    },
    AS_BarButtonItem_afc7e8dae4224a75bbb852ed37f7a100: function AS_BarButtonItem_afc7e8dae4224a75bbb852ed37f7a100(eventobject) {
        var self = this;
        applicationManager.getNavigationManager().navigateTo("frmForgotSelectUsername");
    },
    AS_BarButtonItem_d84bccd3e8a247cb9e0307d3f13f6553: function AS_BarButtonItem_d84bccd3e8a247cb9e0307d3f13f6553(eventobject) {
        var self = this;
        self.removeSavedData();
        applicationManager.getNavigationManager().navigateTo("frmLogin");
    },
    AS_UWI_b8e6cbb0ca854bd790d320199ef7d057: function AS_UWI_b8e6cbb0ca854bd790d320199ef7d057() {
        var self = this;
        return self.cancelResetPassword.call(this);
    },
    AS_UWI_da396c80f5e54804aa46b68beb3af3ec: function AS_UWI_da396c80f5e54804aa46b68beb3af3ec(response) {
        var self = this;
        return self.resetPasswordFailureCallback.call(this, response);
    },
    AS_UWI_c73106b14aa34e8faa25351719bedf20: function AS_UWI_c73106b14aa34e8faa25351719bedf20(response) {
        var self = this;
        return self.resetPasswordSuccessCallback.call(this, response);
    }
});