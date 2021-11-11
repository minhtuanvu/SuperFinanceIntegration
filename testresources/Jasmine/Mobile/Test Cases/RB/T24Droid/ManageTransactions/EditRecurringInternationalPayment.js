it("EditRecurringInternationalPayment", async function() {
	let international = ManageRecipient.internationalAccount.IBAN; 
	openManageTransactions();
	selectRecurringTab();
	let flag = isDataPresent("Recurring");
	if(flag){
      selectFilters("Active");
      flag = isDataPresent("Recurring");
    }  
  
  if(flag){
		searchTransaction(international);
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