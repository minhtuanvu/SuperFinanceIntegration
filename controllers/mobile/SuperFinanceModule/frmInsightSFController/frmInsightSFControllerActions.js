define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g12f2cfad41b4d0092ec21424af5d448: function AS_Form_g12f2cfad41b4d0092ec21424af5d448(eventobject) {
        var self = this;
        this.postShowInsights();
    },
    AS_Form_i9d0cda81b5b4089a96477bfdbd57d5b: function AS_Form_i9d0cda81b5b4089a96477bfdbd57d5b(eventobject) {
        var self = this;
        this.preshowInsights();
    },
    AS_Segment_eeebadb80cb94f1da946cbaab383ba45: function AS_Segment_eeebadb80cb94f1da946cbaab383ba45(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.segValuesFunction.call(this, rowNumber);
    }
});