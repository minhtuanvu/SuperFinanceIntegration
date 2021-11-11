it("SearchBill", async function() {
	// :User Injected Code Snippet [//Prerequisite "OpenMyBillsPage" - [1 lines]]
	navigateMyBillPage();
	// :End User Injected Code Snippet {e2c29000-1328-e299-4e8c-d6996bc3fcf3}
	await kony.automation.playback.waitFor(["frmBillPay","tbxSearch"]);
	kony.automation.widget.touch(["frmBillPay","tbxSearch"], [135,14],null,null);
	kony.automation.textbox.enterText(["frmBillPay","customSearchbox","tbxSearch"],"Automationuser");
	await kony.automation.playback.waitFor(["frmBillPay","segTransactions"]);
	// :User Injected Code Snippet [//Assert on search value - [1 lines]]
	expect(kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
	// :End User Injected Code Snippet {389f65b1-a752-e06f-25f8-c880ec3b179f}
	await kony.automation.playback.waitFor(["frmBillPay","customSearchbox","btnCancel"]);
	kony.automation.button.click(["frmBillPay","customSearchbox","btnCancel"]);
	await kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
	// :User Injected Code Snippet [//Pause the execution - [1 lines]]
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	// :End User Injected Code Snippet {e710caad-f947-b4f6-018c-ee7e65a3a7c8}
},60000);