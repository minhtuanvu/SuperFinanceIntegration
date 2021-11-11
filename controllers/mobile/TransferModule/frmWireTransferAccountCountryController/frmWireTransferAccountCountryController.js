define({
  	segmentData:null,
    init:function(){
    },
  	preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
          this.view.flxMainContainer.top = "0dp";
        }
    },
});