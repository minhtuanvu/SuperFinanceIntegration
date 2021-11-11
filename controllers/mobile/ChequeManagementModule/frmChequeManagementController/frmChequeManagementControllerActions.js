define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_h8f1601135884cbb9bae6c06f5cd660a: function AS_FlexContainer_h8f1601135884cbb9bae6c06f5cd660a(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmMessages");
    },
    AS_FlexContainer_ffa9b06e930f4dca9bf7ea3176053cc4: function AS_FlexContainer_ffa9b06e930f4dca9bf7ea3176053cc4(eventobject) {
        var self = this;
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    AS_Form_h6120a17ea924617bb1b40deb9ee8538: function AS_Form_h6120a17ea924617bb1b40deb9ee8538(eventobject) {
        var self = this;
        this.initActions();
    },
    AS_Form_j15ed94953934b9ba5fe050d9782a242: function AS_Form_j15ed94953934b9ba5fe050d9782a242(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_e16f80b335704f548f75afe9a7ec1c35: function AS_Form_e16f80b335704f548f75afe9a7ec1c35(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e954fd09878f4da08fb7de4319c6b500: function AS_BarButtonItem_e954fd09878f4da08fb7de4319c6b500(eventobject) {
        var self = this;
        this.navigateCustomBack();
    }
});