it("VerifySearchFunctionality", async function() {
	openManageTransactions();
	let accNumber = ManageRecipient.sameBankAccount1.accountNumber;
	let flag = isDataPresent("Transfers");
	if(flag){
      selectFilters("All Transfers");
      flag = isDataPresent("Transfers");
    }  
	expect(flag).toBe(true);
	searchTransaction(accNumber);
	goBackFromTransfersTabs();
	VerifyAccountsDashBoard();
},180000);