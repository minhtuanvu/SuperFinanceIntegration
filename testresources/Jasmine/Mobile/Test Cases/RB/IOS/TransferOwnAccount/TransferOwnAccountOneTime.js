it("TransferOwnAccountOneTime", async function() {
	// :User Injected Code Snippet [// - [4 lines]]
	await goToTransfers();
	await searchInFromAndToScreen(Transfers.ownAccount.fromAccount , Transfers.ownAccount.toAccount);
	await enterAmount();
	await oneTimeTransfer();
	// :End User Injected Code Snippet {b25c4d32-5742-8fd6-a194-4e58ea8338a4}
});