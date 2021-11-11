it("SearchExternalAccount", async function() {
	// :User Injected Code Snippet [// - [8 lines]]
	await goToTransfers();
	await searchInFromAndToScreen(Transfers.externalAccount.fromAccount , Transfers.externalAccount.toAccount);
	await kony.automation.device.deviceBack();
	await kony.automation.device.deviceBack();
	await kony.automation.device.deviceBack();
	// :End User Injected Code Snippet {cf3928e2-539e-4c52-1a93-19e4aa39a9cd}
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgTransfer"]);
	// :End User Injected Code Snippet {805bef23-cad6-46e0-f46c-d40e9b4490d3}
});