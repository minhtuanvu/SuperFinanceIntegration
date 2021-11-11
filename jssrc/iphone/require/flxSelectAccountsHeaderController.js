define("userflxSelectAccountsHeaderController", {
    //Type your controller code here 
    onSectionClick: function(context) {
        //var sectionIndex = context.sectionIndex;
        this.executeOnParent("sectionClicked", context);
    }
});
define("flxSelectAccountsHeaderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_c29d2f4ecc0246648f1cdd979b529d10: function AS_FlexContainer_c29d2f4ecc0246648f1cdd979b529d10(eventobject, context) {
        var self = this;
        return self.onSectionClick.call(this, context);
    }
});
define("flxSelectAccountsHeaderController", ["userflxSelectAccountsHeaderController", "flxSelectAccountsHeaderControllerActions"], function() {
    var controller = require("userflxSelectAccountsHeaderController");
    var controllerActions = ["flxSelectAccountsHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
