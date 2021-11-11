define({ 

  openURL: function() {
	  //Accessing an external web page : http://www.google.com
	  kony.application.openURL("https://www.ikea.com/gb/en/rooms/living-room/living-room-design-ideas-pubf3189a1f");
	},
  onClickOfBack : function(){
    var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    campMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
  }

 });