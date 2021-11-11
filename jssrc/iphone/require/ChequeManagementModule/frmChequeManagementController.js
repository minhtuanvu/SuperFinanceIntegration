define("ChequeManagementModule/userfrmChequeManagementController", {
    tabSelection: "",
    scope: this,
    hasStopPaymentFeat: false,
    hasChequeRequestFeat: false,
    hasViewChequesFeat: false,
    nbTabs: 0,
    currentView: "",
    hasCreateChequeBookRequestPermission: false,
    hasCreateNewStopPaymentPermission: false,
    onNavigate: function(varPass, showView) {
        /*   if(!varPass){
		this.renderStopChequeView(); 
    } */
        var navMan = applicationManager.getNavigationManager();
        try {
            var tabSelected = navMan.getCustomInfo("frmChequeManagement").TAB;
        } catch (e) {
            var tabSelected = "";
        }
        if (tabSelected === "ChequeBook") {
            this.currentView = "ChequeBookView";
            this.renderChequeBooksView();
        } else if (tabSelected === "MyCheque" || varPass == "MyChequesView" || showView == "MyChequesView") {
            this.currentView = "MyChequesView";
            this.renderMyChequesView();
        } else {
            this.currentView = "";
        }
    },
    initActions: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
        this.view.segStopCheque.onRowClick = scope.navigateToTransactionDetails;
        this.view.flxSearchIcon.onClick = scope.navigateToSearch;
        this.view.flxAccountDetails.onClick = scope.navigateToAccounts;
        this.view.customHeader.flxBack.onTouchEnd = scope.navigateCustomBack;
        this.view.flxStopChequeLabel.onClick = scope.renderStopChequeView;
        this.view.flxChequeBooksLabel.onClick = scope.renderChequeBooksView;
        this.view.flxMyChequesLabel.onClick = scope.renderMyChequesView;
        this.view.segStopCheque.removeAll();
    },
    navigateCustomBack: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
    },
    renderStopChequeView: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        this.view.segStopCheque.removeAll();
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        this.tabSelection = "StopCheque";
        presentation.fetchStopChequeRequestsForAccount();
        this.view.segStopCheque.selectedRowIndex = [0, 0];
        this.view.flxStopChequeLabel.skin = "sknFlx1a98ff";
        this.view.lblStopCheque.skin = "sknLblffffffSSPReg26px";
        this.view.flxChequeBooksLabel.skin = "sknFlxffffff";
        this.view.lblChequeBooks.skin = "sknlbl003E7536px";
        this.view.flxMyChequesLabel.skin = "sknFlxffffff";
        this.view.lblMyCheques.skin = "sknlbl003E7536px";
        this.view.flxStopCheques.top = "110dp";
        this.view.btnNewRequest.text = kony.i18n.getLocalizedString("kony.mb.chequemanagement.newstopchequerequest");
        this.view.btnNewRequest.onClick = function() {
            var presentationController = applicationManager.getModulesPresentationController("ChequeManagementModule");
            presentationController.commonFunctionForNavigation("frmPayeeName");
        };
        this.hasCreateNewStopPaymentPermission ? this.view.btnNewRequest.isVisible = true : this.view.btnNewRequest.isVisible = false;
        this.view.flxSearchInfo.isVisible = false;
        scope_ChequePresentationController.isReview = "";
        scope_ChequePresentationController.isInitial = true;
    },
    renderChequeBooksView: function() {
        this.tabSelection = "ChequeBook";
        applicationManager.getPresentationUtility().showLoadingScreen();
        this.view.segStopCheque.removeAll();
        this.view.segStopCheque.selectedRowIndex = [0, 0];
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.fetchTransactionForAccount();
        this.view.flxStopChequeLabel.skin = "sknFlxffffff";
        this.view.lblStopCheque.skin = "sknlbl003E7536px";
        this.view.flxChequeBooksLabel.skin = "sknFlx1a98ff";
        this.view.lblChequeBooks.skin = "sknLblffffffSSPReg26px";
        this.view.flxMyChequesLabel.skin = "sknFlxffffff";
        this.view.lblMyCheques.skin = "sknlbl003E7536px";
        this.view.flxStopCheques.top = "110dp";
        this.view.btnNewRequest.text = kony.i18n.getLocalizedString("kony.mb.chequeManagement.newchequeBookRequest");
        this.view.btnNewRequest.onClick = function() {
            presentation.btnNewRequestOnClick();
        };
        this.hasCreateChequeBookRequestPermission ? this.view.btnNewRequest.isVisible = true : this.view.btnNewRequest.isVisible = false;
        this.view.flxSearchInfo.isVisible = false;
    },
    renderMyChequesView: function() {
        this.tabSelection = "MyCheque";
        applicationManager.getPresentationUtility().showLoadingScreen();
        this.view.segStopCheque.removeAll();
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.getChequeSupplements();
        this.view.segStopCheque.selectedRowIndex = [0, 0];
        this.view.flxStopChequeLabel.skin = "sknFlxffffff";
        this.view.lblStopCheque.skin = "sknlbl003E7536px";
        this.view.flxChequeBooksLabel.skin = "sknFlxffffff";
        this.view.lblChequeBooks.skin = "sknlbl003E7536px";
        this.view.flxMyChequesLabel.skin = "sknFlx1a98ff";
        this.view.lblMyCheques.skin = "sknLblffffffSSPReg26px";
        this.view.flxStopCheques.top = "180dp";
        this.view.btnNewRequest.text = kony.i18n.getLocalizedString("kony.mb.chequemanagement.newstopchequerequest");
        this.view.btnNewRequest.onClick = function() {
            var presentationController = applicationManager.getModulesPresentationController("ChequeManagementModule");
            presentationController.commonFunctionForNavigation("frmPayeeName");
        };
        this.hasCreateNewStopPaymentPermission ? this.view.btnNewRequest.isVisible = true : this.view.btnNewRequest.isVisible = false;
        this.view.flxSearchInfo.isVisible = true;
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMenu.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxMenu.isVisible = false;
        }
        this.view.flxSearchInfo.isVisible = false;
        this.setFooter();
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler = applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENUCHEQUEMANAGEMENT);
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        this.view.lblAccountDetails.text = presentation.processedName;
        var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
        var isIconVisibile = this.setIconVisibility();
        if (isIconVisibile) {
            this.view.imgAccountType.src = presentation.isBusinessPayee === "false" ? "personalaccount.png" : "businessaccount.png"
            this.view.imgAccountType.isVisible = true;
            this.view.flxAccountType.isVisible = true;
            this.view.lblAccountDetails.left = "40dp";
        } else {
            this.view.imgAccountType.src = "";
            this.view.imgAccountType.isVisible = false;
            this.view.flxAccountType.isVisible = false;
            this.view.lblAccountDetails.left = "20dp";
        }
        var navMan = applicationManager.getNavigationManager();
        this.nbTabs = 0;
        this.hasStopPaymentFeat = configManager.checkUserFeature("STOP_PAYMENT_REQUEST");
        if (this.hasStopPaymentFeat) {
            this.nbTabs += 1;
        }
        this.view.flxStopChequeLabel.setVisibility(this.hasStopPaymentFeat);
        this.hasChequeRequestFeat = configManager.checkUserFeature("CHEQUE_BOOK_REQUEST");
        if (this.hasChequeRequestFeat) {
            this.nbTabs += 1;
        }
        this.view.flxChequeBooksLabel.setVisibility(this.hasChequeRequestFeat);
        this.hasViewChequesFeat = configManager.checkUserFeature("VIEW_CHEQUES");
        if (this.hasViewChequesFeat) {
            this.nbTabs += 1;
        }
        this.view.flxMyChequesLabel.setVisibility(this.hasViewChequesFeat);
        this.view.flxSearchInfo.setVisibility(this.hasViewChequesFeat);
        if (this.nbTabs == 1) {
            this.view.flxStopChequeLabel.width = "100%";
            this.view.flxChequeBooksLabel.width = "100%";
            this.view.flxMyChequesLabel.width = "100%";
        }
        if (this.nbTabs == 2) {
            this.view.flxStopChequeLabel.width = "50%";
            this.view.flxChequeBooksLabel.width = "50%";
            this.view.flxMyChequesLabel.width = "50%";
        }
        navMan.setEntryPoint("chequemanagement", "frmChequeManagement");
        this.hasCreateChequeBookRequestPermission = configManager.checkUserPermission("CHEQUE_BOOK_REQUEST_CREATE");
        this.hasCreateNewStopPaymentPermission = configManager.checkUserPermission("STOP_PAYMENT_REQUEST_CREATE");
        if (this.currentView === "") {
            if (this.hasStopPaymentFeat) {
                this.renderStopChequeView();
            } else if (this.hasChequeRequestFeat) {
                this.renderChequeBooksView();
            } else {
                this.renderMyChequesView();
            }
        }
    },
    setIconVisibility: function() {
        var isSingleCutomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
        if (isSingleCutomerProfile) {
            return false;
        }
        var unique = new Set();
        var showError = applicationManager.getUserPreferencesManager().accessibleCustomerIds.some(element => unique.size === unique.add(element.type).size);
        var result = showError ? false : true;
        return result;
    },
    postShow: function() {
        //applicationManager.getPresentationUtility().dismissLoadingScreen();
        var deviceManager = applicationManager.getDeviceUtilManager();
        deviceManager.detectDynamicInstrumentation();
    },
    navigateToReviewScreen: function() {
        var review = applicationManager.getModulesPresentationController("ChequeManagementModule");
        review.commonFunctionForNavigation("frmCMReview");
    },
    navigateToTransactionDetails: function() {
        var navMan = applicationManager.getNavigationManager();
        var data = this.view.segStopCheque.data[this.view.segStopCheque.selectedIndex[1]];
        navMan.setCustomInfo("frmChequeTransactionDetails", {
            "data": data,
            "tabSelection": this.tabSelection
        });
        navMan.navigateTo("frmChequeTransactionDetails");
    },
    navigateToSearch: function() {
        var search = applicationManager.getModulesPresentationController("ChequeManagementModule");
        search.commonFunctionForNavigation("frmCMSearch");
    },
    navigateToAccounts: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.stateNavigation = true; // Setting the value for state management  
        presentation.stateTriggeredForm = "frmChequeManagement";
        presentation.navigateToAccountScreen();
        presentation.entryFormForAccounts = "frmChequeManagement";
    },
    getWidgetDataMap: function() {
        return {
            "lblChequeNo": "booksCount",
            "lblDate": "lblDate",
            "lblStatus": "lblStatus",
            "flxDot": "image",
            "lblAccountNo": "lblAccountNo"
        };
    },
    bindTransactions: function(data) {
        this.view.segStopCheque.widgetDataMap = this.getWidgetDataMap();
        this.view.segStopCheque.setData(data);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    navigateBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    setFooter: function() {
        this.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxAccSelect.setVisibility(false);
        this.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxTransferSel.setVisibility(false);
        this.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxBillSelected.setVisibility(false);
        this.view.customFooter.lblMore.skin = "sknLbl424242SSP20px";
        this.view.customFooter.flxMoreSelect.setVisibility(true);
    },
});
define("ChequeManagementModule/frmChequeManagementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_h8f1601135884cbb9bae6c06f5cd660a: function AS_FlexContainer_h8f1601135884cbb9bae6c06f5cd660a(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmMessages");
    },
    AS_FlexContainer_ffa9b06e930f4dca9bf7ea3176053cc4: function AS_FlexContainer_ffa9b06e930f4dca9bf7ea3176053cc4(eventobject) {
        var self = this;
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    AS_Form_h6120a17ea924617bb1b40deb9ee8538: function AS_Form_h6120a17ea924617bb1b40deb9ee8538(eventobject) {
        var self = this;
        this.initActions();
    },
    AS_Form_j15ed94953934b9ba5fe050d9782a242: function AS_Form_j15ed94953934b9ba5fe050d9782a242(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_e16f80b335704f548f75afe9a7ec1c35: function AS_Form_e16f80b335704f548f75afe9a7ec1c35(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e954fd09878f4da08fb7de4319c6b500: function AS_BarButtonItem_e954fd09878f4da08fb7de4319c6b500(eventobject) {
        var self = this;
        this.navigateCustomBack();
    }
});
define("ChequeManagementModule/frmChequeManagementController", ["ChequeManagementModule/userfrmChequeManagementController", "ChequeManagementModule/frmChequeManagementControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmChequeManagementController");
    var controllerActions = ["ChequeManagementModule/frmChequeManagementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
