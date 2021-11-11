describe("CombinedStatement", function() {
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
	
	function ClickOnCombinedStatment(){
		kony.automation.playback.waitFor(["frmAccStatements","btnCombinedStatements"],15000);
		kony.automation.button.click(["frmAccStatements","btnCombinedStatements"]);
		
	}
	
	function ClickOnGenerateNewAtatment(){
		kony.automation.button.click(["frmAccStatements","btnGenerate"]);
		kony.automation.playback.waitFor(["frmCombinedStatement","flxShowAdditionalOptions"],15000);
	}
	
	function ClickOnShowAdditionalOptions(){
		kony.automation.playback.waitFor(["frmCombinedStatement","flxShowAdditionalOptions"],15000);
		kony.automation.flexcontainer.click(["frmCombinedStatement","flxShowAdditionalOptions"]);
	}
	
	function VerifyAllAccountsOption(){
		kony.automation.playback.waitFor(["frmCombinedStatement","segShowFilters[0,0]","flxAccounts"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmCombinedStatement","segShowFilters[0,0]","lblName"], "text")).toContain("All Accounts");
		kony.automation.flexcontainer.click(["frmCombinedStatement","flxCancel"]);
	}
	
	function GoBackToAccountStatement(){
		kony.automation.playback.waitFor(["frmCombinedStatement","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmCombinedStatement","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
	}
	
	function GoBackToDashboardFromAccountStatment(){
		kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
	}
	
	function getIndexOfAccountName(accountName){
	
	let segData = kony.automation.widget.getWidgetProperty(["frmCombinedStatement","segAccounts"], "data");
	// kony.print("segData : "+segData[0][1][1].updatedAccountName);
		for(let i=0; i<segData[0][1].length; i++){
			if(segData[0][1][i].updatedAccountName.includes(accountName)){
				return i;
			}
		}
	  return 1;
	}
	
	function SelectAccount(accountName){
		kony.automation.playback.waitFor(["frmCombinedStatement","segAccounts"],15000);
		kony.automation.playback.wait(3000);
		let index = getIndexOfAccountName(accountName);
		kony.automation.segmentedui.scrollToRow(["frmCombinedStatement","segAccounts[0," +index +"]"]);
		kony.automation.flexcontainer.click(["frmCombinedStatement","segAccounts[0," +index +"]","flxSelect"]);
	}
	
	function SelectAllAccount() {
		kony.automation.playback.waitFor(["frmCombinedStatement","segAccounts"],15000);
		kony.automation.flexcontainer.click(["frmCombinedStatement","segAccounts[0,-1]","flxSelectall"]);
	}
	
	function SelectStartDate(){
		kony.automation.playback.waitFor(["frmCombinedStatement","lblStartDateValue"],15000);
		kony.automation.widget.touch(["frmCombinedStatement","lblStartDateValue"], [61,13],null,null);
		kony.automation.playback.waitFor(["frmStatementStartDate","customCalendar","flxPreviousMonth"],15000);
		kony.automation.flexcontainer.click(["frmStatementStartDate","customCalendar","flxPreviousMonth"]);
		kony.automation.widget.touch(["frmStatementStartDate","customCalendar","m1CopyLabel0a7f34907bda844"], null,null,[5,12]);
		kony.automation.button.click(["frmStatementStartDate","btnContinue"]);
	}
	
	function SelectEndDate(){
		kony.automation.playback.waitFor(["frmCombinedStatement","lblEndDateValue"],15000);
		kony.automation.widget.touch(["frmCombinedStatement","lblEndDateValue"], [33,11],null,null);
		kony.automation.playback.waitFor(["frmStatementsEndDate","btnContinue"],15000);
		kony.automation.button.click(["frmStatementsEndDate","btnContinue"]);
		kony.automation.playback.waitFor(["frmCombinedStatement","segAccounts"],15000);
	}
	
	
	function ClickOnContinue(){
		kony.automation.button.click(["frmCombinedStatement","btnDownload"]);
		kony.automation.playback.waitFor(["frmViewCombinedStatements","segFileFormats"],15000);
	}
	
	function SearchAccount(account){
		kony.automation.playback.waitFor(["frmCombinedStatement","tbxSearch"],15000);
		kony.automation.widget.touch(["frmCombinedStatement","tbxSearch"], null,null,[195,13]);
		kony.automation.textbox.enterText(["frmCombinedStatement","customSearchbox","tbxSearch"],account);
		kony.automation.playback.wait(1000);
	// 	let isAccountAvailable = ! kony.automation.widget.getWidgetProperty(["frmCombinedStatement","lblNoTransaction"], "isVisible");
	// 	if (!isAccountAvailable) {
	// 		expect("Account Available").toContain("Not Available");
	// 	}
		kony.automation.playback.wait(1000);
		kony.automation.button.click(["frmCombinedStatement","customSearchbox","btnCancel"]);
	}
	
	function SelectFileFormatAndGenerateStatement(fileFormat){
		
		let index = getIndexOfFileFormat(fileFormat);
	// 	expect(kony.automation.widget.getWidgetProperty(["frmViewCombinedStatements","segFileFormats[0,0]","lblTypeName"], "text")).toEqual("PDF");
		kony.automation.playback.waitFor(["frmViewCombinedStatements","segFileFormats"],15000);
		kony.automation.segmentedui.click(["frmViewCombinedStatements","segFileFormats[0," + index + "]"]);
		kony.automation.button.click(["frmViewCombinedStatements","btnCreate"]);
		
	}
	
	function VerifyDownloadOption(){
		kony.automation.playback.waitFor(["frmViewCombinedStatements","btnCreate"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmViewCombinedStatements","btnCreate"], "isVisible")).toEqual(true);
	}
	
	function GoBackFromDownloadScreenToCombinedStatment(){
		kony.automation.playback.waitFor(["frmViewCombinedStatements","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmViewCombinedStatements","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmCombinedStatement","tbxSearch"],15000);
	}
	
	function VerifyAcknowledgement(){
		kony.automation.playback.waitFor(["frmDownLoadCombinedstatement","lblInfoBold"]);
		expect(kony.automation.widget.getWidgetProperty(["frmDownLoadCombinedstatement","lblInfoBold"], "text")).toContain("preparing");
		kony.automation.playback.waitFor(["frmDownLoadCombinedstatement","btnBackToStatement"],15000);
		kony.automation.button.click(["frmDownLoadCombinedstatement","btnBackToStatement"]);
	}
	
	function getIndexOfFileFormat(fileFormat){
	  let segData = kony.automation.widget.getWidgetProperty(["frmViewCombinedStatements","segFileFormats"],"data");
	  for(let i=0; i<segData.length; i++){
		if(segData[i].lblTypeName.includes(fileFormat)){
			return i;
		}
	  }
		return -1;
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
	
	
	
	
	it("SearchAccount_ByName", async function() {
	  //write your automation code here
		let accontName = Transfers.savingsAccount.name;
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		SelectStartDate();
		SelectEndDate();
		SelectAccount(accontName);
		ClickOnContinue();
		GoBackFromDownloadScreenToCombinedStatment();
		SearchAccount(accontName);
		GoBackToAccountStatement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
	
	it("SearchAccount_ByAccountNumber", async function() {
	  //write your automation code here
		let accontName = Transfers.savingsAccount.name;
		let accountNumber = Transfers.savingsAccount.accountNumber;
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		SelectStartDate();
		SelectEndDate();
		SelectAccount(accontName);
		ClickOnContinue();
		GoBackFromDownloadScreenToCombinedStatment();
		SearchAccount(accountNumber);
		GoBackToAccountStatement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
	
	it("GenerateAccountStatement_PDF", async function() {
	  //write your automation code here
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		SelectStartDate();
		SelectEndDate();
		SelectAccount(Transfers.savingsAccount.name);
		ClickOnContinue();
		SelectFileFormatAndGenerateStatement("PDF");
		VerifyAcknowledgement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
	
	it("GenerateAccountStatement_Excel", async function() {
	  //write your automation code here
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		SelectStartDate();
		SelectEndDate();
		SelectAccount(Transfers.savingsAccount.name);
		ClickOnContinue();
		SelectFileFormatAndGenerateStatement("Excel");
		VerifyAcknowledgement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
	
	it("GenerateAccountStatement_CSV", async function() {
	  //write your automation code here
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		SelectStartDate();
		SelectEndDate();
		SelectAccount(Transfers.savingsAccount.name);
		ClickOnContinue();
		SelectFileFormatAndGenerateStatement("CSV");
		VerifyAcknowledgement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
	
	it("VerifyViewAllAccounts", async function() {
	  //write your automation code here
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		ClickOnShowAdditionalOptions();
		VerifyAllAccountsOption();
		GoBackToAccountStatement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
	
	it("GenerateAccountStatement_Saving", async function() {
	  //write your automation code here
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		SelectStartDate();
		SelectEndDate();
		SelectAccount(Transfers.savingsAccount.name);
		ClickOnContinue();
		SelectFileFormatAndGenerateStatement("PDF");
		VerifyAcknowledgement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
	
	it("FilterAccount_ByName", async function() {
	  //write your automation code here
		let accontName = "Savings";
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		SelectStartDate();
		SelectEndDate();
		SelectAccount(accontName);
		ClickOnContinue();
		GoBackFromDownloadScreenToCombinedStatment();
		SearchAccount(accontName);
		GoBackToAccountStatement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
	
	it("VerifyViewAllAccounts", async function() {
	  //write your automation code here
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		ClickOnShowAdditionalOptions();
		VerifyAllAccountsOption();
		GoBackToAccountStatement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
	
	it("VerifyDownloadOption", async function() {
	  //write your automation code here
		openMenu("Account Statements");
		ClickOnCombinedStatment();
		ClickOnGenerateNewAtatment();
		SelectStartDate();
		SelectEndDate();
		SelectAllAccount();
		ClickOnContinue();
		VerifyDownloadOption();
		GoBackFromDownloadScreenToCombinedStatment();
		GoBackToAccountStatement();
		GoBackToDashboardFromAccountStatment();
		VerifyAccountsDashBoard();
	});
});