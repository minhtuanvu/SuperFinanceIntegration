it("DailySheduledTransfer-Occurences", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("PTOPAccJasmine");
  EnterAmount("200");
  SelectFrequency("Daily");
  SelectOccurences();
  EnterNoteValue("DailySheduledTransfer-Occurences");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);