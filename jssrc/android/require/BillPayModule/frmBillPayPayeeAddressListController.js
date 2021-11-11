define("BillPayModule/userfrmBillPayPayeeAddressListController", {
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPaySearchPayee");
        }
        this.view.customHeader.btnRight.onClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPay");
        }
        this.view.segAddresses.onRowClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEnterAccNo");
        }
        this.view.flxAddManually.onClick = function() {
            var ntf = new kony.mvc.Navigation("frmBillPayEditName");
            ntf.navigate("addManually");
        }
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
    },
    showSearch: function() {
        var scope = this;
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible === true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.skin = "slfSbox";
                this.view.flxMainContainer.top = "56dp";
            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxMainContainer.skin = "sknFlxScrlffffff";
                this.view.flxHeaderSearchbox.isVisible = true;
                //  this.view.customSearchbox.tbxSearch.setFocus(true);
                kony.timer.schedule("timerId", function() {
                    scope.view.customSearchbox.tbxSearch.setFocus(true);
                }, 0.2, false);
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible === true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.skin = "slfSbox";
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.skin = "sknFlxScrlffffff";
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                kony.timer.schedule("timerId", function() {
                    scope.view.customSearchbox.tbxSearch.setFocus(true);
                }, 0.2, false);
                // this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        }
    }
});
define("BillPayModule/frmBillPayPayeeAddressListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d8edde9aaedb4809a0ced1972b357ba1: function AS_Form_d8edde9aaedb4809a0ced1972b357ba1(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_dc031b42a7bb4ae9b60cc6f30e76f9b7: function AS_BarButtonItem_dc031b42a7bb4ae9b60cc6f30e76f9b7(eventobject) {
        var self = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("BillPayModule/frmBillPayPayeeAddressListController", ["BillPayModule/userfrmBillPayPayeeAddressListController", "BillPayModule/frmBillPayPayeeAddressListControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayPayeeAddressListController");
    var controllerActions = ["BillPayModule/frmBillPayPayeeAddressListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
