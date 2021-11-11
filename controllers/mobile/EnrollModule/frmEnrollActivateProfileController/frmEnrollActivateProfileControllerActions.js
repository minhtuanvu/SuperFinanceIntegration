define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_UWI_e8edd086e18f44a2a4c1b3a2ecb4d241: function AS_UWI_e8edd086e18f44a2a4c1b3a2ecb4d241() {
        var self = this;
        return self.closeActivateProfileFlow.call(this);
    },
    AS_UWI_f8e67744ef8d42498b481aa460a0da19: function AS_UWI_f8e67744ef8d42498b481aa460a0da19() {
        var self = this;
        return self.navigateToFrmLogin.call(this);
    },
    AS_Button_bccdd148f545430ba4f819367c5fa246: function AS_Button_bccdd148f545430ba4f819367c5fa246(eventobject) {
        var self = this;
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_cc03c790c039457284764371625ed0b8: function AS_Form_cc03c790c039457284764371625ed0b8(eventobject) {
        var self = this;
        return self.frmEnrollActivateProfilePreShow.call(this);
    },
    AS_BarButtonItem_g63d9831d55a4de886e1d37019ce8d67: function AS_BarButtonItem_g63d9831d55a4de886e1d37019ce8d67(eventobject) {
        var self = this;
        return self.navigateToFrmLogin.call(this);
    },
    AS_BarButtonItem_eedc52fa13ee44ca8d9d72e93bcf7e09: function AS_BarButtonItem_eedc52fa13ee44ca8d9d72e93bcf7e09(eventobject) {
        var self = this;
        return self.navigateToFrmLogin.call(this);
    }
});