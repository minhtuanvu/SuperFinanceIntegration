define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_d98a63ddfe7e4b3c8e1902d1fd64a3bf: function AS_FlexContainer_d98a63ddfe7e4b3c8e1902d1fd64a3bf(eventobject) {
        var self = this;
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
    },
    AS_FlexContainer_e4e98be0fcfa4db49dbbd4a2a0cb6988: function AS_FlexContainer_e4e98be0fcfa4db49dbbd4a2a0cb6988(eventobject) {
        var self = this;
        this.navigateToWealth();
    },
    AS_FlexContainer_e03938a6b3bf4ad1a92f06b1833ae3e0: function AS_FlexContainer_e03938a6b3bf4ad1a92f06b1833ae3e0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("SuperFinanceModule/frmInsightSF");
        ntf.navigate();
    },
    AS_Form_afde5dcd684d466883857c18de6bdfa1: function AS_Form_afde5dcd684d466883857c18de6bdfa1(eventobject) {
        var self = this;
        this.preshowWork();
    }
});