it("verifyTransactionDetails", async function() {
	await verifyAccountLanding(accountsLanding.checking);
	await verifyTransactionDetails();
	await goToDashboardFromAccounts();
});