define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    AS_BarButtonItem_e212ce501f174125960d636ff8b85869: function AS_BarButtonItem_e212ce501f174125960d636ff8b85869(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    /** onClick defined for btnOne **/
    AS_Button_a21232b9d6024598a91a7be920055e8e: function AS_Button_a21232b9d6024598a91a7be920055e8e(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnNine **/
    AS_Button_a6253932657b402e966e90bbf82f9666: function AS_Button_a6253932657b402e966e90bbf82f9666(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnEight **/
    AS_Button_a63104cfe4be45d8a5d261d03cf6377b: function AS_Button_a63104cfe4be45d8a5d261d03cf6377b(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnFive **/
    AS_Button_bf46267f54424a6a835742439798cc40: function AS_Button_bf46267f54424a6a835742439798cc40(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for btnTwo **/
    AS_Button_cb181feb9a184fcab270877ee73ac885: function AS_Button_cb181feb9a184fcab270877ee73ac885(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnZero **/
    AS_Button_cdc1242c47944611b6687de549571abf: function AS_Button_cdc1242c47944611b6687de549571abf(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onClick defined for btnFour **/
    AS_Button_d10ae701b49642899e9ff37af9ff3ba3: function AS_Button_d10ae701b49642899e9ff37af9ff3ba3(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnSix **/
    AS_Button_f26be1ef1744432a91b8d6f27a37240e: function AS_Button_f26be1ef1744432a91b8d6f27a37240e(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnThree **/
    AS_Button_f94b6656acd245ebbe463fccb8a7ddee: function AS_Button_f94b6656acd245ebbe463fccb8a7ddee(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnSeven **/
    AS_Button_i5656dd6c11b4ccba290208fb4a36784: function AS_Button_i5656dd6c11b4ccba290208fb4a36784(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** preShow defined for frmPreferencesDeviceRegSecCode **/
    AS_Form_d67adb51e5bf4e8a89f951c409637648: function AS_Form_d67adb51e5bf4e8a89f951c409637648(eventobject) {
        var self = this;
        this.preShow();
    },
    /** init defined for frmPreferencesDeviceRegSecCode **/
    AS_Form_g9d238599f814236bada8dcf9bbe1c1c: function AS_Form_g9d238599f814236bada8dcf9bbe1c1c(eventobject) {
        var self = this;
        this.init();
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_d90c34f774c6421b855b71ca3193f374: function AS_Image_d90c34f774c6421b855b71ca3193f374(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});