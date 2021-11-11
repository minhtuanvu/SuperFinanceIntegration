it("Verify_ScheduledTransferWeekly_NoOfOccurances_P2P", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("Weekly");
  SelectNumberOfTransfersAndThenConfirmTransfer("Weekly","P2P");
  
},120000);