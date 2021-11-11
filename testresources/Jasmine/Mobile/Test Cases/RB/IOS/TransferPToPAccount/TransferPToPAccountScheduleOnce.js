it("TransferPToPAccountScheduleOnce", async function() {
	// :User Injected Code Snippet [// - [4 lines]]
	await goToTransfers();
	await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
	await enterAmount();
	await transferScheduledOnce();
	// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
});