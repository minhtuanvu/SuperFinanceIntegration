it("VerifyAllRecurringFilter", async function() {
	openManageTransactions();
	verifyRecurringAllTransaction();
	goBackFromRecurringTabs();
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);