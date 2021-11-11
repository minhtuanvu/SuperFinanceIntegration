it("VerifySwiftCode_AccountsInfo", async function() {
  
  SelectAccountOndashBoard(Transfers.checkingAccount.name);
  VerifyAccInfo();
  VerifySwiftCode();
  MoveBackFromAccInfo();
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);