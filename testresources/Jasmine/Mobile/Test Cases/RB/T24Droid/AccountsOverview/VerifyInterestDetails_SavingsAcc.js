it("VerifyInterestDetails_SavingsAcc", async function() {
  
  SelectAccountOndashBoard(Transfers.savingsAccount.name);
  VerifyAccInfo();
  VerifyInterestDetails();
  MoveBackFromAccInfo();
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);