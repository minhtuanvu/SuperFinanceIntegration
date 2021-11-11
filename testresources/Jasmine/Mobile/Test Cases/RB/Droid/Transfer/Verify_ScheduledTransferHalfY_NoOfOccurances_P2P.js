it("Verify_ScheduledTransferHalfY_NoOfOccurances_P2P", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("HalfY");
  SelectNumberOfTransfersAndThenConfirmTransfer("HalfY","P2P");
  
},120000);