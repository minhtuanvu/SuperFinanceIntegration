define({

  init: function () {
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"CALLBACK",currentForm,scope.navigateCustomBack);
    },

  preShow: function () {
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
    }

    this.initActions();

  },
  initActions: function () {
     var GoalsTypes=[];
    var navManager = applicationManager.getNavigationManager();
    var category=navManager.getCustomInfo('frmGoalsType');
         for (var TitleNo in category){
       var data=category[TitleNo];
           var TitImge;
           switch(data.name){
             case "EDUCATION":
               TitImge="educationgoal.png";
               break;
             case "FAMILY_EXPENSES":
               TitImge="familyexpenses.png";
               break;
             case "HOUSING":
               TitImge="house.png";
               break;
             case "INVESTMENT":
               TitImge="retirement.png";
               break;
             case "TRAVEL":
               TitImge="travelgoal.png";
               break;
             case "VEHICLE":
               TitImge="vehicle.png";
               break;
             default:
               TitImge="other.png";
           }
    var storeData = {
          Title: data.description,
			Name: data.name,
          img:"segmentarrow.png",
		TitImg: TitImge
        };
    GoalsTypes.push(storeData);
    }
        this.view.segGoalsType.widgetDataMap={
      lblTitle: "Title",
      lblName: "Name",
      imgArrow:"img",
      imgTitle:"TitImg"
    };
this.view.segGoalsType.setData(GoalsTypes);
    this.view.segGoalsType.onRowClick = this.segRowClick;
    this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
  },
  postShow:function(){
            applicationManager.getPresentationUtility().dismissLoadingScreen();
 },

    onBack : function () {
    var navigationMan=applicationManager.getNavigationManager();
    navigationMan.goBack();
  },
  navigateCustomBack: function() {
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.commonFunctionForgoBack();
  },
    onCancelClick : function(){
     var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");  
      var navManager = applicationManager.getNavigationManager();
      var previousForm = navManager.getPreviousForm();
     if (previousForm === "frmCreateGoalVerifyDetails") {   
          SavingsPotMod.commonFunctionForNavigation("frmCreateGoalVerifyDetails");
     } else {
       SavingsPotMod.clearCreateData();  
       navManager.navigateTo("frmMySavingsPot"); 
     }
		
  },
  segRowClick: function(){
        var data=this.view.segGoalsType.selectedRowItems[0];
    var savingsType=data.Title;
    var savingsName=data.Name;
    var navManager = applicationManager.getNavigationManager();
    var previousForm = navManager.getPreviousForm();
    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
     if (previousForm === "frmCreateGoalVerifyDetails") {   
           SavingsPotMod.presentationController.navToGoalName(savingsType,savingsName, "frmCreateGoalVerifyDetails");
     } else {
       SavingsPotMod.presentationController.navToGoalName(savingsType,savingsName, "frmGoalName");
     }
  }
});
