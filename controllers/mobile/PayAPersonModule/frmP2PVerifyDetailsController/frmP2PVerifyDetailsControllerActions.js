define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_dbd8ca3e5b05403693eeb49c0bee55b7: function AS_Form_dbd8ca3e5b05403693eeb49c0bee55b7(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bd4d549e3dda43d6886c04670c1a1829: function AS_Form_bd4d549e3dda43d6886c04670c1a1829(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_j5eb6fccc57f4f438bdad8230fd21425: function AS_BarButtonItem_j5eb6fccc57f4f438bdad8230fd21425(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_fe80454839f24c2d882d124db442dfe6: function AS_BarButtonItem_fe80454839f24c2d882d124db442dfe6(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});