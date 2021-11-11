define("userflxHeaderAccountController", {
    //Type your controller code here 
    onViewCreated: function() {
        try {
            this.view.flxImage.onClick = this.rowOnClick;
            //this.view.flxTransactionsHeader.onClick = this.rowOnClick;
        } catch (exc) {
            kony.print("Exception in onViewCreated!!!" + exc);
        }
    },
    rowOnClick: function(eventobject, context) {
        try {
            kony.print("Entered rowonClick");
            var secIndex = context["sectionIndex"];
            var rowIndex = context["rowIndex"];
            var controller = _kony.mvc.GetController("BillPay", true);
            controller.rowExpandCollapse({
                section: secIndex,
                row: rowIndex
            });
        } catch (exc) {
            //alert(JSON.stringify(exc));
            console.error(exc);
            kony.print("exception in rowonClick!!!" + exc);
        }
    },
});
define("flxHeaderAccountControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxHeaderAccountController", ["userflxHeaderAccountController", "flxHeaderAccountControllerActions"], function() {
    var controller = require("userflxHeaderAccountController");
    var controllerActions = ["flxHeaderAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
