describe("RB_AccountsDashboard", function() {
	beforeEach(function() {
	
	  var flgDashboard = kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
	  kony.print("Dashboard : "+flgDashboard);
	  if(flgDashboard){
	
	    // Do Nothing
	
	  }else{
	    var currentwidget;
	
	    try{
	      kony.automation.playback.wait(2000);
	      currentwidget = kony.automation.widget.getWidgetProperty(["frmLogin","login","btnLogIn"], "text");
	      kony.print("The current Form Name ::"+currentwidget);
	    }catch(err){
	      kony.print("Error::"+err.message);
	    }
	    
	    try{
	      kony.automation.playback.wait(3000);
	        var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
	        kony.print("The current Form Name ::"+currentwidget1);
	        if(currentwidget1 === "Sign In"){
	
	          kony.automation.button.click(["frmLogout","btnLogIn"]);
	          kony.automation.playback.waitFor(["frmLogin","tbxUsername"],10000);
	          currentwidget=currentwidget1;
	        }     
	
	      }catch(err1){
	        kony.print("Error::"+err1.message);
	      }
	
	    if(currentwidget === "Sign In"){
	
	      kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	      kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
	      kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
	      kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	
	      // Verifying Terms and conditions screen
	
	      var frmTnC = kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],10000);
	      if(frmTnC){
	        kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
	        kony.automation.playback.waitFor(["frmTermsAndCondition","btnContinue"]);
	        kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
	      }
	      kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	      kony.automation.alert.click(0);
	      //kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	    }
	
	  }
	
	},90000);
	
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
	    kony.automation.playback.wait(5000);
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
	
	  SelectAccountOndashBoard("Saving");
	
	}
	
	function ClickonFirstCheckingAccount(){
	
	  SelectAccountOndashBoard("Checking");
	}
	
	function ClickonFirstLoanAccount(){
	
	  SelectAccountOndashBoard("Loan");
	}
	
	function ClickonFirstCreditCardAccount(){
	
	  SelectAccountOndashBoard("Credit Card");
	}
	
	function ClickonFirstDepositAccount(){
	
	  SelectAccountOndashBoard("Deposit");
	}
	
	function VerifyAccInfo(){
	
	  kony.automation.playback.waitFor(["frmAccountDetails","customHeader","imgSearch"],15000);
	  kony.automation.widget.touch(["frmAccountDetails","customHeader","imgSearch"], null,null,[11,9]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmAccountInfo","information","lblTab1Header"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountInfo","information","lblTab1Header"], "text")).not.toBe('');
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
	
	function NavigateToManageRecipitents() {
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
	//   kony.automation.playback.wait(5000);
	  openMenu("Manage Beneficiaries");
	}
	
	function MoveBacktoDashboard_ManageRecipitent(){
	
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
	
	  var Success=kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"],15000);
	  if(Success){
	
	    kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).not.toBe('');
	    kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"],15000);
	    kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
	    kony.automation.playback.wait(5000);
	  }else{
	
	    kony.automation.playback.waitFor(["frmAcknowledgement","btnTryAgain"],15000);
	    kony.automation.button.click(["frmAcknowledgement","btnTryAgain"]);
	    kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
	    kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
	    kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
	    kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
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
	
	
	function NavigateToMessages(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,14]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,14]"]);
	  
	  openMenu("Messages");
	
	  verifyMessagesScreen();
	}
	
	function verifyMessagesScreen(){
	
	  kony.automation.playback.waitFor(["frmMessages","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmMessages","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	}
	
	function ComposeNewMessage(){
	
	  kony.automation.playback.waitFor(["frmMessages","flxSearch"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","flxSearch"]);
	  kony.automation.playback.waitFor(["frmNewMessageCategory","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNewMessageCategory","customHeader","lblLocateUs"], "text")).toEqual("New Message");
	  kony.automation.playback.waitFor(["frmNewMessageCategory","segCategory"],15000);
	  kony.automation.segmentedui.click(["frmNewMessageCategory","segCategory[0,1]"]);
	  kony.automation.playback.waitFor(["frmNewMessage","tbxSubject"],15000);
	  kony.automation.textbox.enterText(["frmNewMessage","tbxSubject"],"testJasmine");
	  kony.automation.playback.waitFor(["frmNewMessage","txtareaDescription"],15000);
	  kony.automation.textarea.enterText(["frmNewMessage","txtareaDescription"],"testJasmine");
	  kony.automation.playback.waitFor(["frmNewMessage","btnSend"],15000);
	  kony.automation.button.click(["frmNewMessage","btnSend"]);
	  kony.automation.playback.wait(10000);
	
	  verifyMessagesScreen();
	}
	
	function selectFirstMessage(){
	
	  kony.automation.playback.waitFor(["frmMessages","flxInbox"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","flxInbox"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmMessages","segMessagesInbox"],15000);
	  //kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxMessagesMain"], [96,42],[[96,42],[96,42]],[96,42]);
	  kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxmain"], [96,42],[[96,42],[96,42]],[96,42]);
	  kony.automation.gesture.tap(["frmMessages","segMessagesInbox[0,0]","flxmain"], {"taps":1,"fingers":1,"point":[287.138671875,126.1083984375]});
	  kony.automation.playback.wait(10000);
	}
	
	function deleteNewMessage(){
	
	  selectFirstMessage();
	
	  kony.automation.playback.waitFor(["frmMessagesDetails","flxDelete"],15000);
	  kony.automation.flexcontainer.click(["frmMessagesDetails","flxDelete"]);
	  kony.automation.alert.click(0);
	  kony.automation.playback.wait(10000);
	
	  verifyMessagesScreen(); 
	}
	
	function replyNewMessage(){
	
	  selectFirstMessage();
	
	  kony.automation.playback.waitFor(["frmMessagesDetails","flxReply"],15000);
	  kony.automation.flexcontainer.click(["frmMessagesDetails","flxReply"]);
	  kony.automation.textarea.enterText(["frmMessagesDetails","txtAreaReply"],"reply Message");
	  kony.automation.playback.waitFor(["frmMessagesDetails","btnSend"],15000);
	  kony.automation.button.click(["frmMessagesDetails","btnSend"]);
	  kony.automation.playback.wait(10000);
	
	  verifyMessagesScreen();
	
	
	}
	
	function restoreNewMessage(){
	
	  // Mandate to have 
	  kony.automation.playback.waitFor(["frmMessages","flxInbox"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","flxInbox"]);
	  kony.automation.playback.wait(5000);
	  // Mandate to have 
	
	  kony.automation.playback.waitFor(["frmMessages","flxDeleted"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","flxDeleted"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmMessages","segMessagesInbox"],15000);
	  //kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxMessagesMain"], [96,42],[[96,42],[96,42]],[96,42]);
	  kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxmain"], [96,42],[[96,42],[96,42]],[96,42]);
	  kony.automation.gesture.tap(["frmMessages","segMessagesInbox[0,0]","flxmain"], {"taps":1,"fingers":1,"point":[287.138671875,126.1083984375]});
	  kony.automation.playback.wait(10000);
	
	  kony.automation.playback.waitFor(["frmMessagesDetails","btnRestore"],15000);
	  kony.automation.button.click(["frmMessagesDetails","btnRestore"]);
	  kony.automation.playback.wait(10000);
	
	  verifyMessagesScreen();
	
	}
	
	function searchNewMessage(){
	
	  kony.automation.playback.waitFor(["frmMessages","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMessages","tbxSearch"], [108,10],null,null);
	  kony.automation.playback.waitFor(["frmMessages","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmMessages","customSearchbox","tbxSearch"],"test");
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmMessages","segMessagesInbox"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmMessages","segMessagesInbox[0,0]","lblSubject"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmMessages","customSearchbox","btnCancel"],15000);
	  kony.automation.widget.touch(["frmMessages","customSearchbox","btnCancel"], null,null,[24,7]);
	  kony.automation.playback.waitFor(["frmMessages","customSearchbox","btnCancel"],15000);
	  kony.automation.button.click(["frmMessages","customSearchbox","btnCancel"]);
	  kony.automation.playback.wait(5000);
	
	  verifyMessagesScreen();
	
	
	}
	
	function verifyRequestID(){
	
	  selectFirstMessage();
	
	  kony.automation.playback.waitFor(["frmMessagesDetails","segMessageDetails"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmMessagesDetails","segMessageDetails[0,0]","lblReqVal"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmMessagesDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmMessagesDetails","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	  verifyMessagesScreen();
	}
	
	function MoveBackToDashBoard_Messages(){
	
	  kony.automation.playback.waitFor(["frmMessages","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmMessages","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.scrollToRow(["frmMessages","Hamburger","segHamburger[0,0]"]);
	  kony.automation.segmentedui.click(["frmMessages","Hamburger","segHamburger[0,0]"]);
	  kony.automation.playback.wait(5000);
	
	  VerifyAccountsDashBoard();
	
	}
	
	function navigateToBillPay(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
	//   kony.automation.playback.wait(10000);
	  openMenu("My Bills");
	  kony.automation.playback.waitFor(["frmBillPay","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPay","customHeader","lblLocateUs"], "text")).toEqual("My Bills");
	  kony.automation.playback.waitFor(["frmBillPay","tbxSearch"],15000);
	
	}
	
	function navigateToManageBillPay(){
	
	  kony.automation.playback.waitFor(["frmBillPay","flxManage"],15000);
	  kony.automation.widget.touch(["frmBillPay","flxManage"], [15,51],null,[15,51]);
	  kony.automation.playback.waitFor(["frmBillPay","flxManage"],15000);
	  kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
	  kony.automation.playback.wait(10000);
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","customHeader","lblLocateUs"], "text")).toEqual("All Payees");
	}
	
	function clickOnAddPayeeLinkManually(){
	
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"],15000);
	  kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);
	  kony.automation.playback.waitFor(["frmBillPaySearchPayee","flxAddManually"],15000);
	  kony.automation.flexcontainer.click(["frmBillPaySearchPayee","flxAddManually"]);
	}
	
	function clickOnAddPayeeCompany(){
	
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"],15000);
	  kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);
	
	  kony.automation.playback.waitFor(["frmBillPaySearchPayee","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmBillPaySearchPayee","tbxSearch"], [95,18],null,null);
	  kony.automation.playback.waitFor(["frmBillPaySearchPayee","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmBillPaySearchPayee","customSearchbox","tbxSearch"],"at");
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmBillPaySearchPayee","segAddresses"],15000);
	  kony.automation.segmentedui.click(["frmBillPaySearchPayee","segAddresses[0,0]"]);
	}
	
	function enterPayeeDetails_UsingCompany(unique_Accnumber,unique_PhoneNumber,note){
	
	  kony.automation.playback.waitFor(["frmBillPayZipCode","txtZipCode"],15000);
	  kony.automation.textbox.enterText(["frmBillPayZipCode","txtZipCode"],"500055");
	  kony.automation.playback.waitFor(["frmBillPayZipCode","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayZipCode","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayRelationNumber","keypad","btnOne"],15000);
	  for(i=0; i<unique_Accnumber.length; i++){
	    kony.automation.button.click(["frmBillPayRelationNumber","keypad", getBtnID(unique_Accnumber.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmBillPayRelationNumber","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayRelationNumber","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayReEnterRelationNumber","keypad","btnOne"],15000);
	  for(i=0; i<unique_Accnumber.length; i++){
	    kony.automation.button.click(["frmBillPayReEnterRelationNumber","keypad", getBtnID(unique_Accnumber.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmBillPayReEnterRelationNumber","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayReEnterRelationNumber","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayPhoneNumber","keypad","btnFive"],15000);
	  for(i=0; i<unique_PhoneNumber.length; i++){
	    kony.automation.button.click(["frmBillPayPhoneNumber","keypad", getBtnID(unique_PhoneNumber.charAt(i))]);
	  }
	
	  kony.automation.playback.waitFor(["frmBillPayPhoneNumber","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayPhoneNumber","btnContinue"]);
	
	  linkPayee();
	
	  VerifyAddPayeeDetails(note);
	
	}
	
	function enterPayeeDetails_UsingPayeeinfo(unique_RecipitentName,address1,city,state,zipcode,unique_Accnumber,note){
	
	  kony.automation.playback.waitFor(["frmBillPayEditName","txtName"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],unique_RecipitentName);
	  kony.automation.playback.waitFor(["frmBillPayEditName","btnSave"],15000);
	  kony.automation.button.click(["frmBillPayEditName","btnSave"]);
	
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtAddressLineOne"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtAddressLineOne"],address1);
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtCity"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtCity"],city);
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtState"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtState"],state);
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtZipCode"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtZipCode"],zipcode);
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","btnSave"],15000);
	  kony.automation.button.click(["frmBillPayEditAddress","btnSave"]);
	
	  kony.automation.playback.waitFor(["frmBillPayEnterAccNo","keypad","btnZero"],15000);
	  for(i=0; i<unique_Accnumber.length; i++){
	    kony.automation.button.click(["frmBillPayEnterAccNo","keypad", getBtnID(unique_Accnumber.charAt(i))]);
	  }
	
	  kony.automation.playback.waitFor(["frmBillPayEnterAccNo","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayEnterAccNo","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","keypad","btnZero"],15000);
	  for(i=0; i<unique_Accnumber.length; i++){
	    kony.automation.button.click(["frmBillPayReEnterAccNo","keypad", getBtnID(unique_Accnumber.charAt(i))]);
	  }
	
	  kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayReEnterAccNo","btnContinue"]);
	
	  linkPayee();
	
	  VerifyAddPayeeDetails(note);
	
	}
	
	function linkPayee(){
	
	  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"],15000);
	  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
	  kony.automation.playback.waitFor(["frmContracts","btnContinue"],15000);
	  kony.automation.button.click(["frmContracts","btnContinue"]);
	}
	
	function VerifyAddPayeeDetails(note){
	
	  kony.automation.playback.waitFor(["frmBillPayVerifyDetails","txtNameOnBill"],15000);
	  kony.automation.textbox.enterText(["frmBillPayVerifyDetails","txtNameOnBill"],note);
	  kony.automation.playback.waitFor(["frmBillPayVerifyDetails","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayVerifyDetails","btnContinue"]);
	}
	
	function verifyAddPayeeSuccessMsg(){
	
	  kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).not.toBe('');
	
	  //Move Back to DashBoard
	  kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"],15000);
	  kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
	  kony.automation.playback.wait(2000);
	
	  MoveBackfrom_Allpayees();
	
	}
	
	function MoveBackfrom_Allpayees(){
	
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
	  kony.automation.playback.wait(2000);
	
	  MoveBackfrom_Billpay();
	
	}
	
	function MoveBackfrom_Billpay(){
	
	  kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
	  kony.automation.playback.wait(2000);
	  kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
	  kony.automation.playback.wait(2000);
	}
	
	function selectPayee_ManagePayee(PayeeName){
	
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [165,20],null,null);
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],PayeeName);
	  kony.automation.playback.wait(2000);
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","segAccounts"],15000);
	  kony.automation.segmentedui.click(["frmBillPayAllPayees","segAccounts[0,0]"]);
	}
	
	function EditPayee_ManagePayee(NickName){
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnEditNickName"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","btnEditNickName"]);
	
	  kony.automation.playback.waitFor(["frmBillPayEditName","txtName"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],NickName);
	  kony.automation.playback.waitFor(["frmBillPayEditName","btnSave"],15000);
	  kony.automation.button.click(["frmBillPayEditName","btnSave"]);
	
	}
	
	function DeletePayee_ManagePayee(){
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnDeleteRecipient"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.alert.click(0);
	  kony.automation.playback.wait(10000);
	
	  MoveBackfrom_Allpayees();
	}
	
	function ActivatePayee_ManagePayee(){
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnActivateEBill"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","btnActivateEBill"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.alert.click(0);
	  kony.automation.playback.wait(10000);
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayPayeeDetails","customHeader","flxBack"]);
	  kony.automation.playback.wait(2000);
	
	  MoveBackfrom_Allpayees();
	
	
	}
	
	function verifySearch_MyBills(Payee){
	
	  kony.automation.playback.waitFor(["frmBillPay","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmBillPay","tbxSearch"], [212,20],null,null);
	  kony.automation.playback.waitFor(["frmBillPay","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmBillPay","customSearchbox","tbxSearch"],Payee);
	  kony.automation.playback.wait(5000);
	  //kony.automation.playback.waitFor(["frmBillPay","segTransactions"]);
	  //expect(kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[0,0]","lblAccountName"], "text")).toEqual("SOMETHING");
	  kony.automation.playback.waitFor(["frmBillPay","customSearchbox","btnCancel"],15000);
	  kony.automation.button.click(["frmBillPay","customSearchbox","btnCancel"]);
	
	  MoveBackfrom_Billpay();
	}
	
	function verifySearch_AllPayees(Payee){
	
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [193,14],null,null);
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],Payee);
	  kony.automation.playback.wait(5000);
	  //kony.automation.playback.waitFor(["frmBillPayAllPayees","segAccounts"]);
	  //expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","segAccounts[0,0]","lblAccountName"], "text")).toEqual("SOMETHING");
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","btnCancel"],15000);
	  kony.automation.button.click(["frmBillPayAllPayees","customSearchbox","btnCancel"]);
	
	  MoveBackfrom_Allpayees();
	}
	
	
	function clickonPayBill_PayeeDetails(){
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnPayAPerson"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","btnPayAPerson"]);
	}
	function EnterBillAmount(amount){
	
	  kony.automation.playback.waitFor(["frmBillPayAmount","keypad","btnTwo"],15000);
	  for(i=0; i<amount.length; i++){
	    kony.automation.button.click(["frmBillPayAmount","keypad", getBtnID(amount.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
	}
	
	function SelectFrequency_BillPay(ValTimePeriod) {
	
	
	  kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);
	
	  switch(ValTimePeriod){
	    case "OneTime":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,1]"]);
	      break;
	    case "Daily":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,2]"]);
	      break;
	    case "Weekly":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,3]"]);
	      break;
	    case "TwoWeeks":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,4]"]);
	      break;
	    case "Monthly":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,5]"]);
	      break;
	    case "QTR":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,6]"]);
	      break;
	    case "TwoYear":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,7]"]);
	      break;
	    case "YEARLY":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,8]"]);
	      break;
	  }
	
	  kony.automation.playback.wait(5000);
	}
	
	function selectSendOndate_BillPay(){
	
	  // Selet Start date
	  kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);
	
	}
	
	function selectDateRange_BillPay(){
	
	  // Selet Start date
	  kony.automation.playback.waitFor(["frmBillPayDuration","segDuration"],15000);
	  kony.automation.segmentedui.click(["frmBillPayDuration","segDuration[0,0]"]);
	
	  kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayEndDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmBillPayEndDate","customCalendar","flxMonth","m3CopyLabel0a7f34907bda844"], null,null,[17,9]);
	
	  kony.automation.playback.waitFor(["frmBillPayEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayEndDate","btnContinue"]);
	}
	
	function enterNoteValue_BillPay(notes){
	
	  kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
	  kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],notes);
	
	  kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
	  kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function CancelMyBill(){
	
	  kony.automation.playback.waitFor(["frmBillPayFrequency","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmBillPayFrequency","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayPayeeDetails","customHeader","flxBack"]);
	
	  MoveBackfrom_Allpayees();
	
	}
	
	
	function EditSheduledPayBill(){
	
	  kony.automation.playback.waitFor(["frmBillPay","segTransactions"],15000);
	
	  var sheduledPay= kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[1,-1]","lblHeader"], "text");
	  if(sheduledPay){
	
	    kony.automation.segmentedui.click(["frmBillPay","segTransactions[1,0]"]);
	    kony.automation.playback.wait(5000);
	
	    kony.automation.playback.waitFor(["frmTransactionDetails","customHeader","btnRight"],15000);
	    kony.automation.button.click(["frmTransactionDetails","customHeader","btnRight"]);
	    kony.automation.playback.wait(5000);
	
	    kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
	    kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);
	    kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,0]"]);
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
	    kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Edit Billpay");
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
	    kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
	    kony.automation.playback.wait(5000);
	
	    MoveBackfrom_Billpay();
	
	  }else{
	    MoveBackfrom_Billpay();
	  }
	
	}
	
	function RepeatSheduledPayBill(){
	
	  kony.automation.playback.waitFor(["frmBillPay","segTransactions"],15000);
	
	  var RepeatPay= kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[2,-1]","lblHeader"], "text");
	  if(RepeatPay){
	
	    kony.automation.segmentedui.click(["frmBillPay","segTransactions[2,0]"]);
	    kony.automation.playback.wait(5000);
	    kony.automation.playback.waitFor(["frmTransactionDetails","btnRepeatTransBP"],15000);
	    kony.automation.button.click(["frmTransactionDetails","btnRepeatTransBP"]);
	    kony.automation.playback.wait(5000);
	    kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
	    kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);
	    kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,0]"]);
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
	    kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Repeat Billpay");
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
	    kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
	    kony.automation.playback.wait(5000);
	
	    MoveBackfrom_Billpay();
	
	  }else{
	    MoveBackfrom_Billpay();
	  }
	
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
	
	// OLDER Functions
	
	// function Logout() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"],5000);
	//   kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[34,28]);
	//   kony.automation.playback.waitFor(["frmLogout","btnLogIn"],10000);
	//   kony.automation.button.click(["frmLogout","btnLogIn"]);
	//   kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	// }
	
	// /**
	//  * @addNewPayee
	//  *
	//  */
	// function addNewPayee(){
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
	//   kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
	//   kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"]);
	//   kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);
	//   kony.automation.playback.waitFor(["frmBillPaySearchPayee","flxAddManually"]);
	//   kony.automation.flexcontainer.click(["frmBillPaySearchPayee","flxAddManually"]);
	
	//   unique_PayeeName="Automationuser Credit card "+getRandomString(5);
	
	//   kony.automation.playback.waitFor(["frmBillPayEditName","txtName"]);
	//   kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],unique_PayeeName);
	//   kony.automation.button.click(["frmBillPayEditName","btnSave"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmBillPayEditAddress","txtAddressLineOne"]);
	//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtAddressLineOne"],"2");
	//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtCity"],"Jersey city");
	//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtState"],"New Jersey");
	//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtZipCode"],"20971");
	//   kony.automation.button.click(["frmBillPayEditAddress","btnSave"]);
	//   kony.automation.playback.wait(8000);
	//   kony.automation.playback.waitFor(["frmBillPayEnterAccNo","keypad","btnOne"]);
	
	//   let uniqueAccNumber = getRandomNumber(9);
	//   kony.print("uniqueAccNumber : "+uniqueAccNumber);
	
	//   for(i=0;i<uniqueAccNumber.length; i++){
	//     let btnID = getBtnID(uniqueAccNumber.charAt(i));
	//     kony.automation.button.click(["frmBillPayEnterAccNo","keypad", btnID]);
	//   }
	
	//   kony.automation.button.click(["frmBillPayEnterAccNo","btnContinue"]);
	//   kony.automation.playback.wait(5000);
	
	//   kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","keypad","btnOne"]);
	//   for(i=0;i<uniqueAccNumber.length; i++){
	//     let btnIDNew = getBtnID(uniqueAccNumber.charAt(i));
	//     kony.automation.button.click(["frmBillPayReEnterAccNo","keypad", btnIDNew]);
	//   }
	
	//   kony.automation.button.click(["frmBillPayReEnterAccNo","btnContinue"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
	//   kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
	//   kony.automation.playback.waitFor(["frmContracts","btnContinue"]);
	//   kony.automation.button.click(["frmContracts","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmBillPayVerifyDetails","txtNameOnBill"]);
	//   kony.automation.textbox.enterText(["frmBillPayVerifyDetails","txtNameOnBill"],"PhoneVerizon");
	//   kony.automation.button.click(["frmBillPayVerifyDetails","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
	//   kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"]);
	//   kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [240,8],null,null);
	//   kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],"Automationuser");
	//   kony.automation.playback.wait(1000);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","segAccounts"]);
	//   kony.automation.segmentedui.scrollToRow(["frmBillPayAllPayees","segAccounts[0,0]"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","segAccounts[0,0]","lblAccountName"], "text")).not.toBe(null);
	//   kony.automation.button.click(["frmBillPayAllPayees","customSearchbox","btnCancel"]);
	//   kony.automation.playback.wait(1000);
	//   kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
	// }
	
	// /**
	//  * @deletePayee
	//  *
	//  */
	// function deletePayee(){
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
	//   kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
	//   kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"]);
	//   kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [120,17],null,null);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"]);
	//   kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],"Automationuser");
	//   kony.automation.segmentedui.click(["frmBillPayAllPayees","segAccounts[0,0]"]);
	//   kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
	//   kony.automation.button.click(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
	//   kony.automation.playback.wait(4000);
	//   kony.automation.alert.click(0);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
	// }
	
	function NavigateToMyMoney(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.scrollToWidget(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,12]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,12]"]);
	//   kony.automation.playback.wait(5000);
	  openMenu("My Money");
	  kony.automation.playback.waitFor(["frmPFMMyMoney","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMMyMoney","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	}
	
	function ClickonViewAllTranxButton(){
	
	  kony.automation.playback.waitFor(["frmPFMMyMoney","btnViewTransactions"],15000);
	  kony.automation.button.click(["frmPFMMyMoney","btnViewTransactions"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function VerifyMyMoneyViewAllTranscation(){
	
	  ClickonViewAllTranxButton();
	
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","lblSelectedType"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","lblSelectedType"], "text")).not.toBe('');
	
	  // Move Back from View All
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	  MoveBackFromMyMoney();
	
	}
	
	function MoveBackFromMyMoney(){
	
	  // MoveBack from MyMoney
	  kony.automation.playback.waitFor(["frmPFMMyMoney","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPFMMyMoney","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmPFMMyMoney","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmPFMMyMoney","Hamburger","segHamburger[0,0]"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifyMymoneySearchTranscation(){
	
	  ClickonViewAllTranxButton();
	  
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmPFMCategorisedTransactions","tbxSearch"],"Spent");
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","segTransactions[0,0]","lblTransaction"], "text")).toContain("Spent");
	
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	  MoveBackFromMyMoney();
	
	}
	
	function MoveBackfromMyMoneyTranscationDetails(){
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPFMTransactionDetails","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	  MoveBackFromMyMoney();
	}
	
	function ClickonMymoneyFirstTranscation(){
	  
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
	  kony.automation.playback.wait(5000);
	}
	function VerifyMyMoneyTranscationDetails(){
	
	  ClickonViewAllTranxButton();
	  ClickonMymoneyFirstTranscation();
	  
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe();
	
	  MoveBackfromMyMoneyTranscationDetails();
	
	}
	
	function VerifyEditMyMoneyTranscationDetails(){
	
	  ClickonViewAllTranxButton();
	  ClickonMymoneyFirstTranscation();
	 
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmPFMTransactionDetails","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","flxOption2"],15000);
	  kony.automation.flexcontainer.click(["frmPFMTransactionDetails","flxOption2"]);
	  kony.automation.playback.waitFor(["frmPFMNote","txtNote"],15000);
	  kony.automation.textarea.enterText(["frmPFMNote","txtNote"],"Jasmine");
	  kony.automation.playback.waitFor(["frmPFMNote","btnSave"],15000);
	  kony.automation.button.click(["frmPFMNote","btnSave"]);
	  kony.automation.playback.wait(5000);
	
	  MoveBackfromMyMoneyTranscationDetails();
	
	
	}
	
	function clickOnPostLogin_SupportBtn(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.scrollToWidget(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,19]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,19]"]);
	  
	  openMenu("Support");
	}
	
	function verifyPostLoginAppVersion(){
	
	  kony.automation.playback.waitFor(["frmSupport","lblAppVersion"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupport","lblAppVersion"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmSupport","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmSupport","Hamburger","segHamburger[0,0]"]);
	  kony.automation.playback.wait(10000);
	}
	
	function VerifyPostLogin_FAQLink(){
	
	  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,0]"]);
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	function VerifyPostLogin_TermsConditions(){
	
	  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,1]"]);
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function VerifyPostLogin_PrivacyPolicy(){
	
	  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,2]"]);
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function MoveBackFrom_PostLogin_Support(){
	  
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmSupport","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmSupport","Hamburger","segHamburger[0,0]"]);
	  kony.automation.playback.wait(10000);
	
	}
	
	
	function clickOnPreLogin_SupportBtn(){
	
	  kony.automation.playback.waitFor(["frmLogin","btnSupport"],15000);
	  kony.automation.button.click(["frmLogin","btnSupport"]);
	}
	
	function verifyAppVersion(){
	
	  kony.automation.playback.waitFor(["frmSupport","lblAppVersion"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupport","lblAppVersion"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
	  kony.automation.playback.wait(10000);
	}
	
	function VerifyPreLogin_FAQLink(){
	
	  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,0]"]);
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	function VerifyPreLogin_TermsConditions(){
	
	  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,1]"]);
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function VerifyPreLogin_PrivacyPolicy(){
	
	  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,2]"]);
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function MoveBackFrom_Support(){
	
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
	  kony.automation.playback.wait(10000);
	
	}
	
	
	
	
	function NavigateToSettings(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.scrollToWidget(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,16]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,16]"]);
	//   kony.automation.playback.wait(10000);
	  
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
	    kony.automation.playback.waitFor(["frmProfileAddAddress","txtResidentialAddressLineOne"],15000);
	    kony.automation.textbox.enterText(["frmProfileAddAddress","txtResidentialAddressLineOne"],Address1);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","lstbxCountry"],15000);
	    kony.automation.listbox.selectItem(["frmProfileAddAddress","lstbxCountry"], "IN");
	    kony.automation.playback.waitFor(["frmProfileAddAddress","lstbxState"],15000);
	    kony.automation.listbox.selectItem(["frmProfileAddAddress","lstbxState"], "IN-AP");
	    kony.automation.playback.waitFor(["frmProfileAddAddress","txtResidentialAddressCity"],15000);
	    kony.automation.textbox.enterText(["frmProfileAddAddress","txtResidentialAddressCity"],City);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","txtResidentialAddressZipCode"],15000);
	    kony.automation.textbox.enterText(["frmProfileAddAddress","txtResidentialAddressZipCode"],Pincode);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","btnContinueResidentialAddress"],15000);
	    kony.automation.button.click(["frmProfileAddAddress","btnContinueResidentialAddress"]);
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
	
	function navigateToTransferActivities(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.scrollToWidget(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
	//   kony.automation.playback.wait(10000);
	  
	  openMenu("Manage Transactions");
	  
	  kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function VerifyTransferUnderActivities(RecipientName){
	
	  kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","SearchAndFilter","txtSearchBox"],15000);
	  kony.automation.textbox.enterText(["frmTransferActivitiesTransfers","SearchAndFilter","txtSearchBox"],RecipientName);
	  kony.automation.playback.wait(5000);
	
	  var NoResult=kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","lblNoRecords"],15000);
	  if(NoResult){
	    expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","TransfersListMobileNative","lblNoRecords"], "text")).toContain('No Search Result');
	  }else{
	    kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList[0,0]","lblField1"], "text")).not.toBe('');
	  }
	}
	
	function MoveBackFromTransferActivities(){
	
	  kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmTransferActivitiesTransfers","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	}
	
	function VerifyPostedTranscationDetails(){
	
	  var Posted=kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList"],15000);
	
	  if(Posted){
	    kony.automation.segmentedui.click(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList[0,0]"]);
	    kony.automation.playback.wait(5000);
	    kony.automation.playback.waitFor(["frmTransfersDetails","customHeader","lblLocateUs"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmTransfersDetails","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	    kony.automation.playback.waitFor(["frmTransfersDetails","customHeader","flxBack"],15000);
	    kony.automation.flexcontainer.click(["frmTransfersDetails","customHeader","flxBack"]);
	    kony.automation.playback.wait(5000);
	
	    MoveBackFromTransferActivities();
	    
	  }else{
	    kony.print('No Posted Transcations available');
	    MoveBackFromTransferActivities();
	  }
	
	}
	
	function VerifySheduledTranscationDetails(){
	
	  kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","tabs","btnTab2"],15000);
	  kony.automation.button.click(["frmTransferActivitiesTransfers","tabs","btnTab2"]);
	  kony.automation.playback.wait(5000);
	
	  var Sheduled=kony.automation.playback.waitFor(["frmTransferActivitiesRecurring","TransfersListMobileNative","segTransfersList"],15000);
	  if(Sheduled){
	
	    kony.automation.segmentedui.click(["frmTransferActivitiesRecurring","TransfersListMobileNative","segTransfersList[0,0]"]);
	    kony.automation.playback.wait(5000);
	    kony.automation.playback.waitFor(["frmRecurringDetails","customHeader","lblLocateUs"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmRecurringDetails","customHeader","lblLocateUs"], "text")).not.toBe('');
	    kony.automation.playback.waitFor(["frmRecurringDetails","customHeader","flxBack"],15000);
	    kony.automation.flexcontainer.click(["frmRecurringDetails","customHeader","flxBack"]);
	    kony.automation.playback.wait(5000);
	
	  }else{
	    kony.print('No Sheduled Transcations available');
	    kony.automation.playback.waitFor(["frmTransferActivitiesRecurring","customHeader","flxBack"],15000);
	    kony.automation.flexcontainer.click(["frmTransferActivitiesRecurring","customHeader","flxBack"]);
	    kony.automation.playback.wait(5000);
	  }
	
	}
	
	
	
	function navigateToTransfers(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.wait(10000);
	  
	  openMenu("Transfer");
	  
	}
	
	function SelectFromAccount(){
	
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [232,14],null,null);
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"check");
	  kony.automation.playback.wait(3000);
	  expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function SelectToAccount(ToAccReciptent){
	
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	
	  if(ToAccReciptent==="OwnAcc"){
	    kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"Saving");
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount","segTransactions[0,0]"]);
	
	    expect(kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
	  }else{
	    kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],ToAccReciptent);
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount","segTransactions[0,0]"]);
	
	    expect(kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
	  }  
	
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	  kony.automation.playback.wait(5000);
	}
	
	function EnterAmount(Amount) {
	
	  kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],15000);
	  for(i=0; i<Amount.length; i++){
	    kony.automation.button.click(["frmMMTransferAmount","keypad", getBtnID(Amount.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmMMTransferAmount","btnContinue"],15000);
	  kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	  kony.automation.playback.wait(5000);
	}
	
	function SelectFrequency(ValTimePeriod) {
	  kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	  kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	  switch(ValTimePeriod){
	    case "Daily":
	      kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	      break;
	    case "Weekly":
	      kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,2]"]);
	      break;
	    case "HalfY":
	      kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,6]"]);
	      break;
	    case "Yearly":
	      kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,7]"]);
	      break;
	    case "QTR":
	      kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,5]"]);
	      break;
	    case "Monthly":
	      kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,4]"]);
	      break;
	  }
	
	  kony.automation.playback.wait(5000);
	}
	
	
	function SelectDateRange() {
	
	  kony.automation.playback.waitFor(["frmMMDuration","segOptions"],15000);
	  kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	
	  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//select "End" date - [3 lines]]
	  //kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	  kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	  kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	
	  kony.automation.playback.wait(5000);
	}
	
	async function SelectSendOnDate() {
	
	  kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	  kony.automation.segmentedui.click(["frmMMReview","segDetails[0,1]"]);
	
	  // Selet Start date
	  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmMMStartDate","btnContinue"]);
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
	
	function EnterNoteValue(notes) {
	
	  kony.automation.playback.waitFor(["frmMMReview","txtDescription"],15000);
	  kony.automation.textarea.enterText(["frmMMReview","txtDescription"],notes);
	}
	
	function ConfirmTransfer() {
	
	  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	  kony.automation.button.click(["frmMMReview","btnTransfer"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function CancelTransfer(){
	
	  kony.automation.playback.waitFor(["frmMMReview","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmMMReview","customHeader","btnRight"]);
	}
	
	function VerifyTransferSuccessMessage() {
	
	  kony.automation.playback.waitFor(["frmMMConfirmation","lblSuccessMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation","lblSuccessMessage"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
	  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	  kony.automation.playback.wait(5000);
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
	
	it("VerifyEditTranscationDetails", async function() {
	  
	  VerifyAccountsDashBoard();
	  NavigateToViewAllTranscations();
	  SelectUncategorizedTranscations();
	  VerifySearchFunctionality_ViewAllTranscation();
	  VerifyTranscationDetails();
	  //Edit Note Value
	  EditTranscationDetails("Jasmine Automation");
	  //Move back to dashboard
	  MoveBackFromTranscationDetails();
	  
	});
	
	it("VerifyNotchOnDashBoard", async function() {
	  
	   VerifyAccountsDashBoard();
	   VerifyNotchOperationOnDashBoard();
	});
	
	it("VerifySearchViewAllTranscations", async function() {
	  
	  VerifyAccountsDashBoard();
	  NavigateToViewAllTranscations();
	  SelectUncategorizedTranscations();
	  VerifySearchFunctionality_ViewAllTranscation();
	  MoveBackfromViewAllTranscations();
	});
	
	it("VerifySwipingOnDashBoard", async function() {
	  
	  VerifyAccountsDashBoard();
	  VerifySwipeOperationOnDashBoard();
	  
	});
	
	it("VerifyTranscationDetails", async function() {
	  
	  VerifyAccountsDashBoard();
	  NavigateToViewAllTranscations();
	  SelectUncategorizedTranscations();
	  VerifySearchFunctionality_ViewAllTranscation();
	  VerifyTranscationDetails();
	  MoveBackFromTranscationDetails();
	  
	});
	
	it("VerifyViewAllTranscations", async function() {
	  
	  VerifyAccountsDashBoard();
	  NavigateToViewAllTranscations();
	  SelectUncategorizedTranscations();
	  MoveBackfromViewAllTranscations();
	});
});