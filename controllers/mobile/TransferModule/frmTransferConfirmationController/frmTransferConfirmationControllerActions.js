define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_jd58db7a25244a08af4ccce2c79d033b: function AS_Button_jd58db7a25244a08af4ccce2c79d033b(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.commonFunctionForNavigation("frmTransfers");
    },
    AS_Form_c34776372475469ea4fb849481f275a2: function AS_Form_c34776372475469ea4fb849481f275a2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_cf1ed2fda2d5498ba0349c7e80a43ce2: function AS_Form_cf1ed2fda2d5498ba0349c7e80a43ce2(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i96ac28b57af4d96ae169694ecd89626: function AS_BarButtonItem_i96ac28b57af4d96ae169694ecd89626(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});