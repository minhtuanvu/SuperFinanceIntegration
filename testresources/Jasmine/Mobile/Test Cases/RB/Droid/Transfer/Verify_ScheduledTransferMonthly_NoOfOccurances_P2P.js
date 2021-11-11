it("Verify_ScheduledTransferMonthly_NoOfOccurances_P2P", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("Monthly");
  SelectNumberOfTransfersAndThenConfirmTransfer("Monthly","P2P");
  
},120000);