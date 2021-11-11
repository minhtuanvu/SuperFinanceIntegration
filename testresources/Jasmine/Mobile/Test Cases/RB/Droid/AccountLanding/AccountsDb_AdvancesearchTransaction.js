it("AccountsDb_AdvancesearchTransaction", async function() {
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","flxAdvSearch"]);
	kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","flxAdvSearch"]);
	await kony.automation.playback.wait(2000);
	kony.automation.segmentedui.click(["frmPFMAdvancedSearch","segTransactionType[0,1]"]);
	kony.automation.segmentedui.click(["frmPFMAdvancedSearch","segTransactionType[0,2]"]);
	await kony.automation.playback.waitFor(["frmPFMAdvancedSearch","segTimeRange"]);
	kony.automation.segmentedui.click(["frmPFMAdvancedSearch","segTimeRange[0,0]"]);
	kony.automation.textbox.enterText(["frmPFMAdvancedSearch","txtAmountFrom"]," 500");
	kony.automation.button.click(["frmPFMAdvancedSearch","btnSearch"]);
	await kony.automation.playback.waitFor(["frmPFMAdvanceSearchResults","customSearchbox","btnCancel"]);
	kony.automation.button.click(["frmPFMAdvanceSearchResults","customSearchbox","btnCancel"]);
});