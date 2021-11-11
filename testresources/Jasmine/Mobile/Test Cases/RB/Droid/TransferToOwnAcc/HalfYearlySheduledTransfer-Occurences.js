it("HalfYearlySheduledTransfer-Occurences", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("OwnAcc");
  EnterAmount("200");
  SelectFrequency("HalfY");
  SelectOccurences();
  EnterNoteValue("HalfYearlySheduledTransfer-Occurences");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);