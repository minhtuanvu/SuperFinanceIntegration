define({
  init: function () {
    var scope=this;
    var currentFormObject = kony.application.getCurrentForm();
    var currentForm=currentFormObject.id;
    applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
  },
  navigateCustomBack: function() {
    var transMod = applicationManager.getModulesPresentationController("TransferModule");
    transMod.commonFunctionForgoBack();
  },
  preShow: function () {
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
    } else {
      this.view.flxHeader.isVisible = true;
    }
    this.setSegmentData();
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions: function () {
    this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    this.view.segOptions.onRowClick = this.segmentOnClick;
 	  this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
  },
  setSegmentData : function() {
    var transMod = applicationManager.getModulesPresentationController("TransferModule");
    var segData = transMod.getPaymentMediumData();
    this.view.segOptions.widgetDataMap = this.getWidgetDataMap();
    this.view.segOptions.setData(segData);
  },
  cancelOnClick: function() {
    var transMod = applicationManager.getModulesPresentationController("TransferModule");
    transMod.cancelCommon();
  },
  segmentOnClick : function() {
    var paymentMedium = this.view.segOptions.selectedItems[0].title;
    var transMod = applicationManager.getModulesPresentationController("TransferModule");
    transMod.setPaymentMedium(paymentMedium);
  },
  getWidgetDataMap: function() {
    return {
      lblTitle : "title",
      lblDescription : "description"
    }
  }
});