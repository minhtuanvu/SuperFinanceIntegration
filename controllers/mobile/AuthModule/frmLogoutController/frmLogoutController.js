define({ 

  //Type your controller code here 
  init:function(){
    var scope=this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(scope,"YES",currentForm);
    this.view.btnLogIn.onClick=scope.signInOnClick;
  },
  preshow:function(){
    if(scope_AuthPresenter.isLogoutScreen && !scope_AuthPresenter.isPasswordUpdated)
    {
      this.view.flxSuccess.setVisibility(true);
      this.view.flxeBanking.setVisibility(false);
      this.view.flxUpdatePassword.setVisibility(false);
    }
    else if (!scope_AuthPresenter.isLogoutScreen && !scope_AuthPresenter.isPasswordUpdated){
      this.view.flxSuccess.setVisibility(false);
      this.view.flxeBanking.setVisibility(true);
      this.view.flxUpdatePassword.setVisibility(false);
    }
    else {
      this.view.flxSuccess.setVisibility(false);
      this.view.flxeBanking.setVisibility(false);
      this.view.flxUpdatePassword.setVisibility(true);
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  signInOnClick:function(){
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.signInFromLogoutScreen();
  }

});