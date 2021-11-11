it("WeeklySheduledTransfer-DateRange", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("OwnAcc");
  EnterAmount("200");
  SelectFrequency("Weekly");
  SelectDateRange();
  EnterNoteValue("WeeklySheduledTransfer-DateRange");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
  
},120000);