define("com/kmb/comman/customCardHeader/usercustomCardHeaderController", function() {
    return {};
});
define("com/kmb/comman/customCardHeader/customCardHeaderControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/comman/customCardHeader/customCardHeaderController", ["com/kmb/comman/customCardHeader/usercustomCardHeaderController", "com/kmb/comman/customCardHeader/customCardHeaderControllerActions"], function() {
    var controller = require("com/kmb/comman/customCardHeader/usercustomCardHeaderController");
    var actions = require("com/kmb/comman/customCardHeader/customCardHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
