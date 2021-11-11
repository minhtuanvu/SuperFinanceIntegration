it("AddRecipientSameBank", async function() {
	await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
	kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnTwo"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnFour"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnFive"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnSix"]);
	kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnTwo"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnFour"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnFive"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnSix"]);
	kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
	kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],"samebankIOS");
	await kony.automation.playback.waitFor(["frmBenName","btnContinue"]);
	kony.automation.button.click(["frmBenName","btnContinue"]);
	await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
	kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
	await kony.automation.playback.wait(3000);
	// :User Injected Code Snippet [// - [2 lines]]
	await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("added");
	// :End User Injected Code Snippet {6c03a7a9-f57f-f8d9-62f8-21a0ec441e4f}
	await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
	kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
});