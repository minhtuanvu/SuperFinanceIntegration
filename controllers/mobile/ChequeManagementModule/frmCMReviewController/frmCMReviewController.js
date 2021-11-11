define({
  initActions: function () {
    var scope=this;
    var currentFormObject = kony.application.getCurrentForm();
    var currentForm=currentFormObject.id;
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.view.flxFromAccount.onClick=scope.navigateToSelectAccount;
    this.view.flxDeliveryType.onClick=scope.navigateToDeliveryType;
    this.view.flxNoofChequeBooks.onClick=scope.navigateToChequeBooks;
    this.view.btnTransfer.onClick=scope.navigateToConfirmation;
    this.view.customHeader.btnRight.onClick = scope.cancelOnClick;
    this.view.customHeader.flxBack.onTouchEnd = scope.navigateBack;
  },
  preShow:function(){
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
    } else {
      this.view.flxHeader.isVisible = true;
    }
    var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    var transObj= presentation.getTransObject();
    if(transObj.transactionsNotes)
      this.view.txtDescription.text=transObj.transactionsNotes;
    else
      this.view.txtDescription.text="";
    this.renderFromData();
    this.renderDeliveryTypeData();
    this.renderNoOfChequeBooksData();
    this.renderFeeData();
  },
  renderFeeData:function(){
    var forUtility = applicationManager.getFormatUtilManager();
    var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    this.view.lblFeeValue.text=forUtility.formatAmountandAppendCurrencySymbol(presentation.fees,presentation.currencyCode);
  },
  renderFromData:function(){
    var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    var transObj=presentation.getTransObject();
    if(transObj.fromAccountNumber){
      this.view.lblFromAccountValue.text=presentation.processedName;
    }else{
      var chequeAccounts=presentation.getAccounts();
      var name = "";
      if (chequeAccounts[0].nickName === null || chequeAccounts[0].nickName === undefined) {
        name = chequeAccounts[0].accountName;
      } else {
        name = chequeAccounts[0].nickName;
      }
      var processedName = applicationManager.getPresentationUtility().formatText(name, 10, chequeAccounts[0].accountID, 4);
      var trasMan = applicationManager.getTransactionManager();
      trasMan.setTransactionAttribute("fromAccountNumber", chequeAccounts[0].accountID);
      trasMan.setTransactionAttribute("fromAccountName", name);
      this.view.lblFromAccountValue.text=processedName;
    }
  },
  renderDeliveryTypeData:function(){
    var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    if (presentation.deliveryType==="Self PickUp") {
      this.view.lblDeliveryTypeValue.text=presentation.deliveryType;
    }
    else{
      this.view.lblDeliveryTypeValue.text="Mailing Address";
      presentation.deliveryType="Mailing Address";
    }
  },
  renderNoOfChequeBooksData:function(){
    var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    if (presentation.chequeBooksCount==="") {
      this.view.lblChequeBookValue.text="1";
    }
    else{
      this.view.lblChequeBookValue.text=presentation.chequeBooksCount;
    }
  },
  postShow:function(){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  navigateToSelectAccount:function(){
    var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    presentation.navigateToAccountScreen();
    presentation.entryFormForAccounts="frmCMReview";
  },
  navigateToDeliveryType:function(){
    var deliveryType = applicationManager.getModulesPresentationController("ChequeManagementModule");
    deliveryType.commonFunctionForNavigation("frmDeliveryType");
  },
  navigateToChequeBooks:function(){
    var chequeBooks = applicationManager.getModulesPresentationController("ChequeManagementModule");
    chequeBooks.commonFunctionForNavigation("frmCMChequeBooks");
  },
  navigateToConfirmation:function(){
    var description=this.view.txtDescription.text;
    var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    presentation.createChequeBookRequest(description);
  },
  cancelOnClick:function(){
    var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    presentation.commonCancel();
  },
  navigateBack:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  }


});