define("AuthModule/userfrmForgotSelectCountryController", {
    segmentData: null,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "55dp";
            this.view.flxBlueBg.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        this.view.customSearchbox.tbxSearch.text = "";
        this.initActions();
        this.lodCountryCodes();
        this.segmentData = this.view.segCountry.data;
    },
    initActions: function() {
        var scope = this;
        this.view.segCountry.onRowClick = function() {
            scope.segmentRowClick();
        };
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
            var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authModule.presentationController.commonFunctionForNavigation("frmForgotEnterPhoneNumber");
        };
        this.view.tbxSearch.onTouchEnd = function() {
            scope.showSearch();
        };
        this.view.customSearchbox.btnCancel.onClick = function() {
            scope.cancelSearch();
        };
        this.view.customSearchbox.tbxSearch.onTextChange = scope.tbxSearchOnTextChange;
    },
    showSearch: function() {
        var scope = this;
        this.view.flxNoTransactions.isVisible = false;
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxBlueBg.isVisible = false;
            if (this.view.flxHeaderSearchbox.isVisible === true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxMainContainer.skin = "slFbox";
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "55dp";
            } else {
                this.view.flxMainContainer.skin = "sknFlxffffff";
                this.view.customSearchbox.tbxSearch.text = "";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "110dp";
                kony.timer.schedule("timerId", function() {
                    scope.view.customSearchbox.tbxSearch.setFocus(true);
                }, 0.1, false);
                this.view.flxMainContainer.forceLayout();
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible === true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxMainContainer.skin = "slFbox";
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            } else {
                this.view.customSearchbox.tbxSearch.text = "";
                this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.flxMainContainer.skin = "sknFlxffffff";
                kony.timer.schedule("timerId", function() {
                    scope.view.customSearchbox.tbxSearch.setFocus(true);
                }, 0.1, false);
                this.view.flxMainContainer.forceLayout();
            }
        }
    },
    cancelSearch: function() {
        this.view.flxMainContainer.skin = "slFbox";
        this.view.flxNoTransactions.isVisible = false;
        this.view.tbxSearch.text = "";
        this.view.segCountry.isVisible = true;
        this.view.flxHeaderSearchbox.isVisible = false;
        this.view.flxSearch.isVisible = true;
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxBlueBg.isVisible = false;
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
        kony.timer.schedule("timerId1", function() {
            scope.view.customSearchbox.tbxSearch.setFocus(false);
        }, 0.1, false);
        this.view.segCountry.setData(this.segmentData);
    },
    setFormUI: function(data) {
        var widgetDataMap = {
            lblFrequency: "Name"
        };
        this.segmentData = data;
        this.view.segCountry.widgetDataMap = widgetDataMap;
        this.view.segCountry.setData(data);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    segmentRowClick: function() {
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var phoneData = {};
        var navManager = applicationManager.getNavigationManager();
        phoneData = navManager.getCustomInfo("frmForgot");
        phoneData = (phoneData === undefined) ? {} : phoneData;
        phoneData.code = this.view.segCountry.selectedRowItems[0].ISDCode;
        navManager.setCustomInfo("frmForgot", phoneData);
        authModule.presentationController.commonFunctionForNavigation("frmForgotEnterPhoneNumber");
        this.view.segCountry.removeAll();
        this.cancelSearch();
    },
    tbxSearchOnTextChange: function() {
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        var data = this.segmentData;
        var searchSegmentData = applicationManager.getDataProcessorUtility().commonSegmentSearch("Name", searchtext, data);
        if (searchSegmentData.length === 0) {
            this.view.segCountry.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
        } else {
            this.view.flxNoTransactions.isVisible = false;
            this.view.segCountry.isVisible = true;
            this.view.segCountry.setData(searchSegmentData);
        }
    },
    /**
     * @function
     *
     */
    lodCountryCodes: function() {
        const authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.getCountryCodes();
    },
});
define("AuthModule/frmForgotSelectCountryControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fce21359abd6401187b02472357cfb65: function AS_Form_fce21359abd6401187b02472357cfb65(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_eaa5f4b079814653b1787b96a846be74: function AS_Form_eaa5f4b079814653b1787b96a846be74(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i1b4ebe8aaf54e2a9969633421bcf2c0: function AS_BarButtonItem_i1b4ebe8aaf54e2a9969633421bcf2c0(eventobject) {
        var self = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    AS_BarButtonItem_jd9070c4d0b840e9970da0232d770569: function AS_BarButtonItem_jd9070c4d0b840e9970da0232d770569(eventobject) {
        var self = this;
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.commonFunctionForNavigation("frmForgotEnterPhoneNumber");
    }
});
define("AuthModule/frmForgotSelectCountryController", ["AuthModule/userfrmForgotSelectCountryController", "AuthModule/frmForgotSelectCountryControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotSelectCountryController");
    var controllerActions = ["AuthModule/frmForgotSelectCountryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
