define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ffa423223b114e2ba34ae61599799a7b: function AS_Form_ffa423223b114e2ba34ae61599799a7b(eventobject) {
        var self = this;
        kony.print("Back Navigation Disabled");
    },
    AS_Image_d88aff863d2843e1afeef01c13d0ee41: function AS_Image_d88aff863d2843e1afeef01c13d0ee41(eventobject, x, y) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});