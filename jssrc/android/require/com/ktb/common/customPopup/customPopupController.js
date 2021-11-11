define("com/ktb/common/customPopup/usercustomPopupController", function() {
    return {};
});
define("com/ktb/common/customPopup/customPopupControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/ktb/common/customPopup/customPopupController", ["com/ktb/common/customPopup/usercustomPopupController", "com/ktb/common/customPopup/customPopupControllerActions"], function() {
    var controller = require("com/ktb/common/customPopup/usercustomPopupController");
    var actions = require("com/ktb/common/customPopup/customPopupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
