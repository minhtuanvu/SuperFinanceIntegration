it("verifyTransferMoney", async function() {
	await verifyAccountLanding(accountsLanding.savings);
	await initiateTransfer();
	await selectToAccount(Transfers.ownAccount.toAccount);
	await enterAmount();
	await oneTimeTransfer();
});