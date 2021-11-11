it("EditRecurringPayment", async function() {
	openManageTransactions();
	selectRecurringTab();
	let flag = isDataPresent("Recurring");
	if(flag){
      selectFilters("Active");
      flag = isDataPresent("Recurring");
    }  
	expect(flag).toBe(true);
	editRecurringTransaction();
	SelectFrequency("Daily");
	ConfirmTransfer();
	VerifyTransferSuccessMessage();
});