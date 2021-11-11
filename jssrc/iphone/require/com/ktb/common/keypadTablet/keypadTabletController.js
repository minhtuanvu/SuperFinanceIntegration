define("com/ktb/common/keypadTablet/userkeypadTabletController", function() {
    return {
        keypadChar: '',
        setChar: function(par) {
            this.keypadChar = par;
            this.view.txtKeypad.text = par;
        },
        clearChar: function() {
            this.view.txtKeypad.text = '';
            this.keypadChar = '';
        },
        callOnPreshow: function() {
            this.view.btnOne.focusSkin = this.view.btnOne.skin;
            this.view.btnTwo.focusSkin = this.view.btnTwo.skin;
            this.view.btnThree.focusSkin = this.view.btnThree.skin;
            this.view.btnFour.focusSkin = this.view.btnFour.skin;
            this.view.btnFive.focusSkin = this.view.btnFive.skin;
            this.view.btnSix.focusSkin = this.view.btnSix.skin;
            this.view.btnSeven.focusSkin = this.view.btnSeven.skin;
            this.view.btnEight.focusSkin = this.view.btnEight.skin;
            this.view.btnNine.focusSkin = this.view.btnNine.skin;
            this.view.btnZero.focusSkin = this.view.btnZero.skin;
        }
    };
});
define("com/ktb/common/keypadTablet/keypadTabletControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_g9a14789945343509c09857d0d1ff89b: function AS_FlexContainer_g9a14789945343509c09857d0d1ff89b(eventobject) {
        var self = this;
        return self.callOnPreshow.call(this);
    }
});
define("com/ktb/common/keypadTablet/keypadTabletController", ["com/ktb/common/keypadTablet/userkeypadTabletController", "com/ktb/common/keypadTablet/keypadTabletControllerActions"], function() {
    var controller = require("com/ktb/common/keypadTablet/userkeypadTabletController");
    var actions = require("com/ktb/common/keypadTablet/keypadTabletControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
