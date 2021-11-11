it("SearchTransactions", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await openMenu("Manage Transactions");
	await VerifyTransferUnderActivities(Transfers.ownAccount.fromAccount);
	await goBackToDashboardFromTransferActivities();
	// :End User Injected Code Snippet {bae636c9-729d-6e59-8c01-bb3f84365277}
});