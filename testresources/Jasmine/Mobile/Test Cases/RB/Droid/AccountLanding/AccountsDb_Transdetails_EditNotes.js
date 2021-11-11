it("AccountsDb_Transdetails_EditNotes", async function() {
	await kony.automation.playback.wait(1000);
	kony.automation.textbox.enterText(["frmPFMCategorisedTransactions","tbxSearch"],"food");
	await kony.automation.playback.wait(2000);
	kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
	kony.automation.button.click(["frmPFMTransactionDetails","customHeader","btnRight"]);
	kony.automation.flexcontainer.click(["frmPFMTransactionDetails","flxOption2"]);
	await kony.automation.playback.wait(1000);
	kony.automation.textarea.enterText(["frmPFMNote","txtNote"],"Mexican Food Bill1\n\n");
	await kony.automation.playback.wait(1000);
	kony.automation.button.click(["frmPFMNote","btnSave"]);
	await kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmPFMTransactionDetails","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","customHeader","flxBack"]);
});