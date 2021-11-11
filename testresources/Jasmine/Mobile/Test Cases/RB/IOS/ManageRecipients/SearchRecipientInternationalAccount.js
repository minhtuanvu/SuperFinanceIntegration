it("SearchRecipientInternationalAccount", async function() {
	// :User Injected Code Snippet [// - [4 lines]]
	await openMenu("Manage Beneficiaries");
	await listOfRecipients("International Account");
	await searchRecipient(ManageRecipient.recipientName.internationalAccount);
	await goBackToDashboardFromManageRecipient();
	// :End User Injected Code Snippet {a564bbac-9a10-2b5f-fda1-1950d4e9ff32}
});