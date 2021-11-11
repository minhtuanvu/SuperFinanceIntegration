it("Accounts_EditCategory", async function() {
	kony.automation.flexcontainer.click(["frmDashboardAggregated","flxChartSizeToggle"]);
	kony.automation.button.click(["frmDashboardAggregated","btnViewAllTransactions"]);
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"]);
	kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
	kony.automation.button.click(["frmPFMTransactionDetails","customHeader","btnRight"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmPFMTransactionDetails","flxOption1"]);
	await kony.automation.playback.wait(1000);
	kony.automation.segmentedui.click(["frmPFMEditCategory","segCategories[0,6]"]);
	await kony.automation.playback.wait(2000);
	kony.automation.button.click(["frmPFMEditCategory","btnSave"]);
	await kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmPFMTransactionDetails","customHeader","flxBack"]);
});