it("AccountsDb_SearchTransactions", async function() {
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","tbxSearch"]);
	kony.automation.textbox.enterText(["frmPFMCategorisedTransactions","tbxSearch"],"fee");
	await kony.automation.playback.wait(2000);
	kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
	kony.automation.flexcontainer.click(["frmPFMTransactionDetails","customHeader","flxBack"]);
});