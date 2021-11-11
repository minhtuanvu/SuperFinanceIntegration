it("WeeklySheduledTransfer-Occurences", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("PTOPAccJasmine");
  EnterAmount("200");
  SelectFrequency("Weekly");
  SelectOccurences();
  EnterNoteValue("WeeklySheduledTransfer-Occurences");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);