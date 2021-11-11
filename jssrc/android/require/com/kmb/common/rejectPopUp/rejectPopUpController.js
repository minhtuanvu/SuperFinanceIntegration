define("com/kmb/common/rejectPopUp/userrejectPopUpController", function() {
    return {};
});
define("com/kmb/common/rejectPopUp/rejectPopUpControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/rejectPopUp/rejectPopUpController", ["com/kmb/common/rejectPopUp/userrejectPopUpController", "com/kmb/common/rejectPopUp/rejectPopUpControllerActions"], function() {
    var controller = require("com/kmb/common/rejectPopUp/userrejectPopUpController");
    var actions = require("com/kmb/common/rejectPopUp/rejectPopUpControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
