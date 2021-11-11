it("Accounts_Checkngsinfoicon", async function() {
	kony.automation.segmentedui.click(["frmDashboardAggregated","segAccounts[0,1]"]);
	await kony.automation.playback.waitFor(["frmAccountDetails","customHeader","flxSearch"]);
	kony.automation.flexcontainer.click(["frmAccountDetails","customHeader","flxSearch"]);
});