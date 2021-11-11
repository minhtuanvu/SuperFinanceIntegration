define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_b4b0659508b24032bdccf88c5571c30f: function AS_Button_b4b0659508b24032bdccf88c5571c30f(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_i653aff0d5f8460080d4585108a8d90d: function AS_Button_i653aff0d5f8460080d4585108a8d90d(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_jcb642958d6f4b679f9eade9225635e6: function AS_Button_jcb642958d6f4b679f9eade9225635e6(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_e4590cce3e06434c86a15b6c8ba05245: function AS_Form_e4590cce3e06434c86a15b6c8ba05245(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_had4ced8f70b425b99461c2032f57297: function AS_Form_had4ced8f70b425b99461c2032f57297(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_c2fb0c70283a4582aa41c9d252eb16e3: function AS_BarButtonItem_c2fb0c70283a4582aa41c9d252eb16e3(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    },
    AS_Button_d2b25f24b00c4638abf3ff8c8a9d3c74: function AS_Button_d2b25f24b00c4638abf3ff8c8a9d3c74(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_a1dd0c487c2d4b7ba8b798ccd9f9be10: function AS_Button_a1dd0c487c2d4b7ba8b798ccd9f9be10(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_c823b201d4034d8fb7750b4ce10eeed2: function AS_Button_c823b201d4034d8fb7750b4ce10eeed2(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_f2878214f4e946f69bb601593e7dc626: function AS_Button_f2878214f4e946f69bb601593e7dc626(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_gc3956d9408d428ab74508df6947dd0f: function AS_Button_gc3956d9408d428ab74508df6947dd0f(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_j727dd9683c6484cabd82b1483aa1ca6: function AS_Button_j727dd9683c6484cabd82b1483aa1ca6(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_b4960b82c6d74fccba37dc2fb1a9d078: function AS_Button_b4960b82c6d74fccba37dc2fb1a9d078(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_ha6bc906d9d34e19a2901c895d0b043e: function AS_Button_ha6bc906d9d34e19a2901c895d0b043e(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_d1ef226536ed4964af81c2606a672e84: function AS_Button_d1ef226536ed4964af81c2606a672e84(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_a7dea4613d1b42598a3e4005dce49c94: function AS_Button_a7dea4613d1b42598a3e4005dce49c94(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_e5f8824cb8e143e799651ab2cbbe5969: function AS_Image_e5f8824cb8e143e799651ab2cbbe5969(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});