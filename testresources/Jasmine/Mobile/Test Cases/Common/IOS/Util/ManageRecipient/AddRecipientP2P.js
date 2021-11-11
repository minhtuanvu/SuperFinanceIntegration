it("AddRecipientP2P", async function() {
	await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
	kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
	await kony.automation.playback.waitFor(["frmRegP2PContactType","btnPhoneNumber"]);
	kony.automation.button.click(["frmRegP2PContactType","btnPhoneNumber"]);
	await kony.automation.playback.waitFor(["frmP2PRecPhoneNo","keypad","btnOne"]);
	kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnOne"]);
	kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnTwo"]);
	kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnThree"]);
	kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnFour"]);
	kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnFive"]);
	kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnSix"]);
	kony.automation.button.click(["frmP2PRecPhoneNo","btnContinue"]);
	await kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"]);
	kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],"P2PRecipientIOS");
	await kony.automation.playback.waitFor(["frmP2PRecipientName","btnContinue"]);
	kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
	await kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"]);
	kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","customPopup","lblPopup"]);
	// :User Injected Code Snippet [// - [1 lines]]
	expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customPopup","lblPopup"], "text")).toContain("added");
	// :End User Injected Code Snippet {6d2d0eb6-8a86-7769-f956-2fb55deac4b9}
	await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
});