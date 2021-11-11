define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i02f0673192e4468950657955c84c0a4: function AS_Form_i02f0673192e4468950657955c84c0a4(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hb557ff8e1594f33a64c9f9fba262053: function AS_Form_hb557ff8e1594f33a64c9f9fba262053(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_fdfee87ed0b54437ac8680292c30cc37: function AS_BarButtonItem_fdfee87ed0b54437ac8680292c30cc37(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    }
});