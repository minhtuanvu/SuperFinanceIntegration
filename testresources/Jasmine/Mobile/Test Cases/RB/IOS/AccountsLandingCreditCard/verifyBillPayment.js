it("verifyBillPayment", async function() {
	await verifyAccountLanding(accountsLanding.creditCard);
	await initiateTransfer();
	await selectPayee(myBills.payeeName.electricity);
	await enterBillAmount();
	await selectFrequencyOneTimeAndTransfer();
},120000);