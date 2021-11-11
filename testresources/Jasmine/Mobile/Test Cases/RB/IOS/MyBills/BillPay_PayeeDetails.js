it("BillPay_PayeeDetails", async function() {
	// :User Injected Code Snippet [// - [7 lines]]
	await openMyBillsPage();
	await searchPayee(myBills.payeeName.automation);
	await clickOnPayBill();
	await enterBillAmount();
	await selectFrequencyBillPay("Now");
	await enterNoteValue_BillPay("automation");
	await goBackToDashboard();
	// :End User Injected Code Snippet {3fc5f056-7707-280d-8412-962eafcd671e}
});