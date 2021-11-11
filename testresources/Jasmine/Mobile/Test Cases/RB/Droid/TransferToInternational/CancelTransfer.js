it("CancelTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("InterAccJasmine");
  EnterAmount("200");
  CancelTransfer();
  VerifyAccountsDashBoard();
},90000);