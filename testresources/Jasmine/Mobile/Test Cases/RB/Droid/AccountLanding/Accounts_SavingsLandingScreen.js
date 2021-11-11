it("Accounts_SavingsLandingScreen", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","segAccounts"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","segAccounts[0,0]"]);
});