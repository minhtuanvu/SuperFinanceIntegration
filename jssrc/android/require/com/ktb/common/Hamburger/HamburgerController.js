define("com/ktb/common/Hamburger/userHamburgerController", function() {
    return {};
});
define("com/ktb/common/Hamburger/HamburgerControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/ktb/common/Hamburger/HamburgerController", ["com/ktb/common/Hamburger/userHamburgerController", "com/ktb/common/Hamburger/HamburgerControllerActions"], function() {
    var controller = require("com/ktb/common/Hamburger/userHamburgerController");
    var actions = require("com/ktb/common/Hamburger/HamburgerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
