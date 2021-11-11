it("internalCanceltransaction", async function() {
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,1]"]);
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"]);
	kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[1,0]"]);
	await kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"]);
	kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[1,0]"]);
	await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmMMTransferAmount","btnContinue"]);
	kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	await kony.automation.playback.waitFor(["frmMMReview","customHeader","btnRight"]);
	kony.automation.button.click(["frmMMReview","customHeader","btnRight"]);
});