define("CheckDepositModule/userfrmDepositToCDController", {
    depositToCDInit: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.renderTitleBar();
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.setSegmentData();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (isIphone) {
            this.view.flxHeader.setVisibility(false);
        }
    },
    setSegmentData: function() {
        var segData = [{
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.DepositToMyKonyAccounts"),
            "imgArrow": "chevron.png"
        }, ];
        this.view.segTransactionMode.setData(segData);
    },
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    segTransactionModeRowClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var  checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        var depObj = checkDepositModule.presentationController.getDepositObjInView();
        if (depObj.amount) {
            checkDepositModule.presentationController.getCheckDepositTransactionalLimits();
        } else {
            checkDepositModule.presentationController.getToAccounts(false);
        }
    }
});
define("CheckDepositModule/frmDepositToCDControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee: function AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee(eventobject) {
        var self = this;
        this.backNavigation();
    },
    AS_Form_dc30a8fdecb943ee9695212405868f6d: function AS_Form_dc30a8fdecb943ee9695212405868f6d(eventobject) {
        var self = this;
        this.depositToCDInit();
    },
    AS_Form_b23b960ee3584ea2bd7b9af9e91d710f: function AS_Form_b23b960ee3584ea2bd7b9af9e91d710f(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_Segment_i62943b595dc419bbfe50f82aec5df2f: function AS_Segment_i62943b595dc419bbfe50f82aec5df2f(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.segTransactionModeRowClick();
    }
});
define("CheckDepositModule/frmDepositToCDController", ["CheckDepositModule/userfrmDepositToCDController", "CheckDepositModule/frmDepositToCDControllerActions"], function() {
    var controller = require("CheckDepositModule/userfrmDepositToCDController");
    var controllerActions = ["CheckDepositModule/frmDepositToCDControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
