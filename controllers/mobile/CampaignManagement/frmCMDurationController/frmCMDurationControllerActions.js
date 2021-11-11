define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d46ba8dcd2bb45048856eaa0abdbbaf8: function AS_Form_d46ba8dcd2bb45048856eaa0abdbbaf8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_id3572f38a0048c8aa67963dae698149: function AS_Form_id3572f38a0048c8aa67963dae698149(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d237dac2ddf0418b9e40d1ce30d0ea36: function AS_BarButtonItem_d237dac2ddf0418b9e40d1ce30d0ea36(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    }
});