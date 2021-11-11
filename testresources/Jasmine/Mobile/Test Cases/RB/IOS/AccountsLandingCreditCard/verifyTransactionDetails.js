it("verifyTransactionDetails", async function() {
	await verifyAccountLanding(accountsLanding.creditCard);
	await verifyTransactionDetails();
	await goToDashboardFromAccounts();
});