it("Verify_ScheduledTransferQTR_NoOfOccurances_P2P", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("QTR");
  SelectNumberOfTransfersAndThenConfirmTransfer("QTR","P2P");
  
},120000);