it("YearlySheduledTransfer-Occurences", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("InterAccJasmine");
  EnterAmount("200");
  SelectFrequency("Yearly");
  SelectOccurences();
  EnterNoteValue("YearlySheduledTransfer-Occurences");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);