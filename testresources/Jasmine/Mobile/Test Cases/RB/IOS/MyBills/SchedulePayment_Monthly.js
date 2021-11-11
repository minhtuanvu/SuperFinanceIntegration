it("SchedulePayment_Monthly", async function() {
	// :User Injected Code Snippet [// - [8 lines]]
	await openMyBillsPage();
	await searchPayee(myBills.payeeName.creditCard);
	await clickOnPayBill();
	await enterBillAmount();
	await selectFrequencyBillPay("Monthly");
	await selectDateRange_BillPay();
	await enterNoteValue_BillPay("automation");
	await goBackToDashboard();
	// :End User Injected Code Snippet {936b33f3-04dd-fc09-f9cf-3e5666767d7f}
});