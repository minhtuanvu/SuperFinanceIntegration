it("PreLogin_VerifyLanguage_Spanish", async function() {
	await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
	await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
	kony.automation.segmentedui.scrollToRow(["frmLogin","segSelectLanguage[0,2]"]);
	kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,2]"]);
	await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
	kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
	// :User Injected Code Snippet [//Click "Yes" on alert - [1 lines]]
	kony.automation.alert.click(0);
	// :End User Injected Code Snippet {e50a1016-3ef0-9bc5-a772-20d8070e9965}
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
});