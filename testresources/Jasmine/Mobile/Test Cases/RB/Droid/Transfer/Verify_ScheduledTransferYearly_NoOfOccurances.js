it("Verify_ScheduledTransferYearly_NoOfOccurances", async function() {  

  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("Yearly");
  SelectNumberOfTransfersAndThenConfirmTransfer("Yearly","normal");
  
},120000);