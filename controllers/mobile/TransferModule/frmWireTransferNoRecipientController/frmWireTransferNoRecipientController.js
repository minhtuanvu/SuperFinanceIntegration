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
    this.view.flxSegRecipientDetails.isVisible = false;
    this.view.segCards.isVisible = false;
  },
  setFlowActions : function(){
    var scope = this;
    this.view.flxDropdown.onClick = function(){
      scope.view.segCards.isVisible = true;
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
});