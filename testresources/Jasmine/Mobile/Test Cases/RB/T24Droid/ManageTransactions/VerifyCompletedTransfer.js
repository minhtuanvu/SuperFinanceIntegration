it("VerifyCompletedTransfer", async function() {
	openManageTransactions();
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("All Transfers");
      flag = isDataPresent("Transfers");
    }
	expect(flag).toBe(true);
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);