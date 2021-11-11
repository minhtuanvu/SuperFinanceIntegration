define("com/kmb/common/customFooter/usercustomFooterController", function() {
    return {};
});
define("com/kmb/common/customFooter/customFooterControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/customFooter/customFooterController", ["com/kmb/common/customFooter/usercustomFooterController", "com/kmb/common/customFooter/customFooterControllerActions"], function() {
    var controller = require("com/kmb/common/customFooter/usercustomFooterController");
    var actions = require("com/kmb/common/customFooter/customFooterControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
