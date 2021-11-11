describe("RB_TransferP2PAccount", function() {
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
	});
	
	
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
	
	async function goToTransfers() {
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "customFooter", "flxTransfer"]);
	    kony.automation.flexcontainer.click(["frmUnifiedDashboard", "customFooter", "flxTransfer"]);
	    await kony.automation.playback.wait(2000);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "tbxSearch"]);
	}
	
	async function searchInFromAndToScreen(fromAccount, toAccount) { //params are case sensitive
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "tbxSearch"]);
	    kony.automation.widget.touch(["frmMMTransferFromAccount", "tbxSearch"], [110, 23], null, null);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"]);
	    await kony.automation.playback.wait(2000);
	    kony.automation.textbox.enterText(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"], fromAccount);
	    await kony.automation.playback.wait(2000);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "segTransactions"]);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
	    // :User Injected Code Snippet [// - [2 lines]]
	//     var fromAccountName = kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount", "segTransactions[0,0]", "lblAccountName"], "text");
	//     expect(fromAccountName).toContain(fromAccount);
	    // :End User Injected Code Snippet {8ee899e9-e37c-2be5-f725-bbcdb1020dc4}
	    kony.automation.segmentedui.click(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "tbxSearch"]);
	    kony.automation.widget.touch(["frmMMTransferToAccount", "tbxSearch"], [146, 13], null, null);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"]);
	    await kony.automation.playback.wait(2000);
	    kony.automation.textbox.enterText(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"], toAccount);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "segTransactions"]);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount", "segTransactions[0,0]"]);
	    await kony.automation.playback.wait(2000);
	    // :User Injected Code Snippet [// - [2 lines]]
	//     var accountName = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount", "segTransactions[0,0]", "lblAccountName"], "text");
	//     expect(accountName).not.toBe(null);
	    // :End User Injected Code Snippet {195a3ae8-db55-4acb-396f-09b3a08ff861}
	    kony.automation.segmentedui.click(["frmMMTransferToAccount", "segTransactions[0,0]"]);
	    await kony.automation.playback.waitFor(["frmMMTransferAmount", "keypad", "btnThree"]);
	}
	
	async function selectFromAccount(fromAccount){
		await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "tbxSearch"]);
	    kony.automation.widget.touch(["frmMMTransferFromAccount", "tbxSearch"], [110, 23], null, null);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"]);
	    await kony.automation.playback.wait(2000);
	    kony.automation.textbox.enterText(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"], fromAccount);
	    await kony.automation.playback.wait(2000);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "segTransactions"]);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
	    // :User Injected Code Snippet [// - [2 lines]]
	//     var fromAccountName = kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount", "segTransactions[0,0]", "lblAccountName"], "text");
	//     expect(fromAccountName).toContain(fromAccount);
	    // :End User Injected Code Snippet {8ee899e9-e37c-2be5-f725-bbcdb1020dc4}
	    kony.automation.segmentedui.click(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
	}
	
	async function selectToAccount(toAccount){
		await kony.automation.playback.waitFor(["frmMMTransferToAccount", "tbxSearch"]);
	    kony.automation.widget.touch(["frmMMTransferToAccount", "tbxSearch"], [146, 13], null, null);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"]);
	    await kony.automation.playback.wait(2000);
	    kony.automation.textbox.enterText(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"], toAccount);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "segTransactions"]);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount", "segTransactions[0,0]"]);
	    await kony.automation.playback.wait(2000);
	    // :User Injected Code Snippet [// - [2 lines]]
	//     var accountName = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount", "segTransactions[0,0]", "lblAccountName"], "text");
	//     expect(accountName).not.toBe(null);
	    // :End User Injected Code Snippet {195a3ae8-db55-4acb-396f-09b3a08ff861}
	    kony.automation.segmentedui.click(["frmMMTransferToAccount", "segTransactions[0,0]"]);
	}
	
	async function enterAmount() {
	    await kony.automation.playback.waitFor(["frmMMTransferAmount", "keypad", "btnThree"]);
	    kony.automation.button.click(["frmMMTransferAmount", "keypad", "btnThree"]);
	    kony.automation.button.click(["frmMMTransferAmount", "keypad", "btnZero"]);
	    kony.automation.button.click(["frmMMTransferAmount", "keypad", "btnZero"]);
	    kony.automation.button.click(["frmMMTransferAmount", "btnContinue"]);
	    await kony.automation.playback.waitFor(["frmMMReview", "flxConfirmationDetails", "segDetails"]);
	}
	
	async function oneTimeTransfer() {
	
	    await kony.automation.playback.waitFor(["frmMMReview", "btnTransfer"]);
	    kony.automation.button.click(["frmMMReview", "btnTransfer"]);
	    await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
	    // :User Injected Code Snippet [//Assert success message - [1 lines]]
	// 	var lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
		var lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
			            
	// 	expect(lblMessage.toLowerCase()).toContain("success");
		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	    //expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text")).toContain("uccess");
	    // :End User Injected Code Snippet {d03b935e-9e64-4c3e-db7c-f2e1959569b7}
	    await kony.automation.playback.waitFor(["frmMMConfirmation", "btnDashboard"]);
	    kony.automation.button.click(["frmMMConfirmation", "btnDashboard"]);
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
	}
	
	async function transferScheduledOnce() {
	    await kony.automation.playback.waitFor(["frmMMReview", "segDetails"]);
	    kony.automation.segmentedui.click(["frmMMReview", "segDetails[0,0]"]);
	    await kony.automation.playback.wait(3000);
	    await kony.automation.playback.waitFor(["frmMMFrequency", "segOptions"]);
	    kony.automation.segmentedui.click(["frmMMFrequency", "segOptions[0,0]"]);
	    await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmMMStartDate", "customCalendar", "flxNextMonth"]);
	    kony.automation.flexcontainer.click(["frmMMStartDate", "customCalendar", "flxNextMonth"]);
	    await kony.automation.playback.wait(2000);
	    // :User Injected Code Snippet [//Select a date - [3 lines]]
	    await kony.automation.playback.waitFor(["frmMMStartDate", "customCalendar", "flxNextMonth"]);
	    kony.automation.widget.touch(["frmMMStartDate", "customCalendar", "flxNextMonth"], [178, 125], null, [178, 125]);
	    kony.automation.widget.touch(["frmMMStartDate", "customCalendar", "flxMonth", "m3CopyLabel0ac5bc532de9c4c"], null, null, [17, 17]);
	    // :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
	    await kony.automation.playback.wait(3000);
	    await kony.automation.playback.waitFor(["frmMMStartDate", "btnContinue"]);
	    kony.automation.button.click(["frmMMStartDate", "btnContinue"]);
	    await kony.automation.playback.wait(4000);
	    await kony.automation.playback.waitFor(["frmMMReview", "btnTransfer"]);
	    kony.automation.button.click(["frmMMReview", "btnTransfer"]);
	    await kony.automation.playback.wait(7000);
	  
	  await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
	    // :User Injected Code Snippet [//Asser for success - [1 lines]]
	// 	var lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
		var lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
	  
	// 	expect(lblMessage.toLowerCase()).toContain("success");
		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	    //expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text")).toEqual("We successfully scheduled your transfer");
	    // :End User Injected Code Snippet {ca0bdba2-106a-5d30-5a72-5e4aa2ed92df}
		await kony.automation.playback.waitFor(["frmMMConfirmation", "btnDashboard"]);
	    kony.automation.button.click(["frmMMConfirmation", "btnDashboard"]);
	    await kony.automation.playback.wait(8000);
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
	}
	
	async function ScheduledTransferDailyDateRange() {
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
		kony.automation.segmentedui.scrollToRow(["frmMMReview","segDetails[0,0]"]);
		kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
		await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
		kony.automation.segmentedui.scrollToRow(["frmMMFrequency","segOptions[0,1]"]);
		kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
		await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
		kony.automation.segmentedui.scrollToRow(["frmMMDuration","segOptions[0,0]"]);
		kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	  /*
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
	  // kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	  kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	  */
	  
	  	// :User Injected Code Snippet [// - [6 lines]]
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
			kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
			await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
			kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
		
		// :End User Injected Code Snippet {984fd65f-f6ee-e93d-49a5-284e394be9f6}
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"]);
		kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"], null,null,[15,11]);
	 
	  kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	  kony.automation.button.click(["frmMMReview","btnTransfer"]);
		
	  await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
		//let lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
		let lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
	  
		//expect(lblMessage.toLowerCase()).toContain("success");
		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	  
	  kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
	  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","lblLocateUs"],10000);
	  
	 }
	
	async function selectDurationDateRange(){
		await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
		kony.automation.segmentedui.scrollToRow(["frmMMDuration","segOptions[0,0]"]);
		kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	  	
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
		kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
		
		// :End User Injected Code Snippet {984fd65f-f6ee-e93d-49a5-284e394be9f6}
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"]);
		kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"], null,null,[15,11]);
	 
		kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
		kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	}
	
	async function selectDurationNumberOfTransfers(){
		await kony.automation.playback.wait(500);
		await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
		kony.automation.segmentedui.scrollToRow(["frmMMDuration","segOptions[0,1]"]);
		kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);
	}
	
	async function selectStartDate(){
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
		kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
		await kony.automation.playback.wait(2000);
	
	}
	
	async function enterNumberOfTransfer(){	
		await kony.automation.playback.waitFor(["frmMMNumberOfTransfers","keypad","btnFive"]);
		kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnFive"]);
		kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
	}
	
	async function confirmTransfer(){
		await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
		kony.automation.button.click(["frmMMReview","btnTransfer"]);
		await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"]);
		kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
	}
	
	async function selectFrequency(frequency){
	  await kony.automation.playback.waitFor(["frmMMReview", "segDetails"]);
	    kony.automation.segmentedui.click(["frmMMReview", "segDetails[0,0]"]);
	    await kony.automation.playback.wait(3000);
	    await kony.automation.playback.waitFor(["frmMMFrequency", "segOptions"]);
	
	    switch(frequency){
	    	case "Once":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	            break;
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
	    
	    await kony.automation.playback.wait(5000);
	}
	
	async function confirmTransfer(){
		await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
		kony.automation.button.click(["frmMMReview","btnTransfer"]);
	  
		await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
		//let lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
		let lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
	  
		//expect(lblMessage.toLowerCase()).toContain("success");
		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	  
		await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"]);
		kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
	}
	
	it("SearchPToPAccount", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await kony.automation.device.deviceBack();
		await kony.automation.device.deviceBack();
		await kony.automation.device.deviceBack();
		// :End User Injected Code Snippet {cf3928e2-539e-4c52-1a93-19e4aa39a9cd}
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgTransfer"]);
		// :End User Injected Code Snippet {805bef23-cad6-46e0-f46c-d40e9b4490d3}
	});
	
	it("TransferPToPAccountOneTime", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await oneTimeTransfer();
		// :End User Injected Code Snippet {b25c4d32-5742-8fd6-a194-4e58ea8338a4}
	});
	
	it("TransferPToPAccountScheduleOnce", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await transferScheduledOnce();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_DailyDateRange", async function() {
		// :User Injected Code Snippet [// - [6 lines]]
		await goToTransfers();
			await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
			await enterAmount();
			await selectFrequency("Daily");
			await selectDurationDateRange();
			await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_DailyNumberOfTransfers", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await goToTransfers();
			await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
			await enterAmount();
			await selectFrequency("Daily");
			await selectDurationNumberOfTransfers();
			await selectStartDate();
			await enterNumberOfTransfer();
			await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_HalfYearlyDateRange", async function() {
		// :User Injected Code Snippet [// - [6 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("HalfY");
		await selectDurationDateRange();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_HalfYearlyNumberOfTransfers", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("HalfY");
		await selectDurationNumberOfTransfers();
		await selectStartDate();
		await enterNumberOfTransfer();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_MonhtlyDateRange", async function() {
		// :User Injected Code Snippet [// - [6 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("Monthly");
		await selectDurationDateRange();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_MonthlyNumberOfTransfers", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("Monthly");
		await selectDurationNumberOfTransfers();
		await selectStartDate();
		await enterNumberOfTransfer();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_QuarterlyDateRange", async function() {
		// :User Injected Code Snippet [// - [6 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("QTR");
		await selectDurationDateRange();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_QuarterlyNumberOfTransfers", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("QTR");
		await selectDurationNumberOfTransfers();
		await selectStartDate();
		await enterNumberOfTransfer();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_WeeklyDateRange", async function() {
		// :User Injected Code Snippet [// - [6 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("Weekly");
		await selectDurationDateRange();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_WeeklyNumberOfTransfers", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("Weekly");
		await selectDurationNumberOfTransfers();
		await selectStartDate();
		await enterNumberOfTransfer();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_YearlyDateRange", async function() {
		// :User Injected Code Snippet [// - [6 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("Yearly");
		await selectDurationDateRange();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferPToPAccountSchedule_YearlyNumberOfTransfers", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await goToTransfers();
		await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
		await enterAmount();
		await selectFrequency("Yearly");
		await selectDurationNumberOfTransfers();
		await selectStartDate();
		await enterNumberOfTransfer();
		await confirmTransfer();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
});