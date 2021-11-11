it("Verify_ScheduledTransferMonthly_DateRange", async function() {
  
  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("Monthly");
  SelectDateRangeAndConfirmTransfer("Monthly","normal");

},120000);