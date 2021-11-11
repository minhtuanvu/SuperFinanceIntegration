define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ffea859fded64f40b039fc2d0471c8df: function AS_Form_ffea859fded64f40b039fc2d0471c8df(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d7a7620f99c14e16902942d8b2b31f99: function AS_Form_d7a7620f99c14e16902942d8b2b31f99(eventobject) {
        var self = this;
        this.frmPostShow();
    },
    AS_Form_c60f77fcf4a84e019a92b122079bcd18: function AS_Form_c60f77fcf4a84e019a92b122079bcd18(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_d695f301f73d4e95bf6bba129c97d9c0: function AS_BarButtonItem_d695f301f73d4e95bf6bba129c97d9c0(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_ace95eccff784f2d9190750723d49b8d: function AS_BarButtonItem_ace95eccff784f2d9190750723d49b8d(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});