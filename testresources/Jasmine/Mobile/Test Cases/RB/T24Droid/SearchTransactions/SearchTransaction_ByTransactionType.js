it("SearchTransaction_ByTransactionType", async function() {
  
	ClickonFirstCheckingAccount();
	VerifyAdvancedSearch_ByTransactionType();
	MoveBackfromAccountDetails();
	VerifyAccountsDashBoard();
  
},120000);
