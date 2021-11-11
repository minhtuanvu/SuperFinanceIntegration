it("ManageRecipient_Delete_SamebankRecipient", async function() {
	await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
	kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [113,18],null,null);
	kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"samebank");
	await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"]);
	kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
	await kony.automation.playback.waitFor(["frmManageTransferRecipient","customHeader","flxSearch"]);
	kony.automation.flexcontainer.click(["frmManageTransferRecipient","customHeader","flxSearch"]);
	await kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
	kony.automation.button.click(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
	kony.automation.alert.click(0);
});