define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e2205130066f4caa93b91a529398c525: function AS_Button_e2205130066f4caa93b91a529398c525(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_d0ea3445e7e0423ea1c949028a411430: function AS_Button_d0ea3445e7e0423ea1c949028a411430(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_bfac9a3053174284babaea3848fe4cd4: function AS_Button_bfac9a3053174284babaea3848fe4cd4(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_e108bbc85ae1487c89d756c586995144: function AS_Form_e108bbc85ae1487c89d756c586995144(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a7a1c263fee449ddaf08983e2d300057: function AS_Form_a7a1c263fee449ddaf08983e2d300057(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ed82d3f27f9e49fcb1377ff1c0a31c3a: function AS_BarButtonItem_ed82d3f27f9e49fcb1377ff1c0a31c3a(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    },
    AS_Button_h147c1dd62e8475eaa13d0c6158353d6: function AS_Button_h147c1dd62e8475eaa13d0c6158353d6(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_aaf3fa43ed2945949f66b6004b510ae5: function AS_Button_aaf3fa43ed2945949f66b6004b510ae5(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_g1e3f08fd7de4c6ba3490e1730d43dff: function AS_Button_g1e3f08fd7de4c6ba3490e1730d43dff(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_g110ed24367b4f68a02699a136c9330b: function AS_Button_g110ed24367b4f68a02699a136c9330b(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_df936ebdc855496c86b5c2bd26d75c62: function AS_Button_df936ebdc855496c86b5c2bd26d75c62(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_a7ba043cc8d74aa0b654e730a3163805: function AS_Button_a7ba043cc8d74aa0b654e730a3163805(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_i7f435117b734fc0a3244082fc19f4a4: function AS_Button_i7f435117b734fc0a3244082fc19f4a4(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_d613fc79e36247d3b15c0430012210be: function AS_Button_d613fc79e36247d3b15c0430012210be(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_ga4f0d0200ed44b3b1d5d676aef3ee6e: function AS_Button_ga4f0d0200ed44b3b1d5d676aef3ee6e(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_f9628f91c9404f17afec47a7b2ea7ec3: function AS_Button_f9628f91c9404f17afec47a7b2ea7ec3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_fab486ab37984d0fb268d01b8596c8a1: function AS_Image_fab486ab37984d0fb268d01b8596c8a1(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});