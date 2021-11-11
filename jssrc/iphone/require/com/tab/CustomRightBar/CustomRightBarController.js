define("com/tab/CustomRightBar/userCustomRightBarController", function() {
    return {};
});
define("com/tab/CustomRightBar/CustomRightBarControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/tab/CustomRightBar/CustomRightBarController", ["com/tab/CustomRightBar/userCustomRightBarController", "com/tab/CustomRightBar/CustomRightBarControllerActions"], function() {
    var controller = require("com/tab/CustomRightBar/userCustomRightBarController");
    var actions = require("com/tab/CustomRightBar/CustomRightBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
