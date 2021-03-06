define({
   init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    preShow: function () {
    if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
      // this.view.flxHeader.isVisible = false;
      this.view.flxHeader.setVisibility(false);
    }
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function () {
      var scope = this;
      var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
    var index= transModPresentationController.getSelectedFrequencyIndex();
      this.view.segFrequency.retainSelection = false;
      if(index!==null&&index!==undefined&&index!=="")
      {
         this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9";
      this.view.segFrequency.retainSelection = true;
       // this.view.segFrequency.selectedRowIndices = [[0,[index]]];
       this.view.segFrequency.selectedRowIndex = [0,index];
      }
      this.view.segFrequency.onRowClick = function () {
        scope.segmentRowClick();
      }
     this.view.customHeader.flxBack.onClick = function(){
           var navMan=applicationManager.getNavigationManager();
           navMan.goBack();
        }
        this.view.customHeader.btnRight.onClick = function(){
        scope.cancelOnClick();
        }
    },
  cancelOnClick:function()
  {
    var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon();
  },
    segmentRowClick: function () {
        var index = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.switchFrequencyType(index);
    }
});