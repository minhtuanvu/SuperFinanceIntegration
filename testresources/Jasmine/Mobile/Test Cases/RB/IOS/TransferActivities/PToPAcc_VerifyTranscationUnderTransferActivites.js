it("PToPAcc_VerifyTranscationUnderTransferActivites", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await openMenu("Manage Transactions");
	await VerifyTransferUnderActivities(ManageRecipient.recipientName.p2pRecipient);
	await goBackToDashboardFromTransferActivities();
	// :End User Injected Code Snippet {0f20e771-ef07-0221-a720-92a5159ec1d6}
});