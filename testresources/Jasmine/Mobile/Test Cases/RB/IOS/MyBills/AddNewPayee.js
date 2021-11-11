it("AddNewPayee", async function() {
	// :User Injected Code Snippet [// - [4 lines]]
	await openMyBillsPage();
	await openManagePayee();
	await addNewPayee(myBills.payeeName.automation);
	await goBackToDashboard();
	// :End User Injected Code Snippet {e7004a5e-4f0b-976f-cc29-8b714aa6e080}
});