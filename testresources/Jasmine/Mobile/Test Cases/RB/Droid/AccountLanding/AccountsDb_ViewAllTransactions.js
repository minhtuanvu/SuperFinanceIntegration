it("AccountsDb_ViewAllTransactions", async function() {
	kony.automation.flexcontainer.click(["frmDashboardAggregated","flxChartSizeToggle"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","btnViewAllTransactions"]);
	kony.automation.button.click(["frmDashboardAggregated","btnViewAllTransactions"]);
});