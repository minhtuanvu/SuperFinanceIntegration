define("com/SuperFinance/LifestyleGoalBudget/userLifestyleGoalBudgetController", function() {
    return {};
});
define("com/SuperFinance/LifestyleGoalBudget/LifestyleGoalBudgetControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/SuperFinance/LifestyleGoalBudget/LifestyleGoalBudgetController", ["com/SuperFinance/LifestyleGoalBudget/userLifestyleGoalBudgetController", "com/SuperFinance/LifestyleGoalBudget/LifestyleGoalBudgetControllerActions"], function() {
    var controller = require("com/SuperFinance/LifestyleGoalBudget/userLifestyleGoalBudgetController");
    var actions = require("com/SuperFinance/LifestyleGoalBudget/LifestyleGoalBudgetControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
