it("Verify_ScheduledTransferHalfY_NoOfOccurances_SameBank", async function() {  

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequency("HalfY");
  SelectNumberOfTransfersAndThenConfirmTransfer("HalfY","P2P");
  
},180000);