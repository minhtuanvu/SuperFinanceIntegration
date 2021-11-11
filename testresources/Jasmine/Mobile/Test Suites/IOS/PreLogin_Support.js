describe("PreLogin_Support", function() {
	it("PreLogin_Support_FAQ_TnC", async function() {
		await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
		kony.automation.button.click(["frmLogin","btnSupport"]);
		await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
		kony.automation.segmentedui.click(["frmSupport","segSupport[0,0]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmSupportInfo","segFaq"]);
		kony.automation.segmentedui.scrollToRow(["frmSupportInfo","segFaq[9,5]"]);
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
		kony.automation.segmentedui.click(["frmSupport","segSupport[0,1]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmSupportInfo","browserContent"]);
		await kony.automation.scrollToWidget(["frmSupportInfo","browserContent"]);
		await kony.automation.device.deviceBack();
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
		kony.automation.segmentedui.click(["frmSupport","segSupport[0,2]"]);
		await kony.automation.playback.waitFor(["frmSupportInfo","browserContent"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.device.deviceBack();
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
	});
	
	it("PreLogin_Support_VerifyAppVersion", async function() {
		await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
		kony.automation.button.click(["frmLogin","btnSupport"]);
		await kony.automation.playback.waitFor(["frmSupport","lblAppVersion"]);
		expect(kony.automation.widget.getWidgetProperty(["frmSupport","lblAppVersion"], "text")).toEqual("App Version 2020.10.00");
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
	});
});