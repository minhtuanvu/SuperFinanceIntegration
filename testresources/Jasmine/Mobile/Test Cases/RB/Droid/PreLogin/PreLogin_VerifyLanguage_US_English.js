it("PreLogin_VerifyLanguage_US_English", async function() {
	await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
	await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
	kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,0]"]);
	await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
	kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
	kony.automation.alert.click(0);
	await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
},60000);