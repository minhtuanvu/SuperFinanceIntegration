define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bd79a6424eca40bdafc21a3eac7cccc1: function AS_Form_bd79a6424eca40bdafc21a3eac7cccc1(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a99baf744b7c486d99f940bd5269188d: function AS_Form_a99baf744b7c486d99f940bd5269188d(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_f1809c17bdf5451d8d5feb8bdd859d1e: function AS_BarButtonItem_f1809c17bdf5451d8d5feb8bdd859d1e(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_b9f606be00bc43a78961035c30cfec1b: function AS_BarButtonItem_b9f606be00bc43a78961035c30cfec1b(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});