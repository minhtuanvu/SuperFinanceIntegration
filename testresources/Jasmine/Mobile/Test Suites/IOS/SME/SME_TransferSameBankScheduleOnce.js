describe("SME_TransferSameBankScheduleOnce", function() {
	it("LoginAndWaitForDashboard", async function() {
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
		kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234SB");
		kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
		await kony.automation.playback.waitFor(["frmLogin","login","btnLogIn"]);
		kony.automation.button.click(["frmLogin","login","btnLogIn"]);
		//Verifying Terms and Condition page -
			var frmTnC = await kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],20000);
			if(frmTnC){
				kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
				await kony.automation.playback.waitFor(["frmTermsAndCondition","btnContinue"]);
				kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
		}
		
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","lblBankName"]);
	},35000);
	
	it("GoToTransfer", async function() {
		// :User Injected Code Snippet [// - [1 lines]]
		kony.print("Go to Transfer");
		// :End User Injected Code Snippet {d6a38a76-4c14-a911-6196-4396e4313e0d}
		await kony.automation.playback.wait(3000);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxTransfer"]);
		await kony.automation.playback.wait(5000);
		await kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"]);
	});
	
	it("SearchSameBankInFromAndToScreen", async function() {
		await kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"]);
		kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [135,17],null,null);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmMMTransferFromAccount","customSearchbox","tbxSearch"]);
		kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"check");
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"]);
		kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);
		kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [146,13],null,null);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmMMTransferToAccount","customSearchbox","tbxSearch"]);
		kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"sameBankIOS");
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"]);
		kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
		await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnOne"]);
	});
	
	it("EnterAmount", async function() {
		await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"]);
		kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
		kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
		await kony.automation.playback.waitFor(["frmMMReview","flxConfirmationDetails","segDetails"]);
	});
	
	it("TransferScheduleOnce", async function() {
		await kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
		kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
		kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
		await kony.automation.playback.wait(5000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		// :User Injected Code Snippet [//Select a date - [3 lines]]
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
			kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
			kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
		// :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"]);
		kony.automation.button.click(["frmMMStartDate","btnContinue"]);
		await kony.automation.playback.wait(4000);
		await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
		kony.automation.button.click(["frmMMReview","btnTransfer"]);
		await kony.automation.playback.wait(7000);
		// :User Injected Code Snippet [//Asser for success - [1 lines]]
		expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation","lblSuccessMessage"], "text")).toEqual("We successfully scheduled your transfer");
		// :End User Injected Code Snippet {ca0bdba2-106a-5d30-5a72-5e4aa2ed92df}
		kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
		await kony.automation.playback.wait(8000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	});
	
	it("Logout", async function() {
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","flxMore"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"]);
		kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[50,31]);
		await kony.automation.playback.wait(4000);
		await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
		kony.automation.button.click(["frmLogout","btnLogIn"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
		expect(kony.automation.widget.getWidgetProperty(["frmLogin","login","tbxPassword"], "text")).toEqual("");
	});
});