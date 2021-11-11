it("SearchSameBankInFromAndToScreen", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,1]"]);
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"]);
	kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"]);
	// :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	//var checkingAcc = ;
	expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]]","flxAccountsNoImageTransfers","flxMain","flxAccountName","lblAccountName"],"text")).toContain("Checki");
	// :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"]);
	kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	await kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);
	kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"samebank2");
	await kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"]);
	// :User Injected Code Snippet [//Expect Credit Card - [2 lines]]
	var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]]","flxAccountsNoImageTransfers","flxMain","flxAccountName","lblAccountName"],"text");
	expect(creditCard).toContain("samebank2");
	// :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	await kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"]);
	kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
});