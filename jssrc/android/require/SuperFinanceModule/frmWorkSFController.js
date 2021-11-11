define("SuperFinanceModule/userfrmWorkSFController", {
    month_Names: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    //Type your controller code here 
    preshowWork: function() {
        this.view.HeaderSF.lblWorkSF.skin = "sknLblLifestyleHeaderSF";
        this.view.HeaderSF.lblLifestyleSF.skin = "sknLblNormalHeaderSF";
        this.view.HeaderSF.lblWealthSF.skin = "sknLblNormalHeaderSF";
        this.setTransDta();
    },
    navigateToWealth: function() {
        var nWe = new kony.mvc.Navigation("SuperFinanceModule/frmWealthSF");
        nWe.navigate();
    },
    setTransDta: function() {
        var transDta = [];
        var reportDate = "";
        var d = new Date();
        var crntDate = d.getDate();
        var crntMonth = this.month_Names[(d.getMonth())];
        var crntYear = d.getFullYear();
        if (crntMonth === "Dec") {
            reportDate = crntMonth + " " + crntYear + " - " + this.month_Names[0] + " " + (d.getFullYear() + 1);
        } else {
            reportDate = crntMonth + " " + crntYear + " - " + this.month_Names[(d.getMonth() + 1)] + " " + crntYear;
        }
        this.view.lblR2SF.text = reportDate;
        this.view.lblMonNameSF.text = crntMonth + " " + crntYear;
        this.view.lblTripDateSF.text = crntMonth + " " + (d.getDate() + 2) + " " + crntYear;
        if (crntDate <= 2) {
            transDta = [{
                "imgTransSF": "vehicle_fusion.png",
                "lblTransAmtSF": "-€ 34.50",
                "lblTransDescSF": this.month_Names[d.getMonth() - 1] + " 28, " + crntYear,
                "lblTransTitleSF": "Taxi"
            }, {
                "imgTransSF": "food_work.png",
                "lblTransAmtSF": "-€ 12.00",
                "lblTransDescSF": crntMonth + " 1, " + crntYear,
                "lblTransTitleSF": "Food"
            }, {
                "imgTransSF": "internet_fusion.png",
                "lblTransAmtSF": "-€ 80.00",
                "lblTransDescSF": crntMonth + " 2, " + crntYear,
                "lblTransTitleSF": "Roaming Recharge"
            }];
        } else {
            transDta = [{
                "imgTransSF": "vehicle_fusion.png",
                "lblTransAmtSF": "-€ 34.50",
                "lblTransDescSF": crntMonth + " 2, " + crntYear,
                "lblTransTitleSF": "Taxi"
            }, {
                "imgTransSF": "food_work.png",
                "lblTransAmtSF": "-€ 12.00",
                "lblTransDescSF": crntMonth + " 4, " + crntYear,
                "lblTransTitleSF": "Food"
            }, {
                "imgTransSF": "internet_fusion.png",
                "lblTransAmtSF": "-€ 80.00",
                "lblTransDescSF": crntMonth + " 6, " + crntYear,
                "lblTransTitleSF": "Roaming Recharge"
            }];
        }
        this.view.segTransSF.setData(transDta);
    }
});
define("SuperFinanceModule/frmWorkSFControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_e4e98be0fcfa4db49dbbd4a2a0cb6988: function AS_FlexContainer_e4e98be0fcfa4db49dbbd4a2a0cb6988(eventobject) {
        var self = this;
        this.navigateToWealth();
    },
    AS_FlexContainer_e03938a6b3bf4ad1a92f06b1833ae3e0: function AS_FlexContainer_e03938a6b3bf4ad1a92f06b1833ae3e0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("SuperFinanceModule/frmInsightSF");
        ntf.navigate();
    },
    AS_Form_afde5dcd684d466883857c18de6bdfa1: function AS_Form_afde5dcd684d466883857c18de6bdfa1(eventobject) {
        var self = this;
        this.preshowWork();
    }
});
define("SuperFinanceModule/frmWorkSFController", ["SuperFinanceModule/userfrmWorkSFController", "SuperFinanceModule/frmWorkSFControllerActions"], function() {
    var controller = require("SuperFinanceModule/userfrmWorkSFController");
    var controllerActions = ["SuperFinanceModule/frmWorkSFControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
