define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ed2ecb6f943749d4b001cc3646fc572f: function AS_Form_ed2ecb6f943749d4b001cc3646fc572f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ba16169522e24e2ab01639f0ae498ea6: function AS_Form_ba16169522e24e2ab01639f0ae498ea6(eventobject) {
        var self = this;
        this.showSecurityCode();
    },
    AS_BarButtonItem_e2e409c6556541b6bd45576225808889: function AS_BarButtonItem_e2e409c6556541b6bd45576225808889(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    AS_Button_dd5d7b04bfb443e1949457b76d30cc23: function AS_Button_dd5d7b04bfb443e1949457b76d30cc23(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_i4b435790a2d41449123253d1717483a: function AS_Button_i4b435790a2d41449123253d1717483a(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_hc2988cc821c4c98b6122cb91a235ada: function AS_Button_hc2988cc821c4c98b6122cb91a235ada(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_g714a4a0d07046a886daa7857118550d: function AS_Button_g714a4a0d07046a886daa7857118550d(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_af024f9d8bb948f6944420d6078fff66: function AS_Button_af024f9d8bb948f6944420d6078fff66(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_g76549894dab4af181c736d6e84cb000: function AS_Button_g76549894dab4af181c736d6e84cb000(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_dadb2f2daec641a899e6809a081878c3: function AS_Button_dadb2f2daec641a899e6809a081878c3(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_d0c31fb603c047f89db7e751f8ea167f: function AS_Button_d0c31fb603c047f89db7e751f8ea167f(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_f77b178b16f3442cb908326b51e6024a: function AS_Button_f77b178b16f3442cb908326b51e6024a(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_dbdb7dfae1d443c394244157b9327069: function AS_Button_dbdb7dfae1d443c394244157b9327069(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_g99f1d1943fb4abb8450bac1f843d825: function AS_Image_g99f1d1943fb4abb8450bac1f843d825(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});