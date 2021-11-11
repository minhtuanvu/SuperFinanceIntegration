it("OneTimeTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("OwnAcc");
  EnterAmount("200");
  EnterNoteValue("OneTimeTransfer");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);