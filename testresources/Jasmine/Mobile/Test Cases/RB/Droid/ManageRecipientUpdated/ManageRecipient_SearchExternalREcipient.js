it("TC09_ManageRecipient_SearchExternalREcipient", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,4]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,1]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
	kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [130,28],[[130,28]],[150,54]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","customSearchbox","tbxSearch"]);
	kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"acc");
	await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"]);
	kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
});