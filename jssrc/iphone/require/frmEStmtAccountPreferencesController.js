define("userfrmEStmtAccountPreferencesController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxFooter.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxFooter.isVisible = false;
        }
        this.initActions();
        //this.setAccountsSegmentData();
        //this.setSegDefaultAcct();
        this.setSegDefaultAcctSingleMultiCIF();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.lblSelectAccount.text = kony.i18n.getLocalizedString("kony.mb.alerts.selectAccountAlertPref")
        this.view.segSelectAccounts.onRowClick = this.segSelectAccountsOnClick;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
    },
    setSegDefaultAcct: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmEStmtAccountPreferences");
        var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
        //	if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
        //        this.view.title = kony.i18n.getLocalizedString("kony.mb.default.account");
        //    }
        //    this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.default.account");
        this.view.segSelectAccounts.widgetDataMap = {
            "lblAccountHolderName": "nickName",
            "lblBankName": "bankName",
            "imgBank": "bankofamerica",
            "imgChevron": "imgChevron",
            "imgAccountType": "imgAccountType",
            "flxAccountType": "flxAccountType"
        };
        for (var i = 0; i < data.length; i++) {
            data[i].imgChevron = "chevron.png";
            data[i].bankofamerica = "konybanklogo.png";
            if (!isSingleCustomerProfile) {
                if (data[i].isBusinessAccount === "false") {
                    data[i].imgAccountType = {
                        "src": "businessaccount.png"
                    };
                    data[i].flxAccountType = {
                        "isvisible": true
                    }
                } else {
                    data[i].imgAccountType = {
                        "src": "personalaccount.png"
                    };
                    data[i].flxAccountType = {
                        "isvisible": true
                    }
                }
            } else {
                data[i].imgAccountType = {
                    "src": ""
                };
                data[i].flxAccountType = {
                    "isvisible": false
                }
            }
        }
        this.view.segSelectAccounts.setData(data);
    },
    segSelectAccountsOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var selectedSectionIndex = Math.floor(this.view.segSelectAccounts.selectedRowIndex[0]);
        var selectedRowIndex = Math.floor(this.view.segSelectAccounts.selectedRowIndex[1]);
        var selectedAcntRow = this.view.segSelectAccounts.data[selectedSectionIndex][1][selectedRowIndex];
        // var selectedAcntRow = this.view.segSelectAccounts.selectedIndex[1];
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        //var selectedRecord = this.view.segSelectAccounts.data[selectedAcntRow];
        var selectedRecord = this.view.segSelectAccounts.selectedRowItems[0];
        var selectedRecordID = selectedAcntRow.accountID;
        var data = [];
        selectedRecord.selectedRow = selectedAcntRow;
        navManager.setCustomInfo("frmEStmtAccountDetails", selectedRecord);
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsModule.presentationController.setaccountNum(selectedRecordID);
        settingsModule.presentationController.commonFunctionForNavigation("frmEStmtAccountDetails");
    },
    setSegDefaultAcctSingleMultiCIF: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var data = navManager.getCustomInfo("frmEStmtAccountPreferences");
            var processedAccounts = this.getOrganisationAccountsMap(data);
            var rowArray = [];
            var setdataArr = [];
            var configurationManager = applicationManager.getConfigurationManager();
            var profileAccess = applicationManager.getUserPreferencesManager().profileAccess;
            for (var key in processedAccounts) {
                var header;
                var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
                if (isSingleCustomerProfile === true || isSingleCustomerProfile === "true") {
                    header = key + " " + "Account";
                } else {
                    header = key;
                }
                var headerJson = {
                    "template": "flxTransHeader",
                    "lblHeader": header,
                    "imgUpArrow": {
                        "src": "arrowup.png"
                    },
                };
                rowArray = [];
                for (var i = 0; i < processedAccounts[key].length; i++) {
                    var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
                    if (isSingleCustomerProfile === true || isSingleCustomerProfile === "true") {
                        var iconVisible = false;
                        var left = "20dp";
                    } else {
                        if (profileAccess === "both") {
                            var iconVisible = true;
                            var left = "47dp";
                            var imgIcon = "businessaccount.png";
                            if (processedAccounts[key][i].isBusinessAccount === "true" || processedAccounts[key][i].isBusinessAccount === true) {
                                imgIcon = "businessaccount.png";
                            } else {
                                imgIcon = "personalaccount.png";
                            }
                        } else {
                            var iconVisible = false;
                            var left = "20dp";
                        }
                    }
                    var name = processedAccounts[key][i].accountName;
                    var rowJson = {
                        "template": "flxEStmtAccountPreferences",
                        "lblAccountHolderName": applicationManager.getPresentationUtility().formatText(name, 10, processedAccounts[key][i].accountID, 4),
                        "bankName": {
                            text: processedAccounts[key][i].accountType,
                            left: left
                        },
                        "imgAccountType": {
                            src: imgIcon
                        },
                        "flxAccountType": {
                            isVisible: iconVisible
                        },
                        "imgChevron": "chevron.png",
                        "bankofamerica": {
                            isVisible: false
                        },
                        "accountID": processedAccounts[key][i].accountID,
                        "accountName": processedAccounts[key][i].accountName,
                        "email": processedAccounts[key][i].email,
                        "nickName": processedAccounts[key][i].nickName,
                        "flxSeparator": {
                            isVisible: true
                        },
                        "data": processedAccounts[key][i],
                    };
                    rowArray.push(rowJson);
                }
                if (rowArray.length !== 0) {
                    setdataArr.push([headerJson, rowArray]);
                    this.view.segSelectAccounts.widgetDataMap = {
                        "lblAccountHolderName": "lblAccountHolderName",
                        "lblBankName": "bankName",
                        "imgBank": "bankofamerica",
                        "imgChevron": "imgChevron",
                        "imgAccountType": "imgAccountType",
                        "flxAccountType": "flxAccountType",
                        "flxSeparator": "flxSeparator",
                        "lblHeader": "lblHeader",
                        "imgUpArrow": "imgUpArrow",
                    };
                    this.view.segSelectAccounts.setData(setdataArr);
                    this.view.segSelectAccounts.setVisibility(true);
                } else {
                    this.view.segSelectAccounts.setVisibility(false);
                }
            }
        } catch (er) {
            kony.print(er);
        }
    },
    getOrganisationAccountsMap: function(accounts) {
        try {
            var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
            if (isSingleCustomerProfile === true || isSingleCustomerProfile === "true") {
                var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                var viewBindData = moneyMovementModule.processViewFormattedData(accounts);
                var processedAccounts = moneyMovementModule.orderByPriority(viewBindData);
                return processedAccounts;
            } else {
                var primaryCustomerId = applicationManager.getUserPreferencesManager().primaryCustomerId;
                var businessAccounts = this.getDistinctBusinessAccount(accounts);
                var orgAccounts = {};
                if (!kony.sdk.isNullOrUndefined(primaryCustomerId)) {
                    if (primaryCustomerId.type === 'personal') {
                        orgAccounts = {
                            "Personal Accounts": [],
                            "Business Accounts": []
                        };
                        orgAccounts["Personal Accounts"] = [];
                        for (var i = 0; i < businessAccounts.length; i++) {
                            orgAccounts[businessAccounts[i]] = [];
                        }
                        accounts.forEach(function(account) {
                            if (account.Membership_id === primaryCustomerId.id && account.isBusinessAccount === "false") orgAccounts["Personal Accounts"].push(account);
                            else {
                                if (account.isBusinessAccount === "true") {
                                    if (!kony.sdk.isNullOrUndefined(account.MembershipName) && account.MembershipName !== "") {
                                        if (kony.sdk.isNullOrUndefined(orgAccounts[account.MembershipName])) {
                                            orgAccounts[account.MembershipName] = Array(account);
                                        } else {
                                            orgAccounts[account.MembershipName].push(account);
                                        }
                                    }
                                } else {
                                    if (primaryCustomerId.id !== account.Membership_id) {
                                        if (kony.sdk.isNullOrUndefined(orgAccounts[account.MembershipName])) {
                                            orgAccounts[account.MembershipName] = Array(account);
                                        } else {
                                            orgAccounts[account.MembershipName].push(account);
                                        }
                                    }
                                }
                            }
                        });
                    } else {
                        orgAccounts["Personal Accounts"] = [];
                        for (var i = 0; i < businessAccounts.length; i++) {
                            orgAccounts[businessAccounts[i]] = [];
                        }
                        accounts.forEach(function(account) {
                            if (account.isBusinessAccount === "true") {
                                if (!kony.sdk.isNullOrUndefined(account.MembershipName) && account.MembershipName !== "") {
                                    if (kony.sdk.isNullOrUndefined(orgAccounts[account.MembershipName])) {
                                        orgAccounts[account.MembershipName] = Array(account);
                                    } else {
                                        orgAccounts[account.MembershipName].push(account);
                                    }
                                }
                            } else {
                                if (primaryCustomerId.id !== account.Membership_id) {
                                    if (kony.sdk.isNullOrUndefined(orgAccounts[account.MembershipName])) {
                                        orgAccounts[account.MembershipName] = Array(account);
                                    } else {
                                        orgAccounts[account.MembershipName].push(account);
                                    }
                                }
                            }
                        });
                    }
                } else {
                    orgAccounts["Personal Accounts"] = [];
                    for (var i = 0; i < businessAccounts.length; i++) {
                        orgAccounts[businessAccounts[i]] = [];
                    }
                    accounts.forEach(function(account) {
                        if (account.isBusinessAccount === "true") {
                            if (!kony.sdk.isNullOrUndefined(account.MembershipName) && account.MembershipName !== "") {
                                if (kony.sdk.isNullOrUndefined(orgAccounts[account.MembershipName])) {
                                    orgAccounts[account.MembershipName] = Array(account);
                                } else {
                                    orgAccounts[account.MembershipName].push(account);
                                }
                            }
                        }
                    });
                }
                return orgAccounts;
            }
        } catch (er) {
            kony.print(er)
        }
    },
    getDistinctBusinessAccount: function(accounts) {
        try {
            var businessAccounts = [];
            for (var i = 0; i < accounts.length; i++) {
                if (accounts[i].isBusinessAccount === "true") {
                    if (!kony.sdk.isNullOrUndefined(accounts[i].MembershipName) && accounts[i].MembershipName !== "") {
                        if (businessAccounts.indexOf(accounts[i].MembershipName) === -1) {
                            businessAccounts.push(accounts[i].MembershipName);
                        }
                    }
                }
            }
            businessAccounts.sort();
            return businessAccounts;
        } catch (er) {
            kony.print(er);
        }
    }
});
define("frmEStmtAccountPreferencesControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f0a81d3927e441a1aebcfa214489276e: function AS_Form_f0a81d3927e441a1aebcfa214489276e(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_aec204e274a440948bd3838569210762: function AS_Form_aec204e274a440948bd3838569210762(eventobject) {
        var self = this;
        this.frmPreshow();
    }
});
define("frmEStmtAccountPreferencesController", ["userfrmEStmtAccountPreferencesController", "frmEStmtAccountPreferencesControllerActions"], function() {
    var controller = require("userfrmEStmtAccountPreferencesController");
    var controllerActions = ["frmEStmtAccountPreferencesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
