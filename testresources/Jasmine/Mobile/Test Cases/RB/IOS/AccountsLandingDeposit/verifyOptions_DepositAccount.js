it("verifyOptions_DepositAccount", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await verifyAccountLanding(accountsLanding.deposit);
	await verifyOptionsOfDepositAccount();
	await goToDashboardFromAccounts();
	// :End User Injected Code Snippet {4254cc58-e553-235b-13b2-deb5fe7c43de}
});