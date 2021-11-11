it("OneTimeTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("InterAccJasmine");
  EnterAmount("200");
  EnterNoteValue("OneTimeTransfer");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);