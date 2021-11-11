it("VerifyEditCheckingAccountNickName", async function() {
  
  ClickonFirstCheckingAccount();
  VerifyAccInfo();
  verifyEditAccountNickname("Checking");
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);