define({ 
  
  frmEnrollActivateProfilePreShow: function(){

    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    this.resetUI();
    this.setFlowActions();
    if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
      this.view.flxHeader.isVisible=false;
    }
    else{
      this.view.flxHeader.isVisible=true;
    }
  },
  
  resetUI: function(){
    this.view.activateProfile.setVisibility(false);
  },

  setFlowActions: function(){
    const scopeObj = this;
    this.view.customHeader.flxBack.onTouchEnd = function(){
      scopeObj.navigateToFrmLogin();
    };
    this.view.customHeader.btnRight.onClick = function(){
      scopeObj.navigateToFrmLogin();
    };
    this.view.flxEnrollAccount.onTouchEnd = function(){
      // Enroll Your Account Flow
      var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmEnrollLastName");
    };
    this.view.flxActivateAccount.onTouchEnd = function(){
      // Activation Flow Component
      if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
          var titleBarAttributes = scopeObj.view.titleBarAttributes;
	      titleBarAttributes["navigationBarHidden"] = true;
    	  scopeObj.view.titleBarAttributes = titleBarAttributes;
      	  scopeObj.view.forceLayout();
      }
      scopeObj.view.activateProfile.setVisibility(true);
      // TODO - Make Backend Call to send Activation Code
    };
  },
  
  closeActivateProfileFlow: function(){
      if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
          var titleBarAttributes = this.view.titleBarAttributes;
          titleBarAttributes["navigationBarHidden"] = false;
          this.view.titleBarAttributes = titleBarAttributes;
      }
    this.view.activateProfile.setVisibility(false);
  },
  
  navigateToFrmLogin: function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

});
