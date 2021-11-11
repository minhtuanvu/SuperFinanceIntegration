it("ManageRecipient_Edit_ExternalbankRecipient", async function() {
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"]);
	kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,2]"]);
	await kony.automation.playback.waitFor(["frmManageTransferRecipient","customHeader","flxSearch"]);
	kony.automation.flexcontainer.click(["frmManageTransferRecipient","customHeader","flxSearch"]);
	await kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","customHeader","btnRight"]);
	kony.automation.button.click(["frmManageTransferRecipientInfo","customHeader","btnRight"]);
	await kony.automation.playback.waitFor(["frmManageEditRecipient","txtRecipientName"]);
	kony.automation.textbox.enterText(["frmManageEditRecipient","txtRecipientName"],"externbank123");
	await kony.automation.playback.waitFor(["frmManageEditRecipient","btnSave"]);
	kony.automation.button.click(["frmManageEditRecipient","btnSave"]);
});