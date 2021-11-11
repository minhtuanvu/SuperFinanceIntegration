it("Accounts_CheckingsEditNickName", async function() {
	kony.automation.button.click(["frmAccountInfo","customHeader","btnRight"]);
	kony.automation.button.click(["frmAccountInfo","btnEditNickName"]);
	kony.automation.textbox.enterText(["frmAccInfoEdit","txtNickName"],"My Checkings");
	await kony.automation.playback.wait(3000);
	kony.automation.button.click(["frmAccInfoEdit","btnSave"]);
	await kony.automation.playback.wait(2000);
	kony.automation.flexcontainer.click(["frmAccountInfo","customHeader","flxBack"]);
});