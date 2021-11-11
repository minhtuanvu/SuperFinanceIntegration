define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_a5850167cfc74ec5b699c37881261bc7: function AS_Button_a5850167cfc74ec5b699c37881261bc7(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_a2a73473d43d43ef9a6364e467eb0503: function AS_FlexContainer_a2a73473d43d43ef9a6364e467eb0503(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_d0c57c37fb494c519c118826d7ebd15d: function AS_Form_d0c57c37fb494c519c118826d7ebd15d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i81a8ada01504f3fb3f43df3e46b5777: function AS_Form_i81a8ada01504f3fb3f43df3e46b5777(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_jf7325c6e4414441b1c9f978cd1eb946: function AS_BarButtonItem_jf7325c6e4414441b1c9f978cd1eb946(eventobject) {
        var self = this;
        this.cancelCommon();
    }
});