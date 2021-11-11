it("PreLogin_VerifyLanguage_UK_English", async function() {
	await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
	await kony.automation.playback.waitFor(["frmLogin","flxSelectLanguage","segSelectLanguage"]);
	await kony.automation.playback.wait(2000);
	kony.automation.segmentedui.click(["frmLogin","flxSelectLanguage","segSelectLanguage[0,1]"]);
	await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
	kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
	// :User Injected Code Snippet [// - [1 lines]]
	kony.automation.alert.click(1);
	// :End User Injected Code Snippet {b5c5062c-c6e8-a864-8bf2-8a26497fd66b}
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
});