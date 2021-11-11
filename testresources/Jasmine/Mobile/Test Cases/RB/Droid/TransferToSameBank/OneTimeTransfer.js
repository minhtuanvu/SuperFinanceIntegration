it("OneTimeTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("SameBankAccJasmine");
  EnterAmount("200");
  EnterNoteValue("OneTimeTransfer");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);