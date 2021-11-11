define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f5f5bfac92f94ab19ea4920c55409a8e: function AS_Form_f5f5bfac92f94ab19ea4920c55409a8e(eventobject) {
        var self = this;
        kony.print("Back Navigation Disabled");
    },
    AS_Image_h6b8c2c73f4d4d1490f518bb2e399f3c: function AS_Image_h6b8c2c73f4d4d1490f518bb2e399f3c(eventobject, x, y) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});