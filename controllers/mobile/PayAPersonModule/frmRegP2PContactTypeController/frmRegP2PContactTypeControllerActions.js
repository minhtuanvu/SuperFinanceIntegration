define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b8ee8ec2c94546b4ba4fa7c9a5c8954b: function AS_Form_b8ee8ec2c94546b4ba4fa7c9a5c8954b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b62fc4d077f6447d922e88fa503c2163: function AS_Form_b62fc4d077f6447d922e88fa503c2163(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_b6463fddcf0f4f28afadb524b5bb5c8d: function AS_BarButtonItem_b6463fddcf0f4f28afadb524b5bb5c8d(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_f2ce6a159faa40469cdebc7de66198ed: function AS_BarButtonItem_f2ce6a159faa40469cdebc7de66198ed(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});