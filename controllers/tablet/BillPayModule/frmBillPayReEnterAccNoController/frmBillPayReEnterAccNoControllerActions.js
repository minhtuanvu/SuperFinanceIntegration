define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    AS_BarButtonItem_a3935a4188e044688f68e1acce581163: function AS_BarButtonItem_a3935a4188e044688f68e1acce581163(eventobject) {
        var self = this;
        this.handleCancelAction();
    },
    AS_BarButtonItem_d821ea57541943ec9e52a7399b3f1e7e: function AS_BarButtonItem_d821ea57541943ec9e52a7399b3f1e7e(eventobject) {
        var self = this;
        this.backNavigation();
    },
    /** onClick defined for btnOne **/
    AS_Button_a35bbde41bcf400ca9a1ab7ec2c19b4f: function AS_Button_a35bbde41bcf400ca9a1ab7ec2c19b4f(eventobject) {
        var self = this;
        this.setKeypadChar('1');
    },
    /** onClick defined for btnEight **/
    AS_Button_aab4c1f60cdf4ad39a6df32d079d21a3: function AS_Button_aab4c1f60cdf4ad39a6df32d079d21a3(eventobject) {
        var self = this;
        this.setKeypadChar('8');
    },
    /** onClick defined for btnNine **/
    AS_Button_b7c5cd05168c463c8ef521244df5b8b9: function AS_Button_b7c5cd05168c463c8ef521244df5b8b9(eventobject) {
        var self = this;
        this.setKeypadChar('9');
    },
    /** onClick defined for btnTwo **/
    AS_Button_c0b78efd5df04222af645f9d5733d093: function AS_Button_c0b78efd5df04222af645f9d5733d093(eventobject) {
        var self = this;
        this.setKeypadChar('2');
    },
    /** onClick defined for btnSeven **/
    AS_Button_da840edb5ca8476898cac7ed8649f305: function AS_Button_da840edb5ca8476898cac7ed8649f305(eventobject) {
        var self = this;
        this.setKeypadChar('7');
    },
    /** onClick defined for btnSix **/
    AS_Button_dae9c8dcd19d46d5aad644b68888bfc4: function AS_Button_dae9c8dcd19d46d5aad644b68888bfc4(eventobject) {
        var self = this;
        this.setKeypadChar('6');
    },
    /** onClick defined for btnZero **/
    AS_Button_df91ae59c6644f3db4fdda62a1648478: function AS_Button_df91ae59c6644f3db4fdda62a1648478(eventobject) {
        var self = this;
        this.setKeypadChar('0');
    },
    /** onClick defined for btnThree **/
    AS_Button_f000bb283d6946da9632e7d4b0764b1f: function AS_Button_f000bb283d6946da9632e7d4b0764b1f(eventobject) {
        var self = this;
        this.setKeypadChar('3');
    },
    /** onClick defined for btnFour **/
    AS_Button_g3e787e3d3c44cb9a1edc19da0d78944: function AS_Button_g3e787e3d3c44cb9a1edc19da0d78944(eventobject) {
        var self = this;
        this.setKeypadChar('4');
    },
    /** onClick defined for btnFive **/
    AS_Button_jf340ea470f9490ab8a95123c887c255: function AS_Button_jf340ea470f9490ab8a95123c887c255(eventobject) {
        var self = this;
        this.setKeypadChar('5');
    },
    /** preShow defined for frmBillPayReEnterAccNo **/
    AS_Form_bc35bc651763402e98b52afdab5de6e9: function AS_Form_bc35bc651763402e98b52afdab5de6e9(eventobject) {
        var self = this;
        return self.frmPreshow.call(this);
    },
    /** init defined for frmBillPayReEnterAccNo **/
    AS_Form_dcf338544a054af78994e71db5354124: function AS_Form_dcf338544a054af78994e71db5354124(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_c71b05c16bbf42278176b0138d6322c8: function AS_Image_c71b05c16bbf42278176b0138d6322c8(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});