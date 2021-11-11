it("ViewFutureDatedTransfers", async function() {
	openManageTransactions();
	
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("Scheduled");
      flag = isDataPresent("Transfers");
    }  
	expect(flag).toBe(true);
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);