it("PreLogin_Support_VerifyAppVersion", async function() {
	await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
	kony.automation.button.click(["frmLogin","btnSupport"]);
	await kony.automation.playback.waitFor(["frmSupport","lblAppVersion"]);
	expect(kony.automation.widget.getWidgetProperty(["frmSupport","lblAppVersion"], "text")).toEqual("App Version 2021.01.00");
	await kony.automation.device.deviceBack();
	await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
});