it("AccountsDb_ListCollapsed", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","flxChartSizeToggle"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","flxChartSizeToggle"]);
	await kony.automation.playback.wait(2000);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","flxChartSizeToggle"]);
	await kony.automation.playback.wait(2000);
});