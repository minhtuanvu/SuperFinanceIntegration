it("TransferOwnAccountSchedule_DailyDateRange", async function() {
	// :User Injected Code Snippet [// - [5 lines]]
	await goToTransfers();
	await searchInFromAndToScreen("Check","Credit");
	await enterAmount();
	//await transferScheduledOnce();
	await ScheduledTransferDailyDateRange();
	// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
});