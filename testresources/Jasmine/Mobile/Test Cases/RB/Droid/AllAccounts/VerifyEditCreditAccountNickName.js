it("VerifyEditCreditAccountNickName", async function() {
  
  ClickonFirstCreditCardAccount();
  VerifyAccInfo();
  verifyEditAccountNickname("Credit Card");
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);