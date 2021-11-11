define({
  timerCounter: 0,
  init : function(){
  },
  preShow: function () {
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeaderPersonalInfo.isVisible = true;
    }
    else{
      this.view.flxHeaderPersonalInfo.isVisible = false;
    }
  },
});