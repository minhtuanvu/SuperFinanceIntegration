define("com/SuperFinance/HeaderSF/userHeaderSFController", function() {
    return {};
});
define("com/SuperFinance/HeaderSF/HeaderSFControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/SuperFinance/HeaderSF/HeaderSFController", ["com/SuperFinance/HeaderSF/userHeaderSFController", "com/SuperFinance/HeaderSF/HeaderSFControllerActions"], function() {
    var controller = require("com/SuperFinance/HeaderSF/userHeaderSFController");
    var actions = require("com/SuperFinance/HeaderSF/HeaderSFControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
