define("com/banking/approvalsAndRequests/filter/userfilterController", function() {
    return {};
});
define("com/banking/approvalsAndRequests/filter/filterControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/banking/approvalsAndRequests/filter/filterController", ["com/banking/approvalsAndRequests/filter/userfilterController", "com/banking/approvalsAndRequests/filter/filterControllerActions"], function() {
    var controller = require("com/banking/approvalsAndRequests/filter/userfilterController");
    var actions = require("com/banking/approvalsAndRequests/filter/filterControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
