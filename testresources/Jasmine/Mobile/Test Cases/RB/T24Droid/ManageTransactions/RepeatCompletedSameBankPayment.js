it("RepeatCompletedSameBankPayment", async function() {
  let sameBank = ManageRecipient.sameBankAccount1.accountNumber; //"108812";
  openManageTransactions();
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("Completed");
      flag = isDataPresent("Transfers");
    }
	if(flag){
		searchTransaction(sameBank);
        repeatTransaction();
        ConfirmTransfer();
        VerifyTransferSuccessMessage();    
    }else{
		expect(flag).toBe(true);
		goBackFromTransfersTabs();
		VerifyAccountsDashBoard();
    }
},18000);