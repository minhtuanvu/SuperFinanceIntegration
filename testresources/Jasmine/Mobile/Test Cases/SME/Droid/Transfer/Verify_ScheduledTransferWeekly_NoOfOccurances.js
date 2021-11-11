it("Verify_ScheduledTransferWeekly_NoOfOccurances", async function() {  

  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("Weekly");
  SelectNumberOfTransfersAndThenConfirmTransfer("Weekly","normal");
  
},180000);