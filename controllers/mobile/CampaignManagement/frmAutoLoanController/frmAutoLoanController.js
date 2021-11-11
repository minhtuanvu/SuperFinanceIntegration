define({ 

  openURL: function() {
	  //Accessing an external web page : http://www.google.com
	  kony.application.openURL("https://www.autoscout24.com/lst/mercedes-benz?sort=price&desc=0&offer=N&ustate=N%2CU&priceto=20000&atype=C&ac=0");
	},
  onClickOfBack : function(){
    var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    campMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
  }

 });