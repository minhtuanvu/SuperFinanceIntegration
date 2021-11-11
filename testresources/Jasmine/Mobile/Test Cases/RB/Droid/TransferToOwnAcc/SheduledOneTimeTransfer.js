it("SheduledOneTimeTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("OwnAcc");
  EnterAmount("200");
  SelectSendOnDate();
  EnterNoteValue("SheduledOneTimeTransfer");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);