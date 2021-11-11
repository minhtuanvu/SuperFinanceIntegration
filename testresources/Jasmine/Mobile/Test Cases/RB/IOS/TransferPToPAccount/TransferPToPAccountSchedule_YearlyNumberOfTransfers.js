it("TransferPToPAccountSchedule_YearlyNumberOfTransfers", async function() {
	// :User Injected Code Snippet [// - [8 lines]]
	await goToTransfers();
	await searchInFromAndToScreen(Transfers.p2pRecipient.fromAccount , Transfers.p2pRecipient.toAccount);
	await enterAmount();
	await selectFrequency("Yearly");
	await selectDurationNumberOfTransfers();
	await selectStartDate();
	await enterNumberOfTransfer();
	await confirmTransfer();
	// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
});