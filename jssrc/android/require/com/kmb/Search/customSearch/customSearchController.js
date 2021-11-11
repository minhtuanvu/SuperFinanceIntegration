define("com/kmb/Search/customSearch/usercustomSearchController", function() {
    return {};
});
define("com/kmb/Search/customSearch/customSearchControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/Search/customSearch/customSearchController", ["com/kmb/Search/customSearch/usercustomSearchController", "com/kmb/Search/customSearch/customSearchControllerActions"], function() {
    var controller = require("com/kmb/Search/customSearch/usercustomSearchController");
    var actions = require("com/kmb/Search/customSearch/customSearchControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
