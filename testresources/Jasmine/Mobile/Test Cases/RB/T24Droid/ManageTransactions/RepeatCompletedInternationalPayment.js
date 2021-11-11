it("RepeatCompletedInternationalPayment", async function() {
  let international = ManageRecipient.internationalAccount.IBAN; 
  openManageTransactions();
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("Completed");
      flag = isDataPresent("Transfers");
    }
	if(flag){
		searchTransaction(international);
        repeatTransaction();
        ConfirmTransfer();
        VerifyTransferSuccessMessage();    
    }else{
		expect(flag).toBe(true);
		goBackFromTransfersTabs();
		VerifyAccountsDashBoard();
    }
},18000);