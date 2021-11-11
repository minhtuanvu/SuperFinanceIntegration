it("VerifyEditSavingAccountNickName", async function() {
  
  ClickonFirstSavingAccount();
  VerifyAccInfo();
  verifyEditAccountNickname(Transfers.savingsAccount.name);
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);