describe("CardManagement", function() {
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