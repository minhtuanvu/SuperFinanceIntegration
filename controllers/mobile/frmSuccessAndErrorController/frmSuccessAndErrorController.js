define({
  preShow: function() {
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.flxSuccess.isVisible = false;
     this.view.flxError.isVisible = true;
    this.setFlowActions();
  },
   setFlowActions : function(){
    var scope = this;
    this.view.flxError.btnTryAgain.onClick = function() {
     var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
                        authMod.presentationController.onLogout();
    };
  }
 });
