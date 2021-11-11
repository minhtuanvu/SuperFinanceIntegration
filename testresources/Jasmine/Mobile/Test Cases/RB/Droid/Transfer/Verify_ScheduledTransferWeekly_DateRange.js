it("Verify_ScheduledTransferWeekly_DateRange", async function() {
  
  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("Weekly");
  SelectDateRangeAndConfirmTransfer("Weekly","normal");
},120000);