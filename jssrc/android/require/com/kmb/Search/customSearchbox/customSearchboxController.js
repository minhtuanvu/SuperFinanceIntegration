define("com/kmb/Search/customSearchbox/usercustomSearchboxController", function() {
    return {};
});
define("com/kmb/Search/customSearchbox/customSearchboxControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/Search/customSearchbox/customSearchboxController", ["com/kmb/Search/customSearchbox/usercustomSearchboxController", "com/kmb/Search/customSearchbox/customSearchboxControllerActions"], function() {
    var controller = require("com/kmb/Search/customSearchbox/usercustomSearchboxController");
    var actions = require("com/kmb/Search/customSearchbox/customSearchboxControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
