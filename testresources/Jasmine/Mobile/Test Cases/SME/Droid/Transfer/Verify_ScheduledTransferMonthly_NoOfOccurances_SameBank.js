it("Verify_ScheduledTransferMonthly_NoOfOccurances_SameBank", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("Monthly");
  SelectNumberOfTransfersAndThenConfirmTransfer("Monthly","P2P");
  
},180000);