it("VerifyCheckingAccountLandingPage", async function() {
	await verifyAccountLanding(accountsLanding.checking);
	await goToDashboardFromAccounts();
});