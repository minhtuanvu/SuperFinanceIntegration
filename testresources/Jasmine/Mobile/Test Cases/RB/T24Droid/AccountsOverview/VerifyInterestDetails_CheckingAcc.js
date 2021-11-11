it("VerifyInterestDetails_CheckingAcc", async function() {
  
  SelectAccountOndashBoard(Transfers.checkingAccount.name);
  VerifyAccInfo();
  VerifyInterestDetails();
  MoveBackFromAccInfo();
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);