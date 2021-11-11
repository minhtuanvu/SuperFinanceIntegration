it("Verify_ScheduledTransferHalfY_DateRange_P2P", async function() {
  
  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("HalfY");
  SelectDateRangeAndConfirmTransfer("HalfY","P2P");
},120000);