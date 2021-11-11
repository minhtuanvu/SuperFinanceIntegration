it("SearchBill", async function() {
	// :User Injected Code Snippet [// - [3 lines]]
	await openMyBillsPage();
	await searchBill(myBills.payeeName.electricity);
	await goBackToDashboard();
	// :End User Injected Code Snippet {d2140bba-8ba1-7cf1-75e1-9e8afce40bb6}
});