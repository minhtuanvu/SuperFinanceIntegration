it("Verify_ScheduledTransferDaily_NoOfOccurances", async function() {  

  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("Daily");
  SelectNumberOfTransfersAndThenConfirmTransfer("Daily","normal");
  
},120000);