define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b1b2c36c7a3b4bdd8e7ada4906095f44: function AS_Form_b1b2c36c7a3b4bdd8e7ada4906095f44(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b38c8ac6ea2b4aee96a21fc7c4af916e: function AS_BarButtonItem_b38c8ac6ea2b4aee96a21fc7c4af916e(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});