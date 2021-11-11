it("VerifyAllTransferFilter", async function() {
	openManageTransactions();
	selectFilters("All Transfers");
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);