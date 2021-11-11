define("com/temenos/infinity/segmentHistoryDetails/usersegmentHistoryDetailsController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        setDataToSegment: function(segmentData, widgetMappingDetails) {
            this.view.segList.widgetDataMap = widgetMappingDetails;
            this.view.segList.setData(segmentData);
            //this.view.segList
        }
    };
});
define("com/temenos/infinity/segmentHistoryDetails/segmentHistoryDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/temenos/infinity/segmentHistoryDetails/segmentHistoryDetailsController", ["com/temenos/infinity/segmentHistoryDetails/usersegmentHistoryDetailsController", "com/temenos/infinity/segmentHistoryDetails/segmentHistoryDetailsControllerActions"], function() {
    var controller = require("com/temenos/infinity/segmentHistoryDetails/usersegmentHistoryDetailsController");
    var actions = require("com/temenos/infinity/segmentHistoryDetails/segmentHistoryDetailsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "data", function(val) {
            this.view.segHistory.data = val;
        });
        defineGetter(this, "data", function() {
            return this.view.segHistory.data;
        });
        defineSetter(this, "widgetDataMap", function(val) {
            this.view.segHistory.widgetDataMap = val;
        });
        defineGetter(this, "widgetDataMap", function() {
            return this.view.segHistory.widgetDataMap;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.setData = function() {
        var wModel = this.view.segHistory;
        return wModel.setData.apply(wModel, arguments);
    };
    controller.removeAll = function() {
        var wModel = this.view.segHistory;
        return wModel.removeAll.apply(wModel, arguments);
    };
    controller.AS_onRowClick_a24fd33df2fb4f31ad11b35df3ea7809 = function() {
        if (this.onRowClick) {
            this.onRowClick.apply(this, arguments);
        }
    }
    return controller;
});
