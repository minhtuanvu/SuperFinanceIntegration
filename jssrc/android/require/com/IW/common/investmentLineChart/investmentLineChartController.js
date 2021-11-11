define("com/IW/common/investmentLineChart/userinvestmentLineChartController", function() {
    return {};
});
define("com/IW/common/investmentLineChart/investmentLineChartControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/IW/common/investmentLineChart/investmentLineChartController", ["com/IW/common/investmentLineChart/userinvestmentLineChartController", "com/IW/common/investmentLineChart/investmentLineChartControllerActions"], function() {
    var controller = require("com/IW/common/investmentLineChart/userinvestmentLineChartController");
    var actions = require("com/IW/common/investmentLineChart/investmentLineChartControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
