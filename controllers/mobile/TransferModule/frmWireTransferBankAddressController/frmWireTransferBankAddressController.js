define({
  timerCounter: 0,
  init : function(){
  },
  preShow: function () {
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
  },
});