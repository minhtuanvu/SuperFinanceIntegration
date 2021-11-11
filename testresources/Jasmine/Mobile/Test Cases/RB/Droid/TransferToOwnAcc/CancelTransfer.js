it("CancelTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("OwnAcc");
  EnterAmount("200");
  CancelTransfer();
  VerifyAccountsDashBoard();
},90000);