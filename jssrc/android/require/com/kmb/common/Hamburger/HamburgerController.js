define("com/kmb/common/Hamburger/userHamburgerController", function() {
    return {};
});
define("com/kmb/common/Hamburger/HamburgerControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/Hamburger/HamburgerController", ["com/kmb/common/Hamburger/userHamburgerController", "com/kmb/common/Hamburger/HamburgerControllerActions"], function() {
    var controller = require("com/kmb/common/Hamburger/userHamburgerController");
    var actions = require("com/kmb/common/Hamburger/HamburgerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
