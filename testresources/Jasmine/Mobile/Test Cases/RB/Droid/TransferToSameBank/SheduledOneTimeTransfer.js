it("SheduledOneTimeTransfer", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("SameBankAccJasmine");
  EnterAmount("200");
  SelectSendOnDate();
  EnterNoteValue("SheduledOneTimeTransfer");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);