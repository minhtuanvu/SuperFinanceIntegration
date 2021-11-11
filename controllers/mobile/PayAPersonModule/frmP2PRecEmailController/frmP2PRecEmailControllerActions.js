define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f1d67775a24a438e978779d501a93e66: function AS_Form_f1d67775a24a438e978779d501a93e66(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f90dbee66c374cb6ac7e563b2919768f: function AS_Form_f90dbee66c374cb6ac7e563b2919768f(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_ff4513ccf0834ede9a2d01c4763a34ad: function AS_BarButtonItem_ff4513ccf0834ede9a2d01c4763a34ad(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_efb871ac38c64cc4a3ea1bfca2af993a: function AS_BarButtonItem_efb871ac38c64cc4a3ea1bfca2af993a(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});