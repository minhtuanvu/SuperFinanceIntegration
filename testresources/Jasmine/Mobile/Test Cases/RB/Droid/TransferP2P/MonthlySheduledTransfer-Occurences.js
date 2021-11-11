it("MonthlySheduledTransfer-Occurences", async function() {
  
  navigateToTransfers();
  SelectFromAccount();
  SelectToAccount("PTOPAccJasmine");
  EnterAmount("200");
  SelectFrequency("Monthly");
  SelectOccurences();
  EnterNoteValue("MonthlySheduledTransfer-Occurences");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);