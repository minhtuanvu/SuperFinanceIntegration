define("com/superFinanceRB/StepsApproach/userStepsApproachController", function() {
    return {};
});
define("com/superFinanceRB/StepsApproach/StepsApproachControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/superFinanceRB/StepsApproach/StepsApproachController", ["com/superFinanceRB/StepsApproach/userStepsApproachController", "com/superFinanceRB/StepsApproach/StepsApproachControllerActions"], function() {
    var controller = require("com/superFinanceRB/StepsApproach/userStepsApproachController");
    var actions = require("com/superFinanceRB/StepsApproach/StepsApproachControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
