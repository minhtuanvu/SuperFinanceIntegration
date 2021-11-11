define("TransactionModule/userfrmDownloadSearchResultController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setDatatoForm();
    },
    setDatatoForm: function() {
        var navMan = applicationManager.getNavigationManager();
        var searchData = navMan.getCustomInfo("frmAdvanceSearch");
        this.setTransactionType(searchData);
        this.setTimeRange();
        this.setAmountRange(searchData);
        this.view.flxbtnDownload.setVisibility(true);
        this.view.btnDownload.onClick = this.onDownloadClick;
        this.setChequeNumber(searchData);
    },
    setTransactionType: function(searchData) {
        if (searchData.searchTransactionType) this.view.lblTransactionTypeValue.text = searchData.searchTransactionType;
        else this.view.lblTransactionTypeValue.text = "All";
    },
    setChequeNumber: function(searchData) {
        this.view.flxCheckNumber.setVisibility(true);
        var toCheckNum, FromCheckNum;
        if (searchData.toCheckNumber) toCheckNum = searchData.toCheckNumber;
        if (searchData.fromCheckNumber) FromCheckNum = searchData.fromCheckNumber;
        if (toCheckNum != undefined && FromCheckNum != undefined) {
            this.view.lblCheckNumberValue.text = toCheckNum + "  -  " + FromCheckNum;
        } else if (toCheckNum != undefined && FromCheckNum == undefined) this.view.lblCheckNumberValue.text = toCheckNum;
        else if (toCheckNum == undefined && FromCheckNum != undefined) this.view.lblCheckNumberValue.text = FromCheckNum;
        else this.view.flxCheckNumber.setVisibility(false);
    },
    setTimeRange: function(searchData) {
        var navMan = applicationManager.getNavigationManager();
        var searchData = navMan.getCustomInfo("frmAdvanceSearch");
        this.view.flxTimeRange.setVisibility(true);
        var startDate, endDate;
        if (searchData.searchStartDate) startDate = searchData.searchStartDate;
        if (searchData.searchEndDate) endDate = searchData.searchEndDate;
        if (startDate != undefined && endDate != undefined) {
            var navMan = applicationManager.getNavigationManager();
            var searchData = navMan.getCustomInfo("frmAdvanceSearch");
            startDate = startDate.slice(0, 10);
            endDate = endDate.slice(0, 10);
            searchData.searchStartDate = startDate;
            searchData.searchEndDate = endDate;
            navMan.setCustomInfo("frmAdvanceSearch", searchData);
            this.view.lblTimeRangeValue.text = startDate + "  -  " + endDate;
        } else if (startDate != undefined && endDate == undefined) {
            startDate = startDate.slice(0, 10);
            searchData.searchStartDate = startDate;
            navMan.setCustomInfo("frmAdvanceSearch", searchData);
            this.view.lblTimeRangeValue.text = startDate;
        } else if (startDate == undefined && endDate != undefined) {
            endDate = endDate.slice(0, 10);
            searchData.searchEndDate = endDate;
            navMan.setCustomInfo("frmAdvanceSearch", searchData);
            this.view.lblTimeRangeValue.text = endDate;
        } else this.view.flxTimeRange.setVisibility(false);
    },
    setAmountRange: function(searchData) {
        this.view.flxAmountRange.setVisibility(true);
        var minAmnt, maxAmt;
        var Cm = applicationManager.getConfigurationManager();
        var currencyCode = Cm.getBaseCurrency();
        var forUtility = applicationManager.getFormatUtilManager();
        // 
        if (searchData.searchMinAmount) minAmnt = searchData.searchMinAmount;
        if (searchData.searchMaxAmount) maxAmt = searchData.searchMaxAmount;
        if (minAmnt != undefined && maxAmt != undefined) {
            minAmnt = forUtility.formatAmountandAppendCurrencySymbol(minAmnt, currencyCode);
            maxAmt = forUtility.formatAmountandAppendCurrencySymbol(maxAmt, currencyCode);
            if (minAmnt == maxAmt) this.view.lblAmountRangeValue.text = minAmnt;
            else this.view.lblAmountRangeValue.text = minAmnt + "  -  " + maxAmt;
        } else if (minAmnt != undefined && maxAmt == undefined) {
            minAmnt = forUtility.formatAmountandAppendCurrencySymbol(minAmnt, currencyCode);
            this.view.lblAmountRangeValue.text = minAmnt;
        } else if (minAmnt == undefined && maxAmt != undefined) {
            maxAmt = forUtility.formatAmountandAppendCurrencySymbol(maxAmt, currencyCode);
            this.view.lblAmountRangeValue.text = maxAmt;
        } else this.view.flxAmountRange.setVisibility(false);
    },
    onSegRowClick: function() {
        var fileType;
        var fType = this.view.segFormatDetails.selectedItems[0].lblTypeName;
        if (fType == "PDF") fileType = "pdf";
        else if (fType == "CSV") fileType = "csv";
        else if (fType == "Excel") fileType = "xls";
        else fileType = "pdf";
        var navMan = applicationManager.getNavigationManager();
        var searchData = navMan.getCustomInfo("frmAdvanceSearch");
        searchData.fileType = fileType;
        navMan.setCustomInfo("frmAdvanceSearch", searchData);
    },
    onDownloadClick: function() {
        var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accMod.presentationController.downloadTransactions();
    },
    navigateToBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnCancelClick: function() {
        var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        transModPresentationController.commonFunctionForNavigation("frmAdvanceSearch");
    }
});
define("TransactionModule/frmDownloadSearchResultControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_hdd788db2e5c4de182844e3b4417ba6f: function AS_Button_hdd788db2e5c4de182844e3b4417ba6f(eventobject) {
        var self = this;
        return self.btnCancelClick.call(this);
    },
    AS_FlexContainer_c6f3a830cc4745b99c55ede67d2c9bfd: function AS_FlexContainer_c6f3a830cc4745b99c55ede67d2c9bfd(eventobject) {
        var self = this;
        return self.navigateToBack.call(this);
    },
    AS_Form_f1b3b4074e4f4fe1ae562491d4b92d56: function AS_Form_f1b3b4074e4f4fe1ae562491d4b92d56(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_cdf8b0471c434f16b29a20ba0acc20a7: function AS_Form_cdf8b0471c434f16b29a20ba0acc20a7(eventobject) {
        var self = this;
        return self.preshow.call(this);
    },
    AS_Segment_f4e7bcebb64047faa2b1cad45b310cfb: function AS_Segment_f4e7bcebb64047faa2b1cad45b310cfb(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onSegRowClick.call(this);
    }
});
define("TransactionModule/frmDownloadSearchResultController", ["TransactionModule/userfrmDownloadSearchResultController", "TransactionModule/frmDownloadSearchResultControllerActions"], function() {
    var controller = require("TransactionModule/userfrmDownloadSearchResultController");
    var controllerActions = ["TransactionModule/frmDownloadSearchResultControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
