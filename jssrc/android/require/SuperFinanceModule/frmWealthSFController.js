define("SuperFinanceModule/userfrmWealthSFController", {
    //Type your controller code here 
    preshowWealth: function() {
        this.view.HeaderSF.lblLifestyleSF.skin = "sknLblNormalHeaderSF";
        this.view.HeaderSF.lblWorkSF.skin = "sknLblNormalHeaderSF";
        this.view.HeaderSF.lblWealthSF.skin = "sknLblLifestyleHeaderSF";
    },
    navigateToWork: function() {
        var nWo = new kony.mvc.Navigation("SuperFinanceModule/frmWorkSF");
        nWo.navigate();
    }
});
define("SuperFinanceModule/frmWealthSFControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b93df700081f4aa386a53aa3a3c3fb39: function AS_FlexContainer_b93df700081f4aa386a53aa3a3c3fb39(eventobject) {
        var self = this;
        this.navigateToWork();
    },
    AS_FlexContainer_e83ff47ea8fd409b9c2c12ed82d3c2f6: function AS_FlexContainer_e83ff47ea8fd409b9c2c12ed82d3c2f6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("SuperFinanceModule/frmInsightSF");
        ntf.navigate();
    },
    AS_Form_f64f06736116470591720ac903be5bf5: function AS_Form_f64f06736116470591720ac903be5bf5(eventobject) {
        var self = this;
        this.preshowWealth();
    }
});
define("SuperFinanceModule/frmWealthSFController", ["SuperFinanceModule/userfrmWealthSFController", "SuperFinanceModule/frmWealthSFControllerActions"], function() {
    var controller = require("SuperFinanceModule/userfrmWealthSFController");
    var controllerActions = ["SuperFinanceModule/frmWealthSFControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
