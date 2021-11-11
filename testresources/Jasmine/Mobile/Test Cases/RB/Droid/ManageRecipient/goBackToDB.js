it("GoBackToDB", async function() {
	await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","flxOne"]);
});