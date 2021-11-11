it("goBackToDashboard", async function() {
	await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
	// :User Injected Code Snippet [// - [3 lines]]
	kony.automation.device.deviceBack();
	await kony.automation.playback.wait(1000);
	kony.automation.device.deviceBack();
	// :End User Injected Code Snippet {21512f5c-e0f4-5dd6-ab3e-864d031f1c8a}
});