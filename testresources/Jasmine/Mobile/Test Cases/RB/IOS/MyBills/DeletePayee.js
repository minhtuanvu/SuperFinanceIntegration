it("DeletePayee", async function() {
	// :User Injected Code Snippet [// - [5 lines]]
	await openMyBillsPage();
	await searchPayee(myBills.payeeName.automation);
	await deletePayee();
	await deviceBack();
	await goBackToDashboard();
	// :End User Injected Code Snippet {5baf3d51-6cb4-81a9-64d1-b582276938c3}
});