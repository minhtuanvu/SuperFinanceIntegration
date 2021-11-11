define({ 

 //Type your controller code here 
  preshowWealth : function(){
    this.view.HeaderSF.lblLifestyleSF.skin = "sknLblNormalHeaderSF";
    this.view.HeaderSF.lblWorkSF.skin = "sknLblNormalHeaderSF";
    this.view.HeaderSF.lblWealthSF.skin = "sknLblLifestyleHeaderSF";
  },
  
  navigateToWork : function(){
    var nWo = new kony.mvc.Navigation("SuperFinanceModule/frmWorkSF");
    nWo.navigate();
  }

 });