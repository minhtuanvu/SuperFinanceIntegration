define("com/kmb/common/customGroupDone/usercustomGroupDoneController", function() {
    return {};
});
define("com/kmb/common/customGroupDone/customGroupDoneControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/customGroupDone/customGroupDoneController", ["com/kmb/common/customGroupDone/usercustomGroupDoneController", "com/kmb/common/customGroupDone/customGroupDoneControllerActions"], function() {
    var controller = require("com/kmb/common/customGroupDone/usercustomGroupDoneController");
    var actions = require("com/kmb/common/customGroupDone/customGroupDoneControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
