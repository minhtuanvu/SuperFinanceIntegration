define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_bca535d933294115b6f52552a731b32a: function AS_Button_bca535d933294115b6f52552a731b32a(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000: function AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_b3ab9b1bc8df4031a151bade60516958: function AS_Form_b3ab9b1bc8df4031a151bade60516958(eventobject) {
        var self = this;
        return self.phoneNumberPreShow.call(this);
    },
    AS_BarButtonItem_e9b5d28a7f0c45fb9cf0e35d0825e212: function AS_BarButtonItem_e9b5d28a7f0c45fb9cf0e35d0825e212(eventobject) {
        var self = this;
        return self.onBack.call(this);
    },
    AS_BarButtonItem_b2f9f9a5d0b54919a080e3d39f382ec8: function AS_BarButtonItem_b2f9f9a5d0b54919a080e3d39f382ec8(eventobject) {
        var self = this;
        return self.onCancel.call(this);
    },
    AS_Button_b3e6f07f5fd94af9936d40a4296b3d84: function AS_Button_b3e6f07f5fd94af9936d40a4296b3d84(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_bb13965d1d34471f81d20222eec21a42: function AS_Button_bb13965d1d34471f81d20222eec21a42(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_dd060757283f46f286a7e3cbf0809323: function AS_Button_dd060757283f46f286a7e3cbf0809323(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_h764c0886ec04401893d7e1513782888: function AS_Button_h764c0886ec04401893d7e1513782888(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_da85512aae1946ab9688fa755a1a2eac: function AS_Button_da85512aae1946ab9688fa755a1a2eac(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e88a653f77bc477da4b10a6d9112a219: function AS_Button_e88a653f77bc477da4b10a6d9112a219(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_db2cfa52c55b4832adb14ca9970210d3: function AS_Button_db2cfa52c55b4832adb14ca9970210d3(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_f8dd5f33727d433eac544aaf34c67921: function AS_Button_f8dd5f33727d433eac544aaf34c67921(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_bd4616ab9c574cafb4880155a497c120: function AS_Button_bd4616ab9c574cafb4880155a497c120(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_i9f4738f679e46ada9a41a0d560981f8: function AS_Button_i9f4738f679e46ada9a41a0d560981f8(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_ab0be93e0f864bd6a58d9525f5194cec: function AS_Image_ab0be93e0f864bd6a58d9525f5194cec(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});