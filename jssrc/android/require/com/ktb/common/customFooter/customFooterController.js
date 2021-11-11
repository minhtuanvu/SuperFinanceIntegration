define("com/ktb/common/customFooter/usercustomFooterController", function() {
    return {};
});
define("com/ktb/common/customFooter/customFooterControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/ktb/common/customFooter/customFooterController", ["com/ktb/common/customFooter/usercustomFooterController", "com/ktb/common/customFooter/customFooterControllerActions"], function() {
    var controller = require("com/ktb/common/customFooter/usercustomFooterController");
    var actions = require("com/ktb/common/customFooter/customFooterControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
