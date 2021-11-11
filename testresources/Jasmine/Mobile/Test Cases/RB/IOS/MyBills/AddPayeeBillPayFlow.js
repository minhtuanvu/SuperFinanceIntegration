it("AddPayeeBillPayFlow", async function() {
	// :User Injected Code Snippet [// - [8 lines]]
	await openMyBillsPage();
	await initiateBillPayment();
	await addNewPayeeBillPayFlow(myBills.payeeName.automation);
	await enterBillAmount();
	await selectFrequencyBillPay("HalfY");
	await selectDateRange_BillPay();
	await enterNoteValue_BillPay("automation");
	await goBackToDashboard();
	// :End User Injected Code Snippet {4f748cad-13cf-ea20-4563-e87ffb7d0e55}
});