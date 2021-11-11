it("TransferP2PAccount", async function() {
	// :User Injected Code Snippet [// - [6 lines]]
	await openMenu("Manage Beneficiaries");
	await listOfRecipients("PToP");
	await selectPToPAccountAndInitiateTransfer(ManageRecipient.recipientName.p2pRecipient);
	await selectFromAccount(Transfers.ownAccount.fromAccount);
	await enterAmount();
	await oneTimeTransfer();
	// :End User Injected Code Snippet {6c568b37-fee5-f150-0ea9-e0b08148bd5f}
});