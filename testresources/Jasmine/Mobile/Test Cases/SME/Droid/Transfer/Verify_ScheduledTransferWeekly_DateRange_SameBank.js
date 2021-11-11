it("Verify_ScheduledTransferWeekly_DateRange_SameBank", async function() {
  
  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("Weekly");
  SelectDateRangeAndConfirmTransfer("Weekly","P2P");
},180000);