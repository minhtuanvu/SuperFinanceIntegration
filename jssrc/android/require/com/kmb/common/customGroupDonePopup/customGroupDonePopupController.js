define("com/kmb/common/customGroupDonePopup/usercustomGroupDonePopupController", function() {
    return {};
});
define("com/kmb/common/customGroupDonePopup/customGroupDonePopupControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/customGroupDonePopup/customGroupDonePopupController", ["com/kmb/common/customGroupDonePopup/usercustomGroupDonePopupController", "com/kmb/common/customGroupDonePopup/customGroupDonePopupControllerActions"], function() {
    var controller = require("com/kmb/common/customGroupDonePopup/usercustomGroupDonePopupController");
    var actions = require("com/kmb/common/customGroupDonePopup/customGroupDonePopupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
