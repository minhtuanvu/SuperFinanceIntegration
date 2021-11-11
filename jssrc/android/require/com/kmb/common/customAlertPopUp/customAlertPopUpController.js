define("com/kmb/common/customAlertPopUp/usercustomAlertPopUpController", function() {
    return {};
});
define("com/kmb/common/customAlertPopUp/customAlertPopUpControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/customAlertPopUp/customAlertPopUpController", ["com/kmb/common/customAlertPopUp/usercustomAlertPopUpController", "com/kmb/common/customAlertPopUp/customAlertPopUpControllerActions"], function() {
    var controller = require("com/kmb/common/customAlertPopUp/usercustomAlertPopUpController");
    var actions = require("com/kmb/common/customAlertPopUp/customAlertPopUpControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
