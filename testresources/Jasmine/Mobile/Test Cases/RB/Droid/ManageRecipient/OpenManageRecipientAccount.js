it("OpenManageRecipientAccount", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,4]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
});