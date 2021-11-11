it("VerifyAccountPreview", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await openMenu("Settings");
	await enableDisableAccountPreview();
	await goBackToDashboardFromSettings();
	// :End User Injected Code Snippet {b26f28ae-72fc-9866-adea-cdb4c10d6af7}
});