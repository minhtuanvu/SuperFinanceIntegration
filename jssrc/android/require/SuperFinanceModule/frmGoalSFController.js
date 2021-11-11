define("SuperFinanceModule/userfrmGoalSFController", {
    month_Names: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    //Type your controller code here 
    preshowGoal: function() {
        var nd = new Date();
        var cDate = nd.getDate();
        var cMon = this.month_Names[nd.getMonth()];
        var cYear = nd.getFullYear();
        cDate = cDate - 5;
        var cDate1 = cDate - 7;
        if (cDate < 1) {
            cMon = this.month_Names[(nd.getMonth() - 1)];
            cDate = 26;
        }
        if (cDate1 < 1) {
            cMon = this.month_Names[(nd.getMonth() - 1)];
            cDate = 24;
        }
        var tasksCompleted = [{
            "imgTickSF": "tick_fusion.png",
            "lblTaskTitleSF": "Complete Summer Project",
            "lblTaskDate": cMon + " " + cDate + ", " + cYear
        }, {
            "imgTickSF": "tick_fusion.png",
            "lblTaskTitleSF": "Complete Summer Project",
            "lblTaskDate": cMon + " " + cDate1 + ", " + cYear
        }];
        this.view.segTasksSF.setData(tasksCompleted);
        this.view.flxGoalSF1.isVisible = true;
        this.view.flxGoalSF2.isVisible = false;
        this.view.flxGoalSF3.isVisible = false;
    },
    enableGoal2: function() {
        this.view.flxGoalSF1.isVisible = false;
        this.view.flxGoalSF2.isVisible = true;
        this.view.txtBoxAmtSF.text = "";
    },
    enableGoal3: function() {
        this.view.flxGoalSF2.isVisible = false;
        this.view.flxGoalSF3.isVisible = true;
    }
});
define("SuperFinanceModule/frmGoalSFControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d67def84709c4c0c9a203568cbd5b8ae: function AS_Button_d67def84709c4c0c9a203568cbd5b8ae(eventobject) {
        var self = this;
        this.enableGoal2();
    },
    AS_Button_jb8ec25da8524fd29fe4737815ccbf4f: function AS_Button_jb8ec25da8524fd29fe4737815ccbf4f(eventobject) {
        var self = this;
        this.enableGoal3();
    },
    AS_Form_d8bad1575253417b952c3a1f1df25ce4: function AS_Form_d8bad1575253417b952c3a1f1df25ce4(eventobject) {
        var self = this;
        return self.preshowGoal.call(this);
    }
});
define("SuperFinanceModule/frmGoalSFController", ["SuperFinanceModule/userfrmGoalSFController", "SuperFinanceModule/frmGoalSFControllerActions"], function() {
    var controller = require("SuperFinanceModule/userfrmGoalSFController");
    var controllerActions = ["SuperFinanceModule/frmGoalSFControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
