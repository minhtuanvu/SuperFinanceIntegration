define("com/kmb/common/noAccounts/usernoAccountsController", function() {
    return {};
});
define("com/kmb/common/noAccounts/noAccountsControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/noAccounts/noAccountsController", ["com/kmb/common/noAccounts/usernoAccountsController", "com/kmb/common/noAccounts/noAccountsControllerActions"], function() {
    var controller = require("com/kmb/common/noAccounts/usernoAccountsController");
    var actions = require("com/kmb/common/noAccounts/noAccountsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
