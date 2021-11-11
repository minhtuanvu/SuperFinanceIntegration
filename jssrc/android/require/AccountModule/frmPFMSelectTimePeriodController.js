define("AccountModule/userfrmPFMSelectTimePeriodController", {
    init: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method pfmSelectTimePreshow
     * @return
     */
    pfmSelectTimePreshow: function() {
        try {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
            } else {
                this.view.flxHeader.isVisible = true;
            }
            this.setActions();
            // based on the selectedData, change the value in the segment
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method pfmSelectTimePostShow
     * @return
     */
    pfmSelectTimePostShow: function() {
        //  Post show
        try {
            var navManager = applicationManager.getNavigationManager();
            var selectedData = navManager.getCustomInfo("frmPFMSelectTimePeriod");
            if (selectedData.currentSelected === "month") {
                this.view.segCategories.selectedRowIndex = [0, 0];
            } else if (selectedData.currentSelected === "year") {
                this.view.segCategories.selectedRowIndex = [0, 1];
            }
            this.view.customHeader.flxBack.onClick = this.navigateBackToPFMHome.bind(this);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method setActions
     * @return
     */
    setActions: function() {
        try {
            this.view.btnViewChart.onClick = this.onViewChartClick.bind(this);
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method onViewChartClick
     * @return
     */
    onViewChartClick: function() {
        try {
            //get selected value
            var selectedRowData = this.view.segCategories.selectedRowItems[0];
            var selectedValue = "day";
            if (selectedRowData.lblName === "Monthly") {
                selectedValue = "month";
            } else if (selectedRowData.lblName === "Yearly") {
                selectedValue = "year";
            }
            var navManager = applicationManager.getNavigationManager();
            var selectedData = navManager.getCustomInfo("frmPFMSelectTimePeriod");
            selectedData.currentSelected = selectedValue;
            navManager.setCustomInfo("frmPFMSelectTimePeriod", selectedData);
            var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountModule.presentationController.commonFunctionForNavigation("frmPFMMyMoney");
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    },
    navigateBackToPFMHome: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});
define("AccountModule/frmPFMSelectTimePeriodControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i10e00f65807405384ceb3ceef65bb4a: function AS_Form_i10e00f65807405384ceb3ceef65bb4a(eventobject) {
        var self = this;
        this.pfmSelectTimePostShow();
    },
    AS_Form_dbb8316c1fb74b7ea38c91ac8f9ab14c: function AS_Form_dbb8316c1fb74b7ea38c91ac8f9ab14c(eventobject) {
        var self = this;
        this.pfmSelectTimePreshow();
    }
});
define("AccountModule/frmPFMSelectTimePeriodController", ["AccountModule/userfrmPFMSelectTimePeriodController", "AccountModule/frmPFMSelectTimePeriodControllerActions"], function() {
    var controller = require("AccountModule/userfrmPFMSelectTimePeriodController");
    var controllerActions = ["AccountModule/frmPFMSelectTimePeriodControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
