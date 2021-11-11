define("com/kmb/common/editCustomView/usereditCustomViewController", function() {
    return {};
});
define("com/kmb/common/editCustomView/editCustomViewControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/editCustomView/editCustomViewController", ["com/kmb/common/editCustomView/usereditCustomViewController", "com/kmb/common/editCustomView/editCustomViewControllerActions"], function() {
    var controller = require("com/kmb/common/editCustomView/usereditCustomViewController");
    var actions = require("com/kmb/common/editCustomView/editCustomViewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
