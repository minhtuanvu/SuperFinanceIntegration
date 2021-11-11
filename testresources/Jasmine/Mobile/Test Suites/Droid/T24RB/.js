describe("", function() {
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
	
	it("VerifyCheckingAccAdvancedSearch", async function() {
	  
	  ClickonFirstCheckingAccount();
	  VerifyAdvancedSearch();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyCheckingAccLandingScreen", async function() {
	  
	  ClickonFirstCheckingAccount();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyCheckingAccMoreOptions", async function() {
	  
	  ClickonFirstCheckingAccount();
	  VerifyMoreoptionsDisplayed();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyCheckingAccountinfo", async function() {
	  
	  ClickonFirstCheckingAccount();
	  VerifyAccInfo();
	  MoveBackFromAccInfo();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyCheckingAccPendingTranx", async function() {
	  
	  ClickonFirstCheckingAccount();
	  VerifyPendingTranscations();
	  VerifyAccountsDashBoard();
	  
	},90000);
	
	it("VerifyCheckingAccPostedTranx", async function() {
	  
	  ClickonFirstCheckingAccount();
	  VerifyPostedTranscations();
	  VerifyAccountsDashBoard();
	  
	},90000);
	
	it("VerifyCheckingAccScrollingTranx", async function() {
	  
	  ClickonFirstCheckingAccount();
	  ScrollDownTranscations();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyDepositAccAdvancedSearch", async function() {
	  
	  ClickonFirstDepositAccount();
	  VerifyAdvancedSearch();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyDepositAccLandingScreen", async function() {
	  
	  ClickonFirstDepositAccount();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyDepositAccMoreOptions", async function() {
	  
	  ClickonFirstDepositAccount();
	  VerifyMoreoptionsDisplayed();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyDepositAccountinfo", async function() {
	  
	  ClickonFirstDepositAccount();
	  VerifyAccInfo();
	  MoveBackFromAccInfo();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyDepositAccPendingTranx", async function() {
	  
	  ClickonFirstDepositAccount();
	  VerifyPendingTranscations();
	  VerifyAccountsDashBoard();
	  
	},90000);
	
	it("VerifyDepositAccPostedTranx", async function() {
	  
	  ClickonFirstDepositAccount();
	  VerifyPostedTranscations();
	  VerifyAccountsDashBoard();
	  
	},90000);
	
	it("VerifyDepositAccScrollingTranx", async function() {
	  
	  ClickonFirstDepositAccount();
	  ScrollDownTranscations();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyEditCheckingAccountNickName", async function() {
	  
	  ClickonFirstCheckingAccount();
	  VerifyAccInfo();
	  verifyEditAccountNickname(Transfers.checkingAccount.name);
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyEditDepositAccountNickName", async function() {
	  
	  ClickonFirstDepositAccount();
	  VerifyAccInfo();
	  verifyEditAccountNickname(Transfers.depositAccount.name);
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyEditLoanAccountNickName", async function() {
	  
	  ClickonFirstLoanAccount();
	  VerifyAccInfo();
	  verifyEditAccountNickname(Transfers.loanAccount.name);
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyEditSavingAccountNickName", async function() {
	  
	  ClickonFirstSavingAccount();
	  VerifyAccInfo();
	  verifyEditAccountNickname(Transfers.savingsAccount.name);
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyLoanAccAdvancedSearch", async function() {
	  
	  ClickonFirstLoanAccount();
	  VerifyAdvancedSearch();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyLoanAccLandingScreen", async function() {
	  
	  ClickonFirstLoanAccount();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyLoanAccMoreOptions", async function() {
	  
	  ClickonFirstLoanAccount();
	  VerifyMoreoptionsDisplayed();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyLoanAccountinfo", async function() {
	  
	  ClickonFirstLoanAccount();
	  VerifyAccInfo();
	  MoveBackFromAccInfo();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyLoanAccPendingTranx", async function() {
	  
	  ClickonFirstLoanAccount();
	  VerifyPendingTranscations();
	  VerifyAccountsDashBoard();
	  
	},90000);
	
	it("VerifyLoanAccPostedTranx", async function() {
	  
	  ClickonFirstLoanAccount();
	  VerifyPostedTranscations();
	  VerifyAccountsDashBoard();
	  
	},90000);
	
	it("VerifyLoanAccScrollingTranx", async function() {
	  
	  ClickonFirstLoanAccount();
	  ScrollDownTranscations();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyOptionsOnCheckingAcc", async function() {
	  
	  ClickonFirstCheckingAccount();
	  VerifyOptionsOnLandingScreen();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyOptionsOnCreditCardAcc", async function() {
	  
	  ClickonFirstCreditCardAccount();
	  VerifyOptionsOnLandingScreen();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyOptionsOnDepositAcc", async function() {
	  
	  ClickonFirstDepositAccount();
	  VerifyOptionsOnLandingScreen();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyOptionsOnLoanAcc", async function() {
	  
	  ClickonFirstLoanAccount();
	  VerifyOptionsOnLandingScreen();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifyOptionsOnSavingAcc", async function() {
	  
	  ClickonFirstSavingAccount();
	  VerifyOptionsOnLandingScreen();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifySavingAccAdvancedSearch", async function() {
	  
	  ClickonFirstSavingAccount();
	  VerifyAdvancedSearch();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifySavingAccPendingTranx", async function() {
	  
	  ClickonFirstSavingAccount();
	  VerifyPendingTranscations();
	  VerifyAccountsDashBoard();
	  
	},90000);
	
	it("VerifySavingAccPostedTranx", async function() {
	  
	  ClickonFirstSavingAccount();
	  VerifyPostedTranscations();
	  VerifyAccountsDashBoard();
	  
	},90000);
	
	it("VerifySavingAccScrollingTranx", async function() {
	  
	  ClickonFirstSavingAccount();
	  ScrollDownTranscations();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifySavingsAccLandingScreen", async function() {
	  
	  ClickonFirstSavingAccount();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifySavingsAccMoreOptions", async function() {
	  
	  ClickonFirstSavingAccount();
	  VerifyMoreoptionsDisplayed();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
	
	it("VerifySavingsAccountinfo", async function() {
	  
	  ClickonFirstSavingAccount();
	  VerifyAccInfo();
	  MoveBackFromAccInfo();
	  MoveBackfromAccountDetails();
	  VerifyAccountsDashBoard();
	  
	},120000);
});