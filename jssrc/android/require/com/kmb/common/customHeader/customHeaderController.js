define("com/kmb/common/customHeader/usercustomHeaderController", function() {
    return {};
});
define("com/kmb/common/customHeader/customHeaderControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/customHeader/customHeaderController", ["com/kmb/common/customHeader/usercustomHeaderController", "com/kmb/common/customHeader/customHeaderControllerActions"], function() {
    var controller = require("com/kmb/common/customHeader/usercustomHeaderController");
    var actions = require("com/kmb/common/customHeader/customHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
