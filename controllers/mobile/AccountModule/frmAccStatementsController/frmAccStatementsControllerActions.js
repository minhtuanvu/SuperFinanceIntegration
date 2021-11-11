define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_af97396e008646d4ad75cc38f42be800: function AS_Button_af97396e008646d4ad75cc38f42be800(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_g91496c83558462a8247c0a8a854bea3: function AS_FlexContainer_g91496c83558462a8247c0a8a854bea3(eventobject) {
        var self = this;
        return self.flxArrowOnclick.call(this);
    },
    AS_FlexScrollContainer_a802cb13639b416e96351b677d3d1c27: function AS_FlexScrollContainer_a802cb13639b416e96351b677d3d1c27(eventobject, x, y) {
        var self = this;
        return self.animateFlxSelectYearBack.call(this);
    },
    AS_Form_da6cda809b7d4365bb459548a45fa23d: function AS_Form_da6cda809b7d4365bb459548a45fa23d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fe0e4b16e6ac4b3bb66aee507ced8afc: function AS_Form_fe0e4b16e6ac4b3bb66aee507ced8afc(eventobject) {
        var self = this;
    },
    AS_Form_ecdcfd3b9a8642fdbd8c3e6c243dff4b: function AS_Form_ecdcfd3b9a8642fdbd8c3e6c243dff4b(eventobject) {
        var self = this;
        return self.frmAccountStatementsPreshow.call(this);
    }
});