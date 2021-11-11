define({
  init : function(){
  },
  preShow: function() {
    if (this.view.flxHeaderSearchbox.isVisible === true) {
      this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxSearch.isVisible = true;
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    }
    if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
    this.view.segAccounts.isVisible=true;
    this.view.flxNoTransactions.isVisible=false;
  },
});