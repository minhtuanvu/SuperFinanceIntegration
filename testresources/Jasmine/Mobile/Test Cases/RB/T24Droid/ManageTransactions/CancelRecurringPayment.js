it("CancelFutureDatedTransfer", async function() {
	openManageTransactions();
	selectRecurringTab();
	let flag = isDataPresent("Recurring");
	if(flag){
      selectFilters("Active");
      flag = isDataPresent("Recurring");
    }
  
	if(flag){
		cancelRecurringTransaction();
		goBackFromRecurringTabs();
    }
	else{
       expect(flag).toBe(true);
     }
	goBackFromRecurringTabs();
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);