it("TC02_ManageRecipient_Search_SameBankRecipient", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,4]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
	kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [81,14],null,[81,30]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","customSearchbox","tbxSearch"]);
	kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"inf");
	await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"]);
	kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
});