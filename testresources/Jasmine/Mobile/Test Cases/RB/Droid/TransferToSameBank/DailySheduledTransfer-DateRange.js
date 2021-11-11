it("DailySheduledTransfer-DateRange", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("SameBankAccJasmine");
  EnterAmount("200");
  SelectFrequency("Daily");
  SelectDateRange();
  EnterNoteValue("DailySheduledTransfer-DateRange");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
  
},120000);