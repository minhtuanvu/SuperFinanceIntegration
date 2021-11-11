it("VerifyTransactionStatus", async function() {
	openManageTransactions();
	
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("Scheduled");
      flag = isDataPresent("Transfers");
    }  
	expect(flag).toBe(true);
	verifyTransactionStatus("Scheduled");
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);