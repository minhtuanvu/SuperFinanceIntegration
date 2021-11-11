define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow:function(){
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      		this.view.flxHeader.isVisible = true;
    	}
    	else{
      		this.view.flxHeader.isVisible = false;
   		 }
    this.flexView(1);
    this.view.btnSend.onClick = this.onClickSend;
    this.view.customHeader.btnRight.onClick = onCancelClick;
  },
  setFormUI : function(customerCommunicationInfo){
    if(this.getMFAFlowType() == "TRANSFER_CREATE"){
      this.view.flxNewDevice.setVisibility(false);
      this.view.flxDeviceRegistration.setVisibility(false);
      this.lblLetsAuthenticateTransaction.setVisibility(true);
    }
    else if(this.getMFAFlowType() == "UPDATE_USERNAME"){
    this.view.flxNewDevice.setVisibility(false);
    this.view.flxDeviceRegistration.setVisibility(true);
    var userObj = applicationManager.getUserPreferencesManager();
    var uname = userObj.gettempUserName();
    this.view.lblName = "Hi!! "+uname+" Let's authenticate";
    this.view.lblLetsAuthenticateTransaction.setVisibility(false);
    }
    else if(this.getMFAFlowType() == "DEVICE_REGISTRATION"){
    this.view.flxNewDevice.setVisibility(true);
    this.view.flxDeviceRegistration.setVisibility(false);
    var userObj = applicationManager.getUserPreferencesManager();
    var uname = userObj.gettempUserName();
    this.view.lblName = "Hi!! "+uname+" Let's authenticate";
    this.view.lblLetsAuthenticateTransaction.setVisibility(false);
    }
    this.view.forceLayout();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onCancelClick : function(){},
  onClickSend : function(){
    //send selected data
    var navmanager = applicationManager.getNavigationmanager();
    navManager.navigateTo("frmMFASecurityCode");
  },
  flexView:function(option){
    this.resetFlexes();
    if(option===1){
      this.view.flxNewDevice.isVisible=true;
    }
    else if(option===2){
      this.view.flxDeviceRegistration.isVisible=true;
    }
    else{
      this.view.lblLetsAuthenticateTransaction.isVisible=true;
    }
  },
  resetFlexes:function(){
    this.view.flxNewDevice.isVisible=false;
    this.view.flxDeviceRegistration.isVisible=false;
    this.view.lblLetsAuthenticateTransaction.isVisible=false;
  }
});