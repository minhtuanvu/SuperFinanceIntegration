it("Verify_ScheduledTransferHalfY_DateRange_SameBank", async function() {
  
  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("HalfY");
  SelectDateRangeAndConfirmTransfer("HalfY","P2P");
},180000);