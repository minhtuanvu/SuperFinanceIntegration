define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j413c98784484a93bc3ced3b89b790d5: function AS_Form_j413c98784484a93bc3ced3b89b790d5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i9c0f8e1b85a40ed9e6363c67bf657c5: function AS_Form_i9c0f8e1b85a40ed9e6363c67bf657c5(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_e5aa7918f0674b2fbde23fd145c625aa: function AS_BarButtonItem_e5aa7918f0674b2fbde23fd145c625aa(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_a427f350b20e4104911cb35d215ce3ed: function AS_BarButtonItem_a427f350b20e4104911cb35d215ce3ed(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});