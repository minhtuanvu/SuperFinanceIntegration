define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fce21359abd6401187b02472357cfb65: function AS_Form_fce21359abd6401187b02472357cfb65(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_eaa5f4b079814653b1787b96a846be74: function AS_Form_eaa5f4b079814653b1787b96a846be74(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i1b4ebe8aaf54e2a9969633421bcf2c0: function AS_BarButtonItem_i1b4ebe8aaf54e2a9969633421bcf2c0(eventobject) {
        var self = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    AS_BarButtonItem_jd9070c4d0b840e9970da0232d770569: function AS_BarButtonItem_jd9070c4d0b840e9970da0232d770569(eventobject) {
        var self = this;
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.commonFunctionForNavigation("frmForgotEnterPhoneNumber");
    }
});