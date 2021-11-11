define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i963c8b3369b475da87f4b22f2891309: function AS_Form_i963c8b3369b475da87f4b22f2891309(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c04c664732fe42e9b2aeb261b7428a9b: function AS_Form_c04c664732fe42e9b2aeb261b7428a9b(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ca8d2fa9fbd94018aedbbb6a836d36ae: function AS_BarButtonItem_ca8d2fa9fbd94018aedbbb6a836d36ae(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});