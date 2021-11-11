it("verifyLoanAccountLandingPage", async function() {
	await verifyAccountLanding(accountsLanding.loan);
	await goToDashboardFromAccounts();
});