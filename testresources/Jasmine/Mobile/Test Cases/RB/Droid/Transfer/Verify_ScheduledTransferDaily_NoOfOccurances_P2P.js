it("Verify_ScheduledTransferDaily_NoOfOccurances_P2P", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("Daily");
  SelectNumberOfTransfersAndThenConfirmTransfer("Daily","P2P");
  
},120000);