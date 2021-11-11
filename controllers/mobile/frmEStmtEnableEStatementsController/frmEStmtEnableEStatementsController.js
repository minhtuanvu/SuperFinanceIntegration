define({
 //Type your controller code here
  selectedRowData:null,
    init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
	},
  frmPreshow : function(){
    this.selectedRowData=null;
    if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
      this.view.flxHeader.isVisible = false;
    }else{
      this.view.flxHeader.isVisible = true;
    }
    this.initActions();
    this.setDataToForm();
    this.view.segSelectEmailId.onRowClick=this.onSegRowClick;
     var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  initActions:function(){
    var scope=this;
    this.view.customHeader.flxBack.onClick=function(){
      var navManager = applicationManager.getNavigationManager();
      navManager.goBack();
    };
    this.view.customHeader.btnRight.onClick=function(){
       scope.onClickCancel();
    };
    this.view.flxCheckBox.onTouchStart=this.flxCheckBoxOnClick;
    this.view.btnTAndC.onClick=function(){
        applicationManager.getPresentationUtility().showLoadingScreen();
      var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
  	  settingsModule.presentationController.getEnableEStatements();
    };
    this.view.btnEnable.onClick=function(){
       applicationManager.getPresentationUtility().showLoadingScreen();
      var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      var navManager = applicationManager.getNavigationManager();
      var data = navManager.getCustomInfo("frmEStmtAccountDetails");
      var accountID = (data && data.accountID && data.accountID!== "" &&data.accountID!== null)?data.accountID:"";
      var updatedSettings={"nickName":data.nickName,"accountID":accountID,"eStatementEnable":"1","favouriteStatus":data.data.favouriteStatus,"email":scope.selectedRowData.lblValue};
      settingsMode.presentationController.updateUserAccountSettingsForEstatements(updatedSettings,"enable");
    };
  },
  onClickCancel:function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  setDataToForm :function(){
    var userObj = applicationManager.getUserPreferencesManager();
     var email = userObj.getUserEmail();
     var secondaryEmail = userObj.getUserObj().secondaryemail;
     var secondaryEmail2 = userObj.getUserObj().secondaryemail2;
     var emailData =[];
     this.view.segSelectEmailId.widgetDataMap={
       "lblKey":"lblKey",
       "lblValue": "lblValue",
       "imgRadio":"imgRadio",
       "template" : "template",
        "flxSeparator": "flxSeparator"
     };
     var rowData = {
         "lblKey": "Primary Email ID",
         "lblValue": email,
          "imgRadio":"radiobuttoninactive.png",
         "template" : "flxEStmtEmail"
       };
     var rowData1 = {
       "lblKey": "Secondary Email ID",
        "lblValue": secondaryEmail,
         "imgRadio":"radiobuttoninactive.png",
        "template" : "flxEStmtEmail"
     };
     var rowData2 = {
          "lblKey": "Secondary Email ID2",
          "lblValue": secondaryEmail2,
          "imgRadio":"radiobuttoninactive.png",
          "flxSeparator": {"isVisible" : false},
          "template" : "flxEStmtEmail"
        };
     if(email){
       emailData.push(rowData);
     }
     if(secondaryEmail){
       emailData.push(rowData1);
     }
     if(secondaryEmail2){
       emailData.push(rowData2);
     }
     if(emailData.length > 0)
     this.view.segSelectEmailId.setData(emailData);
  },
   flxCheckBoxOnClick: function() {
    if (this.view.imgCheckBox.src === "remembermetick.png") {
      this.view.imgCheckBox.src = "remeberme.png";
          this.view.btnEnable.setEnabled(falses);
      this.view.btnEnable.skin = "sknBtna0a0a0SSPReg26px";
    } else {
      this.view.btnEnable.skin="sknBtn0095e4RoundedffffffSSP26px";
      this.view.btnEnable.setEnabled(true);
      this.view.imgCheckBox.src = "remembermetick.png";
    }
    this.view.flxCheckBox.forceLayout();
  },
  postShowCode : function(){
    this.view.segSelectEmailId.selectedRowIndex = [0,0];
    this.selectedRowData=this.view.segSelectEmailId.data[0];
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onSegRowClick : function(){
    var selectedAcntRow = this.view.segSelectEmailId.selectedIndex[1];
    this.selectedRowData = this.view.segSelectEmailId.data[selectedAcntRow];
  }
 });