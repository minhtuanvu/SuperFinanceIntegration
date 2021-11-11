it("Verify_ScheduledTransferDaily_NoOfOccurances_SameBank", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("Daily");
  SelectNumberOfTransfersAndThenConfirmTransfer("Daily","P2P");
  
},180000);