define("userflxCardsController", {
    //Type your controller code here
});
define("flxCardsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxCheckbox **/
    AS_FlexContainer_i504b33372074922adeddfc7b77e7ddc: function AS_FlexContainer_i504b33372074922adeddfc7b77e7ddc(eventobject, context) {
        var self = this;
    }
});
define("flxCardsController", ["userflxCardsController", "flxCardsControllerActions"], function() {
    var controller = require("userflxCardsController");
    var controllerActions = ["flxCardsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
