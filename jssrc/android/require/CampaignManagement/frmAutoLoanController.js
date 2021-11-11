define("CampaignManagement/userfrmAutoLoanController", {
    openURL: function() {
        //Accessing an external web page : http://www.google.com
        kony.application.openURL("https://www.autoscout24.com/lst/mercedes-benz?sort=price&desc=0&offer=N&ustate=N%2CU&priceto=20000&atype=C&ac=0");
    },
    onClickOfBack: function() {
        var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        campMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
    }
});
define("CampaignManagement/frmAutoLoanControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_eea7a9111d8b455e87703de98f53fd90: function AS_FlexContainer_eea7a9111d8b455e87703de98f53fd90(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    AS_Label_b8ab3178a98743cf9dbad17155020dd1: function AS_Label_b8ab3178a98743cf9dbad17155020dd1(eventobject, x, y) {
        var self = this;
        return self.openURL.call(this);
    }
});
define("CampaignManagement/frmAutoLoanController", ["CampaignManagement/userfrmAutoLoanController", "CampaignManagement/frmAutoLoanControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmAutoLoanController");
    var controllerActions = ["CampaignManagement/frmAutoLoanControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
