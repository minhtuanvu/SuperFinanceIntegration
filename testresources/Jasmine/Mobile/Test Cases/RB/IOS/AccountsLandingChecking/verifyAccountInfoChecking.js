it("verifyAccountInfoChecking", async function() {
	await verifyAccountLanding(accountsLanding.checking);
	await verifyAccountInfo();
	await goToDashboardFromAccounts();
});