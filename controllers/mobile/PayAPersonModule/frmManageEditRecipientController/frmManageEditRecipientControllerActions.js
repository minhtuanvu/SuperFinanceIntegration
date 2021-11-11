define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a91764887e84478fa3afc11fa5103285: function AS_Form_a91764887e84478fa3afc11fa5103285(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f68b2b2d7287434ba63bed555c3c4155: function AS_Form_f68b2b2d7287434ba63bed555c3c4155(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_dc800a1f94824cc79d47509bff576308: function AS_BarButtonItem_dc800a1f94824cc79d47509bff576308(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_i04aa4c95f944af3a0d64ff7210f6bcb: function AS_BarButtonItem_i04aa4c95f944af3a0d64ff7210f6bcb(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});