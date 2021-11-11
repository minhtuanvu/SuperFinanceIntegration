describe("SME_TransferSameBankOneTime", function() {
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
	
	it("OneTimeTransfer", async function() {
		await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
		kony.automation.button.click(["frmMMReview","btnTransfer"]);
		await kony.automation.playback.waitFor(["frmMMConfirmation","lblSuccessMessage"]);
		// :User Injected Code Snippet [//Assert success message - [1 lines]]
		expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation","lblSuccessMessage"], "text")).toContain("uccess");
		// :End User Injected Code Snippet {d03b935e-9e64-4c3e-db7c-f2e1959569b7}
		await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"]);
		kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
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