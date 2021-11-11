define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fc0133c1430849df9e8aaa29e735cdac: function AS_Form_fc0133c1430849df9e8aaa29e735cdac(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f504300835ea404aa461dfcff7379eef: function AS_Form_f504300835ea404aa461dfcff7379eef(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_cd12cc77a3d84d0695c0470e27795293: function AS_BarButtonItem_cd12cc77a3d84d0695c0470e27795293(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_e8b7c9bd8d294d3b8a95a8d49bcd628e: function AS_BarButtonItem_e8b7c9bd8d294d3b8a95a8d49bcd628e(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});