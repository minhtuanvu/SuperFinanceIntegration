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
    this.initActions();
    this.setupUI();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  initActions: function () {
    var scope = this;
    var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
    var navMan = applicationManager.getNavigationManager();
    this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    scope.view.btnDashboard.onClick = function (){
      moneyMovementModule.haveLimitsBeenFetched = false;
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.showDashboard();
      
    };
    scope.view.btnNewTransfer.onClick = function () {
      var navMan = applicationManager.getNavigationManager();
      //navMan.setEntryPoint("ManageMMFlow","frmMMTransferFromAccount");
      navMan.setEntryPoint("centralmoneymovement","frmDashboardAggregated");
      navMan.setEntryPoint("startFromFlow","frmMMTransferFromAccount");
      moneyMovementModule.clearMMFlowAtributes();
      moneyMovementModule.getFromAndToAccounts();
    };
    scope.view.btnToAccount.onClick=function(){
      moneyMovementModule.haveLimitsBeenFetched = false;
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.showDashboard();
    };
  },
  setupUI : function () {
    var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
    var transactionManager = applicationManager.getTransactionManager();
    var transferObject = transactionManager.getTransactionObject();
    if (!kony.sdk.isNullOrUndefined(transferObject.errmsg)){
      this.view.flxConfirmationMain.isVisible = false;
      this.view.flxFailure.isVisible = true;
      this.view.flxButtons.isVisible = false;
      this.view.lblError.text = transferObject.errmsg;
    }
    else {
      if (transferObject.isScheduled === "0")
        this.view.lblSuccessMessage.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.TransferCompleted");
      else
        this.view.lblSuccessMessage.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.TransferScheduled");
      this.view.flxConfirmationMain.isVisible = true;
      this.view.flxFailure.isVisible = false;
      this.view.flxButtons.isVisible = true;
      this.setSegmentData();
	  var navManager = applicationManager.getNavigationManager();
	  navManager.setEntryPoint("Feedback","frmMMConfirmation");
      var feedbackModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("FeedBackModule");
      feedbackModule.presentationController.showFeedbackPopup({from : "transaction"});
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setSegmentData : function () {
    var moneyMovementPresentationController = applicationManager.getModulesPresentationController("MoneyMovementModule");
    var segData = moneyMovementPresentationController.getConfirmationScreenData();
    this.view.segDetails.widgetDataMap = this.getWidgetDataMap();
    this.view.segDetails.setData(segData);
  },
  getWidgetDataMap : function () {
    var map = {
      lblTitle:"property",
      lblValue:"value",
    }
    return map;
  },
  cancelOnClick : function () {
    var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
    moneyMovementModule.cancelCommon();
  },
});