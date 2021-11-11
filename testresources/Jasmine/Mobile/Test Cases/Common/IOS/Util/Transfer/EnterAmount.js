it("EnterAmount", async function() {
	await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	await kony.automation.playback.waitFor(["frmMMReview","flxConfirmationDetails","segDetails"]);
});