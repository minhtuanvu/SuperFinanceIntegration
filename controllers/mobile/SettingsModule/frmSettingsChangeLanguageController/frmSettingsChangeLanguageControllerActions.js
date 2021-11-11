define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_h2c1ef5077ee4a0f960236cc1e4b0499: function AS_FlexContainer_h2c1ef5077ee4a0f960236cc1e4b0499(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmForgotMain");
    },
    AS_Form_b187292595fd4e1b97140267cb33281e: function AS_Form_b187292595fd4e1b97140267cb33281e(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_bf3674be2ce34dc389ff795702bceb2b: function AS_Form_bf3674be2ce34dc389ff795702bceb2b(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_f23493d0d55d4088a17b7c72fec0122c: function AS_BarButtonItem_f23493d0d55d4088a17b7c72fec0122c(eventobject) {
        var self = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    AS_Segment_g226bea62205492ca74dc32281bda0dd: function AS_Segment_g226bea62205492ca74dc32281bda0dd(eventobject, sectionNumber, rowNumber) {
        var self = this;
    }
});