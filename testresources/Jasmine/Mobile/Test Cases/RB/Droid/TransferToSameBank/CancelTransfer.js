it("CancelTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("SameBankAccJasmine");
  EnterAmount("200");
  CancelTransfer();
  VerifyAccountsDashBoard();
},90000);