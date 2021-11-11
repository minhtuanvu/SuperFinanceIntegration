it("QuarterlySheduledTransfer-Occurences", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("InterAccJasmine");
  EnterAmount("200");
  SelectFrequency("QTR");
  SelectOccurences();
  EnterNoteValue("QuarterlySheduledTransfer-Occurences");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);