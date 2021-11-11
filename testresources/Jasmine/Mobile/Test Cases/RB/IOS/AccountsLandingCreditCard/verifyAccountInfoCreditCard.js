it("verifyAccountInfoCreditCard", async function() {
	await verifyAccountLanding(accountsLanding.creditCard);
	await verifyAccountInfo();
	await goToDashboardFromAccounts();
});