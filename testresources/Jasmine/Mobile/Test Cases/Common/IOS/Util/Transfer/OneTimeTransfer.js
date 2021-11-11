it("OneTimeTransfer", async function() {
	await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
	kony.automation.button.click(["frmMMReview","btnTransfer"]);
	await kony.automation.playback.waitFor(["frmMMConfirmation","lblSuccessMessage"]);
	// :User Injected Code Snippet [//Assert success message - [1 lines]]
	expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation","lblSuccessMessage"], "text")).toContain("uccess");
	// :End User Injected Code Snippet {d03b935e-9e64-4c3e-db7c-f2e1959569b7}
	await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"]);
	kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
});