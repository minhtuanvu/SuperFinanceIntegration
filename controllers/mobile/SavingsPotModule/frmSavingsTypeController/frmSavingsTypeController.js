define({

  init: function () {
    },

  preShow: function () {
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
    }

    this.initActions();

  },
  initActions: function () {
    this.view.btnGoal.onClick=this.goalNav;
    this.view.btnBudget.onClick=this.budgetNav;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    this.view.customHeader.flxBack.onTouchEnd = this.onBack;
  },
  postShow:function(){
 
  },
   onBack : function () {
    var navigationMan=applicationManager.getNavigationManager();
    navigationMan.goBack();
  },
  onCancelClick:function(){
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.clearCreateData();
     var navManager = applicationManager.getNavigationManager();
	 navManager.navigateTo("frmMySavingsPot");
  },
  budgetNav: function(){
    var SavingsPotModule = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotModule.clearCreateData();
	var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    SavingsPotMod.presentationController.initiatePot("Budget","frmBudgetName");
},
  goalNav: function(){
        var SavingsPotModule = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotModule.clearCreateData();
		var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    SavingsPotMod.presentationController.initiatePot("Goal","frmGoalsType");
     SavingsPotMod.presentationController.setBiWeekly("");
}
});
