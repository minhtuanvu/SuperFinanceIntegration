define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d5e9c2a7ec6c4df6a6b2fcbdd49d249d: function AS_Button_d5e9c2a7ec6c4df6a6b2fcbdd49d249d(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_f90bd079c9404b90bcd1eac0daf9e8ad: function AS_FlexContainer_f90bd079c9404b90bcd1eac0daf9e8ad(eventobject) {
        var self = this;
        return self.flxArrowOnclick.call(this);
    },
    AS_FlexContainer_ca2d4feadd934b428ce8bb2aeabbddb5: function AS_FlexContainer_ca2d4feadd934b428ce8bb2aeabbddb5(eventobject, x, y) {
        var self = this;
        return self.flxArrowOnclick.call(this);
    },
    AS_FlexScrollContainer_a1f17e219b8e42f2b39be7959665e088: function AS_FlexScrollContainer_a1f17e219b8e42f2b39be7959665e088(eventobject, x, y) {
        var self = this;
        return self.animateFlxSelectYearBack.call(this);
    },
    AS_Form_b796e785ce1a47b7b3713642025a999c: function AS_Form_b796e785ce1a47b7b3713642025a999c(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c5c292c7cc5844c3a7edc4a25cf65578: function AS_Form_c5c292c7cc5844c3a7edc4a25cf65578(eventobject) {
        var self = this;
        this.view.imgArrow.src = "arrowdown.png";
        this.animateFlxSelectYearBack();
    },
    AS_Form_acec5fdd8d724def9c540dc628023329: function AS_Form_acec5fdd8d724def9c540dc628023329(eventobject) {
        var self = this;
        this.Preshow();
    }
});