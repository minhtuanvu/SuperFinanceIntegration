it("Verify_ScheduledTransferQTR_DateRange_SameBank", async function() {
  
  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("QTR");
  SelectDateRangeAndConfirmTransfer("QTR","P2P");
},180000);