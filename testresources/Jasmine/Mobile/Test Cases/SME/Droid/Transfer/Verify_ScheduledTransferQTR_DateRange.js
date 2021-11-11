it("Verify_ScheduledTransferQTR_DateRange", async function() {
  
  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("QTR");
  SelectDateRangeAndConfirmTransfer("QTR","normal");
},180000);