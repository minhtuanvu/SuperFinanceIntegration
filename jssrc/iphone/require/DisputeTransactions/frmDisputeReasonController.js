define("DisputeTransactions/userfrmDisputeReasonController", {
    selectedReason: -1,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setMasterDataToSegment();
        var navManager = applicationManager.getNavigationManager();
        var disputeData = navManager.getCustomInfo("frmDisputeTransactionDetails");
        this.assignDataToForm(disputeData);
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onCancel: function() {
        var navMan = applicationManager.getNavigationManager();
        applicationManager.getModulesPresentationController("DisputeTransactions").commonFunctionForNavigation(navMan.getEntryPoint("DisputeEntry"));
    },
    setMasterDataToSegment: function() {
        var scope = this;
        var confManager = applicationManager.getConfigurationManager();
        var disputeReason = confManager.getDisputeReasons();
        var segData = [];
        for (var i = 0; i < disputeReason.length; i++) {
            var temp = {
                "btnOption": {
                    "text": disputeReason[i],
                    "skin": "sknBtnOnBoardingOptionsInActive"
                }
            };
            segData.push(temp);
        }
        for (var i = 0; i < segData.length; i++) {
            segData[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            segData[i].btnOption.onClick = function() {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var navManager = applicationManager.getNavigationManager();
                var transactionData = navManager.getCustomInfo("frmDisputeTransactionDetails");
                transactionData.disputeReason = scope.view.segReasons.selectedItems[0].btnOption["text"];
                navManager.setCustomInfo("frmDisputeTransactionDetails", transactionData);
                var disputeModule = applicationManager.getModulesPresentationController("DisputeTransactions");
                disputeModule.commonFunctionForNavigation("frmDTConfirm");
                //scope.processAndNavigate();
            }
        }
        // scope.view.segReasons.data = segData;
        scope.view.segReasons.setData(segData);
    },
    processAndNavigate: function() {
        var scope = this;
        /* var data = {
           "data.disputeReason" : scope.view.segReasons.selectedItems[0].btnOption["text"]
         };
         var segData = scope.view.segReasons.data;
         for(var i=0;i<segData.length;i++){
           if(segData[i]["btnOption"]["text"] === data.disputeReason){
             segData[i]["btnOption"].skin="sknBtnOBSegSelected";
           }
           else{
             segData[i]["btnOption"].skin="sknBtnOnBoardingOptionsInActive";
           }
         }
         scope.view.segReasons.setData(segData);*/
        //disputeModule.presentationController.commonFunctionForNavigation("frmOBCreditCheck");
    },
    assignDataToForm: function(data) {
        var Reason = (data.disputeReason && data.disputeReason !== "" && data.disputeReason !== null) ? data.disputeReason : "";
        var segData = this.view.segReasons.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i]["btnOption"]["text"] === Reason) {
                segData[i]["btnOption"].skin = "sknBtnOBSegSelected";
            } else {
                segData[i]["btnOption"].skin = "sknBtnOnBoardingOptionsInActive";
            }
        }
        this.view.segReasons.setData(segData);
    }
});
define("DisputeTransactions/frmDisputeReasonControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c018cfa70ff14469a199c23071721cf6: function AS_Form_c018cfa70ff14469a199c23071721cf6(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b0fe89f31f8e4f77b5773cbb8d9899b2: function AS_Form_b0fe89f31f8e4f77b5773cbb8d9899b2(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_abffb05ddd1f44748625b75a53822da2: function AS_BarButtonItem_abffb05ddd1f44748625b75a53822da2(eventobject) {
        var self = this;
        this.onCancel();
    }
});
define("DisputeTransactions/frmDisputeReasonController", ["DisputeTransactions/userfrmDisputeReasonController", "DisputeTransactions/frmDisputeReasonControllerActions"], function() {
    var controller = require("DisputeTransactions/userfrmDisputeReasonController");
    var controllerActions = ["DisputeTransactions/frmDisputeReasonControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
