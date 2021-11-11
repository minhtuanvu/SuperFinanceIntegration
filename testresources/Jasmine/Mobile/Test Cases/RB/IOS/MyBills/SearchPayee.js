it("SearchPayee", async function() {
	// :User Injected Code Snippet [// - [5 lines]]
	await openMyBillsPage();
	await searchPayee(myBills.payeeName.creditCard);
	await deviceBack();
	await deviceBack();
	await goBackToDashboard();
	// :End User Injected Code Snippet {dbfc39c3-5c0f-2787-be51-73ec3b60bc35}
});