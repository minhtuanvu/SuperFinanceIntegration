define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b4e16fc0ef03447883388ab9e1155220: function AS_Form_b4e16fc0ef03447883388ab9e1155220(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bb88c2f4cc1c4744995016d6ce86015f: function AS_Form_bb88c2f4cc1c4744995016d6ce86015f(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_f426b0f59a364283925759a81220e60d: function AS_BarButtonItem_f426b0f59a364283925759a81220e60d(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_ae4cf3501b6941fb8cb3093db2328fb6: function AS_BarButtonItem_ae4cf3501b6941fb8cb3093db2328fb6(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});