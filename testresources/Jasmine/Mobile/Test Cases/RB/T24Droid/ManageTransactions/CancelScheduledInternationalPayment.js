it("CancelScheduledInternationalPayment", async function() {
	openManageTransactions();
	
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("Scheduled");
      flag = isDataPresent("Transfers");
    }  
	expect(flag).toBe(true);
	searchTransaction("International");
	cancelTransaction();  
	goBackFromTransfersTabs();
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);