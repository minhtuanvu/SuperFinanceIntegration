it("Verify_ScheduledTransferQTR_NoOfOccurances_SameBank", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("QTR");
  SelectNumberOfTransfersAndThenConfirmTransfer("QTR","P2P");
  
},180000);