describe("RB_TransferActivities", function() {
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
	
	async function verifyAccountLanding(account){
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","segAccounts"]);
		await kony.automation.playback.wait(3000);
		// :User Injected Code Snippet [// - [2 lines]]
			//expect(kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts[1,0]","lblAccountName"], "text")).toContain("Savings");	
		// :End User Injected Code Snippet {d678cb91-1471-1413-3757-81ff050d6960}
		let indices = await getIndex(account);
		kony.automation.segmentedui.click(["frmUnifiedDashboard","segAccounts[" + indices.i + "," + indices.j +"]"]);
		await kony.automation.playback.wait(3000);
	  
		// :User Injected Code Snippet [// - [2 lines]]
		await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblField1"]);
	    await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblField2"]);
	}
	
	
	async function verifyAccountInfo(){
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountSummaryNative","lblField1"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountSummaryNative","lblField2"], "text")).not.toBe(null);
		// :End User Injected Code Snippet {099e4d91-7590-fe3a-35e9-6b62fd3cd475}
		await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblField2"]);
	}
	
	async function goToDashboardFromAccounts() {
		await kony.automation.playback.waitFor(["frmAccountDetails","customFooter","lblAccounts"]);
		kony.automation.flexcontainer.click(["frmAccountDetails","customFooter","flxAccounts"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	}
	
	async function verifyTransactionDetails(){
		await kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"]);
		kony.automation.segmentedui.scrollToRow(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[0,0]"]);
		kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[0,0]"]);
		await kony.automation.playback.waitFor(["frmMMTransactionDetails","accountsTransactionDetailsNative","lblDetailsValue3"]);
		// :User Injected Code Snippet [// - [3 lines]]
		expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","accountsTransactionDetailsNative","lblDetailsValue3"], "text")).not.toBe(null);
		
		expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","accountsTransactionDetailsNative","lblDetailsValue4"], "text")).not.toBe(null);
		// :End User Injected Code Snippet {eb55123f-c04f-627b-122f-624614f982bc}
		await kony.automation.device.deviceBack();
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmAccountDetails","flxAccountTransactions","accountsTransactionListNative","segTransactionsList"]);
	}
	
	async function initiateTransfer(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink2"]);
		let widgetID = getFlexID("Transfer money");
		kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative",widgetID]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);	
	}
	
	async function verifyOptionsOfSavingsAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink3"], "text")).not.toBe(null);
	}
	
	async function verifyOptionsOfCheckingAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink3"], "text")).not.toBe(null);
	}
	
	async function verifyOptionsOfCreditCardAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe(null);
	}
	
	async function verifyOptionsOfLoanAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe(null);
	}
	
	async function verifyOptionsOfDepositAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink1"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink2"], "text")).not.toBe(null);
	}
	
	async function advanceSearchAccountsDetail(){
		await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"]);
		kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [26,21],null,null);
		await kony.automation.playback.waitFor(["frmAdvanceSearch","segType"]);
		await kony.automation.scrollToWidget(["frmAdvanceSearch","segType"]);
		kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
		await kony.automation.playback.waitFor(["frmAdvanceSearch","flxAddRangeAmount"]);
		kony.automation.flexcontainer.click(["frmAdvanceSearch","flxAddRangeAmount"]);
		kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountFrom"],"1");
		kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountTo"],"99999");
		await kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"]);
		kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmAdvanceSearchResults","accountsTransactionListNative","segTransactionsList"]);
		await kony.automation.device.deviceBack();
		await kony.automation.device.deviceBack();
	}
	async function verifyScrollAccountTransactions(){
		await kony.automation.playback.waitFor(["frmAccountDetails","flxAccountTransactions","accountsTransactionListNative","segTransactionsList"]);
		
		let segData = kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"], "data");
		
		let a = segData.length-1;
		let b = segData[a][1].length-1;
		
		kony.automation.segmentedui.scrollToRow(["frmAccountDetails","accountsTransactionListNative","segTransactionsList["+a +"," +b+ "]" ]);
		await kony.automation.playback.wait(1000);
	}
	
	function getFlexID(text){
	
		let labelID = "";
	
		for(let i=1; i<=3; i++){
			labelID = kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","flxLink"+i, "lblLink"+i], "text");
			if(labelID === text) return "flxLink"+i;
		}
	
		return "flxLink1"; //mostly is it flxLink1
	}
	
	async function repeatTransaction(){
		await kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"],5000);
	  await kony.automation.playback.wait(5000);
		let scheduledPay = kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,-1]","lblHeaderName"],"text");
	
		if(scheduledPay){
			kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,0]"]);
			await kony.automation.playback.wait(2000);
			await kony.automation.playback.waitFor(["frmMMTransactionDetails","btnRepeatTransactionTrans"]);
			kony.automation.button.click(["frmMMTransactionDetails","btnRepeatTransactionTrans"]);
			await kony.automation.playback.wait(5000);	
			await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
			kony.automation.button.click(["frmMMReview","btnTransfer"]);
			await kony.automation.playback.waitFor(["frmMMConfirmation","flxNoTransfer"]);
			kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
			await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxOne"]);
		}else{
	      await kony.automation.device.deviceBack();
	    }
	}
	
	async function getIndex(account){
			let segData = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts"], "data");
			let i=0;
			let j=0;
		
			for(var a = 0; a<segData.length; a++){
				for(var b=0; b<segData[a][1].length; b++){
					if(segData[a][1][b].accountName === undefined){
						kony.automation.flexcontainer.click(["frmUnifiedDashboard","segAccounts[" + a + "," + b +"]","flxViewContainer"]);
						await kony.automation.playback.wait(2000);
						return await getIndex(account);									
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
	
	
	async function openMenu(menu){
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"]);
		await kony.automation.playback.wait(1000);
		var menuOptions = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"], "data");
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
	    }else{
	      expect(menuIndex).toBeGreaterThan(-1);
	    }
	}
	
	async function VerifyTransferUnderActivities(RecipientName){
	  RecipientName = RecipientName.substr(0,4);
	  await kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","SearchAndFilter","txtSearchBox"],15000);
	  await kony.automation.playback.wait(10000);
	  kony.automation.textbox.enterText(["frmTransferActivitiesTransfers","SearchAndFilter","txtSearchBox"],RecipientName);
	  await kony.automation.playback.wait(10000);
	
	  var NoResult= await kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","lblNoRecords"],15000);
	  if(NoResult){
	    expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","TransfersListMobileNative","lblNoRecords"], "text")).not.toBe(null);
	  }else{
	    await kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList[0,0]","lblField1"], "text")).not.toBe('');
	  }
	}
	
	async function goBackToDashboardFromTransferActivities(){
		// :User Injected Code Snippet [// - [1 lines]]
		await kony.automation.device.deviceBack();
		// :End User Injected Code Snippet {f8fdcadd-8009-da85-167a-dd62f0fae93e}
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	}
	
	async function VerifyAdvancedSearch(){
		await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"],15000);
		kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [17,16],null,null);
		await kony.automation.playback.wait(5000);
	
	await kony.automation.playback.waitFor(["frmAdvanceSearch","segType"]);
	kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
	await kony.automation.playback.waitFor(["frmAdvanceSearch","flxAddRangeAmount"]);
	kony.automation.flexcontainer.click(["frmAdvanceSearch","flxAddRangeAmount"]);
	await kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountFrom"]);
	kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountFrom"],"1");
	await kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountTo"]);
	kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountTo"],"100");
	await kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"]);
	kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
	await kony.automation.playback.wait(5000);
	
	await kony.automation.device.deviceBack();
	kony.automation.playback.wait(5000);
	await kony.automation.device.deviceBack();
	await kony.automation.device.deviceBack();
	kony.automation.playback.wait(5000);
	
	}
	
	it("ExternalAcc_VerifyTranscationUnderAccounts", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await verifyAccountLanding(accountsLanding.savings);
		await VerifyAdvancedSearch();
		// :End User Injected Code Snippet {5fba8b55-6577-303d-d35e-a7cc5c0ffc82}
	});
	
	it("InternationalAcc_VerifyTranscationUnderAccounts", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await verifyAccountLanding(accountsLanding.savings);
		await VerifyAdvancedSearch();
		// :End User Injected Code Snippet {5fba8b55-6577-303d-d35e-a7cc5c0ffc82}
	});
	
	it("OwnAcc_VerifyTranscationUnderTransferActivites", async function() {
		// :User Injected Code Snippet [// - [3 lines]]
		await openMenu("Manage Transactions");
		await VerifyTransferUnderActivities(Transfers.ownAccount.fromAccount);
		await goBackToDashboardFromTransferActivities();
		// :End User Injected Code Snippet {044aa7fa-5f85-1a7c-b956-e290a3fa18d1}
	});
	
	it("PToPAcc_VerifyTranscationUnderAccounts", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await verifyAccountLanding(accountsLanding.savings);
		await VerifyAdvancedSearch();
		// :End User Injected Code Snippet {5fba8b55-6577-303d-d35e-a7cc5c0ffc82}
	});
	
	it("SearchTransactions", async function() {
		// :User Injected Code Snippet [// - [3 lines]]
		await openMenu("Manage Transactions");
		await VerifyTransferUnderActivities(Transfers.ownAccount.fromAccount);
		await goBackToDashboardFromTransferActivities();
		// :End User Injected Code Snippet {bae636c9-729d-6e59-8c01-bb3f84365277}
	});
	
	it("SameBankAcc_VerifyTranscationUnderAccounts", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await verifyAccountLanding(accountsLanding.savings);
		await VerifyAdvancedSearch();
		// :End User Injected Code Snippet {5fba8b55-6577-303d-d35e-a7cc5c0ffc82}
	});
	
	it("InternationalAcc_VerifyTranscationUnderTransferActivites", async function() {
		// :User Injected Code Snippet [// - [3 lines]]
		await openMenu("Manage Transactions");
		await VerifyTransferUnderActivities(ManageRecipient.recipientName.internationalAccount);
		await goBackToDashboardFromTransferActivities();
		// :End User Injected Code Snippet {0f20e771-ef07-0221-a720-92a5159ec1d6}
	});
	
	it("OwnAcc_VerifyTranscationUnderTransferActivites", async function() {
		// :User Injected Code Snippet [// - [3 lines]]
		await openMenu("Manage Transactions");
		await VerifyTransferUnderActivities(Transfers.ownAccount.fromAccount);
		await goBackToDashboardFromTransferActivities();
		// :End User Injected Code Snippet {044aa7fa-5f85-1a7c-b956-e290a3fa18d1}
	});
	
	it("PToPAcc_VerifyTranscationUnderTransferActivites", async function() {
		// :User Injected Code Snippet [// - [3 lines]]
		await openMenu("Manage Transactions");
		await VerifyTransferUnderActivities(ManageRecipient.recipientName.p2pRecipient);
		await goBackToDashboardFromTransferActivities();
		// :End User Injected Code Snippet {0f20e771-ef07-0221-a720-92a5159ec1d6}
	});
	
	it("SamebankAcc_VerifyTranscationUnderTransferActivites", async function() {
		// :User Injected Code Snippet [// - [3 lines]]
		await openMenu("Manage Transactions");
		await VerifyTransferUnderActivities(ManageRecipient.recipientName.sameBankAccount);
		await goBackToDashboardFromTransferActivities();
		// :End User Injected Code Snippet {0f20e771-ef07-0221-a720-92a5159ec1d6}
	});
});