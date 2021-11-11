describe("ExchangeRates", function() {
	beforeEach(async function() {
	// 	jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
	    var flgLoginForm = await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"], 2000);
	    var flgLogoutForm = await kony.automation.playback.waitFor(["frmLogout", "btnLogIn"], 2000);
	    kony.print("flgLoginForm: " + flgLoginForm + " ,flgLogoutForm: " + flgLogoutForm);
	
	    if (flgLogoutForm) {
	        kony.automation.button.click(["frmLogout", "btnLogIn"]);
	        kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"], 10000);
	        await kony.automation.playback.wait(3000);
	//         expect(kony.automation.widget.getWidgetProperty(["frmLogin", "login", "tbxPassword"], "text")).toEqual("");
	        await login(LoginDetails.username);
	    } else if (flgLoginForm === true || flgLoginForm === 1) {
	        await login(LoginDetails.username);
	    }
	},12000);
	
	
	async function login(username) {
	    await kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"]);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxUsername"], username);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxPassword"], LoginDetails.password);
	    await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"]);
	    kony.automation.button.click(["frmLogin", "login", "btnLogIn"]);
	    //Verifying Terms and Condition page -
	    var frmTnC = await kony.automation.playback.waitFor(["frmTermsAndCondition", "flxCheckBox"], 20000);
	    if (frmTnC) {
	        kony.automation.flexcontainer.click(["frmTermsAndCondition", "flxCheckBox"]);
	        await kony.automation.playback.waitFor(["frmTermsAndCondition", "btnContinue"]);
	        kony.automation.button.click(["frmTermsAndCondition", "btnContinue"]);
	    }
	
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "lblBankName"], 15000);
	}
	
	function VerifyAccountsDashBoard() {
	
	  kony.automation.playback.waitFor(["frmUnifiedDashboard"],30000);
	
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","lblSelectedAccountType"],30000);
	  expect(kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","lblSelectedAccountType"], "text")).not.toBe('');
	}
	
	function VerifySwipeOperationOnDashBoard(){
	
	  //kony.automation.scrollToWidget(["frmUnifiedDashboard","lblBarTitle"]);
	  kony.automation.scrollToWidget(["frmUnifiedDashboard","lblNetWorthSummary"]);
	}
	
	function VerifyNotchOperationOnDashBoard(){
	
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","flxInnerChartSizeToggle"],15000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function NavigateToViewAllTranscations() {
	
	  // Scroll to View All form
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"],15000);
	  kony.automation.scrollToWidget(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	  kony.automation.button.click(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	}
	
	function SelectUncategorizedTranscations(){
	
	  // Select Uncategorized Transcations
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","flxDropdownImage"],15000);
	  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","flxDropdownImage"]);
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactionTypes"],15000);
	  kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactionTypes[0,1]"]);
	}
	
	function VerifySearchFunctionality_ViewAllTranscation(){
	
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmPFMCategorisedTransactions","tbxSearch"],"Spent");
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","segTransactions[0,0]","lblTransaction"], "text")).toContain("Spent");
	}
	
	function MoveBackfromViewAllTranscations(){
	
	  //MoveBack from viewAll Transcations
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","customHeader","flxBack"]);
	
	  VerifyAccountsDashBoard();
	}
	
	
	function VerifyTranscationDetails(){
	
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","lblTransferredToTrans"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblTransferredToTrans"], "text")).not.toBe('');
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","lblTransferredFromTrans"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblTransferredFromTrans"], "text")).not.toBe('');
	}
	
	function MoveBackFromTranscationDetails(){
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPFMTransactionDetails","customHeader","flxBack"]);
	  MoveBackfromViewAllTranscations();
	  VerifyAccountsDashBoard();
	}
	
	function EditTranscationDetails(Note){
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmPFMTransactionDetails","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","flxOption2"],15000);
	  kony.automation.flexcontainer.click(["frmPFMTransactionDetails","flxOption2"]);
	  kony.automation.playback.waitFor(["frmPFMNote","txtNote"],15000);
	  kony.automation.textarea.enterText(["frmPFMNote","txtNote"],Note);
	  kony.automation.playback.waitFor(["frmPFMNote","btnSave"],15000);
	  kony.automation.button.click(["frmPFMNote","btnSave"]);
	
	}
	
	function VerifyAccountsOrder(){
	
	
	}
	
	function openMenu(menu){
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	  var menuOptions = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","Hamburger","segHamburger"], "data");
	  kony.print("menuOptions: "+menuOptions);
	  var menuIndex = -1;
	  for(i=0; i<menuOptions.length; i++){
	    if(menuOptions[i].text === menu){
	      menuIndex = i;
	      break;
	    }
	  }
	  if(menuIndex > -1){
	    kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0," + menuIndex+ "]" ]);
	    kony.automation.playback.wait(10000);
	  }else{
	    expect(menuIndex).toBeGreaterThan(-1);
	  }
	}
	
	
	
	
	function verifyExchangeRate(){
		kony.automation.playback.waitFor(["frmForexDashboard","tbxBaseCurrency"],15000);
		kony.automation.textbox.enterText(["frmForexDashboard","tbxBaseCurrency"],"1");
		kony.automation.playback.waitFor(["frmForexDashboard","segCurrencyRates[0,0]","lblConversionValue"], 15000);
		expect(kony.automation.widget.getWidgetProperty(["frmForexDashboard","segCurrencyRates[0,0]","lblConversionValue"], "text")).not.toBeNull();
	}
	
	function moveBackToDashboard_ExchangeRate(){
		kony.automation.playback.waitFor(["frmForexDashboard","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmForexDashboard","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmForexDashboard","Hamburger","segHamburger"],15000);
		kony.automation.segmentedui.scrollToRow(["frmForexDashboard","Hamburger","segHamburger[0,0]"]);
		kony.automation.segmentedui.click(["frmForexDashboard","Hamburger","segHamburger[0,0]"]);
		VerifyAccountsDashBoard();
	}
	
	function goToExchangeRate(){
		openMenu("Exchange Rates");
	}
	
	it("VerifyExchangeRates", async function() {
		goToExchangeRate();
		verifyExchangeRate();
		moveBackToDashboard_ExchangeRate();
	},120000);
});