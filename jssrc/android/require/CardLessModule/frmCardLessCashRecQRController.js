define("CardLessModule/userfrmCardLessCashRecQRController", {
    frmPreShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
    },
});
define("CardLessModule/frmCardLessCashRecQRControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h4f85ce95e624693af656cd0a84481e2: function AS_Form_h4f85ce95e624693af656cd0a84481e2(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    }
});
define("CardLessModule/frmCardLessCashRecQRController", ["CardLessModule/userfrmCardLessCashRecQRController", "CardLessModule/frmCardLessCashRecQRControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessCashRecQRController");
    var controllerActions = ["CardLessModule/frmCardLessCashRecQRControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
