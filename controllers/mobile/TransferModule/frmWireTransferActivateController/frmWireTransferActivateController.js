define({
  init : function(){
  },
  preShow: function(){
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.setFlowActions();
    this.view.segCards.isVisible = false;
  },
  setFlowActions : function(){
    var scope = this;
    this.view.flxDropdown.onClick = function(){
      scope.toggleSeg();
    };
    this.view.segCards.onRowClick = function(){
      scope.view.segCards.isVisible = false;
    };
    this.view.imgCheckbox.onTouchEnd = function(){
      scope.toggleChcekBox();
    };
    this.view.btnActivate.onClick = function(){
      scope.navToNoRecipient();
    };
    this.view.btnCancel.onClick = function(){
      scope.navToMakeTransfer();
    };
    this.view.rtxAgreeTermsConditions.onTouchEnd = function(){
      scope.getTermsAndConditions();
    };
  },
  getTermsAndConditions:function()
  {
    var transferModule = applicationManager.getModulesPresentationController("TransferModule");
    transferModule.getTnCcontent();
  },
  toggleChcekBox : function(){
    var self = this;
    if(this.view.imgCheckbox.src === "checkbox.png")
      self.view.imgCheckbox.src = "checkboxempty.png";
    else
      self.view.imgCheckbox.src = "checkbox.png";
  },
  navToNoRecipient : function(){
    var navObj = new kony.mvc.Navigation("frmWireTransferNoRecipient");
    navObj.navigate();
  },
  navToMakeTransfer : function(){
  },
  toggleSeg : function(){
	if(this.view.imgDropdown.src === "arrowdown.png"){
      this.view.segCards.isVisible = true;
      this.view.imgDropdown.src = "arrowup.png"
    }
    else{
        this.view.segCards.isVisible = false;
      this.view.imgDropdown.src = "arrowdown.png"
      }
  },
});