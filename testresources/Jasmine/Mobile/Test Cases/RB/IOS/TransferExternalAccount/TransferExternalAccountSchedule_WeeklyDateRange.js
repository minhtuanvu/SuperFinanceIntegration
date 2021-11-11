it("TransferExternalAccountSchedule_WeeklyDateRange", async function() {
	// :User Injected Code Snippet [// - [6 lines]]
	await goToTransfers();
	await searchInFromAndToScreen(Transfers.externalAccount.fromAccount , Transfers.externalAccount.toAccount);
	await enterAmount();
	await selectFrequency("Weekly");
	await selectDurationDateRange();
	await confirmTransfer();
	// :End User Injected Code Snippet {cbc92a73-fbb1-4eb2-d096-a72bcb460a3c}
});