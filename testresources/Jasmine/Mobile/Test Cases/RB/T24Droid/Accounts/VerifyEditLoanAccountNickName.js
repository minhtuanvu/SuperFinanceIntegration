it("VerifyEditLoanAccountNickName", async function() {
  
  ClickonFirstLoanAccount();
  VerifyAccInfo();
  verifyEditAccountNickname(Transfers.loanAccount.name);
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);