define({
  
  init: function () {
    var scope=this;
    var currentFormObject = kony.application.getCurrentForm();
    var currentForm=currentFormObject.id;
    applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
  },
  
  navigateCustomBack: function() {
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.showDashboard();
  },
  
  preShow: function () {
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
    }
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmAcknowledgement");
    this.view.Acknowledgement.setUpData(data);
    this.setupHeaderData(data.flow);
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  setupHeaderData: function(flow) {
    switch(flow) {
      case 'transfers':
        this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.Acknowledgement");
      break;  
      case 'error':
        this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.Acknowledgement");
        break;
    }
  }

});
