it("verifyDepositAccountLandingPage", async function() {
	await verifyAccountLanding(accountsLanding.deposit);
	await goToDashboardFromAccounts();
});