it("TransferOwnAccountSchedule_QuarterlyDateRange", async function() {
	// :User Injected Code Snippet [// - [6 lines]]
	await goToTransfers();
	await searchInFromAndToScreen(Transfers.ownAccount.fromAccount , Transfers.ownAccount.toAccount);
	await enterAmount();
	await selectFrequency("QTR");
	await selectDurationDateRange();
	await confirmTransfer();
	// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
});