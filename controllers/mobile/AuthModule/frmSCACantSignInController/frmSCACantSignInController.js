define({ 

  //Type your controller code here 

  preShow: function(){
    this.setFlowActions();
  },


  setFlowActions: function() {
    let scopeObj = this;

    this.view.cantSignIn.navigateToLogin = scopeObj.navigateToLogin;

    this.view.cantSignIn.activateProfile = scopeObj.activateProfile;
  },

  navigateToLogin: function(){
    let scopeObj = this;
    var navManager = applicationManager.getNavigationManager();
    navManager.clearStack();
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.navigateToLogin();
  },

  activateProfile: function(){
    let scopeObj = this;
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.commonFunctionForNavigation("frmEnrollActivateProfile");
  }

});