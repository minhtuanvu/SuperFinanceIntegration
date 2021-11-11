it("PreLogin_VerifyLanguage_German", async function() {
	await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
	await kony.automation.playback.wait(1000);
	kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,3]"]);
	kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
	// :User Injected Code Snippet [//Click yes on alert - [1 lines]]
	kony.automation.alert.click(0);
	// :End User Injected Code Snippet {882f5ccf-7067-2524-24c4-759fdd648821}
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
});