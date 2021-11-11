it("verifyTransferMoney", async function() {
	await verifyAccountLanding(accountsLanding.checking);
	await initiateTransfer();
	await selectToAccount(Transfers.ownAccount.toAccount);
	await enterAmount();
	await oneTimeTransfer();
});