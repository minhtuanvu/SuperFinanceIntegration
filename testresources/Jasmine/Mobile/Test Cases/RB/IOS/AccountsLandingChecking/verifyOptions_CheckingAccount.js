it("verifyOptions_CheckingAccount", async function() {
	// :User Injected Code Snippet [// - [4 lines]]
	await verifyAccountLanding(accountsLanding.checking);
	await verifyOptionsOfCheckingAccount();
	await goToDashboardFromAccounts();
	
	// :End User Injected Code Snippet {1799b08d-0ca4-7fd3-5d77-ce7a7dd92660}
});