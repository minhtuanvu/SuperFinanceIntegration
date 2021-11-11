define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_jb37f4617984420984dee552f7db3a63: function AS_FlexContainer_jb37f4617984420984dee552f7db3a63(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_FlexContainer_ca4974ef932b4aaaac42e6e5f41236e4: function AS_FlexContainer_ca4974ef932b4aaaac42e6e5f41236e4(eventobject) {
        var self = this;
        this.view.flxFiltersList.setVisibility(false);
    },
    AS_TextField_fb837041634445eeb9f5eb83a38b01b5: function AS_TextField_fb837041634445eeb9f5eb83a38b01b5(eventobject, changedtext) {
        var self = this;
        this.searchTextChange();
    },
    AS_TextField_c29876b94f274b029b09f487374bc2fc: function AS_TextField_c29876b94f274b029b09f487374bc2fc(eventobject, changedtext) {
        var self = this;
        this.enableSearchClearOnChange();
    }
});