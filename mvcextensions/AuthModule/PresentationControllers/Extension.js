define({

    signInFromLogoutScreen : function() {
    var MenuHandler =  applicationManager.getMenuHandler();
    var navMan = applicationManager.getNavigationManager();
    applicationManager.clearBusinessDataMemebers();
    var userPreferencesManager = applicationManager.getUserPreferencesManager();
    userPreferencesManager.isLoggedIn = false;
    if(navMan.getCustomInfo("logoutStatus")){
      var asobj=applicationManager.actionSheetObject;
      if(asobj){
        asobj.dismiss();
        applicationManager.actionSheetObject=null;
      }
    }
    applicationManager.getDataforLogin();
    navMan.clearStack();
    navMan.navigateTo("frmLogin");
    navMan.destroyForms();
    navMan.clearEntryPointTable();
    MenuHandler.forceTouchFlow = "";
    //by vineela
    //pfmTravel = 0;
    kony.theme.setCurrentTheme ("DarkThemeSF", function onSuccess() {
      kony.print("Theme applyied successfully ");
    }, function onFailure() {
      kony.print(" Error applying theme ");
    });
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(navMan.getCustomInfo("logoutStatus")){
      navMan.setEntryPoint("Feedback","frmLogin");
      var cm=applicationManager.getConfigurationManager();
      var val=cm.getshowFeedBackPostLogout();
      if(val=="true"){
        var feedbackModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("FeedBackModule");
        feedbackModule.presentationController.showFeedbackPopup({from : "profilesettingorlogout"});
      }
    }
  }
  
});