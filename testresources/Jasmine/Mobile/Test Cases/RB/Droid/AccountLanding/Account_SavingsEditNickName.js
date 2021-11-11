it("Account_SavingsEditNickName", async function() {
	kony.automation.button.click(["frmAccountInfo","customHeader","btnRight"]);
	await kony.automation.playback.wait(2000);
	kony.automation.button.click(["frmAccountInfo","btnEditNickName"]);
	await kony.automation.playback.wait(1000);
	kony.automation.textbox.enterText(["frmAccInfoEdit","txtNickName"],"My Savings");
	kony.automation.button.click(["frmAccInfoEdit","btnSave"]);
	await kony.automation.playback.waitFor(["frmAccountInfo","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmAccountInfo","customHeader","flxBack"]);
});