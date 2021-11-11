it("VerifyEditSavingAccountNickName", async function() {
  
  ClickonFirstSavingAccount();
  VerifyAccInfo();
  verifyEditAccountNickname("Saving");
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);