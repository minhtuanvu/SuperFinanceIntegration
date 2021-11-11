define({
  init : function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.loadSegDashboard();
    this.selectedDashboard = 0;
  },
  preShowUiSettings:function(){
    var loggerManager = applicationManager.getLoggerManager();
    try {
      loggerManager.log("#### start frmEditNickNameController : preShowUiSettings ####");
      kony.application.dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var data = this.view.segDashboards.data;
      var prevDashboardFlow = "";
      if(navManager.getCustomInfo("frmDashboardSelector") === "combinedBanking"){
        prevDashboardFlow = "Combined Banking";
      }else if(navManager.getCustomInfo("frmDashboardSelector") === "personalBanking"){
        prevDashboardFlow = "Personal Banking";
      }else if(navManager.getCustomInfo("frmDashboardSelector") === "businessBanking"){
        prevDashboardFlow = "Business Banking";
      }
      if(prevDashboardFlow === ""){
        data[0].imgSelectedIcon.src = "tickmark_green.png";
        this.view.segDashboards.setData(data);
      }else{
        for(var i=0;i<data.length;i++){
          if(prevDashboardFlow === data[i].lblDashboardName){
            data[i].imgSelectedIcon.src = "tickmark_green.png";
          }else{
            data[i].imgSelectedIcon.src = "transparent.png";
          }
        }
        this.view.segDashboards.setData(data);
      }
      this.view.segDashboards.onRowClick = this.segDashboardsOnRowClick;
	  if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
        this.view.flxHeader.isVisible = false;
      } else {
        this.view.flxHeader.isVisible = true;
		this.view.customHeader.flxBack.onClick=this.onBack;
		this.view.customHeader.btnRight.onClick = this.onBack;
      }
      this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.Accounts.dashboardView");
    } catch (err) {
      loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
  },
  
  loadSegDashboard:function(){
    try{
      var segData = [{
        "imgCombinedDashboardIcon":{
          "src":"combinedbankingblue.png",
          "isVisible": true
        },
        "lblDashboardName":"Combined Banking",
        "imgSelectedIcon":{src:"transparent.png"},
        "ref_val":"combinedBanking",

      },{
        "imgCombinedDashboardIcon":{
          "src":"personalaccount.png",
          "isVisible": true
        },
        "lblDashboardName":"Personal Banking",
        "imgSelectedIcon":{src:"transparent.png"},
        "ref_val":"personalBanking",
      },{
        "imgCombinedDashboardIcon":{
          "src":"businessaccount.png",
          "isVisible": true
        },
        "lblDashboardName":"Business Banking",
        "imgSelectedIcon":{src:"transparent.png"},
        "ref_val":"businessBanking",
      },/*{
        "imgCombinedDashboardIcon":{
          "src":"security.png",
          "isVisible": true
        },
        "lblDashboardName":"Unified Dashboard ",
        "imgSelectedIcon":{src:"transparent.png"},
        "ref_val":"unified",
      }*/];
      this.selectedDashboard = 0;
      this.view.segDashboards.setData(segData); 
    }catch(er){
      kony.print("loadSegDashboard"+er);
    }
  },
   backNavigation:function(){
      try{
        var navMan=applicationManager.getNavigationManager();
        navMan.goBack();
      }catch(er){

      }
    },
  
  segDashboardsOnRowClick:function(){
    try{
      var selectedItem = this.view.segDashboards.selectedRowItems;
      var selectedIndex = this.view.segDashboards.selectedRowIndex[1];
      var data = this.view.segDashboards.data;
      var navManager = applicationManager.getNavigationManager();
      for(var i=0;i<data.length;i++){
        if(i==selectedIndex){
          this.selectedDashboard = i;
          data[i].imgSelectedIcon.src = "tickmark_green.png";
        }
        else{
          data[i].imgSelectedIcon.src = "transparent.png";
        }
      }
      this.view.segDashboards.setData([]);
      this.view.segDashboards.setData(data);
      navManager.setCustomInfo("frmDashboardSelector", selectedItem[0].ref_val);
      navManager.setCustomInfo("frmFilterAccounts",{"isFilterApplied" : false});
      navManager.navigateTo("frmUnifiedDashboard");
     /* if(selectedItem[0].ref_val === "combinedBanking"){
        navManager.navigateTo("frmCombinedDashboard");
      }else if(selectedItem[0].ref_val === "personalBanking"){
        navManager.navigateTo("frmDashboardAggregated");
      }else if(selectedItem[0].ref_val === "businessBanking"){
        navManager.navigateTo("frmBusinessDashboard");
      }else if(selectedItem[0].ref_val === "unified"){
        navManager.navigateTo("frmUnifiedDashboard");
      }*/
    }catch(er){

    }
  },
  onBack: function() {
    var loggerManager = applicationManager.getLoggerManager();
    try {
      loggerManager.log("#### start frmDashboardSelectorController : onBack ####");
      var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmUnifiedDashboard");
      /*switch(this.selectedDashboard) {
        case 0 : navManager.navigateTo("frmCombinedDashboard");
          break;
        case 1 : navManager.navigateTo("frmDashboardAggregated");
          break;
        case 2 : navManager.navigateTo("frmBusinessDashboard");
          break;
        case 3 : navManager.navigateTo("frmUnifiedDashboard");
          break;
      }*/
    } catch (err) {
      loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
  },

 
});