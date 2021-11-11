it("verifyTransactionDetails", async function() {
	await verifyAccountLanding(accountsLanding.deposit);
	await verifyTransactionDetails();
	await goToDashboardFromAccounts();
});