it("CancelTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("ExtAccJasmine");
  EnterAmount("200");
  CancelTransfer();
  VerifyAccountsDashBoard();
},90000);