it("EditRecurringSameBankPayment", async function() {
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
        editRecurringTransaction();
		SelectFrequency("Daily");
        ConfirmTransfer();
        VerifyTransferSuccessMessage();    
    }else{
		expect(flag).toBe(true);
		goBackFromRecurringTabs();
		goBackFromTransfersTabs();
		VerifyAccountsDashBoard();
    }
  
});