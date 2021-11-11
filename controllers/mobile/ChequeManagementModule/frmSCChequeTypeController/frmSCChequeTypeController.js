define({
  
init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
 
  preshow:function(){
   var scope=this;
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
   this.view.flxHeader.isVisible = false;
    }
    this.view.segOptions.onRowClick = function() {
            scope.segmentRowClick();
        };
        this.initActions();
  
  },
  initActions:function(){
    this.view.customHeader.flxBack.onClick = this.backOnClick;
//    this.view.customHeader.flxBack.onClick = function() {
//          var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
//          controller.commonFunctionForgoBack();
 //       };
        
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
  },
   backOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  backOnClick  ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmPayeeName");
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    }, 
  segmentRowClick:function(){
  scope_ChequePresentationController.chequeTypeSelection=this.view.segOptions.selectedRowItems[0].lblOption;
  var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
if( scope_ChequePresentationController.isReview===true){
        controller.commonFunctionForNavigation("frmSCReview");
      
    }else{
       if(scope_ChequePresentationController.chequeTypeSelection=== "Single Cheque"){
            controller.commonFunctionForNavigation("frmChequeNumber");
            }
            else{
                controller.commonFunctionForNavigation("frmSeriesCheque");
            }
    }
  },
  onCancelClick:function(){
    var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    presentation.commonCancel();
  }
  
});