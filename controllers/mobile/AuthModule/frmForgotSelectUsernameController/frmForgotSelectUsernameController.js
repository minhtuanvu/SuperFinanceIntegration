define([], function (){ 
  return{
    preShowSelectUsername: function(){
      this.getUserList();
      this.resetUI();
      this.renderTitleBar();
      this.setFlowActions();
    },
    
    resetUI: function(){
      this.setContinueButtonEnableState();      
    },
    
    setFlowActions: function(){
      const scopeObj = this;
      this.view.customHeader.btnRight.onClick = function(){
        scopeObj.navigateToLoginScreen();
      };
      this.view.btnContinue.onClick = function(){
        scopeObj.navigateToNextScreen();
      };
    },
    
    navigateToLoginScreen: function(){
      const navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmForgot", undefined);
      navManager.navigateTo("frmLogin");
    },
    
    navigateToNextScreen: function(){
      const navManager = applicationManager.getNavigationManager();
      let username = this.view.lblUsernameListBox.selectedKeyValue[0];
	  navManager.setCustomInfo("frmForgot", undefined);
      navManager.setCustomInfo("selectedUser", username);
      navManager.navigateTo("frmForgotResetInformation");
    },
    
    setContinueButtonEnableState: function(){
      if(this.view.lblUsernameListBox.masterData.length!==0){
        this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        this.view.btnContinue.setEnabled(true);
      } else {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
      }
    },
    
    /**
     * @function
     *
     * @param userMap 
     */
    getUserList: function(userMap, serviceKey){
	const navManager = applicationManager.getNavigationManager();
       var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var userlist = authModule.presentationController.userList;
        if(userMap){
          navManager.setCustomInfo("userMap", userMap);
        }
        if(serviceKey){
          navManager.setCustomInfo("serviceKey", serviceKey);
        }
        this.view.lblUsernameListBox.masterData = userlist;
        this.view.lblUsernameListBox.selectedKey = this.view.lblUsernameListBox.masterData[0][0];
    },

    renderTitleBar :function(){
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIphone = deviceUtilManager.isIPhone();
      if(!isIphone){
        this.view.flxHeader.isVisible = true;
      }
      else{
        this.view.flxHeader.isVisible = false;
      }
    },
    
  };
});