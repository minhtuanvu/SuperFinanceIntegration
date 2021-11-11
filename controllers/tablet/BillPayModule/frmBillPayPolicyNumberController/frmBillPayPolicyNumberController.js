define({
    keypadString: '',
    /*onNavigate: function(obj) {
        if (obj === undefined) {
            return;
        }
        if (obj === "addManually") {
        }
    },*/
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmPreshow: function() {
    this.view.flxHeader.setVisibility(!this.isIpad());
    this.view.txtEnter.setEnabled(false);
    var scope=this;
    this.setDataToForm();
    this.updateInputBullets();
    this.initActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
    btnRightOnClick: function() {
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        } else {
            this.view.flxHeader.setVisibility(true);
        }
    },
    //btnContinueOnClick: function() {},
    flxBackOnClick: function() {
      var navManager = applicationManager.getNavigationManager();
      navManager.goBack();
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length >= 1 && this.keypadString.length <= 18) {
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else if (this.keypadString.length > 18) {
            this.keypadString = this.keypadString.slice(0, 18);
            return;
        }
        this.updateInputBullets();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.incompleteCodeView();
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets();
        }
    },
    updateInputBullets: function() {
        if (this.keypadString === '') {
            this.view.txtEnter.text = '';
        } else {
            this.view.txtEnter.text = this.keypadString;
        }
    },
    enterCodePostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
  setDataToForm:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var phoneNo=billPayMod.presentationController.getBillPayPhoneNumber();
    if(phoneNo)
    {
      this.keypadString=phoneNo;
      this.view.txtEnter.text = this.keypadString;
      this.enterCodePostAction();
    }
    else{
      this.keypadString="";
      this.incompleteCodeView();
    }
  },
  isIpad: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        return deviceUtilManager.isIpad();
    },
  initActions : function(){
    var self = this;
    var billPayMod = self.getBillPayModule();
    this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
    this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    this.view.btnContinue.onClick = function(){
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayMod.presentationController.setBillPayPhoneNumber(self.keypadString);
      billPayMod.presentationController.commonFunctionForNavigation("frmBillPayVerifyDetails");
    };
    this.setRightPaneData();
  },
  getBillPayModule: function() {
        if (!this.billPayModule) {
            this.billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        }
        return this.billPayModule;
    },
  backNavigation: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    handleCancelClick: function() {
        this.getBillPayModule().presentationController.commonFunctionForNavigation("frmBillPay");
    },
  setRightPaneData: function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        var payeeName = recipientsManager.getBillPayPayeeData().payeeName;
        this.view.RightPane.lblCheckedRowName.text = payeeName;
    },
});