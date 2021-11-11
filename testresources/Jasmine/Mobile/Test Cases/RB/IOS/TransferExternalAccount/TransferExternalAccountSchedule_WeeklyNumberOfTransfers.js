it("TransferExternalAccountSchedule_WeeklyNumberOfTransfers", async function() {
	// :User Injected Code Snippet [// - [8 lines]]
	await goToTransfers();
	await searchInFromAndToScreen(Transfers.externalAccount.fromAccount , Transfers.externalAccount.toAccount);
	await enterAmount();
	await selectFrequency("Weekly");
	await selectDurationNumberOfTransfers();
	await selectStartDate();
	await enterNumberOfTransfer();
	await confirmTransfer();
	// :End User Injected Code Snippet {cbc92a73-fbb1-4eb2-d096-a72bcb460a3c}
});