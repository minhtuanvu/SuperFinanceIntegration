define(function(){

  return {
    timerCounter:0,
    onInit : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      this.view.preShow = this.preShowfunc;  
    },


    onNavigate:function()
    {
      try { 

      }catch(error){
        kony.print(" onnavigateerror-->"+error);
      }
    },

    preShowfunc:function()
    {
      try {   
        if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
          this.view.title = kony.i18n.getLocalizedString("kony.mb.managecustom.lblLocateUs");
          this.view.flxHeader.isVisible = false;
        }else{
          this.view.flxHeader.isVisible = true;
        }
        this.bindevents();
        this.fetchSelectedTitleandCount();
      }catch(error){
        kony.print("preShowfunc-->"+error);
      }
    },


    ///////********bindevents is used set thewidgets onclick and initialise the data*****////////

    bindevents:function()
    {
      try {
        this.view.flxPopup.isVisible = false;
        this.view.btnConfirm.enable = false;
        this.view.txtCustomName.text ="";
        this.view.customHeader.flxBack.onClick = this.backNavigation;
        this.view.onDeviceBack = this.backNavigation; 
        this.view.btnConfirm.onClick = this.onClickConfirm;
        this.view.txtCustomName.onTextChange = this.onTextchangeCustomname;
        this.view.customHeader.btnRight.onClick=this.onClickCancel;
      }catch(error){
        kony.print(" bindevents-->"+error);
      }       
    },

    backNavigation:function(){
      try{
        var navManager = applicationManager.getNavigationManager();    
        var formFlow ={
          "isBackSelectAccount": true,         
        };
        navManager.setCustomInfo("isBackfrmCreateCustomGroup",formFlow);
        navManager.navigateTo("frmSelectAccounts");
      }catch(er){
      }
    },

    onClickCancel:function(){
      try{
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmManageCustomGroup");
      }catch(er){
      }
    },

    onTextchangeCustomname:function(){
      try{
        var customViewName = this.view.txtCustomName.text;
        if(kony.sdk.isNullOrUndefined(customViewName) || customViewName==="" || customViewName===null){
  		  this.view.btnConfirm.skin = "sknBtnOnBoardingInactive";
          this.view.btnConfirm.enable=false;
        }else{
          this.view.btnConfirm.skin = "sknBtn0095e4RoundedffffffSSP26px";
          this.view.btnConfirm.enable=true;
        }
      }catch(er){

      }
    },

    onClickConfirm:function(){
      var navManager = applicationManager.getNavigationManager();
      var customViewName = this.view.txtCustomName.text;  
      var  customviewNamevalidation = false;
      var customViewList = navManager.getCustomInfo("CustomviewList"); //it will be setcustominfo in Accountmodule presentation
      for(var i=0;i<customViewList.length;i++){
        if(customViewList[i].name.toLocaleLowerCase()===customViewName.toLocaleLowerCase()){
          customviewNamevalidation = true;
        }
      }

      if(customviewNamevalidation === true){
        this.errorMsgshown();
      }else{
        this.createCustomView();
      }
    },

    createCustomView:function(){
      try{
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var getData = navManager.getCustomInfo("SelectedAccountsTitleCount"); 
        var customViewName = this.view.txtCustomName.text;    
        var selectedAccount = getData.selectedAccounts; 
        var selectedAccountId="";
        for(var i=0;i<selectedAccount.length;i++)
        {
          if(i===0)
          {
            selectedAccountId = selectedAccount[i].accountID;
          }
          else{
            selectedAccountId = selectedAccountId+","+selectedAccount[i].accountID;
          }
        }       
        var inputParams={
          "name":customViewName,
          "accountIds":selectedAccountId,  
        };

        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AccountModule');
        accountModule.presentationController.createCustomView(inputParams);

      }catch(er){

      }
    },

    createCustomViewSuccessCallBack:function(response){
      try{
        if(!kony.sdk.isNullOrUndefined(response)){
          var navManager = applicationManager.getNavigationManager();
          var getData = navManager.getCustomInfo("SelectedAccountsTitleCount"); 
          var totalCount = this.view.lblTotalcount.text;
          var customViewName = this.view.txtCustomName.text;    
          var selectedTitleCount= getData.selectedTitleCountArr;
          var formFlow ={
            "customViewName": customViewName,
            "totalCount": totalCount,
            "selectedTitleCount":selectedTitleCount
          };
          navManager.setCustomInfo("CreateCustomAccountIds",response.accountIds);
          navManager.setCustomInfo("CreateCustomGroup",formFlow);
          navManager.navigateTo("frmCustomAcknowledgement");
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }catch(er){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
    },

    errorMsgshown:function()
    {
      try {         
        var scopeObj=this;       
        this.view.flxPopup.customPopup.lblPopup.text ="The Custom view name has already been used. Please provide another name" ;      
        this.timerCounter=parseInt(this.timerCounter)+1;
        var timerId="timerPopupError"+this.timerCounter;
        this.view.flxPopup.skin = "sknFlxf54b5e";
        this.view.customPopup.imgPopup.src = "errormessage.png";    
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
          scopeObj.view.flxPopup.setVisibility(false);
        }, 1.5, false);             

        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }catch(error){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        kony.print(" fetchErrorcallBack-->"+error);
      }       
    },

    fetchErrorcallBack:function(response)
    {
      try {    
        if(!kony.sdk.isNullOrUndefined(response)){
          var scopeObj=this;
          var errorResponse = response.errorMessage;
          this.view.flxPopup.customPopup.lblPopup.text = errorResponse;      
          this.timerCounter=parseInt(this.timerCounter)+1;
          var timerId="timerPopupError"+this.timerCounter;
          this.view.flxPopup.skin = "sknFlxf54b5e";
          this.view.customPopup.imgPopup.src = "errormessage.png";    
          this.view.flxPopup.setVisibility(true);
          kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
          }, 1.5, false);             
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }catch(error){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        kony.print(" fetchErrorcallBack-->"+error);
      }       
    },


    ///////********fetchSelectedTitleandCount is used set the title and count*****////////
    fetchSelectedTitleandCount:function()
    {
      try {
        var navManager = applicationManager.getNavigationManager();
        var getData = navManager.getCustomInfo("SelectedAccountsTitleCount"); 
        this.view.lblTotalcount.text = getData.totalCount.toFixed(0);
        var selectedTitleCount= getData.selectedTitleCountArr;
        var segDataArray = [];
        for(var i=0;i<selectedTitleCount.length;i++){
          if(selectedTitleCount[i].selectedCount !== 0 || selectedTitleCount[i].selectedCount !== 0.0){
            var json={ 
              "lblHead":selectedTitleCount[i].selectedTitle,
              "lblValue":selectedTitleCount[i].selectedCount.toFixed(0),
              "flxline":{isVisible:true}
            };

            segDataArray.push(json);
          }}
        segDataArray[segDataArray.length-1].flxline.isVisible=false;
        this.view.segCustomgroupDetails.setData(segDataArray);
      }catch(error){
        kony.print("fetchSelectedTitleandCount -->"+error);
      }       
    },
  };
});