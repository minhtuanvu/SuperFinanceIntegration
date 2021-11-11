it("OpenManageRecipientP2P", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,4]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
});