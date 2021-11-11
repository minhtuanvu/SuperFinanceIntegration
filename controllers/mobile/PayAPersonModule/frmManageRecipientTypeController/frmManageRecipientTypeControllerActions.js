define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bd5bbb96af8a4fa58cca836af5ac8db8: function AS_Form_bd5bbb96af8a4fa58cca836af5ac8db8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a744faf4e4b74f6b912131266ffc0921: function AS_Form_a744faf4e4b74f6b912131266ffc0921(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_cda90dcf02404c75a0d862cf9b76919a: function AS_BarButtonItem_cda90dcf02404c75a0d862cf9b76919a(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});