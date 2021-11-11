it("EditRecurringDomesticPayment", async function() {
	let domestic = ManageRecipient.domesticAccount.name; 
	openManageTransactions();
	selectRecurringTab();
	let flag = isDataPresent("Recurring");
	if(flag){
      selectFilters("Active");
      flag = isDataPresent("Recurring");
    }  
  
  if(flag){
		searchTransaction(domestic);
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