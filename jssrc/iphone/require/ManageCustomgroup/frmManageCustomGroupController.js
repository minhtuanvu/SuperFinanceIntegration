define("ManageCustomgroup/userfrmManageCustomGroupController", function() {
    return {
        timerCounter: 0,
        onInit: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
            this.view.preShow = this.preShowfunc;
        },
        onNavigate: function() {
            try {} catch (error) {
                kony.print(" onnavigateerror-->" + error);
            }
        },
        preShowfunc: function() {
            try {
                if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                    this.view.customHeader.isVisible = false;
                    this.view.flxManageFooter.isVisible = true;
                    this.view.flxHamburger.isVisible = false;
                } else {
                    this.view.customHeader.isVisible = true;
                    this.view.flxManageFooter.isVisible = false;
                }
                this.bindevents();
                this.resetForm();
                this.fetchManageView();
            } catch (error) {
                kony.print("preShowfunc-->" + error);
            }
        },
        ///////********bindevents is used set thewidgets onclick and initialise the data*****////////
        bindevents: function() {
            try {
                this.view.segMansgeCustomeGroup.onRowClick = this.rowClickManageCustomview;
                var configManager = applicationManager.getConfigurationManager();
                if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                    var MenuHandler = applicationManager.getMenuHandler();
                    MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENUACCOUNTS);
                }
                this.view.customHeader.flxBack.onClick = this.backNavigation;
                this.view.onDeviceBack = this.backNavigation;
                this.view.customHeader.flxSearch.onClick = this.addCustomGroup;
                this.view.customGroupDonePopup.btnDone.onClick = this.closeDeletePopup;
                this.view.flxEditCustomViewDonPopup.onClick = this.dummyFunction;
            } catch (error) {
                alert(" bindevents-->" + error);
            }
        },
        dummyFunction: function() {},
        rowClickManageCustomview: function() {
            try {
                var selecteditemsAccountid = this.view.segMansgeCustomeGroup.selectedItems[0].accountIds;
                var selectedItems = this.view.segMansgeCustomeGroup.selectedItems[0];
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("CustomviewSelectedAccountIds", selecteditemsAccountid);
                navManager.setCustomInfo("customViewDetails", selectedItems);
                navManager.navigateTo("frmCustomView");
            } catch (er) {
                alert(er);
            }
        },
        resetForm: function() {
            try {
                this.view.segMansgeCustomeGroup.isVisible = true;
                this.view.lblNodatafound.isVisible = false;
                this.view.segMansgeCustomeGroup.removeAll();
                var navMan = applicationManager.getNavigationManager();
                var formFlow = navMan.getCustomInfo("formFlow");
                if (formFlow === "deleteShowPopup") {
                    this.view.flxEditCustomViewDonPopup.isVisible = true;
                    this.view.customGroupDonePopup.lblMessage.text = "Custom group has been Deleted successfully";
                    navMan.setCustomInfo("formFlow", "");
                } else {
                    this.view.flxEditCustomViewDonPopup.isVisible = false;
                }
            } catch (error) {
                kony.print(" bindevents-->" + error);
            }
        },
        closeDeletePopup() {
            try {
                var navMan = applicationManager.getNavigationManager();
                var keyvalue = "deleteHidePopup";
                navMan.setCustomInfo("formFlow", keyvalue);
                this.view.flxEditCustomViewDonPopup.isVisible = false;
            } catch (er) {
                kony.print(er);
            }
        },
        backNavigation: function() {
            try {
                var navManager = applicationManager.getNavigationManager();
                navManager.navigateTo("frmFilterAccounts");
            } catch (er) {
                kony.print(er);
            }
        },
        addCustomGroup: function() {
            try {
                var navManager = applicationManager.getNavigationManager();
                var formFlow = "CreateCustomview";
                var isBack = {
                    "isBackSelectAccount": false,
                };
                navManager.setCustomInfo("isBackfrmCreateCustomGroup", isBack);
                navManager.setCustomInfo("Customview", formFlow);
                navManager.navigateTo("frmSelectAccounts");
            } catch (er) {
                kony.print(er);
            }
        },
        fetchManageView: function() {
            try {
                applicationManager.getPresentationUtility().showLoadingScreen();
                this.view.segMansgeCustomeGroup.isVisible = true;
                var navObj = {
                    requestData: {},
                    formData: this
                };
                var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AccountModule');
                accountModule.presentationController.getCustomview(navObj);
            } catch (er) {
                kony.print(er);
            }
        },
        ///////********getCustomviewViewSuccessCallBack is used set the manageList*****////////
        getCustomviewViewSuccessCallBack: function(response) {
            try {
                if (response.length === 0) {
                    this.view.segMansgeCustomeGroup.isVisible = false;
                    this.view.lblNodatafound.text = "There are currently no Custom Views to display";
                    this.view.lblNodatafound.isVisible = true;
                } else {
                    if (Array.isArray(response)) {
                        this.view.segMansgeCustomeGroup.widgetDataMap = {
                            "lblTitle": "lblTitle",
                            "imgArrow": "imgArrow",
                            "lblSeparator": "lblSeparator",
                            "flxsep": "flxsep",
                            "flxCategory": "flxCategory",
                            "flxcontent": "flxcontent"
                        };
                        this.view.segMansgeCustomeGroup.setData(response);
                    }
                }
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            } catch (error) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                kony.print("managegroupListLoad -->" + error);
            }
        },
        fetchErrorcallBack: function(response) {
            try {
                if (!kony.sdk.isNullOrUndefined(response)) {
                    var scopeObj = this;
                    var errorResponse = response.errorMessage;
                    this.view.flxPopup.customPopup.lblPopup.text = errorResponse;
                    this.timerCounter = parseInt(this.timerCounter) + 1;
                    var timerId = "timerPopupError" + this.timerCounter;
                    this.view.flxPopup.skin = "sknFlxf54b5e";
                    this.view.customPopup.imgPopup.src = "errormessage.png";
                    this.view.flxPopup.setVisibility(true);
                    kony.timer.schedule(timerId, function() {
                        scopeObj.view.flxPopup.setVisibility(false);
                    }, 1.5, false);
                }
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            } catch (error) {
                kony.print("frmACHTransactions fetchErrorcallBack-->" + error);
            }
        },
    };
});
define("ManageCustomgroup/frmManageCustomGroupControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e837690611a7421aa720e6cf3e4073e4: function AS_Form_e837690611a7421aa720e6cf3e4073e4(eventobject) {
        var self = this;
        this.onInit();
    },
    AS_BarButtonItem_af06809baa5340d292ae7cfb1f085c0e: function AS_BarButtonItem_af06809baa5340d292ae7cfb1f085c0e(eventobject) {
        var self = this;
        this.backNavigation();
    },
    AS_BarButtonItem_d360a88b40ba43599fd9ce1d870b806a: function AS_BarButtonItem_d360a88b40ba43599fd9ce1d870b806a(eventobject) {
        var self = this;
        this.addCustomGroup();
    }
});
define("ManageCustomgroup/frmManageCustomGroupController", ["ManageCustomgroup/userfrmManageCustomGroupController", "ManageCustomgroup/frmManageCustomGroupControllerActions"], function() {
    var controller = require("ManageCustomgroup/userfrmManageCustomGroupController");
    var controllerActions = ["ManageCustomgroup/frmManageCustomGroupControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
