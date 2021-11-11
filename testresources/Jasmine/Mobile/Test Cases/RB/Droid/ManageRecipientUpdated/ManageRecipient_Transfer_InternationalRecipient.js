it("ManageRecipient_Transfer_InternationalRecipient", async function() {
	kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,4]"]);
	await kony.automation.playback.waitFor(["frmManageTransferRecipient","btnTransfer"]);
	kony.automation.button.click(["frmManageTransferRecipient","btnTransfer"]);
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"]);
	kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[1,0]"]);
	await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnOne"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnOne"]);
	await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnFive"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnFive"]);
	await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnFive"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnFive"]);
	await kony.automation.playback.waitFor(["frmMMTransferAmount","btnContinue"]);
	kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	kony.automation.button.click(["frmMMReview","btnTransfer"]);
});