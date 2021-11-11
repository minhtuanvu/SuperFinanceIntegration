it("ManageRecipient_Delete_InternationalRecipient", async function() {
	await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"]);
	kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,2]"]);
	await kony.automation.playback.waitFor(["frmManageTransferRecipient","customHeader","flxSearch"]);
	kony.automation.flexcontainer.click(["frmManageTransferRecipient","customHeader","flxSearch"]);
	await kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
	kony.automation.button.click(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
	kony.automation.alert.click(0);
});