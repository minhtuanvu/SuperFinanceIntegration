define("com/superFinanceRB/StepsLeftSide/userStepsLeftSideController", function() {
    return {};
});
define("com/superFinanceRB/StepsLeftSide/StepsLeftSideControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/superFinanceRB/StepsLeftSide/StepsLeftSideController", ["com/superFinanceRB/StepsLeftSide/userStepsLeftSideController", "com/superFinanceRB/StepsLeftSide/StepsLeftSideControllerActions"], function() {
    var controller = require("com/superFinanceRB/StepsLeftSide/userStepsLeftSideController");
    var actions = require("com/superFinanceRB/StepsLeftSide/StepsLeftSideControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
