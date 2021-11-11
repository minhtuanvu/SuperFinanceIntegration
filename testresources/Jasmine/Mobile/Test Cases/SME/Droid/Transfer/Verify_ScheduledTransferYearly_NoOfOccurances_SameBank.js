it("Verify_ScheduledTransferYearly_NoOfOccurances_SameBank", async function() {  

  SearchInFromAndToScreen("P2P");
  kony.automation.playback.wait(15000);
  EnterAmount();
  SelectFrequency("Yearly");
  SelectNumberOfTransfersAndThenConfirmTransfer("Yearly","P2P");
  
},180000);