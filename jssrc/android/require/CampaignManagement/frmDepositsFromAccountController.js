define("CampaignManagement/userfrmDepositsFromAccountController", {
    segmentData: {},
    segmentHeight: 0,
    deletesegData: [],
    rowTemplateHeight: 70,
    sectionTemplateHeight: 60,
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.showPreshowSearch();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        this.deletesegData = [];
        this.initActions();
        this.setSegDatas();
        this.showPopUpSuccess();
        this.view.flxMainContainer.skin = "slFbox";
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        }
        this.view.segAccounts.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
        this.view.customHeader.btnRight.onClick = function() {
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
        }
        this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
        this.view.btnAddPayee.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.setEntryPoint("createBillPayPayee", "frmBillPayAllPayees");
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.setFlowType("createBillPayPayee");
            billPayMod.presentationController.clearBillPayPayeeData();
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPaySearchPayee");
        }
    },
    segmentRowClick: function() {
        var secindex, rowindex, frmaccdata;
        var accMan = applicationManager.getAccountManager();
        var toacc = accMan.getToTransferSupportedAccounts();
        if (Array.isArray(this.view.segAccounts.data[0])) {
            secindex = Math.floor(this.view.segAccounts.selectedRowIndex[0]);
            rowindex = Math.floor(this.view.segAccounts.selectedRowIndex[1]);
            frmaccdata = this.view.segAccounts.data[secindex][1][rowindex];
        } else {
            rowindex = Math.floor(this.view.segTransactions.selectedRowIndex[1]);
            frmaccdata = this.view.segAccounts.data[rowindex];
        }
        var data = {
            "nickName": frmaccdata.nickName,
            "availableBalance": frmaccdata.fromAccountBalance,
            "bankName": frmaccdata.bankName,
            "accountBalanceType": frmaccdata.accountBalanceType,
            "accountID": frmaccdata.accountID
        }
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.navToDepositAmount(frmaccdata);
    },
    tbxSearchOnTextChange: function() {
        var scope = this;
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var data = this.segmentData;
        var searchSegmentData = applicationManager.getDataProcessorUtility().commonSegmentSearch("payeeNickName", searchtext, data);
        this.deletesegData = searchSegmentData;
        for (var i = 0; i < searchSegmentData.length; i++) {
            searchSegmentData[i].flxDelete = {};
        }
        for (var i = 0; i < searchSegmentData.length; i++) {
            searchSegmentData[i].flxDelete.onClick = scope.deleteCallback;
        }
        //searchSegmentData=newSegmentData;
        //       	if(searchSegmentData.length===0){
        //       		this.view.flxNoTransactions.isVisible=true;
        //         	this.view.segAccounts.isVisible=false;
        // 		}
        // 		else{
        //     	    this.view.flxNoTransactions.isVisible=false;
        // 	        this.view.segAccounts.isVisible=true;
        //       		//this.view.segAccounts.setData(searchSegmentData);
        //         }
    },
    /* showSearch: function() {
         if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
             if (this.view.flxHeaderSearchbox.isVisible == true) {
                 this.view.flxHeaderSearchbox.isVisible = false;
                 this.view.flxSearch.isVisible = true;
                 this.view.flxMainContainer.top = "56dp";

             } else {
                 this.view.flxSearch.isVisible = false;
                 this.view.flxMainContainer.top = "40dp";
                 this.view.flxHeaderSearchbox.isVisible = true;
                 this.view.customSearchbox.tbxSearch.setFocus(true);
                 this.setSegData();
             }
         } else {
             if (this.view.flxHeaderSearchbox.isVisible == true) {
                 this.view.flxHeaderSearchbox.isVisible = false;
                 this.view.flxSearch.isVisible = true;
                 this.view.flxHeader.isVisible = true;
                 this.view.flxMainContainer.top = "56dp";
             } else {
                 this.view.flxSearch.isVisible = false;
                 this.view.flxHeader.isVisible = false;
                 this.view.flxMainContainer.top = "40dp";
                 this.view.flxHeaderSearchbox.isVisible = true;
                 this.view.customSearchbox.tbxSearch.setFocus(true);
             }
         }
     },*/
    showSearch: function() {
        if (this.view.flxHeaderSearchbox.isVisible === true) {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "0dp";
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxMainContainer.skin = "slFbox";
                this.view.flxSearch.isVisible = true;
                //this.view.segAccounts.setData(this.segmentData);
            } else {
                this.view.flxMainContainer.skin = "slFbox";
                this.view.flxMainContainer.top = "56dp";
                this.view.flxHeader.isVisible = true;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeaderSearchbox.isVisible = false;
                //this.view.segAccounts.setData(this.segmentData);
            }
            //         		if(this.segmentData.length===0){
            //       				this.view.flxNoTransactions.isVisible=true;
            //         			this.view.segAccounts.isVisible=false;
            //       			}
            //               	else{
            //          		   	this.view.flxNoTransactions.isVisible=false;
            //         			this.view.segAccounts.isVisible=true;
            //               this.deletesegData=this.segmentData;
            //         			//this.view.segAccounts.setData(this.segmentData);
            //         		}
        } else {
            var scope = this;
            this.view.flxMainContainer.skin = "sknFlxffffff";
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxSearch.isVisible = false;
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "40dp";
            this.view.flxHeaderSearchbox.isVisible = true;
            kony.timer.schedule("timerId", function() {
                scope.view.customSearchbox.tbxSearch.setFocus(true);
            }, 0.2, false);
        }
    },
    setSegDatas: function() {
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.getAccountsInfo();
    },
    setSegData: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        //var segmentData=billPayMod.presentationController.getAllBillPayPayees();
        var segmentData = [];
        this.view.segAccounts.widgetDataMap = {
            "lblTypeName": "lblTypeName",
            "lblTypeValue": "lblTypeValue",
            "imgBank": "BankLogo",
            "lblAccountName": "NickName",
            "lblAccountBalValue": "AvailableBalance",
            "lblBankName": "BankName",
            "lblAccountBal": "LastUpdated",
            "imgError": "errorIcon",
            "lblAccountNumber": "Last4DigitAccount"
        };
        //var newSegmentData=[];
        segmentData = billPayMod.presentationController.getAllBillPayPayees();
        for (var i = 0; i < segmentData.length; i++) {
            segmentData[i].flxDelete = {};
            if (segmentData[i]["eBillSupport"] === "true") {
                if (segmentData[i]["eBillStatus"] === "1") {
                    segmentData[i]["imgebill"] = {
                        "src": "ebill.png",
                        "isVisible": true
                    };
                } else segmentData[i]["imgebill"] = {
                    "src": "ebillinactive.png",
                    "isVisible": true
                };
            } else {
                segmentData[i]["imgebill"] = {
                    //"src":"ebillinactive.png",
                    "isVisible": false
                };
            }
        }
        for (var i = 0; i < segmentData.length; i++) {
            segmentData[i].flxDelete.onClick = scope.deleteCallback;
        }
        //segmentData=newSegmentData;
        //       if(segmentData.length===0){
        //         this.view.flxNoTransactions.isVisible=true;
        //         this.view.segAccounts.isVisible=false;
        //       }
        //       else{
        //         this.view.flxNoTransactions.isVisible=false;
        //         this.view.segAccounts.isVisible=true;
        //         //this.view.segAccounts.setData(segmentData);
        //       }
        this.deletesegData = segmentData;
        this.segmentData = segmentData;
    },
    showPreshowSearch: function() {
        if (this.view.flxHeaderSearchbox.isVisible === true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
    },
    showPopUpSuccess: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        if (billPayMod.presentationController.isDeleteSuccess) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBillPayPayeeSuccess"));
            billPayMod.presentationController.isDeleteSuccess = false;
        }
        if (billPayMod.presentationController.isUpdateNickNameSuccess) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.updateBillPayPayeeNickNameSuccess"));
            billPayMod.presentationController.isUpdateNickNameSuccess = false;
        }
        if (billPayMod.presentationController.isUpdateAddressSuccess) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.updateBillPayPayeeAddressSuccess"));
            billPayMod.presentationController.isUpdateAddressSuccess = false;
        }
        if (billPayMod.presentationController.isPayeeAdded) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.addedBillPayPayeeAddressSuccess"));
            billPayMod.presentationController.isPayeeAdded = false;
        }
    },
    bindGenericSuccess: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },
    deleteCallback: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        //     var rowid=scope.view.segAccounts.selectedRowIndex[1];
        //     var selectedPayeeDetails = scope.view.segAccounts.data[rowid];
        var rowid = scope.view.segAccounts.selectedIndex[1];
        var selectedPayeeDetails = scope.deletesegData[rowid];
        billPayMod.presentationController.setBillPayPayeeData(selectedPayeeDetails);
        var basicConfig = {
            message: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.deleteRecipient", "Do you want to delete the recipient"),
            alertIcon: null,
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            yesLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
            alertHandler: scope.deleteHandler
        };
        var pspConfig = {};
        applicationManager.getPresentationUtility().showAlertMessage(basicConfig, pspConfig);
    },
    deleteHandler: function(response) {
        if (response === true) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.deleteBillPayPayee();
        }
    },
    onCancelClick: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
    },
    setAccountsInfo: function(data) {
        data = JSON.stringify(data);
        data = JSON.parse(data);
        //     var segmentData=[];
        //      this.view.segAccounts.widgetDataMap = {
        //             "lblTypeName": "nickName",
        //             "lblTypeValue": "lblTypeValue",
        //             "imgBank": "BankLogo.png",
        //             "lblAccountName": "nickName",
        //             "lblAccountBalValue": "availableBalance",
        //             "lblBankName": "bankName",
        //             "lblAccountBal": "AvailableBalance",
        //             "imgError": "errorIcon.png",
        //             "lblAccountNumber": "Last4DigitAccount",
        //        "accountID":"accountID"
        //         };
        //     this.view.segAccounts.setData([]);
        //     this.view.segAccounts.setData(data);
        this.setSegmentData(data);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setSegmentData: function(data) {
        //     var navMan = applicationManager.getNavigationManager();
        //     var data=navMan.getCustomInfo("frmMMTransferFromAccount");
        if (!kony.sdk.isNullOrUndefined(data)) {
            var accountsList = data;
            this.view.segAccounts.widgetDataMap = this.getWidgetDataMap();
            var campMod = applicationManager.getModulesPresentationController("CampaignManagement");
            //this.processedData=moneyMovementModule.filterFromAccount(moneyMovementModule.processAccountsData(accountsList,"from"));
            this.processedData = campMod.processAccountsData(accountsList, "from");
            var viewBindData = campMod.processViewFormattedData(this.processedData);
            viewBindData = campMod.orderByPriority(viewBindData);
            var segData = [];
            if (this.processedData.length > 0) {
                for (var key in viewBindData) {
                    var sectionHeaderData = {};
                    var combinedData = [];
                    if (key != "CreditCard") {
                        if (viewBindData[key].length > 1) {
                            sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.My") + " " + key + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.accounts") + " (" + viewBindData[key].length + ")";
                        } else {
                            sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.My") + " " + key + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.account") + " (" + viewBindData[key].length + ")";
                        }
                    } else {
                        if (viewBindData[key].length > 1) {
                            sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.My") + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.creditcards") + " (" + viewBindData[key].length + ")";
                        } else {
                            sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.My") + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.creditcard") + " (" + viewBindData[key].length + ")";
                        }
                    }
                    var rowDataForSection = campMod.sortByPrefrence(viewBindData[key]);
                    if (rowDataForSection.length > 0) {
                        combinedData.push(sectionHeaderData);
                        combinedData.push(rowDataForSection);
                        combinedData.push(rowDataForSection);
                        this.calcualteSegmentRenderedDataHeight(1, rowDataForSection.length);
                        segData.push(combinedData);
                    }
                }
            }
            this.sec = -1;
            this.row = -1;
            var transObj = campMod.getTransObject();
            for (var i = 0; i < segData.length; i++) {
                for (var j = 0; j < segData[i][1].length; j++) {
                    if (transObj && transObj.fromAccountNumber == segData[i][1][j].accountID) {
                        segData[i][1][j].flxMain = {
                            "skin": "sknFlxF6F6F6"
                        };
                        this.sec = i;
                        this.row = j;
                    } else {
                        segData[i][1][j].flxMain = {
                            "skin": "slFbox"
                        };
                    }
                }
            }
            if (segData.length > 0) {
                this.view.flxNoTransactions.isVisible = false;
                this.view.segAccounts.isVisible = true;
                this.view.segAccounts.setData(segData);
                this.segmentData = this.view.segAccounts.data;
            } else {
                this.segmentData = [];
                this.view.flxNoTransactions.isVisible = true;
                this.view.lblNoTransaction.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.NoResultsFound");
                this.view.segAccounts.isVisible = false;
            }
        } else {
            this.view.segAccounts.isVisible = false;
            this.view.flxNoAccounts.isVisible = true;
            this.view.lblNoAccounts.isVisible = true;
            this.view.lblAddABankAccount.isVisible = true;
            this.view.btnViewTransferActivities.isVisible = false;
            this.view.btnApplyForNewAccount.isVisible = true;
        }
    },
    getWidgetDataMap: function() {
        var dataMap = {
            lblAccountName: "processedName",
            lblBankName: "bankName",
            lblAccountBalValue: "availableBalance",
            lblAccountBal: "accountBalanceType",
            lblHeader: "lblHeader",
            flxMain: "flxMain"
        };
        return dataMap;
    },
    calcualteSegmentRenderedDataHeight: function(numberOfSections, numberOfRows) {
        this.segmentHeight = parseInt(this.segmentHeight) + (numberOfSections * this.sectionTemplateHeight);
        if (numberOfRows) {
            this.segmentHeight = this.segmentHeight + (numberOfRows * this.rowTemplateHeight);
        }
    }
});
define("CampaignManagement/frmDepositsFromAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_hb0245bd57754b4c82f4cfdb1dd30979: function AS_Form_hb0245bd57754b4c82f4cfdb1dd30979(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a893c73e9c094e5c8982273ee5c18f35: function AS_Form_a893c73e9c094e5c8982273ee5c18f35(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e81ed62ecc1d4d2abc1e7e1c365d6ee2: function AS_BarButtonItem_e81ed62ecc1d4d2abc1e7e1c365d6ee2(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("CampaignManagement/frmDepositsFromAccountController", ["CampaignManagement/userfrmDepositsFromAccountController", "CampaignManagement/frmDepositsFromAccountControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmDepositsFromAccountController");
    var controllerActions = ["CampaignManagement/frmDepositsFromAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
