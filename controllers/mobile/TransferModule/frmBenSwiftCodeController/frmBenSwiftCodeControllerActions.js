define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i4d223eb8aab4c47bcad0a41814dd831: function AS_Form_i4d223eb8aab4c47bcad0a41814dd831(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c0b289a92ba0482a814324b145641541: function AS_Form_c0b289a92ba0482a814324b145641541(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a299c96cca124a79b956ce54a8f6107a: function AS_BarButtonItem_a299c96cca124a79b956ce54a8f6107a(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_a92804d3095f416e8e13735c57194137: function AS_BarButtonItem_a92804d3095f416e8e13735c57194137(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});