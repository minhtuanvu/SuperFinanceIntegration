it("AccountsDb_Transactiondetails", async function() {
	kony.automation.button.click(["frmDashboardAggregated","btnViewAllTransactions"]);
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"]);
	kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[4,0]"]);
	await kony.automation.playback.wait(2000);
	kony.automation.flexcontainer.click(["frmPFMTransactionDetails","customHeader","flxBack"]);
});