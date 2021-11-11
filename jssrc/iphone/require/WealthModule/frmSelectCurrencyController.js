define("WealthModule/userfrmSelectCurrencyController", {
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
        this.view.tbxSearch.text = "";
    },
    postShow: function() {
        this.initActions();
        if (scope_WealthPresentationController.currencyConv === true) {
            this.index = "";
            scope_WealthPresentationController.currencyConv = false;
            this.view.btnDone.setEnabled(false);
            this.view.btnDone.skin = "sknBtnE2E9F0Rounded";
            this.view.tbxSearch.text = "";
            //  this.view.tbxSearch.setFocus(false);
        }
        this.setSegmentData();
        if (scope_WealthPresentationController.currencyConvData === true) {
            this.initialData = this.view.segCurrency.data;
            scope_WealthPresentationController.currencyConvData = false;
        }
    },
    flagPaths: {
        "GBP": "britishpound.png",
        "CHF": "swissfranc.png",
        "USD": "usdollar.png",
        "CAD": "canadiandollar.png",
        "EUR": "euro.png"
    },
    setSegmentData: function() {
        var navManager = applicationManager.getNavigationManager();
        var accounts = navManager.getCustomInfo('frmSelectCurrency');
        var currencydetails = accounts.cashAcc;
        if (accounts.index) {
            this.index = accounts.index;
        }
        var results = [];
        for (var num in currencydetails) {
            var data = currencydetails[num];
            var fullcurrency = data.currency + ' - ' + data.currencyName;
            var storeData = {
                lblCurrencyType: fullcurrency,
                imgRadio: accounts.index && num === accounts.index ? "radiobtn_big.png" : "radiobuttoninactive.png",
                lblseparator: "",
                imgFlag: {
                    "src": this.flagPaths[data.currency] || "defaultflag.png",
                    "isVisible": true
                },
                balance: data.balance
            };
            results.push(storeData);
        }
        this.view.segCurrency.widgetDataMap = {
            "imgFlag": "imgFlag",
            "lblCurrencyType": "lblCurrencyType",
            "lblSeparator": "",
            "imgRadio": "imgRadio",
            "dummylbl": "balance"
        }
        this.view.segCurrency.setData(results);
        if (this.index !== "") {
            this.setSelection();
        }
    },
    initActions: function() {
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
        this.view.btnDone.onClick = this.confirmOnClick;
        this.view.segCurrency.onRowClick = this.toggleSelection;
        this.view.tbxSearch.onDone = this.onSearchCurrency;
    },
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        if (scope_WealthPresentationController.verify === true) {
            scope_WealthPresentationController.verify = false;
            navMan.navigateTo('frmConvertCurrencyVerify');
        } else {
            //  navMan.goBack();
            var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
            var params = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "navPage": "Portfolio",
                "graphDuration": "OneY"
            };
            wealthMod.getPortfolioAndGraphDetails(params);
        }
    },
    confirmOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        scope_WealthPresentationController.toConv = true;
        scope_WealthPresentationController.verify = false;
        var nonSelectedRow = [];
        var selectedRow = this.view.segCurrency.data[this.index];
        if (selectedRow === undefined) {
            this.view.btnDone.setEnabled(false);
            this.view.btnDone.skin = "sknBtnE2E9F0Rounded";
        } else {
            this.view.btnDone.setEnabled(true);
            this.view.btnDone.skin = "sknBtn0095e4RoundedffffffSSP26px";
            for (var i = 0; i < this.initialData.length; i++) {
                if (selectedRow.lblCurrencyType !== this.initialData[i].lblCurrencyType) {
                    nonSelectedRow.push(this.initialData[i]);
                }
            }
            var currencyData = navMan.getCustomInfo("frmSelectCurrency");
            if (kony.sdk.isNullOrUndefined(currencyData)) {
                var currencyData = {};
                currencyData.fromCurrencyDetails = selectedRow;
            } else {
                currencyData.fromCurrencyDetails = selectedRow;
            }
            //currencyData.formName="frmSelectCurrency";
            currencyData.existingCurrency = nonSelectedRow;
            currencyData.index = this.index;
            navMan.setCustomInfo("frmSelectCurrency", currencyData);
            var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
            wealthMod.setSellCurrency(selectedRow.lblCurrencyType.split('-')[0].trim().toUpperCase());
            scope_WealthPresentationController.fromCurrencyFlag = selectedRow.imgFlag.src;
            var formatUtil = applicationManager.getFormatUtilManager();
            scope_WealthPresentationController.fromAccountBalance = formatUtil.formatAmountandAppendCurrencySymbol(selectedRow.balance, selectedRow.lblCurrencyType.split('-')[0].trim());
            if (wealthMod.getVerifyFlow()) {
                //navMan.navigateTo("frmConvertCurrencyVerify");
                var data = wealthMod.getWealthObject();
                var param = {
                    "currencyPairs": data.sellCurrency + data.buyCurrency
                }
                wealthMod.getCurrencyRate(param);
            } else {
                wealthMod.getCurrencyList();
            }
        }
    },
    toggleSelection: function() {
        var selectedRowIndex = this.view.segCurrency.selectedRowIndex[1];
        var selectedRow = this.view.segCurrency.data[selectedRowIndex];
        this.index = selectedRowIndex;
        var segData = this.view.segCurrency.data;
        segData.forEach(el => el.imgRadio = "radiobuttoninactive.png");
        this.view.segCurrency.setData(segData);
        this.selecdata = selectedRow;
        selectedRow.imgRadio = "radiobtn_big.png";
        this.view.segCurrency.setDataAt(selectedRow, selectedRowIndex);
        this.view.btnDone.setEnabled(true);
        this.view.btnDone.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    setSelection: function() {
        var selectedRow;
        var dataFromResponse = this.view.segCurrency.data;
        for (var list in dataFromResponse) {
            if (dataFromResponse[list].lblCurrencyType === this.selecdata.lblCurrencyType) {
                this.index = parseInt(list);
                selectedRow = this.view.segCurrency.data[this.index];
            }
        }
        var segData = this.view.segCurrency.data;
        segData.forEach(el => el.imgRadio = "radiobuttoninactive.png");
        this.view.segCurrency.setData(segData);
        selectedRow.imgRadio = "radiobtn_big.png";
        this.view.segCurrency.setDataAt(selectedRow, this.index);
    },
    onSearchCurrency: function() {
        var results = [];
        var tbxText = this.view.tbxSearch.text;
        var searchKey = tbxText.toUpperCase();
        var searchColumn = "lblCurrencyType";
        var segmentData = this.view.segCurrency.data;
        if (tbxText !== "") {
            for (i = 0; i < segmentData.length; i++) {
                var currencyData = segmentData[i][searchColumn].toUpperCase();
                if (currencyData.includes(searchKey)) {
                    results.push(segmentData[i]);
                }
            }
        }
        this.view.segCurrency.widgetDataMap = {
            "imgFlag": "imgFlag",
            "lblCurrencyType": "lblCurrencyType",
            "lblSeparator": "",
            "imgRadio": "imgRadio"
        }
        if (tbxText !== "") {
            this.view.segCurrency.setData(results);
        } else {
            this.view.segCurrency.setData(this.initialData);
        }
    }
});
define("WealthModule/frmSelectCurrencyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b61392c95f7f46d5adb5f4a90e75f147: function AS_Form_b61392c95f7f46d5adb5f4a90e75f147(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c6e35b925a6142c881d68d055728c977: function AS_Form_c6e35b925a6142c881d68d055728c977(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_abf15904d0294d6a82eec5351757268a: function AS_Form_abf15904d0294d6a82eec5351757268a(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a6c31822c81a4d9ba4b000070cee8967: function AS_BarButtonItem_a6c31822c81a4d9ba4b000070cee8967(eventobject) {
        var self = this;
        this.onBack();
    }
});
define("WealthModule/frmSelectCurrencyController", ["WealthModule/userfrmSelectCurrencyController", "WealthModule/frmSelectCurrencyControllerActions"], function() {
    var controller = require("WealthModule/userfrmSelectCurrencyController");
    var controllerActions = ["WealthModule/frmSelectCurrencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
