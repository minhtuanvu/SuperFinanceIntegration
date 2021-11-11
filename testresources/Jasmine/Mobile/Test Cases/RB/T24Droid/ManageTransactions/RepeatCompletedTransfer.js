it("RepeatCompletedTransfer", async function() {
  
  openManageTransactions();
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("Completed");
      flag = isDataPresent("Transfers");
    }
	expect(flag).toBe(true);
	repeatTransaction();
	ConfirmTransfer();
	VerifyTransferSuccessMessage();
},18000);