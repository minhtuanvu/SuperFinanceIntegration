it("OwnAcc_VerifyTranscationUnderTransferActivites", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await openMenu("Manage Transactions");
	await VerifyTransferUnderActivities(Transfers.ownAccount.fromAccount);
	await goBackToDashboardFromTransferActivities();
	// :End User Injected Code Snippet {044aa7fa-5f85-1a7c-b956-e290a3fa18d1}
});