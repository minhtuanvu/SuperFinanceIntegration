it("verifyScrollTransactions_Checking", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await verifyAccountLanding(accountsLanding.checking);
	await verifyScrollAccountTransactions();
	await goToDashboardFromAccounts();
	// :End User Injected Code Snippet {0943e832-3800-2224-2a11-d9e718f3cf5e}
});