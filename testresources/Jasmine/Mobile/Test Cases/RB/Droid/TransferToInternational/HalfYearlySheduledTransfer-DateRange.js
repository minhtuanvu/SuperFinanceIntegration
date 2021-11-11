it("HalfYearlySheduledTransfer-DateRange", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("InterAccJasmine");
  EnterAmount("200");
  SelectFrequency("HalfY");
  SelectDateRange();
  EnterNoteValue("HalfYearlySheduledTransfer-DateRange");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
  
},120000);