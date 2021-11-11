define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f2a68c29811d4ff8bcc463659b1196f2: function AS_Form_f2a68c29811d4ff8bcc463659b1196f2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ed9e6a03e3294d08ac23ae701fa0e536: function AS_Form_ed9e6a03e3294d08ac23ae701fa0e536(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_d09117e839c04ef68c0c254f7ad88e8c: function AS_BarButtonItem_d09117e839c04ef68c0c254f7ad88e8c(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    AS_Button_e91678f1e43a41e2bfe58a001515bd8f: function AS_Button_e91678f1e43a41e2bfe58a001515bd8f(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_acb704c8e0e446348baace83f281b28c: function AS_Button_acb704c8e0e446348baace83f281b28c(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_e5d6e53b58a74342bd244381a3945e3c: function AS_Button_e5d6e53b58a74342bd244381a3945e3c(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_dbc67333e66f45d89c3049ac85e98f97: function AS_Button_dbc67333e66f45d89c3049ac85e98f97(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e3de559a67e94091bf39b6ca95034ed4: function AS_Button_e3de559a67e94091bf39b6ca95034ed4(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_e072961820894efcb500f617a9b10830: function AS_Button_e072961820894efcb500f617a9b10830(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_c1eaab752ed349a1a78506cfd14a2f86: function AS_Button_c1eaab752ed349a1a78506cfd14a2f86(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_d39dcb857a864c7985698776a7804f71: function AS_Button_d39dcb857a864c7985698776a7804f71(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_gd47a2c8bacd4e809f9c289a7d560d69: function AS_Button_gd47a2c8bacd4e809f9c289a7d560d69(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_abf10fcff57f4c6da212d36355e3d3f2: function AS_Image_abf10fcff57f4c6da212d36355e3d3f2(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});