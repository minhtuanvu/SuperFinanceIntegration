it("verifyScrollTransactions_Loan", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await verifyAccountLanding(accountsLanding.loan);
	await verifyScrollAccountTransactions();
	await goToDashboardFromAccounts();
	// :End User Injected Code Snippet {95fd8e84-07c9-93f2-d124-ea7651aa6525}
});