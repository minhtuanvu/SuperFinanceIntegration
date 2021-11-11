define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
       setDataToSegment: function(segmentData, widgetMappingDetails) {
         this.view.segList.widgetDataMap = widgetMappingDetails;
         this.view.segList.setData(segmentData);
        //this.view.segList
    }
	};
});