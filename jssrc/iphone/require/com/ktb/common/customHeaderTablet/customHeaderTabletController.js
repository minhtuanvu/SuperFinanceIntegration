define("com/ktb/common/customHeaderTablet/usercustomHeaderTabletController", function() {
    return {};
});
define("com/ktb/common/customHeaderTablet/customHeaderTabletControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/ktb/common/customHeaderTablet/customHeaderTabletController", ["com/ktb/common/customHeaderTablet/usercustomHeaderTabletController", "com/ktb/common/customHeaderTablet/customHeaderTabletControllerActions"], function() {
    var controller = require("com/ktb/common/customHeaderTablet/usercustomHeaderTabletController");
    var actions = require("com/ktb/common/customHeaderTablet/customHeaderTabletControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
