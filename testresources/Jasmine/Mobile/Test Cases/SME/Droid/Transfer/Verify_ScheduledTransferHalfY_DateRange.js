it("Verify_ScheduledTransferHalfY_DateRange", async function() {
  
  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("HalfY");
  SelectDateRangeAndConfirmTransfer("HalfY","normal");
},180000);