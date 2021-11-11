define("CampaignManagement/userfrmHELOCController", {
    openURL: function() {
        //Accessing an external web page : http://www.google.com
        kony.application.openURL("https://www.ikea.com/gb/en/rooms/living-room/living-room-design-ideas-pubf3189a1f");
    },
    onClickOfBack: function() {
        var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        campMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
    }
});
define("CampaignManagement/frmHELOCControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_cedb852dbd29422a9d30175122cabedb: function AS_FlexContainer_cedb852dbd29422a9d30175122cabedb(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    AS_Label_e5011a180a314d4eb42b3af0f6fef870: function AS_Label_e5011a180a314d4eb42b3af0f6fef870(eventobject, x, y) {
        var self = this;
        return self.openURL.call(this);
    }
});
define("CampaignManagement/frmHELOCController", ["CampaignManagement/userfrmHELOCController", "CampaignManagement/frmHELOCControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmHELOCController");
    var controllerActions = ["CampaignManagement/frmHELOCControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
