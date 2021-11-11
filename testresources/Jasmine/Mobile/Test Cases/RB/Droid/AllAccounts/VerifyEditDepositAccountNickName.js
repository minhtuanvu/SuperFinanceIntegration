it("VerifyEditDepositAccountNickName", async function() {
  
  ClickonFirstDepositAccount();
  VerifyAccInfo();
  verifyEditAccountNickname("Deposit");
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);