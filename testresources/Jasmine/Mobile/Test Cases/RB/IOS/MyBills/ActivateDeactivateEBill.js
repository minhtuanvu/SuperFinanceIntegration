it("ActivateDeactivateEBill", async function() {
	// :User Injected Code Snippet [// - [7 lines]]
	await openMyBillsPage();
	await searchPayee(myBills.payeeName.automation);
	await activateDeactivateEBill();
	await deviceBack();
	await deviceBack();
	await goBackToDashboard();
	
	// :End User Injected Code Snippet {684b3e30-98b8-fe69-d329-7dcdbb6b3933}
});