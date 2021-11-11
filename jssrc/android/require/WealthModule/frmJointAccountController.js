define("WealthModule/userfrmJointAccountController", {
    index: "",
    selecdata: {},
    initialData: [],
    //Type your controller code here
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
            this.view.flxMainContainer.top = "0dp";
            this.view.tbxSearch.setFocus(false);
        } else {
            this.view.flxHeader.setVisibility(true);
        }
    },
    postShow: function() {
        this.initActions();
        var data = scope_WealthPresentationController.jointAccountDetails;
        this.setUiData(data);
        this.view.imgUnMask.src = "view.png";
    },
    initActions: function() {
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
        this.view.btnContactUs.onClick = this.OnClickContact;
        this.view.flxUnMask.onTouchEnd = this.OnClickUnMask;
    },
    OnClickUnMask: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = scope_WealthPresentationController.jointAccountDetails;
        if (this.view.imgUnMask.src === "viewicon.png") {
            this.view.lblAccountVal.text = applicationManager.getDataProcessorUtility().maskAccountNumberSuperStarPM(data.accountNumber);
            this.view.imgUnMask.src = "view.png";
        } else {
            this.view.lblAccountVal.text = data.accountNumber;
            this.view.imgUnMask.src = "viewicon.png";
        }
    },
    setUiData: function(data) {
        this.view.lblAccountVal.text = applicationManager.getDataProcessorUtility().maskAccountNumberSuperStarPM(data.accountNumber);
        this.view.lblCustomerNameVal.text = data.primaryHolder;
        if (data.jointHolders !== "") {
            this.view.segCurrency.setVisibility(true);
            var jointData = data.jointHolders;
            this.formSegmentData(jointData);
        } else {
            this.view.segCurrency.setVisibility(false);
        }
    },
    formSegmentData: function(jointData) {
        var scope = this;
        var currForm = kony.application.getCurrentForm();
        var data = jointData.split(',');
        var segData = [];
        var count = 1;
        for (var list in data) {
            var storeData;
            storeData = {
                jointHolder: "Joint Holder " + count + ":",
                jointHolderName: data[list],
            }
            count++;
            segData.push(storeData);
        }
        this.view.segCurrency.widgetDataMap = {
            lblJointHolder: "jointHolder",
            lblJointHolderVal: "jointHolderName",
        }
        this.view.segCurrency.setData(segData);
        currForm.forceLayout();
    },
    onBack: function() {
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.commonFunctionForgoBack();
    },
    OnClickContact: function() {},
});
define("WealthModule/frmJointAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b1adccc98f744b8fb5f3fb834ad75d47: function AS_Form_b1adccc98f744b8fb5f3fb834ad75d47(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bae7a7f22d4b4edc939ac1faf69936f5: function AS_Form_bae7a7f22d4b4edc939ac1faf69936f5(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_fd30940a2e364317b93c1f3def2ce6f1: function AS_Form_fd30940a2e364317b93c1f3def2ce6f1(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("WealthModule/frmJointAccountController", ["WealthModule/userfrmJointAccountController", "WealthModule/frmJointAccountControllerActions"], function() {
    var controller = require("WealthModule/userfrmJointAccountController");
    var controllerActions = ["WealthModule/frmJointAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
