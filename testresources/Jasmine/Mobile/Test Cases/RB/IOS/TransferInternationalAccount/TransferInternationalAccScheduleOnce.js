it("TransferInternationalAccScheduleOnce", async function() {
	// :User Injected Code Snippet [// - [4 lines]]
	await goToTransfers();
	await searchInFromAndToScreen(Transfers.internationalAccount.fromAccount , Transfers.internationalAccount.toAccount);
	await enterAmount();
	await transferScheduledOnce();
	// :End User Injected Code Snippet {cbc92a73-fbb1-4eb2-d096-a72bcb460a3c}
});