define("com/SuperFinance/cardsSF/usercardsSFController", function() {
    return {};
});
define("com/SuperFinance/cardsSF/cardsSFControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/SuperFinance/cardsSF/cardsSFController", ["com/SuperFinance/cardsSF/usercardsSFController", "com/SuperFinance/cardsSF/cardsSFControllerActions"], function() {
    var controller = require("com/SuperFinance/cardsSF/usercardsSFController");
    var actions = require("com/SuperFinance/cardsSF/cardsSFControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
