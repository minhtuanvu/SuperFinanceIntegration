define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a76a59d48882421da82ee65649383478: function AS_Form_a76a59d48882421da82ee65649383478(eventobject) {
        var self = this;
        //this.init();
    },
    AS_Form_def7973444104605876b6edbb9eefd02: function AS_Form_def7973444104605876b6edbb9eefd02(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a6fb2b6af8834b45b7df7c1276e3a65a: function AS_BarButtonItem_a6fb2b6af8834b45b7df7c1276e3a65a(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    }
});