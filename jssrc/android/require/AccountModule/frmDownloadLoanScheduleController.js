   var installmentType = "All";
   var fileType = "pdf";
   define("AccountModule/userfrmDownloadLoanScheduleController", {
       init: function() {
           var navManager = applicationManager.getNavigationManager();
           var currentForm = navManager.getCurrentForm();
           applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
       },
       preshow: function() {
           this.view.segFormatDetails.onRowClick = this.onSegRowClickFormat;
           this.view.segTransactionTypeDetails.onRowClick = this.onSegRowClickTransactionType;
           this.view.imgArrow.onTouchEnd = this.onArrowClick;
           this.view.imgArrowFormat.onTouchEnd = this.onArrowFormatClick;
           this.view.btnDownload.onClick = this.onclickdownload;
           this.view.customHeader.flxBack.onClick = this.navigateToBack;
           this.view.customHeader.btnRight.onClick = this.navigateToBack;
       },
       onSegRowClickFormat: function() {
           var fType = this.view.segFormatDetails.selectedItems[0].lblTypeName;
           if (fType === "PDF") fileType = "pdf";
           else if (fType === "CSV") fileType = "csv";
       },
       onSegRowClickTransactionType: function() {
           if (this.view.segTransactionTypeDetails.selectedItems) installmentType = this.view.segTransactionTypeDetails.selectedItems[0].lblTypeName;
       },
       onclickdownload: function() {
           var downloadFileParams = {
               "installmentType": installmentType,
               "format": fileType,
               "transactionType": "LoanSchedule"
           };
           var ModulePresentationController = applicationManager.getModulesPresentationController("AccountModule");
           ModulePresentationController.downloadLoanScheduleFile(downloadFileParams);
       },
       onArrowClick: function() {
           if (this.view.flxSegTransactionTypeDetails.isVisible === true) {
               this.view.flxSegTransactionTypeDetails.isVisible = false;
               this.view.imgArrow.src = "arrowdown.png";
           } else {
               this.view.flxSegTransactionTypeDetails.isVisible = true;
               this.view.imgArrow.src = "arrowup.png";
           }
       },
       onArrowFormatClick: function() {
           if (this.view.flxSegSelectFormatDetails.isVisible === true) {
               this.view.flxSegSelectFormatDetails.isVisible = false;
               this.view.imgArrowFormat.src = "arrowdown.png";
           } else {
               this.view.flxSegSelectFormatDetails.isVisible = true;
               this.view.imgArrowFormat.src = "arrowup.png";
           }
       },
       navigateToBack: function() {
           var navMan = applicationManager.getNavigationManager();
           navMan.goBack();
       }
   });
define("AccountModule/frmDownloadLoanScheduleControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_jcbe849465f5495da3abb5d27321af45: function AS_Form_jcbe849465f5495da3abb5d27321af45(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_c7b1bcdca2164038ad9dc1d9096a87c1: function AS_Form_c7b1bcdca2164038ad9dc1d9096a87c1(eventobject) {
        var self = this;
        return self.preshow.call(this);
    }
});
define("AccountModule/frmDownloadLoanScheduleController", ["AccountModule/userfrmDownloadLoanScheduleController", "AccountModule/frmDownloadLoanScheduleControllerActions"], function() {
    var controller = require("AccountModule/userfrmDownloadLoanScheduleController");
    var controllerActions = ["AccountModule/frmDownloadLoanScheduleControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
