it("GoToTransfer", async function() {
	// :User Injected Code Snippet [// - [1 lines]]
	kony.print("Go to Transfer");
	// :End User Injected Code Snippet {d6a38a76-4c14-a911-6196-4396e4313e0d}
	await kony.automation.playback.wait(3000);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxTransfer"]);
	await kony.automation.playback.wait(5000);
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"]);
});