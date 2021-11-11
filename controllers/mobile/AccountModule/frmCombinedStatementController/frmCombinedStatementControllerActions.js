define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_af97396e008646d4ad75cc38f42be800: function AS_Button_af97396e008646d4ad75cc38f42be800(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_e1d10f76357d4e9aa04b782a6d394285: function AS_Form_e1d10f76357d4e9aa04b782a6d394285(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_df99031f377e4389a89732d43adc303e: function AS_Form_df99031f377e4389a89732d43adc303e(eventobject) {
        var self = this;
        return self.preshow.call(this);
    },
});