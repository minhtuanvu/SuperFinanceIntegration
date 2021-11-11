define("com/kmb/common/customPopup/usercustomPopupController", function() {
    return {};
});
define("com/kmb/common/customPopup/customPopupControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/customPopup/customPopupController", ["com/kmb/common/customPopup/usercustomPopupController", "com/kmb/common/customPopup/customPopupControllerActions"], function() {
    var controller = require("com/kmb/common/customPopup/usercustomPopupController");
    var actions = require("com/kmb/common/customPopup/customPopupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
