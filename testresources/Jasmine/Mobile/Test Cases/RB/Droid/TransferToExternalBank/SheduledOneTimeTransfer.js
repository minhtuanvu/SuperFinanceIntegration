it("SheduledOneTimeTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("ExtAccJasmine");
  EnterAmount("200");
  SelectSendOnDate();
  EnterNoteValue("SheduledOneTimeTransfer");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);