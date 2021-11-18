define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a053d9d61c084847beec05ca1e4648f9: function AS_Form_a053d9d61c084847beec05ca1e4648f9(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c352a26e529d4107b89465fac8c184b0: function AS_Form_c352a26e529d4107b89465fac8c184b0(eventobject) {
        var self = this;
        this.frmSettingsPreShow();
    },
    AS_BarButtonItem_gcb0fde7959544c0b4dd6d1ecfbd3216: function AS_BarButtonItem_gcb0fde7959544c0b4dd6d1ecfbd3216(eventobject) {
        var self = this;
        settingsHam = 1;
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler = applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENUSETTINGS);
    }
});