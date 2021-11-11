it("ViewActiveRecurringTransfer", async function() {
	openManageTransactions();
	selectRecurringTab();
	let flag = isDataPresent("Recurring");
	if(flag){
      selectFilters("Active");
      flag = isDataPresent("Recurring");
    }
	expect(flag).toBe(true);
	goBackFromRecurringTabs();
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);