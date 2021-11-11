define("com/banking/loginMethod/userloginMethodController", function() {
    return {};
});
define("com/banking/loginMethod/loginMethodControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/banking/loginMethod/loginMethodController", ["com/banking/loginMethod/userloginMethodController", "com/banking/loginMethod/loginMethodControllerActions"], function() {
    var controller = require("com/banking/loginMethod/userloginMethodController");
    var actions = require("com/banking/loginMethod/loginMethodControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
