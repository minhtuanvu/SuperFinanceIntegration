it("verifyTransactionDetails", async function() {
	await verifyAccountLanding(accountsLanding.loan);
	await verifyTransactionDetails();
	await goToDashboardFromAccounts();
});