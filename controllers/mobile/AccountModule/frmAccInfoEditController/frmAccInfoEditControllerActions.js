define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_gf9df2332ade4a2a99bc037bbaa18927: function AS_Form_gf9df2332ade4a2a99bc037bbaa18927(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bee2858cb2d9483aadb2207ce57c3ade: function AS_Form_bee2858cb2d9483aadb2207ce57c3ade(eventobject) {
        var self = this;
        this.view.txtNickName.setEnabled(true);
        this.view.txtNickName.setFocus(true);
    },
    AS_Form_bd5f43b966b644b399683095b3b21d4f: function AS_Form_bd5f43b966b644b399683095b3b21d4f(eventobject) {
        var self = this;
        this.frmEditNickNamePreShow();
    },
    AS_BarButtonItem_dae885c7ddbc44cb946de9bec0b568a2: function AS_BarButtonItem_dae885c7ddbc44cb946de9bec0b568a2(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        this.accDetails = navMan.goBack();
    }
});