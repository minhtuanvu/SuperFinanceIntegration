it("VerifyRecurringTransactionStatus", async function() {
	openManageTransactions();
	selectRecurringTab();
	let flag = isDataPresent("Recurring");
	if(flag){
      selectFilters("Active");
      flag = isDataPresent("Recurring");
    }  
	expect(flag).toBe(true);
	verifyTransactionStatus("Active");
	goBackFromRecurringTabs();
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);