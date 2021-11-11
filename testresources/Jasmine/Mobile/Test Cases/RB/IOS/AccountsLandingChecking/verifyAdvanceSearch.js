it("verifyAdvanceSearch", async function() {
	// :User Injected Code Snippet [// - [4 lines]]
	await verifyAccountLanding(accountsLanding.checking);
	await advanceSearchAccountsDetail();
	await goToDashboardFromAccounts();
	
	// :End User Injected Code Snippet {47cf1cdf-70f8-6611-cdb1-88ed75dff5a4}
});