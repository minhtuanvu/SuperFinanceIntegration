it("RepeatCompletedDomesticPayment", async function() {
  let domestic = ManageRecipient.domesticAccount.name; 
  openManageTransactions();
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("Completed");
      flag = isDataPresent("Transfers");
    }
	if(flag){
		searchTransaction(domestic);
        repeatTransaction();
        ConfirmTransfer();
        VerifyTransferSuccessMessage();    
    }else{
		expect(flag).toBe(true);
		goBackFromTransfersTabs();
		VerifyAccountsDashBoard();
    }
},18000);