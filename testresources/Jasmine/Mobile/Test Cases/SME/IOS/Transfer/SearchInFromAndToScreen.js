it("SearchInFromAndToScreen", async function() {
	// :User Injected Code Snippet [// - [5 lines]]
	await goToTransfers();
	await searchInFromAndToScreen("Business", "Credit");
	await kony.automation.device.deviceBack();
	await kony.automation.device.deviceBack();
	await kony.automation.device.deviceBack();
	// :End User Injected Code Snippet {cf3928e2-539e-4c52-1a93-19e4aa39a9cd}
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgTransfer"]);
});