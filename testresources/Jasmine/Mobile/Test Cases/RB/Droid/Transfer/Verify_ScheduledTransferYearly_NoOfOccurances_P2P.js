it("Verify_ScheduledTransferYearly_NoOfOccurances_P2P", async function() {  

  SearchInFromAndToScreen("P2P");
  kony.automation.playback.wait(15000);
  EnterAmount();
  SelectFrequency("Yearly");
  SelectNumberOfTransfersAndThenConfirmTransfer("Yearly","P2P");
  
},120000);