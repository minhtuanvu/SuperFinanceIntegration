define({
  preShowUiSettings:function(){
    var loggerManager = applicationManager.getLoggerManager();
    try{
      loggerManager.log("#### start frmUpdatePasswordController : preShowUiSettings ####");
      if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
        this.view.flxHeader.isVisible = false;
      }
      else{
        this.view.flxHeader.customHeader.lblLocateUs.text = "Update Password";
        this.view.flxHeader.isVisible = true;
      }
    }catch(err){
      loggerManager.log("#### in catch "+JSON.stringify(err)+" ####");
    }
  }
});