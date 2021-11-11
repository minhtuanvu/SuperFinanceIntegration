define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j011bdac71404a5f8d997eeb3c1b8df3: function AS_Form_j011bdac71404a5f8d997eeb3c1b8df3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_faaa5747981c4d58bce6f228944315be: function AS_Form_faaa5747981c4d58bce6f228944315be(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e89db9c190dc4f9c92a49123de332bdd: function AS_BarButtonItem_e89db9c190dc4f9c92a49123de332bdd(eventobject) {
        var self = this;
        this.customBack();
    },
    AS_BarButtonItem_b6e7109efd364152b38acd22b0d725a8: function AS_BarButtonItem_b6e7109efd364152b38acd22b0d725a8(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    }
});