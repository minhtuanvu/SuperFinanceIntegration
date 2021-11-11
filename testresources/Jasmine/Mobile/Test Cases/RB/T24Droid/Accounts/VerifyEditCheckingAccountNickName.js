it("VerifyEditCheckingAccountNickName", async function() {
  
  ClickonFirstCheckingAccount();
  VerifyAccInfo();
  verifyEditAccountNickname(Transfers.checkingAccount.name);
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);