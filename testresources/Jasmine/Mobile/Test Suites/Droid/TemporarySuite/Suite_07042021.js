describe("Suite_07042021", function() {
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
	
	
	
	
	function SelectAccountOndashBoard(account){
	
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","segAccounts"],15000);
	  let indices = getIndex(account);
	  kony.automation.widget.touch(["frmUnifiedDashboard","segAccounts"], null,null,[80,97]);
	  kony.automation.segmentedui.click(["frmUnifiedDashboard","segAccounts[" + indices.i + "," + indices.j +"]"]);
	  kony.automation.playback.wait(10000);
	
	  kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblAccountName"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountSummaryNative","lblAccountName"], "text")).not.toBe('');
	
	}
	
	// function getIndex(account){
	//   let segData = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts"], "data");
	//   let i=0;
	//   let j=0;
	
	//   for(var a = 0; a<segData.length; a++){
	//     for(var b=0; b<segData[a][1].length; b++){
	//       if(segData[a][1][b].accountName.includes(account)){
	//         i=a;
	//         j=b;
	//         break;
	//       }
	//     }
	//   }
	
	//   return {
	//     i,
	//     j
	//   };
	// }
	
	 function getIndex(account){
	  let segData = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts"], "data");
	  let i=0;
	  let j=0;
	
	  for(var a = 0; a<segData.length; a++){
	    for(var b=0; b<segData[a][1].length; b++){
	      if(segData[a][1][b].accountName === undefined){
	        kony.automation.flexcontainer.click(["frmUnifiedDashboard","segAccounts[" + a + "," + b +"]","flxViewContainer"]);
	        kony.automation.playback.wait(2000);
	        return getIndex(account);                                   
	
	      }else{
	        if(segData[a][1][b].accountName.includes(account)){
	          i=a;
	          j=b;
	          break;
	        }                               
	      }
	    }
	  }
	  return {
	    i,
	    j
	  };
	}
	
	function ClickonFirstSavingAccount(){
	
	  SelectAccountOndashBoard(Transfers.savingsAccount.name);
	
	}
	
	function ClickonFirstCheckingAccount(){
	
	  SelectAccountOndashBoard(Transfers.checkingAccount.name);
	}
	
	function ClickonFirstLoanAccount(){
	
	  SelectAccountOndashBoard(Transfers.loanAccount.name);
	}
	
	function ClickonFirstCreditCardAccount(){
	
	  SelectAccountOndashBoard("Credit Card");
	}
	
	function ClickonFirstDepositAccount(){
	
	  SelectAccountOndashBoard(Transfers.depositAccount.name);
	}
	
	function VerifyAccInfo(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","customHeader","imgSearch"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","customHeader","imgSearch"], null,null,[11,9]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAccountInfo","information","lblTab1Header"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountInfo","information","lblTab1Header"], "text")).not.toBe('');
	}
	
	function VerifyPendingWithdrawal(){
		expect(kony.automation.widget.getWidgetProperty(["frmAccountInfo","information","lblTab1Field4Label"], "text")).toContain("Pending Withdrawals");  
	}
	
	function VerifyInterestDetails(){
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountInfo","information","lblTab2Field2Label"], "text")).toContain("Interest");
	}
	
	function VerifySwiftCode(){
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountInfo","information","lblTab3Field4Label"], "text")).toContain("SWIFT Code");
	}
	function MoveBackFromAccInfo(){
	
	  kony.automation.playback.waitFor(["frmAccountInfo","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAccountInfo","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	}
	
	function verifyEditAccountNickname(NickName){
	
	  kony.automation.playback.waitFor(["frmAccountInfo","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmAccountInfo","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmAccountInfo","btnEditNickName"],15000);
	  kony.automation.button.click(["frmAccountInfo","btnEditNickName"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAccInfoEdit","txtNickName"],15000);
	  kony.automation.textbox.enterText(["frmAccInfoEdit","txtNickName"],NickName);
	  kony.automation.playback.waitFor(["frmAccInfoEdit","btnSave"],15000);
	  kony.automation.button.click(["frmAccInfoEdit","btnSave"]);
	  kony.automation.playback.wait(5000);
	
	  MoveBackFromAccInfo();
	
	}
	function MoveBackfromAccountDetails(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAccountDetails","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmAccountDetails","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.click(["frmAccountDetails","Hamburger","segHamburger[0,0]"]);
	//   kony.automation.playback.wait(5000);
	}
	
	function VerifyMoreoptionsDisplayed(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink4"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","quicklinksNative","flxLink4"], null,null,[57,28]);
	
	  kony.automation.playback.waitFor(["frmAccountDetails","flxCancel"],15000);
	  kony.automation.flexcontainer.click(["frmAccountDetails","flxCancel"]);
	}
	
	function VerifyOptionsOnLandingScreen(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink1"],15000);
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink2"],15000);
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink3"],15000);
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"],15000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe('');
	
	}
	
	function VerifyPendingTranscations(){
	
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"],15000);
	
	  try{
	    let isAvailable=kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,-1]","lblHeaderName"], "text");
	
	    kony.print("is Available "+isAvailable);
	
	    if(isAvailable.includes('Pending')){
	
	      kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,0]"]);
	      kony.automation.playback.wait(5000);
	      kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","lblLocateUs"],15000);
	      expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	      kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","flxBack"],15000);
	      kony.automation.flexcontainer.click(["frmMMTransactionDetails","customHeader","flxBack"]);
	      kony.automation.playback.wait(5000);
	
	      MoveBackfromAccountDetails();
	    }else{
	
	      MoveBackfromAccountDetails();
	    }
	  }catch(Exception){
	    MoveBackfromAccountDetails();
	  }
	
	  //   kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"]);
	  //   kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,0]"]);
	
	  //   kony.automation.playback.wait(5000);
	
	  //   kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","lblLocateUs"]);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	  //   kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","flxBack"]);
	  //   kony.automation.flexcontainer.click(["frmMMTransactionDetails","customHeader","flxBack"]);
	  //   kony.automation.playback.wait(5000);
	}
	
	function VerifyPostedTranscations(){
	
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"],15000);
	
	  try{
	    let isAvailable=kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[2,-1]","lblHeaderName"], "text");
	
	    kony.print("is Available "+isAvailable);
	
	    if(isAvailable.includes('Posted')){
	
	      kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[2,0]"]);
	      kony.automation.playback.wait(5000);
	      kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","lblLocateUs"],15000);
	      expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	      kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","flxBack"],15000);
	      kony.automation.flexcontainer.click(["frmMMTransactionDetails","customHeader","flxBack"]);
	      kony.automation.playback.wait(5000);
	
	      MoveBackfromAccountDetails();
	    }else{
	
	      MoveBackfromAccountDetails();
	    }
	  }catch(Exception){
	    MoveBackfromAccountDetails();
	  }
	
	  //   kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"]);
	  //   kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[2,0]"]);
	
	  //   kony.automation.playback.wait(5000);
	
	  //   kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","lblLocateUs"]);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	  //   kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","flxBack"]);
	  //   kony.automation.flexcontainer.click(["frmMMTransactionDetails","customHeader","flxBack"]);
	  //   kony.automation.playback.wait(5000);
	
	}
	
	function ScrollDownTranscations(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"],15000);
	  kony.automation.segmentedui.scrollToBottom(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifyAdvancedSearch(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [17,16],null,null);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearch","segType"],15000);
	  kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","flxAddRangeAmount"],15000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearch","flxAddRangeAmount"]);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountFrom"],15000);
	  kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountFrom"],"1");
	  kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountTo"],15000);
	  kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountTo"],"100");
	  kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"],15000);
	  kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearchResults","customHeader","flxBack"],15000);
	  kony.automation.playback.wait(3000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearchResults","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearch","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifyAdvancedSearch_ByAmount(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [17,16],null,null);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearch","segType"],15000);
	  kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","flxAddRangeAmount"],15000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearch","flxAddRangeAmount"]);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountFrom"],15000);
	  kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountFrom"],"1");
	  kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountTo"],15000);
	  kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountTo"],"9999");
	  kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"],15000);
	  kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearchResults","customHeader","flxBack"],15000);
	  kony.automation.playback.wait(3000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearchResults","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearch","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifyAdvancedSearch_ByDate(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [17,16],null,null);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearch","segType"],15000);
	  kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","flxTimeRangeWrapper"],15000);	
		kony.automation.flexcontainer.click(["frmAdvanceSearch","flxTimeRangeWrapper"]);
	  kony.automation.playback.wait(3000);
		kony.automation.segmentedui.click(["frmAdvanceSearch","segTimeRange[0,5]"]);
	
	   kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"],15000);
	  kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearchResults","customHeader","flxBack"],15000);
	  kony.automation.playback.wait(3000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearchResults","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearch","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifyAdvancedSearch_ByTransactionType(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [17,16],null,null);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearch","segType"],15000);
	  kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","flxTransactionTypeWrapper"],15000);	
		kony.automation.flexcontainer.click(["frmAdvanceSearch","flxTransactionTypeWrapper"]);
	  kony.automation.playback.wait(3000);
		kony.automation.segmentedui.click(["frmAdvanceSearch","segTransactionType[0,3]"]);
	  
	   kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"],15000);
	  kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearchResults","customHeader","flxBack"],15000);
	  kony.automation.playback.wait(3000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearchResults","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearch","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifyAdvancedSearch_ByDebitCredit(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [17,16],null,null);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearch","segType"],15000);
	  kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","flxTransactionTypeWrapper"],15000);	
		kony.automation.flexcontainer.click(["frmAdvanceSearch","flxTransactionTypeWrapper"]);
	  kony.automation.playback.wait(3000);
		kony.automation.segmentedui.click(["frmAdvanceSearch","segTransactionType[0,0]"]);
	  
	   kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"],15000);
	  kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearchResults","customHeader","flxBack"],15000);
	  kony.automation.playback.wait(3000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearchResults","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearch","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifyAdvancedSearch_ByKeyword(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [17,16],null,null);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmAdvanceSearch","tbxSearch"],15000);
		kony.automation.textbox.enterText(["frmAdvanceSearch","tbxSearch"],"Transfer");
	  kony.automation.playback.wait(3000);
	   kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"],15000);
	  kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
	  kony.automation.playback.wait(5000);
	
	 kony.automation.playback.waitFor(["frmAdvanceSearchResults","customHeader","flxBack"],15000);
	  kony.automation.playback.wait(3000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearchResults","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAdvanceSearch","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAdvanceSearch","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifySavingsAccStatements(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink4"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","quicklinksNative","flxLink4"], null,null,[54,27]);
	  kony.automation.playback.waitFor(["frmAccountDetails","flxAddRow6"],15000);
	  kony.automation.flexcontainer.click(["frmAccountDetails","flxAddRow6"]);
	  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function VerifyCheckingAccStatements(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink4"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","quicklinksNative","flxLink4"], null,null,[54,27]);
	  kony.automation.playback.waitFor(["frmAccountDetails","flxAddRow6"],15000);
	  kony.automation.flexcontainer.click(["frmAccountDetails","flxAddRow6"]);
	  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function VerifyCreditCardAccStatements(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink3"],15000);
	  kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative","flxLink3"]);
	
	  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function VerifyLoanAccStatements(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink2"],15000);
	  kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative","flxLink2"]);
	
	  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function VerifyDepositAccStatements(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink1"],15000);
	  kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative","flxLink1"]);
	
	  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function initiateTransfer(){
		kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink2"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink2"], "text")).toContain("Transfer");	
		kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative","flxLink2"]);	
	}
	
	function verifyQuickLinkAccessForTransfer(){
	  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink2"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink2"], "text")).toContain("Transfer");	
	}
	
	function lockCard(){
		if(isCardUnlocked()){	
	      kony.automation.switch.toggle(["frmCardManageHome","switchActiveorInactive"]);
	      kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],15000);
	      kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
	      kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
	      kony.automation.playback.waitFor(["frmCardManageHome","customPopup","lblPopup"], 15000);
	      expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","customPopup","lblPopup"], "text")).toContain("success");
		}
	}
	
	function goToDashboardFromCardManagement(){
		kony.automation.playback.waitFor(["frmCardManageHome","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmCardManageHome","customHeader","flxBack"]);
		kony.automation.segmentedui.click(["frmCardManageHome","Hamburger","segHamburger[0,0]"]);
		
		VerifyAccountsDashBoard();
	}
	
	function goTocardManagement(){
	  openMenu("Card Management");
	}
	
	function unlockCard(){
		
	  if(!isCardUnlocked()){	
	      kony.automation.switch.toggle(["frmCardManageHome","switchActiveorInactive"]);
	      kony.automation.playback.waitFor(["frmCardManageHome","customPopup","lblPopup"], 15000);
	      expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","customPopup","lblPopup"], "text")).toContain("success");
		}
	}
	
	function isCardUnlocked(){
		kony.automation.playback.waitFor(["frmCardManageHome","switchActiveorInactive"],15000);	
		let selectedIndex = kony.automation.widget.getWidgetProperty(["frmCardManageHome","switchActiveorInactive"] , "selectedIndex");
		
		return (selectedIndex === 1) ? true : false;
	}
	
	function changePin(){
	  if(isCardUnlocked()){
	    kony.automation.playback.waitFor(["frmCardManageHome","flxChangePin"],15000);
		kony.automation.flexcontainer.click(["frmCardManageHome","flxChangePin"]);
		kony.automation.playback.waitFor(["frmCardMngNewPin","txtCurrentPinValue"],15000);
		kony.automation.textbox.enterText(["frmCardMngNewPin","txtCurrentPinValue"],"4040");
		kony.automation.textbox.enterText(["frmCardMngNewPin","txtNewPin"],"0404");
		kony.automation.textbox.enterText(["frmCardMngNewPin","txtConfirmPin"],"0404");
		kony.automation.button.click(["frmCardMngNewPin","btnContinue"]);
		kony.automation.playback.waitFor(["frmCardManageHome","customPopup","lblPopup"], 15000);
		expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","customPopup","lblPopup"], "text")).toContain("success");
	  }else{
	    expect("Crad is locked ").toEqual("Please unlock the card first to change pin.");
	  }
	}
	
	function setPurchaseLimit(){
		if(isCardUnlocked()){
	      kony.automation.playback.waitFor(["frmCardManageHome","flxSetPurchaseLimit"],15000);
	      kony.automation.flexcontainer.click(["frmCardManageHome","flxSetPurchaseLimit"]);
	      let btnMinus = kony.automation.playback.waitFor(["frmSetPurchaseCardLimit","btnMinus"],5000);
	      if(btnMinus){
	          kony.automation.button.click(["frmSetPurchaseCardLimit","btnMinus"]);
	      }else{
	          kony.automation.button.click(["frmSetPurchaseCardLimit","btnPlus"]);
	      }
	      kony.automation.button.click(["frmSetPurchaseCardLimit","btnConfirm"]);
	      kony.automation.playback.waitFor(["frmSetCardLimitConfirmation","lblUpdateMsg"],15000);
	      expect(kony.automation.widget.getWidgetProperty(["frmSetCardLimitConfirmation","lblUpdateMsg"], "text")).toContain("updated");
	      kony.automation.playback.waitFor(["frmSetCardLimitConfirmation","btnCardsManagement"],15000);
	      kony.automation.button.click(["frmSetCardLimitConfirmation","btnCardsManagement"]);
	    }else{
	      expect("Crad is locked ").toEqual("Please unlock the card first to set purchase limit.");
	    }
	}
	
	function setATMWithdrawalLimit(){
		if(isCardUnlocked()){
	      kony.automation.playback.waitFor(["frmCardManageHome","flxSetATMWithdrawalLimit"],15000);
	      kony.automation.flexcontainer.click(["frmCardManageHome","flxSetATMWithdrawalLimit"]);
	      let btnMinus = kony.automation.playback.waitFor(["frmSetWithdrawalCardLimit","btnMinus"],5000);
	      if(btnMinus){
	          kony.automation.button.click(["frmSetWithdrawalCardLimit","btnMinus"]);
	      }else{
	          kony.automation.button.click(["frmSetWithdrawalCardLimit","btnPlus"]);
	      }
	
	      kony.automation.button.click(["frmSetWithdrawalCardLimit","btnConfirm"]);
	      kony.automation.playback.waitFor(["frmSetCardLimitConfirmation","lblUpdateMsg"],15000);
	      expect(kony.automation.widget.getWidgetProperty(["frmSetCardLimitConfirmation","lblUpdateMsg"], "text")).toContain("updated");
	      kony.automation.playback.waitFor(["frmSetCardLimitConfirmation","btnCardsManagement"],15000);
	      kony.automation.button.click(["frmSetCardLimitConfirmation","btnCardsManagement"]);
	    }else{
	      expect("Crad is locked ").toEqual("Please unlock the card first to set purchase limit.");
	    }
	}
	
	function verifyCardNoLastDigits(){
		kony.automation.playback.waitFor(["frmCardManageHome","lblCardNoLastDigits"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","lblCardNoLastDigits"], "text")).not.toContain("X");  
	}
	
	function selectTravalDates(){
		kony.automation.playback.waitFor(["frmManageTravelStartDate","customCalendar","flxNextMonth"],15000);
		kony.automation.flexcontainer.click(["frmManageTravelStartDate","customCalendar","flxNextMonth"]);
		kony.automation.widget.touch(["frmManageTravelStartDate","customCalendar","m3CopyLabel0j8ef8b8e650148"], null,null,[20,11]);
		kony.automation.playback.waitFor(["frmManageTravelStartDate","btnContinue"],15000);
		kony.automation.button.click(["frmManageTravelStartDate","btnContinue"]);
		kony.automation.playback.waitFor(["frmManageTravelEndDate","customCalendar","flxNextMonth"],15000);
		kony.automation.flexcontainer.click(["frmManageTravelEndDate","customCalendar","flxNextMonth"]);
		kony.automation.playback.waitFor(["frmManageTravelEndDate","customCalendar","flxNextMonth"],15000);
		kony.automation.flexcontainer.click(["frmManageTravelEndDate","customCalendar","flxNextMonth"]);	 
		kony.automation.widget.touch(["frmManageTravelEndDate","customCalendar","m3CopyLabel0e9e5d9d7b7e84d"], null,null,[20,11]); 
		kony.automation.playback.waitFor(["frmManageTravelEndDate","btnContinue"],15000);
		kony.automation.button.click(["frmManageTravelEndDate","btnContinue"]);	
	}
	
	function openManageTravelPlans(){
		kony.automation.playback.waitFor(["frmCardManageHome","btnManageTravelPlans"],15000);
		kony.automation.button.click(["frmCardManageHome","btnManageTravelPlans"]);
	}
	
	function clickOnAddNewTravelPlan(){
		kony.automation.playback.waitFor(["frmManageTravelPlans","btnAddTravelPlans"],15000);
		kony.automation.button.click(["frmManageTravelPlans","btnAddTravelPlans"]);
	}
	
	
	function enterDestination(destination){
		kony.automation.playback.waitFor(["frmManageTravelDestination","tbxSearch"],15000);
		kony.automation.textbox.enterText(["frmManageTravelDestination","tbxSearch"],destination);
		kony.automation.playback.wait(1000);
		kony.automation.segmentedui.click(["frmManageTravelDestination","segTravelDestinationResults[0,0]"]);
		kony.automation.playback.wait(1000);
		kony.automation.button.click(["frmManageTravelDestination","btnAdd"]);
		kony.automation.button.click(["frmManageTravelDestination","btnSave"]);
	}
	
	function selectFirstCard(){
		kony.automation.playback.waitFor(["frmManageTravelSelectCards","segSelectCards"],15000);
		kony.automation.segmentedui.click(["frmManageTravelSelectCards","segSelectCards[0,0]"]);
		kony.automation.button.click(["frmManageTravelSelectCards","btnContinue"]);
		kony.automation.playback.waitFor(["frmManageTravelPhoneNumber","btnSkip"],15000);
		kony.automation.button.click(["frmManageTravelPhoneNumber","btnSkip"]);
	}
	
	function confirmAddTravelPlan(){
		kony.automation.playback.waitFor(["frmManageTravelConfirmation","btnConfirm"],15000);
		kony.automation.button.click(["frmManageTravelConfirmation","btnConfirm"]);
		kony.automation.playback.waitFor(["frmManageTravelPlans","customPopup","lblPopup"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmManageTravelPlans","customPopup","lblPopup"], "text")).toContain("success");
	}
	
	function goBackFromManageTravelPlans(){
		kony.automation.playback.waitFor(["frmManageTravelPlans","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmManageTravelPlans","customHeader","flxBack"]);
	}
	
	function deleteTravelPlan(){
		let segTravelPlans = kony.automation.playback.waitFor(["frmManageTravelPlans","segTravelPlans"],2000);
		
	    if(segTravelPlans){
	      kony.automation.playback.waitFor(["frmManageTravelPlans","segTravelPlans"],15000);
	      kony.automation.segmentedui.click(["frmManageTravelPlans","segTravelPlans[0,0]"]);
	      kony.automation.playback.waitFor(["frmManageTravelDetails","btnDelete"],15000);
	      kony.automation.button.click(["frmManageTravelDetails","btnDelete"]);
	      kony.automation.alert.click(0);
	      kony.automation.playback.waitFor(["frmManageTravelPlans","customPopup","lblPopup"],15000);
	      expect(kony.automation.widget.getWidgetProperty(["frmManageTravelPlans","customPopup","lblPopup"], "text")).toContain("success");
		}
		else{
	      expect("No travel plans are added.").toBe("Please add a travel plan first");
		}  
	}
	
	function editTravelDestination(){
		let segTravelPlans = kony.automation.playback.waitFor(["frmManageTravelPlans","segTravelPlans"],15000);
		
	    if(segTravelPlans){
		kony.automation.playback.waitFor(["frmManageTravelPlans","segTravelPlans"],15000);
		kony.automation.segmentedui.click(["frmManageTravelPlans","segTravelPlans[0,0]"]);
		kony.automation.playback.waitFor(["frmManageTravelDetails","customHeader","btnRight"],15000);
		kony.automation.button.click(["frmManageTravelDetails","customHeader","btnRight"]);
		kony.automation.flexcontainer.click(["frmManageTravelDetails","flxEditTravelDestination"]); 
	    }
		else{
	      expect("No travel plans are added.").toBe("Please add a travel plan first");
	    }
	}
	
	function goBackFromTravelDetails_To_ManageTravelPlans(){
		kony.automation.playback.waitFor(["frmManageTravelDetails","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmManageTravelDetails","customHeader","flxBack"]);
	}
	
	function viewTransactions(){
		kony.automation.playback.waitFor(["frmCardManageHome","btnTransactionTab"],15000);
		kony.automation.button.click(["frmCardManageHome","btnTransactionTab"]);
		kony.automation.playback.waitFor(["frmCardManageHome","lblCreditAmount"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","lblCreditAmount"], "text")).not.toBeNull();
		kony.automation.playback.wait(3000);
		kony.automation.button.click(["frmCardManageHome","btnManageTab"]);
	}
	
	function verifyCardDetails(){
	  
	    if(isCardUnlocked()){
	      kony.automation.playback.waitFor(["frmCardManageHome","flxCardDetails"],15000);
	      kony.automation.flexcontainer.click(["frmCardManageHome","flxCardDetails"]);
	      kony.automation.playback.waitFor(["frmCardManageDetails","lblCardNoValue"],15000);
	      expect(kony.automation.widget.getWidgetProperty(["frmCardManageDetails","lblCardNoValue"], "text")).not.toBeNull();
	      expect(kony.automation.widget.getWidgetProperty(["frmCardManageDetails","segCardDetails[0,0]","lblValue"], "text")).not.toBeNull();
	      expect(kony.automation.widget.getWidgetProperty(["frmCardManageDetails","segCardDetails[0,2]","lblValue"], "text")).not.toBeNull();
	      expect(kony.automation.widget.getWidgetProperty(["frmCardManageDetails","segCardDetails[0,5]","lblValue"], "text")).not.toBeNull();
	      kony.automation.playback.wait(1000);
	      kony.automation.playback.waitFor(["frmCardManageDetails","customHeader","flxBack"],15000);
	      kony.automation.flexcontainer.click(["frmCardManageDetails","customHeader","flxBack"]);
	    }
		else{
	       expect("Crad is locked ").toEqual("Please unlock the card first.");
	    }
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
	
	function NavigateToManageRecipitents() {
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
	//   kony.automation.playback.wait(5000);
	  openMenu("Manage Beneficiaries");
	}
	
	function ClickOnAddBeneficiary(){
	    kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","btnApply"],15000);
	    kony.automation.button.click(["frmEuropeManageBeneficiaries","btnApply"]);
	    kony.automation.playback.wait(2000);
	}
	
	function SelectAccountWithUs(){
	    kony.automation.playback.waitFor(["frmEuropeTransferToAccountNewBen","SegSelectBank"],15000);
	    kony.automation.segmentedui.click(["frmEuropeTransferToAccountNewBen","SegSelectBank[0,1]"]);
	    kony.automation.playback.wait(2000);
	}
	
	function SelectAccountWithOtherBank(){
	    kony.automation.playback.waitFor(["frmEuropeTransferToAccountNewBen","SegSelectBank"],15000);
	    kony.automation.segmentedui.click(["frmEuropeTransferToAccountNewBen","SegSelectBank[0,0]"]);
	    kony.automation.playback.wait(2000);
	}
	
	function EnterBeneficiaryName(name){
	    kony.automation.playback.waitFor(["frmBenNameEurope","txtRecipientName"],15000);
	    kony.automation.textbox.enterText(["frmBenNameEurope","txtRecipientName"],name);
	    kony.automation.button.click(["frmBenNameEurope","btnContinue"]);
	    kony.automation.playback.wait(2000);
	}
	
	function EnterAccountNumber(accNumber){
	    kony.automation.playback.waitFor(["frmEnterBenAccNoEurope","txtAccNo"],15000);
	    kony.automation.textbox.enterText(["frmEnterBenAccNoEurope","txtAccNo"],accNumber);
	    kony.automation.button.click(["frmEnterBenAccNoEurope","btnContinue"]);
	    kony.automation.playback.wait(2000);
	}
	
	function EnterIBAN(IBAN){
	  kony.automation.playback.waitFor(["frmtransfersIBANEurope","tbxIBAN"],15000);
	  kony.automation.textbox.enterText(["frmtransfersIBANEurope","tbxIBAN"],IBAN);
	  kony.automation.button.click(["frmtransfersIBANEurope","btnContinue"]);
	  kony.automation.playback.wait(2000);
	}
	
	function EnterSwiftCode(swift){
	  kony.automation.playback.waitFor(["frmBenSwiftCodeEurope","txtSwiftCode"],15000);
	  kony.automation.textbox.enterText(["frmBenSwiftCodeEurope","txtSwiftCode"],swift);
	  kony.automation.button.click(["frmBenSwiftCodeEurope","btnContinue"]);
	  kony.automation.playback.wait(1000);
	}
	
	function EnterUpdateAddressDetails(){
	
	  kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","flxAddress"],5000);
	  kony.automation.flexcontainer.click(["frmBenVerifyDetailsEurope","flxAddress"]);
	  kony.automation.playback.waitFor(["frmBenAddressEurope","txtResidentialAddressNickName"],5000);
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressNickName"],"line1");
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressLineOne"],"line2");
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressCity"],"city");
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressZipCode"],"909090");
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressDummy"],"India");
	  kony.automation.widget.touch(["frmBenAddressEurope","btnContinueResidentialAddress"], [294,23],null,null);
	  kony.automation.playback.wait(2000);
	}
	
	function SearchBeneficiary(nameOrNumber){
	  kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmEuropeManageBeneficiaries","tbxSearch"], [214,32],null,null);
	  kony.automation.textbox.enterText(["frmEuropeManageBeneficiaries","customSearchbox","tbxSearch"],nameOrNumber);
	  kony.automation.segmentedui.click(["frmEuropeManageBeneficiaries","segBeneficiaries[0,0]"]);
	  kony.automation.playback.wait(3000);
	}
	
	function DeleteBeneficiary(){
		kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","customHeader","btnRight"]);
		kony.automation.button.click(["frmBeneficiaryDetailsEurope","customHeader","btnRight"]);
		kony.automation.playback.wait(1000);
		kony.automation.widget.touch(["frmBeneficiaryDetailsEurope","flxRemoveBeneficiary"], [77,40],null,null);
		kony.automation.playback.wait(1000);
		kony.automation.alert.click(0);
		kony.automation.playback.waitFor(["frmEuropeAcknowledgement","btnDashboard"]);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		kony.automation.playback.wait(1000);
		kony.automation.button.click(["frmEuropeAcknowledgement","btnDashboard"]);
	}
	
	function EditAddress(){
	  
	  let editAddress = "Edit " +getRandomString(3);
	  kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","customHeader","btnRight"],5000);
	  kony.automation.button.click(["frmBeneficiaryDetailsEurope","customHeader","btnRight"]);
	  kony.automation.widget.touch(["frmBeneficiaryDetailsEurope","flxAddress"], [268,32],null,null);
	  kony.automation.playback.wait(2000);
	
	  kony.automation.playback.waitFor(["frmBenAddressEurope","txtResidentialAddressNickName"],5000);
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressNickName"],"line1 "+editAddress);
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressLineOne"],"line2 " +editAddress);
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressCity"],"city "+ editAddress);
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressZipCode"],"909090");
	  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressDummy"],"India");
	  kony.automation.widget.touch(["frmBenAddressEurope","btnContinueResidentialAddress"], [294,23],null,null);
	  kony.automation.playback.wait(3000);
	
	  //kony.automation.button.click(["frmBenAddressEurope","btnContinueResidentialAddress"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmBeneficiaryDetailsEurope","customPopup","lblPopup"], "text")).toContain("updated");
	  kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","lblBenAddress"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBeneficiaryDetailsEurope","lblBenAddress"], "text")).toContain(editAddress);
	  kony.automation.playback.wait(2000);
	  kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","customHeader","flxBack"],8000);
	  kony.automation.flexcontainer.click(["frmBeneficiaryDetailsEurope","customHeader","flxBack"]);
	  kony.automation.playback.wait(2000);
	}
	
	function ClickOnMakePayment(){
		kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","btnBack"]);
		kony.automation.button.click(["frmBeneficiaryDetailsEurope","btnBack"]);
		kony.automation.playback.wait(3000);
	}
	
	function CancelAddBeneficiary(){
	  kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","customHeader","btnRight"]);
	  kony.automation.button.click(["frmBenVerifyDetailsEurope","customHeader","btnRight"]);
	  kony.automation.playback.wait(2000);
	  kony.automation.alert.click(0);
	  kony.automation.playback.wait(2000);
	}
	function ConfirmToAddBeneficiary(){
	    kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","btnContinue"],15000);
	    kony.automation.button.click(["frmBenVerifyDetailsEurope","btnContinue"]);
	    kony.automation.playback.wait(5000);
	}
	
	function VerifyDuplicateEntry(){
		kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","btnContinue"],15000);
		kony.automation.button.click(["frmBenVerifyDetailsEurope","btnContinue"]);
		let popup = kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","customPopup","lblPopup"],15000);
		if(popup){
			expect(kony.automation.widget.getWidgetProperty(["frmBenVerifyDetailsEurope","customPopup","lblPopup"], "text")).toContain("already associated");	
		}
		else{
			expect("popup message").toBe("appeared");
		}
		kony.automation.button.click(["frmBenVerifyDetailsEurope","customHeader","btnRight"]);
		kony.automation.alert.click(0);
		kony.automation.playback.waitFor(["frmEuropeTransferToAccountSM","customHeader","btnRight"],15000);
		kony.automation.button.click(["frmEuropeTransferToAccountSM","customHeader","btnRight"]);
	}
	
	function VerifyBankNameInReviewPage(){
	  let value = kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","lblAccHolderValue"],15000);
	  if(value){
		expect(kony.automation.widget.getWidgetProperty(["frmBenVerifyDetailsEurope","lblAccHolderValue"], "text")).not.toBeNull();  
	  }
	}
	
	function VerifBankNameInAckPage(){
	  let Success=kony.automation.playback.waitFor(["frmEuropeAcknowledgement","lblSuccessMessage"],15000);
	  if(Success){
	    expect(kony.automation.widget.getWidgetProperty(["frmEuropeAcknowledgement","segDetails[0,1]","lblDetails"], "text")).not.toBeNull();
	  }
	}
	
	function VerifySuccessMessage(){
	  kony.automation.playback.waitFor(["frmEuropeAcknowledgement","lblSuccessMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmEuropeAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
	  kony.automation.playback.waitFor(["frmEuropeAcknowledgement","btnDashboard"],15000);
	  kony.automation.button.click(["frmEuropeAcknowledgement","btnDashboard"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifyBeneficiaryList(){
	   kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","tbxSearch"],15000);
	   kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","segBeneficiaries"],15000);
	}
	
	function MoveBacktoDashboard_ManageRecipitent(){
	    kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","customHeader","flxBack"],15000);
	    kony.automation.flexcontainer.click(["frmEuropeManageBeneficiaries","customHeader","flxBack"]);
	    kony.automation.playback.wait(5000);
	}
	
	function IsAccountAlreadyAdded(accNumber){
	
	  kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmEuropeManageBeneficiaries","tbxSearch"], [87,26],null,null);
	  kony.automation.textbox.enterText(["frmEuropeManageBeneficiaries","customSearchbox","tbxSearch"],accNumber);
	  kony.automation.playback.wait(2000);
	  
	  let isBenAlreadyAdded = !kony.automation.widget.getWidgetProperty(["frmEuropeManageBeneficiaries","flxNoBeneficiaries"], "isVisible");
	
	  kony.automation.button.click(["frmEuropeManageBeneficiaries","customSearchbox","btnCancel"]);
	  return isBenAlreadyAdded;
	}
	function SelectExternalAccount(){
	
	  kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
	  kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,1]"]);
	}
	function SelectInfinityAccount(){
	
	  kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
	  kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
	}
	function SelectInternationalAccount(){
	
	  kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
	  kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,2]"]);
	}
	function SelectP2PAccount(){
	
	  kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
	  kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
	}
	function clickonAddExternalAccounttab(){
	
	  SelectExternalAccount();
	  ClickAddAccountButton();
	
	}
	
	function clickonAddinfinityBankAccounttab(){
	
	  SelectInfinityAccount();
	  ClickAddAccountButton();
	}
	
	function clickonAddInternationalAccounttab(){
	
	  SelectInternationalAccount();
	  ClickAddAccountButton();
	}
	
	function clickonAddP2PAccounttab(){
	
	  SelectP2PAccount();
	  ClickAddAccountButton();
	}
	
	function ClickAddAccountButton(){
	  kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],15000);
	  kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
	  kony.automation.playback.wait(5000);
	}
	
	function enterExternalBankAccountDetails(Routingno,Accno,unique_RecipitentName){
	
	  kony.print("Intiated method to add enterExternalBankAccountDetails");
	
	  // Enter Routing number
	  for(i=0; i<Routingno.length; i++){
	    kony.automation.button.click(["frmAddBenRoutNo","keypad", getBtnID(Routingno.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmAddBenRoutNo","btnContinue"],15000);
	  kony.automation.button.click(["frmAddBenRoutNo","btnContinue"]);
	
	  // Enter Account number
	  for(i=0; i<Accno.length; i++){
	    kony.automation.button.click(["frmEnterBenAccNo","keypad", getBtnID(Accno.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmEnterBenAccNo","btnContinue"],15000);
	  kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
	
	  // ReEnter account Name
	  for(i=0; i<Accno.length; i++){
	    kony.automation.button.click(["frmReEnterBenAccNo","keypad", getBtnID(Accno.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmReEnterBenAccNo","btnContinue"],15000);
	  kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
	
	  // Enter Recipient Name
	  kony.automation.playback.waitFor(["frmBenName","txtRecipientName"],15000);
	  kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],unique_RecipitentName);
	  kony.automation.playback.waitFor(["frmBenName","btnContinue"],15000);
	  kony.automation.button.click(["frmBenName","btnContinue"]);
	
	  linkReciptent();
	}
	
	function enterInternationalBankAccountDetails(swiftCode,Accno,unique_RecipitentName){
	
	  kony.automation.playback.waitFor(["frmBenSwiftCode","txtSwiftCode"],15000);
	  kony.automation.textbox.enterText(["frmBenSwiftCode","txtSwiftCode"],swiftCode);
	  kony.automation.playback.waitFor(["frmBenSwiftCode","btnContinue"],15000);
	  kony.automation.button.click(["frmBenSwiftCode","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmEnterBenAccNumorIBAN","tbxAccountNumber"],15000);
	  kony.automation.textbox.enterText(["frmEnterBenAccNumorIBAN","tbxAccountNumber"],Accno);
	  kony.automation.playback.waitFor(["frmEnterBenAccNumorIBAN","btnContinue"],15000);
	  kony.automation.button.click(["frmEnterBenAccNumorIBAN","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmReEnterBenAccNumorIBAN","tbxReEnteredAccountNumber"],15000);
	  kony.automation.textbox.enterText(["frmReEnterBenAccNumorIBAN","tbxReEnteredAccountNumber"],Accno);
	  kony.automation.playback.waitFor(["frmReEnterBenAccNumorIBAN","btnContinue"],15000);
	  kony.automation.button.click(["frmReEnterBenAccNumorIBAN","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBenName","txtRecipientName"],15000);
	  kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],unique_RecipitentName);
	  kony.automation.playback.waitFor(["frmBenName","btnContinue"],15000);
	  kony.automation.button.click(["frmBenName","btnContinue"]);
	
	  linkReciptent();
	}
	
	function enterSameBankAccountDetails(Accno,unique_RecipitentName){
	
	  // Enter Account number
	  for(i=0; i<Accno.length; i++){
	    kony.automation.button.click(["frmEnterBenAccNo","keypad", getBtnID(Accno.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmEnterBenAccNo","btnContinue"],15000);
	  kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
	
	  // ReEnter account Name
	  for(i=0; i<Accno.length; i++){
	    kony.automation.button.click(["frmReEnterBenAccNo","keypad", getBtnID(Accno.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmReEnterBenAccNo","btnContinue"],15000);
	  kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
	
	  // Enter Recipient Name
	  kony.automation.playback.waitFor(["frmBenName","txtRecipientName"],15000);
	  kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],unique_RecipitentName);
	  kony.automation.playback.waitFor(["frmBenName","btnContinue"],15000);
	  kony.automation.button.click(["frmBenName","btnContinue"]);
	
	  linkReciptent();
	}
	
	function enterP2PAccountDetails_Email(unique_RecipitentName,email){
	
	  kony.automation.playback.waitFor(["frmRegP2PContactType","btnEmail"],15000);
	  kony.automation.button.click(["frmRegP2PContactType","btnEmail"]);
	  kony.automation.playback.waitFor(["frmP2PRecEmail","txtEmailId"],15000);
	  kony.automation.textbox.enterText(["frmP2PRecEmail","txtEmailId"],email);
	  kony.automation.playback.waitFor(["frmP2PRecEmail","btnContinue"],15000);
	  kony.automation.button.click(["frmP2PRecEmail","btnContinue"]);
	  kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"],15000);
	  kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],unique_RecipitentName);
	  kony.automation.playback.waitFor(["frmP2PRecipientName","btnContinue"],15000);
	  kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"],15000);
	  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
	  kony.automation.playback.waitFor(["frmContracts","btnContinue"],15000);
	  kony.automation.button.click(["frmContracts","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"],15000);
	  kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
	}
	
	function enterP2PAccountDetails_MobileNumber(unique_RecipitentName,phno){
	
	  kony.automation.playback.waitFor(["frmRegP2PContactType","btnPhoneNumber"],15000);
	  kony.automation.button.click(["frmRegP2PContactType","btnPhoneNumber"]);
	
	  kony.automation.playback.waitFor(["frmP2PRecPhoneNo"],15000);
	  // Enter Phone number
	  for(i=0; i<phno.length; i++){
	    kony.automation.button.click(["frmP2PRecPhoneNo","keypad", getBtnID(phno.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmP2PRecPhoneNo","btnContinue"],15000);
	  kony.automation.button.click(["frmP2PRecPhoneNo","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"],15000);
	  kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],"PTOPAccJasmine");
	  kony.automation.playback.waitFor(["frmP2PRecipientName","btnContinue"],15000);
	  kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
	  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"],15000);
	  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
	  kony.automation.playback.waitFor(["frmContracts","btnContinue"],15000);
	  kony.automation.button.click(["frmContracts","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"],15000);
	  kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
	
	}
	
	function linkReciptent(){
	
	  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"],15000);
	  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmContracts","customHeader","lblLocateUs"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmContracts","btnContinue"],15000);
	  kony.automation.button.click(["frmContracts","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"],15000);
	  kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function verifyAddingNewReciptientSuccessMsg(){
	
	  var Success=kony.automation.playback.waitFor(["frmEuropeAcknowledgement","lblSuccessMessage"],15000);
	  if(Success){
	
	    kony.automation.playback.waitFor(["frmEuropeAcknowledgement","lblSuccessMessage"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmEuropeAcknowledgement","lblSuccessMessage"], "text")).not.toBe('');
	    kony.automation.playback.waitFor(["frmEuropeAcknowledgement","btnDashboard"],15000);
	    kony.automation.button.click(["frmEuropeAcknowledgement","btnDashboard"]);
	    kony.automation.playback.wait(5000);
	  }else{
	
	    kony.automation.playback.waitFor(["frmEuropeAcknowledgement","btnTryAgain"],15000);
	    kony.automation.button.click(["frmEuropeAcknowledgement","btnTryAgain"]);
	    kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","customHeader","flxBack"],15000);
	    kony.automation.flexcontainer.click(["frmEuropeManageBeneficiaries","customHeader","flxBack"]);
	    // kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
	    // kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
	  }
	
	}
	
	
	function VerifyRecipientList(){
	
	  kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	  MoveBackfromRecipientList();
	
	}
	
	function CancelSearchRecipient(){
	
	  kony.automation.playback.waitFor(["frmManageRecipientList","customSearchbox","btnCancel"],15000);
	  kony.automation.button.click(["frmManageRecipientList","customSearchbox","btnCancel"]);
	}
	
	function MoveBackfromRecipientList(){
	
	  // MoveBack to DashBoard
	  kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
	}
	function SearchforPayee_External(payeeName){
	
	  // Search for Recipient
	  kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [87,24],null,null);
	  kony.automation.playback.waitFor(["frmManageRecipientList","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],payeeName);
	  kony.automation.playback.wait(5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","segRecipients[0,0]","flxcontent"], "text")).not.toBe('');
	}
	
	function DeleteReciptent(){
	
	  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
	  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
	  kony.automation.playback.waitFor(["frmManageTransferRecipient","customHeader","flxSearch"],15000);
	  kony.automation.flexcontainer.click(["frmManageTransferRecipient","customHeader","flxSearch"]);
	  kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmManageTransferRecipientInfo","customHeader","btnRight"]);
	
	  kony.automation.button.click(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
	  kony.automation.alert.click(0);
	  kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function DeletePTOPReciptent(){
	
	  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
	  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
	
	  kony.automation.playback.waitFor(["frmManageP2pRecipient","btnDeleteRecipient"],15000);
	  kony.automation.button.click(["frmManageP2pRecipient","btnDeleteRecipient"]);
	  kony.automation.alert.click(0);
	  kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function EditReciptent(UniqueUpdatedNickName){
	
	  //Update Recipient
	  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
	  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
	  kony.automation.playback.waitFor(["frmManageTransferRecipient","customHeader","flxSearch"],15000);
	  kony.automation.flexcontainer.click(["frmManageTransferRecipient","customHeader","flxSearch"]);
	  kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmManageTransferRecipientInfo","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","btnEditRecipientDetails"],15000);
	  kony.automation.button.click(["frmManageTransferRecipientInfo","btnEditRecipientDetails"]);
	  kony.automation.playback.waitFor(["frmManageEditRecipient","txtRecipientName"],15000);
	  kony.automation.textbox.enterText(["frmManageEditRecipient","txtRecipientName"],UniqueUpdatedNickName);
	  kony.automation.playback.waitFor(["frmManageEditRecipient","btnSave"],15000);
	  kony.automation.button.click(["frmManageEditRecipient","btnSave"]);
	}
	
	function EditPTOPReciptent(UniqueUpdatedNickName){
	
	  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
	  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
	  //Update Recipient
	  kony.automation.playback.waitFor(["frmManageP2pRecipient","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmManageP2pRecipient","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmManageP2pRecipient","btnEditRecipientDetails"],15000);
	  kony.automation.button.click(["frmManageP2pRecipient","btnEditRecipientDetails"]);
	  kony.automation.playback.waitFor(["frmManageEditRecipient","txtRecipientName"],15000);
	  kony.automation.textbox.enterText(["frmManageEditRecipient","txtRecipientName"],"PToPAccJasmineHCrfjNICK");
	  kony.automation.playback.waitFor(["frmManageEditRecipient","btnSave"],15000);
	  kony.automation.button.click(["frmManageEditRecipient","btnSave"]);
	}
	
	function doTransferOnRecipient(AmountValue,Notes){
	
	  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
	  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmManageTransferRecipient","btnTransfer"],15000);
	  kony.automation.button.click(["frmManageTransferRecipient","btnTransfer"]);
	  SelectFromAccount();
	  EnterAmount(AmountValue);
	  EnterNoteValue(Notes);
	  ConfirmTransfer();
	  VerifyTransferSuccessMessage();
	
	}
	
	
	function openManageTransactions(){
	  openMenu("Manage Transactions");
	}
	
	function verifyAllTransferFilter(){
	
		let flag = isDataPresent("Transfers");
		if(flag){
			selectFilters("All Transfers");
	    }
		else{
			expect(flag).toBe(true);
		}  
	}
	
	function verifyRecurringAllTransaction(){
	  selectRecurringTab();
	  let flag = isDataPresent("Recurring");
	  if(flag){
			selectFilterAllTransfersInReccurring();
	  }else{
	    expect(flag).toBe(true);
	  }
	}
	
	function selectFilters(filter){
	// 	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","SearchAndFilter","flxAdvancedFilter"],20000);
		
	  /*
		kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],20000);
		kony.automation.flexcontainer.click(["frmTransferActivitiesTransfersEurope","SearchAndFilter","flxAdvancedFilter"]);
		kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions"],15000);
		let segData = kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions"], "data");
		let index = getIndexOfFilterOption(segData, filter);
		kony.automation.segmentedui.click(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions[0, " + index + "]"]);
		kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],15000); 
		*/
	  kony.automation.playback.wait(2000);
	  let currForm = kony.automation.getCurrentForm();
		kony.automation.playback.waitFor([currForm,"TransfersListMobileNative","segTransfersList"],20000);
		kony.automation.flexcontainer.click([currForm,"SearchAndFilter","flxAdvancedFilter"]);
		kony.automation.playback.waitFor([currForm,"SearchAndFilter","sgmtFilterOptions"],15000);
		let segData = kony.automation.widget.getWidgetProperty([currForm,"SearchAndFilter","sgmtFilterOptions"], "data");
		let index = getIndexOfFilterOption(segData, filter);
		kony.automation.segmentedui.click([currForm,"SearchAndFilter","sgmtFilterOptions[0, " + index + "]"]);
		kony.automation.playback.waitFor([currForm,"TransfersListMobileNative","segTransfersList"],15000); 
	
	}
	
	function selectFilterCompletedTransfers(){
		kony.automation.flexcontainer.click(["frmTransferActivitiesTransfersEurope","SearchAndFilter","flxAdvancedFilter"]);
		kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions"],15000);
		kony.automation.segmentedui.click(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions[0,5]"]);
		kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],15000); 
	}
	
	function selectFilterAllTransfersInReccurring(){
		kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","SearchAndFilter","flxAdvancedFilter"],10000);
		kony.automation.flexcontainer.click(["frmTransferActivitiesRecurringEurope","SearchAndFilter","flxAdvancedFilter"]);
		kony.automation.segmentedui.click(["frmTransferActivitiesRecurringEurope","SearchAndFilter","sgmtFilterOptions[0,0]"]);
		kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList"],10000);
	}
	
	function isDataPresent(tabName){
	  if(tabName === "Transfers"){
		return !kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","lblNoRecords"], 10000);
	// 	return kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","SearchAndFilter","flxAdvancedFilter"],10000);
	  }else if(tabName === "Recurring"){
		return !kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","lblNoRecords"], 10000);
	//     return kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","SearchAndFilter","flxAdvancedFilter"],10000);
	  }
	}
	
	function goBackFromTransfersTabs(){
		kony.automation.playback.wait(2000);
		kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","customHeader","flxBack"],15000);
		kony.automation.playback.wait(2000);
		kony.automation.flexcontainer.click(["frmTransferActivitiesTransfersEurope","customHeader","flxBack"]);
	}
	
	function goBackFromRecurringTabs(){
		kony.automation.playback.wait(2000);
		kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","customHeader","flxBack"],15000);
		kony.automation.playback.wait(2000);
		kony.automation.flexcontainer.click(["frmTransferActivitiesRecurringEurope","customHeader","flxBack"]);
	}
	
	function selectRecurringTab(){
		kony.automation.playback.wait(5000);
		kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","tabs","flxMainContainer","btnTab2"],15000);
		kony.automation.button.click(["frmTransferActivitiesTransfersEurope","tabs","flxMainContainer","btnTab2"]);
	}
	
	function cancelTransaction(){
		kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],15000);
		kony.automation.segmentedui.click(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList[0,0]"]);
		kony.automation.playback.waitFor(["frmTransfersDetailsEurope","DetailsMain","flxMain","button2"],15000);
		kony.automation.button.click(["frmTransfersDetailsEurope","DetailsMain","flxMain","button2"]);
		kony.automation.alert.click(0);
		kony.automation.playback.wait(5000);
	}
	
	function editRecurringTransaction(){
		kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList"],15000);
		kony.automation.segmentedui.click(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList[0,0]"]);
		kony.automation.playback.waitFor(["frmRecurringDetailsEurope","DetailsMain","flxMain", "button1"],15000);
		kony.automation.button.click(["frmRecurringDetailsEurope","DetailsMain", "flxMain", "button1"]);
		kony.automation.playback.wait(5000);
	}
	
	function cancelRecurringTransaction(){
		kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList"],15000);
		kony.automation.segmentedui.click(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList[0,0]"]);
		kony.automation.playback.waitFor(["frmRecurringDetailsEurope","DetailsMain","flxMain","button2"],15000);
		kony.automation.button.click(["frmRecurringDetailsEurope","DetailsMain","flxMain","button2"]);
		kony.automation.alert.click(0);
		kony.automation.playback.wait(5000);
	}
	
	function repeatTransaction(){
		kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],15000);
		kony.automation.segmentedui.click(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList[0,0]"]);
		kony.automation.playback.waitFor(["frmTransfersDetailsEurope","DetailsMain","flxMain","button1"],15000);
		kony.automation.button.click(["frmTransfersDetailsEurope","DetailsMain","flxMain","button1"]);
		kony.automation.alert.click(0);
		kony.automation.playback.wait(5000);
	}
	
	function verifyTransactionStatus(status){
		kony.automation.playback.wait(3000);
		let currForm = kony.automation.getCurrentForm();
		kony.automation.playback.waitFor([currForm,"TransfersListMobileNative","segTransfersList"],15000);
		kony.automation.playback.wait(3000);
		expect(kony.automation.widget.getWidgetProperty([currForm,"TransfersListMobileNative","segTransfersList[0,0]","lblField3"], "text")).toContain(status);
	}
	
	function searchTransaction(value){
		kony.automation.playback.wait(2000);
		let currForm = kony.automation.getCurrentForm();
	  
		kony.automation.playback.waitFor([currForm,"SearchAndFilter","txtSearchBox"],15000);
		kony.automation.playback.wait(2000);
		kony.automation.textbox.enterText([currForm,"SearchAndFilter","txtSearchBox"],value);
	}
	
	function getIndexOfFilterOption(segData, value){
		let i=0;
		let j=0;
		
		for(i=0; i< segData.length; i++){
			if(segData[i].lblFilterOption.text.includes(value)){
				return i;
			}
		}
		return 0;		
	}
	
	function NavigateToSettings(){
	  openMenu("Settings");
	}
	
	function enableAccountsPreview(){
	
	  kony.automation.playback.waitFor(["frmSettings","segSettingsLogin"],15000);
	  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,0]"]);
	  kony.automation.playback.waitFor(["frmPreferencesAccountPreview","switchPreview"],15000);
	  kony.automation.switch.toggle(["frmPreferencesAccountPreview","switchPreview"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmPreferencesAccountPreview","switchPreview"],15000);
	  kony.automation.switch.toggle(["frmPreferencesAccountPreview","switchPreview"]);
	
	  kony.automation.playback.waitFor(["frmPreferencesAccountPreview","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPreferencesAccountPreview","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	}
	
	function MoveBackFromSettings_DashBoard(){
	
	  kony.automation.playback.waitFor(["frmSettings","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSettings","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmSettings","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmSettings","Hamburger","segHamburger[0,0]"]);
	
	  VerifyAccountsDashBoard();
	}
	
	function CancelEditAccountPreference(){
	  kony.automation.playback.waitFor(["frmSettings","segSettingsDefaultAccount"]);
		kony.automation.segmentedui.click(["frmSettings","segSettingsDefaultAccount[0,0]"]);
		kony.automation.playback.waitFor(["frmEStmtAccountPreferences","segSelectAccounts"]);
		kony.automation.segmentedui.click(["frmEStmtAccountPreferences","segSelectAccounts[0,0]"]);
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","customHeader","btnRight"]);
		kony.automation.button.click(["frmEStmtAccountDetails","customHeader","btnRight"]);
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","flxCancel"]);
		kony.automation.flexcontainer.click(["frmEStmtAccountDetails","flxCancel"]);
		kony.automation.flexcontainer.click(["frmEStmtAccountDetails","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmEStmtAccountPreferences","customHeader","flxBack"]);
		kony.automation.flexcontainer.click(["frmEStmtAccountPreferences","customHeader","flxBack"]);
	}
	
	function VerifyConsentTypeNotClickable(){ 
	  
	// 	kony.automation.playback.waitFor(["frmSettings","segConsentManagement"],15000);
	// 	kony.automation.segmentedui.click(["frmSettings","segConsentManagement[0,0]"]);
		OpenConsentManagement();
		kony.automation.playback.waitFor(["frmConsentManagement","segConsentTypes"],15000);
		kony.automation.segmentedui.click(["frmConsentManagement","segConsentTypes[0,0]"]);
		
		let frmName = kony.automation.getCurrentForm();
		if(frmName !== "frmConsentManagement"){
		expect(true).toBe(false);
		}
	}
	function MoveBackFromConsentToSetting(){
		kony.automation.playback.waitFor(["frmConsentManagement","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmConsentManagement","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmSettings","segConsentManagement"],15000);
	}
	
	function EditAndSaveConsent(){
	// 	kony.automation.playback.waitFor(["frmSettings","segConsentManagement"],15000);
	// 	kony.automation.segmentedui.click(["frmSettings","segConsentManagement[0,0]"]);
	  OpenConsentManagement();
		kony.automation.playback.waitFor(["frmConsentManagement","customHeader","btnRight"],15000);
		kony.automation.button.click(["frmConsentManagement","customHeader","btnRight"]);
		kony.automation.playback.wait(1000);
		// :User Injected Code Snippet [// - [9 lines]]
		let selectedIndex = kony.automation.widget.getWidgetProperty(["frmConsentManagement","segEditConsent[0,0]","switchSelect"], "selectedIndex");
		
		if(selectedIndex === 1){
		kony.automation.switch.toggle(["frmConsentManagement","segEditConsent[0,0]","switchSelect"]);
		kony.automation.scrollToWidget(["frmConsentManagement","btnSave"]);
			kony.automation.button.click(["frmConsentManagement","btnSave"]);
		}else{
		kony.automation.button.click(["frmConsentManagement","customHeader","btnRight"]);
		}
		// :End User Injected Code Snippet {78c1cf0c-1cfe-3f99-cbb1-452de59d143c}
		kony.automation.playback.wait(5000);
	}
	
	function ValidateSelectedConsent(){
		kony.automation.playback.waitFor(["frmConsentManagement","segConsentTypes"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmConsentManagement","segConsentTypes[0,0]","lblValue"], "text")).toEqual("Yes"); 
	}
	
	function OpenConsentManagement(){
		kony.automation.playback.waitFor(["frmSettings","segConsentManagement"],15000);
		kony.automation.segmentedui.click(["frmSettings","segConsentManagement[0,0]"]);
		kony.automation.playback.waitFor(["frmConsentManagement","segConsentTypes"],15000);
	}
	
	function setDefaultAccounts(){
	
	  kony.automation.playback.waitFor(["frmSettings","segSettingsDefaultAccount"],15000);
	  kony.automation.scrollToWidget(["frmSettings","segSettingsDefaultAccount"]);
	  kony.automation.segmentedui.scrollToRow(["frmSettings","segSettingsDefaultAccount[0,1]"]);
	  kony.automation.segmentedui.click(["frmSettings","segSettingsDefaultAccount[0,1]"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmSetDefaultAccount","segSelectAccounts"],15000);
	  kony.automation.segmentedui.click(["frmSetDefaultAccount","segSelectAccounts[0,0]"]);
	
	  kony.automation.playback.waitFor(["frmPreferencesDefaultAccount","segAccounts"],15000);
	  var accounts_Size=kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultAccount","segAccounts"],"data");
	  var segLength=accounts_Size.length;
	  //isCheck=kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultAccount","segAccounts[1,0]","imgRadio"]);
	
	  for(var x = 0; x <segLength; x++) {
	
	    var seg="segAccounts[0,"+x+"]";
	    var isCheck=kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultAccount",seg,"imgRadio"],"text");
	
	    if(isCheck){
	      kony.print("Already set as default account");
	    }else{
	      kony.automation.segmentedui.click(["frmPreferencesDefaultAccount",seg]);
	      kony.automation.playback.wait(10000);
	      break;
	    }
	  }
	
	  kony.automation.playback.waitFor(["frmSetDefaultAccount","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSetDefaultAccount","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function setAccountAlerts(){
	
	  kony.automation.playback.waitFor(["frmSettings","segSettingsAlerts"],15000);
	  kony.automation.segmentedui.click(["frmSettings","segSettingsAlerts[0,2]"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAlertsAccountPref","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmAlertsAccountPref","segTransactions[0,0]"]);
	  kony.automation.playback.wait(5000);
	
	  //kony.automation.playback.waitFor(["frmAlertGroupsList","lblInlineMessage"],15000);
	  //var isDisable=kony.automation.widget.getWidgetProperty(["frmAlertGroupsList","lblInlineMessage"],"text");
	
	  kony.automation.playback.waitFor(["frmAlertGroupsList","switchReceiveAlerts"],15000);
	  kony.automation.switch.toggle(["frmAlertGroupsList","switchReceiveAlerts"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.alert.click(0);
	  kony.automation.playback.wait(10000);
	
	  kony.automation.playback.waitFor(["frmAlertGroupsList","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAlertGroupsList","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAlertsAccountPref","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmAlertsAccountPref","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function VerifyOnClickProfileName(){
	
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxHeaderMain"],15000);
	  kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxHeaderMain"], null,null,[92,28]);
	  kony.automation.playback.wait(10000);
	}
	
	function NavigateToProfileSettings(){
	  
	  kony.automation.playback.waitFor(["frmSettings","segSettingsProfile"],15000);
	  kony.automation.segmentedui.click(["frmSettings","segSettingsProfile[0,1]"]);
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmProfilePersonalDetails","customHeader","btnRight"]);
	}
	function verifyAddingNewPhoneNumber(isPrimary,MobileNumber){
	
	  NavigateToProfileSettings();
	  
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditPhoneNumbers"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditPhoneNumbers"]);
	  var addNewNumber=kony.automation.playback.waitFor(["frmProfileEditPhoneNumbers","btnContinue"],15000);
	
	  if(addNewNumber){
	    kony.automation.button.click(["frmProfileEditPhoneNumbers","btnContinue"]);
	    kony.automation.playback.waitFor(["frmProfileSelectLocation","segContactLocation"],15000);
	    kony.automation.segmentedui.click(["frmProfileSelectLocation","segContactLocation[0,0]"]);
	    kony.automation.playback.waitFor(["frmProfileContactType","segContactType"],15000);
	    kony.automation.segmentedui.click(["frmProfileContactType","segContactType[0,1]"]);
	
	    kony.automation.playback.waitFor(["frmProfileEditPhoneNumberMain","keypad","btnEight"],15000);
	    for(i=0; i<MobileNumber.length; i++){
	      kony.automation.button.click(["frmProfileEditPhoneNumberMain","keypad", getBtnID(MobileNumber.charAt(i))]);
	    }
	
	    if(isPrimary==='YES'){
	      kony.automation.playback.waitFor(["frmProfileEditPhoneNumberMain","flxCheckboxPrimary"],15000);
	      kony.automation.flexcontainer.click(["frmProfileEditPhoneNumberMain","flxCheckboxPrimary"]);
	    }
	
	    kony.automation.playback.waitFor(["frmProfileEditPhoneNumberMain","btnVerifyPhoneNumber"],15000);
	    kony.automation.button.click(["frmProfileEditPhoneNumberMain","btnVerifyPhoneNumber"]);
	    kony.automation.playback.waitFor(["frmProfileConfirmDetails","btnUpdateChanges"],15000);
	    kony.automation.button.click(["frmProfileConfirmDetails","btnUpdateChanges"]);
	
	  }
	  
	  kony.automation.playback.waitFor(["frmProfileEditPhoneNumbers","customHeader","flxBack"]);
	  kony.automation.flexcontainer.click(["frmProfileEditPhoneNumbers","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"]);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);
	}
	
	function verifyUpdatingPhoneNumber(){
	
	  kony.automation.playback.waitFor(["frmSettings","segSettingsProfile"],15000);
	  kony.automation.segmentedui.click(["frmSettings","segSettingsProfile[0,1]"]);
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmProfilePersonalDetails","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditPhoneNumbers"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditPhoneNumbers"]);
	
	  kony.automation.playback.waitFor(["frmProfileEditPhoneNumbers","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfileEditPhoneNumbers","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);
	}
	
	function verifyAddingNewEmailAddress(isPrimary,emailAddress){
	
	  NavigateToProfileSettings();
	  
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditEmail"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditEmail"]);
	  var addNewEmail=kony.automation.playback.waitFor(["frmProfileEditEmails","btnContinue"],15000);
	
	  if(addNewEmail){
	    kony.automation.button.click(["frmProfileEditEmails","btnContinue"]);
	    kony.automation.playback.waitFor(["frmProfileEnterEmailID","tbxEmail"],15000);
	    kony.automation.textbox.enterText(["frmProfileEnterEmailID","tbxEmail"],emailAddress);
	    if(isPrimary==='YES'){
	      kony.automation.playback.waitFor(["frmProfileEnterEmailID","flxCheckboxPrimary"],15000);
	      kony.automation.flexcontainer.click(["frmProfileEnterEmailID","flxCheckboxPrimary"]);
	    }
	    kony.automation.playback.waitFor(["frmProfileEnterEmailID","btnContinue"],15000);
	    kony.automation.button.click(["frmProfileEnterEmailID","btnContinue"]);
	  }
	
	  kony.automation.playback.waitFor(["frmProfileEditEmails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfileEditEmails","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);
	}
	
	function verifyUpdatingEmailaddress(){
	
	  NavigateToProfileSettings();
	
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditEmail"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditEmail"]);
	
	  kony.automation.playback.waitFor(["frmProfileEditEmails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfileEditEmails","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);
	
	}
	
	
	function verifyAddingNewAddress(isPrimary,Address1,City,Pincode){
	
	  NavigateToProfileSettings();
	
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditAddress"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditAddress"]);
	
	  var addNewAddress=kony.automation.playback.waitFor(["frmProfileEditAddressList","btnContinue"],15000);
	  if(addNewAddress){
	    kony.automation.button.click(["frmProfileEditAddressList","btnContinue"]);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressLineOne"],15000);
	    kony.automation.playback.wait(1000);
	    kony.automation.textbox.enterText(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressLineOne"],Address1);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","lstbxCountry"],15000);
	    kony.automation.listbox.selectItem(["frmProfileAddAddress","flxMainContainer","lstbxCountry"], "IN");
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","lstbxState"],15000);
	    kony.automation.listbox.selectItem(["frmProfileAddAddress","flxMainContainer","lstbxState"], "IN-AP");
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressCity"],15000);
	    kony.automation.textbox.enterText(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressCity"],City);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressZipCode"],15000);
	    kony.automation.textbox.enterText(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressZipCode"],Pincode);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","btnContinueResidentialAddress"],15000);
	    kony.automation.button.click(["frmProfileAddAddress","flxMainContainer","btnContinueResidentialAddress"]);
	    kony.automation.playback.waitFor(["frmProfileAdressType","segAddressType"],15000);
	    kony.automation.button.click(["frmProfileAdressType","segAddressType[0,0]","btnOption"]);
	
	    if(isPrimary==="YES"){
	      kony.automation.playback.waitFor(["frmProfileConfirmAddressDetails","flxCheckboxPrimary"],15000);
	      kony.automation.flexcontainer.click(["frmProfileConfirmAddressDetails","flxCheckboxPrimary"]);
	    }
	
	    kony.automation.playback.waitFor(["frmProfileConfirmAddressDetails","btnUpdateChanges"],15000);
	    kony.automation.button.click(["frmProfileConfirmAddressDetails","btnUpdateChanges"]);
	  }
	
	  kony.automation.playback.waitFor(["frmProfileEditAddressList","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfileEditAddressList","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);
	
	}
	
	
	function verifyUpdatingaddress(){
	
	  NavigateToProfileSettings();
	
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditAddress"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditAddress"]);
	
	  kony.automation.playback.waitFor(["frmProfileEditAddressList","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfileEditAddressList","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);
	
	}
	
	function enableDisableEStatement(){
		kony.automation.playback.waitFor(["frmSettings","segSettingsDefaultAccount"],15000);
		kony.automation.segmentedui.click(["frmSettings","segSettingsDefaultAccount[0,0]"]);
		kony.automation.playback.waitFor(["frmEStmtAccountPreferences","segSelectAccounts"],15000);
		kony.automation.segmentedui.click(["frmEStmtAccountPreferences","segSelectAccounts[0,0]"]);
		let btnDisable = kony.automation.playback.waitFor(["frmEStmtAccountDetails","btnDisable"],5000);
		
		if(btnDisable){
		kony.automation.button.click(["frmEStmtAccountDetails","btnDisable"]);
		kony.automation.playback.waitFor(["frmEStmtDisableEStatements","btnDisable"],15000);
		kony.automation.button.click(["frmEStmtDisableEStatements","btnDisable"]);
		}else{
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","btnEnable"],5000);
		kony.automation.button.click(["frmEStmtAccountDetails","btnEnable"]);
		kony.automation.playback.waitFor(["frmEStmtEnableEStatements","flxCheckBox"],15000);
		kony.automation.widget.touch(["frmEStmtEnableEStatements","flxCheckBox"], [13,6],null,null);
		kony.automation.button.click(["frmEStmtEnableEStatements","btnEnable"]);
		}
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","customPopup","lblPopup"],30000);
		expect(kony.automation.widget.getWidgetProperty(["frmEStmtAccountDetails","customPopup","lblPopup"], "text")).toContain("success");
		
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmEStmtAccountDetails","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmEStmtAccountPreferences","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmEStmtAccountPreferences","customHeader","flxBack"]);
	}
	
	function getBtnID(num){
	  switch(num){
	    case '0' :
	      return "btnZero";
	    case '1' :
	      return "btnOne";
	    case '2' :
	      return "btnTwo";
	    case '3' :
	      return "btnThree";
	    case '4' :
	      return "btnFour";
	    case '5' :
	      return "btnFive";
	    case '6' :
	      return "btnSix";
	    case '7' :
	      return "btnSeven";
	    case '8' :
	      return "btnEight";
	    case '9' :
	      return "btnNine";
	  }
	}
	
	function getRandomNumber(length) {
	  var randomChars = '0123456789';
	  var result = '';
	  for ( var i = 0; i < length; i++ ) {
	    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	  }
	  return result;
	}
	
	function navigateToTransfers(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.wait(10000);
	  
	  openMenu("Transfers");
	  
	}
	
	function NavigateToPayements(){
	  openMenu("Send Money");
	}
	
	function SelectFromAccount(fromAccount){
	  kony.automation.playback.wait(5000);
	 let currFormName = kony.automation.getCurrentForm();
	
	  kony.automation.playback.waitFor([currFormName,"tbxSearch"],15000);
	  kony.automation.widget.touch([currFormName,"tbxSearch"], [232,14],null,null);
	  kony.automation.playback.waitFor([currFormName,"customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],fromAccount);
	  kony.automation.playback.wait(3000);
	  expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
	  kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	  kony.automation.segmentedui.click([currFormName,"segTransactions[0,0]"]);
	  kony.automation.playback.wait(5000);
	
	}
	function ClickOnTransferToNewRecipient(){
	
		kony.automation.playback.waitFor(["frmEuropeTransferToAccountSM","btnNewAccount"],15000);
		kony.automation.button.click(["frmEuropeTransferToAccountSM","btnNewAccount"]);
		kony.automation.playback.waitFor(["frmEuropeTransferToAccountNewBen","SegSelectBank"],15000);
	}
	
	function SelectToAccount(ToAccReciptent){
		let currFormName = kony.automation.getCurrentForm();
	  kony.automation.playback.waitFor([currFormName,"tbxSearch"],15000);
	  kony.automation.widget.touch([currFormName,"tbxSearch"], [72,22],null,[72,65]);
	
	  if(ToAccReciptent==="OwnAcc"){
	    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],"Saving");
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions[0,0]"]);
	
	    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
	  }else{
	    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],ToAccReciptent);
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions[0,0]"]);
	
	    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
	  }  
	
	  kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	  kony.automation.segmentedui.click([currFormName,"segTransactions[0,0]"]);
	  kony.automation.playback.wait(5000);
	}
	
	function SelectTransferAccount(ToAccReciptent){
	  kony.automation.playback.wait(4000);
	  let currFormName = kony.automation.getCurrentForm();
	  let index = {"i" : 0 , "j" : 0};
	  kony.automation.playback.waitFor([currFormName,"tbxSearch"],15000);
	  kony.automation.widget.touch([currFormName,"tbxSearch"], [72,22],null,[72,65]);
	
	  if(ToAccReciptent==="OwnAcc"){
	    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],"Saving");
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	    
		let  segData = kony.automation.widget.getWidgetProperty([currFormName,"segTransactions"], "data");
		index = getIndexOfAccount(segData , "Saving");
	    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions["+index.i +"," + index.j + "]"]);
	
	    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions["+index.i +"," + index.j + "]","lblAccountName"], "text")).not.toBe('');
	  }else{
	    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],ToAccReciptent);
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	    
	    let  segData = kony.automation.widget.getWidgetProperty([currFormName,"segTransactions"], "data");
	    index = getIndexOfAccount(segData , ToAccReciptent);
	    
	    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions["+index.i +"," + index.j + "]"]);
	
	    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions["+index.i +"," + index.j + "]","lblAccountName"], "text")).not.toBe('');
	  }  
	
	  kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	  kony.automation.segmentedui.click([currFormName,"segTransactions["+index.i +"," + index.j + "]"]);
	  kony.automation.playback.wait(5000);
	}
	
	function EnterAmount(Amount) {
	  kony.automation.playback.wait(3000);
	let currFormName = kony.automation.getCurrentForm();
	  kony.automation.playback.waitFor([currFormName,"keypad","btnThree"],15000);
	  for(i=0; i<Amount.length; i++){
	    kony.automation.button.click([currFormName,"keypad", getBtnID(Amount.charAt(i))]);
	  }
	  kony.automation.playback.waitFor([currFormName,"btnContinue"],15000);
	  kony.automation.button.click([currFormName,"btnContinue"]);
	  kony.automation.playback.wait(5000);
	}
	
	function SelectFrequency(ValTimePeriod) {
	  // kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	
	  // kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	  
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","segDetails"],15000);
	  let segData = kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","segDetails"], "data");
	  let index = getIndexFromSegment(segData , "Frequency");
	  kony.automation.segmentedui.click(["frmEuropeVerifyTransferDetails","segDetails[0,"+index+ "]"]);
	
	  kony.automation.playback.waitFor(["frmEuropeFrequency","segOptions"],15000);
	  switch(ValTimePeriod){
	    case "Daily":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,1]"]);
	      break;
	    case "Weekly":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,2]"]);
	      break;
	    case "HalfY":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,6]"]);
	      break;
	    case "Yearly":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,7]"]);
	      break;
	    case "QTR":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,5]"]);
	      break;
	    case "Monthly":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,4]"]);
	      break;
	  }
	
	  kony.automation.playback.wait(5000);
	}
	
	
	function SelectDateRange() {
	
	  kony.automation.playback.waitFor(["frmEuropeDuration","segOptions"],15000);
	  kony.automation.segmentedui.click(["frmEuropeDuration","segOptions[0,0]"]);
	
	  kony.automation.playback.waitFor(["frmEuropeStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmEuropeStartDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	  kony.automation.widget.touch(["frmEuropeStartDate","customCalendar","m3CopyLabel0j8ef8b8e650148"], null,null,[20,11]);
	  // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	  kony.automation.playback.waitFor(["frmEuropeEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmEuropeEndDate","customCalendar","flxNextMonth"]);
	  kony.automation.playback.waitFor(["frmEuropeEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmEuropeEndDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//select "End" date - [3 lines]]
	  //kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0e9e5d9d7b7e84d"]);
	
	  kony.automation.widget.touch(["frmEuropeEndDate","customCalendar","m3CopyLabel0e9e5d9d7b7e84d"], null,null,[20,11]);  // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	  kony.automation.playback.waitFor(["frmEuropeEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmEuropeEndDate","btnContinue"]);
	
	  kony.automation.playback.wait(8000);
	}
	
	function SelectSendOnDate() {
	
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","segDetails"],15000);
	  let segData = kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","segDetails"], "data");
	  let index = getIndexFromSegment(segData , "Send On");
	  kony.automation.segmentedui.click(["frmEuropeVerifyTransferDetails","segDetails[0,"+index+ "]"]);
	
	  // Selet Start date
	   kony.automation.playback.waitFor(["frmEuropeStartDate","customCalendar","flxNextMonth"],15000);
		kony.automation.flexcontainer.click(["frmEuropeStartDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmEuropeStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  kony.automation.playback.waitFor(["frmEuropeStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmEuropeStartDate","btnContinue"]);
	  kony.automation.playback.wait(5000);
	}
	
	function SelectOccurences() {
	
	  kony.automation.playback.waitFor(["frmMMDuration","segOptions"],15000);
	  kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);
	
	  // Selet Start date
	  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnTwo"]);
	  kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function EnterPaymentReference(notes) {
		kony.automation.playback.waitFor(["frmEuropeTransferReference","tbxReference"],15000);
		kony.automation.textbox.enterText(["frmEuropeTransferReference","tbxReference"],notes);
	  kony.automation.playback.waitFor(["frmEuropeTransferReference","btnContinue"],15000);
		kony.automation.button.click(["frmEuropeTransferReference","btnContinue"]);
		kony.automation.playback.wait(5000);
	}
	
	function SelectNormalDomesticPayment(){
		kony.automation.playback.waitFor(["frmEuropePaymentMedium","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropePaymentMedium","segOptions[0,0]"]);
		kony.automation.playback.waitFor(["frmEuropeFeePayment","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropeFeePayment","segOptions[0,0]"]);
		kony.automation.playback.wait(5000);
	}
	
	function SelectInstantDomesticPayment(){
		kony.automation.playback.waitFor(["frmEuropePaymentMedium","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropePaymentMedium","segOptions[0,1]"]);
		kony.automation.playback.waitFor(["frmEuropeFeePayment","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropeFeePayment","segOptions[0,0]"]);
		kony.automation.playback.wait(5000);
	}
	
	function SelectIWillPayFees(){
		kony.automation.playback.waitFor(["frmEuropeFeePayment","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropeFeePayment","segOptions[0,0]"]);
		kony.automation.playback.wait(5000);
	}
	/**
	 * @function
	 *
	 */
	function ConfirmTransfer() {
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","flxAddIcon"],15000);
	  kony.automation.flexcontainer.click(["frmEuropeVerifyTransferDetails","flxAddIcon"]);
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","btnClose"],10000);
	  kony.automation.button.click(["frmEuropeVerifyTransferDetails","btnClose"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","btnTransfer"],25000);
	  kony.automation.button.click(["frmEuropeVerifyTransferDetails","btnTransfer"]);
	  kony.automation.playback.wait(5000);
	  
	
	}
	
	function CancelTransfer(){
	
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmEuropeVerifyTransferDetails","customHeader","btnRight"]);
	  kony.automation.playback.wait(5000);
	}
	
	function verifyBankNameInReviewScreen(fromAccount, toAccount){
		kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","lblFromAccountValue"],15000);
	  
		fromAccount = fromAccount.substring(0,4);
		toAccount = toAccount.substring(0,4);
		
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","lblFromAccountValue"], "text")).toContain(fromAccount);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","lblToAccountValue"], "text")).toContain(toAccount);
	}
	
	function verifyBankNameInAckScreen(fromAccount, toAccount){
		kony.automation.playback.wait(5000);
		kony.automation.playback.waitFor(["frmEuropeConfirmation","lblSuccessMessage"],15000);
	  
		fromAccount = fromAccount.substring(0,4);
		toAccount = toAccount.substring(0,4);
		
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,1]","lblDetails"], "text")).toContain(fromAccount);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,2]","lblDetails"], "text")).toContain(toAccount);
	}
	
	function VerifyDataTruncated(){
		kony.automation.playback.waitFor(["frmEuropeConfirmation","segDetails"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,0]","lblDetails"], "text")).not.toBeNull();
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,1]","lblDetails"], "text")).not.toBeNull();
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,2]","lblDetails"], "text")).not.toBeNull();
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,3]","lblDetails"], "text")).not.toBeNull();
	}
	
	function VerifySwitftCode(){
		let swiftCode = kony.automation.playback.waitFor(["frmEuropeConfirmation_1","lblSwiftCodeabc"],2000);
		let address = kony.automation.playback.waitFor(["frmEuropeConfirmation","lblAddress"],2000);
		
		if(swiftCode && address){
		expect(true).toBe(false);
		}
	}
	
	function VerifyPaymentMethod(){
		let paymentMethod = kony.automation.playback.waitFor(["frmEuropeConfirmation","segDetails[0,3]","lblTitle"],5000);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,3]","lblTitle"], "text")).not.toEqual("Payment Method");
	}
	
	function VerifyTransferSuccessMessage() {
	
		kony.automation.playback.waitFor(["frmEuropeConfirmation","lblSuccessMessage"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","lblSuccessMessage"], "text")).not.toBe('');
	
		kony.automation.playback.waitFor(["frmEuropeConfirmation","flxError"],5000);
		let flxError = kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","flxError"], "isVisible");
		if(flxError){
	      expect("Transaction").toBe("successful");
	      kony.automation.button.click(["frmEuropeConfirmation","btnTryAgain"]);
	      kony.automation.playback.wait(1000);	
	      kony.automation.playback.waitFor(["frmEuropeTransferFromAccount","customHeader","btnRight"],15000);
	      kony.automation.button.click(["frmEuropeTransferFromAccount","customHeader","btnRight"]);
		}
		else{
	      kony.automation.playback.waitFor(["frmEuropeConfirmation","btnDashboard"],15000);
	      kony.automation.button.click(["frmEuropeConfirmation","btnDashboard"]);
	      kony.automation.playback.wait(5000);
	    }
		VerifyAccountsDashBoard();
	}
	
	function MoveBackToLandingScreen_Transfers(){
	
		kony.automation.playback.waitFor(["frmMMTransferAmount","customHeader","btnRight"],15000);
		kony.automation.button.click(["frmMMTransferAmount","customHeader","btnRight"]);
		kony.automation.playback.wait(5000);
	    VerifyAccountsDashBoard();
	}
	
	function getRandomString(length) {
	  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	  var result = '';
	  for ( var i = 0; i < length; i++ ) {
	    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	  }
	  return result;
	}
	
	function getBtnID(num){
	  switch(num){
	    case '0' :
	      return "btnZero";
	    case '1' :
	      return "btnOne";
	    case '2' :
	      return "btnTwo";
	    case '3' :
	      return "btnThree";
	    case '4' :
	      return "btnFour";
	    case '5' :
	      return "btnFive";
	    case '6' :
	      return "btnSix";
	    case '7' :
	      return "btnSeven";
	    case '8' :
	      return "btnEight";
	    case '9' :
	      return "btnNine";
	  }
	}
	
	function getRandomNumber(length) {
	  var randomChars = '0123456789';
	  var result = '';
	  for ( var i = 0; i < length; i++ ) {
	    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	  }
	  return result;
	}
	
	function getIndexFromSegment(segData , val){
		for(let i=0; i < segData.length; i++){
			if(segData[i].property === val){
				return i;
			}
		}
		return 0; //default
	}
	
	function getIndexOfAccount(segData , accountName){
	  let i=0;
	  let j=0;
	  for(i=0; i<segData.length; i++){
	      if(segData[i].length > 1){
	          for(j=0; j<segData[i][1].length; j++){
	              if(segData[i][1][j].processedName.includes(accountName)){
	                  return { i, j};
	              }
	          }
	      }
	  }
	  return {i,j };
	}
	
	
	// Previous Functions- Commenting
	
	// function SearchInFromAndToScreen(valType) {
	
	//   try{
	
	
	//     var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
	//     kony.print("The current Form Name ::"+currentwidget1);
	//     if(currentwidget1 === "Sign In"){
	
	//       kony.automation.button.click(["frmLogout","btnLogIn"]);
	//       kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	//       kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
	//       kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
	//       kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	//       kony.automation.playback.wait(25000);
	//     }    
	
	//   }catch(err){
	//     kony.print("Unable to find widget");
	//   }
	//   //kony.automation.playback.wait(25000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.wait(8000);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], null,null,null);
	//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"check");
	//   //Kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	//   //var checkingAcc = ;
	//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
	//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);
	//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	//   if(valType==="normal"){
	//     kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"credit");
	//   }else{
	//     kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"PToPRecipient");
	//   }  
	//   kony.automation.playback.wait(1000);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount","segTransactions[0,0]"]);
	//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");
	
	//   expect(creditCard).not.toBe(null);
	
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
	//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	// }
	
	
	// // function EnterAmount() {
	// //   kony.automation.playback.wait(5000);
	// //   kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
	// //   kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	// //   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	// //   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	// //   kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	// //   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
	// // }
	
	
	// function SelectFrequencyOnceAndTransfer() {
	
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],10000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMStartDate","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   expect(kony.automation.playback.waitFor(["frmMMConfirmation","lblSuccessMessage"],20000)).toEqual(true);
	//   kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	// }
	
	
	// function TransferScheduleOnce() {
	//   // :User Injected Code Snippet [//Prerequisite Verify_Search_In_FromAndToScreen - []]
	
	//   // :End User Injected Code Snippet {0d4c824b-a9ad-8c0e-5c44-a3292aac96a1}
	//   kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	//   kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//Select a date - [3 lines]]
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
	//   kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMStartDate","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnToAccount"],10000)).toContain(true);
	//   kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	// }
	
	// function SelectNumberOfTransfersAndThenConfirmTransfer(valTimePeriod,valueType) {
	//   kony.automation.playback.waitFor(["frmMMDuration","segOptions"],10000);
	//   kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//Select a Start Date - [1 lines]]
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {83f58aab-137d-4051-a051-d2801329c71d}
	//   kony.automation.playback.waitFor(["frmMMNumberOfTransfers","keypad","btnFive"],15000);
	//   kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnFive"]);
	//   kony.automation.playback.waitFor(["frmMMNumberOfTransfers","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],10000)).toBe(true);
	//   kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	// }
	
	
	// function ScheduledTransferDailyDateRange() {
	//   kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	//   kony.automation.playback.waitFor(["frmMMTransferAmount","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMDuration","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//select "End" date - [3 lines]]
	//   //kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	//   kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	//   kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
	//   kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","lblLocateUs"],10000);
	// }
	
	
	
	// function SearchP2PInFromAndToScreen() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.playback.wait(2000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
	//   kony.automation.playback.wait(1000);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	//   //var checkingAcc = ;
	//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).toContain("Check");
	//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	//   kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"P2P");
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect P2P recipient - [2 lines]]
	//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");
	//   expect(creditCard).not.toBe(null);
	//   // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
	//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	// }
	
	// function SearchSameBankInFromAndToScreen() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	//   //var checkingAcc = ;
	//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
	//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	//   kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"samebank2");
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Credit Card - [2 lines]]
	//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");
	//   expect(creditCard).not.toBe(null);
	//   // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
	//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	// }
	
	
	
	// function SelectDateRangeAndConfirmTransfer(ValTimePeriod, valueType) {
	//   //write your automation code here
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmMMDuration","segOptions[0,0]"],10000);
	//   kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//select "End" date - [3 lines]]
	//   // kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	//   kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	//   kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   try{
	//     kony.automation.playback.wait(10000);
	//     var errorMsg1 = kony.automation.widget.getWidgetProperty(["frmMMConfirmation","btnNewTransfer"], "text");
	
	//     if(errorMsg1==="New Transfer"){
	//       kony.print("Error::Inside New Transfer");
	//       kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
	//       kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	
	//     }else{
	//       kony.print("***********************");
	//       //       var lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
	//       // 		var lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
	
	//       // 		expect(lblMessage.toLowerCase()).toContain("success");
	//       // 		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	
	//       var tempB=kony.automation.widget.getWidgetProperty(["frmMMConfirmation","lblMessage"], "text");
	//       kony.print("TeLL Me the Value :"+tempB);
	//       expect(tempB).toContain("Successfully Scheduled Transfer");
	//       kony.automation.playback.waitFor(["frmMMConfirmation","btnToAccount"],15000);
	//       kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
	//     }
	
	//   }catch(err){
	//     kony.print("Error::Unable to find element");
	
	//     try{
	//       kony.automation.playback.wait(10000);
	//       var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
	//       kony.print("The current Form Name ::"+currentwidget1);
	//       if(currentwidget1 === "Sign In"){
	
	//         kony.automation.button.click(["frmLogout","btnLogIn"]);
	//         kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	//         kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
	//         kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
	//         kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	//         kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],5000);
	//         /***********************************/
	
	//         //ValTimePeriod, ValueType
	//         SearchInFromAndToScreen(valueType);
	//         EnterAmount();
	//         SelectFrequency(ValTimePeriod);
	//         SelectDateRangeAndConfirmTransfer(ValTimePeriod, valueType);
	
	//       }     
	
	//     }catch(err1){
	//       kony.print("Error::"+err1.message);
	//     }
	//   }
	//   kony.automation.playback.wait(10000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	// }
	
	
	// // function SelectFrequencyDaily() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	// // }
	
	// // function SelectFrequencyHalfYearly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,6]"]);
	// // }
	
	
	// // function SelectFrequencyMonthly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,4]"]);
	// // }
	
	// // function SelectFrequencyQuarterly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,5]"]);
	// // }
	
	// // function SelectFrequencyWeekly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,2]"]);
	// // }
	
	
	// // function SelectFrequencyYearly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,7]"]);
	// // }
	
	// function OpenManageRecipientP2P() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.playback.wait(2000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
	//   kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
	//   kony.automation.playback.wait(2000);
	//   kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
	//   kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],15000);
	// }
	
	
	// function SearchP2PInFromAndToScreen() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(2000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
	//   kony.automation.playback.wait(1000);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	//   //var checkingAcc = ;
	//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
	//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	//   kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"P2P");
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect P2P recipient - [2 lines]]
	//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]]","flxAccountsNoImageTransfers","flxMain","flxAccountName","lblAccountName"],"text");
	//   expect(creditCard).not.toBe(null);
	//   // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	// }
	
	// function GoBackToDB() {
	//   kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],10000);
	//   kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
	
	// }
	
	// function Logout() {
	//   kony.automation.playback.wait(25000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(3000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"],5000);
	//   kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[34,28]);
	//   kony.automation.playback.waitFor(["frmLogout","btnLogIn"],10000);
	//   kony.automation.button.click(["frmLogout","btnLogIn"]);
	//   kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	// }
	
	it("AddTravelPlan", async function() {
	  goTocardManagement();
	  openManageTravelPlans();
	  clickOnAddNewTravelPlan();
	  selectTravalDates();
	  enterDestination("India");
	  selectFirstCard();
	  confirmAddTravelPlan();
	  goBackFromManageTravelPlans();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("EditTravelPlan", async function() {
	  goTocardManagement();
	  openManageTravelPlans();
	  editTravelDestination();
	  enterDestination("Australia");
	  goBackFromTravelDetails_To_ManageTravelPlans();
	  goBackFromManageTravelPlans();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("DeleteTravelPlan", async function() {
	  goTocardManagement();
	  openManageTravelPlans();
	  deleteTravelPlan();
	  goBackFromManageTravelPlans();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("ChangePIN", async function() {
	  goTocardManagement();
	  changePin();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("SetATMWithdrawalLimit", async function() {
	  goTocardManagement();
	  setATMWithdrawalLimit();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("SetPurchaseLimit", async function() {
	  goTocardManagement();
	  setPurchaseLimit();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("VerifyCardDetails", async function() {
	  goTocardManagement();
	  verifyCardDetails();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("VerifyCardNumber", async function() {
	  goTocardManagement();
	  verifyCardNoLastDigits();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("ViewTransactions", async function() {
	  goTocardManagement();
	  viewTransactions();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("LockCard", async function() {
	  goTocardManagement();
	  lockCard();
	  goToDashboardFromCardManagement();
	},120000);
	
	it("UnlockCard", async function() {
	  goTocardManagement();
	  unlockCard();
	  goToDashboardFromCardManagement();
	},120000);
});