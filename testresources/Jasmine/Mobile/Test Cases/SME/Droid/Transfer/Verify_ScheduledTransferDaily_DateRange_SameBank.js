it("Verify_ScheduledTransferDaily_DateRange_SameBank", async function() {
  
  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("Daily");
  SelectDateRangeAndConfirmTransfer("Daily","P2P");
},180000);