it("verifyTransactionDetails", async function() {
	await verifyAccountLanding(accountsLanding.savings);
	await verifyTransactionDetails();
	await goToDashboardFromAccounts();
});