define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    AS_BarButtonItem_dcfb21880bde476ebba81f76f2ea2b3b: function AS_BarButtonItem_dcfb21880bde476ebba81f76f2ea2b3b(eventobject) {
        var self = this;
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transferMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    AS_BarButtonItem_gf7a93734bb64eaeb0b457a34fa93ffa: function AS_BarButtonItem_gf7a93734bb64eaeb0b457a34fa93ffa(eventobject) {
        var self = this;
        return self.navigateBack.call(this);
    },
    /** preShow defined for frmManageRecipientList **/
    AS_Form_ae5717944dca42d28332738fc1dc1f96: function AS_Form_ae5717944dca42d28332738fc1dc1f96(eventobject) {
        var self = this;
        this.preShow();
    },
    /** init defined for frmManageRecipientList **/
    AS_Form_d0b2d553bfba40c6aa3359aa6e367918: function AS_Form_d0b2d553bfba40c6aa3359aa6e367918(eventobject) {
        var self = this;
        this.init();
    }
});