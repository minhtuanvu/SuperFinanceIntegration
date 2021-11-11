define("userflxViewAllController", {});
define("flxViewAllControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_af255dede4784bff938fc78d79b5d3db: function AS_FlexContainer_af255dede4784bff938fc78d79b5d3db(eventobject, context) {
        var self = this;
        this.onClickofViewAll(eventobject)
    }
});
define("flxViewAllController", ["userflxViewAllController", "flxViewAllControllerActions"], function() {
    var controller = require("userflxViewAllController");
    var controllerActions = ["flxViewAllControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
