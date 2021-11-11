it("Verify_ScheduledTransferWeekly_NoOfOccurances_SameBank", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("Weekly");
  SelectNumberOfTransfersAndThenConfirmTransfer("Weekly","P2P");
  
},180000);