it("Collapse", async function() {
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxSummarySegment","segSummary"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	await kony.automation.playback.wait(2000);
});