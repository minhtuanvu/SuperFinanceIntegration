it("TransferInternationalAccSchedule_HalfYearlyDateRange", async function() {
	// :User Injected Code Snippet [// - [6 lines]]
	await goToTransfers();
	await searchInFromAndToScreen(Transfers.internationalAccount.fromAccount , Transfers.internationalAccount.toAccount);
	await enterAmount();
	await selectFrequency("HalfY");
	await selectDurationDateRange();
	await confirmTransfer();
	// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
});