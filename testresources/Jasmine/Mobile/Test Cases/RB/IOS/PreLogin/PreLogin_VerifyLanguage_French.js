it("PreLogin_VerifyLanguage_French", async function() {
	await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
	kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,4]"]);
	kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
	kony.automation.alert.click(0);
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
});