define({ 
  /*This function is first called when a form is ready to use */


  onInit : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.view.preShow = this.preShowFunction;
  },


  onNavigate:function(){
    try{
    }catch(er){
    }
  },

  preShowFunction:function(){
    try{

      var navManager = applicationManager.getNavigationManager();
      var navData = navManager.getCustomInfo("ACHTransactionDetails");
      
      if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
        this.view.flxHeader.isVisible = false;
      }else{
        this.view.flxHeader.isVisible = true;
      } 
      if(navData.FormType==="userDetail"){///used for usermanagement
           if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
            this.view.title = kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement");
          }else{
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement");
          }
      }else{//used for ACH and ApprovalandrRequest
        if(navData.imgIconKey==="Approval"){
          this.view.imgConfirmTick.src="confirmation_tick.png"; 
          if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
            this.view.title = kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement");
          }else{
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement");
          }
        }else if(navData.imgIconKey==="withdraw"){
          this.view.imgConfirmTick.src="confirmation_tick.png"; 
          if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
            this.view.title = kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement");
          }else{
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement");
          }
        }else{
          this.view.imgConfirmTick.src="confirmation_tick.png"; 
          if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
            this.view.title = kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement");
          }else{
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement");
          }
        }
      }

      this.view.lblMsg.text = navData.FormData; 
      this.view.btnDone.onClick = this.onclickDone;
      this.view.onDeviceBack=this.dummyFunction;
    }catch(er){
      kony.print("catch error"+er);
    }
  },
  dummyFunction:function(){},
  /*This function is used to navigate back*/
  onclickDone:function(){
    try{
      var navManager = applicationManager.getNavigationManager();
      var backformFlow = navManager.getCustomInfo("backFormFlow");
      var keyvalue;
      if(backformFlow==="BusinessDashboard"){
         keyvalue="BusinessDashboard";
      }else{
         keyvalue="StatusMessage";
      }
      navManager.setCustomInfo("formFlow",keyvalue); 
      var navData = navManager.getCustomInfo("ACHTransactionDetails");
      var formFlow={};
      var achModule;

      switch(navData.FormType){
        case "ACHTransaction":
          formFlow = {
            "formName":"ACHTransaction"
          };                       
          navManager.setCustomInfo("ACHTransactions",formFlow);
          achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
          achModule.presentationController.commonFunctionForNavigation("ACHTransactions");

          break;
        case "ACHFiles":
          formFlow = {
            "formName":"ACHFile"
          };   
          navManager.setCustomInfo("ACHTransactions",formFlow);
          achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
          achModule.presentationController.commonFunctionForNavigation("ACHTransactions");
          break;
        case "GeneralTransactions":
          formFlow = {
            "formName":"GeneralTransactions"
          };
           navManager.setCustomInfo("ACHTransactions",formFlow);
          if(navData.imgIconKey==="Approval" || navData.imgIconKey==="Reject"){
          achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
          achModule.presentationController.commonFunctionForNavigation("frmApprovalsList");
          }else{
            achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
          achModule.presentationController.commonFunctionForNavigation("frmRequestList");
          }
          break;
        case "ACHFilesApprovals":
          formFlow = {
            "formName":"ACHFilesApprovals"
          };   
          navManager.setCustomInfo("ACHTransactions",formFlow);
          if(navData.imgIconKey==="Approval" || navData.imgIconKey==="Reject"){
          achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
          achModule.presentationController.commonFunctionForNavigation("frmApprovalsList");
          }else{
            achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
          achModule.presentationController.commonFunctionForNavigation("frmRequestList");
          }
          break;
        case "ACHTransactionApprovals":
          formFlow = {
            "formName":"ACHTransactionApprovals"
          };   
          navManager.setCustomInfo("ACHTransactions",formFlow);
          if(navData.imgIconKey==="Approval" || navData.imgIconKey==="Reject"){
          achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
          achModule.presentationController.commonFunctionForNavigation("frmApprovalsList");
          }else{
            achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
          achModule.presentationController.commonFunctionForNavigation("frmRequestList");
          }
          break;

        case "userDetail":
          var userManagementModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BusinessBanking");
          userManagementModule.presentationController.navigatetoallusers();
          break;
          
        case "ACHFilesRequest":
          formFlow = {
            "formName":"ACHFilesApprovals"
          };  
          navManager.setCustomInfo("ACHTransactions",formFlow);
          if(navData.imgIconKey==="Approval" || navData.imgIconKey==="Reject"){
            achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
            achModule.presentationController.commonFunctionForNavigation("frmRequestList");
          }else{
            achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
            achModule.presentationController.commonFunctionForNavigation("frmRequestList");
          }
          break;          
      }
    }catch(er){
      kony.print("catch error"+er);
    }
  }, 
});