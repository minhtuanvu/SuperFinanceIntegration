it("VerifyEditLoanAccountNickName", async function() {
  
  ClickonFirstLoanAccount();
  VerifyAccInfo();
  verifyEditAccountNickname("Loan");
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);