it("verifyAccountInfoDeposit", async function() {
	await verifyAccountLanding(accountsLanding.deposit);
	await verifyAccountInfo();
	await goToDashboardFromAccounts();
});