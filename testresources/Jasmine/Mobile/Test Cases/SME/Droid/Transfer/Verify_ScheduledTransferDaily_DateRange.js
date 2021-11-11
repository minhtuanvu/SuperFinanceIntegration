it("Verify_ScheduledTransferDaily_DateRange", async function() {
  
  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("Daily");
  SelectDateRangeAndConfirmTransfer("Daily","normal");
},180000);