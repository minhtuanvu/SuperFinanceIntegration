it("VerifyEditDepositAccountNickName", async function() {
  
  ClickonFirstDepositAccount();
  VerifyAccInfo();
  verifyEditAccountNickname(Transfers.depositAccount.name);
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);