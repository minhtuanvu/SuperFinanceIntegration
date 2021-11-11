define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b7c4d8140c6b412d958f077ac6dc8f7f: function AS_Form_b7c4d8140c6b412d958f077ac6dc8f7f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bf5944dbadf7406286a8a0b64e80eaf1: function AS_Form_bf5944dbadf7406286a8a0b64e80eaf1(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_g168c367b0024c80bd928bda257c1f8a: function AS_BarButtonItem_g168c367b0024c80bd928bda257c1f8a(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_e9f23e9c11e940ff9478811afe4f2380: function AS_BarButtonItem_e9f23e9c11e940ff9478811afe4f2380(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});