it("PreLogin_VerifyLanguage_US_English", async function() {
	await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
	kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,0]"]);
	await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
	kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
	// :User Injected Code Snippet [//Click "Yes" on alert - [1 lines]]
	kony.automation.alert.click(0);
	// :End User Injected Code Snippet {1623e0bc-2225-768a-4cf3-4e6395f1522d}
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
});