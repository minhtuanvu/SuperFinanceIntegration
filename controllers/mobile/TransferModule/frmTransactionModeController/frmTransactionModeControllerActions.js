define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee: function AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee(eventobject) {
        var self = this;
        this.backNavigation();
    },
    AS_Form_aa0a7a6dccc64c8f9f478835b4388466: function AS_Form_aa0a7a6dccc64c8f9f478835b4388466(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bdd1d73677564bdc8490ef814f126f2d: function AS_Form_bdd1d73677564bdc8490ef814f126f2d(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e445fa2e93204f1cb5979e885563b7fc: function AS_BarButtonItem_e445fa2e93204f1cb5979e885563b7fc(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        transModPresentationController.commonFunctionForNavigation("frmTransfers");
    }
});