define("com/temenos/infinity/segmentDetails/usersegmentDetailsController", function() {
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
define("com/temenos/infinity/segmentDetails/segmentDetailsControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/temenos/infinity/segmentDetails/segmentDetailsController", ["com/temenos/infinity/segmentDetails/usersegmentDetailsController", "com/temenos/infinity/segmentDetails/segmentDetailsControllerActions"], function() {
    var controller = require("com/temenos/infinity/segmentDetails/usersegmentDetailsController");
    var actions = require("com/temenos/infinity/segmentDetails/segmentDetailsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "data", function(val) {
            this.view.segList.data = val;
        });
        defineGetter(this, "data", function() {
            return this.view.segList.data;
        });
        defineSetter(this, "widgetDataMap", function(val) {
            this.view.segList.widgetDataMap = val;
        });
        defineGetter(this, "widgetDataMap", function() {
            return this.view.segList.widgetDataMap;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.setData = function() {
        var wModel = this.view.segList;
        return wModel.setData.apply(wModel, arguments);
    };
    controller.removeAll = function() {
        var wModel = this.view.segList;
        return wModel.removeAll.apply(wModel, arguments);
    };
    controller.AS_onRowClick_h137710a4b0e4cdf9f94936ab645ce5a = function() {
        if (this.onRowClick) {
            this.onRowClick.apply(this, arguments);
        }
    }
    return controller;
});
