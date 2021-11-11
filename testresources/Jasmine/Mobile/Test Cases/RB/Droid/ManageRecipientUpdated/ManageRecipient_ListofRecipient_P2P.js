it("T_ManageRecipient_ListofRecipient_P2P", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.wait(2000);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,4]"]);
	await kony.automation.playback.wait(2000);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
});