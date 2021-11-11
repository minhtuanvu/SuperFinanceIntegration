define({
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function () {
      if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
        this.view.flxHeader.isVisible = false;
      }
      this.initActions();
      var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var index = payeeMod.presentationController.getSelectedFrequencyIndex();
      this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9";
      this.view.segFrequency.retainSelection = false;
      this.view.customHeader.btnRight.onClick=this.cancelOnClick;
      if(index !== undefined && index !== null && index !== "")
      {
        this.view.segFrequency.selectedRowIndex = [0,index];
        this.view.segFrequency.retainSelection = true;
      }
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function () {
        var scope = this;
        this.view.segFrequency.onRowClick = function () {
            scope.segmentRowClick();
        }
        this.view.customHeader.flxBack.onClick = function () {
          var navManager = applicationManager.getNavigationManager();
          navManager.goBack(); 
        }
    },
    segmentRowClick: function () {
         var index = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
      applicationManager.getPresentationUtility().showLoadingScreen();
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
      campaignMod.presentationController.navToDepositsToAccountDeposits(index);
    },
  cancelOnClick:function(){
   var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated"); 
}
});