it("CancelFutureDatedTransfer", async function() {
	openManageTransactions();
	
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("Scheduled");
      flag = isDataPresent("Transfers");
    }  
	expect(flag).toBe(true);
	cancelTransaction();  
	goBackFromTransfersTabs();
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);