it("PreLogin_Support_VerifyAppVersion", async function() {
	await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
	kony.automation.button.click(["frmLogin","btnSupport"]);

	await kony.automation.playback.waitFor(["frmSupport","flxAppVersion","lblAppVersion"]);
	var appVersion = kony.automation.widget.getWidgetProperty(["frmSupport","flxAppVersion","lblAppVersion"],"text");

	expect(appVersion).toEqual('App Version 2021.01.00');
	kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
},60000);