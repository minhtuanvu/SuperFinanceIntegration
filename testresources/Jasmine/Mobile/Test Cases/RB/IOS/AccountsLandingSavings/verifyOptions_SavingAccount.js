it("verifyOptions_SavingAccount", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await verifyAccountLanding(accountsLanding.savings);
	await verifyOptionsOfSavingsAccount();
	await goToDashboardFromAccounts();
	// :End User Injected Code Snippet {4254cc58-e553-235b-13b2-deb5fe7c43de}
});