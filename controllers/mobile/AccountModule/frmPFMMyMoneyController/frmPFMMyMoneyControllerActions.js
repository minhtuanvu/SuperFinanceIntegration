define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_f440b7436f27438ca4595c1d01793cff: function AS_FlexContainer_f440b7436f27438ca4595c1d01793cff(eventobject) {
        var self = this;
        // Dummy Action
    },
    AS_Form_jef8886af76f4bf09cfd02330accc0e1: function AS_Form_jef8886af76f4bf09cfd02330accc0e1(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a5df6ed5cc624a70aa85db84531df974: function AS_Form_a5df6ed5cc624a70aa85db84531df974(eventobject) {
        var self = this;
        this.pfmPostshow();
    },
    AS_Form_c9294c1e0a0243fb9f426fd2dd224ffe: function AS_Form_c9294c1e0a0243fb9f426fd2dd224ffe(eventobject) {
        var self = this;
        this.pfmPreshow();
    },
    AS_BarButtonItem_bb3b5ec16c8640dc9b2446e00eafe372: function AS_BarButtonItem_bb3b5ec16c8640dc9b2446e00eafe372(eventobject) {
        var self = this;
        settingsHam = 1;
        var scope = this;
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler = applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUPFMMYMONEY);
    }
});