it("CancelSameBankRecurringPayment", async function() {
	let sameBank = ManageRecipient.sameBankAccount1.accountNumber;
	openManageTransactions();
	selectRecurringTab();
	let flag = isDataPresent("Recurring");
	if(flag){
      selectFilters("Active");
      flag = isDataPresent("Recurring");
    }
  
	if(flag){
		searchTransaction(sameBank);
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