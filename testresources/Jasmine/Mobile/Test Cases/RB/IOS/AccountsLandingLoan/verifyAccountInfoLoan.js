it("verifyAccountInfoLoan", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await verifyAccountLanding(accountsLanding.loan);
	await verifyAccountInfo();
	await goToDashboardFromAccounts();
	// :End User Injected Code Snippet {43cf2609-7d33-b88e-7547-b130dedc05b8}
});